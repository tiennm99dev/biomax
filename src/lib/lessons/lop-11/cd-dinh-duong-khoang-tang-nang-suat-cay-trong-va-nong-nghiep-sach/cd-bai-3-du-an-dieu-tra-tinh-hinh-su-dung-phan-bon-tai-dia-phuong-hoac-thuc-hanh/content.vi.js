/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Dự án điều tra tình hình sử dụng phân bón ở địa phương hoặc trồng cây với kĩ thuật bón phân phù hợp: xác định mục tiêu, thiết kế phiếu khảo sát, thu thập và xử lí số liệu, rồi báo cáo kết quả và đề xuất giải pháp theo hướng nông nghiệp sạch.',
  intro:
    'Người trồng rau, trồng lúa ở địa phương em đang bón phân như thế nào: loại phân gì, bón bao nhiêu, lúc nào, bao bì vứt ở đâu? Chỉ khi có số liệu thật, em mới chỉ ra được điều gì đã làm tốt và điều gì cần thay đổi.',
  objectives: [
    'Thiết kế được phiếu khảo sát về tình hình sử dụng phân bón tại địa phương.',
    'Tiến hành được điều tra, xử lí số liệu bằng bảng, tỉ lệ phần trăm và biểu đồ.',
    'Viết và trình bày được báo cáo kết quả, đề xuất giải pháp sử dụng phân bón theo hướng nông nghiệp sạch.',
    'Hoặc: thực hành trồng cây với kĩ thuật bón phân phù hợp và đánh giá được kết quả.',
  ],
  sections: [
    {
      heading: 'Mục tiêu và hai hướng thực hiện',
      blocks: [
        {
          type: 'p',
          text: 'Mỗi nhóm chọn một trong hai hướng: điều tra tình hình sử dụng phân bón tại địa phương, hoặc thực hành trồng một loại cây với kĩ thuật bón phân phù hợp. Cả hai hướng đều vận dụng các nguyên tắc bón phân hợp lí: đúng loại, đúng liều lượng, đúng thời điểm và cân đối.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Xác định mục tiêu, đối tượng và phạm vi dự án; lập kế hoạch, phân công nhiệm vụ.',
            'Thiết kế công cụ: phiếu khảo sát (hướng điều tra) hoặc phương án trồng và bón phân (hướng thực hành).',
            'Thu thập số liệu: phỏng vấn, phát phiếu, quan sát, đo đếm, chụp ảnh.',
            'Xử lí số liệu: lập bảng, tính tỉ lệ, vẽ biểu đồ, rút ra nhận xét.',
            'Viết báo cáo, trình bày và đề xuất giải pháp.',
          ],
        },
      ],
    },
    {
      heading: 'Thiết kế phiếu khảo sát',
      blocks: [
        {
          type: 'p',
          text: 'Đối tượng là các hộ trồng trọt ở thôn, xóm hoặc phường của em. Nên khảo sát ít nhất $20$ hộ để tỉ lệ có ý nghĩa, và chọn hộ trồng các loại cây khác nhau.',
        },
        {
          type: 'table',
          caption: 'Các nội dung nên có trong phiếu khảo sát',
          head: ['Nội dung', 'Ví dụ câu hỏi'],
          rows: [
            ['Thông tin chung', 'Cây trồng chính, diện tích canh tác'],
            [
              'Loại phân',
              'Gia đình chỉ dùng phân hoá học, chỉ dùng phân hữu cơ, vi sinh, hay kết hợp?',
            ],
            ['Liều lượng', 'Gia đình căn cứ vào đâu để quyết định lượng phân bón?'],
            ['Thời điểm, cách bón', 'Bón lót, bón thúc mấy lần? Bón vào đất hay phun qua lá?'],
            ['An toàn nông sản', 'Ngừng bón đạm bao lâu trước khi thu hoạch?'],
            ['Môi trường', 'Bao bì phân bón được xử lí thế nào? Có bón vôi, luân canh không?'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Câu hỏi tốt',
          text: 'Câu hỏi ngắn, rõ, có sẵn các phương án để chọn (mỗi hộ chỉ hợp với đúng một phương án) và không gợi ý câu trả lời. Ví dụ, nên hỏi "Gia đình thường dùng loại phân bón nào?" thay vì "Gia đình có bón quá nhiều phân hoá học không?". Phiếu không hỏi thông tin riêng tư không cần thiết, và người được hỏi có quyền từ chối.',
        },
      ],
    },
    {
      heading: 'Xử lí số liệu và báo cáo',
      blocks: [
        {
          type: 'p',
          text: 'Với mỗi câu hỏi, đếm số hộ chọn mỗi phương án, rồi tính tỉ lệ:',
        },
        {
          type: 'tex',
          tex: '\\text{Tỉ lệ} = \\dfrac{\\text{Số hộ chọn phương án}}{\\text{Tổng số hộ được hỏi}} \\cdot 100\\%',
        },
        {
          type: 'p',
          text: 'Biểu diễn tỉ lệ bằng biểu đồ cột hoặc biểu đồ hình quạt tròn. So sánh với các nguyên tắc bón phân hợp lí để chỉ ra điểm đã làm tốt và điểm chưa phù hợp.',
        },
        {
          type: 'list',
          items: [
            'Báo cáo gồm: tên dự án, mục tiêu, đối tượng và phương pháp, kết quả (bảng, biểu đồ, ảnh), nhận xét, đề xuất giải pháp, kết luận.',
            'Đề xuất phải bám vào kết quả: ví dụ nhiều hộ vứt bao bì ra ruộng thì đề xuất đặt điểm thu gom bao bì.',
          ],
        },
      ],
    },
    {
      heading: 'Hướng 1: Điều tra tình hình sử dụng phân bón tại địa phương',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Nhiệm vụ: khảo sát ít nhất $20$ hộ trồng trọt trong khoảng $2$ tuần. Chuẩn bị: phiếu khảo sát in sẵn hoặc biểu mẫu trực tuyến, sổ ghi chép, điện thoại để chụp ảnh (khi được đồng ý).',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Thống nhất phiếu khảo sát với giáo viên; thử phiếu với $2$ hộ để sửa câu hỏi khó hiểu.',
            'Chia địa bàn cho các thành viên, phỏng vấn và ghi phiếu.',
            'Tổng hợp số phiếu cho từng phương án, tính tỉ lệ, vẽ biểu đồ.',
            'Rút ra nhận xét và đề xuất giải pháp; làm báo cáo, bài trình chiếu hoặc poster.',
          ],
        },
        {
          type: 'p',
          text: 'Sản phẩm: báo cáo có bảng số liệu, biểu đồ, ảnh minh hoạ và ít nhất ba đề xuất sử dụng phân bón theo hướng nông nghiệp sạch phù hợp với địa phương.',
        },
      ],
    },
    {
      heading: 'Hướng 2: Trồng cây với kĩ thuật bón phân phù hợp',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Nhiệm vụ: trồng một loại rau ngắn ngày (cải, xà lách, rau muống) trong khoảng $4$ đến $6$ tuần. Chuẩn bị: chậu hoặc luống, đất, cây giống, phân hữu cơ ủ hoai, phân NPK, cân, thước đo.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Tìm hiểu nhu cầu dinh dưỡng của cây, lập kế hoạch bón lót, bón thúc với lượng phân cụ thể.',
            'Trồng song song một luống (hoặc chậu) bón theo kế hoạch và một luống đối chứng bón theo thói quen hoặc không bón, các điều kiện khác như nhau.',
            'Mỗi tuần đo chiều cao, đếm số lá, ghi nhận màu lá, sâu bệnh; khi thu hoạch, cân khối lượng rau.',
            'So sánh hai luống, tính chi phí phân bón, rút ra kết luận.',
          ],
        },
        {
          type: 'p',
          text: 'Sản phẩm: nhật kí trồng cây có ảnh, bảng số liệu, biểu đồ sinh trưởng và báo cáo đánh giá kĩ thuật bón phân đã dùng.',
        },
      ],
    },
  ],
  explore: {
    title: 'Xử lí phiếu khảo sát',
    instruction:
      'Nhập số hộ chọn mỗi câu trả lời cho từng câu hỏi (hoặc bấm "Dùng số liệu mẫu"). Biểu đồ cho thấy tỉ lệ các câu trả lời, và phần nhận xét chỉ ra điều gì chưa phù hợp với nông nghiệp sạch cùng đề xuất cho báo cáo.',
  },
  examples: [
    {
      problem:
        'Nhóm khảo sát $20$ hộ về cách xử lí bao bì phân bón: $6$ hộ thu gom vào nơi quy định, $10$ hộ vứt ra ruộng, kênh mương, $4$ hộ đốt tại chỗ. Tính tỉ lệ và nêu nhận xét, đề xuất.',
      steps: [
        'Thu gom: $\\dfrac{6}{20} \\cdot 100\\% = 30\\%$.',
        'Vứt ra ruộng, kênh mương: $\\dfrac{10}{20} \\cdot 100\\% = 50\\%$; đốt: $\\dfrac{4}{20} \\cdot 100\\% = 20\\%$.',
        'Kiểm tra: $30\\% + 50\\% + 20\\% = 100\\%$.',
        'Nhận xét: $70\\%$ số hộ xử lí bao bì chưa đúng, gây ô nhiễm đất, nước và không khí.',
      ],
      answer:
        'Tỉ lệ lần lượt là $30\\%$, $50\\%$, $20\\%$. Đề xuất: đặt điểm thu gom bao bì trên đồng ruộng và tuyên truyền cho người dân.',
    },
    {
      problem:
        'Một nhóm định hỏi: "Gia đình có bón quá nhiều phân hoá học làm ô nhiễm môi trường không?". Câu hỏi này có phù hợp không? Hãy sửa lại.',
      steps: [
        'Câu hỏi gợi ý sẵn câu trả lời và mang tính phán xét, người được hỏi dễ trả lời "không" dù thực tế khác.',
        'Câu hỏi nên trung lập, có sẵn phương án để chọn và đo được.',
        'Sửa thành: "Gia đình căn cứ vào đâu để quyết định lượng phân bón? (theo hướng dẫn trên bao bì hoặc của cán bộ khuyến nông; theo kinh nghiệm; bón nhiều cho chắc)".',
      ],
      answer:
        'Chưa phù hợp vì gợi ý câu trả lời; nên hỏi trung lập về căn cứ chọn lượng phân, có các phương án để chọn.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các bước của dự án điều tra theo đúng thứ tự.',
      items: [
        'Xác định mục tiêu, đối tượng, phân công nhiệm vụ',
        'Thiết kế và thử phiếu khảo sát',
        'Phỏng vấn, thu thập phiếu',
        'Tổng hợp, tính tỉ lệ, vẽ biểu đồ',
        'Viết báo cáo và đề xuất giải pháp',
      ],
      answer: [0, 1, 2, 3, 4],
      hints: ['Chỉ xử lí được số liệu khi đã thu thập xong phiếu.'],
      solution:
        'Xác định mục tiêu, thiết kế phiếu, thu thập phiếu, xử lí số liệu, rồi viết báo cáo và đề xuất.',
    },
    {
      type: 'number',
      prompt:
        'Trong $20$ hộ được hỏi có $9$ hộ chỉ dùng phân hoá học. Tỉ lệ hộ chỉ dùng phân hoá học là bao nhiêu phần trăm?',
      answer: 45,
      unit: '%',
      hints: ['Chia số hộ chọn phương án cho tổng số hộ, rồi nhân $100\\%$.'],
      solution: 'Tỉ lệ $= \\dfrac{9}{20} \\cdot 100\\% = 45\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Khảo sát $25$ hộ, có $15$ hộ vẫn bón đạm sát ngày thu hoạch rau. Tỉ lệ này là bao nhiêu phần trăm?',
      answer: 60,
      unit: '%',
      hints: ['$\\dfrac{15}{25}$ bằng bao nhiêu?'],
      solution: 'Tỉ lệ $= \\dfrac{15}{25} \\cdot 100\\% = 60\\%$.',
    },
    {
      type: 'choice',
      prompt: 'Câu hỏi nào phù hợp nhất để đưa vào phiếu khảo sát?',
      options: [
        'Gia đình thường dùng loại phân bón nào? (chỉ phân hoá học; chỉ phân hữu cơ, vi sinh; kết hợp cả hai)',
        'Gia đình có bón phân bừa bãi làm hại môi trường không?',
        'Vì sao gia đình không chịu dùng phân hữu cơ?',
        'Gia đình thấy phân bón thế nào?',
      ],
      answer: 0,
      hints: ['Câu hỏi tốt thì trung lập, rõ ràng và có các phương án để chọn.'],
      solution:
        'Câu hỏi về loại phân thường dùng là trung lập, có phương án cụ thể. Các câu còn lại hoặc gợi ý, phán xét câu trả lời, hoặc quá mơ hồ.',
    },
    {
      type: 'multi',
      prompt: 'Những nội dung nào nên có trong phiếu khảo sát về sử dụng phân bón?',
      options: [
        'Cây trồng chính và loại phân sử dụng',
        'Căn cứ chọn lượng phân bón',
        'Thời điểm và cách bón phân',
        'Cách xử lí bao bì phân bón',
        'Số tài khoản ngân hàng của gia đình',
        'Điểm số học tập của con cái trong gia đình',
      ],
      answers: [0, 1, 2, 3],
      hints: ['Chỉ hỏi những gì phục vụ mục tiêu của dự án.'],
      solution:
        'Phiếu chỉ hỏi về cây trồng, loại phân, liều lượng, thời điểm, cách bón và xử lí bao bì. Thông tin riêng tư không liên quan thì không hỏi.',
    },
    {
      type: 'choice',
      prompt:
        'Kết quả điều tra cho thấy $40\\%$ số hộ vẫn bón đạm sát ngày thu hoạch rau. Đề xuất nào bám sát kết quả này nhất?',
      options: [
        'Tuyên truyền, hướng dẫn người trồng ngừng bón đạm đủ lâu trước khi thu hoạch để rau không tích luỹ nitrate',
        'Đề nghị tăng lượng phân lân cho tất cả các hộ',
        'Khuyên người dân chuyển sang nuôi cá',
        'Đề nghị đốt bao bì phân bón tại chỗ cho gọn',
      ],
      answer: 0,
      hints: ['Vấn đề phát hiện được nằm ở thời điểm bón đạm.'],
      solution:
        'Bón đạm sát ngày thu hoạch làm rau tích luỹ nitrate, không an toàn. Đề xuất phù hợp là hướng dẫn ngừng bón đạm đủ thời gian trước thu hoạch.',
    },
    {
      type: 'choice',
      prompt:
        'Với hướng thực hành trồng cây, vì sao cần trồng thêm một luống đối chứng với điều kiện khác như nhau?',
      options: [
        'Để so sánh, biết chắc khác biệt về sinh trưởng là do kĩ thuật bón phân',
        'Để có thêm rau ăn',
        'Vì luống đối chứng luôn cho năng suất cao hơn',
        'Để không phải ghi chép số liệu',
      ],
      answer: 0,
      hints: ['Nếu chỉ có một luống, em so sánh kết quả với cái gì?'],
      solution:
        'Luống đối chứng giống mọi điều kiện, chỉ khác cách bón phân, nên khác biệt về sinh trưởng, năng suất có thể quy cho kĩ thuật bón phân.',
    },
  ],
  takeaways: [
    'Dự án gồm: xác định mục tiêu, thiết kế công cụ, thu thập số liệu, xử lí số liệu, báo cáo và đề xuất.',
    'Phiếu khảo sát có câu hỏi ngắn, trung lập, có phương án chọn, bám vào nguyên tắc bón phân hợp lí.',
    'Tỉ lệ = số hộ chọn phương án : tổng số hộ $\\cdot\\, 100\\%$; biểu diễn bằng biểu đồ cột hoặc hình quạt tròn.',
    'Đề xuất giải pháp phải dựa trên kết quả điều tra và hướng tới nông nghiệp sạch.',
  ],
};
