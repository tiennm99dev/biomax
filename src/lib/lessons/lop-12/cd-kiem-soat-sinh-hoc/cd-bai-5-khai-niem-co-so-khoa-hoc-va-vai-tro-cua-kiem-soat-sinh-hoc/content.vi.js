/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Kiểm soát sinh học dùng thiên địch, sản phẩm của sinh vật hoặc tăng sức đề kháng của vật chủ để làm giảm số lượng sinh vật gây hại. Bài nêu khái niệm, cơ sở sinh thái học và di truyền học, vai trò cùng ưu điểm, hạn chế của biện pháp này.',
  intro:
    'Ruộng lúa phun thuốc trừ sâu liên tục vẫn bị rầy nâu phá, trong khi ruộng bên cạnh để nhện, bọ xít mù xanh, ong kí sinh sinh sống lại ít rầy hơn. Vì sao thả hay giữ "kẻ thù tự nhiên" của sâu hại lại có thể bảo vệ mùa màng bền vững hơn thuốc hoá học?',
  objectives: [
    'Phát biểu được khái niệm kiểm soát sinh học.',
    'Trình bày được cơ sở sinh thái học của kiểm soát sinh học: các mối quan hệ đối kháng và hiện tượng khống chế sinh học.',
    'Nêu được cơ sở di truyền học của một số biện pháp kiểm soát sinh học.',
    'Phân tích được vai trò, ưu điểm và hạn chế của kiểm soát sinh học so với biện pháp hoá học.',
  ],
  sections: [
    {
      heading: 'Khái niệm kiểm soát sinh học',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Kiểm soát sinh học',
          text: 'Kiểm soát sinh học là biện pháp sử dụng sinh vật (thiên địch), các sản phẩm của sinh vật hoặc tăng cường sức đề kháng của vật chủ nhằm làm giảm số lượng cá thể của quần thể sinh vật gây hại cho cây trồng, vật nuôi, con người, hoặc tiêu diệt hoàn toàn quần thể đó.',
        },
        {
          type: 'p',
          text: 'Sinh vật gây hại gồm sâu hại, cỏ dại, nấm và vi khuẩn gây bệnh, động vật truyền bệnh như muỗi, chuột. Thiên địch là những sinh vật ăn thịt, kí sinh hoặc gây bệnh cho sinh vật gây hại, ví dụ bọ rùa ăn rệp, ong mắt đỏ kí sinh trứng sâu, nấm xanh gây bệnh cho rầy.',
        },
        {
          type: 'p',
          text: 'Mục tiêu thường gặp không phải là diệt sạch sinh vật gây hại mà là giữ mật độ của chúng ở mức thấp, dưới ngưỡng gây hại kinh tế, tức mức mà thiệt hại năng suất bắt đầu lớn hơn chi phí phòng trừ.',
        },
      ],
    },
    {
      heading: 'Cơ sở sinh thái học',
      blocks: [
        {
          type: 'p',
          text: 'Trong quần xã, các loài có quan hệ đối kháng: một loài bị hại, hoặc cả hai cùng bị hại. Kiểm soát sinh học tận dụng những quan hệ này.',
        },
        {
          type: 'table',
          caption: 'Các quan hệ đối kháng được dùng trong kiểm soát sinh học',
          head: ['Quan hệ', 'Đặc điểm', 'Ví dụ ứng dụng'],
          rows: [
            [
              'Vật ăn thịt – con mồi',
              'Loài ăn thịt bắt và giết con mồi làm thức ăn',
              'Bọ rùa ăn rệp; nhện, bọ xít mù xanh ăn rầy nâu; kiến vàng bắt sâu hại cam quýt',
            ],
            [
              'Kí sinh – vật chủ',
              'Loài kí sinh sống nhờ, lấy chất dinh dưỡng từ vật chủ, làm vật chủ yếu đi hoặc chết',
              'Ong mắt đỏ đẻ trứng vào trứng sâu đục thân; nấm, vi khuẩn, virus gây bệnh cho côn trùng',
            ],
            [
              'Cạnh tranh',
              'Các loài tranh giành nguồn sống, nơi ở',
              'Nấm Trichoderma chiếm chỗ, tranh dinh dưỡng với nấm gây bệnh vùng rễ',
            ],
            [
              'Ức chế – cảm nhiễm',
              'Một loài tiết chất làm hại loài khác',
              'Vi sinh vật vùng rễ tiết kháng sinh ức chế nấm, vi khuẩn gây bệnh cho cây',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Khống chế sinh học',
          text: 'Khống chế sinh học là hiện tượng số lượng cá thể của một quần thể bị kìm hãm ở một mức nhất định do tác động của các quần thể khác trong quần xã. Khi con mồi tăng, thiên địch có nhiều thức ăn nên tăng theo và ăn nhiều con mồi hơn; con mồi giảm thì thiên địch thiếu thức ăn và giảm theo. Nhờ đó số lượng hai loài dao động quanh một trạng thái cân bằng.',
        },
        {
          type: 'p',
          text: 'Mô phỏng dưới đây là một mô hình đơn giản: không có thiên địch, sâu hại sinh sản tới sức chứa của ruộng; thả thiên địch, sâu bị kìm quanh một mức thấp. Hãy thử thêm việc phun thuốc hoá học để thấy vì sao thuốc có thể làm sâu bùng phát trở lại.',
        },
      ],
    },
    {
      heading: 'Cơ sở di truyền học',
      blocks: [
        {
          type: 'list',
          items: [
            'Đột biến gây bất dục: chiếu xạ hoặc dùng hoá chất làm con đực bất dục nhưng vẫn giao phối được. Thả thật nhiều con đực bất dục, con cái giao phối với chúng sẽ đẻ trứng không nở, số lượng quần thể giảm dần qua các thế hệ (kĩ thuật côn trùng bất dục).',
            'Gene chống chịu: chọn, tạo giống cây trồng, vật nuôi mang gene kháng sâu bệnh, ví dụ giống lúa kháng rầy nâu, cây chuyển gene Bt tự tổng hợp protein độc với sâu.',
            'Biến đổi di truyền sinh vật gây hại hoặc vật trung gian truyền bệnh, ví dụ muỗi mang gene làm con non không sống tới tuổi trưởng thành.',
          ],
        },
      ],
    },
    {
      heading: 'Vai trò, ưu điểm và hạn chế',
      blocks: [
        {
          type: 'p',
          text: 'Kiểm soát sinh học là một phần quan trọng của quản lí dịch hại tổng hợp (IPM): bảo vệ năng suất cây trồng, vật nuôi; phòng bệnh cho người (kiểm soát muỗi truyền sốt xuất huyết, sốt rét); kiểm soát loài ngoại lai xâm lấn; góp phần phát triển nông nghiệp bền vững.',
        },
        {
          type: 'table',
          caption: 'So sánh với biện pháp hoá học',
          head: ['Ưu điểm', 'Hạn chế'],
          rows: [
            [
              'An toàn cho người, vật nuôi; không để lại dư lượng hoá chất trong nông sản, đất, nước',
              'Tác dụng chậm, cần thời gian để thiên địch, chế phẩm phát huy hiệu quả',
            ],
            [
              'Ít hại sinh vật có ích, giữ được cân bằng sinh thái và đa dạng sinh học',
              'Thường chỉ giảm mật độ, không diệt sạch sinh vật gây hại',
            ],
            [
              'Hiệu quả lâu dài; sinh vật gây hại khó hình thành tính kháng như kháng thuốc hoá học',
              'Kém hiệu quả khi dịch bùng phát mạnh; phụ thuộc thời tiết, điều kiện môi trường',
            ],
            [
              'Thiên địch tự duy trì, có thể giảm chi phí về lâu dài',
              'Chi phí ban đầu cao; nhập nội thiên địch sai có thể tạo loài xâm lấn',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Bài học từ cóc mía',
          text: 'Năm $1935$, Úc nhập cóc mía để diệt bọ cánh cứng hại mía. Cóc không diệt được bọ nhưng sinh sản rất nhanh, có độc, làm chết nhiều loài bản địa ăn phải và trở thành loài ngoại lai xâm lấn. Vì vậy trước khi nhập nội một thiên địch phải đánh giá kĩ tính chuyên hoá và rủi ro sinh thái của nó.',
        },
      ],
    },
    {
      heading: 'Nhiệm vụ: Quan sát thiên địch quanh em',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: tìm bằng chứng về quan hệ đối kháng và khống chế sinh học ở một khu vườn, ruộng hoặc công viên gần nhà. Làm theo nhóm $3$ đến $5$ bạn trong $2$ tuần.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Chuẩn bị: sổ ghi chép, kính lúp, điện thoại để chụp ảnh, thước dây; chọn $2$ khu vực, một nơi có phun thuốc trừ sâu và một nơi không phun (nếu có).',
            'Mỗi tuần $2$ lần, đánh dấu $5$ ô mỗi ô $1$ m², đếm số sâu hại (rệp, sâu ăn lá, rầy) và số thiên địch (bọ rùa, nhện, kiến, ong kí sinh) trong mỗi ô.',
            'Chụp ảnh các cảnh thiên địch đang ăn hoặc kí sinh sâu hại; ghi tên quan hệ (vật ăn thịt – con mồi, kí sinh – vật chủ).',
            'Tính mật độ trung bình của mỗi nhóm ở từng khu vực, vẽ đồ thị theo ngày.',
            'Hỏi người trồng về cách họ phòng trừ sâu hại và họ có biết, có bảo vệ thiên địch không.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Báo cáo gồm: mô tả khu vực, bảng số liệu và đồ thị mật độ, ảnh thiên địch có chú thích, nhận xét về sự khác nhau giữa nơi phun thuốc và nơi không phun, giải thích bằng hiện tượng khống chế sinh học, và đề xuất một cách bảo vệ thiên địch tại địa phương.',
        },
      ],
    },
  ],
  explore: {
    title: 'Sâu hại và thiên địch trên ruộng',
    instruction:
      'Chọn số thiên địch thả và ngày thả, quan sát đường mật độ sâu hại (đỏ) so với ngưỡng gây hại. Bật "Phun thuốc trừ sâu hoá học" để xem thuốc ảnh hưởng thế nào đến cả hai loài. Kéo "Xem ngày" để đọc mật độ từng ngày.',
  },
  examples: [
    {
      problem:
        'Năm $1888$, rệp sáp bông nhập vô tình từ Úc phá hoại nặng các vườn cam ở California (Mỹ). Người ta nhập từ Úc loài bọ rùa Rodolia cardinalis, chỉ ăn rệp sáp này. Chỉ sau khoảng $2$ năm, rệp không còn gây hại đáng kể. Giải thích kết quả theo cơ sở sinh thái học.',
      steps: [
        'Ở California, rệp sáp là loài mới đến, không có thiên địch nên tăng số lượng nhanh, vượt ngưỡng gây hại.',
        'Bọ rùa và rệp sáp có quan hệ vật ăn thịt – con mồi. Bọ rùa chuyên ăn rệp sáp nên nguồn thức ăn dồi dào giúp bọ rùa sinh sản nhanh.',
        'Khi rệp giảm, bọ rùa thiếu thức ăn và giảm theo; hai quần thể dao động quanh mức cân bằng mới với mật độ rệp thấp.',
      ],
      answer:
        'Bọ rùa khống chế sinh học quần thể rệp sáp: số lượng rệp bị kìm ở mức thấp, dưới ngưỡng gây hại, chứ không bị diệt hết.',
    },
    {
      problem:
        'Trên một ruộng có $60$ con rầy/m² và $8$ con nhện/m². Phun thuốc trừ sâu diệt $90\\%$ rầy và $90\\%$ nhện. Tính mật độ mỗi loài ngay sau khi phun và cho biết vì sao vài tuần sau rầy thường bùng phát trở lại.',
      steps: [
        'Rầy còn lại: $60 \\cdot (1 - 0{,}9) = 6$ con/m². Nhện còn lại: $8 \\cdot 0{,}1 = 0{,}8$ con/m².',
        'Rầy có vòng đời ngắn, sinh sản nhanh nên số lượng hồi phục nhanh.',
        'Nhện sinh sản chậm hơn và chỉ tăng khi có nhiều thức ăn, nên trong thời gian đó gần như không còn thiên địch kìm rầy.',
      ],
      answer:
        'Còn $6$ con rầy/m² và $0{,}8$ con nhện/m². Thuốc giết cả thiên địch nên rầy hồi phục nhanh hơn thiên địch và bùng phát trở lại.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Kiểm soát sinh học là biện pháp',
      options: [
        'dùng thiên địch, sản phẩm của sinh vật hoặc tăng sức đề kháng của vật chủ để giảm số lượng sinh vật gây hại',
        'dùng thuốc hoá học tổng hợp để tiêu diệt toàn bộ sinh vật gây hại',
        'dùng bẫy đèn, bắt bằng tay để loại bỏ sinh vật gây hại',
        'dùng phân bón hoá học để cây sinh trưởng nhanh hơn sâu hại',
      ],
      answer: 0,
      hints: ['Chú ý chữ "sinh học": công cụ kiểm soát là sinh vật hoặc sản phẩm của sinh vật.'],
      solution:
        'Kiểm soát sinh học dùng thiên địch, sản phẩm của sinh vật hoặc tăng sức đề kháng của vật chủ để làm giảm số lượng sinh vật gây hại. Thuốc hoá học là biện pháp hoá học; bẫy đèn, bắt tay là biện pháp cơ giới, vật lí.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi ví dụ với mối quan hệ sinh thái được vận dụng.',
      left: [
        'Bọ rùa ăn rệp hại cam',
        'Ong mắt đỏ đẻ trứng vào trứng sâu đục thân lúa',
        'Nấm Trichoderma chiếm chỗ, tranh dinh dưỡng với nấm gây thối rễ',
        'Vi sinh vật vùng rễ tiết kháng sinh ức chế vi khuẩn gây bệnh',
      ],
      right: [
        'Vật ăn thịt – con mồi',
        'Kí sinh – vật chủ',
        'Cạnh tranh',
        'Ức chế – cảm nhiễm',
        'Hội sinh',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: [
        'Hỏi: loài kia bị giết để ăn, bị sống nhờ, bị tranh nguồn sống hay bị đầu độc?',
        'Hội sinh không phải quan hệ đối kháng nên là lựa chọn thừa.',
      ],
      solution:
        'Bọ rùa ăn rệp: vật ăn thịt – con mồi. Ong mắt đỏ phát triển trong trứng sâu: kí sinh – vật chủ. Trichoderma tranh chỗ, tranh dinh dưỡng: cạnh tranh. Tiết kháng sinh ức chế loài khác: ức chế – cảm nhiễm.',
    },
    {
      type: 'choice',
      prompt: 'Hiện tượng khống chế sinh học là',
      options: [
        'số lượng cá thể của một quần thể bị kìm hãm ở một mức nhất định do tác động của các quần thể khác trong quần xã',
        'một loài bị tiêu diệt hoàn toàn bởi thiên địch của nó',
        'số lượng cá thể của quần thể tăng không giới hạn khi điều kiện thuận lợi',
        'các cá thể trong quần thể hỗ trợ nhau chống lại kẻ thù',
      ],
      answer: 0,
      hints: ['Trong mô phỏng, sau khi thả thiên địch, sâu hại có biến mất hẳn không?'],
      solution:
        'Khống chế sinh học là hiện tượng số lượng cá thể của một quần thể bị kìm hãm ở mức nhất định do quần thể khác tác động. Sâu không bị diệt hết; hai loài dao động quanh trạng thái cân bằng.',
    },
    {
      type: 'number',
      prompt:
        'Một ruộng có $50$ con sâu/m². Phun thuốc diệt $90\\%$ số sâu. Ngay sau khi phun, mật độ sâu còn lại là bao nhiêu?',
      answer: 5,
      unit: 'con/m²',
      hints: ['Số sâu còn sống chiếm $100\\% - 90\\% = 10\\%$.'],
      solution: 'Mật độ còn lại: $50 \\cdot 10\\% = 50 \\cdot 0{,}1 = 5$ con/m².',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các ưu điểm của kiểm soát sinh học so với biện pháp hoá học.',
      options: [
        'Không để lại dư lượng hoá chất độc trong nông sản',
        'Ít gây hại cho sinh vật có ích, giữ cân bằng sinh thái',
        'Sinh vật gây hại khó hình thành tính kháng',
        'Dập tắt dịch bùng phát chỉ trong một, hai ngày',
        'Luôn tiêu diệt hoàn toàn sinh vật gây hại',
      ],
      answers: [0, 1, 2],
      hints: [
        'Kiểm soát sinh học tác dụng nhanh hay chậm?',
        'Kiểm soát sinh học thường giảm mật độ hay diệt sạch?',
      ],
      solution:
        'Ưu điểm: an toàn, không dư lượng hoá chất; ít hại sinh vật có ích; khó sinh kháng. Kiểm soát sinh học tác dụng chậm và thường chỉ giảm mật độ, nên hai ý còn lại sai.',
    },
    {
      type: 'choice',
      prompt:
        'Vì sao không nên chỉ dùng kiểm soát sinh học khi dịch rầy nâu đang bùng phát trên diện rộng?',
      options: [
        'Vì thiên địch, chế phẩm sinh học cần thời gian mới phát huy tác dụng, không kìm kịp mật độ rầy đang tăng rất nhanh',
        'Vì thiên địch không ăn rầy nâu',
        'Vì kiểm soát sinh học làm rầy kháng thuốc nhanh hơn',
        'Vì kiểm soát sinh học gây ô nhiễm đất và nước',
      ],
      answer: 0,
      hints: ['Nhớ lại hạn chế về tốc độ tác dụng của kiểm soát sinh học.'],
      solution:
        'Kiểm soát sinh học tác dụng chậm và phụ thuộc điều kiện môi trường, nên khi dịch bùng phát mạnh cần kết hợp các biện pháp khác (theo quản lí dịch hại tổng hợp) để giảm nhanh mật độ.',
    },
    {
      type: 'choice',
      prompt:
        'Thả số lượng lớn con đực bất dục (do chiếu xạ) của một loài ruồi hại quả. Cơ sở khoa học của biện pháp này là',
      options: [
        'đột biến gây bất dục: con cái giao phối với con đực bất dục đẻ trứng không nở, quần thể giảm dần',
        'quan hệ vật ăn thịt – con mồi giữa con đực bất dục và con cái',
        'con đực bất dục tiết kháng sinh diệt ruồi cái',
        'con đực bất dục cạnh tranh thức ăn làm ruồi non chết đói',
      ],
      answer: 0,
      hints: ['Đây là cơ sở di truyền học, không phải quan hệ đối kháng giữa hai loài.'],
      solution:
        'Đây là kĩ thuật côn trùng bất dục, dựa trên đột biến gây bất dục. Con cái giao phối với đực bất dục không sinh được con, nên qua nhiều thế hệ số lượng quần thể giảm.',
    },
    {
      type: 'text',
      prompt:
        'Những sinh vật ăn thịt, kí sinh hoặc gây bệnh cho sinh vật gây hại, được dùng để kiểm soát chúng, gọi chung là gì?',
      accept: ['thiên địch', 'thien dich', 'kẻ thù tự nhiên'],
      hints: ['Hai chữ, nghĩa là "kẻ thù do trời sinh ra".'],
      solution: 'Đó là thiên địch, ví dụ bọ rùa, ong mắt đỏ, nhện, nấm xanh.',
    },
  ],
  takeaways: [
    'Kiểm soát sinh học dùng thiên địch, sản phẩm của sinh vật hoặc tăng sức đề kháng của vật chủ để giảm số lượng sinh vật gây hại.',
    'Cơ sở sinh thái học: các quan hệ đối kháng (vật ăn thịt – con mồi, kí sinh – vật chủ, cạnh tranh, ức chế – cảm nhiễm) và hiện tượng khống chế sinh học.',
    'Cơ sở di truyền học: đột biến gây bất dục, gene chống chịu, biến đổi di truyền sinh vật gây hại.',
    'Kiểm soát sinh học an toàn, bền vững, ít hại sinh vật có ích nhưng tác dụng chậm, kém hiệu quả khi dịch bùng phát và phải đánh giá rủi ro khi nhập nội thiên địch.',
  ],
};
