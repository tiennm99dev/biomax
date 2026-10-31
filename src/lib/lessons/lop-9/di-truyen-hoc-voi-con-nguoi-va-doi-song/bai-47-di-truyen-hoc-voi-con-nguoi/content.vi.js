/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Tính trạng, bệnh, tật và hội chứng di truyền ở người; tác nhân gây bệnh di truyền; lập và phân tích phả hệ; tư vấn di truyền và vai trò của di truyền học với hôn nhân, kế hoạch hoá gia đình.',
  intro:
    'Vì sao pháp luật cấm những người có họ trong phạm vi ba đời kết hôn với nhau? Vì sao hai vợ chồng đều khoẻ mạnh vẫn có thể sinh con bị bệnh bạch tạng? Ở người không thể lai thí nghiệm như ở đậu Hà Lan, nên các nhà di truyền học theo dõi tính trạng qua nhiều thế hệ của một dòng họ bằng sơ đồ phả hệ. Trong bài này, em sẽ tự đọc phả hệ và suy ra kiểu gene của từng người.',
  objectives: [
    'Nêu được khái niệm tính trạng, bệnh di truyền, tật di truyền và hội chứng di truyền ở người; kể được một số ví dụ và nguyên nhân của chúng.',
    'Nêu được một số tác nhân gây bệnh di truyền và biện pháp hạn chế.',
    'Đọc và phân tích được sơ đồ phả hệ: xác định tính trạng do allele trội hay lặn quy định và suy ra kiểu gene của các thành viên.',
    'Trình bày được ý nghĩa của tư vấn di truyền và vai trò của di truyền học với hôn nhân, kế hoạch hoá gia đình.',
  ],
  sections: [
    {
      heading: 'Tính trạng ở người',
      blocks: [
        {
          type: 'p',
          text: 'Tính trạng là những đặc điểm về hình thái, cấu tạo, sinh lí của cơ thể, giúp phân biệt người này với người khác, ví dụ: chiều cao, dạng tóc (thẳng hay xoăn), màu mắt, màu da, má lúm đồng tiền, kiểu khoanh tay.',
        },
        {
          type: 'p',
          text: 'Các tính trạng ở người cũng do gene quy định và di truyền theo các quy luật như ở sinh vật khác. Có tính trạng do một gene quy định, có tính trạng (như chiều cao, màu da) do nhiều gene quy định và chịu ảnh hưởng của môi trường sống (dinh dưỡng, luyện tập, ánh nắng).',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vì sao nghiên cứu di truyền người khó hơn?',
          text: 'Người sinh sản muộn, đẻ ít con, thời gian một thế hệ dài và không thể tiến hành lai thí nghiệm vì lí do đạo đức, xã hội. Vì vậy người ta dùng các phương pháp riêng như nghiên cứu phả hệ, nghiên cứu trẻ đồng sinh và nghiên cứu tế bào (quan sát bộ NST).',
        },
      ],
    },
    {
      heading: 'Bệnh, tật và hội chứng di truyền',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phân biệt',
          text: 'Bệnh di truyền là tình trạng cơ thể bị rối loạn, suy giảm hoặc mất một chức năng nào đó do bất thường trong vật chất di truyền. Tật di truyền là những thay đổi bất thường về hình thái, thường ít ảnh hưởng nghiêm trọng đến chức năng của cơ thể. Hội chứng di truyền là bệnh có nhiều biểu hiện phức tạp, gồm nhiều triệu chứng cùng lúc.',
        },
        {
          type: 'table',
          caption: 'Một số hội chứng di truyền do đột biến NST',
          head: ['Hội chứng', 'Nguyên nhân', 'Biểu hiện chính'],
          rows: [
            [
              'Down',
              'Thừa một NST số $21$ (ba NST số $21$, tổng $47$ NST)',
              'Thân thấp bé, mắt xếch và xa nhau, ngón tay ngắn, chậm phát triển trí tuệ',
            ],
            [
              'Tiếng mèo kêu',
              'Mất đoạn trên NST số $5$',
              'Trẻ khóc như tiếng mèo kêu, chậm phát triển trí tuệ và vận động',
            ],
            [
              'Turner',
              'Chỉ có một NST giới tính X ($44A + XO$, tổng $45$ NST)',
              'Nữ, thấp, buồng trứng không phát triển, thường vô sinh',
            ],
            [
              'Siêu nữ',
              'Thừa một NST X ($44A + XXX$)',
              'Nữ, có thể chậm phát triển trí tuệ, suy buồng trứng sớm',
            ],
            [
              'Klinefelter',
              'Thừa một NST X ở nam ($44A + XXY$)',
              'Nam, chân tay dài, tinh hoàn nhỏ, thường vô sinh, có thể chậm phát triển',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Một số bệnh di truyền do đột biến gene',
          head: ['Bệnh', 'Nguyên nhân', 'Biểu hiện'],
          rows: [
            [
              'Bạch tạng',
              'Gene lặn trên NST thường, làm cơ thể không tổng hợp được sắc tố melanin',
              'Da trắng bệch, tóc và lông trắng, mắt (mống mắt) nhạt màu, sợ ánh sáng',
            ],
            [
              'Câm điếc bẩm sinh',
              'Phần lớn do gene lặn trên NST thường, một số do gene trên NST X',
              'Không nghe được, không nói được từ khi sinh ra',
            ],
            ['Mù màu đỏ – lục', 'Gene lặn trên NST X', 'Không phân biệt được màu đỏ và màu lục'],
            [
              'Máu khó đông',
              'Gene lặn trên NST X',
              'Máu chảy khó đông, dễ bầm tím, chảy máu kéo dài khi bị thương',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Một số tật di truyền: khe hở môi, hàm (ảnh hưởng đến ăn uống, phát âm); dính ngón hoặc thừa ngón tay, ngón chân; bàn chân khoèo (bàn chân, gót chân bị lệch do cơ, dây chằng co rút). Nhiều tật có thể được khắc phục bằng phẫu thuật tạo hình.',
        },
      ],
    },
    {
      heading: 'Tác nhân gây bệnh di truyền và biện pháp hạn chế',
      blocks: [
        {
          type: 'p',
          text: 'Bệnh, tật di truyền do đột biến gene hoặc đột biến NST. Đột biến có thể phát sinh tự nhiên với tần số thấp; ô nhiễm môi trường làm tần số đột biến tăng lên trong cộng đồng. Các tác nhân gây đột biến gồm:',
        },
        {
          type: 'list',
          items: [
            'Tác nhân vật lí: tia phóng xạ, tia tử ngoại (UV), các chất phóng xạ.',
            'Tác nhân hoá học: một số hoá chất như nitrosamine, thuốc trừ sâu, thuốc diệt cỏ, chất độc da cam (dioxin).',
            'Tác nhân sinh học: một số loại virus.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Hạn chế bệnh, tật di truyền',
          text: 'Đấu tranh chống sản xuất, thử và sử dụng vũ khí hạt nhân, vũ khí hoá học; hạn chế ô nhiễm môi trường; sử dụng đúng quy cách thuốc bảo vệ thực vật; không kết hôn gần huyết thống; người có nguy cơ mang gene bệnh cần được tư vấn di truyền trước khi kết hôn và sinh con.',
        },
      ],
    },
    {
      heading: 'Phả hệ',
      blocks: [
        {
          type: 'p',
          text: 'Phả hệ là sơ đồ ghi lại sự di truyền của một tính trạng qua nhiều thế hệ của một gia đình, dòng họ. Nghiên cứu phả hệ giúp xác định tính trạng do allele trội hay lặn quy định, do gene trên NST thường hay trên NST giới tính, và dự đoán khả năng xuất hiện tính trạng ở đời sau.',
        },
        {
          type: 'table',
          caption: 'Kí hiệu dùng trong sơ đồ phả hệ',
          head: ['Kí hiệu', 'Ý nghĩa'],
          rows: [
            ['Hình vuông □', 'Nam'],
            ['Hình tròn ○', 'Nữ'],
            ['Hình tô đậm ■, ●', 'Người mang tính trạng đang nghiên cứu (mắc bệnh)'],
            ['Đường ngang nối nam và nữ', 'Hai người kết hôn với nhau'],
            ['Đường dọc từ đường kết hôn xuống', 'Các con của cặp vợ chồng, xếp theo thứ tự sinh'],
            [
              'Số La Mã I, II, III',
              'Thế hệ; trong mỗi thế hệ, người được đánh số $1, 2, 3, \\ldots$ từ trái sang phải',
            ],
          ],
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Tìm cặp bố mẹ có kiểu hình giống nhau nhưng sinh con khác mình: bố mẹ đều bình thường sinh con mắc bệnh thì bệnh do allele lặn; bố mẹ đều mắc bệnh sinh con bình thường thì bệnh do allele trội.',
            'Xét gene trên NST thường hay NST X: với bệnh do allele lặn, nếu có con gái mắc bệnh mà bố bình thường thì gene nằm trên NST thường (vì con gái nhận một X từ bố). Bệnh do gene lặn trên X thường gặp ở nam nhiều hơn nữ; mẹ mang gene truyền cho con trai.',
            'Viết kiểu gene: trước hết là những người đọc được ngay từ kiểu hình (người mang tính trạng lặn, nam ở gene trên X), sau đó suy ra kiểu gene của bố mẹ và con họ.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Không phải ai bình thường cũng không mang gene bệnh',
          text: 'Với bệnh do allele lặn, người có kiểu gene dị hợp $Aa$ (hoặc nữ $X^AX^a$) vẫn bình thường nhưng mang allele bệnh và có thể truyền cho con. Khi phả hệ chưa đủ dữ kiện, một người bình thường có thể là $AA$ hoặc $Aa$.',
        },
      ],
    },
    {
      heading: 'Tư vấn di truyền và di truyền học với hôn nhân',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tư vấn di truyền',
          text: 'Tư vấn di truyền là hoạt động của các chuyên gia di truyền: dựa vào phả hệ, các xét nghiệm và kiến thức di truyền học để chẩn đoán, cung cấp thông tin về khả năng mắc bệnh, tật di truyền ở đời con, từ đó cho lời khuyên về việc kết hôn, sinh con và chăm sóc sức khoẻ.',
        },
        {
          type: 'p',
          text: 'Một buổi tư vấn thường gồm: lập phả hệ của gia đình người được tư vấn; xác định bệnh do allele trội hay lặn, trên NST thường hay NST giới tính; tính xác suất sinh con mắc bệnh; đưa ra lời khuyên (có nên sinh con, cần chẩn đoán trước sinh hay không).',
        },
        {
          type: 'list',
          items: [
            'Kết hôn và sinh con đúng độ tuổi: Luật Hôn nhân và gia đình quy định tuổi kết hôn của nam từ đủ $20$ tuổi, nữ từ đủ $18$ tuổi. Độ tuổi sinh con phù hợp khoảng $24$ – $34$ tuổi; phụ nữ không nên sinh con sau $35$ tuổi vì nguy cơ con mắc bệnh, tật di truyền (như hội chứng Down) tăng lên.',
            'Kế hoạch hoá gia đình: mỗi cặp vợ chồng nên có $1$ – $2$ con, các lần sinh không quá gần nhau; hôn nhân một vợ một chồng phù hợp với tỉ lệ nam : nữ xấp xỉ $1 : 1$.',
            'Cấm kết hôn gần huyết thống: pháp luật cấm kết hôn giữa những người có cùng dòng máu trực hệ và giữa những người có họ trong phạm vi ba đời. Kết hôn gần làm các allele lặn có hại dễ gặp nhau ở thể đồng hợp và biểu hiện; ở các cặp kết hôn gần, khoảng $20$ – $30\\%$ số con bị chết non hoặc mắc bệnh, tật bẩm sinh.',
            'Không lựa chọn giới tính thai nhi: việc này gây mất cân bằng giới tính và nhiều hệ quả xã hội, bị pháp luật nghiêm cấm dưới mọi hình thức.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Đọc phả hệ, suy ra kiểu gene',
    instruction:
      'Chọn một phả hệ. Ở bước 1, tìm gia đình cho biết bệnh do allele trội hay lặn. Ở bước 2, chạm vào kiểu gene có thể có của từng người (chọn hai kiểu gene nếu phả hệ chưa đủ dữ kiện để biết chắc) rồi bấm "Kiểm tra". Người chọn sai sẽ hiện lí do để em sửa lại.',
  },
  examples: [
    {
      problem:
        'Một phả hệ về bệnh bạch tạng: vợ chồng I.1 và I.2 đều bình thường sinh con trai II.1 bình thường và con gái II.2 bị bạch tạng. II.2 lấy chồng II.3 bình thường, sinh con trai III.1 bình thường và con gái III.2 bị bạch tạng. Bệnh do allele trội hay lặn? Xác định kiểu gene của mọi người (A: bình thường, a: bạch tạng).',
      steps: [
        'I.1 và I.2 bình thường nhưng sinh II.2 mắc bệnh, nên bệnh do allele lặn quy định.',
        'II.2 là con gái mắc bệnh mà bố I.1 bình thường, nên gene không nằm trên X mà nằm trên NST thường.',
        'Người mắc bệnh II.2, III.2 có kiểu gene $aa$.',
        'II.2 ($aa$) nhận một allele $a$ từ bố và một từ mẹ, nên I.1 và I.2 đều là $Aa$; tương tự III.2 ($aa$) cho thấy II.3 là $Aa$.',
        'III.1 bình thường nhưng nhận chắc chắn allele $a$ từ mẹ II.2, nên là $Aa$; II.1 bình thường có bố mẹ $Aa \\times Aa$ nên là $AA$ hoặc $Aa$.',
      ],
      answer:
        'Bệnh do allele lặn trên NST thường. I.1, I.2, II.3, III.1: $Aa$; II.2, III.2: $aa$; II.1: $AA$ hoặc $Aa$.',
    },
    {
      problem:
        'Tư vấn di truyền: một cặp vợ chồng đều bình thường; mỗi người có một em ruột bị bạch tạng, còn bố mẹ của cả hai bên đều bình thường. Tính xác suất đứa con đầu lòng của họ bị bạch tạng.',
      steps: [
        'Bố mẹ mỗi bên bình thường sinh con bạch tạng, nên đều có kiểu gene $Aa$; con của họ có tỉ lệ $1AA : 2Aa : 1aa$.',
        'Người chồng bình thường nên là $AA$ hoặc $Aa$ với tỉ lệ $1 : 2$; xác suất chồng là $Aa$ bằng $\\dfrac{2}{3}$. Tương tự, xác suất vợ là $Aa$ bằng $\\dfrac{2}{3}$.',
        'Con chỉ bị bệnh khi cả hai đều là $Aa$, và khi đó xác suất sinh con $aa$ là $\\dfrac{1}{4}$.',
        'Xác suất cần tìm: $\\dfrac{2}{3} \\cdot \\dfrac{2}{3} \\cdot \\dfrac{1}{4} = \\dfrac{1}{9}$.',
      ],
      answer: 'Xác suất con đầu lòng bị bạch tạng là $\\dfrac{1}{9}$.',
    },
    {
      problem:
        'Một người phụ nữ bình thường có bố mắc bệnh máu khó đông, lấy chồng bình thường. Bệnh do allele lặn $a$ trên NST X. Tính xác suất họ sinh con trai mắc bệnh và cho biết con gái của họ có thể mắc bệnh không.',
      steps: [
        'Người phụ nữ bình thường nhận $X^a$ từ bố $X^aY$, nên có kiểu gene $X^AX^a$. Người chồng bình thường: $X^AY$.',
        'P: $X^AX^a \\times X^AY$; giao tử mẹ: $X^A$, $X^a$; giao tử bố: $X^A$, $Y$.',
        'F: $X^AX^A : X^AX^a : X^AY : X^aY = 1 : 1 : 1 : 1$.',
        'Con trai mắc bệnh $X^aY$ chiếm $\\dfrac{1}{4}$ tổng số con (bằng $\\dfrac{1}{2}$ số con trai). Mọi con gái đều nhận $X^A$ từ bố nên không mắc bệnh, nhưng một nửa số con gái mang gene bệnh.',
      ],
      answer:
        'Xác suất sinh con trai mắc bệnh là $\\dfrac{1}{4}$; con gái không mắc bệnh, nhưng có thể mang gene bệnh ($X^AX^a$).',
    },
  ],
  practice: [
    {
      type: 'number',
      prompt: 'Tế bào sinh dưỡng của người mắc hội chứng Down có bao nhiêu NST?',
      answer: 47,
      unit: 'NST',
      hints: ['Người bình thường có $2n = 46$.', 'Hội chứng Down do thừa một NST số $21$.'],
      solution: 'Người bệnh có ba NST số $21$, nên có $46 + 1 = 47$ NST.',
    },
    {
      type: 'choice',
      prompt: 'Người mắc hội chứng Turner có bộ NST và giới tính là',
      options: ['$44A + XO$, nữ', '$44A + XXY$, nam', '$44A + XXX$, nữ', '$45A + XY$, nam'],
      answer: 0,
      hints: ['Hội chứng Turner do thiếu một NST giới tính.'],
      solution:
        'Hội chứng Turner: chỉ có một NST giới tính X ($44A + XO$, $45$ NST), người bệnh là nữ, buồng trứng không phát triển. $44A + XXY$ là hội chứng Klinefelter, $44A + XXX$ là hội chứng siêu nữ.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi bệnh, hội chứng với nguyên nhân của nó.',
      left: [
        'Bạch tạng',
        'Máu khó đông',
        'Hội chứng Down',
        'Hội chứng tiếng mèo kêu',
        'Hội chứng Turner',
      ],
      right: [
        'Gene lặn trên NST thường',
        'Gene lặn trên NST X',
        'Thừa một NST số $21$',
        'Mất đoạn trên NST số $5$',
        'Chỉ có một NST giới tính X',
        'Thừa một NST X ở nam (XXY)',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
      ],
      hints: [
        'Bệnh bạch tạng và máu khó đông do đột biến gene; ba hội chứng còn lại do đột biến NST.',
      ],
      solution:
        'Bạch tạng: gene lặn trên NST thường; máu khó đông: gene lặn trên X; Down: ba NST số $21$; tiếng mèo kêu: mất đoạn NST số $5$; Turner: $XO$. Thừa X ở nam là hội chứng Klinefelter.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các tật di truyền ở người.',
      options: [
        'Khe hở môi, hàm',
        'Dính ngón hoặc thừa ngón tay',
        'Bàn chân khoèo',
        'Bạch tạng',
        'Máu khó đông',
      ],
      answers: [0, 1, 2],
      hints: [
        'Tật là thay đổi bất thường về hình thái, thường ít ảnh hưởng nghiêm trọng đến chức năng.',
      ],
      solution:
        'Khe hở môi hàm, dính hoặc thừa ngón, bàn chân khoèo là tật di truyền (bất thường hình thái, có thể phẫu thuật khắc phục). Bạch tạng và máu khó đông là bệnh di truyền vì làm rối loạn chức năng (tổng hợp sắc tố, đông máu).',
    },
    {
      type: 'choice',
      prompt:
        'Trong một phả hệ, bố mẹ đều bình thường sinh một con gái mắc bệnh và một con trai bình thường. Bệnh này do',
      options: [
        'allele lặn trên NST thường',
        'allele trội trên NST thường',
        'allele lặn trên NST X',
        'allele trội trên NST X',
      ],
      answer: 0,
      hints: [
        'Bố mẹ bình thường sinh con mắc bệnh thì bệnh do allele trội hay lặn?',
        'Nếu gene lặn nằm trên X, con gái mắc bệnh phải nhận $X^a$ từ bố.',
      ],
      solution:
        'Bố mẹ bình thường sinh con mắc bệnh nên bệnh do allele lặn. Con gái mắc bệnh mà bố bình thường ($X^AY$ nếu gene trên X thì không thể cho $X^a$), nên gene nằm trên NST thường.',
    },
    {
      type: 'fraction',
      prompt:
        'Bố mẹ đều bình thường nhưng đều mang allele gây bạch tạng ($Aa$). Xác suất mỗi lần sinh, con của họ bị bạch tạng là bao nhiêu?',
      answer: [1, 4],
      hints: ['Lập sơ đồ lai $Aa \\times Aa$.'],
      solution: '$Aa \\times Aa \\to 1AA : 2Aa : 1aa$; con bạch tạng $aa$ chiếm $\\dfrac{1}{4}$.',
    },
    {
      type: 'fraction',
      prompt:
        'Một người đàn ông bình thường có bố mẹ bình thường và một em gái bị bạch tạng. Xác suất người đàn ông này mang allele gây bệnh ($Aa$) là bao nhiêu?',
      answer: [2, 3],
      hints: [
        'Bố mẹ bình thường sinh con bạch tạng nên bố mẹ là $Aa \\times Aa$.',
        'Người đàn ông bình thường nên chỉ xét các kiểu gene $AA$ và $Aa$.',
      ],
      solution:
        'Con của $Aa \\times Aa$: $1AA : 2Aa : 1aa$. Người đàn ông bình thường nên thuộc $1AA : 2Aa$; xác suất là $Aa$ bằng $\\dfrac{2}{3}$.',
    },
    {
      type: 'fraction',
      prompt:
        'Vợ có kiểu gene $X^AX^a$, chồng $X^AY$ ($a$ gây bệnh máu khó đông). Xác suất họ sinh một đứa con là con trai mắc bệnh là bao nhiêu (tính trên tổng số con)?',
      answer: [1, 4],
      hints: ['Viết bốn tổ hợp giao tử của mẹ ($X^A$, $X^a$) và bố ($X^A$, $Y$).'],
      solution:
        'F: $X^AX^A : X^AX^a : X^AY : X^aY = 1 : 1 : 1 : 1$. Con trai mắc bệnh $X^aY$ chiếm $\\dfrac{1}{4}$.',
    },
    {
      type: 'fraction',
      prompt:
        'Một người đàn ông bình thường có xác suất $\\dfrac{2}{3}$ mang allele bạch tạng ($Aa$) lấy vợ bị bạch tạng ($aa$). Xác suất đứa con đầu lòng của họ bị bạch tạng là bao nhiêu?',
      answer: [1, 3],
      hints: [
        'Con chỉ có thể bị bệnh khi người chồng là $Aa$.',
        'Khi chồng $Aa$ và vợ $aa$, xác suất con $aa$ là $\\dfrac{1}{2}$.',
      ],
      solution: 'Xác suất $= \\dfrac{2}{3} \\cdot \\dfrac{1}{2} = \\dfrac{1}{3}$.',
    },
    {
      type: 'number',
      prompt:
        'Theo Luật Hôn nhân và gia đình, những người có họ trong phạm vi bao nhiêu đời bị cấm kết hôn với nhau?',
      answer: 3,
      unit: 'đời',
      hints: ['Người có chung ông bà (anh chị em họ) vẫn ở trong phạm vi này.'],
      solution:
        'Pháp luật cấm kết hôn giữa những người có họ trong phạm vi $3$ đời, để hạn chế các allele lặn có hại gặp nhau ở thể đồng hợp.',
    },
    {
      type: 'choice',
      prompt: 'Kết hôn gần huyết thống làm tăng tỉ lệ con mắc bệnh, tật di truyền vì',
      options: [
        'những người cùng huyết thống dễ cùng mang một allele lặn có hại, nên allele này dễ gặp nhau ở thể đồng hợp ở đời con',
        'kết hôn gần huyết thống gây ra đột biến NST ở con',
        'con của họ luôn bị thừa một NST',
        'allele lặn có hại trở thành allele trội',
      ],
      answer: 0,
      hints: ['Bệnh do allele lặn chỉ biểu hiện ở thể đồng hợp $aa$.'],
      solution:
        'Người cùng dòng họ có khả năng cao cùng mang một allele lặn có hại nhận từ tổ tiên chung; khi kết hôn với nhau, con dễ nhận hai allele lặn ($aa$) và biểu hiện bệnh. Kết hôn gần không tự gây đột biến.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các tác nhân có thể gây đột biến, làm tăng bệnh, tật di truyền.',
      options: [
        'Tia tử ngoại (UV) và chất phóng xạ',
        'Thuốc trừ sâu, thuốc diệt cỏ dùng sai quy cách',
        'Chất độc da cam (dioxin)',
        'Một số loại virus',
        'Ăn nhiều rau xanh, hoa quả',
      ],
      answers: [0, 1, 2, 3],
      hints: ['Có ba nhóm tác nhân: vật lí, hoá học, sinh học.'],
      solution:
        'Tia UV, chất phóng xạ (vật lí); thuốc trừ sâu, thuốc diệt cỏ, dioxin (hoá học); một số virus (sinh học) đều có thể gây đột biến. Ăn rau xanh, hoa quả không phải tác nhân gây đột biến.',
    },
    {
      type: 'choice',
      prompt: 'Phụ nữ được khuyên không nên sinh con sau tuổi $35$ vì',
      options: [
        'nguy cơ con mắc bệnh, tật di truyền như hội chứng Down tăng lên',
        'sau tuổi $35$ chỉ sinh được con gái',
        'pháp luật cấm sinh con sau tuổi $35$',
        'con sinh ra sẽ có kiểu gene khác bố mẹ',
      ],
      answer: 0,
      hints: ['Tuổi mẹ càng cao, sự phân li NST khi tạo trứng càng dễ bị rối loạn.'],
      solution:
        'Ở mẹ lớn tuổi, sự phân li NST trong giảm phân dễ bị rối loạn, làm tăng nguy cơ con mắc hội chứng Down và các bệnh, tật di truyền khác.',
    },
  ],
  takeaways: [
    'Tính trạng ở người do gene quy định; có tính trạng do một gene, có tính trạng do nhiều gene và chịu ảnh hưởng của môi trường.',
    'Bệnh di truyền làm rối loạn chức năng (bạch tạng, máu khó đông, mù màu), tật di truyền là bất thường hình thái (khe hở môi hàm, dính ngón), hội chứng gồm nhiều triệu chứng (Down, Turner, Klinefelter).',
    'Bệnh, tật di truyền do đột biến gene hoặc NST; tác nhân vật lí, hoá học, sinh học và ô nhiễm môi trường làm tăng tần số đột biến.',
    'Phả hệ ghi tính trạng qua nhiều thế hệ: bố mẹ bình thường sinh con mắc bệnh thì bệnh do allele lặn; bố mẹ mắc bệnh sinh con bình thường thì bệnh do allele trội.',
    'Tư vấn di truyền dựa vào phả hệ và xét nghiệm để tính nguy cơ, đưa lời khuyên về kết hôn và sinh con; không kết hôn gần huyết thống trong phạm vi ba đời, sinh con đúng độ tuổi, không lựa chọn giới tính thai nhi.',
  ],
};
