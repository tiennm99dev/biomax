/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Dự án theo nhóm: tìm hiểu các sản phẩm chuyển gene (cây trồng, vật nuôi, thuốc), thu thập thông tin và ý kiến đánh giá về lợi ích, rủi ro, triển vọng của công nghệ gene, rồi báo cáo và tranh luận trước lớp.',
  intro:
    'Ngô kháng sâu trên cánh đồng ở Việt Nam, insulin trong tủ thuốc của người bệnh đái tháo đường, gạo vàng giàu tiền vitamin A: đều là sản phẩm của công nghệ gene. Có người tin chúng sẽ giúp nuôi sống thế giới, có người lo ngại cho sức khoẻ và môi trường. Trong dự án này, nhóm em sẽ tự tìm bằng chứng và đưa ra đánh giá của mình.',
  objectives: [
    'Tìm hiểu được một số sản phẩm chuyển gene: gene được chuyển, cách tạo, công dụng.',
    'Thu thập, chọn lọc được thông tin từ nguồn tin cậy và ý kiến của người tiêu dùng.',
    'Đánh giá được lợi ích, rủi ro và triển vọng của công nghệ gene bằng lí lẽ có bằng chứng.',
    'Trình bày, tranh luận và tôn trọng ý kiến khác trong nhóm, trong lớp.',
  ],
  sections: [
    {
      heading: 'Sản phẩm chuyển gene',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Sinh vật biến đổi gene',
          text: 'Sinh vật biến đổi gene là sinh vật có hệ gene được con người làm biến đổi cho phù hợp với lợi ích của mình: đưa thêm gene lạ vào (sinh vật chuyển gene), làm biến đổi một gene sẵn có, hoặc loại bỏ, làm bất hoạt một gene. Sản phẩm chuyển gene là chính sinh vật đó hoặc các chất do nó tạo ra.',
        },
        {
          type: 'table',
          caption: 'Một số sản phẩm chuyển gene',
          head: ['Sản phẩm', 'Gene chuyển', 'Công dụng'],
          rows: [
            ['Bông, ngô Bt', 'Gene độc tố của vi khuẩn Bacillus thuringiensis', 'Kháng sâu hại'],
            [
              'Lúa gạo vàng',
              'Gene psy (từ ngô), crtI (từ vi khuẩn)',
              'Hạt chứa β-carotene (tiền vitamin A)',
            ],
            [
              'Cá hồi lớn nhanh',
              'Gene hormone sinh trưởng của cá hồi Chinook',
              'Rút ngắn thời gian nuôi',
            ],
            [
              'Dê, bò tiết protein người trong sữa',
              'Gene của người, điều khiển bởi đoạn điều hoà của gene protein sữa',
              'Sản xuất thuốc từ sữa',
            ],
            [
              'Insulin, HGH tái tổ hợp',
              'Gene của người chuyển vào vi khuẩn, nấm men',
              'Thuốc chữa bệnh',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Ở Việt Nam, một số giống ngô biến đổi gene kháng sâu, chịu thuốc diệt cỏ được phép trồng thương mại từ năm $2015$, sau khi được đánh giá an toàn đối với môi trường, đa dạng sinh học và an toàn làm thực phẩm, thức ăn chăn nuôi. Mỗi sản phẩm biến đổi gene đều phải qua các bước đánh giá đó trước khi được phép sử dụng.',
        },
      ],
    },
    {
      heading: 'Triển vọng của công nghệ gene',
      blocks: [
        {
          type: 'list',
          items: [
            'Y học: liệu pháp gene chữa bệnh di truyền; năm $2023$, liệu pháp đầu tiên dùng CRISPR-Cas9 được cấp phép để điều trị bệnh hồng cầu hình liềm. Vaccine, thuốc sinh học được sản xuất nhanh hơn, rẻ hơn.',
            'Nông nghiệp: chỉnh sửa gene tạo cây trồng chịu hạn, chịu mặn, kháng bệnh để thích ứng với biến đổi khí hậu; cây trồng giàu dinh dưỡng.',
            'Môi trường: vi sinh vật biến đổi gene phân giải chất thải, dầu mỏ, chất độc khó phân huỷ; sản xuất nhiên liệu sinh học.',
            'Công nghiệp: enzyme, vật liệu sinh học do vi sinh vật biến đổi gene sản xuất.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Những thách thức',
          text: 'An toàn sinh học (gene phát tán, sâu và cỏ dại kháng thuốc, ảnh hưởng đến đa dạng sinh học), đạo đức sinh học (chỉnh sửa gene ở người), kinh tế (phụ thuộc vào hạt giống thương mại) và tâm lí người tiêu dùng. Một đánh giá tốt phải nêu cả lợi ích lẫn rủi ro, kèm bằng chứng.',
        },
      ],
    },
    {
      heading: 'Tiến trình dự án',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: tìm hiểu ít nhất một sản phẩm chuyển gene và thu thập thông tin đánh giá về triển vọng của công nghệ gene. Mỗi nhóm $4$ đến $6$ bạn, thực hiện trong khoảng $2$ tuần.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Lập kế hoạch: chọn sản phẩm (cây trồng, vật nuôi, vi sinh vật hoặc thuốc), lập bảng phân công nhiệm vụ và thời hạn.',
            'Thu thập thông tin: gene được chuyển, cách tạo, công dụng, tình hình sử dụng ở Việt Nam và thế giới, các kết quả đánh giá an toàn. Ghi nguồn của mọi thông tin.',
            'Khảo sát ý kiến: lập phiếu hỏi khoảng $5$ câu, hỏi ít nhất $20$ người (bạn bè, gia đình, người bán hàng) về hiểu biết và thái độ với thực phẩm biến đổi gene; tổng hợp thành bảng, biểu đồ tỉ lệ phần trăm.',
            'Xử lí thông tin: lập bảng lợi ích – rủi ro, đối chiếu các nguồn, rút ra đánh giá của nhóm về triển vọng.',
            'Tạo sản phẩm: áp phích, bài trình chiếu, tập san hoặc video ngắn.',
            'Báo cáo và tranh luận trước lớp, bình chọn ý kiến, đánh giá chéo giữa các nhóm.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Chọn nguồn tin cậy',
          text: 'Ưu tiên sách giáo khoa, bài báo khoa học, trang của cơ quan quản lí nhà nước, viện nghiên cứu, tổ chức quốc tế (như FAO, WHO). Quảng cáo, bài đăng mạng xã hội không ghi nguồn cần được đối chiếu. Khi khảo sát, giải thích mục đích và không ghi tên người trả lời nếu họ không muốn.',
        },
      ],
    },
    {
      heading: 'Báo cáo và đánh giá',
      blocks: [
        {
          type: 'p',
          text: 'Báo cáo gồm: giới thiệu sản phẩm và cơ sở khoa học; kết quả khảo sát có bảng, biểu đồ; bảng lợi ích – rủi ro; đánh giá triển vọng và kiến nghị của nhóm; danh sách nguồn.',
        },
        {
          type: 'table',
          caption: 'Tiêu chí gợi ý để đánh giá (thang $10$ điểm)',
          head: ['Tiêu chí', 'Điểm tối đa', 'Mức tốt nhất'],
          rows: [
            ['Nội dung khoa học', '$4$', 'Đầy đủ, chính xác, có nguồn'],
            ['Thu thập và xử lí thông tin', '$2$', 'Số liệu khảo sát rõ, có bảng, biểu đồ'],
            ['Lập luận khi tranh luận', '$2$', 'Nêu cả lợi ích và rủi ro, có bằng chứng'],
            ['Trình bày, hợp tác', '$2$', 'Rõ ràng, đúng hạn, phân công hợp lí'],
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Bảng tranh luận lợi ích – rủi ro',
    instruction:
      'Chọn một sản phẩm chuyển gene. Xếp các lí lẽ vào cột lợi ích hoặc rủi ro, bình chọn ý kiến của em, nhập kết quả bình chọn của lớp rồi sao chép bản tóm tắt vào báo cáo của nhóm.',
  },
  examples: [
    {
      problem:
        'Nhóm khảo sát $40$ người: $14$ người sẵn sàng dùng thực phẩm biến đổi gene, $18$ người chỉ dùng khi có ghi nhãn rõ ràng, $8$ người không dùng. Tính tỉ lệ phần trăm từng nhóm ý kiến và nhận xét.',
      steps: [
        'Sẵn sàng dùng: $\\dfrac{14}{40} \\cdot 100\\% = 35\\%$.',
        'Chỉ dùng khi có nhãn: $\\dfrac{18}{40} \\cdot 100\\% = 45\\%$.',
        'Không dùng: $\\dfrac{8}{40} \\cdot 100\\% = 20\\%$. Kiểm tra: $35\\% + 45\\% + 20\\% = 100\\%$.',
        'Nhận xét: phần lớn ($80\\%$) chấp nhận dùng, nhưng nhóm đông nhất cần ghi nhãn rõ ràng để tự lựa chọn.',
      ],
      answer:
        '$35\\%$ sẵn sàng dùng, $45\\%$ cần ghi nhãn, $20\\%$ không dùng; việc ghi nhãn sản phẩm là điều nhiều người quan tâm nhất.',
    },
  ],
  practice: [
    {
      type: 'multi',
      prompt: 'Chọn tất cả các sản phẩm của công nghệ chuyển gene.',
      options: [
        'Insulin người do vi khuẩn E. coli sản xuất',
        'Ngô mang gene độc tố Bt kháng sâu',
        'Lúa gạo vàng giàu tiền vitamin A',
        'Giống lúa lai tạo bằng lai hữu tính hai giống lúa',
        'Cây lan nhân giống bằng nuôi cấy mô',
      ],
      answers: [0, 1, 2],
      hints: [
        'Sản phẩm chuyển gene phải mang gene được đưa vào từ loài khác bằng kĩ thuật DNA tái tổ hợp.',
      ],
      solution:
        'Insulin tái tổ hợp, ngô Bt, gạo vàng đều mang gene lạ. Lai hữu tính chỉ tổ hợp gene sẵn có, nuôi cấy mô giữ nguyên kiểu gene của cây mẹ.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi sản phẩm với gene được chuyển vào.',
      left: ['Bông Bt', 'Lúa gạo vàng', 'Cá hồi lớn nhanh', 'Insulin tái tổ hợp'],
      right: [
        'Gene độc tố của vi khuẩn Bacillus thuringiensis',
        'Gene tổng hợp β-carotene',
        'Gene hormone sinh trưởng',
        'Gene insulin người',
        'Gene kháng virus',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Có một gene thừa.', 'Tên sản phẩm gợi ý tính trạng mới mà gene mang lại.'],
      solution:
        'Bông Bt: gene độc tố Bt. Gạo vàng: gene tổng hợp β-carotene. Cá hồi lớn nhanh: gene hormone sinh trưởng. Insulin tái tổ hợp: gene insulin người.',
    },
    {
      type: 'number',
      prompt:
        'Trong $120$ người được khảo sát, $54$ người đồng ý rằng thực phẩm biến đổi gene cần được ghi nhãn. Tỉ lệ này là bao nhiêu phần trăm?',
      answer: 45,
      unit: '%',
      hints: ['Tỉ lệ $= \\dfrac{54}{120} \\cdot 100\\%$.'],
      solution: '$\\dfrac{54}{120} \\cdot 100\\% = 45\\%$.',
    },
    {
      type: 'choice',
      prompt:
        'Khi thu thập thông tin về độ an toàn của ngô biến đổi gene, nguồn nào đáng tin cậy nhất?',
      options: [
        'Báo cáo đánh giá an toàn của cơ quan quản lí nhà nước, viện nghiên cứu',
        'Bài đăng không ghi nguồn được chia sẻ nhiều trên mạng xã hội',
        'Tờ quảng cáo của công ty bán hạt giống',
        'Lời kể của một người bán hàng ở chợ',
      ],
      answer: 0,
      hints: ['Nguồn nào có quy trình kiểm tra và chịu trách nhiệm về kết quả?'],
      solution:
        'Báo cáo của cơ quan quản lí, viện nghiên cứu dựa trên thử nghiệm có kiểm soát và công khai phương pháp. Quảng cáo có lợi ích riêng; bài không nguồn và lời kể cần được đối chiếu.',
    },
    {
      type: 'multi',
      prompt:
        'Chọn tất cả các rủi ro cần đánh giá khi trồng cây biến đổi gene kháng sâu, chịu thuốc diệt cỏ.',
      options: [
        'Sâu hại xuất hiện cá thể kháng độc tố',
        'Cỏ dại trở nên kháng thuốc diệt cỏ',
        'Ảnh hưởng đến côn trùng có ích và đa dạng sinh học',
        'Cây chuyển gene biến thành một loài động vật',
        'Gene của cây đi vào hệ gene người ăn ngô',
      ],
      answers: [0, 1, 2],
      hints: [
        'Hãy nghĩ đến chọn lọc tự nhiên trong quần thể sâu và cỏ.',
        'Hai lựa chọn còn lại trái với hiểu biết sinh học.',
      ],
      solution:
        'Sâu kháng độc tố, cỏ kháng thuốc, tác động đến côn trùng có ích là các rủi ro thật cần theo dõi. Cây không biến thành động vật, và DNA trong thức ăn bị tiêu hoá chứ không đi vào hệ gene người.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước của dự án theo đúng trình tự.',
      items: [
        'Lập kế hoạch, phân công',
        'Thu thập thông tin và khảo sát ý kiến',
        'Xử lí thông tin, lập bảng lợi ích – rủi ro',
        'Tạo sản phẩm',
        'Báo cáo, tranh luận và đánh giá',
      ],
      answer: [0, 1, 2, 3, 4],
      hints: ['Phải có thông tin mới xử lí được, có sản phẩm mới báo cáo được.'],
      solution:
        'Lập kế hoạch → thu thập thông tin, khảo sát → xử lí thông tin → tạo sản phẩm → báo cáo, tranh luận, đánh giá.',
    },
  ],
  takeaways: [
    'Sản phẩm chuyển gene mang gene lạ được đưa vào bằng công nghệ gene: cây trồng kháng sâu, giàu dinh dưỡng; vật nuôi lớn nhanh; thuốc tái tổ hợp.',
    'Mỗi sản phẩm biến đổi gene phải được đánh giá an toàn trước khi sử dụng.',
    'Triển vọng lớn trong y học, nông nghiệp, môi trường, đi kèm thách thức về an toàn sinh học, đạo đức, kinh tế.',
    'Đánh giá công nghệ gene cần dựa trên nguồn tin cậy, nêu cả lợi ích lẫn rủi ro.',
  ],
};
