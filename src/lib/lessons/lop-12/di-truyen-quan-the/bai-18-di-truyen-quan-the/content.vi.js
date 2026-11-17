/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Di truyền quần thể: vốn gene, tần số allele và tần số kiểu gene; quần thể ngẫu phối và định luật Hardy–Weinberg p² AA + 2pq Aa + q² aa = 1; quần thể tự thụ phấn và giao phối gần, thoái hoá giống và hôn nhân cận huyết.',
  intro:
    'Trong một quần thể ruồi giấm có $200$ con, $80$ con $BB$, $70$ con $Bb$ và $50$ con $bb$. Làm thế nào để mô tả "bộ gene" của cả quần thể bằng vài con số, và những con số ấy thay đổi ra sao khi các cá thể giao phối ngẫu nhiên hay tự thụ phấn qua nhiều thế hệ?',
  objectives: [
    'Nêu được khái niệm quần thể, vốn gene; tính được tần số allele và tần số kiểu gene của quần thể.',
    'Phát biểu được định luật Hardy–Weinberg, nêu được điều kiện nghiệm đúng và ý nghĩa của định luật; kiểm tra được một quần thể có cân bằng di truyền hay không.',
    'Trình bày được đặc điểm cấu trúc di truyền của quần thể tự thụ phấn và giao phối gần; giải thích được hiện tượng thoái hoá giống và cơ sở của việc cấm kết hôn cận huyết.',
  ],
  sections: [
    {
      heading: 'Quần thể và các đặc trưng di truyền',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Quần thể',
          text: 'Quần thể là tập hợp các cá thể cùng loài, cùng sống trong một khoảng không gian xác định, vào một thời điểm nhất định, có khả năng giao phối với nhau sinh ra đời con hữu thụ.',
        },
        {
          type: 'p',
          text: 'Di truyền học quần thể nghiên cứu tần số các allele, tần số các kiểu gene và những yếu tố làm thay đổi chúng trong quần thể qua các thế hệ.',
        },
        {
          type: 'list',
          items: [
            'Vốn gene là tập hợp tất cả các allele của tất cả các gene ở mọi cá thể trong quần thể tại một thời điểm xác định. Mỗi quần thể có một vốn gene đặc trưng.',
            'Tần số allele của một gene là tỉ lệ giữa số allele đó với tổng số allele của gene ấy trong quần thể. Với gene có hai allele $A$ và $a$, kí hiệu $p$ là tần số allele $A$, $q$ là tần số allele $a$, $p + q = 1$.',
            'Tần số kiểu gene là tỉ lệ giữa số cá thể có kiểu gene đó với tổng số cá thể trong quần thể.',
          ],
        },
        {
          type: 'p',
          text: 'Tập hợp tần số các kiểu gene gọi là cấu trúc di truyền (thành phần kiểu gene) của quần thể, viết dạng $x\\,AA : y\\,Aa : z\\,aa$ với $x + y + z = 1$. Mỗi cá thể $AA$ cho hai allele $A$, mỗi cá thể $Aa$ cho một allele $A$, nên:',
        },
        { type: 'tex', tex: 'p = x + \\dfrac{y}{2}, \\qquad q = z + \\dfrac{y}{2}' },
        {
          type: 'p',
          text: 'Quần thể có nhiều allele và tỉ lệ cá thể dị hợp cao là quần thể đa dạng di truyền. Các allele lặn có hại thường tồn tại ở trạng thái dị hợp, không biểu hiện ra kiểu hình nên được giữ lại trong vốn gene; khi môi trường thay đổi, chúng có thể trở nên trung tính hoặc có lợi, giúp quần thể thích nghi.',
        },
      ],
    },
    {
      heading: 'Quần thể ngẫu phối và định luật Hardy–Weinberg',
      blocks: [
        {
          type: 'p',
          text: 'Quần thể ngẫu phối là quần thể trong đó các cá thể giao phối với nhau một cách hoàn toàn ngẫu nhiên, ví dụ quần thể ngô thụ phấn nhờ gió. Ngẫu phối tạo ra rất nhiều biến dị tổ hợp nên quần thể ngẫu phối rất đa dạng di truyền.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Định luật Hardy–Weinberg',
          text: 'Trong một quần thể lớn, ngẫu phối, nếu không có các yếu tố làm thay đổi tần số allele thì tần số allele và thành phần kiểu gene của quần thể được duy trì không đổi từ thế hệ này sang thế hệ khác theo đẳng thức $$p^2\\,AA + 2pq\\,Aa + q^2\\,aa = 1.$$',
        },
        {
          type: 'p',
          text: 'Khi đó quần thể ở trạng thái cân bằng di truyền (cân bằng Hardy–Weinberg). Thật vậy, quần thể tạo giao tử $A$ với tần số $p$, giao tử $a$ với tần số $q$; các giao tử kết hợp ngẫu nhiên cho $(pA + qa)^2 = p^2\\,AA + 2pq\\,Aa + q^2\\,aa$. Nếu tần số allele ở hai giới như nhau, một quần thể chưa cân bằng chỉ cần một thế hệ ngẫu phối là đạt cân bằng.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Kiểm tra trạng thái cân bằng',
          text: 'Quần thể $x\\,AA : y\\,Aa : z\\,aa$ cân bằng khi $x = p^2$, $y = 2pq$, $z = q^2$, tương đương $x \\cdot z = \\left(\\dfrac{y}{2}\\right)^2$.',
        },
        {
          type: 'list',
          items: [
            'Điều kiện nghiệm đúng: quần thể có kích thước lớn; các cá thể giao phối ngẫu nhiên; các kiểu gene có sức sống và khả năng sinh sản như nhau (không có chọn lọc); không xảy ra đột biến; không có di – nhập gene. Trong tự nhiên, các điều kiện này hiếm khi được thoả mãn đồng thời.',
            'Ý nghĩa: giải thích vì sao nhiều quần thể tự nhiên duy trì ổn định trong thời gian dài; từ tần số kiểu hình lặn ($q^2$) suy ra tần số allele và tần số các kiểu gene, ví dụ ước tính tỉ lệ người mang allele gây bệnh lặn ở trạng thái dị hợp ($2pq$) để tư vấn di truyền, và vận dụng tương tự trong chọn giống.',
          ],
        },
        { type: 'widget', name: 'carrier-estimate' },
      ],
    },
    {
      heading: 'Quần thể tự thụ phấn và giao phối gần',
      blocks: [
        {
          type: 'p',
          text: 'Giao phối gần (giao phối cận huyết) là sự giao phối giữa các cá thể có quan hệ họ hàng gần, có kiểu gene giống nhau nhiều. Tự thụ phấn ở thực vật và tự thụ tinh ở một số động vật là dạng giao phối gần cao nhất, vì bố và mẹ có cùng kiểu gene.',
        },
        {
          type: 'p',
          text: 'Khi tự thụ phấn, cây $AA$ và $aa$ chỉ cho đời con giống mình, còn cây $Aa$ cho $\\tfrac{1}{4}AA : \\tfrac{1}{2}Aa : \\tfrac{1}{4}aa$. Vì vậy sau mỗi thế hệ, tỉ lệ dị hợp giảm đi một nửa, tỉ lệ đồng hợp tăng lên, còn tần số allele không đổi. Từ quần thể $x\\,AA : y\\,Aa : z\\,aa$, sau $n$ thế hệ tự thụ phấn:',
        },
        {
          type: 'tex',
          tex: 'Aa = \\dfrac{y}{2^n}, \\qquad AA = x + \\dfrac{y - \\dfrac{y}{2^n}}{2}, \\qquad aa = z + \\dfrac{y - \\dfrac{y}{2^n}}{2}',
        },
        {
          type: 'table',
          caption: 'Quần thể ban đầu toàn cây $Aa$ tự thụ phấn qua các thế hệ',
          head: ['Thế hệ', '$AA$', '$Aa$', '$aa$', '$p$'],
          rows: [
            ['$P$', '$0$', '$1$', '$0$', '$0{,}5$'],
            ['$F_1$', '$0{,}25$', '$0{,}5$', '$0{,}25$', '$0{,}5$'],
            ['$F_2$', '$0{,}375$', '$0{,}25$', '$0{,}375$', '$0{,}5$'],
            ['$F_3$', '$0{,}4375$', '$0{,}125$', '$0{,}4375$', '$0{,}5$'],
          ],
        },
        {
          type: 'p',
          text: 'Qua nhiều thế hệ, quần thể tự thụ phấn hoặc giao phối gần phân hoá thành các dòng thuần có kiểu gene khác nhau; quần thể gồm chủ yếu các cá thể đồng hợp nên kém đa dạng di truyền hơn quần thể ngẫu phối.',
        },
        {
          type: 'table',
          caption: 'Hệ quả và ứng dụng',
          head: ['Vấn đề', 'Giải thích'],
          rows: [
            [
              'Thoái hoá giống',
              'Tự thụ phấn hoặc giao phối gần làm tăng tỉ lệ đồng hợp lặn, các allele lặn có hại được biểu hiện: cây trồng giảm sức sống, năng suất, chất lượng; vật nuôi giảm sức sinh sản, xuất hiện quái thai, dị tật, chết non. Vì vậy trong chăn nuôi cần tránh cho các con cùng đàn, cùng bố mẹ giao phối với nhau.',
            ],
            [
              'Hôn nhân và gia đình',
              'Kết hôn giữa những người có họ hàng gần làm tăng khả năng con mang kiểu gene đồng hợp lặn gây bệnh di truyền. Luật Hôn nhân và Gia đình Việt Nam cấm kết hôn giữa những người có họ trong phạm vi ba đời.',
            ],
            [
              'Tạo dòng thuần',
              'Người ta dùng tự thụ phấn, giao phối gần để tạo các dòng thuần đồng hợp về các gene mong muốn, rồi lai các dòng thuần với nhau để tạo ưu thế lai.',
            ],
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Máy tính Hardy–Weinberg',
    instruction:
      'Chỉnh tỉ lệ $AA$ và $Aa$ của thế hệ $P$, chọn kiểu giao phối rồi bấm "Thế hệ tiếp" nhiều lần. Với ngẫu phối, quan sát cấu trúc di truyền sau một thế hệ và các thế hệ sau; với tự thụ phấn, quan sát phần $Aa$ (màu cam) và tần số $p$ ở cột bên phải.',
  },
  examples: [
    {
      problem:
        'Quần thể ruồi giấm có $200$ con: $80$ con $BB$, $70$ con $Bb$, $50$ con $bb$. Tính tần số các kiểu gene, tần số các allele. Quần thể có cân bằng di truyền không? Nếu cho ngẫu phối, cấu trúc di truyền ở thế hệ sau là gì?',
      steps: [
        'Tần số kiểu gene: $BB = \\dfrac{80}{200} = 0{,}4$; $Bb = \\dfrac{70}{200} = 0{,}35$; $bb = \\dfrac{50}{200} = 0{,}25$.',
        'Tổng số allele là $200 \\cdot 2 = 400$. Tần số allele $B$: $p = \\dfrac{80 \\cdot 2 + 70}{400} = 0{,}575$; $q = 1 - 0{,}575 = 0{,}425$ (hoặc $p = 0{,}4 + \\dfrac{0{,}35}{2} = 0{,}575$).',
        'Kiểm tra: $x \\cdot z = 0{,}4 \\cdot 0{,}25 = 0{,}1$, còn $\\left(\\dfrac{y}{2}\\right)^2 = 0{,}175^2 = 0{,}030625$. Hai số khác nhau nên quần thể chưa cân bằng.',
        'Sau một thế hệ ngẫu phối: $BB = p^2 = 0{,}330625$; $Bb = 2pq = 2 \\cdot 0{,}575 \\cdot 0{,}425 = 0{,}48875$; $bb = q^2 = 0{,}180625$.',
      ],
      answer:
        '$p = 0{,}575$, $q = 0{,}425$; quần thể chưa cân bằng. Thế hệ sau: $0{,}330625\\,BB : 0{,}48875\\,Bb : 0{,}180625\\,bb$, đã cân bằng di truyền.',
    },
    {
      problem:
        'Một quần thể thực vật ở thế hệ $P$ có cấu trúc $0{,}4\\,AA : 0{,}4\\,Aa : 0{,}2\\,aa$, tự thụ phấn liên tiếp qua hai thế hệ. Tính cấu trúc di truyền ở $F_2$ và tần số allele $A$ ở $P$ và $F_2$.',
      steps: [
        'Tỉ lệ dị hợp giảm một nửa mỗi thế hệ: $Aa = \\dfrac{0{,}4}{2^2} = 0{,}1$.',
        'Phần dị hợp mất đi là $0{,}4 - 0{,}1 = 0{,}3$, chia đều cho hai loại đồng hợp: $AA = 0{,}4 + 0{,}15 = 0{,}55$; $aa = 0{,}2 + 0{,}15 = 0{,}35$.',
        'Tần số allele $A$ ở $P$: $0{,}4 + \\dfrac{0{,}4}{2} = 0{,}6$; ở $F_2$: $0{,}55 + \\dfrac{0{,}1}{2} = 0{,}6$.',
      ],
      answer:
        '$F_2$: $0{,}55\\,AA : 0{,}1\\,Aa : 0{,}35\\,aa$; tần số allele $A$ vẫn là $0{,}6$: tự thụ phấn không làm đổi tần số allele.',
    },
    {
      problem:
        'Một quần thể thực vật đang cân bằng di truyền có $16\\%$ cây hoa trắng (kiểu gene $aa$), còn lại là cây hoa đỏ. Tính tần số các allele, cấu trúc di truyền của quần thể và tỉ lệ cây dị hợp trong số cây hoa đỏ.',
      steps: [
        'Quần thể cân bằng nên $q^2 = 0{,}16$, suy ra $q = 0{,}4$ và $p = 1 - 0{,}4 = 0{,}6$.',
        'Cấu trúc di truyền: $p^2 = 0{,}36\\,AA$; $2pq = 0{,}48\\,Aa$; $q^2 = 0{,}16\\,aa$.',
        'Cây hoa đỏ chiếm $0{,}36 + 0{,}48 = 0{,}84$; trong đó cây dị hợp chiếm $\\dfrac{0{,}48}{0{,}84} = \\dfrac{4}{7}$.',
      ],
      answer:
        '$p = 0{,}6$; $q = 0{,}4$; quần thể $0{,}36\\,AA : 0{,}48\\,Aa : 0{,}16\\,aa$; trong số cây hoa đỏ có $\\dfrac{4}{7}$ là cây dị hợp.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Vốn gene của một quần thể là',
      options: [
        'tập hợp tất cả các allele của tất cả các gene ở mọi cá thể trong quần thể tại một thời điểm',
        'tập hợp tất cả các kiểu gene của một cá thể',
        'tổng số cá thể của quần thể',
        'tập hợp các gene trội có trong quần thể',
      ],
      answer: 0,
      hints: ['Vốn gene nói về allele của cả quần thể, không phải của một cá thể.'],
      solution:
        'Vốn gene là tập hợp tất cả các allele của tất cả các gene ở mọi cá thể trong quần thể tại một thời điểm xác định.',
    },
    {
      type: 'number',
      prompt:
        'Một quần thể thực vật có $500$ cây: $200$ cây $AA$, $150$ cây $Aa$ và $150$ cây $aa$. Tần số allele $A$ là bao nhiêu?',
      answer: 0.55,
      tolerance: 0.0001,
      hints: [
        'Mỗi cây có hai allele của gene này: quần thể có $1\\,000$ allele.',
        'Đếm allele $A$: mỗi cây $AA$ có hai, mỗi cây $Aa$ có một.',
      ],
      solution:
        'Số allele $A$: $200 \\cdot 2 + 150 = 550$ trên tổng $500 \\cdot 2 = 1\\,000$ allele, nên $p = 0{,}55$. Cách khác: $p = 0{,}4 + \\dfrac{0{,}3}{2} = 0{,}55$.',
    },
    {
      type: 'choice',
      prompt: 'Quần thể nào sau đây đang ở trạng thái cân bằng di truyền?',
      options: [
        '$0{,}64\\,AA : 0{,}32\\,Aa : 0{,}04\\,aa$',
        '$0{,}4\\,AA : 0{,}4\\,Aa : 0{,}2\\,aa$',
        '$0{,}25\\,AA : 0{,}6\\,Aa : 0{,}15\\,aa$',
        '$0{,}5\\,AA : 0{,}5\\,aa$',
      ],
      answer: 0,
      hints: ['So sánh $x \\cdot z$ với $\\left(\\dfrac{y}{2}\\right)^2$ cho từng quần thể.'],
      solution:
        'Với $0{,}64\\,AA : 0{,}32\\,Aa : 0{,}04\\,aa$: $0{,}64 \\cdot 0{,}04 = 0{,}0256 = 0{,}16^2$, nên cân bằng ($p = 0{,}8$, $q = 0{,}2$). Các quần thể còn lại: $0{,}08 \\ne 0{,}04$; $0{,}0375 \\ne 0{,}09$; $0{,}25 \\ne 0$.',
    },
    {
      type: 'number',
      prompt:
        'Thế hệ $P$ của một quần thể ngẫu phối có cấu trúc $0{,}3\\,AA : 0{,}6\\,Aa : 0{,}1\\,aa$. Nếu không có các yếu tố làm thay đổi tần số allele, tỉ lệ kiểu gene $aa$ ở $F_1$ là bao nhiêu?',
      answer: 0.16,
      tolerance: 0.0001,
      hints: [
        'Tính tần số allele $a$ ở $P$ trước.',
        'Sau một thế hệ ngẫu phối, tỉ lệ $aa$ là $q^2$.',
      ],
      solution:
        '$q = 0{,}1 + \\dfrac{0{,}6}{2} = 0{,}4$. Sau một thế hệ ngẫu phối quần thể cân bằng: $aa = q^2 = 0{,}16$.',
    },
    {
      type: 'number',
      prompt:
        'Thế hệ $P$ của một quần thể thực vật: $0{,}2\\,AA : 0{,}4\\,Aa : 0{,}4\\,aa$. Sau ba thế hệ tự thụ phấn, tỉ lệ kiểu gene $AA$ là bao nhiêu?',
      answer: 0.375,
      tolerance: 0.0001,
      hints: [
        'Tỉ lệ $Aa$ sau $n$ thế hệ là $\\dfrac{y}{2^n}$.',
        'Phần dị hợp mất đi chia đều cho $AA$ và $aa$.',
      ],
      solution:
        '$Aa = \\dfrac{0{,}4}{2^3} = 0{,}05$. Phần dị hợp mất đi: $0{,}4 - 0{,}05 = 0{,}35$, mỗi loại đồng hợp nhận $0{,}175$. Vậy $AA = 0{,}2 + 0{,}175 = 0{,}375$.',
    },
    {
      type: 'number',
      prompt:
        'Một quần thể ban đầu toàn cây $Aa$ tự thụ phấn liên tiếp. Sau bao nhiêu thế hệ thì tỉ lệ cây dị hợp còn $0{,}0625$?',
      answer: 4,
      unit: 'thế hệ',
      hints: ['Sau $n$ thế hệ, tỉ lệ $Aa$ là $\\dfrac{1}{2^n}$.'],
      solution:
        '$\\dfrac{1}{2^n} = 0{,}0625 = \\dfrac{1}{16} = \\dfrac{1}{2^4}$, nên $n = 4$ thế hệ.',
    },
    {
      type: 'number',
      prompt:
        'Ở một quần thể người đang cân bằng di truyền, cứ $10\\,000$ người có $1$ người bị bệnh bạch tạng do allele lặn $a$ trên NST thường. Tần số người mang allele bệnh ở trạng thái dị hợp ($Aa$) là bao nhiêu?',
      answer: 0.0198,
      tolerance: 0.00005,
      hints: [
        'Người bệnh có kiểu gene $aa$, tần số $q^2 = \\dfrac{1}{10\\,000}$.',
        'Tính $q$, $p$ rồi tính $2pq$.',
      ],
      solution:
        '$q^2 = 0{,}0001$ nên $q = 0{,}01$, $p = 0{,}99$. Tần số người dị hợp: $2pq = 2 \\cdot 0{,}99 \\cdot 0{,}01 = 0{,}0198$ (gần $2\\%$, gấp gần $200$ lần số người bệnh).',
    },
    {
      type: 'multi',
      prompt: 'Chọn các điều kiện nghiệm đúng của định luật Hardy–Weinberg.',
      options: [
        'Quần thể có kích thước lớn',
        'Các cá thể giao phối ngẫu nhiên',
        'Không xảy ra đột biến, không có di – nhập gene',
        'Các kiểu gene có sức sống và khả năng sinh sản như nhau',
        'Các cá thể tự thụ phấn qua nhiều thế hệ',
        'Có chọn lọc tự nhiên đào thải kiểu gene lặn',
      ],
      answers: [0, 1, 2, 3],
      hints: [
        'Định luật đúng khi không có yếu tố nào làm thay đổi tần số allele hay thành phần kiểu gene.',
      ],
      solution:
        'Điều kiện: quần thể lớn, ngẫu phối, không đột biến, không di – nhập gene, các kiểu gene có sức sống và khả năng sinh sản như nhau. Tự thụ phấn làm đổi thành phần kiểu gene, chọn lọc làm đổi tần số allele.',
    },
    {
      type: 'choice',
      prompt: 'Qua nhiều thế hệ tự thụ phấn, cấu trúc di truyền của quần thể thay đổi theo hướng',
      options: [
        'tỉ lệ dị hợp giảm, tỉ lệ đồng hợp tăng, tần số allele không đổi',
        'tỉ lệ dị hợp tăng, tỉ lệ đồng hợp giảm, tần số allele không đổi',
        'tỉ lệ dị hợp giảm và tần số allele trội tăng',
        'giữ nguyên cấu trúc di truyền như thế hệ ban đầu',
      ],
      answer: 0,
      hints: ['Cây $Aa$ tự thụ phấn cho bao nhiêu phần đời con dị hợp?'],
      solution:
        'Cây $Aa$ tự thụ phấn chỉ cho $\\tfrac{1}{2}$ đời con dị hợp, còn cây đồng hợp cho đời con đồng hợp. Vì vậy dị hợp giảm một nửa mỗi thế hệ, đồng hợp tăng; số allele $A$ và $a$ được giữ nguyên nên tần số allele không đổi.',
    },
    {
      type: 'choice',
      prompt:
        'Luật Hôn nhân và Gia đình cấm kết hôn giữa những người có họ trong phạm vi ba đời vì',
      options: [
        'con của họ dễ mang kiểu gene đồng hợp lặn gây bệnh di truyền',
        'giao phối gần làm tăng tần số allele lặn trong quần thể',
        'con của họ luôn bị đột biến gene',
        'giao phối gần làm giảm tỉ lệ kiểu gene đồng hợp',
      ],
      answer: 0,
      hints: ['Giao phối gần làm thay đổi tỉ lệ kiểu gene nào?'],
      solution:
        'Người có họ hàng gần dễ cùng mang một allele lặn có hại. Kết hôn cận huyết làm tăng tỉ lệ đồng hợp, allele lặn có hại biểu hiện thành bệnh ở con; tần số allele không vì thế mà tăng.',
    },
  ],
  takeaways: [
    'Vốn gene là tập hợp mọi allele của quần thể; quần thể $x\\,AA : y\\,Aa : z\\,aa$ có $p = x + \\dfrac{y}{2}$, $q = z + \\dfrac{y}{2}$, $p + q = 1$.',
    'Định luật Hardy–Weinberg: quần thể lớn, ngẫu phối, không có yếu tố làm đổi tần số allele thì cấu trúc $p^2\\,AA + 2pq\\,Aa + q^2\\,aa = 1$ được giữ nguyên; chỉ sau một thế hệ ngẫu phối quần thể đạt cân bằng.',
    'Quần thể cân bằng khi $x \\cdot z = \\left(\\dfrac{y}{2}\\right)^2$; từ tần số kiểu hình lặn $q^2$ suy ra $q$, $p$ và các kiểu gene.',
    'Tự thụ phấn và giao phối gần: tần số allele không đổi, dị hợp giảm (tự thụ phấn: còn $\\dfrac{y}{2^n}$ sau $n$ thế hệ), đồng hợp tăng; dẫn tới thoái hoá giống, là lí do cấm kết hôn cận huyết, và được dùng để tạo dòng thuần.',
  ],
};
