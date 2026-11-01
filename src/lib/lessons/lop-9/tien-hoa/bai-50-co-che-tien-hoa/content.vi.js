/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Quan điểm của Darwin về cơ chế tiến hóa bằng chọn lọc tự nhiên và những hạn chế của nó; thuyết tiến hóa tổng hợp hiện đại: quần thể là đơn vị tiến hóa, nguồn biến dị di truyền, các nhân tố tiến hóa, tiến hóa nhỏ và tiến hóa lớn.',
  intro:
    'Tổ tiên của loài hươu cao cổ có cổ không dài như ngày nay. Vì sao qua thời gian, hươu cao cổ lại có chiếc cổ dài vượt trội? Darwin đã đưa ra một lời giải thích nổi tiếng từ thế kỉ XIX. Một thế kỉ sau, khi di truyền học phát triển, các nhà khoa học bổ sung lời giải thích ấy bằng thuyết tiến hóa tổng hợp hiện đại. Trong bài này, em sẽ tự bật, tắt từng nhân tố tiến hóa và quan sát cấu trúc di truyền của một quần thể thay đổi qua các thế hệ.',
  objectives: [
    'Trình bày được quan điểm của Darwin về cơ chế tiến hóa và nêu được hạn chế của học thuyết.',
    'Nêu được quần thể là đơn vị tiến hóa; phân biệt được tiến hóa nhỏ và tiến hóa lớn.',
    'Kể tên và nêu được vai trò của các nhân tố tiến hóa theo thuyết tiến hóa hiện đại.',
    'Tính được tần số allele của quần thể từ số lượng các kiểu gene.',
  ],
  sections: [
    {
      heading: 'Quan điểm của Darwin về cơ chế tiến hóa',
      blocks: [
        {
          type: 'p',
          text: 'Charles Darwin (1809 – 1882), nhà tự nhiên học người Anh, sau chuyến đi vòng quanh thế giới trên tàu Beagle, đã công bố cuốn sách "Nguồn gốc các loài" (1859), giải thích sự tiến hóa của sinh giới bằng chọn lọc tự nhiên.',
        },
        {
          type: 'list',
          items: [
            'Biến dị cá thể: các cá thể cùng loài, kể cả cùng bố mẹ, luôn khác nhau ở nhiều đặc điểm. Biến dị cá thể phát sinh trong quá trình sinh sản, xuất hiện vô hướng, là nguyên liệu của chọn lọc.',
            'Đấu tranh sinh tồn: sinh vật sinh ra nhiều con hơn số có thể sống sót, nên luôn phải đấu tranh để sống (giành thức ăn, chỗ ở, chống kẻ thù và điều kiện bất lợi).',
            'Chọn lọc tự nhiên: những cá thể mang biến dị có lợi sống sót và sinh sản nhiều hơn, biến dị có lợi được tích lũy qua nhiều thế hệ; cá thể mang biến dị bất lợi bị đào thải.',
            'Hình thành loài mới: loài mới được hình thành dần dần qua nhiều dạng trung gian, dưới tác dụng của chọn lọc tự nhiên, theo con đường phân li tính trạng từ một nguồn gốc chung.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Darwin giải thích chiếc cổ của hươu cao cổ',
          text: 'Trong quần thể hươu tổ tiên có những con cổ dài hơn, có những con cổ ngắn hơn (biến dị cá thể). Khi thức ăn ở tầng thấp khan hiếm, con cổ dài với tới lá trên cao nên sống sót và sinh sản nhiều hơn; con cổ ngắn bị đào thải dần. Qua rất nhiều thế hệ, đặc điểm cổ dài được tích lũy, hình thành loài hươu cao cổ.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Hạn chế của học thuyết Darwin',
          text: 'Thời Darwin, di truyền học chưa phát triển, nên ông chưa giải thích được nguyên nhân phát sinh biến dị và cơ chế di truyền các biến dị; chưa phân biệt được biến dị di truyền với biến dị không di truyền.',
        },
      ],
    },
    {
      heading: 'Thuyết tiến hóa tổng hợp hiện đại',
      blocks: [
        {
          type: 'p',
          text: 'Thuyết tiến hóa hiện đại (thuyết tiến hóa tổng hợp) hình thành vào những năm 1930 – 1950, kết hợp học thuyết chọn lọc tự nhiên của Darwin với những thành tựu của di truyền học. Thuyết chia quá trình tiến hóa thành tiến hóa nhỏ và tiến hóa lớn.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tiến hóa nhỏ',
          text: 'Tiến hóa nhỏ là quá trình biến đổi tần số allele và tần số kiểu gene (cấu trúc di truyền) của quần thể qua các thế hệ, dẫn đến hình thành loài mới. Quần thể là đơn vị tiến hóa. Tiến hóa nhỏ diễn ra trong phạm vi hẹp, thời gian tương đối ngắn và có thể nghiên cứu bằng thực nghiệm.',
        },
        {
          type: 'p',
          text: 'Tần số của một allele là tỉ lệ giữa số allele đó và tổng số allele của gene trong quần thể. Với gene có hai allele $A$, $a$ và quần thể có $N$ cá thể gồm $x$ cá thể $AA$, $y$ cá thể $Aa$, $z$ cá thể $aa$:',
        },
        {
          type: 'tex',
          tex: 'p_A = \\frac{2x + y}{2N}, \\qquad q_a = \\frac{2z + y}{2N} = 1 - p_A',
        },
        {
          type: 'p',
          text: 'Nguồn biến dị di truyền của quần thể gồm đột biến (biến dị sơ cấp) và biến dị tổ hợp (biến dị thứ cấp, tạo ra qua giao phối); ngoài ra quần thể còn nhận thêm biến dị khi có cá thể hoặc giao tử từ quần thể khác di nhập vào.',
        },
        {
          type: 'table',
          caption:
            'Các nhân tố tiến hóa: những nhân tố làm thay đổi tần số allele và thành phần kiểu gene của quần thể',
          head: ['Nhân tố tiến hóa', 'Vai trò'],
          rows: [
            [
              'Đột biến',
              'Tạo ra allele mới hoặc biến allele này thành allele khác; cung cấp nguyên liệu sơ cấp cho tiến hóa. Làm thay đổi tần số allele rất chậm.',
            ],
            [
              'Di - nhập gene (dòng gene)',
              'Cá thể hoặc giao tử di chuyển vào hay ra khỏi quần thể, mang theo allele, làm thay đổi tần số allele và có thể đem allele mới vào quần thể.',
            ],
            [
              'Chọn lọc tự nhiên',
              'Phân hóa khả năng sống sót và sinh sản của các kiểu gene: tăng tần số allele có lợi, giảm tần số allele có hại. Đây là nhân tố có hướng, quy định chiều hướng tiến hóa.',
            ],
            [
              'Các yếu tố ngẫu nhiên (phiêu bạt di truyền)',
              'Thiên tai, dịch bệnh, ... làm tần số allele thay đổi đột ngột, không theo hướng xác định; tác động rõ ở quần thể kích thước nhỏ. Có thể loại bỏ hoàn toàn một allele, kể cả allele có lợi.',
            ],
            [
              'Giao phối không ngẫu nhiên',
              'Tự thụ phấn, giao phối gần (cận huyết), giao phối có chọn lọc: không làm thay đổi tần số allele nhưng làm tăng tỉ lệ kiểu gene đồng hợp, giảm tỉ lệ kiểu gene dị hợp.',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tiến hóa lớn',
          text: 'Tiến hóa lớn là quá trình hình thành các đơn vị phân loại trên loài như chi, họ, bộ, lớp, ngành. Tiến hóa lớn diễn ra trên quy mô rộng lớn, qua thời gian địa chất rất dài, nên không thể nghiên cứu trực tiếp bằng thực nghiệm mà dựa vào các bằng chứng như hóa thạch. Tiến hóa lớn diễn ra theo con đường phân li tính trạng, chủ yếu dưới tác động của chọn lọc tự nhiên.',
        },
      ],
    },
  ],
  explore: {
    title: 'Phòng thí nghiệm các nhân tố tiến hóa',
    instruction:
      'Một quần thể giao phối ngẫu nhiên có gene với hai allele: $A$ (lông tối, trội) và $a$ (lông sáng, lặn). Bật từng nhân tố một và quan sát đường tần số allele $A$ và đường tỉ lệ dị hợp $Aa$ trong $30$ thế hệ. Nhân tố nào làm đổi tần số allele? Nhân tố nào chỉ làm đổi tỉ lệ kiểu gene? Bật yếu tố ngẫu nhiên rồi bấm "Chạy lại" vài lần.',
  },
  examples: [
    {
      problem:
        'Một quần thể thực vật có $1\\,000$ cây, gồm $490$ cây $AA$, $420$ cây $Aa$ và $90$ cây $aa$. Tính tần số allele $A$ và $a$ của quần thể.',
      steps: [
        'Tổng số allele của gene trong quần thể: $2 \\cdot 1\\,000 = 2\\,000$.',
        'Số allele $A$: mỗi cây $AA$ có $2$ allele $A$, mỗi cây $Aa$ có $1$: $2 \\cdot 490 + 420 = 1\\,400$.',
        'Tần số allele $A$: $p_A = \\dfrac{1\\,400}{2\\,000} = 0{,}7$.',
        'Tần số allele $a$: $q_a = 1 - 0{,}7 = 0{,}3$ (kiểm tra: $\\dfrac{2 \\cdot 90 + 420}{2\\,000} = \\dfrac{600}{2\\,000} = 0{,}3$).',
      ],
      answer: '$p_A = 0{,}7$; $q_a = 0{,}3$.',
    },
    {
      problem:
        'Một quần thể cây đậu ban đầu toàn cây dị hợp $Aa$. Cho các cây tự thụ phấn liên tiếp qua $2$ thế hệ. Tính tỉ lệ các kiểu gene ở thế hệ thứ hai và nhận xét về tần số allele.',
      steps: [
        'Mỗi lần tự thụ phấn, cây $Aa$ cho đời con $\\dfrac14 AA : \\dfrac12 Aa : \\dfrac14 aa$, còn cây $AA$, $aa$ chỉ cho con giống mình. Vậy tỉ lệ $Aa$ giảm một nửa sau mỗi thế hệ.',
        'Thế hệ thứ nhất: $Aa = \\dfrac12$, $AA = aa = \\dfrac14$.',
        'Thế hệ thứ hai: $Aa = \\dfrac14$; $AA = aa = \\dfrac14 + \\dfrac{1}{2} \\cdot \\dfrac14 = \\dfrac38$.',
        'Tần số allele $A$: $\\dfrac38 + \\dfrac12 \\cdot \\dfrac14 = \\dfrac12$, không đổi so với ban đầu.',
      ],
      answer:
        '$\\dfrac38 AA : \\dfrac14 Aa : \\dfrac38 aa$. Tự thụ phấn (giao phối không ngẫu nhiên) không đổi tần số allele nhưng làm tăng đồng hợp, giảm dị hợp.',
    },
    {
      problem:
        'Trên một hòn đảo nhỏ có quần thể chim gồm $10$ con. Một cơn bão làm chết ngẫu nhiên $6$ con, trong đó có cả $2$ con duy nhất mang allele quy định mỏ khỏe. Nhân tố tiến hóa nào đã tác động? Nêu đặc điểm của nhân tố này.',
      steps: [
        'Cơn bão giết chim một cách ngẫu nhiên, không phụ thuộc vào việc con chim đó thích nghi tốt hay kém.',
        'Đây là tác động của các yếu tố ngẫu nhiên (phiêu bạt di truyền).',
        'Yếu tố ngẫu nhiên làm tần số allele thay đổi đột ngột, không theo hướng xác định, tác động mạnh ở quần thể nhỏ; ở đây allele có lợi (mỏ khỏe) bị loại bỏ hoàn toàn khỏi quần thể.',
      ],
      answer:
        'Các yếu tố ngẫu nhiên; chúng có thể loại bỏ cả allele có lợi, nhất là trong quần thể nhỏ.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Theo Darwin, nguyên liệu chủ yếu của chọn lọc tự nhiên là',
      options: ['biến dị cá thể', 'đột biến nhiễm sắc thể', 'thường biến', 'di - nhập gene'],
      answer: 0,
      hints: ['Darwin chưa biết đến gene và đột biến. Ông quan sát sự khác nhau giữa các cá thể.'],
      solution:
        'Darwin gọi những khác biệt phát sinh trong sinh sản giữa các cá thể cùng loài là biến dị cá thể, và coi đó là nguyên liệu của chọn lọc tự nhiên. Khái niệm đột biến, di - nhập gene là của thuyết tiến hóa hiện đại.',
    },
    {
      type: 'choice',
      prompt: 'Hạn chế chủ yếu của học thuyết Darwin là',
      options: [
        'chưa giải thích được nguyên nhân phát sinh biến dị và cơ chế di truyền biến dị',
        'cho rằng mọi loài đều có chung nguồn gốc',
        'cho rằng chọn lọc tự nhiên giữ lại các biến dị có lợi',
        'cho rằng sinh vật phải đấu tranh sinh tồn',
      ],
      answer: 0,
      hints: ['Vào thời Darwin, ngành khoa học nào chưa phát triển?'],
      solution:
        'Di truyền học chưa phát triển vào thời Darwin, nên ông chưa giải thích được nguyên nhân phát sinh và cơ chế di truyền biến dị, chưa phân biệt biến dị di truyền với biến dị không di truyền. Các ý còn lại là những đóng góp đúng đắn của Darwin.',
    },
    {
      type: 'number',
      prompt:
        'Một quần thể có $500$ cá thể, gồm $200$ cá thể $AA$, $200$ cá thể $Aa$ và $100$ cá thể $aa$. Tính tần số allele $A$ của quần thể.',
      answer: 0.6,
      tolerance: 0.001,
      hints: [
        'Quần thể có $2 \\cdot 500 = 1\\,000$ allele của gene này.',
        'Đếm số allele $A$: $AA$ góp $2$, $Aa$ góp $1$.',
      ],
      solution:
        '$p_A = \\dfrac{2 \\cdot 200 + 200}{2 \\cdot 500} = \\dfrac{600}{1\\,000} = 0{,}6$.',
    },
    {
      type: 'number',
      prompt:
        'Một quần thể thực vật ban đầu toàn cây $Aa$, tự thụ phấn liên tiếp qua $3$ thế hệ. Tỉ lệ cây $Aa$ ở thế hệ thứ ba là bao nhiêu? (ghi dạng số thập phân)',
      answer: 0.125,
      tolerance: 0.0001,
      hints: [
        'Mỗi thế hệ tự thụ phấn, tỉ lệ dị hợp $Aa$ giảm đi một nửa.',
        'Tính $1 \\cdot \\dfrac12 \\cdot \\dfrac12 \\cdot \\dfrac12$.',
      ],
      solution: 'Tỉ lệ $Aa$ sau $3$ thế hệ: $\\left(\\dfrac12\\right)^3 = \\dfrac18 = 0{,}125$.',
    },
    {
      type: 'multi',
      prompt: 'Theo thuyết tiến hóa hiện đại, những nhân tố nào là nhân tố tiến hóa?',
      options: [
        'Đột biến',
        'Giao phối ngẫu nhiên',
        'Di - nhập gene',
        'Chọn lọc tự nhiên',
        'Các yếu tố ngẫu nhiên',
        'Giao phối không ngẫu nhiên',
      ],
      answers: [0, 2, 3, 4, 5],
      hints: [
        'Nhân tố tiến hóa là nhân tố làm thay đổi tần số allele hoặc thành phần kiểu gene của quần thể.',
        'Thử tắt hết các nhân tố trong mô phỏng: khi quần thể chỉ giao phối ngẫu nhiên, cấu trúc di truyền có đổi không?',
      ],
      solution:
        'Có năm nhân tố tiến hóa: đột biến, di - nhập gene, chọn lọc tự nhiên, các yếu tố ngẫu nhiên và giao phối không ngẫu nhiên. Giao phối ngẫu nhiên giữ nguyên tần số allele và tỉ lệ kiểu gene qua các thế hệ, nên không phải nhân tố tiến hóa.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi nhân tố tiến hóa với vai trò đặc trưng của nó.',
      left: [
        'Đột biến',
        'Chọn lọc tự nhiên',
        'Giao phối không ngẫu nhiên',
        'Các yếu tố ngẫu nhiên',
        'Di - nhập gene',
      ],
      right: [
        'Tạo ra allele mới, cung cấp nguyên liệu sơ cấp',
        'Quy định chiều hướng tiến hóa',
        'Tăng đồng hợp, giảm dị hợp, không đổi tần số allele',
        'Thay đổi tần số allele đột ngột, rõ nhất ở quần thể nhỏ',
        'Mang allele vào hoặc ra khỏi quần thể theo cá thể, giao tử di cư',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
      ],
      hints: [
        'Chỉ có một nhân tố là có hướng.',
        'Nhân tố nào gắn với tự thụ phấn, giao phối gần? Nhân tố nào gắn với thiên tai, bão lũ?',
      ],
      solution:
        'Đột biến tạo allele mới; chọn lọc tự nhiên quy định chiều hướng tiến hóa; giao phối không ngẫu nhiên làm tăng đồng hợp, giảm dị hợp; yếu tố ngẫu nhiên làm tần số allele đổi đột ngột ở quần thể nhỏ; di - nhập gene mang allele theo cá thể, giao tử di cư.',
    },
    {
      type: 'number',
      prompt:
        'Một quần thể có cấu trúc $0{,}36\\,AA : 0{,}48\\,Aa : 0{,}16\\,aa$. Chọn lọc tự nhiên đào thải toàn bộ cá thể $aa$ trước khi sinh sản. Tính tần số allele $A$ trong số cá thể còn lại (làm tròn đến hàng phần trăm).',
      answer: 0.71,
      tolerance: 0.005,
      hints: [
        'Sau chọn lọc chỉ còn $AA$ và $Aa$, chiếm tổng $0{,}36 + 0{,}48 = 0{,}84$.',
        'Tính lại tỉ lệ $AA$ và $Aa$ trong phần còn lại, rồi $p_A = AA + \\dfrac{Aa}{2}$.',
      ],
      solution:
        'Còn lại $AA = \\dfrac{0{,}36}{0{,}84}$, $Aa = \\dfrac{0{,}48}{0{,}84}$. Nên $p_A = \\dfrac{0{,}36 + 0{,}24}{0{,}84} = \\dfrac{0{,}6}{0{,}84} \\approx 0{,}71$, tăng so với ban đầu ($0{,}6$): chọn lọc chống allele lặn làm tăng tần số allele trội.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các ý theo đúng trình tự Darwin giải thích sự hình thành loài hươu cao cổ.',
      items: [
        'Thức ăn ở tầng thấp khan hiếm, hươu phải đấu tranh sinh tồn.',
        'Trong quần thể hươu tổ tiên có con cổ dài, có con cổ ngắn.',
        'Con cổ dài ăn được lá trên cao nên sống sót, sinh sản nhiều hơn; con cổ ngắn bị đào thải dần.',
        'Qua nhiều thế hệ, đặc điểm cổ dài được tích lũy, hình thành loài hươu cao cổ.',
      ],
      answer: [1, 0, 2, 3],
      hints: [
        'Theo Darwin, biến dị cá thể có sẵn trước, rồi môi trường mới chọn lọc.',
        'Trình tự: biến dị cá thể → đấu tranh sinh tồn → chọn lọc tự nhiên → tích lũy, hình thành loài.',
      ],
      solution:
        'Biến dị cá thể (cổ dài, cổ ngắn) → đấu tranh sinh tồn khi thiếu thức ăn → chọn lọc tự nhiên giữ con cổ dài → tích lũy qua nhiều thế hệ, hình thành loài hươu cao cổ.',
    },
    {
      type: 'choice',
      prompt: 'Quá trình nào sau đây là tiến hóa lớn?',
      options: [
        'Sự hình thành các lớp Chim và Thú từ những nhóm bò sát cổ',
        'Tần số allele kháng thuốc trong quần thể muỗi tăng sau vài năm phun thuốc',
        'Quần thể bướm bạch dương tăng tỉ lệ bướm màu tối',
        'Tỉ lệ cây dị hợp giảm sau nhiều thế hệ tự thụ phấn',
      ],
      answer: 0,
      hints: ['Tiến hóa lớn tạo ra các đơn vị phân loại trên loài: chi, họ, bộ, lớp, ngành.'],
      solution:
        'Hình thành các lớp (Chim, Thú) là hình thành đơn vị phân loại trên loài, qua thời gian địa chất dài: tiến hóa lớn. Các ý còn lại là biến đổi cấu trúc di truyền của quần thể: tiến hóa nhỏ.',
    },
    {
      type: 'text',
      prompt: 'Theo thuyết tiến hóa hiện đại, đơn vị tiến hóa cơ sở là gì?',
      accept: ['quần thể', 'quần thể sinh vật'],
      hints: [
        'Đó không phải là một cá thể, vì một cá thể không thay đổi tần số allele của chính nó.',
      ],
      solution:
        'Đơn vị tiến hóa là quần thể: tiến hóa nhỏ là sự biến đổi tần số allele và tần số kiểu gene của quần thể qua các thế hệ.',
    },
  ],
  takeaways: [
    'Darwin: biến dị cá thể + đấu tranh sinh tồn → chọn lọc tự nhiên tích lũy biến dị có lợi; loài mới hình thành dần theo con đường phân li tính trạng từ một nguồn gốc chung.',
    'Hạn chế của Darwin: chưa giải thích được nguyên nhân phát sinh và cơ chế di truyền biến dị.',
    'Tiến hóa nhỏ là sự biến đổi tần số allele và tần số kiểu gene của quần thể; quần thể là đơn vị tiến hóa.',
    'Năm nhân tố tiến hóa: đột biến, di - nhập gene, chọn lọc tự nhiên, các yếu tố ngẫu nhiên, giao phối không ngẫu nhiên. Chỉ chọn lọc tự nhiên là nhân tố có hướng.',
    'Tiến hóa lớn là sự hình thành các đơn vị phân loại trên loài, diễn ra qua thời gian địa chất dài.',
  ],
};
