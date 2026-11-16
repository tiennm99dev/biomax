/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Dự án điều tra hiện trạng mất vệ sinh an toàn thực phẩm tại địa phương: lập kế hoạch, xây dựng phiếu đánh giá các điểm bán, chế biến thực phẩm, khảo sát thực tế, xử lí số liệu bằng tỉ lệ phần trăm và đề xuất giải pháp cho người bán, người mua và chính quyền.',
  intro:
    'Quanh trường em có bao nhiêu hàng quà vặt, quán ăn, sạp chợ? Thực phẩm ở đó được che đậy, bảo quản ra sao, người bán có dùng kẹp gắp hay bốc bằng tay? Trong dự án này, em sẽ trở thành người khảo sát: đến tận nơi quan sát, ghi phiếu, tổng hợp số liệu và đề xuất giải pháp cho địa phương.',
  objectives: [
    'Lập được kế hoạch và xây dựng được phiếu đánh giá vệ sinh an toàn thực phẩm của các điểm bán, chế biến thực phẩm.',
    'Khảo sát được thực tế một số điểm bán, chế biến thực phẩm ở địa phương một cách trung thực, an toàn và tôn trọng người được khảo sát.',
    'Xử lí được số liệu khảo sát bằng bảng, tỉ lệ phần trăm và biểu đồ; rút ra được nhận xét về hiện trạng.',
    'Đề xuất được giải pháp khả thi cho người bán, người mua và chính quyền địa phương; trình bày được báo cáo.',
  ],
  sections: [
    {
      heading: 'Mục tiêu và kế hoạch dự án',
      blocks: [
        {
          type: 'p',
          text: 'Dự án vận dụng kiến thức của chuyên đề: các tác nhân gây ô nhiễm thực phẩm, các khâu dễ bị ô nhiễm, nguyên nhân ngộ độc và các biện pháp phòng ngừa. Mỗi nhóm $4$ đến $6$ bạn thực hiện trong khoảng $2$ đến $3$ tuần.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Xác định mục tiêu, đối tượng (chợ, quán ăn, hàng rong, căng tin, cửa hàng), phạm vi (quanh trường, một phường, xã) và thời gian khảo sát.',
            'Vẽ sơ đồ khu vực, đánh dấu các điểm sẽ khảo sát; phân công mỗi bạn phụ trách một số điểm.',
            'Xây dựng phiếu đánh giá với các tiêu chí rõ ràng, quan sát được.',
            'Khảo sát thực tế: quan sát, ghi phiếu, phỏng vấn ngắn người bán và người mua; chụp ảnh khi được đồng ý.',
            'Xử lí số liệu, rút ra nhận xét và đề xuất giải pháp.',
            'Báo cáo kết quả và gửi đề xuất tới nhà trường, tổ dân phố hoặc trạm y tế.',
          ],
        },
      ],
    },
    {
      heading: 'Phiếu đánh giá điểm bán thực phẩm',
      blocks: [
        {
          type: 'table',
          caption: 'Các tiêu chí gợi ý cho phiếu đánh giá',
          head: ['Khâu', 'Tiêu chí quan sát'],
          rows: [
            ['Nguồn gốc', 'Thực phẩm rõ nguồn gốc, còn hạn dùng, không dùng chất bảo quản lạ'],
            ['Bày bán', 'Thực phẩm được che đậy, bày cao khỏi mặt đất, tránh ruồi, bụi'],
            ['Chế biến', 'Để riêng thực phẩm sống và chín'],
            ['Người bán', 'Trang phục sạch, dùng kẹp, găng tay khi lấy thức ăn chín'],
            ['Dụng cụ', 'Có nước sạch để rửa tay, rửa dụng cụ'],
            ['Bảo quản', 'Thực phẩm tươi sống, dễ hỏng được giữ lạnh'],
            ['Môi trường', 'Nơi bán sạch, khô ráo; rác có thùng đậy nắp'],
          ],
        },
        {
          type: 'p',
          text: 'Mỗi tiêu chí đạt được $1$ điểm. Tỉ lệ đạt của một điểm bán là số tiêu chí đạt chia cho tổng số tiêu chí, nhân $100\\%$. Nhóm thống nhất trước cách xếp loại, ví dụ: từ $80\\%$ trở lên là "Đạt", từ $50\\%$ đến dưới $80\\%$ là "Cần cải thiện", dưới $50\\%$ là "Không đạt"; điểm bán có thực phẩm không rõ nguồn gốc hoặc quá hạn thì không được xếp "Đạt".',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Khảo sát trung thực, an toàn, tôn trọng',
          text: 'Ghi đúng điều quan sát được, không suy đoán. Xin phép trước khi phỏng vấn, chụp ảnh; không công khai tên, ảnh người bán trên mạng xã hội. Đi theo nhóm, có sự đồng ý của thầy cô và gia đình. Kết quả dùng để đề xuất cải thiện, không để bêu xấu ai.',
        },
      ],
    },
    {
      heading: 'Xử lí số liệu và đề xuất giải pháp',
      blocks: [
        {
          type: 'tex',
          tex: '\\text{Tỉ lệ điểm bán đạt một tiêu chí} = \\dfrac{\\text{Số điểm bán đạt tiêu chí}}{\\text{Số điểm bán đã khảo sát}} \\cdot 100\\%',
        },
        {
          type: 'p',
          text: 'Lập bảng tổng hợp, vẽ biểu đồ cột tỉ lệ đạt của từng tiêu chí. Tiêu chí có tỉ lệ đạt thấp nhất là vấn đề cần ưu tiên giải quyết. Giải pháp cần cụ thể, khả thi và hướng tới đúng đối tượng:',
        },
        {
          type: 'list',
          items: [
            'Người bán: che đậy thực phẩm, dùng kẹp gắp, dụng cụ riêng cho đồ sống và chín, nhập hàng có nguồn gốc.',
            'Người mua: chọn nơi bán sạch sẽ, đọc nhãn, hạn dùng, không mua thực phẩm có dấu hiệu bất thường.',
            'Nhà trường, tổ dân phố, chính quyền: tuyên truyền, tập huấn, kiểm tra và xử lí vi phạm; bố trí nơi đổ rác, nước sạch cho khu bán hàng.',
          ],
        },
      ],
    },
    {
      heading: 'Nhiệm vụ dự án: khảo sát và báo cáo',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Sản phẩm của nhóm là một bản báo cáo (bài trình chiếu hoặc áp phích khoa học) về hiện trạng vệ sinh an toàn thực phẩm ở khu vực đã khảo sát.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Chuẩn bị: sơ đồ khu vực, phiếu đánh giá in sẵn (ít nhất $5$ điểm bán mỗi nhóm), bút, điện thoại để chụp ảnh khi được phép.',
            'Khảo sát mỗi điểm bán ít nhất một lần vào giờ đông khách; ghi phiếu ngay tại chỗ.',
            'Nhập số liệu vào bảng, tính tỉ lệ đạt của từng điểm bán và từng tiêu chí; vẽ biểu đồ cột; đánh dấu kết quả lên sơ đồ bằng màu.',
            'Nhận xét: khu vực có bao nhiêu điểm bán đạt, vấn đề phổ biến nhất là gì, vì sao.',
            'Đề xuất giải pháp cho từng đối tượng và trình bày báo cáo trước lớp; gửi bản đề xuất tới nhà trường hoặc tổ dân phố.',
          ],
        },
        {
          type: 'table',
          caption: 'Tiêu chí đánh giá báo cáo dự án',
          head: ['Tiêu chí', 'Yêu cầu'],
          rows: [
            ['Số liệu', 'Thu thập trung thực, đủ số điểm bán, phiếu rõ ràng'],
            ['Xử lí', 'Tính tỉ lệ đúng, bảng và biểu đồ dễ đọc'],
            ['Nhận xét', 'Dựa trên số liệu, chỉ ra vấn đề phổ biến nhất và nguyên nhân'],
            ['Giải pháp', 'Cụ thể, khả thi, đúng đối tượng'],
            ['Trình bày', 'Ngắn gọn, mạch lạc; tôn trọng người được khảo sát'],
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Bản đồ khảo sát điểm bán thực phẩm',
    instruction:
      'Chạm vào một điểm bán trên bản đồ, đọc ghi chép quan sát rồi đánh dấu các tiêu chí đạt và lưu phiếu. Phiếu được so với ghi chép, điểm bán đổi màu theo xếp loại; phần tổng hợp chỉ ra tiêu chí yếu nhất và đề xuất giải pháp.',
  },
  examples: [
    {
      problem:
        'Một quán ăn đạt $5$ trong $7$ tiêu chí của phiếu, trong đó có tiêu chí về nguồn gốc thực phẩm. Tính tỉ lệ đạt và xếp loại theo cách xếp loại trong bài.',
      steps: [
        'Tỉ lệ đạt: $\\dfrac{5}{7} \\cdot 100\\% \\approx 71\\%$.',
        '$71\\%$ nằm trong khoảng từ $50\\%$ đến dưới $80\\%$.',
        'Quán đạt tiêu chí nguồn gốc nhưng tỉ lệ chưa tới $80\\%$, nên chưa được xếp "Đạt".',
      ],
      answer: 'Tỉ lệ đạt khoảng $71\\%$, xếp loại "Cần cải thiện".',
    },
    {
      problem:
        'Nhóm khảo sát $8$ điểm bán quanh trường: $6$ điểm che đậy thực phẩm, $5$ điểm để riêng đồ sống và chín, chỉ $2$ điểm có nước sạch rửa tay, rửa dụng cụ. Tính tỉ lệ đạt từng tiêu chí, nêu vấn đề cần ưu tiên và đề xuất giải pháp.',
      steps: [
        'Che đậy: $\\dfrac{6}{8} \\cdot 100\\% = 75\\%$.',
        'Để riêng sống – chín: $\\dfrac{5}{8} \\cdot 100\\% = 62{,}5\\%$.',
        'Nước sạch: $\\dfrac{2}{8} \\cdot 100\\% = 25\\%$, thấp nhất.',
        'Thiếu nước sạch thì tay, bát đũa, dụng cụ không được rửa sạch: mầm bệnh dễ truyền vào thức ăn.',
        'Đề xuất: người bán trang bị thùng nước sạch có vòi và xà phòng; nhà trường, tổ dân phố bố trí điểm cấp nước cho khu bán hàng và tuyên truyền rửa tay.',
      ],
      answer:
        'Tỉ lệ đạt: che đậy $75\\%$, để riêng sống – chín $62{,}5\\%$, nước sạch $25\\%$. Ưu tiên giải quyết việc thiếu nước sạch.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các bước của dự án điều tra theo đúng thứ tự.',
      items: [
        'Lập kế hoạch, vẽ sơ đồ khu vực, phân công',
        'Xây dựng phiếu đánh giá',
        'Khảo sát thực tế, ghi phiếu',
        'Xử lí số liệu, rút ra nhận xét',
        'Đề xuất giải pháp, báo cáo kết quả',
      ],
      answer: [0, 1, 2, 3, 4],
      hints: ['Phải có phiếu trước khi đi khảo sát, có số liệu trước khi đề xuất.'],
      solution:
        'Lập kế hoạch → xây dựng phiếu → khảo sát → xử lí số liệu → đề xuất giải pháp và báo cáo.',
    },
    {
      type: 'choice',
      prompt: 'Tiêu chí nào phù hợp nhất để đưa vào phiếu đánh giá một điểm bán thực phẩm?',
      options: [
        'Thức ăn chín được để trong tủ kính hoặc có nắp đậy',
        'Thức ăn có ngon không',
        'Người bán có thân thiện không',
        'Giá bán có rẻ không',
      ],
      answer: 0,
      hints: [
        'Tiêu chí tốt phải liên quan tới an toàn thực phẩm và quan sát được, không tuỳ cảm nhận.',
      ],
      solution:
        'Việc che đậy thức ăn quan sát được và liên quan trực tiếp tới ô nhiễm thực phẩm. Ngon, thân thiện, rẻ là cảm nhận cá nhân, không đánh giá được độ an toàn.',
    },
    {
      type: 'number',
      prompt:
        'Khảo sát $12$ điểm bán, có $9$ điểm để riêng thực phẩm sống và chín. Tỉ lệ điểm bán đạt tiêu chí này là bao nhiêu phần trăm?',
      answer: 75,
      unit: '%',
      hints: ['Tỉ lệ = số điểm đạt : số điểm đã khảo sát $\\cdot 100\\%$.'],
      solution: '$\\dfrac{9}{12} \\cdot 100\\% = 75\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Một xe bán hàng rong đạt $3$ trong $7$ tiêu chí. Tỉ lệ đạt là bao nhiêu phần trăm (làm tròn đến hàng đơn vị)?',
      answer: 43,
      unit: '%',
      hints: ['Tính $\\dfrac{3}{7} \\cdot 100\\%$ rồi làm tròn.'],
      solution:
        '$\\dfrac{3}{7} \\cdot 100\\% \\approx 42{,}86\\% \\approx 43\\%$, dưới $50\\%$ nên xếp loại "Không đạt".',
    },
    {
      type: 'multi',
      prompt: 'Khi đi khảo sát, những việc làm nào là đúng?',
      options: [
        'Xin phép người bán trước khi phỏng vấn, chụp ảnh',
        'Ghi phiếu đúng điều quan sát được',
        'Đi theo nhóm, có sự đồng ý của thầy cô và gia đình',
        'Đăng ảnh quầy hàng bẩn kèm tên người bán lên mạng xã hội',
        'Tự đánh dấu "không đạt" cho điểm bán chưa đến khảo sát',
      ],
      answers: [0, 1, 2],
      hints: ['Khảo sát phải trung thực, an toàn và tôn trọng người được khảo sát.'],
      solution:
        'Xin phép, ghi đúng sự thật và đi an toàn là yêu cầu của khảo sát. Đăng ảnh, tên người bán xâm phạm quyền riêng tư; đánh dấu khi chưa khảo sát là bịa số liệu.',
    },
    {
      type: 'choice',
      prompt:
        'Kết quả khảo sát: tiêu chí "người bán dùng kẹp, găng tay khi lấy thức ăn chín" chỉ đạt $20\\%$, thấp nhất. Giải pháp nào phù hợp nhất?',
      options: [
        'Tập huấn cho người bán về lây nhiễm qua tay, phát kẹp gắp, găng tay và tuyên truyền người mua nhắc nhở',
        'Yêu cầu đóng cửa tất cả các điểm bán',
        'Khuyên học sinh uống kháng sinh trước khi ăn quà',
        'Không cần làm gì vì thức ăn đã nấu chín',
      ],
      answer: 0,
      hints: ['Thức ăn chín bị bốc bằng tay sẽ nhiễm lại mầm bệnh; giải pháp phải khả thi.'],
      solution:
        'Mầm bệnh trên tay truyền vào thức ăn chín. Tập huấn, trang bị kẹp, găng tay và tuyên truyền là giải pháp cụ thể, khả thi. Đóng cửa tất cả là không thực tế; kháng sinh không dùng để phòng ngộ độc.',
    },
    {
      type: 'choice',
      prompt:
        'Một sạp quả bày hàng sạch sẽ, đạt $6$ trong $7$ tiêu chí, nhưng ngâm quả trong một loại thuốc không rõ tên cho lâu hỏng. Xếp loại nào hợp lí?',
      options: [
        'Cần cải thiện, vì thực phẩm có chất bảo quản không rõ nguồn gốc',
        'Đạt, vì tỉ lệ đạt trên $80\\%$',
        'Đạt, vì quả không cần nấu',
        'Không cần đánh giá sạp hoa quả',
      ],
      answer: 0,
      hints: ['Một hoá chất lạ có thể gây hại hơn cả một quầy hàng hơi bừa bộn.'],
      solution:
        'Tỉ lệ $\\dfrac{6}{7} \\approx 86\\%$ nhưng thực phẩm có thể tồn dư hoá chất độc: không được xếp "Đạt". Đề xuất người bán không dùng hoá chất lạ, người mua chọn quả rõ nguồn gốc.',
    },
    {
      type: 'multi',
      prompt: 'Những giải pháp nào hướng tới chính quyền, tổ dân phố?',
      options: [
        'Kiểm tra, xử lí cơ sở bán thực phẩm không rõ nguồn gốc',
        'Bố trí điểm thu gom rác, cấp nước sạch cho khu chợ',
        'Tổ chức tập huấn an toàn thực phẩm cho người bán',
        'Người mua đọc nhãn, hạn dùng trước khi mua',
      ],
      answers: [0, 1, 2],
      hints: ['Đọc nhãn là việc của ai?'],
      solution:
        'Kiểm tra, xử lí vi phạm, bố trí hạ tầng và tổ chức tập huấn là việc của chính quyền, tổ dân phố. Đọc nhãn, hạn dùng là việc của người mua.',
    },
  ],
  takeaways: [
    'Dự án gồm: lập kế hoạch, xây dựng phiếu đánh giá, khảo sát thực tế, xử lí số liệu, đề xuất giải pháp và báo cáo.',
    'Phiếu đánh giá dùng tiêu chí quan sát được, theo từng khâu: nguồn gốc, bày bán, chế biến, người bán, dụng cụ, bảo quản, môi trường.',
    'Tỉ lệ đạt = số tiêu chí (hoặc số điểm bán) đạt : tổng số $\\cdot 100\\%$; tiêu chí có tỉ lệ thấp nhất là vấn đề cần ưu tiên.',
    'Giải pháp phải cụ thể, khả thi, hướng tới đúng người bán, người mua và chính quyền; khảo sát trung thực và tôn trọng người được khảo sát.',
  ],
};
