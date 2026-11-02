/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Sản xuất chế phẩm enzyme gồm ba giai đoạn: tạo nguồn nguyên liệu, tách chiết và tạo chế phẩm. Vi sinh vật là nguồn chính; enzyme phải được tách chiết nhanh ở nhiệt độ thấp để giữ cấu trúc không gian và hoạt tính.',
  intro:
    'Bột giặt, men tiêu hoá hay chất làm mềm thịt đều chứa enzyme đã qua sản xuất công nghiệp. Enzyme dễ biến tính, vậy làm thế nào lấy được chúng từ sinh vật với số lượng lớn mà vẫn giữ nguyên hoạt tính?',
  objectives: [
    'Trình bày được ba giai đoạn của quy trình sản xuất enzyme.',
    'Giải thích được vì sao vi sinh vật là nguồn enzyme chủ yếu; phân biệt được nuôi cấy bề mặt và nuôi cấy chìm.',
    'Nêu được các lưu ý khi tách chiết, bảo quản enzyme; quy trình thu enzyme từ thực vật, động vật.',
    'So sánh được sản xuất protease tái tổ hợp với nuôi cấy vi sinh vật thông thường.',
  ],
  sections: [
    {
      heading: 'Quy trình tổng quát',
      blocks: [
        {
          type: 'p',
          text: 'Enzyme dùng trong công nghiệp được lấy từ động vật, thực vật và vi sinh vật. Trên thế giới và ở Việt Nam, vi sinh vật là nguồn chính, vì chúng sinh trưởng nhanh, cho sinh khối lớn trong thời gian ngắn, nuôi được trong điều kiện nhân tạo với chi phí thấp và tạo ra nhiều loại enzyme.',
        },
        {
          type: 'table',
          caption: 'Ba giai đoạn tạo chế phẩm enzyme tinh sạch',
          head: ['Giai đoạn', 'Việc chính'],
          rows: [
            [
              'Tạo nguồn nguyên liệu',
              'Chọn nguyên liệu thực vật, động vật; hoặc chọn chủng vi sinh vật và nuôi cấy',
            ],
            [
              'Tách chiết enzyme',
              'Phá vỡ tế bào (nếu enzyme nội bào), thu dịch, ly tâm hoặc lọc, kết tủa enzyme',
            ],
            [
              'Tạo chế phẩm',
              'Tinh sạch (thẩm tích), cô đặc, tạo dạng lỏng, dạng bột hoặc viên, đóng gói và bảo quản',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Lưu ý khi tách chiết',
          text: 'Enzyme giữ được hoạt tính khi giữ được cấu trúc không gian. Vì vậy cần: tách chiết và kết tủa ở nhiệt độ thấp, khoảng $3$-$5\\,^\\circ\\mathrm{C}$, thao tác nhanh; chọn hoá chất với nồng độ phù hợp; thẩm tích nếu dịch chiết còn tạp chất.',
        },
      ],
    },
    {
      heading: 'Sản xuất enzyme từ vi sinh vật',
      blocks: [
        {
          type: 'table',
          caption: 'Hai phương pháp nuôi cấy vi sinh vật',
          head: ['Tiêu chí', 'Nuôi cấy bề mặt', 'Nuôi cấy chìm'],
          rows: [
            ['Môi trường', 'Rắn (như cám, trấu), được làm ẩm và khử trùng', 'Lỏng, được khử trùng'],
            ['Điều kiện', 'Độ ẩm khoảng $60\\%$', 'Sục khí và khuấy trộn liên tục'],
            ['Thường dùng cho', 'Nấm mốc, ở quy mô vừa', 'Vi khuẩn, nấm men, nấm mốc ở quy mô lớn'],
          ],
        },
        {
          type: 'p',
          text: 'Năng suất và chất lượng enzyme phụ thuộc vào thành phần môi trường, độ ẩm, pH (thường trong khoảng $3{,}5$ đến $8$, tuỳ enzyme), nhiệt độ (thường $25$-$30\\,^\\circ\\mathrm{C}$ với vi sinh vật), nồng độ oxygen và thời gian nuôi. Thêm cơ chất của enzyme vào môi trường có thể cảm ứng để tế bào tạo nhiều enzyme hơn: tinh bột cảm ứng nấm mốc tạo $\\alpha$-amylase.',
        },
        {
          type: 'p',
          text: 'Enzyme vi sinh vật thường được tiết ra môi trường (enzyme ngoại bào), nên có thể thu từ dịch nuôi cấy mà không cần phá vỡ tế bào.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Protease tái tổ hợp',
          text: 'Gene mã hoá protease được chuyển vào tế bào chủ bằng DNA tái tổ hợp, rồi nuôi cấy chìm. Cách này cho nhiều enzyme hơn, mở rộng được quy mô và là cơ sở để sản xuất nhiều protein tái tổ hợp như vaccine, hormone. Đổi lại, quy trình phức tạp, đòi hỏi kĩ thuật cao và kiểm soát chất lượng chặt chẽ.',
        },
      ],
    },
    {
      heading: 'Sản xuất enzyme từ thực vật và động vật',
      blocks: [
        {
          type: 'p',
          text: 'Enzyme thực vật và động vật thường nằm trong tế bào, nên cần nghiền, phá vỡ tế bào trước khi tách. Với mô động vật, phải loại bỏ mô liên kết trước.',
        },
        {
          type: 'table',
          caption: 'Ví dụ về quy trình thu enzyme từ thực vật',
          head: ['Enzyme', 'Nguyên liệu', 'Các bước chính'],
          rows: [
            [
              'Bromelain',
              'Thân, lá, quả dứa',
              'Rửa, cắt, nghiền; ly tâm bỏ cặn; đông khô dịch chiết; đóng gói trong túi nylon, bảo quản',
            ],
            [
              'Papain',
              'Nhựa quả đu đủ xanh',
              'Thu nhựa và làm khô; chiết bằng nước cất và dung dịch đệm; ly tâm bỏ cặn; đông khô; đóng gói, bảo quản',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Dạng lỏng hoặc huyền phù: bảo quản trong dung dịch có chất bảo quản, ở nhiệt độ phù hợp, tránh nhiệt độ cao.',
            'Dạng bột hoặc viên: dễ vận chuyển, bảo quản được lâu ở nơi không có nhiệt độ cao.',
          ],
        },
      ],
    },
    {
      heading: 'Dự án nhỏ: Thử hoạt tính bromelain trong dứa',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: chứng minh dịch ép dứa tươi có protease và protease bị mất hoạt tính khi đun sôi. Làm theo nhóm $3$ đến $4$ bạn, có sự hướng dẫn của giáo viên. Chuẩn bị: dứa tươi, $2$ gói gelatin, nước ấm, $3$ cốc nhựa, tủ lạnh.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Ép dứa lấy dịch. Chia dịch thành hai phần, nhờ giáo viên đun sôi một phần trong vài phút rồi để nguội.',
            'Pha gelatin theo hướng dẫn trên gói, đổ đều vào $3$ cốc.',
            'Thêm vào mỗi cốc cùng một lượng: cốc $1$ nước lọc, cốc $2$ dịch dứa tươi, cốc $3$ dịch dứa đã đun sôi.',
            'Để các cốc vào ngăn mát khoảng $2$ giờ, rồi quan sát cốc nào đông, cốc nào không đông.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: ảnh chụp ba cốc, bảng kết quả, và giải thích kết quả bằng hoạt động của bromelain và sự biến tính của enzyme. Dự đoán: cốc $2$ không đông vì protease đã cắt các phân tử gelatin (một loại protein), còn cốc $1$ và cốc $3$ đông bình thường.',
        },
      ],
    },
  ],
  explore: {
    title: 'Dây chuyền sản xuất enzyme',
    instruction:
      'Chọn nguồn enzyme, rồi chạm vào các công đoạn theo đúng thứ tự. Bước làm sai hoặc làm chưa đúng lúc sẽ bị từ chối. Khi xong dây chuyền, hãy đổi nhiệt độ tách chiết và xem mẻ enzyme giữ được bao nhiêu hoạt tính.',
  },
  examples: [
    {
      problem:
        'Một mẻ nuôi cấy có $200$ lít dịch, mỗi lít chứa $15\\,000$ đơn vị hoạt tính protease. Sau tinh sạch, chế phẩm chứa $2\\,100\\,000$ đơn vị hoạt tính. Tính hiệu suất thu hồi hoạt tính.',
      steps: [
        'Hoạt tính ban đầu: $200 \\cdot 15\\,000 = 3\\,000\\,000$ đơn vị.',
        'Hiệu suất thu hồi: $\\dfrac{2\\,100\\,000}{3\\,000\\,000} \\cdot 100\\% = 70\\%$.',
        'Phần hoạt tính bị mất do enzyme biến tính hoặc sót lại trong cặn qua các bước tách chiết.',
      ],
      answer: 'Hiệu suất thu hồi hoạt tính là $70\\%$.',
    },
    {
      problem:
        'Cơ sở sản xuất muốn thu bromelain. Một kĩ thuật viên đề nghị nghiền dứa rồi đun sôi dịch cho sạch khuẩn trước khi đóng gói. Em có đồng ý không? Hãy đề xuất cách làm phù hợp.',
      steps: [
        'Bromelain là protein, hoạt tính phụ thuộc vào cấu trúc không gian.',
        'Đun sôi làm enzyme biến tính, chế phẩm mất hoạt tính.',
        'Sau khi nghiền, cần ly tâm bỏ cặn và đông khô dịch chiết: nước bị loại ở nhiệt độ thấp nên enzyme ít bị hỏng, và vi khuẩn cũng khó phát triển trong dạng bột khô.',
      ],
      answer: 'Không đồng ý. Nên ly tâm rồi đông khô dịch chiết, đóng gói kín và bảo quản nơi mát.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp ba giai đoạn của quy trình sản xuất enzyme.',
      items: ['Tạo nguồn nguyên liệu', 'Tách chiết enzyme', 'Tạo chế phẩm enzyme'],
      answer: [0, 1, 2],
      hints: ['Chỉ tách được enzyme khi đã có nguyên liệu chứa enzyme.'],
      solution: 'Tạo nguồn nguyên liệu, tách chiết enzyme, rồi tạo chế phẩm enzyme.',
    },
    {
      type: 'choice',
      prompt: 'Lí do chính khiến vi sinh vật là nguồn enzyme được dùng nhiều nhất hiện nay là gì?',
      options: [
        'Sinh trưởng nhanh, nuôi cấy được ở quy mô lớn với chi phí thấp, tạo nhiều loại enzyme',
        'Enzyme của chúng không cần tinh sạch',
        'Mọi vi sinh vật đều tạo cùng một loại enzyme',
        'Chúng không cần chất dinh dưỡng khi nuôi cấy',
      ],
      answer: 0,
      hints: ['Hãy so sánh thời gian để có một mẻ vi khuẩn với thời gian trồng một vụ cây.'],
      solution:
        'Vi sinh vật sinh trưởng nhanh, cho sinh khối lớn trong thời gian ngắn, nuôi được với chi phí thấp và tạo ra nhiều loại enzyme.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi phương pháp nuôi cấy với đặc điểm của nó.',
      left: ['Nuôi cấy bề mặt', 'Nuôi cấy chìm'],
      right: [
        'Môi trường rắn, được làm ẩm và khử trùng',
        'Môi trường lỏng, sục khí và khuấy trộn liên tục',
      ],
      pairs: [
        [0, 0],
        [1, 1],
      ],
      hints: ['Vi sinh vật nằm "chìm" trong môi trường dạng gì?'],
      solution:
        'Nuôi cấy bề mặt dùng môi trường rắn được làm ẩm; nuôi cấy chìm dùng môi trường lỏng có sục khí, khuấy trộn.',
    },
    {
      type: 'choice',
      prompt:
        'Vì sao thường thêm tinh bột vào môi trường nuôi nấm mốc để sản xuất $\\alpha$-amylase?',
      options: [
        'Tinh bột là chất cảm ứng, kích thích tế bào tạo nhiều amylase',
        'Tinh bột làm biến tính các enzyme khác',
        'Tinh bột giúp giữ pH môi trường bằng $2$',
        'Tinh bột thay thế cho quá trình tinh sạch enzyme',
      ],
      answer: 0,
      hints: ['Tinh bột là cơ chất của amylase.'],
      solution:
        'Cơ chất của enzyme thường có vai trò cảm ứng: khi có tinh bột, nấm mốc tạo nhiều $\\alpha$-amylase hơn.',
    },
    {
      type: 'multi',
      prompt: 'Những lưu ý nào đúng khi tách chiết enzyme?',
      options: [
        'Thao tác nhanh',
        'Tách chiết và kết tủa ở nhiệt độ thấp, khoảng $3$-$5\\,^\\circ\\mathrm{C}$',
        'Chọn hoá chất với nồng độ phù hợp',
        'Đun sôi dịch chiết để diệt khuẩn',
        'Thẩm tích khi dịch chiết còn tạp chất',
      ],
      answers: [0, 1, 2, 4],
      hints: ['Điều gì xảy ra với protein khi bị đun sôi?'],
      solution:
        'Cần làm nhanh, ở nhiệt độ thấp, dùng hoá chất với nồng độ phù hợp và thẩm tích khi còn tạp chất. Đun sôi làm enzyme biến tính.',
    },
    {
      type: 'choice',
      prompt:
        'Khi thu enzyme từ mô động vật, cần có thêm việc nào so với thu enzyme ngoại bào từ dịch nuôi cấy vi sinh vật?',
      options: [
        'Loại bỏ mô liên kết và phá vỡ tế bào',
        'Sục khí và khuấy trộn liên tục',
        'Thêm cơ chất để cảm ứng tạo enzyme',
        'Khử trùng môi trường nuôi cấy',
      ],
      answer: 0,
      hints: ['Enzyme đang nằm ở đâu: trong tế bào hay đã tiết ra ngoài?'],
      solution:
        'Enzyme động vật nằm trong tế bào, nên cần loại mô liên kết rồi phá vỡ tế bào. Enzyme ngoại bào của vi sinh vật có sẵn trong dịch nuôi cấy.',
    },
    {
      type: 'number',
      prompt:
        'Một mẻ nuôi cấy có $100$ lít dịch, mỗi lít chứa $8\\,000$ đơn vị hoạt tính. Chế phẩm thu được có $600\\,000$ đơn vị hoạt tính. Hiệu suất thu hồi hoạt tính bằng bao nhiêu phần trăm?',
      answer: 75,
      unit: '%',
      hints: ['Tính tổng hoạt tính ban đầu của cả mẻ.', 'Lấy hoạt tính thu được chia cho tổng đó.'],
      solution:
        'Ban đầu có $100 \\cdot 8\\,000 = 800\\,000$ đơn vị. Hiệu suất: $\\dfrac{600\\,000}{800\\,000} \\cdot 100\\% = 75\\%$.',
    },
    {
      type: 'number',
      prompt:
        'Trộn $10$ kg cám khô với nước để nước chiếm $60\\%$ khối lượng môi trường nuôi cấy bề mặt. Cần thêm bao nhiêu kg nước? (coi cám khô không chứa nước)',
      answer: 15,
      unit: 'kg',
      hints: [
        'Cám khô chiếm $40\\%$ khối lượng môi trường.',
        'Tính khối lượng môi trường, rồi trừ đi khối lượng cám.',
      ],
      solution:
        'Cám chiếm $40\\%$, nên khối lượng môi trường là $10 : 0{,}4 = 25$ kg. Lượng nước cần thêm: $25 - 10 = 15$ kg.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao chế phẩm enzyme thường được làm thành dạng bột hoặc viên?',
      options: [
        'Dễ vận chuyển, bảo quản lâu và giữ được hoạt tính',
        'Để enzyme không cần có cấu trúc không gian',
        'Để tăng nhiệt độ tối ưu lên trên $100\\,^\\circ\\mathrm{C}$',
        'Để enzyme tự sinh sản trong bao bì',
      ],
      answer: 0,
      hints: ['Thử so sánh một gói bột với một chai dung dịch khi phải chở đi xa.'],
      solution:
        'Dạng khô dễ vận chuyển, bảo quản được lâu ở nơi không có nhiệt độ cao và giữ được hoạt tính.',
    },
  ],
  takeaways: [
    'Sản xuất enzyme gồm ba giai đoạn: tạo nguồn nguyên liệu, tách chiết enzyme, tạo chế phẩm.',
    'Vi sinh vật là nguồn chính, được nuôi cấy bề mặt (môi trường rắn) hoặc nuôi cấy chìm (môi trường lỏng, sục khí).',
    'Enzyme thực vật, động vật cần phá vỡ tế bào; enzyme ngoại bào của vi sinh vật được thu từ dịch nuôi cấy.',
    'Tách chiết phải nhanh, ở khoảng $3$-$5\\,^\\circ\\mathrm{C}$; dạng bột, viên dễ vận chuyển và bảo quản được lâu.',
  ],
};
