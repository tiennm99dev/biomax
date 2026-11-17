/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Dự án theo nhóm: điều tra thực tế một lĩnh vực sinh thái nhân văn ở địa phương (nông nghiệp sinh thái, khu dân cư xanh, bảo tồn và du lịch sinh thái, ứng phó biến đổi khí hậu), xử lí số liệu, lập bản đồ quan sát và đề xuất giải pháp.',
  intro:
    'Rác ở khu phố em được xử lí thế nào? Cánh đồng gần nhà còn phun nhiều thuốc trừ sâu không? Địa phương em có loài cây, con vật quý nào cần bảo vệ? Trong dự án này, nhóm em sẽ tự đi tìm câu trả lời bằng số liệu thật và đề xuất cách làm cho quan hệ giữa con người và tự nhiên ở quê hương hài hoà hơn.',
  objectives: [
    'Lập được kế hoạch điều tra một lĩnh vực sinh thái nhân văn tại địa phương.',
    'Thu thập thông tin bằng quan sát, phỏng vấn, phiếu khảo sát; xử lí được số liệu thành bảng, tỉ lệ phần trăm, biểu đồ và bản đồ.',
    'Đánh giá được thực trạng theo ba mặt kinh tế, xã hội, môi trường và đề xuất được giải pháp phù hợp với địa phương.',
    'Viết và trình bày được báo cáo dự án.',
  ],
  sections: [
    {
      heading: 'Mục tiêu và đề tài',
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: vận dụng kiến thức về sinh thái nhân văn để tìm hiểu thực trạng một lĩnh vực ở địa phương, phát hiện điểm tích cực, điểm cần cải thiện và đề xuất giải pháp hướng tới phát triển bền vững. Mỗi nhóm chọn một đề tài:',
        },
        {
          type: 'list',
          items: [
            'Nông nghiệp sinh thái: các mô hình VAC, lúa – cá, nông nghiệp hữu cơ; tình hình sử dụng phân bón, thuốc bảo vệ thực vật; cách xử lí vỏ chai, bao bì thuốc.',
            'Khu dân cư, đô thị xanh: diện tích cây xanh, mặt nước; thu gom, phân loại rác; điểm rác tự phát; ô nhiễm không khí, tiếng ồn.',
            'Bảo tồn và du lịch sinh thái: các loài quý hiếm, khu bảo tồn, cảnh quan; hoạt động du lịch và tác động của nó; hiểu biết của người dân.',
            'Ứng phó biến đổi khí hậu: các hiện tượng thời tiết cực đoan ở địa phương; việc dùng năng lượng mặt trời, biogas; đốt rác, đốt rơm rạ; trồng rừng, cây xanh.',
          ],
        },
      ],
    },
    {
      heading: 'Tiến trình dự án',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Chia lớp thành các nhóm $4$ đến $6$ học sinh, thực hiện trong $3$ đến $4$ tuần. Chuẩn bị: sổ ghi chép, phiếu khảo sát in sẵn, điện thoại để chụp ảnh, bản đồ hoặc sơ đồ địa phương (vẽ tay hoặc in từ bản đồ trực tuyến).',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Xác định vấn đề: nhóm chọn đề tài, nêu câu hỏi cần trả lời, phạm vi (thôn, xã, phường) và đối tượng điều tra.',
            'Lập kế hoạch: phân công nhiệm vụ, thời gian, địa điểm; soạn phiếu khảo sát $5$ đến $10$ câu, câu hỏi ngắn, rõ, có sẵn các lựa chọn.',
            'Thu thập thông tin: quan sát và chụp ảnh, đánh dấu các điểm quan sát lên bản đồ; phỏng vấn cán bộ địa phương, người dân; phát phiếu cho ít nhất $30$ người; đọc tài liệu từ nguồn tin cậy.',
            'Xử lí thông tin: kiểm tra phiếu, đếm số người chọn mỗi câu trả lời, tính tỉ lệ phần trăm, vẽ biểu đồ; tổng hợp bản đồ quan sát.',
            'Phân tích và đề xuất: đánh giá thực trạng theo ba mặt kinh tế, xã hội, môi trường; chỉ ra nguyên nhân; đề xuất giải pháp khả thi cho người dân, nhà trường, chính quyền.',
            'Báo cáo, trình bày trước lớp; tự đánh giá và đánh giá chéo giữa các nhóm.',
          ],
        },
        {
          type: 'table',
          caption: 'Gợi ý kế hoạch của nhóm điều tra rác thải khu dân cư',
          head: ['Công việc', 'Thời gian', 'Người phụ trách', 'Sản phẩm'],
          rows: [
            ['Soạn và in phiếu khảo sát', 'Tuần $1$', 'Cả nhóm', 'Phiếu $8$ câu hỏi'],
            [
              'Quan sát, chụp ảnh, đánh dấu điểm rác tự phát',
              'Tuần $2$',
              '$2$ bạn',
              'Bản đồ quan sát, ảnh',
            ],
            [
              'Phỏng vấn tổ trưởng dân phố, phát phiếu cho các hộ',
              'Tuần $2$',
              '$3$ bạn',
              'Phiếu đã điền',
            ],
            [
              'Xử lí số liệu, vẽ biểu đồ, viết báo cáo',
              'Tuần $3$',
              'Cả nhóm',
              'Báo cáo, bài trình chiếu',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Trung thực và an toàn',
          text: 'Ghi đúng số liệu thu được, không tự thêm bớt phiếu; ghi rõ nguồn mọi thông tin, hình ảnh. Xin phép trước khi phỏng vấn, chụp ảnh, ghi âm và giữ kín thông tin cá nhân của người trả lời. Đi theo nhóm; không tự ý vào khu vực nguy hiểm, không chạm vào bao bì thuốc bảo vệ thực vật hay rác thải nguy hại.',
        },
      ],
    },
    {
      heading: 'Báo cáo và đánh giá',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Tên dự án, tên các thành viên, địa bàn điều tra.',
            'Đặt vấn đề: lí do chọn đề tài, liên hệ với khái niệm sinh thái nhân văn và phát triển bền vững.',
            'Mục tiêu, nội dung và phương pháp: kế hoạch, mẫu phiếu, số người được hỏi, nơi quan sát.',
            'Kết quả: bảng số liệu, biểu đồ, bản đồ quan sát, ảnh có chú thích.',
            'Thảo luận: điểm tích cực, điểm cần cải thiện và nguyên nhân, xét cả ba mặt kinh tế, xã hội, môi trường.',
            'Kết luận và đề xuất giải pháp; tài liệu tham khảo; phụ lục (phiếu khảo sát).',
          ],
        },
        {
          type: 'table',
          caption: 'Gợi ý tiêu chí đánh giá',
          head: ['Tiêu chí', 'Nội dung'],
          rows: [
            [
              'Nội dung khoa học',
              'Vận dụng đúng kiến thức sinh thái nhân văn, phát triển bền vững',
            ],
            ['Số liệu', 'Thu thập trung thực, đủ mẫu, xử lí đúng, có bảng, biểu đồ, bản đồ'],
            ['Giải pháp', 'Xuất phát từ số liệu, cụ thể, khả thi ở địa phương'],
            ['Trình bày', 'Rõ ràng, đúng thời gian, trả lời được câu hỏi'],
            ['Hợp tác', 'Mọi thành viên có nhiệm vụ và hoàn thành'],
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Bản đồ quan sát và biểu đồ khảo sát',
    instruction:
      'Chọn lĩnh vực nhóm điều tra. Trên sơ đồ địa phương, chọn khu vực và loại điểm rồi bấm "Thêm điểm" cho mỗi nơi quan sát được. Nhập số người chọn mỗi câu trả lời để vẽ biểu đồ tỉ lệ và đọc nhận xét. Cuối cùng sao chép bản tóm tắt vào báo cáo; trang không lưu lại dữ liệu.',
  },
  examples: [
    {
      problem:
        'Nhóm khảo sát $40$ hộ trong một khu phố với câu hỏi "Gia đình bạn có phân loại rác tại nguồn không?": $10$ hộ thường xuyên, $18$ hộ thỉnh thoảng, $12$ hộ không. Tính tỉ lệ từng câu trả lời và nhận xét.',
      steps: [
        'Kiểm tra tổng: $10 + 18 + 12 = 40$ hộ, khớp với số phiếu.',
        'Thường xuyên: $\\dfrac{10}{40} \\cdot 100\\% = 25\\%$. Thỉnh thoảng: $\\dfrac{18}{40} \\cdot 100\\% = 45\\%$. Không: $\\dfrac{12}{40} \\cdot 100\\% = 30\\%$.',
        'Kiểm tra lại: $25\\% + 45\\% + 30\\% = 100\\%$.',
        'Nhận xét: chỉ một phần tư số hộ phân loại rác thường xuyên; nhóm "thỉnh thoảng" đông nhất, là nhóm dễ thay đổi nhất nếu được hướng dẫn và có thùng rác phân loại.',
      ],
      answer:
        '$25\\%$ thường xuyên, $45\\%$ thỉnh thoảng, $30\\%$ không. Việc phân loại rác còn chưa phổ biến; nên tập trung hướng dẫn nhóm hộ "thỉnh thoảng".',
    },
    {
      problem:
        'Bản đồ quan sát của một nhóm có $5$ điểm rác tự phát ven kênh, $1$ điểm ở chợ, $0$ điểm ở khu dân cư; khu dân cư có $3$ vườn hoa do người dân tự trồng. Hãy rút ra nhận xét và đề xuất giải pháp theo quan điểm sinh thái nhân văn.',
      steps: [
        'Nhận xét: rác tập trung ven kênh, nơi khuất, không có điểm thu gom; khu dân cư đã có ý thức giữ gìn cảnh quan.',
        'Tác động hai chiều: rác ven kênh làm ô nhiễm nước, tắc dòng chảy; tự nhiên trả lại mùi hôi, muỗi, ngập úng cho chính người dân.',
        'Giải pháp huy động nhiều bên: chính quyền đặt điểm thu gom, biển cấm đổ rác; tổ dân phố tổ chức dọn dẹp, trồng cây ven kênh; học sinh tuyên truyền, nhân rộng mô hình vườn hoa của khu dân cư.',
      ],
      answer:
        'Ưu tiên khu vực ven kênh: đặt điểm thu gom rác, trồng cây xanh, tuyên truyền; nhân rộng cách làm vườn hoa của khu dân cư.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các bước thực hiện dự án điều tra theo đúng thứ tự.',
      items: [
        'Xác định vấn đề, câu hỏi điều tra',
        'Lập kế hoạch, soạn phiếu khảo sát',
        'Quan sát, phỏng vấn, phát phiếu',
        'Xử lí số liệu, vẽ biểu đồ, bản đồ',
        'Phân tích, đề xuất giải pháp',
        'Báo cáo và đánh giá',
      ],
      answer: [0, 1, 2, 3, 4, 5],
      hints: ['Có số liệu mới xử lí được; có kết quả xử lí mới đề xuất được.'],
      solution:
        'Xác định vấn đề → lập kế hoạch → thu thập thông tin → xử lí số liệu → phân tích, đề xuất → báo cáo, đánh giá.',
    },
    {
      type: 'number',
      prompt:
        'Khảo sát $60$ người dân, có $21$ người biết tên một loài quý hiếm của địa phương. Tỉ lệ người biết là bao nhiêu phần trăm?',
      answer: 35,
      unit: '%',
      hints: ['Tỉ lệ $= \\dfrac{\\text{số người biết}}{\\text{tổng số người}} \\cdot 100\\%$.'],
      solution: '$\\dfrac{21}{60} \\cdot 100\\% = 35\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Trong $50$ hộ trồng rau được hỏi, $40\\%$ dùng phân hữu cơ, ít thuốc hoá học. Có bao nhiêu hộ như vậy?',
      answer: 20,
      unit: 'hộ',
      hints: ['Tính $40\\%$ của $50$.'],
      solution: '$50 \\cdot 40\\% = 50 \\cdot 0{,}4 = 20$ hộ.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các câu hỏi phù hợp cho phiếu khảo sát về phân loại rác.',
      options: [
        'Gia đình bạn có phân loại rác tại nguồn không? (Thường xuyên / Thỉnh thoảng / Không)',
        'Mỗi ngày gia đình bạn thải khoảng bao nhiêu túi rác? (Dưới 1 / 1–2 / Trên 2)',
        'Bạn có đồng ý rằng phân loại rác là rất tốt và ai không phân loại là thiếu ý thức không?',
        'Họ tên, số điện thoại và số căn cước của bạn là gì?',
      ],
      answers: [0, 1],
      hints: [
        'Câu hỏi tốt ngắn, trung lập, không dẫn dắt người trả lời.',
        'Không hỏi thông tin cá nhân không cần thiết.',
      ],
      solution:
        'Hai câu đầu ngắn, có sẵn lựa chọn, trung lập. Câu "ai không phân loại là thiếu ý thức" dẫn dắt người trả lời; hỏi số căn cước xâm phạm thông tin cá nhân và không cần cho đề tài.',
    },
    {
      type: 'choice',
      prompt:
        'Một nhóm chỉ hỏi $8$ bạn cùng lớp rồi kết luận "$75\\%$ người dân địa phương đã phân loại rác". Kết luận này',
      options: [
        'chưa đáng tin vì số người hỏi quá ít và không đại diện cho người dân địa phương',
        'đáng tin vì tỉ lệ $75\\%$ được tính đúng',
        'đáng tin vì học sinh hiểu biết hơn người dân',
        'chưa đáng tin vì phải hỏi đúng $100$ người',
      ],
      answer: 0,
      hints: ['$8$ bạn cùng lớp có đại diện cho mọi người dân không?'],
      solution:
        'Mẫu $8$ người quá nhỏ và chỉ gồm học sinh một lớp, không đại diện cho người dân. Cần hỏi nhiều người hơn (ít nhất khoảng $30$) thuộc nhiều nhóm khác nhau.',
    },
    {
      type: 'multi',
      prompt:
        'Bản đồ quan sát cho thấy nhiều điểm đốt rơm rạ ngoài đồng sau vụ gặt. Chọn tất cả các giải pháp phù hợp để đề xuất.',
      options: [
        'Hướng dẫn ủ rơm rạ làm phân hữu cơ hoặc trồng nấm rơm',
        'Thu gom rơm làm thức ăn, chất độn chuồng cho gia súc',
        'Tuyên truyền tác hại của khói đốt rơm với sức khoẻ và khí hậu',
        'Đốt rơm rạ vào ban đêm để không ai nhìn thấy',
      ],
      answers: [0, 1, 2],
      hints: ['Giải pháp tốt biến rơm rạ thành tài nguyên thay vì thải khói.'],
      solution:
        'Ủ phân, trồng nấm, làm thức ăn gia súc biến rơm thành tài nguyên và giảm khí thải; tuyên truyền giúp thay đổi thói quen. Đốt ban đêm vẫn thải khói bụi, khí nhà kính.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các việc làm đúng khi điều tra tại địa phương.',
      options: [
        'Xin phép trước khi phỏng vấn, chụp ảnh người dân',
        'Ghi đúng số liệu, kể cả khi khác với dự đoán của nhóm',
        'Ghi nguồn của mọi tài liệu, hình ảnh sử dụng',
        'Tự tay nhặt bao bì thuốc bảo vệ thực vật để đếm',
        'Bỏ bớt các phiếu trả lời không hợp ý nhóm',
      ],
      answers: [0, 1, 2],
      hints: ['Hai yêu cầu: trung thực với số liệu và an toàn cho bản thân, người khác.'],
      solution:
        'Xin phép, ghi trung thực và ghi nguồn là đúng. Bao bì thuốc bảo vệ thực vật là rác thải nguy hại, không chạm tay vào; bỏ bớt phiếu làm sai lệch kết quả.',
    },
  ],
  takeaways: [
    'Dự án gồm các bước: xác định vấn đề, lập kế hoạch, thu thập thông tin, xử lí số liệu, phân tích và đề xuất, báo cáo và đánh giá.',
    'Số liệu phải trung thực, đủ mẫu (ít nhất khoảng $30$ người) và được xử lí thành tỉ lệ phần trăm, biểu đồ, bản đồ quan sát.',
    'Đánh giá thực trạng theo ba mặt kinh tế, xã hội, môi trường; giải pháp phải xuất phát từ số liệu và khả thi ở địa phương.',
    'Giải pháp tốt huy động nhiều bên: người dân, nhà trường, chính quyền, doanh nghiệp.',
  ],
};
