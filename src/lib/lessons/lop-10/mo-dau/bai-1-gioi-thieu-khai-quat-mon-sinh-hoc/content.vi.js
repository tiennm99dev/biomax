/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Đối tượng, các lĩnh vực nghiên cứu và mục tiêu của môn Sinh học; vai trò của sinh học trong đời sống; các ngành nghề liên quan; sinh học với phát triển bền vững và các vấn đề xã hội.',
  intro:
    'Đồ ăn, thức uống, quần áo hay viên thuốc em dùng mỗi ngày đều có liên quan đến sinh vật. Cả trí nhớ và năng khiếu của em cũng là kết quả tương tác giữa các gene với môi trường học tập. Vậy sinh học nghiên cứu điều gì, học môn này để làm gì, và nó mở ra những nghề nào? Bài mở đầu này giúp em trả lời các câu hỏi đó và thấy vì sao sinh học gắn liền với tương lai bền vững của xã hội.',
  objectives: [
    'Nêu được đối tượng và các lĩnh vực nghiên cứu của sinh học.',
    'Trình bày được mục tiêu của môn Sinh học và vai trò của sinh học trong đời sống.',
    'Kể được các ngành nghề liên quan đến sinh học, công việc và thành tựu của một số ngành.',
    'Nêu được khái niệm phát triển bền vững và vai trò của sinh học đối với phát triển bền vững.',
    'Phân tích được mối quan hệ giữa sinh học với đạo đức sinh học, kinh tế và công nghệ.',
  ],
  sections: [
    {
      heading: 'Đối tượng và lĩnh vực nghiên cứu của sinh học',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Đối tượng của sinh học',
          text: 'Sinh học là khoa học nghiên cứu về sự sống. Đối tượng nghiên cứu của sinh học là các sinh vật và các cấp độ tổ chức của thế giới sống, từ tế bào đến cơ thể, quần thể, quần xã và hệ sinh thái.',
        },
        {
          type: 'p',
          text: 'Sinh học có nhiều lĩnh vực nghiên cứu như sinh học tế bào, vi sinh vật học, di truyền học, sinh thái học, sinh lí học, hoá sinh học. Nghiên cứu cơ bản nhằm hiểu rõ thế giới sống vận hành như thế nào; nghiên cứu ứng dụng dùng các hiểu biết đó để giải quyết những việc cụ thể trong y dược, nông nghiệp, công nghiệp và bảo vệ môi trường.',
        },
        {
          type: 'table',
          caption: 'Các lĩnh vực sinh học em được học ở cấp Trung học phổ thông',
          head: ['Lớp', 'Nội dung chính'],
          rows: [
            ['$10$', 'Sinh học tế bào và thế giới vi sinh vật'],
            ['$11$', 'Sinh học cơ thể'],
            ['$12$', 'Di truyền học, tiến hoá và sinh thái học'],
          ],
        },
      ],
    },
    {
      heading: 'Mục tiêu và vai trò của môn Sinh học',
      blocks: [
        {
          type: 'p',
          text: 'Việc nghiên cứu sinh học nhằm tìm hiểu cấu trúc và cách vận hành của các cấp độ tổ chức sống, từ đó điều khiển, sử dụng tối ưu nguồn tài nguyên sinh học và phi sinh học (đất, nước, không khí, ánh sáng), phục vụ sự phát triển bền vững của xã hội.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Mục tiêu của môn học ở trường',
          text: 'Học môn Sinh học giúp em hình thành năng lực sinh học gồm ba mặt: nhận thức sinh học, tìm hiểu thế giới sống, và vận dụng kiến thức, kĩ năng vào thực tiễn.',
        },
        {
          type: 'list',
          items: [
            'Với sức khoẻ: góp phần giảm tỉ lệ bệnh tật, kéo dài tuổi thọ và cải thiện việc chăm sóc, điều trị bệnh.',
            'Với đời sống: giúp phát hiện giá trị dinh dưỡng của thực phẩm và các hoạt chất chữa bệnh trong sinh vật.',
            'Với kinh tế: tạo ra giống cây trồng, vật nuôi năng suất cao, góp phần phát triển nông, lâm, ngư nghiệp và công nghiệp.',
            'Với xã hội: hỗ trợ an ninh qua ngành pháp y và giúp giải quyết các vấn đề toàn cầu như ô nhiễm môi trường.',
            'Với mỗi người: giúp em hiểu và trân trọng cơ thể mình, biết gìn giữ sự đa dạng của sinh giới.',
          ],
        },
      ],
    },
    {
      heading: 'Các ngành nghề liên quan đến sinh học',
      blocks: [
        {
          type: 'p',
          text: 'Những hiểu biết về sinh học được ứng dụng trong rất nhiều ngành: y dược, pháp y, nông, lâm, ngư nghiệp, công nghệ thực phẩm, bảo vệ môi trường và cả chế tạo máy móc dựa theo sinh vật. Phần khám phá bên dưới là bản đồ các lĩnh vực này: bấm vào từng lĩnh vực để xem ứng dụng, thành tựu và công việc của từng nghề.',
        },
        {
          type: 'table',
          caption: 'Một số nhóm ngành nghề liên quan đến sinh học',
          head: ['Nhóm', 'Một số ngành nghề'],
          rows: [
            [
              'Giảng dạy, nghiên cứu',
              'Công nghệ sinh học, kĩ thuật sinh học, lâm học, kĩ thuật y sinh',
            ],
            ['Sản xuất', 'Trồng trọt, chăn nuôi, nuôi trồng thuỷ sản, chế biến gỗ, sản xuất thuốc'],
            [
              'Chăm sóc sức khoẻ',
              'Y đa khoa, dược học, điều dưỡng, y học cổ truyền, y tế cộng đồng',
            ],
            [
              'Hoạch định chính sách',
              'Quản lí y tế, quản lí bệnh viện, quản lí tài nguyên rừng, lâm nghiệp đô thị',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Triển vọng',
          text: 'Dân số già đi làm tăng nhu cầu về bác sĩ, điều dưỡng và chuyên gia vật lí trị liệu. Kĩ thuật y sinh cũng là ngành có triển vọng: kĩ sư chế tạo, bảo trì thiết bị y tế và thiết kế những giải pháp như bộ phận cơ thể nhân tạo.',
        },
      ],
    },
    {
      heading: 'Sinh học với phát triển bền vững',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phát triển bền vững',
          text: 'Theo Liên Hợp Quốc (năm $1987$), phát triển bền vững là sự phát triển đáp ứng được nhu cầu của xã hội hiện tại mà không làm ảnh hưởng đến khả năng đáp ứng nhu cầu của các thế hệ tương lai.',
        },
        {
          type: 'p',
          text: 'Sinh học góp phần phát triển bền vững theo nhiều cách: phổ biến kiến thức về bảo vệ đa dạng sinh vật và khai thác hợp lí tài nguyên thiên nhiên; đánh giá tác động của con người đến môi trường, đề xuất cách bảo tồn đa dạng sinh học và xử lí ô nhiễm; cung cấp cơ sở khoa học để chính phủ xây dựng chiến lược phát triển kinh tế phù hợp.',
        },
        {
          type: 'p',
          text: 'Mỗi hoạt động hằng ngày của em đều có ảnh hưởng. Hãy xếp các hoạt động sau vào đúng ô.',
        },
        { type: 'widget', name: 'ben-vung' },
      ],
    },
    {
      heading: 'Sinh học và các vấn đề xã hội',
      blocks: [
        {
          type: 'table',
          head: ['Quan hệ với', 'Biểu hiện', 'Ví dụ'],
          rows: [
            [
              'Đạo đức',
              'Nghiên cứu sinh học đặt ra các vấn đề đạo đức sinh học',
              'Ai có quyền biết thông tin giải trình tự gene của một người? Có nên nhân bản vô tính con người?',
            ],
            [
              'Kinh tế',
              'Ứng dụng đem lại giá trị kinh tế lớn nhưng cũng có rủi ro',
              'Giống năng suất cao có thể bị thiệt hại nặng khi điều kiện môi trường bất lợi',
            ],
            [
              'Công nghệ',
              'Nghiên cứu cơ bản giúp phát triển các công nghệ bắt chước sinh vật',
              'Cải tiến máy móc, robot dựa trên cách sinh vật vận động',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Mối lo ngại của xã hội',
          text: 'Thành tựu sinh học có thể bị dùng sai. Chẳng hạn, lựa chọn giới tính thai nhi làm mất cân bằng giới tính và tăng nạo phá thai; thông tin gene có thể bị dùng để từ chối bảo hiểm. Vì vậy, nghiên cứu và ứng dụng sinh học cần được cân nhắc cùng đạo đức và pháp luật.',
        },
      ],
    },
  ],
  explore: {
    title: 'Bản đồ ngành nghề sinh học',
    instruction:
      'Ở chế độ "Xem ngành nghề", bấm một lĩnh vực rồi bấm từng nghề để đọc mô tả công việc. Ở chế độ "Xếp công việc", đọc tình huống và chọn lĩnh vực phù hợp trên bản đồ.',
  },
  examples: [
    {
      problem:
        'Một nhóm nghiên cứu tìm ra loài vi khuẩn phân giải được một loại chất độc trong đất. Hãy cho biết việc này thể hiện đối tượng, mục tiêu và lĩnh vực ứng dụng nào của sinh học.',
      steps: [
        'Đối tượng: loài vi khuẩn là một sinh vật, thuộc cấp độ tổ chức sống.',
        'Mục tiêu: hiểu cách vi khuẩn vận hành (phân giải chất độc) để sử dụng nguồn tài nguyên sinh học này một cách tối ưu.',
        'Ứng dụng: xử lí ô nhiễm đất, thuộc lĩnh vực bảo vệ môi trường, phục vụ phát triển bền vững.',
      ],
      answer:
        'Đối tượng là sinh vật (vi khuẩn), mục tiêu là hiểu và sử dụng tối ưu tài nguyên sinh học, lĩnh vực ứng dụng là bảo vệ môi trường.',
    },
    {
      problem:
        'Một khu rừng tự nhiên có thể cho thu nhập ngay nếu chặt toàn bộ gỗ để bán. Vì sao cách làm này không phải là phát triển bền vững, và sinh học có thể đề xuất gì?',
      steps: [
        'Xét theo khái niệm: cách làm này đáp ứng nhu cầu hiện tại nhưng làm mất nguồn gỗ, nơi sống của sinh vật và khả năng giữ nước của rừng trong tương lai.',
        'Vậy nó ảnh hưởng đến khả năng đáp ứng nhu cầu của các thế hệ sau, nên không bền vững.',
        'Sinh học có thể cung cấp hiểu biết về tốc độ tái sinh của rừng để khai thác không vượt quá mức phục hồi, kết hợp trồng lại rừng và bảo tồn các loài quý hiếm.',
      ],
      answer:
        'Không bền vững vì làm giảm tài nguyên của thế hệ sau; cần khai thác hợp lí dựa trên hiểu biết sinh học về rừng.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Đối tượng nghiên cứu của sinh học là',
      options: [
        'các chất hoá học trong tự nhiên',
        'chỉ các loài động vật và thực vật quý hiếm',
        'các sinh vật và các cấp độ tổ chức của thế giới sống',
        'chỉ riêng cơ thể con người',
      ],
      answer: 2,
      hints: [
        'Sinh học là khoa học về sự sống.',
        'Vi khuẩn, cây xanh, con người hay một khu rừng đều có thể được nghiên cứu.',
      ],
      solution:
        'Sinh học nghiên cứu về sự sống, đối tượng là các sinh vật và các cấp độ tổ chức của thế giới sống.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi lớp với nội dung sinh học chính được học ở lớp đó.',
      left: ['Lớp $10$', 'Lớp $11$', 'Lớp $12$'],
      right: [
        'Sinh học tế bào và thế giới vi sinh vật',
        'Sinh học cơ thể',
        'Di truyền học, tiến hoá và sinh thái học',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: [
        'Chương trình đi theo các cấp độ tổ chức sống, từ nhỏ đến lớn.',
        'Lớp $10$ bắt đầu từ cấp độ nhỏ nhất có đủ đặc tính sống.',
      ],
      solution:
        'Lớp $10$: sinh học tế bào và vi sinh vật. Lớp $11$: sinh học cơ thể. Lớp $12$: di truyền học, tiến hoá và sinh thái học.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các nội dung thuộc mục tiêu nghiên cứu sinh học.',
      options: [
        'Tìm hiểu cấu trúc và cách vận hành của các cấp độ tổ chức sống',
        'Sử dụng tối ưu các nguồn tài nguyên sinh học và phi sinh học',
        'Phục vụ sự phát triển bền vững của xã hội',
        'Khai thác hết tài nguyên để có lợi ích kinh tế nhanh nhất',
      ],
      answers: [0, 1, 2],
      hints: ['Mục tiêu đi từ hiểu biết đến sử dụng.', 'Có một lựa chọn trái với ý "bền vững".'],
      solution:
        'Ba nội dung đầu là mục tiêu nghiên cứu sinh học. Khai thác hết tài nguyên làm mất khả năng đáp ứng nhu cầu của các thế hệ sau nên không phải mục tiêu của sinh học.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi thành tựu với lĩnh vực ứng dụng của nó.',
      left: [
        'Thuốc hướng đích nhờ giải trình tự gene',
        'Dùng DNA để xác định huyết thống',
        'Dùng vi khuẩn xử lí nước nhiễm kim loại nặng',
        'Sản xuất sữa chua nhờ vi sinh vật',
      ],
      right: ['Y dược', 'Pháp y', 'Bảo vệ môi trường', 'Công nghệ thực phẩm'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: [
        'Hãy hỏi: thành tựu này giúp ích cho việc gì?',
        'Pháp y phục vụ điều tra và xác định danh tính, quan hệ huyết thống.',
      ],
      solution:
        'Thuốc hướng đích thuộc y dược; xác định huyết thống bằng DNA thuộc pháp y; xử lí nước nhiễm kim loại nặng thuộc bảo vệ môi trường; sữa chua thuộc công nghệ thực phẩm.',
    },
    {
      type: 'choice',
      prompt: 'Phát biểu nào đúng về phát triển bền vững?',
      options: [
        'Chỉ bảo vệ môi trường, không cần phát triển kinh tế',
        'Đáp ứng nhu cầu hiện tại mà không làm ảnh hưởng đến khả năng đáp ứng nhu cầu của các thế hệ tương lai',
        'Tăng trưởng kinh tế nhanh nhất có thể trong thời gian ngắn',
        'Ngừng khai thác mọi nguồn tài nguyên thiên nhiên',
      ],
      answer: 1,
      hints: [
        'Khái niệm nhắc đến hai đối tượng: hiện tại và tương lai.',
        'Bền vững không có nghĩa là ngừng sử dụng tài nguyên, mà là sử dụng hợp lí.',
      ],
      solution:
        'Phát triển bền vững là sự phát triển đáp ứng nhu cầu của xã hội hiện tại mà không làm ảnh hưởng đến khả năng đáp ứng nhu cầu của các thế hệ tương lai.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các hoạt động góp phần phát triển bền vững.',
      options: [
        'Phân loại rác tại nguồn',
        'Xả nước thải chưa xử lí xuống sông',
        'Bảo vệ rừng đầu nguồn',
        'Dùng năng lượng Mặt Trời',
        'Săn bắt động vật hoang dã quá mức',
      ],
      answers: [0, 2, 3],
      hints: [
        'Với mỗi hoạt động, hãy hỏi: thế hệ sau còn được dùng tài nguyên này không?',
        'Những hoạt động gây ô nhiễm hoặc làm suy giảm loài không phù hợp.',
      ],
      solution:
        'Phân loại rác, bảo vệ rừng đầu nguồn và dùng năng lượng tái tạo giữ được tài nguyên cho tương lai. Xả thải chưa xử lí và săn bắt quá mức làm hại môi trường và đa dạng sinh học.',
    },
    {
      type: 'text',
      prompt:
        'Câu hỏi "Ai có quyền biết thông tin giải trình tự gene của một người?" thuộc về vấn đề gì của sinh học? (Điền một cụm gồm bốn tiếng)',
      accept: ['đạo đức sinh học'],
      hints: [
        'Câu hỏi này không hỏi về kĩ thuật, mà hỏi về việc làm như vậy có nên hay không.',
        'Cụm từ này kết thúc bằng tên của môn học.',
      ],
      solution:
        'Đây là vấn đề đạo đức sinh học: nghiên cứu sinh học đặt ra những câu hỏi về điều nên và không nên làm với thông tin và sự sống của con người.',
    },
    {
      type: 'choice',
      prompt: 'Ví dụ nào thể hiện rõ nhất mối quan hệ giữa sinh học và công nghệ?',
      options: [
        'Tranh luận về việc nhân bản vô tính con người',
        'Giống lúa mới bán được giá cao hơn',
        'Trồng thêm cây xanh trong sân trường',
        'Thiết kế robot dựa trên cách di chuyển của động vật',
      ],
      answer: 3,
      hints: [
        'Nghiên cứu sinh học cơ bản có thể làm nền cho các công nghệ bắt chước sinh vật.',
        'Có một lựa chọn nói về đạo đức, một lựa chọn nói về kinh tế.',
      ],
      solution:
        'Bắt chước nguyên lí vận hành của sinh vật để cải tiến máy móc là quan hệ giữa sinh học và công nghệ. Nhân bản vô tính người là vấn đề đạo đức; giống lúa giá cao là vấn đề kinh tế.',
    },
  ],
  takeaways: [
    'Sinh học nghiên cứu về sự sống; đối tượng là các sinh vật và các cấp độ tổ chức của thế giới sống.',
    'Mục tiêu: hiểu cấu trúc, cách vận hành của các cấp độ tổ chức sống để sử dụng tối ưu tài nguyên, phục vụ phát triển bền vững.',
    'Sinh học gắn với nhiều ngành nghề: y dược, pháp y, nông, lâm, ngư nghiệp, công nghệ thực phẩm, bảo vệ môi trường, chế tạo theo sinh vật.',
    'Phát triển bền vững đáp ứng nhu cầu hiện tại mà không làm ảnh hưởng đến khả năng đáp ứng nhu cầu của các thế hệ tương lai.',
    'Nghiên cứu sinh học gắn với đạo đức sinh học, kinh tế và công nghệ.',
  ],
};
