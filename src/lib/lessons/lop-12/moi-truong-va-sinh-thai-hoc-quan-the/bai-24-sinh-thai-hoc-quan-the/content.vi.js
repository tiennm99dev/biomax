/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Quần thể sinh vật và các mối quan hệ hỗ trợ, cạnh tranh; các đặc trưng cơ bản của quần thể: kích thước, mật độ, kiểu phân bố, tỉ lệ giới tính, nhóm tuổi; tăng trưởng theo đường cong chữ J và chữ S; biến động và điều hoà số lượng cá thể; ứng dụng.',
  intro:
    'Một đàn sói cùng nhau săn được con mồi lớn hơn hẳn từng con; nhưng khi đàn quá đông, chúng lại tranh nhau thức ăn và lãnh thổ. Một quần thể có thể tăng số lượng mãi được không? Điều gì giữ số lượng chuột trên cánh đồng, cá trong hồ dao động quanh một mức nhất định?',
  objectives: [
    'Phát biểu được khái niệm quần thể; phân tích được mối quan hệ hỗ trợ và cạnh tranh giữa các cá thể trong quần thể.',
    'Trình bày được các đặc trưng cơ bản của quần thể: kích thước (tối thiểu, tối đa), mật độ, kiểu phân bố, tỉ lệ giới tính, nhóm tuổi; đọc được tháp tuổi.',
    'Phân biệt được tăng trưởng theo tiềm năng sinh học (chữ J) và trong môi trường có giới hạn (chữ S); tính được kích thước quần thể từ mức sinh sản, tử vong, nhập cư, xuất cư.',
    'Trình bày được biến động số lượng theo chu kì, không theo chu kì và cơ chế tự điều hoà số lượng của quần thể; nêu được ứng dụng trong nông nghiệp, bảo tồn và chính sách dân số.',
  ],
  sections: [
    {
      heading: 'Quần thể và các mối quan hệ trong quần thể',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Quần thể sinh vật',
          text: 'Quần thể là tập hợp các cá thể cùng loài, cùng sống trong một khoảng không gian xác định, vào một thời điểm nhất định, có khả năng sinh sản tạo thành những thế hệ mới.',
        },
        {
          type: 'p',
          text: 'Quần thể được hình thành khi một số cá thể cùng loài phát tán tới môi trường sống mới; những cá thể thích nghi được với điều kiện sống mới thì tồn tại, sinh sản, dần dần gắn bó với nhau thành quần thể ổn định.',
        },
        {
          type: 'table',
          head: ['Quan hệ', 'Biểu hiện và ý nghĩa'],
          rows: [
            [
              'Hỗ trợ',
              'Các cá thể cùng tìm thức ăn, chống kẻ thù, sinh sản (chó sói săn mồi theo đàn, cây thông nhựa liền rễ). Quan hệ hỗ trợ tạo hiệu quả nhóm: khai thác tối ưu nguồn sống, tăng hiệu quả sinh sản, chống chịu tốt hơn với điều kiện bất lợi.',
            ],
            [
              'Cạnh tranh',
              'Xuất hiện khi mật độ quá cao, nguồn sống không đủ: các cá thể tranh giành thức ăn, nơi ở, ánh sáng, con cái. Cạnh tranh làm tăng tử vong, xuất cư, giảm sinh sản, giúp số lượng và sự phân bố phù hợp với nguồn sống; đồng thời loại bỏ cá thể kém thích nghi.',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Các đặc trưng cơ bản của quần thể',
      blocks: [
        {
          type: 'list',
          items: [
            'Kích thước quần thể là số lượng cá thể (hoặc khối lượng, năng lượng tích luỹ trong các cá thể) của quần thể. Kích thước tối thiểu là số cá thể ít nhất để quần thể duy trì và phát triển; kích thước tối đa là giới hạn lớn nhất phù hợp với sức chứa của môi trường.',
            'Mật độ cá thể là số lượng cá thể (hoặc sinh khối) trên một đơn vị diện tích hay thể tích. Mật độ ảnh hưởng tới mức sử dụng nguồn sống, khả năng sinh sản và tử vong.',
            'Kiểu phân bố: theo nhóm (phổ biến nhất, khi điều kiện sống phân bố không đều, các cá thể hỗ trợ nhau: nhóm cây bụi, đàn trâu rừng); đồng đều (khi điều kiện sống phân bố đều, cạnh tranh gay gắt: cây thông trong rừng thông, chim cánh cụt làm tổ); ngẫu nhiên (điều kiện sống phân bố đều, không có cạnh tranh gay gắt: các loài sâu sống trên tán lá, cây gỗ trong rừng mưa nhiệt đới).',
            'Tỉ lệ giới tính là tỉ lệ giữa số cá thể đực và số cá thể cái. Tỉ lệ này thường xấp xỉ $1 : 1$ nhưng thay đổi theo loài, theo giai đoạn phát triển và điều kiện môi trường; trong chăn nuôi gà, vịt lấy trứng người ta giữ nhiều con cái hơn.',
            'Nhóm tuổi: quần thể gồm nhóm tuổi trước sinh sản, đang sinh sản và sau sinh sản. Sắp xếp các nhóm tuổi chồng lên nhau được tháp tuổi.',
          ],
        },
        {
          type: 'tex',
          tex: 'N_t = N_0 + B - D + I - E',
        },
        {
          type: 'p',
          text: 'Trong đó $N_0$, $N_t$ là số cá thể ở thời điểm đầu và sau khoảng thời gian $t$; $B$, $D$, $I$, $E$ lần lượt là số cá thể sinh ra, chết đi, nhập cư và xuất cư trong khoảng thời gian đó. Dưới kích thước tối thiểu, quần thể dễ suy giảm tới diệt vong vì sự hỗ trợ giữa các cá thể giảm, cơ hội gặp nhau để giao phối ít, giao phối gần tăng; trên kích thước tối đa, cạnh tranh gay gắt làm tăng tử vong, xuất cư.',
        },
        {
          type: 'table',
          caption: 'Ba dạng tháp tuổi',
          head: ['Dạng tháp', 'Đặc điểm', 'Xu hướng'],
          rows: [
            [
              'Phát triển',
              'Đáy rộng: nhóm trước sinh sản đông hơn nhóm đang sinh sản',
              'Số lượng tăng',
            ],
            ['Ổn định', 'Nhóm trước sinh sản xấp xỉ nhóm đang sinh sản', 'Số lượng ổn định'],
            [
              'Suy thoái',
              'Đáy hẹp: nhóm trước sinh sản ít hơn nhóm đang sinh sản',
              'Số lượng giảm',
            ],
          ],
        },
        { type: 'widget', name: 'thap-tuoi' },
      ],
    },
    {
      heading: 'Tăng trưởng của quần thể',
      blocks: [
        {
          type: 'p',
          text: 'Tăng trưởng quần thể là sự gia tăng kích thước quần thể theo thời gian, phụ thuộc vào mức sinh sản, tử vong, nhập cư và xuất cư. Khi bỏ qua di cư, tốc độ tăng trưởng (tính theo tỉ lệ) là $r = b - d$, với $b$ là mức sinh sản và $d$ là mức tử vong.',
        },
        {
          type: 'table',
          head: ['Kiểu tăng trưởng', 'Điều kiện', 'Đồ thị'],
          rows: [
            [
              'Theo tiềm năng sinh học',
              'Môi trường không bị giới hạn: nguồn sống dồi dào, không gian rộng, không có kẻ thù, dịch bệnh; mỗi cá thể sinh sản tối đa',
              'Đường cong chữ J: số lượng tăng theo cấp số nhân, $\\dfrac{\\Delta N}{\\Delta t} = rN$',
            ],
            [
              'Trong môi trường có giới hạn',
              'Nguồn sống, không gian có hạn; cạnh tranh, dịch bệnh, vật ăn thịt tăng khi mật độ tăng',
              'Đường cong chữ S: lúc đầu tăng chậm, sau đó tăng nhanh, tăng nhanh nhất ở điểm uốn $N = \\dfrac{K}{2}$, rồi chậm dần và ổn định quanh sức chứa $K$; $\\dfrac{\\Delta N}{\\Delta t} = rN\\dfrac{K - N}{K}$',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Trong tự nhiên, hầu hết quần thể tăng trưởng theo đường cong chữ S. Quần thể người tăng chậm suốt thời gian dài do sản xuất lương thực thấp, dịch bệnh, chiến tranh; từ khoảng thế kỉ XVI, nhờ những tiến bộ về kinh tế, xã hội, y tế, dân số thế giới tăng rất nhanh, gây sức ép lớn lên tài nguyên và môi trường.',
        },
      ],
    },
    {
      heading: 'Biến động và điều hoà số lượng cá thể',
      blocks: [
        {
          type: 'list',
          items: [
            'Biến động theo chu kì: số lượng tăng giảm theo chu kì biến đổi của môi trường. Ví dụ: ếch nhái tăng mạnh vào mùa mưa, giảm vào mùa khô; số lượng thỏ rừng và linh miêu ở Canada biến động theo chu kì khoảng $9$ – $10$ năm; cá cơm ở vùng biển Peru biến động theo chu kì khoảng $10$ – $12$ năm do dòng hải lưu nóng.',
            'Biến động không theo chu kì: số lượng tăng hoặc giảm đột ngột do các yếu tố ngẫu nhiên như cháy rừng, bão, lũ lụt, dịch bệnh, hoặc hoạt động của con người (khai thác quá mức, xả thải, xây dựng).',
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Cơ chế điều hoà số lượng',
          text: 'Quần thể luôn có xu hướng tự điều chỉnh số lượng cá thể về trạng thái cân bằng, phù hợp với nguồn sống của môi trường. Khi số lượng tăng quá cao, thiếu thức ăn, nơi ở, cạnh tranh gay gắt, dịch bệnh và vật ăn thịt tăng làm mức tử vong, xuất cư tăng, mức sinh sản giảm; khi số lượng giảm thấp, nguồn sống dồi dào, mức sinh sản tăng, tử vong giảm, nhập cư có thể tăng, số lượng lại tăng lên.',
        },
        {
          type: 'p',
          text: 'Các nhân tố hữu sinh như cạnh tranh, vật ăn thịt, dịch bệnh tác động mạnh hay yếu tuỳ mật độ (nhân tố phụ thuộc mật độ); các nhân tố vô sinh như khí hậu, thiên tai tác động lên quần thể không phụ thuộc vào mật độ.',
        },
        { type: 'widget', name: 'dieu-hoa' },
      ],
    },
    {
      heading: 'Ứng dụng hiểu biết về quần thể',
      blocks: [
        {
          type: 'list',
          items: [
            'Nông nghiệp: trồng cây, nuôi con với mật độ hợp lí để hạn chế cạnh tranh, dịch bệnh, thuận tiện chăm sóc, nâng cao năng suất; tỉa thưa cây, tách đàn khi mật độ quá cao.',
            'Bảo tồn và khai thác: dựa vào kích thước, mật độ, cấu trúc tuổi, tỉ lệ giới tính để đánh giá tình trạng loài, quyết định loài cần bảo vệ và mức khai thác hợp lí; quy định kích thước mắt lưới để chỉ đánh bắt cá trưởng thành, cấm khai thác vào mùa sinh sản.',
            'Chính sách xã hội: nghiên cứu dân số (tỉ lệ sinh, tử, cấu trúc tuổi, giới tính, phân bố dân cư) là cơ sở xây dựng chính sách dân số, giáo dục, y tế, an sinh và bảo vệ môi trường.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Đường cong chữ J và chữ S',
    instruction:
      'Chọn "Cả hai" rồi kéo thanh trượt thời điểm $t$: so sánh số lượng trên đường chữ J (môi trường không giới hạn) và chữ S (có sức chứa $K$, đường đỏ đứt nét). Đổi $r$ và $K$ để xem đường chữ S tăng nhanh nhất khi $N = \\dfrac{K}{2}$ và dừng lại quanh $K$.',
  },
  examples: [
    {
      problem:
        'Đầu năm, quần thể chuột đồng trên một cánh đồng có $1\\,200$ con. Trong năm có $480$ con được sinh ra, $300$ con chết, $50$ con nhập cư và $30$ con xuất cư. Tính số chuột cuối năm và tỉ lệ tăng so với đầu năm.',
      steps: [
        'Áp dụng $N_t = N_0 + B - D + I - E$.',
        '$N_t = 1\\,200 + 480 - 300 + 50 - 30 = 1\\,400$ con.',
        'Số chuột tăng thêm $1\\,400 - 1\\,200 = 200$ con, tỉ lệ tăng $\\dfrac{200}{1\\,200} \\approx 16{,}7\\%$.',
      ],
      answer: '$1\\,400$ con, tăng khoảng $16{,}7\\%$.',
    },
    {
      problem:
        'Một quần thể có $5\\,000$ cá thể, mức sinh sản $b = 0{,}12$ và mức tử vong $d = 0{,}04$ mỗi năm, không có di cư. Tính tốc độ tăng trưởng $r$ và số cá thể sau $1$ năm, $2$ năm (coi $r$ không đổi).',
      steps: [
        '$r = b - d = 0{,}12 - 0{,}04 = 0{,}08$ (tăng $8\\%$ mỗi năm).',
        'Sau $1$ năm: $5\\,000 \\cdot (1 + 0{,}08) = 5\\,400$ cá thể.',
        'Sau $2$ năm: $5\\,400 \\cdot 1{,}08 = 5\\,832$ cá thể.',
      ],
      answer: '$r = 0{,}08$; $5\\,400$ cá thể sau $1$ năm, $5\\,832$ cá thể sau $2$ năm.',
    },
    {
      problem:
        'Ba quần thể có tỉ lệ các nhóm tuổi (trước sinh sản : đang sinh sản : sau sinh sản) là: A $50\\% : 40\\% : 10\\%$; B $35\\% : 35\\% : 30\\%$; C $15\\% : 45\\% : 40\\%$. Cho biết dạng tháp tuổi và xu hướng của mỗi quần thể.',
      steps: [
        'A: nhóm trước sinh sản ($50\\%$) lớn hơn nhóm đang sinh sản ($40\\%$), đáy tháp rộng: tháp phát triển, số lượng sẽ tăng.',
        'B: nhóm trước sinh sản bằng nhóm đang sinh sản ($35\\%$): tháp ổn định.',
        'C: nhóm trước sinh sản ($15\\%$) ít hơn nhiều so với nhóm đang sinh sản ($45\\%$), đáy hẹp: tháp suy thoái, số lượng sẽ giảm.',
      ],
      answer: 'A phát triển, B ổn định, C suy thoái.',
    },
  ],
  practice: [
    {
      type: 'number',
      prompt:
        'Đầu năm một quần thể có $2\\,000$ cá thể. Trong năm có $300$ cá thể sinh ra, $120$ cá thể chết, $40$ cá thể nhập cư, $20$ cá thể xuất cư. Cuối năm quần thể có bao nhiêu cá thể?',
      answer: 2200,
      hints: ['Dùng $N_t = N_0 + B - D + I - E$.'],
      solution: '$N_t = 2\\,000 + 300 - 120 + 40 - 20 = 2\\,200$ cá thể.',
    },
    {
      type: 'number',
      prompt:
        'Trên một đồi cỏ rộng $12$ ha có $840$ con thỏ. Mật độ quần thể thỏ là bao nhiêu con/ha?',
      answer: 70,
      unit: 'con/ha',
      hints: ['Mật độ bằng số cá thể chia cho diện tích.'],
      solution: '$\\dfrac{840}{12} = 70$ con/ha.',
    },
    {
      type: 'number',
      prompt:
        'Quần thể có $10\\,000$ cá thể, mức sinh sản $0{,}1$ và mức tử vong $0{,}04$ mỗi năm, không có di cư. Sau $1$ năm quần thể có bao nhiêu cá thể?',
      answer: 10600,
      hints: ['Tính $r = b - d$ trước.', 'Số cá thể sau một năm là $N_0(1 + r)$.'],
      solution: '$r = 0{,}1 - 0{,}04 = 0{,}06$; $N_1 = 10\\,000 \\cdot 1{,}06 = 10\\,600$ cá thể.',
    },
    {
      type: 'number',
      prompt:
        'Một quần thể tăng trưởng theo đường cong chữ S với sức chứa $K = 1\\,200$ cá thể. Quần thể tăng nhanh nhất khi có bao nhiêu cá thể?',
      answer: 600,
      hints: ['Tốc độ tăng lớn nhất ở điểm uốn của đường cong chữ S.'],
      solution: 'Điểm uốn ứng với $N = \\dfrac{K}{2} = \\dfrac{1\\,200}{2} = 600$ cá thể.',
    },
    {
      type: 'choice',
      prompt: 'Quần thể tăng trưởng theo đường cong chữ J khi',
      options: [
        'môi trường không bị giới hạn, nguồn sống dồi dào và không có kẻ thù, dịch bệnh',
        'nguồn sống có hạn và cạnh tranh gay gắt',
        'số lượng đã đạt sức chứa của môi trường',
        'mức tử vong lớn hơn mức sinh sản',
      ],
      answer: 0,
      hints: ['Chữ J ứng với tăng trưởng theo tiềm năng sinh học.'],
      solution:
        'Đường cong chữ J (tăng theo cấp số nhân) chỉ xảy ra khi môi trường không giới hạn, mỗi cá thể sinh sản tối đa. Khi nguồn sống có hạn, quần thể tăng theo đường cong chữ S và ổn định quanh $K$.',
    },
    {
      type: 'multi',
      prompt:
        'Khi kích thước quần thể giảm xuống dưới mức tối thiểu, những hiện tượng nào dễ xảy ra làm quần thể suy giảm tới diệt vong?',
      options: [
        'Sự hỗ trợ giữa các cá thể giảm',
        'Cơ hội gặp nhau giữa cá thể đực và cái giảm',
        'Giao phối gần tăng, gây thoái hoá',
        'Cạnh tranh cùng loài trở nên gay gắt',
      ],
      answers: [0, 1, 2],
      hints: ['Khi quá ít cá thể thì nguồn sống dư thừa.'],
      solution:
        'Quần thể quá nhỏ thì hỗ trợ giảm, khó gặp nhau để giao phối, giao phối gần tăng. Cạnh tranh gay gắt là hậu quả của mật độ quá cao, không phải quá thấp.',
    },
    {
      type: 'choice',
      prompt:
        'Một quần thể có tỉ lệ nhóm tuổi trước sinh sản : đang sinh sản : sau sinh sản là $20\\% : 45\\% : 35\\%$. Tháp tuổi của quần thể có dạng',
      options: ['suy thoái', 'phát triển', 'ổn định', 'không xác định được'],
      answer: 0,
      hints: ['So sánh nhóm trước sinh sản với nhóm đang sinh sản.'],
      solution:
        'Nhóm trước sinh sản ($20\\%$) ít hơn hẳn nhóm đang sinh sản ($45\\%$), đáy tháp hẹp: tháp suy thoái, số lượng có xu hướng giảm.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi kiểu phân bố cá thể với ví dụ phù hợp.',
      left: ['Phân bố theo nhóm', 'Phân bố đồng đều', 'Phân bố ngẫu nhiên'],
      right: [
        'Đàn trâu rừng, các bụi cây mọc hoang',
        'Cây thông trong rừng thông, tổ chim cánh cụt',
        'Các loài sâu sống trên tán lá cây',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: [
        'Phân bố đồng đều thường gặp khi cạnh tranh gay gắt; theo nhóm khi các cá thể hỗ trợ nhau hoặc điều kiện sống không đều.',
      ],
      solution:
        'Trâu rừng sống thành đàn: theo nhóm. Cây thông, tổ chim cánh cụt cách nhau đều do cạnh tranh: đồng đều. Sâu trên tán lá phân bố ngẫu nhiên vì điều kiện sống đều, ít cạnh tranh.',
    },
    {
      type: 'choice',
      prompt: 'Hiện tượng nào là biến động số lượng cá thể theo chu kì?',
      options: [
        'Ếch nhái tăng mạnh vào mùa mưa, giảm vào mùa khô',
        'Cá chết hàng loạt sau một vụ xả thải ra sông',
        'Rừng tràm cháy làm nhiều loài chim chết',
        'Một trận lũ lớn cuốn trôi nhiều gia súc',
      ],
      answer: 0,
      hints: ['Biến động theo chu kì gắn với thay đổi lặp lại của môi trường.'],
      solution:
        'Mùa mưa, mùa khô lặp lại hằng năm nên biến động số lượng ếch nhái là theo chu kì. Xả thải, cháy rừng, lũ lụt là các sự kiện ngẫu nhiên: biến động không theo chu kì.',
    },
    {
      type: 'choice',
      prompt: 'Nhân tố nào tác động lên quần thể phụ thuộc vào mật độ cá thể?',
      options: ['Dịch bệnh', 'Nhiệt độ', 'Lượng mưa', 'Bão'],
      answer: 0,
      hints: ['Nhân tố nào lây lan mạnh hơn khi các cá thể sống chen chúc?'],
      solution:
        'Dịch bệnh là nhân tố hữu sinh, lây lan mạnh khi mật độ cao nên tác động phụ thuộc mật độ. Nhiệt độ, lượng mưa, bão là nhân tố vô sinh, tác động không phụ thuộc mật độ.',
    },
  ],
  takeaways: [
    'Quần thể là tập hợp các cá thể cùng loài, cùng không gian, cùng thời điểm, sinh sản được; giữa các cá thể có quan hệ hỗ trợ và cạnh tranh.',
    'Đặc trưng cơ bản: kích thước, mật độ, kiểu phân bố, tỉ lệ giới tính, nhóm tuổi; $N_t = N_0 + B - D + I - E$.',
    'Môi trường không giới hạn: tăng theo đường cong chữ J; môi trường có giới hạn: đường cong chữ S, ổn định quanh sức chứa $K$, tăng nhanh nhất ở $\\dfrac{K}{2}$.',
    'Số lượng biến động theo chu kì hoặc không theo chu kì và luôn được điều hoà về trạng thái cân bằng nhờ thay đổi mức sinh sản, tử vong, di cư.',
  ],
};
