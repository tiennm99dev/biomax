/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Khái niệm quần thể sinh vật; các đặc trưng cơ bản của quần thể: kích thước, mật độ cá thể, tỉ lệ giới tính, thành phần nhóm tuổi và ba dạng tháp tuổi; các biện pháp bảo vệ quần thể.',
  intro:
    'Trong một ruộng lúa có hàng nghìn cây lúa, hàng trăm con cua đồng, vài chục con chim sáo. Mỗi nhóm sinh vật cùng loài ấy có phải là một "quần thể"? Làm sao biết một quần thể đang phát triển hay đang suy giảm?',
  objectives: [
    'Phát biểu được khái niệm quần thể sinh vật và lấy được ví dụ.',
    'Nêu được các đặc trưng cơ bản của quần thể: kích thước, mật độ, tỉ lệ giới tính, thành phần nhóm tuổi; tính được mật độ cá thể.',
    'Nhận biết được ba dạng tháp tuổi và đề xuất được biện pháp bảo vệ quần thể.',
  ],
  sections: [
    {
      heading: 'Khái niệm quần thể sinh vật',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Quần thể sinh vật',
          text: 'Quần thể sinh vật là tập hợp các cá thể cùng loài, sinh sống trong một khoảng không gian xác định, ở một thời điểm nhất định và có khả năng sinh sản tạo thành những thế hệ mới.',
        },
        {
          type: 'list',
          items: [
            'Ví dụ quần thể: quần thể cá cóc ở Tam Đảo, quần thể lúa trong một ruộng lúa, quần thể cá mè trong một ao, quần thể cây đậu xanh trong vườn.',
            'Không phải quần thể: các loài cá trong một ao (nhiều loài khác nhau), một lồng gà bày bán ở chợ (sống tạm thời, không sinh sản tạo thế hệ mới tại đó).',
          ],
        },
      ],
    },
    {
      heading: 'Các đặc trưng cơ bản của quần thể',
      blocks: [
        {
          type: 'p',
          text: 'Kích thước quần thể là tổng số cá thể (hoặc khối lượng, năng lượng của các cá thể) của quần thể. Loài có kích thước cơ thể nhỏ thường có kích thước quần thể lớn và ngược lại: trong cùng một khu rừng, quần thể chuột đông hơn thỏ, thỏ đông hơn hươu, hươu đông hơn voi.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Mật độ cá thể',
          text: 'Mật độ cá thể của quần thể là số lượng cá thể trong một đơn vị diện tích hay thể tích.',
        },
        {
          type: 'p',
          text: 'Mật độ = Số lượng cá thể : Diện tích (hoặc thể tích). Đơn vị thường dùng: cá thể/m², cá thể/ha, cá thể/m³.',
        },
        {
          type: 'table',
          caption: 'Mật độ của một số quần thể',
          head: ['Quần thể', 'Số cá thể', 'Không gian sống', 'Mật độ'],
          rows: [
            ['Lim xanh', '$11\\,250$ cây', '$15$ ha', '$750$ cây/ha'],
            ['Bắp cải', '$3\\,000$ cây', '$750$ m²', '$4$ cây/m²'],
            ['Cá chép', '$120\\,000$ con', '$60\\,000$ m³', '$2$ con/m³'],
          ],
        },
        {
          type: 'p',
          text: 'Mật độ thay đổi theo mùa, theo năm và theo điều kiện sống (thức ăn, nơi ở). Mật độ quá cao làm các cá thể cạnh tranh gay gắt về thức ăn, nơi ở.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tỉ lệ giới tính',
          text: 'Tỉ lệ giới tính là tỉ lệ giữa số lượng cá thể đực và số lượng cá thể cái trong quần thể. Ở đa số loài, tỉ lệ này xấp xỉ $1 : 1$; nó thay đổi theo loài, theo lứa tuổi và điều kiện sống. Ở gà, hươu, nai, số cá thể cái nhiều hơn cá thể đực.',
        },
        {
          type: 'p',
          text: 'Thành phần nhóm tuổi: các cá thể trong quần thể được xếp vào ba nhóm tuổi: nhóm tuổi trước sinh sản, nhóm tuổi sinh sản và nhóm tuổi sau sinh sản. Xếp chồng các nhóm từ dưới lên ta được tháp tuổi.',
        },
        {
          type: 'table',
          caption: 'Ba dạng tháp tuổi',
          head: ['Dạng tháp', 'Nhóm trước sinh sản so với nhóm sinh sản', 'Xu hướng của quần thể'],
          rows: [
            ['Phát triển', 'Nhiều hơn (đáy tháp rộng)', 'Số lượng cá thể tăng'],
            ['Ổn định', 'Bằng hoặc xấp xỉ bằng', 'Số lượng cá thể ít thay đổi'],
            ['Suy thoái', 'Ít hơn (đáy tháp hẹp)', 'Số lượng cá thể giảm'],
          ],
        },
      ],
    },
    {
      heading: 'Bảo vệ quần thể',
      blocks: [
        {
          type: 'p',
          text: 'Quần thể tồn tại nhờ môi trường sống; khi môi trường bị biến đổi theo hướng xấu, quần thể suy giảm. Vì vậy bảo vệ môi trường sống của quần thể chính là bảo vệ quần thể.',
        },
        {
          type: 'list',
          items: [
            'Bảo vệ môi trường sống tự nhiên của quần thể; thành lập các vườn quốc gia (Cúc Phương, Cát Bà, Ba Vì…) và khu bảo tồn.',
            'Nghiêm cấm săn bắt, buôn bán các loài có nguy cơ tuyệt chủng.',
            'Khai thác hợp lí: không đánh bắt cá con, không dùng xung điện, chất nổ; khai thác đúng mùa.',
            'Với quần thể có nguy cơ tuyệt chủng ngoài tự nhiên: di chuyển đến nơi có điều kiện thuận lợi hơn như vườn thú, trang trại bảo tồn để nhân giống.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Đọc tháp tuổi',
    instruction:
      'Chọn một tình huống, đọc mô tả và dự đoán dạng tháp tuổi. Sau khi chọn, tháp tuổi hiện ra: dùng nút − / + để thay đổi các nhóm tuổi và xem dạng tháp, xu hướng của quần thể thay đổi thế nào.',
  },
  examples: [
    {
      problem:
        'Một khu rừng trồng rộng $5$ ha có $3\\,000$ cây keo. Tính mật độ cá thể của quần thể keo.',
      steps: ['Mật độ = số lượng cá thể : diện tích.', '$3\\,000 : 5 = 600$.'],
      answer: 'Mật độ quần thể keo là $600$ cây/ha.',
    },
    {
      problem:
        'Một quần thể cá trong hồ có nhóm tuổi trước sinh sản chiếm $20\\%$, nhóm sinh sản $50\\%$, nhóm sau sinh sản $30\\%$. Tháp tuổi có dạng gì? Nêu nguyên nhân có thể và biện pháp khắc phục.',
      steps: [
        'So sánh nhóm trước sinh sản với nhóm sinh sản: $20\\% < 50\\%$, đáy tháp hẹp.',
        'Đáy tháp hẹp: tháp suy thoái, số lượng cá sẽ giảm.',
        'Nguyên nhân có thể: đánh bắt cả cá con bằng lưới mắt nhỏ, xung điện; ô nhiễm nước làm trứng và cá con chết.',
        'Biện pháp: cấm dùng lưới mắt nhỏ, xung điện; không đánh bắt trong mùa sinh sản; giữ nước hồ sạch; thả thêm cá giống.',
      ],
      answer: 'Tháp suy thoái; cần khai thác hợp lí và bảo vệ môi trường sống của cá.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Tập hợp sinh vật nào sau đây là một quần thể?',
      options: [
        'Các cây lúa trong một ruộng lúa',
        'Các loài cá trong một ao',
        'Những con gà trong một lồng bày bán ở chợ',
        'Các loài cây trong một vườn',
      ],
      answer: 0,
      hints: ['Quần thể gồm các cá thể cùng loài, cùng sống ở một nơi và sinh sản tạo thế hệ mới.'],
      solution:
        'Các cây lúa trong ruộng cùng loài, cùng nơi sống, sinh sản được: là quần thể. Các loài cá, các loài cây gồm nhiều loài; gà trong lồng ở chợ chỉ là tập hợp tạm thời, không sinh sản tại đó.',
    },
    {
      type: 'number',
      prompt:
        'Một ao rộng $400$ m² có $1\\,200$ con cá mè. Mật độ quần thể cá mè là bao nhiêu con/m²?',
      answer: 3,
      unit: 'con/m²',
      hints: ['Mật độ = số cá thể : diện tích.'],
      solution: '$1\\,200 : 400 = 3$ con/m².',
    },
    {
      type: 'number',
      prompt:
        'Một bể nuôi có thể tích $2$ m³ chứa $50$ con cá. Mật độ cá trong bể là bao nhiêu con/m³?',
      answer: 25,
      unit: 'con/m³',
      hints: ['Với sinh vật sống trong nước, mật độ có thể tính theo thể tích.'],
      solution: '$50 : 2 = 25$ con/m³.',
    },
    {
      type: 'fraction',
      prompt:
        'Một quần thể hươu có $300$ cá thể, trong đó có $120$ con đực. Tỉ lệ giới tính (đực : cái) của quần thể bằng bao nhiêu? Viết dưới dạng phân số tối giản.',
      answer: [2, 3],
      simplest: true,
      hints: ['Tính số con cái trước: $300 - 120$.', 'Rút gọn $\\dfrac{120}{180}$.'],
      solution:
        'Số con cái: $300 - 120 = 180$. Tỉ lệ đực : cái $= \\dfrac{120}{180} = \\dfrac{2}{3}$.',
    },
    {
      type: 'order',
      prompt:
        'Voi, hươu, thỏ, chuột cùng sống trong một khu rừng. Sắp xếp các quần thể theo kích thước quần thể tăng dần.',
      items: ['Chuột', 'Voi', 'Thỏ', 'Hươu'],
      answer: [1, 3, 2, 0],
      hints: ['Loài có kích thước cơ thể càng nhỏ thường có kích thước quần thể càng lớn.'],
      solution:
        'Voi → hươu → thỏ → chuột: kích thước cơ thể giảm dần nên kích thước quần thể tăng dần.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi dạng tháp tuổi với đặc điểm của nó.',
      left: ['Tháp phát triển', 'Tháp ổn định', 'Tháp suy thoái'],
      right: [
        'Nhóm trước sinh sản xấp xỉ nhóm sinh sản',
        'Nhóm trước sinh sản ít hơn nhóm sinh sản',
        'Nhóm trước sinh sản nhiều hơn nhóm sinh sản',
      ],
      pairs: [
        [0, 2],
        [1, 0],
        [2, 1],
      ],
      hints: ['Đáy tháp là nhóm tuổi trước sinh sản.'],
      solution:
        'Phát triển: đáy rộng (trước sinh sản nhiều hơn). Ổn định: xấp xỉ. Suy thoái: đáy hẹp (trước sinh sản ít hơn).',
    },
    {
      type: 'choice',
      prompt:
        'Quần thể chuột đồng có nhóm trước sinh sản $55\\%$, nhóm sinh sản $35\\%$, nhóm sau sinh sản $10\\%$. Số lượng chuột trong thời gian tới có xu hướng:',
      options: ['Tăng lên', 'Giữ ổn định', 'Giảm đi', 'Không dự đoán được'],
      answer: 0,
      hints: ['So sánh nhóm trước sinh sản với nhóm sinh sản để biết dạng tháp.'],
      solution: '$55\\% > 35\\%$: tháp phát triển, số lượng chuột sẽ tăng.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các biện pháp bảo vệ quần thể sinh vật.',
      options: [
        'Thành lập vườn quốc gia, khu bảo tồn',
        'Đánh bắt cá bằng xung điện',
        'Nghiêm cấm săn bắt, buôn bán động vật hoang dã quý hiếm',
        'Chặt phá rừng lấy đất canh tác',
        'Đưa loài có nguy cơ tuyệt chủng về trang trại bảo tồn để nhân giống',
      ],
      answers: [0, 2, 4],
      hints: ['Biện pháp bảo vệ phải giữ được môi trường sống và số lượng cá thể.'],
      solution:
        'Vườn quốc gia, cấm săn bắt buôn bán và nhân giống bảo tồn giúp bảo vệ quần thể. Xung điện và phá rừng làm quần thể suy giảm.',
    },
  ],
  takeaways: [
    'Quần thể sinh vật là tập hợp các cá thể cùng loài, sống trong một khoảng không gian xác định, ở một thời điểm nhất định, có khả năng sinh sản tạo thế hệ mới.',
    'Đặc trưng cơ bản: kích thước quần thể, mật độ cá thể (số cá thể / đơn vị diện tích hoặc thể tích), tỉ lệ giới tính, thành phần nhóm tuổi.',
    'Tháp tuổi có ba dạng: phát triển (đáy rộng), ổn định, suy thoái (đáy hẹp).',
    'Bảo vệ môi trường sống của quần thể chính là bảo vệ quần thể.',
  ],
};
