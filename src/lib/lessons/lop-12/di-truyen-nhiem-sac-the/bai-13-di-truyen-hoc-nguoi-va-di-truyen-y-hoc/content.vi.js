/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Di truyền học người và di truyền y học: các phương pháp nghiên cứu di truyền người (phả hệ, trẻ đồng sinh, tế bào học, phân tử, quần thể), bệnh di truyền, liệu pháp gene, tư vấn di truyền và sàng lọc trước sinh.',
  intro:
    'Không thể đem người ra lai thí nghiệm như đậu Hà Lan hay ruồi giấm. Vậy làm thế nào các nhà khoa học biết bệnh bạch tạng do gene lặn, còn bệnh máu khó đông do gene nằm trên NST X?',
  objectives: [
    'Nêu được khái niệm di truyền học người, di truyền y học và những khó khăn khi nghiên cứu di truyền người.',
    'Trình bày được mục đích, nội dung và kết quả của các phương pháp nghiên cứu di truyền người; phân tích được phả hệ đơn giản.',
    'Kể được một số bệnh di truyền do gene và do đột biến NST ở người.',
    'Nêu được khái niệm, quy trình và hạn chế của liệu pháp gene.',
    'Trình bày được vai trò của tư vấn di truyền, sàng lọc trước sinh và tính được xác suất sinh con mắc một bệnh di truyền đơn gene.',
  ],
  sections: [
    {
      heading: 'Di truyền học người và di truyền y học',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Khái niệm',
          text: 'Di truyền học người là ngành khoa học nghiên cứu sự di truyền và biến dị ở người. Di truyền y học là một lĩnh vực của di truyền học người, nghiên cứu cơ chế phát sinh và di truyền của các bệnh di truyền, từ đó đề xuất biện pháp phòng tránh, chẩn đoán và chữa trị.',
        },
        {
          type: 'p',
          text: 'Các quy luật di truyền đúng cho mọi sinh vật, kể cả con người. Nhưng nghiên cứu di truyền người gặp nhiều khó khăn: vòng đời dài, ít con, thành thục sinh dục muộn; không thể tiến hành lai thí nghiệm hay gây đột biến, chuyển gene ở người vì lí do đạo đức.',
        },
      ],
    },
    {
      heading: 'Các phương pháp nghiên cứu di truyền người',
      blocks: [
        {
          type: 'table',
          head: ['Phương pháp', 'Mục đích', 'Nội dung', 'Kết quả tiêu biểu'],
          rows: [
            [
              'Nghiên cứu phả hệ',
              'Xác định tính trạng do gene trội hay lặn, nằm trên NST thường hay NST giới tính',
              'Theo dõi sự di truyền của một tính trạng qua nhiều thế hệ trong một dòng họ',
              'Tóc quăn trội so với tóc thẳng; bạch tạng do gene lặn trên NST thường; mù màu, máu khó đông do gene lặn trên NST X',
            ],
            [
              'Nghiên cứu trẻ đồng sinh',
              'Xác định tính trạng do kiểu gene quyết định là chủ yếu hay chịu ảnh hưởng nhiều của môi trường',
              'So sánh trẻ đồng sinh cùng trứng (cùng kiểu gene) sống trong cùng hoặc khác môi trường',
              'Nhóm máu do kiểu gene quyết định; khối lượng cơ thể, độ thông minh chịu ảnh hưởng của cả kiểu gene và môi trường',
            ],
            [
              'Nghiên cứu tế bào học',
              'Tìm khuyết tật về NST để chẩn đoán bệnh',
              'Quan sát, so sánh bộ NST (karyotype) của người bệnh với người bình thường',
              'Phát hiện nguyên nhân các hội chứng Down, Turner, Klinefelter',
            ],
            [
              'Nghiên cứu di truyền phân tử',
              'Xác định nguyên nhân bệnh ở cấp phân tử',
              'Giải trình tự gene, kĩ thuật PCR…',
              'Xác định chính xác đột biến gây bệnh hồng cầu hình liềm',
            ],
            [
              'Nghiên cứu di truyền quần thể',
              'Dự đoán xác suất gặp người bệnh, đánh giá hậu quả của kết hôn gần',
              'Tính tần số allele, tần số kiểu gene trong quần thể',
              'Tính tần số allele gây bệnh mù màu, bạch tạng trong quần thể',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Phả hệ là sơ đồ dùng các kí hiệu quy ước (hình vuông là nam, hình tròn là nữ, tô đậm là người mắc) ghi lại sự di truyền của một tính trạng qua các thế hệ trong một dòng họ. Mỗi thế hệ được đánh số La Mã (I, II, III…), mỗi người trong một thế hệ được đánh số Ả Rập từ trái sang phải. Vì mỗi gia đình có ít con, cần phân tích nhiều phả hệ mới rút ra kết luận chắc chắn.',
        },
        {
          type: 'list',
          items: [
            'Bố mẹ đều bình thường sinh con mắc bệnh: allele gây bệnh là allele lặn.',
            'Bố mẹ đều mắc bệnh sinh con bình thường: allele gây bệnh là allele trội.',
            'Bệnh do gene lặn mà con gái mắc bệnh có bố bình thường: gene nằm trên NST thường, không nằm trên X.',
            'Bệnh gặp chủ yếu ở nam, truyền từ ông ngoại qua mẹ (bình thường, mang gene) sang con trai: gợi ý gene lặn trên NST X.',
          ],
        },
        {
          type: 'p',
          text: 'Trong nghiên cứu tế bào học, người ta nuôi cấy tế bào bạch cầu, dùng colchicine để dừng phân bào ở kì giữa, rồi chụp và sắp xếp các NST thành bộ NST đồ: $22$ cặp NST thường đánh số từ $1$ đến $22$ theo kích thước giảm dần, cặp NST giới tính xếp riêng ở cuối.',
        },
      ],
    },
    {
      heading: 'Bệnh di truyền ở người',
      blocks: [
        {
          type: 'table',
          head: ['Nhóm', 'Nguyên nhân', 'Ví dụ'],
          rows: [
            [
              'Bệnh di truyền phân tử (bệnh do gene)',
              'Đột biến gene làm protein bị thay đổi hoặc không được tạo ra',
              'Hồng cầu hình liềm, bạch tạng, tan máu bẩm sinh, galactose huyết, mù màu, máu khó đông',
            ],
            [
              'Hội chứng bệnh do đột biến NST',
              'Đột biến cấu trúc hoặc số lượng NST',
              'Down (ba NST 21), Turner (XO), Klinefelter (XXY), hội chứng mèo kêu (mất đoạn NST 5)',
            ],
            [
              'Ung thư',
              'Đột biến gene hoặc đột biến NST làm tế bào phân chia không kiểm soát',
              'Ung thư bạch cầu Burkitt (chuyển đoạn giữa NST 8 và 14), ung thư phổi',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Liệu pháp gene',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Liệu pháp gene',
          text: 'Liệu pháp gene là phương pháp chữa bệnh di truyền bằng cách thay thế gene gây bệnh bằng gene lành, hoặc chỉnh sửa, ức chế gene gây bệnh.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Lấy tế bào của người bệnh (thường là tế bào gốc tuỷ xương, loại tế bào phân chia suốt đời).',
            'Dùng thể truyền (thường là virus đã được làm mất khả năng gây bệnh) đưa gene lành vào tế bào, hoặc chỉnh sửa gene hỏng bằng hệ thống CRISPR-Cas9.',
            'Nuôi cấy cho tế bào đã được sửa chữa nhân lên với số lượng lớn.',
            'Đưa tế bào trở lại cơ thể người bệnh.',
          ],
        },
        {
          type: 'p',
          text: 'Liệu pháp gene đã giúp cải thiện thị lực cho người mù bẩm sinh do đột biến gene RPE65, điều trị bệnh suy giảm miễn dịch tổ hợp nghiêm trọng (SCID) do thiếu enzyme adenosine deaminase, chỉnh sửa gene gây bệnh hồng cầu hình liềm. Tuy vậy, liệu pháp chủ yếu áp dụng cho bệnh đơn gene, phần lớn còn đang thử nghiệm và gặp nhiều rào cản: gene đưa vào phải hoạt động đúng nơi, đúng lúc, đúng liều và không làm hỏng gene khác.',
        },
      ],
    },
    {
      heading: 'Tư vấn di truyền và sàng lọc trước sinh',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tư vấn di truyền',
          text: 'Tư vấn di truyền là cung cấp thông tin cho người mắc hoặc có nguy cơ sinh con mắc bệnh di truyền về nguyên nhân, cơ chế, khả năng mắc bệnh của bản thân và con cái, cùng các biện pháp phòng tránh, điều trị.',
        },
        {
          type: 'p',
          text: 'Cơ sở của tư vấn di truyền là các quy luật di truyền và di truyền học quần thể (để tính xác suất sinh con mắc bệnh), kết quả xét nghiệm NST và chỉ tiêu sinh hoá, cùng các kĩ thuật phân tử xác định gene gây bệnh. Ví dụ: vợ và chồng đều mang allele lặn gây bệnh tan máu bẩm sinh ($Aa \\times Aa$) thì xác suất sinh con mắc bệnh ($aa$) là $\\dfrac{1}{4}$.',
        },
        {
          type: 'list',
          items: [
            'Chọc dò dịch ối: lấy dịch ối để xét nghiệm tế bào thai và chỉ tiêu sinh hoá, phát hiện đột biến NST (hội chứng Down), rối loạn chuyển hoá bẩm sinh, dị tật ống thần kinh.',
            'Sinh thiết tua nhau thai (khi thai khoảng $11$ đến $13$ tuần): phân tích NST của tế bào tua nhau thai để phát hiện hội chứng Down và một số dị tật bẩm sinh.',
            'Người cần tư vấn: các cặp chuẩn bị kết hôn có người thân mắc bệnh di truyền; vợ chồng có kế hoạch sinh con (phụ nữ trên $35$ tuổi có nguy cơ sinh con mắc hội chứng Down cao hơn); phụ nữ mang thai có nguy cơ; người bệnh ung thư đã xác định được gene gây bệnh để chọn thuốc điều trị đích.',
            'Người có quan hệ họ hàng gần không nên kết hôn với nhau, vì xác suất con nhận hai allele lặn gây bệnh giống nhau (thể đồng hợp lặn) tăng cao.',
          ],
        },
        { type: 'widget', name: 'tu-van' },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vấn đề đạo đức',
          text: 'Những hiểu biết về hệ gene người đặt ra nhiều câu hỏi đạo đức và xã hội: bảo mật thông tin di truyền, sử dụng chỉ số DNA, và có nên chỉnh sửa hệ gene người hay không khi hậu quả lâu dài còn khó lường.',
        },
      ],
    },
  ],
  explore: {
    title: 'Phân tích phả hệ',
    instruction:
      'Chọn một gia đình, quan sát ai mắc bệnh qua ba thế hệ, rồi chọn giả thuyết về gene gây bệnh. Nếu giả thuyết sai, ô phản hồi chỉ ra người con không thể sinh ra theo giả thuyết đó. Chạm vào từng người để xem thông tin; bật phân tích đầy đủ để xem kiểu gene có thể có.',
  },
  examples: [
    {
      problem:
        'Trong một gia đình, bố mẹ (I.1, I.2) đều có da bình thường sinh con gái II.2 bị bạch tạng và hai con trai bình thường. Bệnh do gene trội hay lặn, nằm trên NST thường hay NST X?',
      steps: [
        'Bố mẹ bình thường sinh con mắc bệnh, nên allele gây bệnh là allele lặn ($a$), bố mẹ mang allele lặn ở trạng thái dị hợp.',
        'Nếu gene lặn nằm trên X thì con gái mắc bệnh $X^aX^a$ phải nhận $X^a$ từ bố, khi đó bố $X^aY$ phải mắc bệnh. Bố bình thường nên giả thuyết này bị loại.',
        'Vậy gene nằm trên NST thường: bố mẹ $Aa \\times Aa$, con gái bệnh có kiểu gene $aa$.',
      ],
      answer: 'Bệnh bạch tạng do gene lặn trên NST thường quy định.',
    },
    {
      problem:
        'Một người phụ nữ bình thường có em trai bị bạch tạng, bố mẹ cô đều bình thường. Cô lấy chồng mang allele bạch tạng ($Aa$). Tính xác suất đứa con đầu lòng của họ bị bạch tạng.',
      steps: [
        'Em trai bệnh ($aa$) mà bố mẹ bình thường, nên bố mẹ đều là $Aa$. Con của họ: $\\dfrac{1}{4}AA : \\dfrac{2}{4}Aa : \\dfrac{1}{4}aa$.',
        'Người phụ nữ bình thường nên không phải $aa$; xác suất cô mang allele bệnh ($Aa$) là $\\dfrac{2}{3}$.',
        'Nếu cô là $Aa$, cặp $Aa \\times Aa$ sinh con $aa$ với xác suất $\\dfrac{1}{4}$.',
        'Xác suất cần tìm: $\\dfrac{2}{3} \\cdot \\dfrac{1}{4} = \\dfrac{1}{6}$.',
      ],
      answer: 'Xác suất con đầu lòng bị bạch tạng là $\\dfrac{1}{6}$.',
    },
    {
      problem:
        'Người vợ bình thường mang allele gây bệnh máu khó đông ($X^AX^a$), người chồng bình thường ($X^AY$). Tính xác suất họ sinh con trai mắc bệnh, con gái mắc bệnh.',
      steps: [
        'Vợ cho hai loại giao tử $X^A$, $X^a$ với tỉ lệ bằng nhau; chồng cho $X^A$ và $Y$.',
        'Con: $X^AX^A : X^AX^a : X^AY : X^aY$, mỗi loại $\\dfrac{1}{4}$.',
        'Con gái nhận $X^A$ của bố nên không mắc bệnh ($\\dfrac{1}{2}$ số con gái mang allele bệnh). Trong số con trai, $\\dfrac{1}{2}$ mắc bệnh ($X^aY$).',
      ],
      answer:
        'Xác suất sinh một con trai mắc bệnh là $\\dfrac{1}{4}$ (bằng $\\dfrac{1}{2}$ số con trai); con gái không mắc bệnh.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt:
        'Để xác định một tính trạng ở người do kiểu gene quyết định là chủ yếu hay chịu ảnh hưởng nhiều của môi trường, người ta dùng phương pháp nào?',
      options: [
        'Nghiên cứu trẻ đồng sinh',
        'Nghiên cứu phả hệ',
        'Nghiên cứu tế bào học',
        'Nghiên cứu di truyền quần thể',
      ],
      answer: 0,
      hints: ['Cần so sánh những người có cùng kiểu gene sống trong các môi trường khác nhau.'],
      solution:
        'Trẻ đồng sinh cùng trứng có cùng kiểu gene; so sánh các em khi sống cùng hoặc khác môi trường cho biết vai trò của kiểu gene và môi trường.',
    },
    {
      type: 'choice',
      prompt: 'Phương pháp nào phát hiện được nguyên nhân của hội chứng Down?',
      options: [
        'Nghiên cứu tế bào học (quan sát bộ NST)',
        'Nghiên cứu trẻ đồng sinh',
        'Nghiên cứu phả hệ',
        'Nghiên cứu di truyền quần thể',
      ],
      answer: 0,
      hints: ['Hội chứng Down do thừa một NST.'],
      solution:
        'Hội chứng Down do có ba NST số 21; quan sát, so sánh bộ NST của người bệnh với người bình thường (tế bào học) phát hiện được điều này.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi phương pháp nghiên cứu với kết quả mà nó cho phép xác định.',
      left: [
        'Nghiên cứu phả hệ',
        'Nghiên cứu di truyền phân tử',
        'Nghiên cứu di truyền quần thể',
        'Nghiên cứu tế bào học',
      ],
      right: [
        'Bệnh máu khó đông do gene lặn trên NST X',
        'Đột biến gene cụ thể gây bệnh hồng cầu hình liềm',
        'Tần số allele gây bệnh bạch tạng trong một cộng đồng',
        'Hội chứng Turner có bộ NST $2n = 45$, XO',
        'Nhóm máu do kiểu gene quyết định',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Phả hệ trả lời câu hỏi trội hay lặn, trên NST thường hay NST giới tính.'],
      solution:
        'Phả hệ: kiểu di truyền của bệnh máu khó đông. Phân tử: đột biến gây hồng cầu hình liềm. Quần thể: tần số allele bạch tạng. Tế bào học: bộ NST của hội chứng Turner. Kết quả về nhóm máu đến từ nghiên cứu trẻ đồng sinh.',
    },
    {
      type: 'multi',
      prompt: 'Những bệnh, hội chứng nào dưới đây là bệnh di truyền phân tử (do đột biến gene)?',
      options: [
        'Hồng cầu hình liềm',
        'Bạch tạng',
        'Máu khó đông',
        'Hội chứng Down',
        'Hội chứng Turner',
      ],
      answers: [0, 1, 2],
      hints: ['Hội chứng do thừa hoặc thiếu NST là bệnh do đột biến NST.'],
      solution:
        'Hồng cầu hình liềm, bạch tạng, máu khó đông do đột biến gene; Down (ba NST 21) và Turner (XO) do đột biến số lượng NST.',
    },
    {
      type: 'fraction',
      prompt:
        'Vợ và chồng đều bình thường nhưng đều mang allele lặn gây bệnh tan máu bẩm sinh ($Aa$). Xác suất họ sinh một đứa con mắc bệnh là bao nhiêu?',
      answer: [1, 4],
      hints: ['Viết sơ đồ lai $Aa \\times Aa$.', 'Con mắc bệnh có kiểu gene $aa$.'],
      solution:
        '$Aa \\times Aa$ cho con $\\dfrac{1}{4}AA : \\dfrac{2}{4}Aa : \\dfrac{1}{4}aa$; xác suất con mắc bệnh ($aa$) là $\\dfrac{1}{4}$.',
    },
    {
      type: 'fraction',
      prompt:
        'Cặp vợ chồng $Aa \\times Aa$ (bệnh do gene lặn trên NST thường) sinh được một người con bình thường. Xác suất người con này mang allele gây bệnh là bao nhiêu?',
      answer: [2, 3],
      simplest: true,
      hints: [
        'Con bình thường có thể là $AA$ hoặc $Aa$.',
        'Chỉ xét trong số con bình thường: tỉ lệ $AA : Aa = 1 : 2$.',
      ],
      solution:
        'Con bình thường gồm $\\dfrac{1}{4}AA$ và $\\dfrac{2}{4}Aa$; trong số đó, xác suất là $Aa$ bằng $\\dfrac{2}{4} : \\dfrac{3}{4} = \\dfrac{2}{3}$.',
    },
    {
      type: 'fraction',
      prompt:
        'Một người phụ nữ bình thường có em trai bị bạch tạng, bố mẹ cô đều bình thường. Cô lấy một người chồng bị bạch tạng ($aa$). Xác suất đứa con đầu lòng của họ bị bạch tạng là bao nhiêu?',
      answer: [1, 3],
      simplest: true,
      hints: [
        'Tính xác suất người phụ nữ có kiểu gene $Aa$.',
        'Nếu vợ là $Aa$ và chồng $aa$, con bị bệnh với xác suất $\\dfrac{1}{2}$.',
      ],
      solution:
        'Bố mẹ cô là $Aa \\times Aa$, cô bình thường nên là $Aa$ với xác suất $\\dfrac{2}{3}$. Con bị bệnh: $\\dfrac{2}{3} \\cdot \\dfrac{1}{2} = \\dfrac{1}{3}$.',
    },
    {
      type: 'fraction',
      prompt:
        'Vợ bình thường mang allele gây bệnh máu khó đông ($X^AX^a$), chồng bình thường ($X^AY$). Xác suất đứa con đầu lòng là con trai mắc bệnh là bao nhiêu?',
      answer: [1, 4],
      hints: [
        'Con trai nhận NST X từ mẹ và NST Y từ bố.',
        'Xác suất sinh con trai là $\\dfrac{1}{2}$; con trai nhận $X^a$ với xác suất $\\dfrac{1}{2}$.',
      ],
      solution:
        'Con: $X^AX^A$, $X^AX^a$, $X^AY$, $X^aY$, mỗi loại $\\dfrac{1}{4}$. Con trai mắc bệnh là $X^aY$: xác suất $\\dfrac{1}{4}$.',
    },
    {
      type: 'choice',
      prompt:
        'Trong một phả hệ, bố mẹ đều bình thường sinh một con gái mắc bệnh. Kết luận nào đúng?',
      options: [
        'Bệnh do gene lặn trên NST thường',
        'Bệnh do gene lặn trên NST X',
        'Bệnh do gene trội trên NST thường',
        'Bệnh do gene trội trên NST X',
      ],
      answer: 0,
      hints: [
        'Bố mẹ bình thường sinh con bệnh: allele bệnh trội hay lặn?',
        'Nếu gene lặn trên X, con gái $X^aX^a$ phải nhận $X^a$ từ bố.',
      ],
      solution:
        'Bố mẹ bình thường sinh con bệnh nên allele bệnh là lặn. Nếu gene nằm trên X, bố phải là $X^aY$ và mắc bệnh, trái giả thiết. Vậy gene lặn nằm trên NST thường.',
    },
    {
      type: 'choice',
      prompt: 'Phát biểu nào đúng về liệu pháp gene?',
      options: [
        'Thay gene gây bệnh bằng gene lành hoặc chỉnh sửa gene gây bệnh trong tế bào người bệnh',
        'Dùng thuốc kháng sinh để tiêu diệt gene gây bệnh',
        'Loại bỏ NST mang gene bệnh khỏi mọi tế bào của cơ thể',
        'Đã chữa khỏi được mọi bệnh di truyền ở người',
      ],
      answer: 0,
      hints: ['Liệu pháp gene can thiệp vào chính gene gây bệnh trong tế bào.'],
      solution:
        'Liệu pháp gene thay thế, chỉnh sửa hoặc ức chế gene gây bệnh, thường trong tế bào gốc tuỷ xương rồi đưa trở lại cơ thể; phần lớn vẫn đang thử nghiệm.',
    },
    {
      type: 'choice',
      prompt:
        'Vì sao luật pháp và các bác sĩ khuyên những người có họ hàng gần không nên kết hôn với nhau?',
      options: [
        'Vì xác suất con nhận hai allele lặn gây bệnh giống nhau tăng, bệnh lặn dễ biểu hiện',
        'Vì con sinh ra chắc chắn mắc hội chứng Down',
        'Vì họ hàng gần có bộ NST khác nhau',
        'Vì kết hôn gần làm tăng tần số đột biến gene',
      ],
      answer: 0,
      hints: ['Người cùng dòng họ dễ cùng mang một allele lặn từ tổ tiên chung.'],
      solution:
        'Người họ hàng gần dễ cùng mang một allele lặn gây bệnh; con của họ có xác suất cao ở trạng thái đồng hợp lặn nên bệnh biểu hiện.',
    },
  ],
  takeaways: [
    'Nghiên cứu di truyền người khó vì người có vòng đời dài, ít con và không thể lai thí nghiệm hay gây đột biến.',
    'Phả hệ cho biết tính trạng trội hay lặn, trên NST thường hay NST giới tính; trẻ đồng sinh cho biết vai trò của kiểu gene và môi trường; tế bào học phát hiện đột biến NST.',
    'Bố mẹ bình thường sinh con bệnh: gene lặn; bố mẹ cùng bệnh sinh con bình thường: gene trội.',
    'Liệu pháp gene chữa bệnh bằng cách thay thế hoặc chỉnh sửa gene gây bệnh; phần lớn còn đang thử nghiệm.',
    'Tư vấn di truyền và sàng lọc trước sinh (chọc dò dịch ối, sinh thiết tua nhau thai) giúp phòng ngừa, phát hiện sớm bệnh di truyền.',
  ],
};
