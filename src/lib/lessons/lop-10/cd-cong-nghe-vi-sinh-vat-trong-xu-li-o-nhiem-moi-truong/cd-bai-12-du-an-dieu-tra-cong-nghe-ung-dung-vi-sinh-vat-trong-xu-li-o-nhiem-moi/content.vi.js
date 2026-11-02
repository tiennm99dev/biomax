/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Dự án điều tra công nghệ ứng dụng vi sinh vật trong xử lí ô nhiễm tại địa phương: lập kế hoạch, khảo sát thực tế, phân tích số liệu, đánh giá hiệu quả và báo cáo kết quả.',
  intro:
    'Trang trại gần nhà em có hầm biogas không? Rác của xã đi về đâu? Nước thải của nhà máy gần sông được xử lí thế nào? Trong dự án này, em sẽ đi tìm câu trả lời bằng chính các cuộc khảo sát của nhóm mình.',
  objectives: [
    'Lập được kế hoạch điều tra một công nghệ vi sinh vật đang dùng tại địa phương.',
    'Thu thập được thông tin bằng quan sát, phỏng vấn, tra cứu và ghi chép theo mẫu.',
    'Phân tích được số liệu, tính được hiệu suất xử lí, nêu được ưu điểm và hạn chế.',
    'Trình bày được báo cáo và đề xuất giải pháp phù hợp với địa phương.',
  ],
  sections: [
    {
      heading: 'Chọn đề tài điều tra',
      blocks: [
        {
          type: 'p',
          text: 'Hãy chọn một đối tượng có thật, gần nơi em sống và có người sẵn sàng trả lời câu hỏi. Dưới đây là một số gợi ý, gắn với kiến thức của các bài trước.',
        },
        {
          type: 'table',
          caption: 'Gợi ý đề tài',
          head: ['Nơi khảo sát', 'Công nghệ', 'Câu hỏi nên trả lời'],
          rows: [
            [
              'Trang trại, hộ chăn nuôi',
              'Hầm khí sinh học, đệm lót sinh học',
              'Khí dùng vào việc gì? Bã thải đi đâu? Còn mùi không?',
            ],
            [
              'Bãi rác, tổ thu gom, gia đình',
              'Ủ phân hữu cơ, chế phẩm vi sinh',
              'Rác có được phân loại không? Phân ủ dùng vào đâu?',
            ],
            [
              'Nhà máy, khu dân cư, bệnh viện',
              'Trạm xử lí nước thải',
              'Có những bể nào? Hiếu khí hay kị khí? Số liệu trước và sau xử lí?',
            ],
            [
              'Ruộng, vườn, ao nuôi',
              'Ủ rơm rạ, chế phẩm vi sinh cho ao',
              'Dùng chế phẩm nào? Hiệu quả so với cách cũ ra sao?',
            ],
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
          text: 'Mục tiêu: đánh giá được một công nghệ vi sinh vật đang dùng tại địa phương bằng bằng chứng do nhóm tự thu thập, rồi đề xuất cải tiến. Mỗi nhóm $4$ đến $6$ bạn, thực hiện trong khoảng $2$ đến $3$ tuần. Chuẩn bị: phiếu khảo sát, sổ ghi chép, điện thoại để chụp ảnh khi được phép, bản đồ địa phương.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Lập kế hoạch: chọn đề tài, phân công, liên hệ trước với nơi khảo sát, soạn phiếu câu hỏi. Giáo viên duyệt kế hoạch trước khi đi.',
            'Khảo sát: quan sát, phỏng vấn người vận hành, xin số liệu trước và sau xử lí, đánh dấu địa điểm trên bản đồ.',
            'Tra cứu: tìm hiểu vi sinh vật và nguyên lí của công nghệ, đối chiếu với những gì đã quan sát.',
            'Xử lí số liệu: lập bảng, tính hiệu suất, ghi rõ nguồn số liệu, và phân biệt số đo với lời kể.',
            'Đánh giá: nêu ưu điểm, hạn chế và đề xuất giải pháp phù hợp với điều kiện địa phương.',
            'Báo cáo: trình bày trước lớp bằng áp phích hoặc trình chiếu, trả lời câu hỏi phản biện.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'An toàn khi khảo sát',
          text: 'Đi cùng người lớn hoặc giáo viên, xin phép trước khi vào và trước khi chụp ảnh. Không tự ý lại gần miệng hầm biogas, bể kín hay bể sâu: khí $\\mathrm{CH_4}$, $\\mathrm{H_2S}$ có thể gây ngạt, cháy nổ. Không tự lấy mẫu nước thải y tế, không chạm vào chất thải; đeo khẩu trang, găng tay khi được hướng dẫn và rửa tay sau đó.',
        },
      ],
    },
    {
      heading: 'Báo cáo và đánh giá',
      blocks: [
        {
          type: 'p',
          text: 'Báo cáo cần có: lí do chọn đề tài, thông tin nơi khảo sát, bản đồ, nguyên lí của công nghệ, nhóm vi sinh vật tham gia, bảng số liệu và hiệu suất, ưu điểm, hạn chế, đề xuất, nguồn tham khảo. Nếu nơi khảo sát không có số liệu, hãy nói rõ; đừng tự đưa ra con số.',
        },
        {
          type: 'table',
          caption: 'Tiêu chí đánh giá dự án',
          head: ['Tiêu chí', 'Mức đạt tốt'],
          rows: [
            ['Kế hoạch', 'Rõ mục tiêu, phân công và thời hạn, được duyệt trước khi đi'],
            ['Thông tin', 'Có quan sát trực tiếp, có phỏng vấn, ghi rõ nguồn'],
            ['Kiến thức', 'Giải thích đúng nguyên lí và nhóm vi sinh vật'],
            ['Số liệu', 'Có bảng, tính đúng hiệu suất, nhận xét dựa trên số liệu'],
            ['Đề xuất', 'Cụ thể, khả thi với địa phương, nêu được cái giá phải trả'],
            ['Trình bày', 'Rõ ràng, đúng giờ, trả lời được câu hỏi phản biện'],
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Bản đồ khảo sát',
    instruction:
      'Luyện trên bản đồ mẫu: chạm vào từng địa điểm và chọn công nghệ phù hợp. Sau đó ghi chú những điểm nhóm em khảo sát thật, tính hiệu suất và sao chép bản báo cáo.',
  },
  examples: [
    {
      problem:
        'Một nhóm khảo sát trạm xử lí nước thải và được cung cấp số liệu: BOD đầu vào $320$ mg/L, đầu ra $40$ mg/L. Tính hiệu suất. Biết tiêu chuẩn của trạm cho phép BOD đầu ra không quá $50$ mg/L, hãy nhận xét.',
      steps: [
        'Lượng BOD đã giảm: $320 - 40 = 280$ mg/L.',
        'Hiệu suất: $\\dfrac{280}{320} \\cdot 100\\% = 87{,}5\\%$.',
        'So sánh: $40 < 50$, nên nước đầu ra đạt tiêu chuẩn của trạm ở lần đo này.',
        'Một số liệu chỉ cho biết kết quả của một lần đo; nên xin thêm số liệu ở nhiều thời điểm.',
      ],
      answer:
        'Hiệu suất đạt $87{,}5\\%$, đầu ra đạt tiêu chuẩn ở lần đo đó; cần thêm số liệu nhiều lần để kết luận chắc chắn.',
    },
    {
      problem:
        'Chủ trại lợn nói: "Từ khi có hầm biogas, tôi không còn phải mua gas, và chuồng cũng bớt mùi." Nhóm em có thể ghi vào báo cáo là "hầm biogas loại bỏ hoàn toàn ô nhiễm" không? Nên viết lại thế nào?',
      steps: [
        'Đây là lời kể của một người, chưa phải số đo. Cần ghi rõ nguồn.',
        '"Bớt mùi" không có nghĩa là "loại bỏ hoàn toàn". Bã và nước sau hầm vẫn cần được xử lí, sử dụng đúng cách.',
        'Có thể kiểm chứng thêm: quan sát trực tiếp, tính lượng gas không phải mua, hỏi những hộ xung quanh.',
      ],
      answer:
        'Không nên. Có thể viết: "Theo chủ trại, sau khi có hầm biogas, gia đình không còn phải mua gas và mùi chuồng giảm; nhóm chưa có số đo để kiểm chứng."',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các bước của dự án điều tra.',
      items: [
        'Lập kế hoạch và liên hệ nơi khảo sát',
        'Khảo sát thực tế, thu thập số liệu',
        'Xử lí số liệu, đánh giá ưu điểm và hạn chế',
        'Trình bày báo cáo và đề xuất',
      ],
      answer: [0, 1, 2, 3],
      hints: ['Muốn phân tích số liệu thì phải có số liệu trước đã.'],
      solution:
        'Lập kế hoạch, khảo sát thực tế, xử lí số liệu và đánh giá, rồi trình bày báo cáo và đề xuất.',
    },
    {
      type: 'number',
      prompt:
        'Số liệu do trạm xử lí cung cấp: BOD đầu vào $240$ mg/L, đầu ra $36$ mg/L. Hiệu suất xử lí bằng bao nhiêu phần trăm?',
      answer: 85,
      unit: '%',
      hints: ['Tính lượng đã giảm.', 'Chia cho lượng đầu vào rồi nhân với $100\\%$.'],
      solution:
        'Đã giảm $240 - 36 = 204$ mg/L. Hiệu suất: $\\dfrac{204}{240} \\cdot 100\\% = 85\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Khảo sát cho biết một tổ thu gom nhận $500$ kg rác mỗi ngày, trong đó $60\\%$ là rác hữu cơ dễ phân giải. Mỗi ngày có bao nhiêu kg rác có thể đưa đi ủ phân?',
      answer: 300,
      unit: 'kg',
      hints: ['$60\\% = 0{,}6$.'],
      solution: '$500 \\cdot 0{,}6 = 300$ kg.',
    },
    {
      type: 'multi',
      prompt: 'Những việc nào đúng khi đi khảo sát một hầm biogas?',
      options: [
        'Xin phép chủ hộ trước khi đến và trước khi chụp ảnh',
        'Đi cùng giáo viên hoặc người lớn',
        'Mở nắp hầm để nhìn vào bên trong',
        'Thử châm lửa ở đường ống để kiểm tra khí',
      ],
      answers: [0, 1],
      hints: ['Khí sinh học có methane và một lượng nhỏ $\\mathrm{H_2S}$.'],
      solution:
        'Cần xin phép và đi cùng người lớn. Không mở nắp hầm hay tự châm lửa, vì methane dễ cháy nổ, còn $\\mathrm{H_2S}$ độc và khí trong hầm có thể gây ngạt.',
    },
    {
      type: 'choice',
      prompt: 'Câu nào là kết luận tốt nhất trong báo cáo điều tra?',
      options: [
        'Đầu ra của trạm giảm từ $320$ xuống $40$ mg/L BOD trong lần đo ngày $5/3$, theo số liệu trạm cung cấp',
        'Trạm xử lí nước thải này rất tốt và không bao giờ gây ra ô nhiễm cho môi trường xung quanh',
        'Mọi người đều nói nước sau trạm xử lí rất sạch, nên chắc chắn là trạm hoạt động hiệu quả',
        'Theo nhóm em đoán, hiệu suất xử lí của trạm này có thể lên tới khoảng $90\\%$ hoặc hơn nữa',
      ],
      answer: 0,
      hints: ['Một kết luận tốt gắn với số liệu, thời điểm và nguồn.'],
      solution:
        'Câu có số liệu, thời điểm đo và nguồn là câu có thể kiểm chứng. Các câu còn lại chỉ là nhận định chung, lời đồn hoặc phỏng đoán.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi nơi khảo sát với công nghệ phù hợp nhất.',
      left: ['Trại lợn', 'Rác hữu cơ đã phân loại', 'Nước thải nhà máy sữa', 'Đất ngấm xăng dầu'],
      right: [
        'Hầm khí sinh học',
        'Ủ phân hữu cơ',
        'Trạm xử lí nhiều bể (lắng, kị khí, hiếu khí)',
        'Bổ sung N, P, thông khí cho vi sinh vật trong đất',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Nhớ lại từng công nghệ đã học ở bài trước.'],
      solution:
        'Trại lợn: hầm khí sinh học. Rác hữu cơ: ủ phân. Nước thải nhà máy sữa: trạm nhiều bể. Đất ngấm xăng dầu: bổ sung N, P, thông khí.',
    },
    {
      type: 'choice',
      prompt: 'Nơi khảo sát không có số liệu về BOD. Nhóm nên làm gì trong báo cáo?',
      options: [
        'Nói rõ là chưa có số liệu, ghi lại quan sát định tính và đề xuất cách đo',
        'Lấy số liệu của một trạm khác rồi ghi là của nơi đã đến khảo sát',
        'Tự ước lượng một con số hợp lí, sau đó ghi đó là số đo của nhóm',
        'Bỏ hẳn nội dung về hiệu quả xử lí và coi như công nghệ đạt yêu cầu',
      ],
      answer: 0,
      hints: ['Báo cáo phải trung thực về nguồn của mọi thông tin.'],
      solution:
        'Cần trung thực: nói rõ chưa có số liệu, ghi những gì quan sát được (màu, mùi, độ trong) và đề xuất cách đo. Không được tự đưa ra con số.',
    },
  ],
  takeaways: [
    'Một cuộc điều tra tốt gồm: kế hoạch, khảo sát thực tế, xử lí số liệu, đánh giá và báo cáo.',
    'Hiệu suất xử lí bằng lượng chất ô nhiễm đã giảm chia cho lượng ban đầu.',
    'Kết luận phải dựa trên bằng chứng, ghi rõ nguồn và phân biệt số đo với lời kể.',
    'An toàn là trên hết: đi cùng người lớn, xin phép, tránh xa hầm kín và không tiếp xúc với chất thải.',
  ],
};
