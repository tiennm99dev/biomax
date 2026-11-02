/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Bài thực hành điều tra một số bệnh do virus ở người, vật nuôi, cây trồng tại địa phương: lập phiếu điều tra, tổng hợp số liệu, viết báo cáo và thiết kế tờ rơi tuyên truyền cách phòng chống bệnh.',
  intro:
    'Xóm em năm nay có nhiều người bị sốt xuất huyết hơn năm ngoái không? Mọi người có biết muỗi vằn đẻ trứng ở đâu không? Muốn tuyên truyền trúng điều người dân còn hiểu sai, trước hết phải điều tra.',
  objectives: [
    'Điều tra được một số bệnh do virus ở người, vật nuôi và cây trồng tại địa phương.',
    'Thiết kế được phiếu điều tra đủ nội dung, khách quan, tôn trọng người trả lời.',
    'Tổng hợp số liệu, tính tỉ lệ phần trăm và đọc được biểu đồ kết quả.',
    'Viết được báo cáo và thiết kế được tờ rơi tuyên truyền cách phòng chống bệnh.',
  ],
  sections: [
    {
      heading: 'Chuẩn bị và chọn đề tài',
      blocks: [
        {
          type: 'list',
          items: [
            'Tranh ảnh, sách báo, tài liệu về virus gây bệnh, vật trung gian truyền bệnh, đường lây và cách phòng chống.',
            'Dụng cụ, vật liệu để làm tờ rơi.',
            'Chọn đề tài theo tình hình dịch bệnh mỗi năm ở địa phương: bệnh ở người, vật nuôi hoặc cây trồng.',
          ],
        },
        {
          type: 'table',
          caption: 'Một số bệnh do virus thường gặp',
          head: ['Bệnh', 'Tác nhân', 'Vật trung gian', 'Triệu chứng, đường lây', 'Phòng chống'],
          rows: [
            [
              'Sốt xuất huyết',
              'Virus Dengue',
              'Muỗi vằn',
              'Sốt cao, xuất huyết dưới da, chảy máu cam; lây khi muỗi đốt',
              'Diệt muỗi, dọn nước đọng, phát quang bụi rậm',
            ],
            [
              'Viêm gan B',
              'Virus viêm gan B',
              'Không có',
              'Mệt mỏi, vàng da, vàng mắt; lây qua máu, tình dục, mẹ sang con',
              'Tiêm vaccine, không dùng chung kim tiêm, khám thai định kì',
            ],
            [
              'Dại',
              'Virus dại',
              'Chó, mèo và một số động vật khác',
              'Sốt, sợ nước, kích động; lây qua vết cắn hoặc nước bọt của động vật',
              'Tiêm vaccine cho vật nuôi, xử lí vết thương và tiêm phòng ngay khi bị cắn',
            ],
            [
              'Quai bị',
              'Virus quai bị',
              'Không có',
              'Sốt, đau đầu, sưng tuyến nước bọt; lây qua đường hô hấp',
              'Tiêm vaccine, đeo khẩu trang nơi đông người',
            ],
            [
              'Sởi',
              'Virus sởi',
              'Không có',
              'Sốt, sổ mũi, phát ban; lây qua đường hô hấp',
              'Tiêm vaccine',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Các bước điều tra',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: điều tra một bệnh do virus ở địa phương, rồi dùng kết quả để tuyên truyền cách phòng chống. Làm theo nhóm.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Chọn bệnh cần điều tra và đối tượng điều tra (người dân, học sinh hay người trồng trọt, chăn nuôi).',
            'Thu thập thông tin, hình ảnh từ sách báo, internet và cơ quan y tế; với cây trồng, sưu tầm thêm mẫu vật và hình ảnh cây bị bệnh (khoai tây, cà chua, cam, chanh...).',
            'Ghi lại tên và đặc điểm virus, vật trung gian (nếu có), đường lây, triệu chứng và cách phòng tránh.',
            'Với bệnh có vật trung gian, tìm hiểu môi trường sống, đặc điểm sinh sản và tập tính của vật trung gian để đề xuất cách diệt trừ.',
            'Lập phiếu điều tra, phát phiếu, thu phiếu và tổng hợp số liệu.',
            'Viết báo cáo và thiết kế tờ rơi tuyên truyền.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Một phiếu điều tra tốt',
          text: 'Mỗi câu hỏi rõ ràng, một ý; có sẵn các phương án để dễ thống kê; không dẫn dắt người trả lời; không hỏi thông tin riêng tư như tên người bệnh. Trước khi hỏi, cần giải thích mục đích và được người trả lời đồng ý.',
        },
      ],
    },
    {
      heading: 'Báo cáo và tờ rơi',
      blocks: [
        {
          type: 'table',
          caption: 'Các mục của báo cáo thực hành',
          head: ['Mục', 'Nội dung'],
          rows: [
            ['Mục đích', 'Đề tài điều tra và điều nhóm muốn biết.'],
            [
              'Cách tiến hành',
              'Nguồn thông tin, đối tượng, số phiếu thu được, thời gian điều tra.',
            ],
            [
              'Kết quả',
              'Bảng điều tra gồm bệnh, loại virus, vật trung gian, triệu chứng và cách lây, biện pháp phòng chống; bảng số liệu, biểu đồ; tờ rơi.',
            ],
            ['Kết luận', 'Điều rút ra từ số liệu và các đề xuất phòng chống bệnh cho địa phương.'],
          ],
        },
        {
          type: 'p',
          text: 'Tờ rơi cần ngắn gọn, chính xác, dễ hiểu và chỉ rõ việc người đọc nên làm. Kết quả điều tra cho biết nên nhấn mạnh điều gì: nhiều người hiểu sai đường lây thì tờ rơi cần đính chính đúng điểm đó.',
        },
        { type: 'widget', name: 'to-roi' },
      ],
    },
  ],
  explore: {
    title: 'Công cụ lập phiếu và vẽ biểu đồ',
    instruction:
      'Chọn bệnh và các câu hỏi cho phiếu điều tra, lưu ý có một số câu viết chưa tốt. Khi phiếu đạt, sang bước $2$ để nhập số liệu: biểu đồ và nhận xét sẽ tự động cập nhật.',
  },
  examples: [
    {
      problem:
        'Nhóm thu về $40$ phiếu điều tra về sốt xuất huyết. Có $30$ phiếu chọn đúng đường lây là muỗi vằn đốt, $6$ phiếu cho rằng bệnh lây qua giọt dịch khi ho. Tính tỉ lệ mỗi loại và nêu điều tờ rơi cần nhấn mạnh.',
      steps: [
        'Tỉ lệ chọn đúng: $\\dfrac{30}{40} \\cdot 100\\% = 75\\%$.',
        'Tỉ lệ hiểu sai: $\\dfrac{6}{40} \\cdot 100\\% = 15\\%$.',
        'Vẫn còn người hiểu sai, nên tờ rơi cần nói rõ bệnh lây do muỗi vằn đốt, không lây qua giọt dịch khi ho.',
      ],
      answer:
        '$75\\%$ chọn đúng, $15\\%$ hiểu sai. Tờ rơi cần nhấn mạnh đường lây qua muỗi và các cách diệt muỗi.',
    },
    {
      problem:
        'Một bạn viết câu hỏi: "Bạn có đồng ý rằng tiêm vaccine là cách duy nhất phòng bệnh và ai không tiêm là vô trách nhiệm không?". Hãy chỉ ra lỗi và sửa lại.',
      steps: [
        'Câu hỏi dẫn dắt người trả lời, lại gộp hai ý trong một câu, nên kết quả không khách quan.',
        'Sửa thành câu hỏi về việc làm cụ thể, có sẵn phương án.',
      ],
      answer:
        'Có thể sửa thành: "Bạn đã tiêm vaccine phòng bệnh này chưa? Đã tiêm đủ mũi / Đã tiêm nhưng chưa đủ mũi / Chưa tiêm / Không nhớ".',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các việc của một đề tài điều tra theo đúng thứ tự.',
      items: [
        'Viết báo cáo, thiết kế tờ rơi',
        'Chọn bệnh và đối tượng điều tra',
        'Tổng hợp số liệu, vẽ biểu đồ',
        'Thu thập tài liệu, lập phiếu điều tra',
        'Phát phiếu và thu phiếu',
      ],
      answer: [1, 3, 4, 2, 0],
      hints: ['Phải có đề tài rồi mới lập được phiếu, có phiếu rồi mới có số liệu.'],
      solution:
        'Chọn bệnh và đối tượng, thu thập tài liệu và lập phiếu, phát và thu phiếu, tổng hợp số liệu, viết báo cáo và làm tờ rơi.',
    },
    {
      type: 'multi',
      prompt: 'Bảng báo cáo điều tra về một bệnh do virus cần có những nội dung nào?',
      options: [
        'Loại virus gây bệnh',
        'Vật trung gian truyền bệnh (nếu có)',
        'Triệu chứng và đường lây',
        'Biện pháp phòng chống',
        'Họ tên những người đang mắc bệnh',
      ],
      answers: [0, 1, 2, 3],
      hints: ['Thông tin nào có thể làm tổn hại người khác nếu công khai?'],
      solution:
        'Bảng báo cáo cần tác nhân, vật trung gian, triệu chứng và đường lây, biện pháp phòng chống. Không ghi họ tên người bệnh vì đó là thông tin riêng tư.',
    },
    {
      type: 'choice',
      prompt: 'Câu hỏi nào viết tốt nhất cho một phiếu điều tra?',
      options: [
        'Trong 12 tháng qua, gia đình bạn có ai mắc bệnh quai bị không? (Có / Không / Không rõ)',
        'Bạn thấy bệnh quai bị thế nào?',
        'Bạn có đồng ý rằng bệnh quai bị rất đáng sợ không?',
        'Hãy ghi tên những người từng mắc quai bị trong xóm.',
      ],
      answer: 0,
      hints: ['Câu tốt phải rõ ràng, trung lập, không xâm phạm riêng tư và thống kê được.'],
      solution:
        'Câu về việc gia đình có ai mắc bệnh trong 12 tháng qua nêu rõ thời gian, có sẵn phương án và trung lập. Các câu còn lại mơ hồ, dẫn dắt hoặc xâm phạm riêng tư.',
    },
    {
      type: 'number',
      prompt:
        'Trong $50$ phiếu về bệnh cúm, có $35$ phiếu cho biết cúm lây qua giọt dịch khi ho, hắt hơi. Tỉ lệ đó là bao nhiêu phần trăm?',
      answer: 70,
      unit: '%',
      hints: ['Lấy số phiếu chia cho tổng số phiếu rồi nhân với $100\\%$.'],
      solution: '$\\dfrac{35}{50} \\cdot 100\\% = 70\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Một câu hỏi chỉ chọn một ý, có $80$ phiếu: "Có" $18$ phiếu, "Không rõ" $7$ phiếu, còn lại là "Không". Có bao nhiêu phiếu chọn "Không"?',
      answer: 55,
      unit: 'phiếu',
      hints: ['Câu chỉ chọn một ý thì tổng số lượt chọn bằng số phiếu.'],
      solution: '$80 - 18 - 7 = 55$ phiếu.',
    },
    {
      type: 'number',
      prompt:
        'Trong $60$ phiếu về sốt xuất huyết, có $9$ phiếu hiểu sai rằng bệnh lây qua ăn chung. Tính tỉ lệ phiếu hiểu sai (theo %).',
      answer: 15,
      unit: '%',
      hints: ['Tính $\\dfrac{9}{60}$ rồi đổi ra phần trăm.'],
      solution: '$\\dfrac{9}{60} \\cdot 100\\% = 15\\%$.',
    },
    {
      type: 'choice',
      prompt:
        'Với câu hỏi được chọn nhiều ý ("Bạn biết những triệu chứng nào?"), vì sao tổng các tỉ lệ có thể vượt quá $100\\%$?',
      options: [
        'Vì mỗi phiếu có thể chọn nhiều ý, nên tổng số lượt chọn có thể lớn hơn số phiếu',
        'Vì nhóm đã tính toán sai',
        'Vì có một số phiếu bị đếm trùng do nhầm lẫn',
        'Vì tỉ lệ phần trăm luôn lớn hơn $100\\%$',
      ],
      answer: 0,
      hints: ['Một người có thể biết bao nhiêu triệu chứng?'],
      solution:
        'Mỗi tỉ lệ được tính trên tổng số phiếu, mà một phiếu có thể chọn nhiều ý, nên tổng các tỉ lệ có thể trên $100\\%$. Điều đó không phải là lỗi.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi bệnh với vật trung gian truyền bệnh.',
      left: ['Sốt xuất huyết', 'Dại', 'Xoăn vàng lá cà chua', 'Sởi'],
      right: [
        'Muỗi vằn',
        'Chó, mèo và một số động vật khác',
        'Bọ phấn trắng',
        'Không có vật trung gian',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Sởi lây trực tiếp từ người sang người qua đường hô hấp.'],
      solution:
        'Sốt xuất huyết do muỗi vằn truyền; dại lây từ chó, mèo và một số động vật khác; xoăn vàng lá cà chua do bọ phấn trắng truyền; sởi không có vật trung gian.',
    },
    {
      type: 'choice',
      prompt:
        'Khi điều tra sốt xuất huyết, vì sao cần tìm hiểu nơi sống và tập tính sinh sản của muỗi vằn?',
      options: [
        'Để đề xuất đúng cách diệt muỗi và cắt đường lây',
        'Để chế tạo thuốc kháng sinh diệt virus',
        'Để biết virus Dengue có bao nhiêu gene',
        'Để nuôi muỗi phục vụ làm vaccine tại nhà',
      ],
      answer: 0,
      hints: ['Vật trung gian là một mắt xích của đường lây.'],
      solution:
        'Muỗi vằn đẻ trứng ở nơi có nước đọng, nên dọn dụng cụ chứa nước và đậy kín bể nước sẽ cắt được đường lây.',
    },
    {
      type: 'multi',
      prompt: 'Tờ rơi tuyên truyền phòng bệnh do virus nên có đặc điểm nào?',
      options: [
        'Thông tin chính xác, lấy từ nguồn tin cậy',
        'Ngắn gọn, dễ hiểu, có hình ảnh',
        'Nêu rõ việc người đọc cần làm',
        'Dùng lời lẽ doạ dẫm để mọi người sợ',
        'Khuyên tự mua kháng sinh uống khi sốt',
      ],
      answers: [0, 1, 2],
      hints: ['Kháng sinh có diệt được virus không?'],
      solution:
        'Tờ rơi cần chính xác, dễ hiểu và hướng dẫn việc làm cụ thể. Không doạ dẫm gây hoảng loạn, và kháng sinh không diệt được virus.',
    },
    {
      type: 'number',
      prompt:
        'Trong $120$ phiếu, có $78$ phiếu cho biết gia đình đã đậy kín bể chứa nước để phòng muỗi. Tỉ lệ đó là bao nhiêu phần trăm?',
      answer: 65,
      unit: '%',
      hints: ['Tính $\\dfrac{78}{120}$ rồi nhân với $100\\%$.'],
      solution: '$\\dfrac{78}{120} \\cdot 100\\% = 65\\%$.',
    },
  ],
  takeaways: [
    'Đề tài điều tra được chọn theo tình hình dịch bệnh ở địa phương: ở người, vật nuôi hoặc cây trồng.',
    'Cần ghi lại virus gây bệnh, vật trung gian, đường lây, triệu chứng và cách phòng tránh.',
    'Phiếu điều tra phải rõ ràng, trung lập, thống kê được và tôn trọng thông tin riêng tư.',
    'Kết quả điều tra cho biết tờ rơi cần nhấn mạnh và đính chính điều gì.',
  ],
};
