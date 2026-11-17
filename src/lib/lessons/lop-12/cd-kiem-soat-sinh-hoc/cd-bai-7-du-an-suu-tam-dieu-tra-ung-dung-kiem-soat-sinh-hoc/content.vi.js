/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Dự án theo nhóm: sưu tầm tài liệu hoặc điều tra thực tế về các ứng dụng kiểm soát sinh học ở địa phương, Việt Nam và thế giới, xử lí số liệu, lập bản đồ điểm áp dụng và báo cáo kết quả.',
  intro:
    'Ở địa phương em, nông dân trừ sâu cho lúa, rau, cây ăn quả bằng cách nào? Có ai nuôi kiến vàng, thả ong mắt đỏ hay dùng chế phẩm nấm xanh không? Trong dự án này, em sẽ trở thành người điều tra để tìm câu trả lời.',
  objectives: [
    'Lập được kế hoạch và thực hiện dự án sưu tầm hoặc điều tra ứng dụng kiểm soát sinh học.',
    'Thu thập, xử lí được thông tin từ tài liệu và từ khảo sát thực tế, ghi rõ nguồn.',
    'Viết và trình bày được báo cáo dự án, đánh giá được hiệu quả của các ứng dụng đã tìm hiểu.',
  ],
  sections: [
    {
      heading: 'Mục tiêu và đề tài',
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu của dự án là tìm hiểu các ứng dụng kiểm soát sinh học đang được dùng trong trồng trọt, chăn nuôi, lâm nghiệp và y tế; đánh giá hiệu quả, ưu điểm, hạn chế của chúng và đề xuất cách áp dụng ở địa phương.',
        },
        {
          type: 'list',
          items: [
            'Sưu tầm: các ví dụ kiểm soát sinh học thành công hoặc thất bại ở Việt Nam và trên thế giới (bọ rùa trừ rệp sáp, ong mắt đỏ, kiến vàng, chế phẩm Bt, nấm xanh, muỗi mang Wolbachia, cóc mía ở Úc).',
            'Điều tra: thực trạng sử dụng thiên địch và chế phẩm sinh học của các hộ trồng lúa, rau, cây ăn quả ở địa phương.',
            'Khảo sát: hiểu biết của người dân về thiên địch, về chế phẩm sinh học và về tác hại của việc lạm dụng thuốc hoá học.',
            'Tìm hiểu: các chế phẩm sinh học đang bán ở cửa hàng vật tư nông nghiệp (tên, thành phần, đối tượng, cách dùng).',
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
          text: 'Chia lớp thành các nhóm $4$ đến $5$ học sinh; mỗi nhóm nhận một đề tài, thực hiện trong $2$ đến $3$ tuần. Chuẩn bị: sổ và bút ghi chép, phiếu khảo sát in sẵn, điện thoại để chụp ảnh, ghi âm (khi được người được hỏi đồng ý).',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Xác định nội dung: nhóm thống nhất đề tài, câu hỏi cần trả lời và đối tượng điều tra.',
            'Lập kế hoạch: phân công nhiệm vụ, thời gian, địa điểm và kết quả dự kiến của từng việc.',
            'Thu thập thông tin: đọc tài liệu từ nguồn tin cậy; phỏng vấn, phát phiếu khảo sát, quan sát và chụp ảnh tại địa phương.',
            'Xử lí thông tin: lập bảng, tính tỉ lệ phần trăm, vẽ biểu đồ; đánh dấu các điểm áp dụng lên bản đồ.',
            'Trình bày kết quả: viết báo cáo, làm áp phích hoặc bài trình chiếu, thuyết trình trước lớp.',
            'Đánh giá: các nhóm tự đánh giá, đánh giá chéo theo tiêu chí do giáo viên đưa ra.',
          ],
        },
        {
          type: 'table',
          caption: 'Gợi ý kế hoạch của một nhóm',
          head: ['Công việc', 'Thời gian, địa điểm', 'Kết quả dự kiến'],
          rows: [
            [
              'Sưu tầm các ví dụ kiểm soát sinh học trong nước và thế giới',
              'Tuần $1$, thư viện, Internet',
              'Danh mục ví dụ có ghi nguồn',
            ],
            [
              'Khảo sát cửa hàng vật tư nông nghiệp',
              'Tuần $1$, chợ, cửa hàng gần nhà',
              'Bảng các chế phẩm sinh học đang bán',
            ],
            [
              'Phỏng vấn, phát phiếu cho các hộ trồng trọt',
              'Tuần $2$, thôn, xã',
              'Phiếu khảo sát đã điền',
            ],
            [
              'Xử lí số liệu, lập bản đồ, viết báo cáo',
              'Tuần $3$, tại nhà, ở trường',
              'Báo cáo, bài trình chiếu',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Phiếu thu thập mỗi ví dụ',
          text: 'Tên ứng dụng; đối tượng gây hại; tác nhân sinh học hoặc biện pháp; nhóm biện pháp (thiên địch, chế phẩm sinh học, kĩ thuật di truyền); nơi áp dụng; hiệu quả, nhận xét; nguồn thông tin. Hoạt động khám phá dưới đây có sẵn mẫu phiếu và bản đồ để nhóm dùng.',
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
            'Tên dự án, tên các thành viên.',
            'Đặt vấn đề: vì sao cần kiểm soát sinh học (tác hại của lạm dụng thuốc hoá học, sâu hại kháng thuốc).',
            'Mục tiêu và nội dung điều tra.',
            'Phương pháp: kế hoạch, bảng phân công, mẫu phiếu, số người được hỏi.',
            'Kết quả và thảo luận: bảng số liệu, biểu đồ, bản đồ điểm áp dụng, giải thích bằng kiến thức đã học.',
            'Kết luận và đề xuất cho địa phương.',
            'Tài liệu tham khảo; phụ lục (phiếu khảo sát, ảnh).',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Trung thực và an toàn',
          text: 'Ghi đúng số liệu thu được, không tự thêm bớt; ghi rõ nguồn của mọi thông tin và hình ảnh. Hỏi ý kiến trước khi ghi âm, chụp ảnh người khác. Khi ra đồng ruộng, không tự tay pha, phun thuốc trừ sâu; đi theo nhóm và có người lớn đi cùng.',
        },
        {
          type: 'table',
          caption: 'Gợi ý tiêu chí đánh giá',
          head: ['Tiêu chí', 'Nội dung'],
          rows: [
            ['Nội dung khoa học', 'Thông tin chính xác, giải thích đúng cơ sở khoa học'],
            ['Số liệu', 'Thu thập trung thực, xử lí đúng, có bảng, biểu đồ'],
            ['Nguồn', 'Ghi đủ nguồn, nguồn tin cậy'],
            ['Trình bày', 'Rõ ràng, đúng thời gian, trả lời được câu hỏi'],
            ['Hợp tác', 'Mọi thành viên đều có nhiệm vụ và hoàn thành'],
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Phiếu thu thập và bản đồ điểm áp dụng',
    instruction:
      'Điền phiếu cho từng ví dụ nhóm sưu tầm hoặc điều tra được, rồi bấm "Thêm vào bản đồ". Chọn một vùng trên sơ đồ để xem các ví dụ ở đó. Các ví dụ gợi ý có thể ẩn đi. Khi xong, sao chép bản tóm tắt để đưa vào báo cáo; trang không lưu lại dữ liệu.',
  },
  examples: [
    {
      problem:
        'Một nhóm phỏng vấn $40$ hộ trồng lúa: $14$ hộ có dùng chế phẩm sinh học, $10$ hộ biết và bảo vệ thiên địch trên ruộng, $16$ hộ chỉ dùng thuốc hoá học. Tính tỉ lệ phần trăm mỗi nhóm hộ và nhận xét.',
      steps: [
        'Kiểm tra tổng: $14 + 10 + 16 = 40$ hộ, các nhóm không trùng nhau.',
        'Dùng chế phẩm sinh học: $\\dfrac{14}{40} \\cdot 100\\% = 35\\%$.',
        'Bảo vệ thiên địch: $\\dfrac{10}{40} \\cdot 100\\% = 25\\%$. Chỉ dùng thuốc hoá học: $\\dfrac{16}{40} \\cdot 100\\% = 40\\%$.',
        'Nhận xét: $60\\%$ số hộ đã áp dụng ít nhất một biện pháp sinh học, nhưng nhóm chỉ dùng thuốc hoá học vẫn đông nhất.',
      ],
      answer:
        '$35\\%$, $25\\%$ và $40\\%$. Cần tuyên truyền thêm về lợi ích của thiên địch và chế phẩm sinh học.',
    },
    {
      problem:
        'Một bạn ghi trong báo cáo: "Thả thật nhiều thiên địch nhập từ nước ngoài là cách tốt nhất để diệt sạch sâu hại". Hãy nhận xét và sửa lại.',
      steps: [
        'Kiểm soát sinh học thường giữ sâu hại ở mức thấp, không diệt sạch; thiên địch cần con mồi để tồn tại.',
        'Nhập nội thiên địch có thể tạo loài ngoại lai xâm lấn, như cóc mía ở Úc, nên phải đánh giá rủi ro trước.',
        'Nên ưu tiên bảo vệ, phục hồi thiên địch bản địa và kết hợp nhiều biện pháp.',
      ],
      answer:
        'Câu viết chưa đúng. Sửa: "Bảo vệ và phát huy thiên địch bản địa, kết hợp các biện pháp khác, giúp giữ sâu hại dưới ngưỡng gây hại; chỉ nhập nội thiên địch sau khi đã đánh giá kĩ rủi ro."',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các bước thực hiện dự án theo đúng thứ tự.',
      items: [
        'Xác định nội dung, câu hỏi điều tra',
        'Lập kế hoạch, phân công nhiệm vụ',
        'Thu thập thông tin từ tài liệu và thực tế',
        'Xử lí thông tin, lập bảng, biểu đồ, bản đồ',
        'Trình bày kết quả, báo cáo trước lớp',
        'Đánh giá kết quả',
      ],
      answer: [0, 1, 2, 3, 4, 5],
      hints: ['Phải có số liệu thì mới xử lí được; phải xử lí xong mới báo cáo.'],
      solution:
        'Xác định nội dung → lập kế hoạch → thu thập thông tin → xử lí thông tin → trình bày, báo cáo → đánh giá.',
    },
    {
      type: 'number',
      prompt:
        'Khảo sát $50$ người dân, có $18$ người biết bọ rùa là thiên địch của rệp. Tỉ lệ người biết điều này là bao nhiêu phần trăm?',
      answer: 36,
      unit: '%',
      hints: [
        'Tỉ lệ phần trăm $= \\dfrac{\\text{số người biết}}{\\text{tổng số người}} \\cdot 100\\%$.',
      ],
      solution: '$\\dfrac{18}{50} \\cdot 100\\% = 36\\%$.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các nguồn thông tin tin cậy cho dự án.',
      options: [
        'Sách giáo khoa, sách chuyên khảo',
        'Trang thông tin của cơ quan bảo vệ thực vật, viện nghiên cứu',
        'Nhãn và hướng dẫn sử dụng in trên bao bì chế phẩm',
        'Bài đăng không rõ tác giả trên mạng xã hội',
        'Lời quảng cáo của người bán hàng',
      ],
      answers: [0, 1, 2],
      hints: ['Nguồn tin cậy có tác giả, cơ quan chịu trách nhiệm rõ ràng và không nhằm bán hàng.'],
      solution:
        'Sách, trang của cơ quan chuyên môn và nhãn sản phẩm (đã được đăng kí) là nguồn tin cậy. Bài không rõ tác giả và lời quảng cáo cần kiểm chứng lại, không dùng làm nguồn chính.',
    },
    {
      type: 'choice',
      prompt:
        'Một nhóm điều tra thấy ruộng có phun thuốc trừ sâu định kì có ít nhện, bọ rùa hơn hẳn ruộng không phun. Giải thích hợp lí nhất là',
      options: [
        'thuốc trừ sâu phổ rộng giết cả thiên địch',
        'nhện, bọ rùa không thích ăn sâu ở ruộng phun thuốc',
        'ruộng phun thuốc có nhiều sâu hơn nên thiên địch bỏ đi',
        'thiên địch chỉ sống ở ruộng không có lúa',
      ],
      answer: 0,
      hints: ['Thuốc hoá học phổ rộng tác động lên những loài nào?'],
      solution:
        'Thuốc trừ sâu phổ rộng giết cả côn trùng, nhện có ích, nên ruộng phun định kì có ít thiên địch; đây cũng là lí do sâu dễ bùng phát trở lại.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi ví dụ sưu tầm được với nhóm biện pháp kiểm soát sinh học.',
      left: [
        'Nuôi kiến vàng trong vườn bưởi',
        'Phun chế phẩm nấm xanh trừ rầy nâu',
        'Thả muỗi mang vi khuẩn Wolbachia',
      ],
      right: [
        'Sử dụng thiên địch',
        'Chế phẩm sinh học',
        'Kĩ thuật di truyền, tạo giống',
        'Biện pháp hoá học',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: [
        'Kiến vàng là sinh vật sống ngoài tự nhiên; nấm xanh được sản xuất thành sản phẩm để phun.',
        'Không ví dụ nào thuộc biện pháp hoá học.',
      ],
      solution:
        'Kiến vàng: thiên địch. Nấm xanh: chế phẩm sinh học. Muỗi mang Wolbachia: thuộc nhóm kĩ thuật di truyền, tạo giống trong bài học.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các việc làm đúng khi điều tra thực tế.',
      options: [
        'Xin phép trước khi ghi âm, chụp ảnh người được phỏng vấn',
        'Ghi đúng số liệu thu được, kể cả khi khác với điều nhóm dự đoán',
        'Đi theo nhóm, có người lớn đi cùng khi ra đồng ruộng',
        'Tự pha và phun thử thuốc trừ sâu để so sánh',
        'Bỏ bớt các phiếu trả lời không hợp ý nhóm',
      ],
      answers: [0, 1, 2],
      hints: ['Hai yêu cầu: trung thực với số liệu và an toàn cho bản thân, người khác.'],
      solution:
        'Xin phép, ghi trung thực, đi theo nhóm có người lớn là đúng. Tự phun thuốc nguy hiểm; bỏ bớt phiếu là làm sai lệch kết quả.',
    },
  ],
  takeaways: [
    'Dự án gồm sáu bước: xác định nội dung, lập kế hoạch, thu thập, xử lí thông tin, trình bày và đánh giá.',
    'Mỗi ví dụ cần ghi đủ: đối tượng gây hại, tác nhân, nhóm biện pháp, nơi áp dụng, hiệu quả và nguồn.',
    'Số liệu điều tra phải trung thực, được xử lí bằng bảng, tỉ lệ phần trăm, biểu đồ và bản đồ điểm áp dụng.',
    'Kết luận và đề xuất dựa trên kiến thức về kiểm soát sinh học, hướng tới nông nghiệp bền vững ở địa phương.',
  ],
};
