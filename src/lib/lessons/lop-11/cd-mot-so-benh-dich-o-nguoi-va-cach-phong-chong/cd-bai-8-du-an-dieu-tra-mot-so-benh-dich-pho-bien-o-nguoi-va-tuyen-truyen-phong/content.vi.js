/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Dự án điều tra một số bệnh dịch phổ biến ở địa phương: lập kế hoạch, thiết kế phiếu khảo sát, thu thập và xử lí số liệu bằng bảng, tỉ lệ phần trăm, biểu đồ; rồi làm sản phẩm tuyên truyền phòng, chống bệnh dịch chính xác, dễ hiểu, đúng con đường lây của bệnh.',
  intro:
    'Ở khu em sống, bệnh dịch nào hay gặp nhất: cúm, sốt xuất huyết, tay chân miệng hay tiêu chảy? Người dân đã biết cách phòng chưa? Trong dự án này, em sẽ tự điều tra, xử lí số liệu và làm một sản phẩm tuyên truyền giúp cộng đồng phòng, chống bệnh dịch.',
  objectives: [
    'Lập được kế hoạch và thiết kế được phiếu khảo sát về một số bệnh dịch phổ biến ở địa phương.',
    'Thu thập, xử lí được số liệu điều tra bằng bảng, tỉ lệ phần trăm và biểu đồ; rút ra được nhận xét.',
    'Làm được sản phẩm tuyên truyền (áp phích, tờ rơi, video, bài thuyết trình) phòng, chống bệnh dịch chính xác về khoa học.',
    'Trình bày được kết quả điều tra và đề xuất biện pháp phòng, chống dịch cho địa phương.',
  ],
  sections: [
    {
      heading: 'Mục tiêu và các bước của dự án',
      blocks: [
        {
          type: 'p',
          text: 'Dự án vận dụng kiến thức của cả chuyên đề: tác nhân gây bệnh, con đường lây truyền, yếu tố thuận lợi cho dịch và các biện pháp phòng, chống. Mỗi nhóm $4$ đến $6$ bạn thực hiện trong khoảng $2$ đến $3$ tuần.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Lập kế hoạch: xác định mục tiêu, đối tượng (các hộ gia đình, học sinh trong trường), phạm vi (thôn, xóm, phường), thời gian; phân công nhiệm vụ.',
            'Thiết kế phiếu khảo sát và chọn nguồn thông tin (phỏng vấn người dân, số liệu của trạm y tế xã, phường).',
            'Thu thập số liệu: phát phiếu, phỏng vấn, quan sát môi trường sống, chụp ảnh.',
            'Xử lí số liệu: lập bảng, tính tỉ lệ, vẽ biểu đồ, rút ra nhận xét.',
            'Làm sản phẩm tuyên truyền cho bệnh phổ biến nhất hoặc bệnh người dân còn hiểu sai nhiều nhất.',
            'Báo cáo kết quả, trưng bày sản phẩm và đề xuất biện pháp.',
          ],
        },
      ],
    },
    {
      heading: 'Thiết kế phiếu khảo sát',
      blocks: [
        {
          type: 'table',
          caption: 'Các nội dung nên có trong phiếu khảo sát',
          head: ['Nội dung', 'Ví dụ câu hỏi'],
          rows: [
            [
              'Thông tin chung',
              'Số người trong gia đình; có trẻ dưới $5$ tuổi, người cao tuổi không?',
            ],
            [
              'Bệnh đã mắc',
              'Trong $12$ tháng qua, gia đình có người mắc bệnh nào: cúm, sốt xuất huyết, tay chân miệng, tiêu chảy cấp, COVID-19, thuỷ đậu?',
            ],
            ['Hiểu biết', 'Theo gia đình, bệnh sốt xuất huyết lây qua con đường nào?'],
            [
              'Việc làm phòng bệnh',
              'Gia đình có ngủ màn, đậy kín dụng cụ chứa nước, tiêm vắc-xin đủ cho trẻ, rửa tay bằng xà phòng không?',
            ],
            ['Môi trường sống', 'Quanh nhà có vật chứa nước đọng, rác thải, nước thải không?'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Câu hỏi tốt và tôn trọng người được hỏi',
          text: 'Câu hỏi ngắn, rõ, có sẵn phương án để chọn và không gợi ý câu trả lời. Phiếu không ghi tên người bệnh, chỉ hỏi những thông tin cần thiết; người được hỏi có quyền từ chối. Không công khai thông tin sức khoẻ của từng gia đình.',
        },
      ],
    },
    {
      heading: 'Xử lí số liệu',
      blocks: [
        { type: 'p', text: 'Với mỗi bệnh, đếm số hộ có người mắc rồi tính tỉ lệ:' },
        {
          type: 'tex',
          tex: '\\text{Tỉ lệ} = \\dfrac{\\text{Số hộ có người mắc}}{\\text{Tổng số hộ được khảo sát}} \\cdot 100\\%',
        },
        {
          type: 'p',
          text: 'Một hộ có thể có người mắc nhiều bệnh, nên tổng các tỉ lệ có thể lớn hơn $100\\%$: khi đó dùng biểu đồ cột, không dùng biểu đồ hình quạt tròn. Nhận xét bệnh nào phổ biến nhất, liên hệ với mùa trong năm và với những yếu tố thuận lợi quan sát được ở địa phương.',
        },
      ],
    },
    {
      heading: 'Sản phẩm tuyên truyền phòng, chống bệnh dịch',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mỗi nhóm chọn một hình thức: áp phích, tờ rơi, video ngắn, bài thuyết trình hoặc tiểu phẩm. Sản phẩm được đánh giá theo các tiêu chí sau.',
        },
        {
          type: 'table',
          caption: 'Tiêu chí đánh giá sản phẩm tuyên truyền',
          head: ['Tiêu chí', 'Yêu cầu'],
          rows: [
            [
              'Chính xác',
              'Đúng tác nhân, con đường lây; biện pháp cắt đúng con đường lây của bệnh; ghi nguồn thông tin (Bộ Y tế, trạm y tế)',
            ],
            ['Ngắn gọn, dễ hiểu', 'Thông điệp chính nổi bật, câu ngắn, phù hợp với người xem'],
            ['Hấp dẫn', 'Hình ảnh, màu sắc, khẩu hiệu dễ nhớ'],
            ['Thiết thực', 'Hướng dẫn những việc làm cụ thể mà mọi người làm được ngay'],
            ['Dựa trên số liệu', 'Sử dụng kết quả điều tra của nhóm để nêu lí do cần phòng bệnh'],
          ],
        },
        {
          type: 'p',
          text: 'Thử phác thảo một áp phích: chọn bệnh, chọn các biện pháp đưa lên áp phích và xem nhận xét về độ chính xác.',
        },
        { type: 'widget', name: 'poster' },
        {
          type: 'p',
          text: 'Báo cáo: bài trình bày gồm mục tiêu, phương pháp, kết quả (bảng, biểu đồ), nhận xét, đề xuất biện pháp và sản phẩm tuyên truyền. Trưng bày sản phẩm ở bảng tin của lớp, trường hoặc nhà văn hoá khu dân cư.',
        },
      ],
    },
  ],
  explore: {
    title: 'Xử lí số liệu điều tra',
    instruction:
      'Nhập số hộ đã khảo sát và số hộ có người mắc mỗi bệnh (hoặc dùng số liệu mẫu). Biểu đồ cột cho tỉ lệ số hộ, phần nhận xét chỉ ra bệnh phổ biến nhất và những biện pháp cần tuyên truyền.',
  },
  examples: [
    {
      problem:
        'Nhóm khảo sát $40$ hộ: $22$ hộ có người mắc cúm, $9$ hộ có người mắc sốt xuất huyết, $6$ hộ có người bị tiêu chảy cấp. Tính tỉ lệ số hộ cho mỗi bệnh và nhận xét.',
      steps: [
        'Cúm: $\\dfrac{22}{40} \\cdot 100\\% = 55\\%$.',
        'Sốt xuất huyết: $\\dfrac{9}{40} \\cdot 100\\% = 22{,}5\\%$.',
        'Tiêu chảy cấp: $\\dfrac{6}{40} \\cdot 100\\% = 15\\%$.',
        'Tổng các tỉ lệ khác $100\\%$ vì một hộ có thể có người mắc nhiều bệnh, có hộ không ai mắc; nên vẽ biểu đồ cột.',
        'Cúm phổ biến nhất (hơn một nửa số hộ): bệnh lây qua đường hô hấp nên cần tuyên truyền đeo khẩu trang, che miệng khi ho, rửa tay, tiêm vắc-xin cúm.',
      ],
      answer:
        'Cúm $55\\%$, sốt xuất huyết $22{,}5\\%$, tiêu chảy cấp $15\\%$; cúm là bệnh phổ biến nhất ở khu vực khảo sát.',
    },
    {
      problem:
        'Nhóm làm áp phích phòng sốt xuất huyết, dự định ghi: "Đeo khẩu trang, rửa tay thường xuyên để phòng sốt xuất huyết". Em hãy nhận xét và sửa lại.',
      steps: [
        'Sốt xuất huyết do virus Dengue, lây qua đường máu khi muỗi vằn đốt; không lây qua giọt bắn hay tay bẩn.',
        'Khẩu trang và rửa tay không cắt được con đường lây này: thông điệp sai về khoa học.',
        'Biện pháp đúng: diệt muỗi, bọ gậy (lật úp vật chứa nước, đậy kín bể nước, thả cá ăn bọ gậy) và tránh muỗi đốt (ngủ màn, mặc quần áo dài).',
      ],
      answer:
        'Sửa thành: "Diệt bọ gậy, đậy kín nước, ngủ màn: không có lăng quăng, không có sốt xuất huyết".',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các bước thực hiện dự án điều tra bệnh dịch theo đúng thứ tự.',
      items: [
        'Lập kế hoạch, phân công nhiệm vụ',
        'Thiết kế phiếu khảo sát',
        'Thu thập số liệu',
        'Xử lí số liệu, rút ra nhận xét',
        'Làm sản phẩm tuyên truyền, báo cáo kết quả',
      ],
      answer: [0, 1, 2, 3, 4],
      hints: ['Phải có số liệu và nhận xét trước khi chọn nội dung tuyên truyền.'],
      solution:
        'Lập kế hoạch → thiết kế phiếu → thu thập số liệu → xử lí số liệu → làm sản phẩm tuyên truyền và báo cáo.',
    },
    {
      type: 'choice',
      prompt: 'Câu hỏi nào phù hợp nhất để đưa vào phiếu khảo sát?',
      options: [
        'Gia đình thường làm gì với các dụng cụ chứa nước quanh nhà? (đậy kín / thay nước hằng tuần / không làm gì)',
        'Gia đình có biết là để nước đọng rất nguy hiểm và sai không?',
        'Họ tên những người trong gia đình từng bị sốt xuất huyết là gì?',
        'Gia đình nghĩ gì về bệnh dịch?',
      ],
      answer: 0,
      hints: [
        'Câu hỏi tốt: rõ ràng, có phương án chọn, không gợi ý đáp án, không hỏi thông tin riêng tư không cần thiết.',
      ],
      solution:
        'Câu hỏi về dụng cụ chứa nước rõ ràng và có sẵn phương án. Câu "có biết là... sai không" gợi ý câu trả lời; hỏi họ tên người bệnh xâm phạm riêng tư; câu "nghĩ gì về bệnh dịch" quá chung chung, khó tổng hợp.',
    },
    {
      type: 'number',
      prompt:
        'Khảo sát $48$ hộ, có $12$ hộ có người mắc tay chân miệng. Tỉ lệ số hộ có người mắc là bao nhiêu phần trăm?',
      answer: 25,
      unit: '%',
      hints: ['Tỉ lệ = số hộ có người mắc : tổng số hộ $\\cdot 100\\%$.'],
      solution: '$\\dfrac{12}{48} \\cdot 100\\% = 25\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Khảo sát $40$ hộ, có $9$ hộ có người mắc sốt xuất huyết. Tính tỉ lệ số hộ có người mắc (theo %).',
      answer: 22.5,
      unit: '%',
      hints: ['Tính $\\dfrac{9}{40}$ rồi nhân với $100\\%$.'],
      solution: '$\\dfrac{9}{40} \\cdot 100\\% = 22{,}5\\%$.',
    },
    {
      type: 'choice',
      prompt:
        'Số liệu về tỉ lệ số hộ có người mắc từng bệnh có tổng lớn hơn $100\\%$. Nên biểu diễn bằng biểu đồ nào?',
      options: [
        'Biểu đồ cột, mỗi cột là một bệnh',
        'Biểu đồ hình quạt tròn',
        'Không vẽ được biểu đồ nào',
        'Biểu đồ hình quạt tròn sau khi bỏ bớt bệnh cho tổng bằng $100\\%$',
      ],
      answer: 0,
      hints: ['Biểu đồ hình quạt tròn biểu diễn các phần của một tổng thể $100\\%$.'],
      solution:
        'Một hộ có thể có người mắc nhiều bệnh nên các tỉ lệ không phải các phần của một tổng thể; biểu đồ cột so sánh được các tỉ lệ này. Bỏ bớt số liệu là làm sai lệch kết quả.',
    },
    {
      type: 'multi',
      prompt: 'Một áp phích tuyên truyền phòng bệnh tay chân miệng nên có những thông điệp nào?',
      options: [
        'Rửa tay bằng xà phòng cho trẻ và người chăm sóc trẻ',
        'Lau rửa đồ chơi, sàn nhà bằng xà phòng hoặc chất khử khuẩn',
        'Ăn chín, uống sôi',
        'Trẻ bị bệnh nghỉ học, ở nhà theo dõi',
        'Diệt muỗi, bọ gậy là cách phòng bệnh chính',
      ],
      answers: [0, 1, 2, 3],
      hints: [
        'Tay chân miệng lây qua đường tiêu hoá và tiếp xúc trực tiếp với dịch tiết, nốt phỏng của người bệnh.',
      ],
      solution:
        'Rửa tay, khử khuẩn đồ chơi, ăn chín uống sôi cắt đường lây; cho trẻ bệnh nghỉ ở nhà kiểm soát nguồn bệnh. Bệnh không lây qua muỗi nên diệt muỗi không phải biện pháp chính.',
    },
    {
      type: 'multi',
      prompt: 'Những tiêu chí nào giúp một sản phẩm tuyên truyền phòng bệnh dịch đạt hiệu quả?',
      options: [
        'Thông tin chính xác, có nguồn tin cậy',
        'Thông điệp ngắn gọn, dễ hiểu, dễ nhớ',
        'Hướng dẫn việc làm cụ thể, ai cũng làm được',
        'Dùng hình ảnh gây hoảng sợ để mọi người lo lắng',
        'Đăng tên, địa chỉ những gia đình có người bệnh',
      ],
      answers: [0, 1, 2],
      hints: ['Tuyên truyền phải đúng, dễ làm theo và tôn trọng người dân.'],
      solution:
        'Sản phẩm tốt chính xác, ngắn gọn, thiết thực. Gây hoảng sợ hay công khai thông tin của người bệnh là sai: gây kì thị và xâm phạm riêng tư.',
    },
    {
      type: 'choice',
      prompt:
        'Kết quả điều tra cho thấy $70\\%$ số hộ quanh trường có dụng cụ chứa nước không đậy nắp, và tháng $8$ có nhiều học sinh mắc sốt xuất huyết. Đề xuất nào phù hợp nhất?',
      options: [
        'Tổ chức chiến dịch đậy kín, lật úp dụng cụ chứa nước, diệt bọ gậy trong khu dân cư và tuyên truyền ngủ màn',
        'Phát khẩu trang cho toàn trường',
        'Khuyên học sinh uống kháng sinh để phòng bệnh',
        'Không cần làm gì vì bệnh tự hết khi hết mùa mưa',
      ],
      answer: 0,
      hints: ['Sốt xuất huyết lây qua muỗi vằn; muỗi đẻ trứng ở đâu?'],
      solution:
        'Nước đọng trong dụng cụ không đậy nắp là nơi muỗi vằn đẻ trứng. Đậy kín, lật úp dụng cụ, diệt bọ gậy và ngủ màn cắt đúng đường lây. Khẩu trang, kháng sinh không có tác dụng với bệnh do virus Dengue lây qua muỗi.',
    },
  ],
  takeaways: [
    'Dự án gồm: lập kế hoạch, thiết kế phiếu khảo sát, thu thập số liệu, xử lí số liệu, làm sản phẩm tuyên truyền và báo cáo.',
    'Tỉ lệ = số hộ có người mắc : tổng số hộ khảo sát $\\cdot 100\\%$; khi các tỉ lệ không cộng lại thành $100\\%$, dùng biểu đồ cột.',
    'Sản phẩm tuyên truyền phải chính xác, ngắn gọn, thiết thực và nêu biện pháp cắt đúng con đường lây của bệnh.',
    'Tôn trọng người được khảo sát: không ghi tên người bệnh, không công khai thông tin sức khoẻ của gia đình.',
  ],
};
