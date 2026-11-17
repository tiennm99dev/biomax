/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Học thuyết tiến hoá tổng hợp hiện đại: tiến hoá nhỏ là sự biến đổi tần số allele và tần số kiểu gene của quần thể; năm nhân tố tiến hoá (đột biến, dòng gene, phiêu bạt di truyền, giao phối không ngẫu nhiên, chọn lọc tự nhiên); sự hình thành đặc điểm thích nghi; loài sinh học, cách li sinh sản và các cơ chế hình thành loài khác khu vực và cùng khu vực địa lí.',
  intro:
    'Darwin chưa biết biến dị từ đâu ra và được di truyền thế nào. Từ những năm $1930$, các nhà khoa học kết hợp chọn lọc tự nhiên với di truyền học và di truyền học quần thể thành học thuyết tiến hoá tổng hợp hiện đại. Theo học thuyết này, điều gì thực sự thay đổi khi một quần thể tiến hoá, và những nhân tố nào làm nó thay đổi?',
  objectives: [
    'Trình bày được khái niệm tiến hoá nhỏ; giải thích được vì sao quần thể là đơn vị tiến hoá nhỏ.',
    'Phân tích được vai trò và đặc điểm tác động của các nhân tố tiến hoá: đột biến, dòng gene, phiêu bạt di truyền, giao phối không ngẫu nhiên, chọn lọc tự nhiên.',
    'Giải thích được sự hình thành và tính tương đối của đặc điểm thích nghi.',
    'Nêu được khái niệm loài sinh học, các cơ chế cách li sinh sản; trình bày được các cơ chế hình thành loài khác khu vực và cùng khu vực địa lí.',
  ],
  sections: [
    {
      heading: 'Tiến hoá nhỏ và các nhân tố tiến hoá',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tiến hoá nhỏ',
          text: 'Tiến hoá nhỏ là quá trình biến đổi tần số allele và tần số kiểu gene của quần thể qua các thế hệ. Quá trình này diễn ra trên phạm vi phân bố hẹp, trong thời gian tương đối ngắn, có thể nghiên cứu bằng thực nghiệm và có thể dẫn đến hình thành loài mới.',
        },
        {
          type: 'p',
          text: 'Quần thể là đơn vị tiến hoá nhỏ vì quần thể là đơn vị tồn tại của loài trong tự nhiên, có cấu trúc di truyền biến đổi được qua các thế hệ và có tính toàn vẹn tương đối về không gian và thời gian. Cá thể không phải đơn vị tiến hoá vì kiểu gene của mỗi cá thể không đổi suốt đời.',
        },
        {
          type: 'p',
          text: 'Nhân tố tiến hoá là các yếu tố làm thay đổi tần số allele hoặc tần số kiểu gene của quần thể.',
        },
        {
          type: 'table',
          head: ['Nhân tố', 'Tác động', 'Đặc điểm'],
          rows: [
            [
              'Đột biến',
              'Tạo allele mới hoặc biến allele này thành allele khác',
              'Tần số đột biến của mỗi gene rất thấp nên làm thay đổi tần số allele rất chậm; là nguồn biến dị sơ cấp, giao phối tổ hợp các allele thành biến dị tổ hợp.',
            ],
            [
              'Dòng gene (di – nhập gene)',
              'Allele đi vào hoặc ra khỏi quần thể theo các cá thể hữu thụ hoặc giao tử (phấn hoa, hạt)',
              'Thay đổi tần số allele không theo hướng xác định, có thể mang allele mới tới; làm giảm khác biệt vốn gene giữa các quần thể.',
            ],
            [
              'Phiêu bạt di truyền',
              'Thay đổi tần số allele do các yếu tố ngẫu nhiên (thiên tai, dịch bệnh, ...)',
              'Thay đổi đột ngột, vô hướng; có thể loại bỏ hẳn một allele dù có lợi, có hại hay trung tính; tác động mạnh ở quần thể nhỏ, làm nghèo vốn gene.',
            ],
            [
              'Giao phối không ngẫu nhiên',
              'Giao phối cận huyết, tự thụ phấn, giao phối có lựa chọn',
              'Không làm thay đổi tần số allele nhưng làm tăng tần số kiểu gene đồng hợp, giảm dị hợp, làm giảm đa dạng di truyền.',
            ],
            [
              'Chọn lọc tự nhiên',
              'Tăng tần số allele, kiểu gene quy định đặc điểm thích nghi; giảm tần số allele, kiểu gene không thích nghi',
              'Tác động trực tiếp lên kiểu hình, gián tiếp lên kiểu gene; là nhân tố có hướng và cơ bản nhất.',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Hiệu ứng sáng lập: một nhóm nhỏ cá thể tách khỏi quần thể gốc (ví dụ bị gió bão đưa ra đảo) lập nên quần thể mới có vốn gene khác hẳn quần thể gốc.',
            'Hiệu ứng thắt cổ chai: kích thước quần thể giảm mạnh do biến cố; quần thể mới phát triển từ số ít cá thể sống sót nên có cấu trúc di truyền khác và đa dạng di truyền thấp, như loài báo săn sau thời kì băng hà khoảng $10\\,000 - 12\\,000$ năm trước.',
            'Chọn lọc chống lại allele trội làm thay đổi tần số allele nhanh hơn chống lại allele lặn, vì allele trội biểu hiện ngay ở thể dị hợp; allele lặn có hại vẫn tồn tại lâu trong các cá thể dị hợp. Áp lực chọn lọc càng lớn, tần số allele biến đổi càng nhanh.',
          ],
        },
        {
          type: 'tex',
          tex: '\\text{Dòng gene: } p_1 = (1 - m)\\,p_0 + m\\,p_{\\text{nhập}}',
        },
      ],
    },
    {
      heading: 'Hình thành đặc điểm thích nghi',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Đặc điểm thích nghi',
          text: 'Đặc điểm thích nghi là đặc điểm di truyền giúp sinh vật tăng khả năng sống sót và sinh sản trong một môi trường nhất định, như màu thân nguỵ trang của thằn lằn, màu sặc sỡ cảnh báo của rắn vua, hình dạng hoa lan hấp dẫn côn trùng thụ phấn.',
        },
        {
          type: 'p',
          text: 'Cơ chế: đột biến phát sinh ngẫu nhiên tạo nguyên liệu; giao phối phát tán và tổ hợp các allele; chọn lọc tự nhiên giữ lại các cá thể mang tổ hợp allele có lợi, làm số cá thể này tăng dần qua các thế hệ. Ví dụ, đột biến kháng penicillin vốn có ở rất ít vi khuẩn; khi dùng penicillin, các vi khuẩn kháng thuốc sống sót và sinh sản nhanh, dần chiếm ưu thế. Khi hầu hết quần thể kháng thuốc, khả năng kháng penicillin mới thành đặc điểm thích nghi của quần thể.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Tính tương đối của đặc điểm thích nghi',
          text: 'Chọn lọc chỉ chọn trong những biến dị sẵn có nên đặc điểm thích nghi không hoàn hảo (cánh dơi là màng da căng giữa các ngón, không có cấu trúc cánh như chim); một đặc điểm có lợi mặt này có thể bất lợi mặt khác (đuôi công đực sặc sỡ hấp dẫn con cái nhưng dễ bị kẻ thù phát hiện); đặc điểm thích nghi ở môi trường này có thể không thích nghi ở môi trường khác (chuột lông vàng nhạt khó bị phát hiện trên nền cát nhưng dễ bị phát hiện trên đất sẫm màu).',
        },
      ],
    },
    {
      heading: 'Loài và cơ chế hình thành loài',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Loài sinh học (E. Mayr)',
          text: 'Loài sinh học là một hoặc một nhóm quần thể gồm các cá thể có khả năng giao phối với nhau trong tự nhiên, sinh ra đời con có sức sống và có khả năng sinh sản, đồng thời cách li sinh sản với các nhóm quần thể khác. Khái niệm này không áp dụng cho sinh vật sinh sản vô tính và các loài đã tuyệt chủng.',
        },
        {
          type: 'table',
          head: ['Cơ chế cách li', 'Biểu hiện'],
          rows: [
            [
              'Cách li nơi ở (sinh cảnh)',
              'Sống trong cùng khu vực nhưng ở những sinh cảnh khác nhau nên không giao phối',
            ],
            ['Cách li tập tính', 'Có tập tính ve vãn, giao phối riêng (tiếng hót, điệu múa, ...)'],
            ['Cách li thời gian (mùa vụ)', 'Sinh sản vào những mùa khác nhau'],
            ['Cách li cơ học', 'Cấu tạo cơ quan sinh sản khác nhau nên không giao phối được'],
            [
              'Cách li sau hợp tử',
              'Hợp tử chết, con lai sức sống yếu hoặc con lai bất thụ (như con la, lai giữa ngựa và lừa)',
            ],
          ],
          caption: 'Bốn dạng đầu là cách li trước hợp tử: ngăn cản giao phối hoặc thụ tinh.',
        },
        {
          type: 'p',
          text: 'Cách li sinh sản về bản chất là cách li di truyền, là điều kiện cuối cùng để hình thành loài mới. Hình thành loài là quá trình biến đổi vốn gene của quần thể ban đầu theo hướng thích nghi, tạo ra hệ gene mới cách li sinh sản với quần thể gốc; điều kiện tiên quyết là có trở ngại ngăn dòng gene giữa các quần thể.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Hình thành loài khác khu vực địa lí',
          text: 'Các quần thể bị cách li địa lí (núi, sông, biển ngăn cách) không trao đổi gene; đột biến, chọn lọc tự nhiên và phiêu bạt di truyền làm vốn gene của chúng phân hoá dần. Khi khác biệt đủ lớn, cách li sinh sản xuất hiện và loài mới hình thành. Cách li địa lí là điều kiện cần nhưng không trực tiếp gây biến đổi. Đây là con đường phổ biến nhất; ví dụ các loài chim sẻ trên quần đảo Galápagos như Geospiza fortis, G. scandens, G. magnirostris.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Hình thành loài cùng khu vực địa lí',
          text: 'Trong cùng khu phân bố, một nhóm cá thể phân hoá vốn gene và cách li sinh sản với phần còn lại nhờ cách li tập tính, cách li sinh thái hoặc lai xa và đa bội hoá. Con đường này ít phổ biến hơn và hay gặp ở thực vật.',
        },
        {
          type: 'list',
          items: [
            'Tự đa bội: loài hoa anh thảo Oenothera lamarckiana ($2n = 14$) phát sinh thể tứ bội O. gigas ($4n = 28$), không thụ phấn được với dạng lưỡng bội nên trở thành loài mới.',
            'Dị đa bội (lai xa và đa bội hoá): con lai khác loài thường bất thụ vì các nhiễm sắc thể không có cặp tương đồng; khi bộ nhiễm sắc thể được nhân đôi, con lai giảm phân bình thường và sinh sản được, cách li với hai loài bố mẹ. Lúa mì Triticum aestivum ($6n = 42$) hình thành theo con đường này.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Năm nhân tố tiến hoá',
    instruction:
      'Chọn một nhân tố, chỉnh tần số allele ban đầu và cường độ tác động, rồi quan sát tần số allele qua $50$ thế hệ. So sánh: nhân tố nào làm thay đổi tần số allele có hướng, nhân tố nào vô hướng, nhân tố nào chỉ thay đổi tần số kiểu gene?',
  },
  examples: [
    {
      problem:
        'Một quần thể ngẫu phối có cấu trúc $0{,}25\\,AA : 0{,}5\\,Aa : 0{,}25\\,aa$. Kiểu hình lặn ($aa$) bị chọn lọc đào thải hoàn toàn trước khi sinh sản. Tính tần số allele $a$ ở các cá thể tham gia sinh sản và ở thế hệ sau khi ngẫu phối.',
      steps: [
        'Sau chọn lọc chỉ còn $AA$ và $Aa$ với tỉ lệ $0{,}25 : 0{,}5$, tức $\\dfrac{1}{3}\\,AA : \\dfrac{2}{3}\\,Aa$.',
        'Tần số allele $a$ ở các cá thể sinh sản: $q_1 = \\dfrac{1}{2} \\cdot \\dfrac{2}{3} = \\dfrac{1}{3}$, giảm từ $0{,}5$.',
        'Ngẫu phối cho thế hệ sau: $aa = q_1^2 = \\dfrac{1}{9}$, $Aa = 2 \\cdot \\dfrac{2}{3} \\cdot \\dfrac{1}{3} = \\dfrac{4}{9}$, $AA = \\dfrac{4}{9}$; tần số $a$ vẫn là $\\dfrac{1}{3}$.',
      ],
      answer:
        'Tần số $a$ giảm từ $0{,}5$ xuống $\\dfrac{1}{3}$; allele lặn không bị loại hết vì vẫn còn trong các cá thể dị hợp $Aa$.',
    },
    {
      problem:
        'Quần thể cá trong một hồ có tần số allele $A$ là $p_0 = 0{,}8$. Mỗi thế hệ, $10\\%$ số cá thể sinh sản là cá nhập cư từ một con sông có tần số allele $A$ là $0{,}3$. Tính tần số allele $A$ của quần thể hồ sau một thế hệ.',
      steps: [
        'Áp dụng $p_1 = (1 - m)\\,p_0 + m\\,p_{\\text{nhập}}$ với $m = 0{,}1$.',
        '$p_1 = 0{,}9 \\cdot 0{,}8 + 0{,}1 \\cdot 0{,}3 = 0{,}72 + 0{,}03 = 0{,}75$.',
      ],
      answer:
        '$p_1 = 0{,}75$: dòng gene kéo tần số allele của quần thể hồ lại gần với quần thể sông.',
    },
    {
      problem:
        'Lai cây cải củ ($2n = 18$, kí hiệu $2n_R$) với cây cải bắp ($2n = 18$, $2n_B$) được con lai bất thụ. Giải thích vì sao con lai bất thụ và cách tạo ra con lai hữu thụ; con lai hữu thụ có bao nhiêu nhiễm sắc thể?',
      steps: [
        'Giao tử của cải củ có $n_R = 9$, của cải bắp có $n_B = 9$; con lai có $n_R + n_B = 18$ nhiễm sắc thể.',
        'Hai bộ nhiễm sắc thể khác loài không có cặp tương đồng nên không tiếp hợp được khi giảm phân: con lai bất thụ.',
        'Gây đa bội hoá (nhân đôi toàn bộ nhiễm sắc thể) được thể song nhị bội $2n_R + 2n_B = 36$: mỗi nhiễm sắc thể đều có cặp tương đồng nên giảm phân bình thường, hữu thụ.',
      ],
      answer:
        'Con lai hữu thụ có $36$ nhiễm sắc thể; nó cách li sinh sản với hai loài bố mẹ: đó là hình thành loài bằng lai xa và đa bội hoá.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Theo học thuyết tiến hoá tổng hợp hiện đại, tiến hoá nhỏ là quá trình',
      options: [
        'biến đổi tần số allele và tần số kiểu gene của quần thể qua các thế hệ',
        'biến đổi kiểu gene của một cá thể trong đời sống',
        'hình thành các đơn vị phân loại trên loài như chi, họ, bộ',
        'biến đổi kiểu hình của cá thể do môi trường',
      ],
      answer: 0,
      hints: ['Đơn vị của tiến hoá nhỏ là quần thể, không phải cá thể.'],
      solution:
        'Tiến hoá nhỏ là sự biến đổi tần số allele và tần số kiểu gene của quần thể qua các thế hệ. Hình thành các đơn vị trên loài là tiến hoá lớn.',
    },
    {
      type: 'choice',
      prompt:
        'Nhân tố tiến hoá nào không làm thay đổi tần số allele nhưng làm tăng tỉ lệ kiểu gene đồng hợp, giảm tỉ lệ dị hợp?',
      options: ['Giao phối không ngẫu nhiên', 'Đột biến', 'Dòng gene', 'Phiêu bạt di truyền'],
      answer: 0,
      hints: ['Hãy thử nhân tố này trong mô phỏng và nhìn đường tần số allele.'],
      solution:
        'Giao phối không ngẫu nhiên (tự thụ phấn, giao phối cận huyết, giao phối có lựa chọn) giữ nguyên tần số allele nhưng làm tăng đồng hợp, giảm dị hợp.',
    },
    {
      type: 'choice',
      prompt: 'Nhân tố tiến hoá có hướng, được coi là nhân tố cơ bản nhất là',
      options: ['chọn lọc tự nhiên', 'phiêu bạt di truyền', 'đột biến', 'dòng gene'],
      answer: 0,
      hints: ['Chỉ một nhân tố luôn làm tăng tần số allele thích nghi.'],
      solution:
        'Chọn lọc tự nhiên làm tăng tần số allele, kiểu gene thích nghi và giảm tần số allele không thích nghi: đó là nhân tố có hướng và cơ bản nhất. Phiêu bạt di truyền và dòng gene là vô hướng.',
    },
    {
      type: 'number',
      prompt:
        'Quần thể $X$ có tần số allele $A$ là $0{,}6$. Mỗi thế hệ có $20\\%$ số cá thể sinh sản là cá thể nhập cư từ quần thể $Y$ có tần số allele $A$ là $0{,}1$. Tính tần số allele $A$ của quần thể $X$ sau một thế hệ.',
      answer: 0.5,
      tolerance: 0.0001,
      hints: ['$p_1 = (1 - m)\\,p_0 + m\\,p_{\\text{nhập}}$.'],
      solution: '$p_1 = 0{,}8 \\cdot 0{,}6 + 0{,}2 \\cdot 0{,}1 = 0{,}48 + 0{,}02 = 0{,}5$.',
    },
    {
      type: 'fraction',
      prompt:
        'Quần thể ngẫu phối $0{,}36\\,AA : 0{,}48\\,Aa : 0{,}16\\,aa$. Các cá thể $aa$ bị đào thải hoàn toàn trước khi sinh sản. Tần số allele $a$ ở các cá thể tham gia sinh sản là bao nhiêu? (ghi dạng phân số)',
      answer: [2, 7],
      hints: [
        'Sau chọn lọc còn $0{,}36\\,AA$ và $0{,}48\\,Aa$; chia cho tổng $0{,}84$.',
        'Tần số $a$ bằng một nửa tỉ lệ $Aa$ sau chọn lọc.',
      ],
      solution:
        'Sau chọn lọc: $Aa = \\dfrac{0{,}48}{0{,}84} = \\dfrac{4}{7}$. Tần số $a$: $\\dfrac{1}{2} \\cdot \\dfrac{4}{7} = \\dfrac{2}{7}$ (giảm từ $0{,}4$ xuống khoảng $0{,}286$).',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các đặc điểm của phiêu bạt di truyền.',
      options: [
        'Làm thay đổi tần số allele một cách ngẫu nhiên, vô hướng',
        'Có thể loại bỏ hoàn toàn một allele có lợi khỏi quần thể',
        'Tác động mạnh hơn ở quần thể có kích thước nhỏ',
        'Luôn làm tăng tần số allele có lợi',
        'Chỉ làm thay đổi tần số kiểu gene, không đổi tần số allele',
      ],
      answers: [0, 1, 2],
      hints: ['Phiêu bạt di truyền do các yếu tố ngẫu nhiên như thiên tai, dịch bệnh gây ra.'],
      solution:
        'Phiêu bạt di truyền thay đổi tần số allele ngẫu nhiên, vô hướng, có thể loại bỏ cả allele có lợi và tác động mạnh ở quần thể nhỏ. Luôn tăng allele có lợi là đặc điểm của chọn lọc tự nhiên; giữ nguyên tần số allele là đặc điểm của giao phối không ngẫu nhiên.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi ví dụ với dạng cách li sinh sản phù hợp.',
      left: [
        'Hai loài ếch cùng vùng, một loài đẻ ở ao, loài kia đẻ ở suối',
        'Hai loài chim có tiếng hót và điệu múa ve vãn khác nhau',
        'Hai loài thông, một loài tung phấn tháng $1$, loài kia tháng $3$',
        'Ngựa giao phối với lừa sinh ra con la bất thụ',
      ],
      right: [
        'Cách li nơi ở',
        'Cách li tập tính',
        'Cách li thời gian',
        'Cách li sau hợp tử',
        'Cách li cơ học',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Cách li trước hợp tử ngăn giao phối; cách li sau hợp tử ngăn tạo con lai hữu thụ.'],
      solution:
        'Đẻ ở ao và suối: cách li nơi ở. Tiếng hót, điệu múa: cách li tập tính. Tung phấn vào tháng khác nhau: cách li thời gian. Con la bất thụ: cách li sau hợp tử.',
    },
    {
      type: 'number',
      prompt:
        'Lúa mì Triticum aestivum là thể dị lục bội ($6n = 42$) hình thành qua lai xa và đa bội hoá từ ba loài lưỡng bội có bộ nhiễm sắc thể đơn bội bằng nhau. Mỗi bộ đơn bội $n$ có bao nhiêu nhiễm sắc thể?',
      answer: 7,
      unit: 'nhiễm sắc thể',
      hints: ['$6n = 42$.'],
      solution: '$n = 42 : 6 = 7$ nhiễm sắc thể.',
    },
    {
      type: 'choice',
      prompt:
        'Vì sao hình thành loài bằng lai xa và đa bội hoá thường gặp ở thực vật, ít gặp ở động vật?',
      options: [
        'Thực vật có thể tự thụ phấn, sinh sản sinh dưỡng; ở động vật đa bội hoá dễ gây rối loạn giới tính và cách li sinh sản phức tạp',
        'Động vật không có nhiễm sắc thể tương đồng',
        'Thực vật không chịu tác động của chọn lọc tự nhiên',
        'Động vật không thể bị đột biến số lượng nhiễm sắc thể',
      ],
      answer: 0,
      hints: ['Thể đa bội mới phải sinh sản được khi chưa có bạn tình cùng loại.'],
      solution:
        'Cây đa bội mới xuất hiện có thể tự thụ phấn hoặc sinh sản sinh dưỡng để nhân lên; ở động vật, con lai xa thường chết hoặc bất thụ, đa bội hoá dễ gây rối loạn cơ chế xác định giới tính và cơ chế cách li sinh sản phức tạp hơn.',
    },
  ],
  takeaways: [
    'Tiến hoá nhỏ là sự biến đổi tần số allele và tần số kiểu gene của quần thể; quần thể là đơn vị tiến hoá nhỏ.',
    'Đột biến tạo nguyên liệu sơ cấp; dòng gene và phiêu bạt di truyền thay đổi tần số allele vô hướng; giao phối không ngẫu nhiên chỉ đổi tần số kiểu gene; chọn lọc tự nhiên là nhân tố có hướng, cơ bản nhất.',
    'Đặc điểm thích nghi hình thành nhờ đột biến, giao phối và chọn lọc tự nhiên, và chỉ có tính tương đối.',
    'Loài sinh học được phân biệt bằng cách li sinh sản; loài mới hình thành khác khu vực địa lí (phổ biến nhất) hoặc cùng khu vực (cách li tập tính, sinh thái, lai xa và đa bội hoá).',
  ],
};
