/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Tương tác giữa kiểu gene và môi trường: thường biến (mềm dẻo kiểu hình), mức phản ứng và vận dụng trong y học, nông nghiệp, giáo dục; chọn, tạo giống bằng lai hữu tính, ưu thế lai và một số thành tựu chọn giống vật nuôi, cây trồng ở Việt Nam và thế giới.',
  intro:
    'Cùng một giống lúa, ruộng được chăm sóc tốt cho gần $10$ tấn/ha, ruộng thiếu phân, thiếu nước chỉ được $4$ tấn/ha. Vậy năng suất do giống quyết định hay do cách chăm sóc quyết định? Và con người đã dựa vào hiểu biết này để tạo ra những giống tốt như thế nào?',
  objectives: [
    'Trình bày được sự tương tác giữa kiểu gene và môi trường; nêu được khái niệm và ví dụ về thường biến.',
    'Nêu được khái niệm mức phản ứng, cách xác định và vận dụng hiểu biết về mức phản ứng trong y học, nông nghiệp, giáo dục.',
    'Trình bày được quy trình chọn, tạo giống bằng lai hữu tính và hiện tượng ưu thế lai.',
    'Kể được một số thành tựu chọn, tạo giống vật nuôi và cây trồng.',
  ],
  sections: [
    {
      heading: 'Tương tác giữa kiểu gene và môi trường',
      blocks: [
        {
          type: 'p',
          text: 'Kiểu gene quy định cấu trúc của protein, từ đó hình thành các đặc điểm của cơ thể. Môi trường cung cấp nguyên liệu, năng lượng và các tín hiệu điều hoà sự biểu hiện của gene. Vì vậy, kiểu hình là kết quả tương tác giữa kiểu gene và môi trường.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Thường biến (mềm dẻo kiểu hình)',
          text: 'Thường biến là hiện tượng một kiểu gene có thể biểu hiện thành các kiểu hình khác nhau khi sống trong những điều kiện môi trường khác nhau. Thường biến không làm thay đổi kiểu gene.',
        },
        {
          type: 'list',
          items: [
            'Hoa phù dung: buổi sáng hoa màu trắng, buổi chiều chuyển sang màu hồng.',
            'Thỏ Himalaya: lông toàn thân trắng, riêng các đầu mút (tai, mũi, bàn chân, đuôi) có nhiệt độ thấp hơn nên lông màu đen. Cạo lông trắng ở lưng rồi chườm nước đá, lông mọc lại ở đó có màu đen; nuôi ở nhiệt độ trên $30\\,^\\circ\\mathrm{C}$, lông ở đầu mút cũng trắng.',
            'Hoa anh thảo (Primula sinensis): cây kiểu gene $AA$ trồng ở $20\\,^\\circ\\mathrm{C}$ cho hoa đỏ, trồng ở $35\\,^\\circ\\mathrm{C}$ cho hoa trắng; đưa cây về $20\\,^\\circ\\mathrm{C}$, hoa mới mọc lại có màu đỏ. Cây $aa$ luôn cho hoa trắng.',
            'Hoa cẩm tú cầu: cùng một giống, trồng ở đất chua hoa màu lam, ở đất trung tính hoặc kiềm hoa màu hồng.',
          ],
        },
      ],
    },
    {
      heading: 'Mức phản ứng',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Mức phản ứng',
          text: 'Mức phản ứng của một kiểu gene là tập hợp các kiểu hình của cùng một kiểu gene tương ứng với các môi trường khác nhau.',
        },
        {
          type: 'list',
          items: [
            'Mức phản ứng do kiểu gene quy định nên di truyền được. Bố mẹ không truyền cho con một kiểu hình có sẵn mà truyền một kiểu gene với mức phản ứng của nó.',
            'Cách xác định: tạo các cá thể có cùng một kiểu gene đồng hợp (ví dụ giâm cành, chiết cành từ cùng một cây, hoặc dòng thuần), nuôi trồng chúng trong các điều kiện môi trường khác nhau rồi theo dõi kiểu hình.',
            'Mỗi gene trong một kiểu gene có mức phản ứng riêng. Tính trạng chất lượng thường có mức phản ứng hẹp, ít chịu ảnh hưởng của môi trường (hàm lượng bơ trong sữa, hàm lượng vitamin C trong quả bưởi, đặc tính hạt gạo ST25). Tính trạng số lượng do nhiều gene quy định, có mức phản ứng rộng, dễ thay đổi theo môi trường (sản lượng sữa, năng suất lúa, sản lượng trứng).',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Giống – kĩ thuật – năng suất',
          text: 'Trong sản xuất nông nghiệp, giống là kiểu gene, kĩ thuật sản xuất (điều kiện canh tác, chăn nuôi) là môi trường, còn năng suất là kiểu hình. Năng suất là kết quả tác động của cả giống và kĩ thuật: giống quy định giới hạn năng suất, kĩ thuật quyết định năng suất cụ thể trong giới hạn đó.',
        },
        {
          type: 'table',
          caption: 'Vận dụng hiểu biết về mức phản ứng',
          head: ['Lĩnh vực', 'Vận dụng'],
          rows: [
            [
              'Y học',
              'Bệnh phenylketonuria (PKU) do gene lặn trên NST thường: cơ thể không chuyển hoá được phenylalanine, chất này tích tụ gây hại hệ thần kinh, làm trí tuệ chậm phát triển. Phát hiện sớm ở trẻ sơ sinh và cho ăn kiêng phenylalanine thì bệnh giảm nhẹ hoặc không biểu hiện.',
            ],
            [
              'Nông nghiệp',
              'Chọn, tạo giống có mức phản ứng rộng về năng suất để thích nghi với nhiều điều kiện canh tác; khi dùng giống mới cần trồng, nuôi đúng quy trình (đúng thời vụ, đúng loại và liều lượng phân bón) để đạt năng suất tối đa của giống.',
            ],
            [
              'Giáo dục, thể chất',
              'Để đạt tầm vóc, sức khoẻ và năng lực học tập tối đa mà kiểu gene cho phép, cần chế độ dinh dưỡng cân đối, vận động, sinh hoạt hợp lí và môi trường học tập tốt.',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Thành tựu chọn, tạo giống bằng lai hữu tính',
      blocks: [
        {
          type: 'p',
          text: 'Giống cây trồng là một quần thể cây trồng phân biệt được với quần thể khác qua ít nhất một đặc tính di truyền, đồng nhất về hình thái, ổn định qua các chu kì nhân giống và có giá trị canh tác, sử dụng. Giống vật nuôi là quần thể vật nuôi cùng loài, cùng nguồn gốc, có ngoại hình và cấu trúc di truyền tương tự, được con người hình thành, củng cố và phát triển; trong một giống có thể có các dòng mang đặc điểm riêng ổn định.',
        },
        {
          type: 'p',
          text: 'Lai hữu tính là phương pháp chọn các cá thể mang đặc điểm mong muốn cho giao phối (thụ phấn) với nhau để tổ hợp các đặc điểm đó vào cùng một giống. Quy trình gồm ba bước:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Tạo các dòng thuần chủng mang các đặc tính mong muốn.',
            'Lai các dòng thuần với nhau để tổ hợp các đặc tính mong muốn.',
            'Chọn lọc các tổ hợp tốt, nhân giống và làm cho giống thuần chủng, ổn định.',
          ],
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Ưu thế lai',
          text: 'Ưu thế lai là hiện tượng con lai giữa các dòng thuần chủng có kiểu gene khác nhau có sức sống, khả năng sinh trưởng, năng suất và sức chống chịu vượt trội so với các dạng bố mẹ. Người ta dùng con lai $F_1$ làm sản phẩm (phép lai kinh tế), không dùng làm giống, vì ưu thế lai giảm dần qua các thế hệ sau.',
        },
        {
          type: 'table',
          caption: 'Một số thành tựu chọn, tạo giống',
          head: ['Giống', 'Đặc điểm và cách tạo'],
          rows: [
            [
              'Gà Đông Tảo (Hưng Yên)',
              'Chọn lọc qua nhiều thế hệ những con to, chân to, da đỏ để làm giống.',
            ],
            ['Vịt Cổ Lũng (Thanh Hoá)', 'Giống vịt bản địa quý, thịt nhiều nạc, thơm ngon.'],
            [
              'Lợn Landrace (Đan Mạch)',
              'Lai lợn địa phương với lợn Large White, rồi chọn lọc thành giống siêu nạc, năng suất cao, nuôi phổ biến trên thế giới.',
            ],
            [
              'Bò Blanc-Blue-Belgium (BBB)',
              'Lai bò Bỉ với bò Shorthorn (Anh); cơ bắp phát triển vượt trội, nhiều thịt nạc.',
            ],
            [
              'Lúa ST25 (Sóc Trăng)',
              'Chọn tạo qua nhiều năm lai và chọn lọc; hạt dài, cơm thơm, được công nhận là gạo ngon nhất thế giới năm 2019.',
            ],
            [
              'Lúa Đài thơm 8',
              'Giống lúa thơm cứng cây, ít đổ ngã, bông to, năng suất cao khi chăm sóc tốt.',
            ],
            [
              'Bưởi Đoan Hùng (Phú Thọ)',
              'Giống bưởi ngon được chọn lọc qua nhiều năm và được bảo hộ.',
            ],
            [
              'Sầu riêng Monthong (Dona)',
              'Nguồn gốc Thái Lan; cây khoẻ, ít sâu bệnh, quả to, múi vàng nhạt, ngọt.',
            ],
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Đồ thị mức phản ứng',
    instruction:
      'Chọn một giống lúa và đổi điều kiện canh tác: điểm trên đồ thị cho biết năng suất (kiểu hình). Thử đủ năm điều kiện để thấy mức phản ứng của giống; so sánh giống A và giống B. Chuyển sang hoa anh thảo để xem nhiệt độ đổi màu hoa của kiểu gene $AA$ và $aa$.',
  },
  examples: [
    {
      problem:
        'Hai giống lúa thuần chủng A và B được trồng ở năm điều kiện canh tác từ rất kém đến rất tốt. Năng suất (tấn/ha) giống A: $4{,}0$; $5{,}6$; $7{,}0$; $8{,}5$; $9{,}5$. Giống B: $5{,}0$; $5{,}4$; $5{,}8$; $6{,}2$; $6{,}5$. Giống nào có mức phản ứng về năng suất rộng hơn? Một vùng canh tác rất khó khăn nên trồng giống nào?',
      steps: [
        'Giống A: năng suất từ $4{,}0$ đến $9{,}5$ tấn/ha, chênh lệch $9{,}5 - 4{,}0 = 5{,}5$ tấn/ha.',
        'Giống B: năng suất từ $5{,}0$ đến $6{,}5$ tấn/ha, chênh lệch $6{,}5 - 5{,}0 = 1{,}5$ tấn/ha.',
        'Vậy giống A có mức phản ứng rộng hơn: năng suất thay đổi mạnh theo điều kiện canh tác.',
        'Ở điều kiện rất kém, giống B cho $5{,}0$ tấn/ha, cao hơn giống A ($4{,}0$ tấn/ha), nên vùng canh tác rất khó khăn nên trồng giống B; vùng thâm canh tốt nên trồng giống A.',
      ],
      answer:
        'Giống A có mức phản ứng rộng hơn ($4{,}0$ – $9{,}5$ tấn/ha). Vùng canh tác rất khó khăn nên trồng giống B.',
    },
    {
      problem:
        'Một cây hoa anh thảo kiểu gene $AA$ trồng ở $35\\,^\\circ\\mathrm{C}$ cho hoa trắng. Lấy hạt của cây này (tự thụ phấn) gieo ở $20\\,^\\circ\\mathrm{C}$ thì cây con cho hoa màu gì? Giải thích.',
      steps: [
        'Hoa trắng ở $35\\,^\\circ\\mathrm{C}$ là thường biến: kiểu gene của cây vẫn là $AA$.',
        'Cây $AA$ tự thụ phấn cho đời con toàn $AA$.',
        'Ở $20\\,^\\circ\\mathrm{C}$, kiểu gene $AA$ biểu hiện thành hoa đỏ.',
      ],
      answer:
        'Cây con cho hoa đỏ: thường biến không làm thay đổi kiểu gene nên không di truyền; cái được di truyền là kiểu gene $AA$ với mức phản ứng của nó.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Thường biến là',
      options: [
        'hiện tượng một kiểu gene biểu hiện thành các kiểu hình khác nhau trong các điều kiện môi trường khác nhau',
        'những biến đổi trong vật chất di truyền do môi trường gây ra',
        'những biến dị tổ hợp xuất hiện qua sinh sản hữu tính',
        'những biến đổi kiểu hình luôn truyền lại cho đời con',
      ],
      answer: 0,
      hints: ['Thường biến có làm thay đổi kiểu gene không?'],
      solution:
        'Thường biến (mềm dẻo kiểu hình) là sự thay đổi kiểu hình của cùng một kiểu gene trước các điều kiện môi trường khác nhau; kiểu gene không đổi nên thường biến không di truyền.',
    },
    {
      type: 'choice',
      prompt: 'Mức phản ứng của một kiểu gene là',
      options: [
        'tập hợp các kiểu hình của cùng một kiểu gene tương ứng với các môi trường khác nhau',
        'tập hợp các kiểu gene cho cùng một kiểu hình',
        'mức độ biểu hiện của một tính trạng trong một môi trường cố định',
        'số allele của một gene trong quần thể',
      ],
      answer: 0,
      hints: ['Giữ nguyên kiểu gene, thay đổi môi trường.'],
      solution:
        'Mức phản ứng là tập hợp các kiểu hình của cùng một kiểu gene tương ứng với các môi trường khác nhau.',
    },
    {
      type: 'number',
      prompt:
        'Các cây được giâm từ cùng một cây khoai lang, trồng ở bốn điều kiện khác nhau, cho năng suất $4{,}5$; $6{,}0$; $7{,}2$; $8{,}1$ tấn/ha. Năng suất cao nhất hơn năng suất thấp nhất bao nhiêu tấn/ha?',
      answer: 3.6,
      tolerance: 0.001,
      unit: 'tấn/ha',
      hints: ['Tìm năng suất cao nhất và thấp nhất trong bốn điều kiện.'],
      solution: 'Năng suất thay đổi từ $4{,}5$ đến $8{,}1$ tấn/ha: $8{,}1 - 4{,}5 = 3{,}6$ tấn/ha.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các tính trạng thường có mức phản ứng hẹp (ít chịu ảnh hưởng của môi trường).',
      options: [
        'Hàm lượng bơ trong sữa bò',
        'Hàm lượng vitamin C trong quả bưởi',
        'Sản lượng sữa của bò',
        'Năng suất lúa',
        'Sản lượng trứng của gà',
      ],
      answers: [0, 1],
      hints: [
        'Tính trạng chất lượng có mức phản ứng hẹp, tính trạng số lượng có mức phản ứng rộng.',
      ],
      solution:
        'Hàm lượng bơ trong sữa và hàm lượng vitamin C là tính trạng chất lượng, mức phản ứng hẹp. Sản lượng sữa, năng suất lúa, sản lượng trứng là tính trạng số lượng, mức phản ứng rộng.',
    },
    {
      type: 'choice',
      prompt: 'Để xác định mức phản ứng của một giống cây, người ta làm thế nào?',
      options: [
        'Trồng các cây có cùng kiểu gene (ví dụ giâm từ cùng một cây) trong các điều kiện môi trường khác nhau rồi theo dõi kiểu hình',
        'Trồng nhiều giống khác nhau trong cùng một điều kiện rồi so sánh',
        'Lai giống đó với nhiều giống khác rồi theo dõi đời con',
        'Gây đột biến cho giống đó rồi theo dõi kiểu hình',
      ],
      answer: 0,
      hints: ['Muốn thấy riêng ảnh hưởng của môi trường, phải giữ nguyên yếu tố nào?'],
      solution:
        'Mức phản ứng là các kiểu hình của một kiểu gene, nên phải dùng các cá thể cùng kiểu gene (đồng hợp, nhân giống vô tính) nuôi trồng trong nhiều môi trường khác nhau.',
    },
    {
      type: 'choice',
      prompt:
        'Cạo một mảng lông trắng trên lưng thỏ Himalaya rồi chườm nước đá liên tục vào chỗ đó. Lông mọc lại ở chỗ chườm đá có màu',
      options: ['đen', 'trắng', 'nửa trắng nửa đen', 'không mọc lại'],
      answer: 0,
      hints: ['Ở thỏ Himalaya, lông ở các đầu mút có nhiệt độ thấp màu gì?'],
      solution:
        'Ở thỏ Himalaya, nơi có nhiệt độ thấp (tai, mũi, chân, đuôi) lông màu đen. Chườm đá làm vùng lưng lạnh đi, nên lông mọc lại có màu đen: cùng kiểu gene, kiểu hình đổi theo nhiệt độ.',
    },
    {
      type: 'choice',
      prompt:
        'Trẻ mắc bệnh phenylketonuria nếu được phát hiện sớm và ăn kiêng phenylalanine thì bệnh giảm nhẹ hoặc không biểu hiện. Điều này cho thấy',
      options: [
        'kiểu hình là kết quả tương tác giữa kiểu gene và môi trường',
        'chế độ ăn đã sửa được gene bệnh',
        'bệnh không do gene quy định',
        'gene bệnh đã bị loại khỏi cơ thể',
      ],
      answer: 0,
      hints: ['Ăn kiêng có làm thay đổi kiểu gene của trẻ không?'],
      solution:
        'Trẻ vẫn mang kiểu gene bệnh, nhưng khi môi trường (chế độ ăn) thay đổi thì kiểu hình bệnh giảm nhẹ hoặc không biểu hiện: kiểu hình do kiểu gene và môi trường cùng quyết định.',
    },
    {
      type: 'match',
      prompt: 'Trong sản xuất nông nghiệp, nối mỗi khái niệm di truyền với yếu tố tương ứng.',
      left: ['Kiểu gene', 'Môi trường', 'Kiểu hình'],
      right: ['Giống', 'Kĩ thuật sản xuất', 'Năng suất', 'Thời tiết trong một ngày'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: [
        'Cái gì được di truyền? Cái gì con người tác động khi chăm sóc? Cái gì thu hoạch được?',
      ],
      solution: 'Giống là kiểu gene, kĩ thuật sản xuất là môi trường, năng suất là kiểu hình.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước của quy trình chọn, tạo giống bằng lai hữu tính.',
      items: [
        'Tạo các dòng thuần chủng mang đặc tính mong muốn',
        'Lai các dòng thuần để tổ hợp các đặc tính mong muốn',
        'Chọn lọc tổ hợp tốt, nhân giống thành giống thuần chủng',
      ],
      answer: [0, 1, 2],
      hints: ['Muốn tổ hợp các đặc tính, trước hết cần có các dòng nào?'],
      solution:
        'Tạo dòng thuần chủng → lai các dòng để tổ hợp đặc tính → chọn lọc, nhân giống thành giống thuần chủng.',
    },
    {
      type: 'choice',
      prompt:
        'Vì sao người ta dùng con lai $F_1$ có ưu thế lai làm sản phẩm mà không giữ làm giống?',
      options: [
        'Vì ưu thế lai giảm dần qua các thế hệ sau',
        'Vì con lai $F_1$ luôn bất thụ',
        'Vì con lai $F_1$ có kiểu gene đồng hợp',
        'Vì con lai $F_1$ không chịu ảnh hưởng của môi trường',
      ],
      answer: 0,
      hints: ['Cho $F_1$ dị hợp giao phối với nhau thì tỉ lệ dị hợp ở đời sau thay đổi thế nào?'],
      solution:
        'Ưu thế lai cao nhất ở $F_1$ dị hợp. Ở các thế hệ sau, tỉ lệ dị hợp giảm, các kiểu gene đồng hợp tăng nên ưu thế lai giảm dần; vì vậy $F_1$ chỉ dùng làm sản phẩm (lai kinh tế).',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi giống với thành tựu tương ứng.',
      left: ['Lúa ST25', 'Gà Đông Tảo', 'Lợn Landrace', 'Bò Blanc-Blue-Belgium'],
      right: [
        'Gạo được công nhận ngon nhất thế giới năm 2019',
        'Chọn lọc những con to, chân to, da đỏ qua nhiều thế hệ',
        'Lai lợn địa phương với lợn Large White, chọn thành giống siêu nạc',
        'Lai bò Bỉ với bò Shorthorn, cơ bắp phát triển vượt trội',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Hai giống là của Việt Nam, hai giống có nguồn gốc châu Âu.'],
      solution:
        'Lúa ST25 – gạo ngon nhất thế giới 2019; gà Đông Tảo – chọn lọc con to, chân to; lợn Landrace – lai với Large White, siêu nạc; bò BBB – lai bò Bỉ với Shorthorn, nhiều cơ.',
    },
  ],
  takeaways: [
    'Kiểu hình là kết quả tương tác giữa kiểu gene và môi trường.',
    'Thường biến (mềm dẻo kiểu hình): một kiểu gene cho các kiểu hình khác nhau ở các môi trường khác nhau; không làm đổi kiểu gene nên không di truyền.',
    'Mức phản ứng là tập hợp các kiểu hình của một kiểu gene ở các môi trường khác nhau; do kiểu gene quy định nên di truyền được. Tính trạng chất lượng có mức phản ứng hẹp, tính trạng số lượng có mức phản ứng rộng.',
    'Giống là kiểu gene, kĩ thuật là môi trường, năng suất là kiểu hình.',
    'Lai hữu tính: tạo dòng thuần → lai → chọn lọc, nhân giống; ưu thế lai cao nhất ở $F_1$ và được dùng trong lai kinh tế.',
  ],
};
