/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Thực hành bấm ngọn, tỉa cành để quan sát ưu thế ngọn; xử lí α-NAA cho cây vừng ở các nồng độ khác nhau; đếm vòng gỗ trên lát cắt ngang thân để tính tuổi cây và viết báo cáo.',
  intro:
    'Người trồng rau muống, mồng tơi thường ngắt ngọn để rau ra nhiều nhánh; người làm vườn tỉa bớt cành già; còn người thợ gỗ nhìn lát cắt thân cây là đoán được tuổi cây. Bài thực hành này giúp em tự làm và giải thích những việc đó bằng hiểu biết về hormone và sinh trưởng thứ cấp.',
  objectives: [
    'Thực hiện được bấm ngọn, tỉa cành và giải thích kết quả dựa vào ưu thế ngọn.',
    'Bố trí được thí nghiệm xử lí α-NAA (auxin nhân tạo) ở các nồng độ, có lô đối chứng; thu và xử lí số liệu.',
    'Xác định được tuổi cây bằng cách đếm vòng gỗ trên lát cắt ngang thân.',
    'Viết và trình bày được báo cáo thực hành.',
  ],
  sections: [
    {
      heading: 'Bấm ngọn, tỉa cành',
      blocks: [
        {
          type: 'list',
          items: [
            'Mẫu vật: cây rau có $3$ đến $4$ đốt thân chưa phân cành (rau muống, mồng tơi, rau đay); cây cảnh nhỏ có cành (hoa hồng, chuỗi ngọc).',
            'Dụng cụ: kéo cắt cành, bút chì đánh dấu.',
          ],
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Bấm ngọn: đánh dấu vị trí ngay phía trên đốt thân thứ nhất hoặc thứ hai, ngắt bỏ phần ngọn tại vị trí đó; để lại một cây không bấm làm đối chứng.',
            'Tỉa cành: chọn cành già, cành sâu bệnh hoặc mọc chen; cắt cách thân chính khoảng $1{,}5$ đến $2$ cm, sát chỗ cành mọc ra.',
            'Chăm sóc như nhau; sau $2$ đến $4$ tuần quan sát số chồi bên, số cành mới, so sánh với cây đối chứng.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Kết quả và giải thích',
          text: 'Sau khoảng $2$ đến $3$ tuần, cây bị bấm ngọn mọc nhiều chồi nách ở các đốt phía dưới chỗ bấm; cây đối chứng chủ yếu mọc cao. Chồi ngọn tổng hợp auxin, vận chuyển xuống ức chế chồi bên (ưu thế ngọn); bấm ngọn loại bỏ nguồn auxin nên chồi bên phát triển. Tỉa cành giúp cây thông thoáng, ít sâu bệnh, tập trung dinh dưỡng cho cành còn lại và kích thích chồi mới.',
        },
      ],
    },
    {
      heading: 'Xử lí kích thích tố: α-NAA trên cây vừng',
      blocks: [
        {
          type: 'list',
          items: [
            'Mẫu vật: cây vừng $25$ ngày tuổi trồng trong chậu ($12$ đến $20$ chậu).',
            'Hoá chất: α-NAA (một auxin nhân tạo) pha ở các nồng độ $25$ ppm, $75$ ppm, $150$ ppm; nước máy cho lô đối chứng. $1$ ppm $= 1$ mg chất trong $1$ L dung dịch.',
            'Dụng cụ: bình phun, thước đo, sổ ghi chép.',
          ],
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Chia cây thành $4$ lô, mỗi lô $3$ đến $5$ cây: đối chứng, $25$ ppm, $75$ ppm, $150$ ppm.',
            'Phun dung dịch lên lá vào ngày thứ $25$ và ngày thứ $35$ sau gieo; phun ướt đều lá như nhau ở mọi lô, lô đối chứng phun nước máy.',
            'Đến khi thu hoạch (khoảng $60$ ngày sau gieo), đo chiều cao cây, đếm số lá, số hoa, số quả trên cây, số hạt trên quả.',
            'Tính giá trị trung bình mỗi lô, lập bảng hoặc biểu đồ để so sánh.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Lưu ý',
          text: 'Auxin chỉ kích thích ở nồng độ thích hợp; nồng độ quá cao có thể ức chế sinh trưởng. Đeo găng tay khi pha, phun hoá chất và không dùng quá liều cho cây trồng làm thực phẩm.',
        },
      ],
    },
    {
      heading: 'Tính tuổi cây bằng vòng gỗ',
      blocks: [
        {
          type: 'list',
          items: [
            'Mẫu vật: lát cắt ngang thân cây gỗ (cây Hai lá mầm) nhìn rõ các vòng gỗ.',
            'Dụng cụ: giấy nhám, bình xịt nước, kính lúp, bút chì.',
          ],
        },
        {
          type: 'p',
          text: 'Nguyên lí: hằng năm tầng sinh mạch tạo thêm một lớp gỗ. Gỗ mùa mưa có tế bào to, màu sáng; gỗ mùa khô có tế bào nhỏ, màu sẫm. Một dải sáng và một dải sẫm liền nhau là một vòng gỗ, ứng với một năm.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Chà nhẵn mặt cắt bằng giấy nhám, xịt nước cho vòng gỗ hiện rõ.',
            'Xác định lõi (tuỷ) ở tâm lát cắt.',
            'Dùng kính lúp, đếm các vòng sẫm từ vòng sát lõi ra đến vòng sát vỏ; đánh dấu bằng bút chì mỗi vòng đã đếm để không đếm sót, đếm trùng.',
            'Tổng số vòng là tuổi của cây.',
          ],
        },
        {
          type: 'p',
          text: 'Có thể ước tính tuổi cây bằng cách khác như đo chu vi thân, đếm số tầng cành, khoan lấy lõi gỗ, nhưng đếm vòng gỗ trên lát cắt ngang là chính xác nhất. Cây Một lá mầm (cau, dừa) không có sinh trưởng thứ cấp nên không có vòng gỗ.',
        },
      ],
    },
    {
      heading: 'Báo cáo thực hành',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Mục đích.',
            'Chuẩn bị: mẫu vật, dụng cụ, hoá chất.',
            'Cách tiến hành từng thí nghiệm.',
            'Kết quả: bảng số liệu (số chồi bên; chiều cao, số lá, số hoa, số quả, số hạt của từng lô vừng; số vòng gỗ), ảnh chụp hoặc hình vẽ.',
            'Giải thích kết quả, kết luận và trả lời câu hỏi.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Lát cắt thân cây ảo',
    instruction:
      'Đặt kim lên từng dải gỗ (chạm vào lát cắt hoặc kéo thanh trượt), đánh dấu các dải màu sẫm từ lõi ra vỏ, rồi bấm "Kiểm tra tuổi cây". Thử thêm "Lát cắt khác".',
  },
  examples: [
    {
      problem:
        'Cần pha $0{,}5$ L dung dịch α-NAA nồng độ $150$ ppm. Cần cân bao nhiêu miligam α-NAA?',
      steps: [
        '$150$ ppm nghĩa là $150$ mg α-NAA trong $1$ L dung dịch.',
        'Với $0{,}5$ L: $150 \\cdot 0{,}5 = 75$ mg.',
        'Hoà tan $75$ mg α-NAA rồi thêm nước cho đủ $0{,}5$ L.',
      ],
      answer: '$75$ mg α-NAA.',
    },
    {
      problem:
        'Một nhóm đo chiều cao trung bình của cây vừng lúc thu hoạch: đối chứng $80$ cm; $25$ ppm: $86$ cm; $75$ ppm: $92$ cm; $150$ ppm: $84$ cm. Ở lô $75$ ppm, chiều cao tăng bao nhiêu phần trăm so với đối chứng? Nhận xét.',
      steps: [
        'Chênh lệch: $92 - 80 = 12$ cm.',
        'Tỉ lệ tăng: $12 : 80 \\cdot 100\\% = 15\\%$.',
        'Chiều cao tăng dần từ $25$ ppm đến $75$ ppm rồi giảm ở $150$ ppm: α-NAA kích thích sinh trưởng ở nồng độ thích hợp, nồng độ quá cao giảm hiệu quả.',
      ],
      answer: 'Tăng $15\\%$; trong thí nghiệm này $75$ ppm là nồng độ thích hợp nhất.',
    },
    {
      problem:
        'Một cây gỗ bị chặt năm $2024$. Lát cắt ngang có $23$ vòng gỗ. Cây bắt đầu mọc vào khoảng năm nào?',
      steps: ['Mỗi vòng gỗ ứng với một năm, nên cây khoảng $23$ tuổi.', '$2024 - 23 = 2001$.'],
      answer: 'Khoảng năm $2001$.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Bấm ngọn cây rau muống nhằm mục đích chính là',
      options: [
        'loại bỏ ưu thế ngọn để chồi bên phát triển, cây ra nhiều nhánh',
        'làm cây cao nhanh hơn',
        'làm cây ra hoa sớm',
        'giảm sự hút nước của rễ',
      ],
      answer: 0,
      hints: ['Chồi ngọn ức chế chồi bên.'],
      solution:
        'Bấm ngọn loại bỏ chồi ngọn, hết ưu thế ngọn; các chồi nách phát triển thành nhánh, cho nhiều rau hơn.',
    },
    {
      type: 'choice',
      prompt: 'Hormone nào ở chồi ngọn gây ra hiện tượng ưu thế ngọn?',
      options: ['Auxin', 'Ethylene', 'Abscisic acid', 'Gibberellin'],
      answer: 0,
      hints: ['Hormone này cũng làm thân hướng sáng.'],
      solution: 'Auxin tổng hợp ở chồi ngọn, vận chuyển xuống phía dưới ức chế chồi bên.',
    },
    {
      type: 'choice',
      prompt: 'Tỉa cành già, cành sâu bệnh cho cây cảnh có tác dụng',
      options: [
        'cây thông thoáng, ít sâu bệnh, tập trung dinh dưỡng cho cành còn lại, kích thích chồi mới',
        'làm cây ngừng sinh trưởng',
        'tăng ưu thế ngọn',
        'làm cây không cần bón phân',
      ],
      answer: 0,
      hints: ['Cành bị cắt bỏ không còn lấy dinh dưỡng của cây.'],
      solution:
        'Bỏ cành già, cành bệnh giúp cây thông thoáng, hạn chế sâu bệnh, dồn dinh dưỡng cho cành khoẻ và kích thích chồi mới mọc.',
    },
    {
      type: 'choice',
      prompt: 'Trong thí nghiệm α-NAA, lô cây vừng phun nước máy có vai trò gì?',
      options: [
        'Làm đối chứng, để biết thay đổi do α-NAA chứ không do việc phun nước',
        'Để tiết kiệm hoá chất',
        'Để cây mọc nhanh hơn',
        'Để pha loãng α-NAA',
      ],
      answer: 0,
      hints: ['Muốn biết tác dụng của một chất, cần lô giống hệt nhưng không có chất đó.'],
      solution:
        'Lô đối chứng được phun ướt như các lô khác nhưng bằng nước máy; so sánh với nó mới kết luận được tác dụng của α-NAA.',
    },
    {
      type: 'number',
      prompt: 'Cần bao nhiêu miligam α-NAA để pha $2$ L dung dịch nồng độ $75$ ppm?',
      answer: 150,
      tolerance: 0.01,
      unit: 'mg',
      hints: ['$75$ ppm là $75$ mg trong $1$ L.'],
      solution: '$75 \\cdot 2 = 150$ mg.',
    },
    {
      type: 'number',
      prompt:
        'Chiều cao trung bình của cây vừng ở lô đối chứng là $50$ cm, ở lô xử lí α-NAA là $58$ cm. Lô xử lí cao hơn đối chứng bao nhiêu phần trăm?',
      answer: 16,
      tolerance: 0.01,
      unit: '%',
      hints: ['Lấy chênh lệch chia cho chiều cao của lô đối chứng.'],
      solution: '$(58 - 50) : 50 \\cdot 100\\% = 8 : 50 \\cdot 100\\% = 16\\%$.',
    },
    {
      type: 'choice',
      prompt:
        'Số hạt trên quả vừng: đối chứng $60$, $25$ ppm: $64$, $75$ ppm: $70$, $150$ ppm: $57$. Kết luận nào hợp lí?',
      options: [
        'α-NAA kích thích ở nồng độ thích hợp ($75$ ppm), nồng độ quá cao ($150$ ppm) lại ức chế',
        'Nồng độ càng cao càng tốt',
        'α-NAA không có tác dụng gì',
        'α-NAA luôn ức chế cây vừng',
      ],
      answer: 0,
      hints: ['So sánh từng lô với lô đối chứng $60$ hạt.'],
      solution:
        'Số hạt tăng ở $25$ ppm và $75$ ppm (cao nhất), nhưng ở $150$ ppm thấp hơn cả đối chứng: auxin chỉ kích thích ở nồng độ thích hợp.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước tính tuổi cây theo đúng thứ tự.',
      items: [
        'Đếm các vòng sẫm từ lõi ra vỏ, đánh dấu bằng bút chì',
        'Chà nhẵn mặt cắt bằng giấy nhám, xịt nước',
        'Xác định lõi ở tâm lát cắt',
        'Kết luận tuổi cây bằng tổng số vòng',
      ],
      answer: [1, 2, 0, 3],
      hints: ['Phải làm rõ vòng gỗ trước khi đếm.'],
      solution:
        'Chà nhẵn và xịt nước, xác định lõi, đếm vòng sẫm từ lõi ra vỏ có đánh dấu, rồi kết luận tuổi cây.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao mỗi năm thân cây gỗ tạo ra một vòng gỗ gồm một dải sáng và một dải sẫm?',
      options: [
        'Mùa mưa tầng sinh mạch tạo tế bào gỗ to, màu sáng; mùa khô tạo tế bào nhỏ, màu sẫm',
        'Mỗi năm cây ra hoa hai lần',
        'Vỏ cây bong ra mỗi năm một lớp',
        'Mô phân sinh đỉnh tạo ra mỗi năm một lớp',
      ],
      answer: 0,
      hints: ['Vòng gỗ do mô phân sinh bên tạo ra, theo mùa.'],
      solution:
        'Tầng sinh mạch hoạt động theo mùa: mùa mưa tạo gỗ tế bào to, sáng; mùa khô tạo gỗ tế bào nhỏ, sẫm. Hai dải đó là một vòng gỗ của một năm.',
    },
    {
      type: 'number',
      prompt:
        'Một cây gỗ bị đổ năm $2025$, lát cắt ngang có $37$ vòng gỗ. Cây bắt đầu mọc vào khoảng năm nào?',
      answer: 1988,
      tolerance: 0,
      hints: ['Số vòng gỗ là số tuổi của cây.'],
      solution: 'Cây khoảng $37$ tuổi: $2025 - 37 = 1988$.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao không thể tính tuổi cây dừa bằng cách đếm vòng gỗ?',
      options: [
        'Dừa là cây Một lá mầm, không có tầng sinh mạch nên không có sinh trưởng thứ cấp, không tạo vòng gỗ',
        'Thân dừa quá cứng, không cắt được',
        'Dừa sống quá lâu',
        'Vòng gỗ của dừa có màu giống nhau',
      ],
      answer: 0,
      hints: ['Vòng gỗ do mô phân sinh bên tạo ra.'],
      solution:
        'Mô phân sinh bên (tầng sinh mạch) chỉ có ở cây Hai lá mầm; dừa là cây Một lá mầm nên không có vòng gỗ.',
    },
    {
      type: 'choice',
      prompt: 'Trong các cách ước tính tuổi cây, cách nào chính xác nhất?',
      options: [
        'Đếm vòng gỗ trên lát cắt ngang thân',
        'Đo chiều cao cây',
        'Đếm số lá trên cây',
        'Đo chu vi thân',
      ],
      answer: 0,
      hints: ['Cách nào ghi lại đúng từng năm sinh trưởng?'],
      solution:
        'Mỗi năm tạo một vòng gỗ, nên đếm vòng trên lát cắt ngang là chính xác nhất; chiều cao, chu vi còn phụ thuộc điều kiện sống.',
    },
  ],
  takeaways: [
    'Bấm ngọn loại bỏ nguồn auxin gây ưu thế ngọn, chồi bên phát triển; tỉa cành giúp cây thông thoáng và ra chồi mới.',
    'Thí nghiệm hormone cần lô đối chứng, nhiều cây mỗi lô và lấy trung bình; auxin chỉ kích thích ở nồng độ thích hợp.',
    '$1$ ppm $= 1$ mg chất trong $1$ L dung dịch.',
    'Mỗi năm tầng sinh mạch tạo một vòng gỗ (dải sáng mùa mưa, dải sẫm mùa khô); số vòng gỗ là tuổi cây.',
  ],
};
