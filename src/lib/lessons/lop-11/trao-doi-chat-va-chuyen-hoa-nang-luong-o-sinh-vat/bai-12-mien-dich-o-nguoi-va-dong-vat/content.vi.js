/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Nguyên nhân gây bệnh, khái niệm miễn dịch, miễn dịch không đặc hiệu (hàng rào bảo vệ, thực bào, viêm, sốt, interferon, bổ thể) và miễn dịch đặc hiệu (dịch thể, tế bào), đáp ứng nguyên phát và thứ phát, vaccine, dị ứng và các bệnh do hệ miễn dịch suy giảm.',
  intro:
    'Mỗi ngày cơ thể em tiếp xúc với hàng tỉ vi khuẩn, virus trong không khí, thức ăn, nước uống, nhưng hiếm khi bị ốm. Vì sao người đã mắc bệnh thuỷ đậu một lần thì hầu như không mắc lại, và vì sao tiêm một mũi vaccine lại bảo vệ được em nhiều năm?',
  objectives: [
    'Nêu được khái niệm bệnh và các nguyên nhân gây bệnh.',
    'Nêu được khái niệm miễn dịch; phân biệt được miễn dịch không đặc hiệu và miễn dịch đặc hiệu.',
    'Trình bày được các tuyến phòng thủ: hàng rào bảo vệ, các đáp ứng không đặc hiệu, miễn dịch dịch thể và miễn dịch tế bào.',
    'Phân biệt được đáp ứng nguyên phát và thứ phát; giải thích được vai trò của vaccine.',
    'Giải thích được dị ứng và các bệnh do hệ miễn dịch suy giảm (HIV/AIDS, ung thư, tự miễn).',
  ],
  sections: [
    {
      heading: 'Bệnh và nguyên nhân gây bệnh',
      blocks: [
        {
          type: 'p',
          text: 'Bệnh là sự sai lệch về cấu trúc hoặc chức năng của một bộ phận, cơ quan hay hệ thống trong cơ thể, biểu hiện bằng những triệu chứng đặc trưng.',
        },
        {
          type: 'table',
          head: ['Nguyên nhân', 'Ví dụ'],
          rows: [
            ['Bên ngoài: tác nhân sinh học', 'Vi khuẩn, virus, vi nấm, giun sán'],
            [
              'Bên ngoài: tác nhân vật lí',
              'Va chạm, nhiệt độ cao, điện, ánh nắng mặt trời, tiếng ồn lớn',
            ],
            ['Bên ngoài: tác nhân hoá học', 'Acid, kiềm, độc tố của nấm, của cá nóc'],
            ['Bên trong', 'Yếu tố di truyền (bạch tạng, mù màu), thoái hoá theo tuổi'],
          ],
        },
      ],
    },
    {
      heading: 'Miễn dịch và các tuyến phòng thủ',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Miễn dịch',
          text: 'Miễn dịch là khả năng của cơ thể chống lại các tác nhân gây bệnh, đảm bảo cho cơ thể khoẻ mạnh. Hệ miễn dịch gồm các mô, cơ quan, tế bào bạch cầu và một số protein trong máu, tạo thành các tuyến phòng thủ: miễn dịch không đặc hiệu và miễn dịch đặc hiệu.',
        },
        {
          type: 'table',
          head: ['Đặc điểm', 'Miễn dịch không đặc hiệu', 'Miễn dịch đặc hiệu'],
          rows: [
            ['Tên khác', 'Bẩm sinh, tự nhiên', 'Thích ứng, thu được'],
            ['Có ở', 'Mọi động vật', 'Chỉ động vật có xương sống'],
            ['Hình thành', 'Có từ khi sinh ra', 'Trong đời sống cá thể, sau khi gặp kháng nguyên'],
            ['Tốc độ', 'Đáp ứng tức thời', 'Đáp ứng chậm hơn'],
            ['Đối tượng', 'Giống nhau với nhiều tác nhân', 'Đặc hiệu với từng tác nhân'],
            ['Trí nhớ miễn dịch', 'Không có', 'Có'],
          ],
        },
      ],
    },
    {
      heading: 'Miễn dịch không đặc hiệu',
      blocks: [
        {
          type: 'p',
          text: 'Hàng rào vật lí và hoá học: lớp biểu mô của da, của đường tiêu hoá, hô hấp, bài tiết, sinh dục cùng các dịch tiết (nước mắt, nước bọt, dịch nhầy, acid dạ dày) ngăn mầm bệnh xâm nhập.',
        },
        {
          type: 'list',
          items: [
            'Thực bào: đại thực bào và bạch cầu trung tính nuốt và tiêu hoá mầm bệnh. Tế bào giết tự nhiên phá huỷ tế bào nhiễm virus và tế bào khối u; bạch cầu ưa acid tiết độc tố diệt giun sán.',
            'Viêm: tế bào bị tổn thương tiết chất hoá học kích thích dưỡng bào và bạch cầu ưa kiềm giải phóng histamin. Histamin làm mạch máu dãn, tăng tính thấm, đưa nhiều bạch cầu tới vùng tổn thương để thực bào, ngăn mầm bệnh lan rộng; vùng viêm sưng, nóng, đỏ, đau.',
            'Sốt: đại thực bào tiết chất gây sốt tác động lên trung khu điều hoà thân nhiệt ở vùng dưới đồi. Sốt ức chế vi khuẩn, virus, làm gan giữ sắt (vi khuẩn cần sắt để sinh sản) và tăng thực bào. Sốt trên $39\\,^\\circ\\mathrm{C}$ có thể gây co giật, hôn mê, cần hạ sốt.',
            'Peptide và protein kháng bệnh: tế bào nhiễm virus tiết interferon kích thích tế bào lân cận chống lại virus; khoảng $30$ loại protein của hệ bổ thể được hoạt hoá khi gặp bề mặt vi khuẩn, làm tan tế bào vi khuẩn.',
          ],
        },
      ],
    },
    {
      heading: 'Miễn dịch đặc hiệu',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Kháng nguyên và kháng thể',
          text: 'Kháng nguyên là phân tử lạ (thường là protein, polypeptide, polysaccharide) có khả năng kích thích cơ thể tạo đáp ứng miễn dịch đặc hiệu; nó có trên mầm bệnh, tế bào lạ (mô cấy ghép), trong độc tố vi khuẩn, nọc rắn. Mỗi kháng nguyên mang các quyết định kháng nguyên (epitope) để tế bào miễn dịch và kháng thể nhận ra. Kháng thể (immunoglobulin, Ig) là protein do tương bào tiết ra, gắn đặc hiệu với kháng nguyên tương ứng như chìa khoá với ổ khoá.',
        },
        {
          type: 'p',
          text: 'Tế bào B và tế bào T có các thụ thể kháng nguyên trên màng; mọi thụ thể trên một tế bào giống nhau nên mỗi tế bào chỉ nhận ra một loại kháng nguyên.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Tế bào trình diện kháng nguyên (đại thực bào, tế bào B, tế bào chia nhánh) bắt giữ, xử lí mầm bệnh rồi trình diện kháng nguyên cho tế bào T hỗ trợ, làm tế bào này hoạt hoá.',
            'Tế bào T hỗ trợ phân chia thành dòng tế bào T hỗ trợ hoạt hoá và tế bào T hỗ trợ nhớ, tiết cytokine.',
            'Miễn dịch dịch thể: cytokine hoạt hoá tế bào B; tế bào B tăng sinh, biệt hoá thành tương bào tiết kháng thể vào máu, và tế bào B nhớ. Kháng thể gắn vào kháng nguyên trong máu, dịch mô để vô hiệu hoá và tiêu diệt mầm bệnh.',
            'Miễn dịch tế bào: cytokine cùng tế bào trình diện kháng nguyên hoạt hoá tế bào T độc; tế bào T độc phân chia thành tế bào T độc hoạt hoá và tế bào T độc nhớ. Tế bào T độc tiết chất độc tiêu diệt tế bào đã bị nhiễm mầm bệnh.',
          ],
        },
        {
          type: 'table',
          head: ['Tiêu chí', 'Đáp ứng nguyên phát', 'Đáp ứng thứ phát'],
          rows: [
            ['Khi nào', 'Lần đầu tiếp xúc kháng nguyên', 'Tiếp xúc lại cùng kháng nguyên'],
            ['Tế bào nhớ', 'Được hình thành', 'Được kích hoạt, nhanh chóng tăng sinh'],
            ['Tốc độ', 'Chậm, khoảng $7$ đến $10$ ngày', 'Nhanh, khoảng $2$ đến $3$ ngày'],
            ['Lượng kháng thể, tế bào', 'Ít, duy trì ở mức thấp', 'Nhiều, duy trì ở mức cao'],
            ['Hiệu quả', 'Thấp hơn', 'Cao; người ít khi phát bệnh hoặc bệnh rất nhẹ'],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Vaccine',
          text: 'Vaccine (vắc-xin) là chế phẩm chứa kháng nguyên đã được xử lí, không còn khả năng gây bệnh: vi khuẩn, virus đã chết hoặc giảm độc lực, protein tái tổ hợp, gene hoặc RNA mã hoá protein của mầm bệnh. Tiêm vaccine chủ động tạo đáp ứng nguyên phát và tế bào nhớ, nên khi gặp mầm bệnh thật, cơ thể có ngay đáp ứng thứ phát nhanh, mạnh.',
        },
        { type: 'widget', name: 'dap-ung' },
      ],
    },
    {
      heading: 'Miễn dịch ở động vật',
      blocks: [
        {
          type: 'p',
          text: 'Miễn dịch không đặc hiệu có ở tất cả các loài động vật; động vật không xương sống chỉ có miễn dịch không đặc hiệu (lớp vỏ, chất nhầy, tế bào thực bào, các peptide kháng khuẩn). Động vật có xương sống có cả miễn dịch không đặc hiệu và miễn dịch đặc hiệu, nhờ tế bào B, tế bào T và kháng thể. Vì vậy vật nuôi như gà, lợn, bò cũng được tiêm vaccine để phòng bệnh.',
        },
      ],
    },
    {
      heading: 'Dị ứng và bệnh do hệ miễn dịch suy giảm',
      blocks: [
        {
          type: 'callout',
          tone: 'warning',
          title: 'Dị ứng',
          text: 'Dị ứng là phản ứng quá mức của cơ thể với một kháng nguyên (dị nguyên) như phấn hoa, bào tử nấm, lông động vật, nọc ong, hải sản, sữa, một số thuốc kháng sinh; nó mang tính cá thể. Histamin gây dãn mạch, tăng tính thấm, ngứa, hắt hơi, sổ mũi, co thắt phế quản. Sốc phản vệ là khi histamin giải phóng ồ ạt, huyết áp tụt nhanh, não và tim thiếu $\\mathrm{O_2}$, có thể tử vong sau vài phút.',
        },
        {
          type: 'list',
          items: [
            'HIV/AIDS: virus HIV xâm nhập và tiêu diệt tế bào T hỗ trợ, làm suy giảm cả miễn dịch dịch thể và miễn dịch tế bào; người bệnh dễ mắc các bệnh cơ hội như lao, viêm phổi, viêm não, tiêu chảy, ung thư.',
            'Ung thư: một nhóm tế bào phân chia không kiểm soát tạo khối u ác tính, xâm lấn và di căn; khi di căn vào tuỷ xương, nó cản trở việc sinh tế bào máu, trong đó có bạch cầu, làm miễn dịch suy yếu.',
            'Bệnh tự miễn: hệ miễn dịch không phân biệt được kháng nguyên lạ với tế bào của chính cơ thể và tấn công chúng, ví dụ tế bào T phá huỷ tế bào tiết insulin của tuyến tuỵ gây tiểu đường type 1.',
          ],
        },
        {
          type: 'p',
          text: 'Phòng bệnh: tiêm vaccine đầy đủ, giữ vệ sinh cá nhân và môi trường, ăn uống đủ chất, luyện tập thể dục, ngủ đủ giấc, tránh tiếp xúc với dị nguyên đã biết, không dùng chung bơm kim tiêm.',
        },
      ],
    },
  ],
  explore: {
    title: 'Trò chơi phòng thủ cơ thể',
    instruction:
      'Mỗi lượt có một mầm bệnh tấn công. Đọc xem nó đang ở đâu (ngoài da, trong mô, trong máu hay đã vào trong tế bào) rồi chọn lực lượng phòng thủ chặn được nó, ở tuyến không đặc hiệu hay tuyến đặc hiệu. Chọn sai, em sẽ biết lực lượng đó làm gì và thử lại.',
  },
  examples: [
    {
      problem:
        'Bạn Nam bị gai đâm vào tay. Vài giờ sau, chỗ bị đâm sưng, nóng, đỏ và đau. Giải thích hiện tượng.',
      steps: [
        'Gai làm rách da, phá vỡ hàng rào bảo vệ; vi khuẩn lọt vào mô.',
        'Tế bào bị tổn thương tiết chất hoá học kích thích dưỡng bào giải phóng histamin.',
        'Histamin làm mạch máu dãn (đỏ, nóng), tăng tính thấm, dịch và bạch cầu thoát ra mô (sưng, đau).',
        'Bạch cầu trung tính và đại thực bào thực bào vi khuẩn, ngăn chúng lan rộng.',
      ],
      answer:
        'Đó là phản ứng viêm, một đáp ứng không đặc hiệu giúp đưa bạch cầu đến tiêu diệt vi khuẩn tại chỗ.',
    },
    {
      problem:
        'Nhờ đâu một em bé đã tiêm vaccine sởi khi gặp virus sởi thường không bị bệnh, còn em bé chưa tiêm thì dễ bị bệnh?',
      steps: [
        'Vaccine chứa kháng nguyên của virus sởi đã mất khả năng gây bệnh, kích thích đáp ứng nguyên phát và tạo tế bào B nhớ, tế bào T nhớ.',
        'Khi gặp virus thật, tế bào nhớ nhanh chóng tăng sinh, tạo đáp ứng thứ phát sau khoảng $2$ đến $3$ ngày với lượng kháng thể lớn.',
        'Kháng thể và tế bào T độc tiêu diệt virus trước khi chúng kịp nhân lên nhiều.',
        'Em bé chưa tiêm chỉ có đáp ứng nguyên phát, mất khoảng $7$ đến $10$ ngày; virus kịp nhân lên và gây bệnh.',
      ],
      answer: 'Nhờ trí nhớ miễn dịch do vaccine tạo ra, cơ thể có đáp ứng thứ phát nhanh và mạnh.',
    },
  ],
  practice: [
    {
      type: 'multi',
      prompt: 'Những đặc điểm nào thuộc miễn dịch đặc hiệu?',
      options: [
        'Chỉ có ở động vật có xương sống',
        'Có trí nhớ miễn dịch',
        'Đặc hiệu với từng loại kháng nguyên',
        'Đáp ứng tức thời ngay từ lần đầu',
        'Có ở mọi loài động vật',
      ],
      answers: [0, 1, 2],
      hints: ['Miễn dịch đặc hiệu còn gọi là miễn dịch thu được.'],
      solution:
        'Miễn dịch đặc hiệu chỉ có ở động vật có xương sống, hình thành trong đời sống, đặc hiệu với từng kháng nguyên, có trí nhớ; nó đáp ứng chậm hơn miễn dịch không đặc hiệu.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi tế bào hoặc chất với vai trò của nó.',
      left: ['Tương bào', 'Tế bào T độc', 'Tế bào T hỗ trợ', 'Đại thực bào'],
      right: [
        'Tiết kháng thể vào máu',
        'Tiêu diệt tế bào đã bị nhiễm mầm bệnh',
        'Tiết cytokine hoạt hoá tế bào B và T độc',
        'Thực bào và trình diện kháng nguyên',
        'Tiết histamin gây viêm',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Tương bào do tế bào B biệt hoá thành.'],
      solution:
        'Tương bào tiết kháng thể; T độc tiêu diệt tế bào nhiễm; T hỗ trợ tiết cytokine; đại thực bào thực bào và trình diện kháng nguyên.',
    },
    {
      type: 'choice',
      prompt: 'Virus đã vào bên trong tế bào cơ thể chủ yếu bị loại trừ bởi',
      options: [
        'tế bào T độc tiêu diệt tế bào bị nhiễm',
        'kháng thể trong máu',
        'lớp sừng của da',
        'acid trong dạ dày',
      ],
      answer: 0,
      hints: ['Kháng thể có đi vào được bên trong tế bào không?'],
      solution:
        'Kháng thể chỉ gắn với kháng nguyên ngoài tế bào; tế bào nhiễm virus bị tế bào T độc (miễn dịch tế bào) và tế bào giết tự nhiên tiêu diệt.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước của miễn dịch dịch thể.',
      items: [
        'Tế bào B được hoạt hoá, tăng sinh và biệt hoá',
        'Đại thực bào bắt giữ, xử lí và trình diện kháng nguyên',
        'Tương bào tiết kháng thể gắn với kháng nguyên',
        'Tế bào T hỗ trợ hoạt hoá, tiết cytokine',
      ],
      answer: [1, 3, 0, 2],
      hints: ['Tế bào T hỗ trợ phải được hoạt hoá trước khi tiết cytokine kích thích tế bào B.'],
      solution:
        'Trình diện kháng nguyên, T hỗ trợ hoạt hoá tiết cytokine, tế bào B hoạt hoá biệt hoá thành tương bào, tương bào tiết kháng thể.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao người nhiễm HIV dễ mắc các bệnh cơ hội?',
      options: [
        'HIV tiêu diệt tế bào T hỗ trợ, làm suy giảm cả miễn dịch dịch thể và tế bào',
        'HIV phá huỷ lớp da',
        'HIV làm tăng số lượng kháng thể quá mức',
        'HIV gây dị ứng với mọi thức ăn',
      ],
      answer: 0,
      hints: ['Tế bào nào hoạt hoá cả tế bào B và tế bào T độc?'],
      solution:
        'Tế bào T hỗ trợ hoạt hoá cả tế bào B và T độc; HIV tiêu diệt chúng nên hai nhánh miễn dịch đặc hiệu đều suy yếu, mầm bệnh thông thường cũng gây bệnh.',
    },
    {
      type: 'choice',
      prompt:
        'Lần đầu tiếp xúc kháng nguyên, đáp ứng miễn dịch đặc hiệu xuất hiện sau khoảng bao lâu?',
      options: ['$7$ đến $10$ ngày', '$2$ đến $3$ ngày', 'Vài phút', 'Vài tháng'],
      answer: 0,
      hints: ['Đáp ứng thứ phát mất khoảng $2$ đến $3$ ngày; đáp ứng nguyên phát chậm hơn.'],
      solution:
        'Đáp ứng nguyên phát chậm, khoảng $7$ đến $10$ ngày; đáp ứng thứ phát nhờ tế bào nhớ chỉ khoảng $2$ đến $3$ ngày.',
    },
    {
      type: 'choice',
      prompt: 'Chất nào gây ra phần lớn triệu chứng của dị ứng như ngứa, hắt hơi, sổ mũi?',
      options: ['Histamin', 'Insulin', 'Interferon', 'Kháng thể của mẹ'],
      answer: 0,
      hints: ['Đó cũng là chất gây dãn mạch trong phản ứng viêm.'],
      solution:
        'Histamin do dưỡng bào và bạch cầu ưa kiềm giải phóng gây dãn mạch, tăng tính thấm, ngứa, hắt hơi, sổ mũi, co thắt phế quản.',
    },
    {
      type: 'multi',
      prompt: 'Những thành phần nào có thể có trong vaccine?',
      options: [
        'Virus đã chết hoặc giảm độc lực',
        'Protein tái tổ hợp của mầm bệnh',
        'RNA mã hoá protein của mầm bệnh',
        'Mầm bệnh còn nguyên độc lực',
        'Kháng sinh tiêu diệt vi khuẩn',
      ],
      answers: [0, 1, 2],
      hints: ['Vaccine chứa kháng nguyên nhưng không được gây bệnh.'],
      solution:
        'Vaccine chứa kháng nguyên đã xử lí không còn khả năng gây bệnh: mầm bệnh chết hoặc giảm độc lực, protein tái tổ hợp, gene hoặc RNA mã hoá protein của mầm bệnh.',
    },
    {
      type: 'choice',
      prompt: 'Giun đất bị vi khuẩn xâm nhập sẽ được bảo vệ bằng hình thức nào?',
      options: [
        'Chỉ miễn dịch không đặc hiệu',
        'Chỉ miễn dịch đặc hiệu',
        'Cả miễn dịch dịch thể và tế bào',
        'Tiêm vaccine',
      ],
      answer: 0,
      hints: ['Giun đất có xương sống không?'],
      solution:
        'Giun đất là động vật không xương sống, chỉ có miễn dịch không đặc hiệu; miễn dịch đặc hiệu chỉ có ở động vật có xương sống.',
    },
    {
      type: 'choice',
      prompt: 'Khi bị sốt nhẹ, sốt có lợi cho cơ thể vì',
      options: [
        'ức chế vi khuẩn, virus, gan giữ sắt và tăng thực bào',
        'làm tế bào B ngừng tạo kháng thể',
        'làm da dày lên ngăn mầm bệnh',
        'giết chết mọi tế bào cơ thể bị nhiễm',
      ],
      answer: 0,
      hints: ['Vi khuẩn cần sắt để sinh sản.'],
      solution:
        'Sốt ức chế sự sinh sản của vi khuẩn, virus, làm gan giữ sắt và tăng hoạt động thực bào; nhưng sốt trên $39\\,^\\circ\\mathrm{C}$ nguy hiểm, cần hạ sốt.',
    },
  ],
  takeaways: [
    'Miễn dịch là khả năng cơ thể chống lại tác nhân gây bệnh; có miễn dịch không đặc hiệu (bẩm sinh, mọi động vật) và đặc hiệu (thu được, chỉ động vật có xương sống).',
    'Miễn dịch không đặc hiệu: hàng rào da, niêm mạc, dịch tiết; thực bào, viêm, sốt, interferon, bổ thể.',
    'Miễn dịch đặc hiệu: tế bào T hỗ trợ hoạt hoá tế bào B (dịch thể, kháng thể) và tế bào T độc (tế bào, tiêu diệt tế bào nhiễm).',
    'Đáp ứng thứ phát nhờ tế bào nhớ nhanh và mạnh hơn nguyên phát; vaccine chủ động tạo trí nhớ miễn dịch.',
    'Dị ứng là phản ứng quá mức; HIV tiêu diệt tế bào T hỗ trợ; bệnh tự miễn là hệ miễn dịch tấn công chính cơ thể.',
  ],
};
