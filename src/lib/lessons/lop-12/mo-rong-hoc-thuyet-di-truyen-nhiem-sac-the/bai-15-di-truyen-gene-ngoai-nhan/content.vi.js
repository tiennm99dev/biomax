/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Di truyền gene ngoài nhân: thí nghiệm lai thuận nghịch của Correns ở cây hoa bốn giờ, gene trong ti thể và lục lạp di truyền theo dòng mẹ, so sánh với gene trong nhân và các ứng dụng trong y học, nông nghiệp, nghiên cứu tiến hoá và pháp y.',
  intro:
    'Lai cây hoa bốn giờ lá xanh với cây lá trắng, kết quả lại phụ thuộc vào cây nào làm mẹ: lấy noãn của cây lá xanh thì đời con lá xanh, lấy noãn của cây lá trắng thì đời con lá trắng. Vì sao tính trạng này không tuân theo các quy luật của Mendel?',
  objectives: [
    'Trình bày được thí nghiệm lai thuận nghịch của Correns và giải thích được kết quả.',
    'Nêu được gene ngoài nhân nằm trong ti thể, lục lạp và di truyền theo dòng mẹ.',
    'So sánh được đặc điểm di truyền của gene ngoài nhân với gene trong nhân.',
    'Nêu được một số ứng dụng của di truyền gene ngoài nhân trong y học, nông nghiệp, nghiên cứu tiến hoá và pháp y.',
  ],
  sections: [
    {
      heading: 'Thí nghiệm của Correns',
      blocks: [
        {
          type: 'p',
          text: 'Năm 1900, de Vries, Tschermak và Correns độc lập phát hiện lại các quy luật của Mendel. Năm 1909, khi nghiên cứu cây hoa bốn giờ (Mirabilis jalapa), Correns nhận thấy trên cùng một cây có thể có ba loại cành: cành lá xanh, cành lá trắng (không có diệp lục) và cành lá khảm (đốm xanh xen trắng).',
        },
        {
          type: 'p',
          text: 'Ông lấy hạt phấn của hoa trên một loại cành thụ phấn cho hoa trên loại cành khác, làm đủ $3$ cặp lai thuận nghịch giữa ba loại cành, rồi gieo hạt và quan sát màu lá của cây con.',
        },
        {
          type: 'table',
          caption: 'Kết quả lai thuận nghịch của Correns ở cây hoa bốn giờ',
          head: ['Hoa cây mẹ (♀) trên cành', 'Hạt phấn cây bố (♂) từ cành', 'Cây con'],
          rows: [
            ['Lá xanh', 'Lá xanh, lá trắng hoặc lá khảm', 'Lá xanh'],
            [
              'Lá trắng',
              'Lá xanh, lá trắng hoặc lá khảm',
              'Lá trắng (chết sớm vì không có diệp lục)',
            ],
            ['Lá khảm', 'Lá xanh, lá trắng hoặc lá khảm', 'Lá xanh, lá trắng và lá khảm'],
          ],
        },
        {
          type: 'list',
          items: [
            'Phép lai thuận và phép lai nghịch cho kết quả khác nhau, không theo các tỉ lệ của Mendel.',
            'Màu lá của đời con do cây mẹ quyết định, không phụ thuộc cây bố cho hạt phấn.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Giải thích',
          text: 'Gene quy định màu lá nằm trong lục lạp, ở tế bào chất. Khi thụ tinh, giao tử đực (tinh tử của hạt phấn) gần như chỉ góp nhân, còn tế bào chất của hợp tử chủ yếu là tế bào chất của noãn. Vì vậy, đời con nhận lục lạp của mẹ. Ở cây mẹ lá khảm, tế bào chứa cả lục lạp xanh và lục lạp trắng; khi tế bào phân chia, lục lạp được chia ngẫu nhiên, không đều cho các tế bào con, nên có tế bào chỉ có lục lạp xanh, có tế bào chỉ có lục lạp trắng, có tế bào có cả hai loại. Từ đó đời con có cả cây lá xanh, lá trắng và lá khảm.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Di truyền theo dòng mẹ',
          text: 'Tính trạng do gene nằm trong tế bào chất (gene trong ti thể và lục lạp, gọi là gene ngoài nhân) quy định được di truyền theo dòng mẹ: đời con mang kiểu hình do cơ thể mẹ truyền cho qua tế bào chất của giao tử cái.',
        },
      ],
    },
    {
      heading: 'Đặc điểm di truyền của gene ngoài nhân',
      blocks: [
        {
          type: 'p',
          text: 'Ti thể (ở mọi tế bào nhân thực) và lục lạp (ở thực vật) đều có DNA riêng, thường là phân tử DNA mạch kép, dạng vòng, mỗi bào quan có nhiều bản sao. Các gene trên DNA này quy định một số protein và RNA cần cho hô hấp tế bào và quang hợp. DNA ti thể của người dài khoảng $16\\,569$ cặp nucleotide, mang $37$ gene.',
        },
        {
          type: 'list',
          items: [
            'Kết quả phép lai thuận nghịch khác nhau; tính trạng di truyền theo dòng mẹ và biểu hiện ở cả hai giới.',
            'Vai trò của giao tử đực và giao tử cái không ngang nhau: tế bào chất của giao tử cái đóng vai trò chủ yếu.',
            'Gene ngoài nhân không phân li đồng đều như gene trên NST: khi tế bào phân chia, các bào quan được chia ngẫu nhiên, nên các con của cùng một mẹ có thể nhận số lượng allele khác nhau và có kiểu hình khác nhau.',
          ],
        },
        {
          type: 'table',
          caption: 'So sánh gene ngoài nhân và gene trong nhân',
          head: ['Đặc điểm', 'Gene ngoài nhân (ti thể, lục lạp)', 'Gene trong nhân (trên NST)'],
          rows: [
            ['Vị trí', 'Tế bào chất (trong ti thể, lục lạp)', 'Trên NST trong nhân'],
            [
              'Vai trò của giao tử đực và cái',
              'Không ngang nhau, giao tử cái là chủ yếu',
              'Ngang nhau',
            ],
            ['Kết quả lai thuận nghịch', 'Khác nhau', 'Có thể giống nhau hoặc khác nhau'],
            [
              'Kiểu di truyền',
              'Thường theo dòng mẹ',
              'Không theo dòng mẹ; phụ thuộc quan hệ trội – lặn, tương tác gene',
            ],
            [
              'Biểu hiện kiểu hình',
              'Không có quan hệ trội – lặn; allele có trong tế bào chất là biểu hiện',
              'Allele lặn chỉ biểu hiện khi ở thể đồng hợp (với gene trên NST thường)',
            ],
            ['Tái tổ hợp trong thụ tinh', 'Không có', 'Có'],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Đừng nhầm với di truyền liên kết với giới tính',
          text: 'Gene trên NST X cũng có thể cho kết quả lai thuận nghịch khác nhau, nhưng kiểu hình đời con phân li khác nhau giữa hai giới (di truyền chéo). Với gene ngoài nhân, mọi con của cùng một mẹ, cả đực và cái, đều mang tế bào chất của mẹ.',
        },
      ],
    },
    {
      heading: 'Ứng dụng của di truyền gene ngoài nhân',
      blocks: [
        {
          type: 'list',
          items: [
            'Y học: một số bệnh hiếm gặp do đột biến gene ti thể, như bệnh cơ ti thể, hội chứng Leigh, và các gene ti thể còn liên quan đến một số bệnh tiểu đường, tim mạch, Alzheimer. Kĩ thuật chuyển nhân thay tế bào chất trong trứng của người mẹ mang gene bệnh bằng tế bào chất từ trứng của người cho khoẻ mạnh, rồi thụ tinh với tinh trùng của người bố. Năm 2016, kĩ thuật này đã giúp một người mẹ mang gene gây hội chứng Leigh sinh con khoẻ mạnh.',
            'Nông nghiệp: đột biến gene ti thể có thể gây bất thụ đực tế bào chất – cây không tạo được hạt phấn hữu thụ. Lúa là cây lưỡng tính tự thụ phấn, khử đực bằng tay rất tốn công; dùng dòng bất thụ đực tế bào chất làm mẹ giúp sản xuất hạt lúa lai (ví dụ các giống lúa lai VT 505, MV2, Long Hương 8117).',
            'Nghiên cứu tiến hoá: DNA ti thể có nhiều bản sao và di truyền theo dòng mẹ, không tái tổ hợp khi thụ tinh. Giải trình tự DNA ti thể của các nhóm người cho thấy loài người hiện đại xuất hiện ở châu Phi rồi phát tán sang các châu lục khác.',
            'Pháp y: so sánh DNA ti thể với người thân cùng dòng mẹ để xác định danh tính hài cốt liệt sĩ, nạn nhân tai nạn và quan hệ huyết thống theo dòng mẹ.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Lai thuận nghịch ở cây hoa bốn giờ',
    instruction:
      'Chọn loại cành của cây A và cây B, dự đoán kết quả của cặp lai thuận nghịch rồi bấm "Gieo hạt". Quan sát noãn mang lục lạp còn hạt phấn chỉ góp nhân. Đổi sang "Nhân (giả định)" để so sánh với một gene nằm trong nhân.',
  },
  examples: [
    {
      problem:
        'Ở cây hoa bốn giờ, thực hiện phép lai thuận ♀ cành lá xanh × ♂ cành lá trắng và phép lai nghịch ♀ cành lá trắng × ♂ cành lá xanh. Dự đoán kết quả và cho biết nếu gene quy định màu lá nằm trong nhân ($A$ – lá xanh trội hoàn toàn so với $a$ – lá trắng) thì kết quả sẽ thế nào.',
      steps: [
        'Gene quy định màu lá nằm trong lục lạp, hợp tử nhận lục lạp từ tế bào chất của noãn.',
        'Lai thuận: mẹ lá xanh, đời con toàn lá xanh.',
        'Lai nghịch: mẹ lá trắng, đời con toàn lá trắng (cây con chết sớm vì không có diệp lục).',
        'Nếu gene nằm trong nhân: $AA \\times aa$ hay $aa \\times AA$ đều cho $F_1$ toàn $Aa$, lá xanh, nên lai thuận và lai nghịch cho kết quả như nhau.',
      ],
      answer:
        'Lai thuận cho toàn cây lá xanh, lai nghịch cho toàn cây lá trắng: kết quả khác nhau, theo cây mẹ. Với gene trong nhân, cả hai phép lai đều cho $F_1$ lá xanh.',
    },
    {
      problem:
        'Bà Hoa mang đột biến gene ti thể gây bệnh. Bà có một con trai và một con gái; cả hai đều mang gene bệnh và đều lấy vợ, lấy chồng không mang gene bệnh. Các cháu của bà Hoa qua con trai và qua con gái có thể nhận gene bệnh không?',
      steps: [
        'Gene ti thể di truyền theo dòng mẹ: con nhận ti thể từ tế bào chất của trứng.',
        'Con trai và con gái của bà Hoa đều nhận ti thể mang gene bệnh từ mẹ.',
        'Con của người con trai nhận ti thể từ mẹ của chúng (không mang gene bệnh), nên không nhận gene bệnh từ bố.',
        'Con của người con gái nhận ti thể từ chính người con gái này, nên có thể mang gene bệnh, dù là cháu trai hay cháu gái.',
      ],
      answer:
        'Các cháu qua con trai không nhận gene bệnh; các cháu qua con gái (cả trai và gái) có thể nhận gene bệnh.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt:
        'Ở cây hoa bốn giờ, lấy hạt phấn của cành lá xanh thụ phấn cho hoa trên cành lá trắng. Các hạt thu được mọc thành cây',
      options: [
        'lá trắng',
        'lá xanh',
        'lá xanh, lá trắng và lá khảm',
        '$3$ lá xanh $: 1$ lá trắng',
      ],
      answer: 0,
      hints: [
        'Hoa trên cành nào cho noãn, tức là làm mẹ?',
        'Gene quy định màu lá nằm trong lục lạp.',
      ],
      solution:
        'Cây mẹ là cành lá trắng; hợp tử nhận lục lạp từ tế bào chất của noãn nên đời con toàn lá trắng, không phụ thuộc hạt phấn của cành lá xanh.',
    },
    {
      type: 'choice',
      prompt:
        'Lấy hạt phấn của cành lá xanh thụ phấn cho hoa trên cành lá khảm của cây hoa bốn giờ. Đời con có',
      options: [
        'cây lá xanh, cây lá trắng và cây lá khảm',
        'toàn cây lá xanh',
        'toàn cây lá khảm',
        'cây lá xanh và cây lá khảm theo tỉ lệ $1 : 1$',
      ],
      answer: 0,
      hints: [
        'Tế bào của cành lá khảm chứa những loại lục lạp nào?',
        'Lục lạp được chia cho các tế bào con một cách ngẫu nhiên.',
      ],
      solution:
        'Noãn của cành lá khảm chứa cả lục lạp xanh và lục lạp trắng. Khi phân chia, lục lạp được chia ngẫu nhiên, không đều, nên đời con có cả cây lá xanh, lá trắng và lá khảm, không theo một tỉ lệ xác định.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các đặc điểm của di truyền gene ngoài nhân.',
      options: [
        'Kết quả phép lai thuận nghịch khác nhau',
        'Tính trạng di truyền theo dòng mẹ, biểu hiện ở cả hai giới',
        'Tế bào chất của giao tử cái đóng vai trò chủ yếu',
        'Đời con phân li theo tỉ lệ $3 : 1$',
        'Tính trạng chỉ biểu hiện ở giới đực',
      ],
      answers: [0, 1, 2],
      hints: ['Gene nằm trong ti thể, lục lạp, được truyền qua tế bào chất của trứng.'],
      solution:
        'Gene ngoài nhân cho kết quả lai thuận nghịch khác nhau, di truyền theo dòng mẹ ở cả hai giới, giao tử cái giữ vai trò chủ yếu. Nó không phân li theo tỉ lệ Mendel và không giới hạn ở một giới.',
    },
    {
      type: 'choice',
      prompt: 'Ở tế bào thực vật, gene ngoài nhân nằm trong',
      options: ['ti thể và lục lạp', 'ribosome và lưới nội chất', 'nhân con', 'NST giới tính'],
      answer: 0,
      hints: ['Đó là những bào quan có DNA riêng.'],
      solution:
        'Ti thể và lục lạp có DNA riêng (dạng vòng, nhiều bản sao); các gene trên đó là gene ngoài nhân.',
    },
    {
      type: 'choice',
      prompt:
        'Một người phụ nữ mắc hội chứng Leigh do đột biến gene ti thể, lấy chồng không mang gene bệnh. Nhận định nào đúng về các con của họ?',
      options: [
        'Cả con trai và con gái đều có thể nhận gene bệnh từ mẹ',
        'Chỉ con trai nhận gene bệnh',
        'Chỉ con gái nhận gene bệnh',
        'Con có xác suất $\\frac{1}{4}$ nhận gene bệnh như bệnh do gene lặn',
      ],
      answer: 0,
      hints: ['Ti thể của hợp tử đến từ đâu?'],
      solution:
        'Ti thể của hợp tử đến từ tế bào chất của trứng, nên mọi người con, cả trai và gái, đều có thể nhận ti thể mang gene bệnh của mẹ. Gene ti thể không phân li theo tỉ lệ Mendel.',
    },
    {
      type: 'choice',
      prompt:
        'Để xác định một hài cốt liệt sĩ bằng DNA ti thể, nên so sánh với DNA ti thể của người nào sau đây?',
      options: [
        'Em gái cùng mẹ của liệt sĩ',
        'Cha ruột của liệt sĩ',
        'Con trai của liệt sĩ',
        'Con gái của liệt sĩ',
      ],
      answer: 0,
      hints: [
        'DNA ti thể di truyền theo dòng mẹ.',
        'Con của liệt sĩ nhận ti thể từ ai: từ liệt sĩ hay từ vợ của liệt sĩ?',
      ],
      solution:
        'Liệt sĩ và em gái cùng mẹ đều nhận ti thể từ người mẹ, nên có DNA ti thể giống nhau. Cha ruột có ti thể của bà nội; các con của liệt sĩ nhận ti thể từ vợ liệt sĩ, nên không dùng được.',
    },
    {
      type: 'choice',
      prompt:
        'Nguyên nhân chủ yếu làm cho kết quả lai thuận nghịch khác nhau khi tính trạng do gene ngoài nhân quy định là',
      options: [
        'hợp tử nhận tế bào chất chủ yếu từ giao tử cái, giao tử đực gần như chỉ góp nhân',
        'gene ngoài nhân là gene lặn',
        'giao tử đực không có nhân',
        'gene ngoài nhân nằm trên NST giới tính X',
      ],
      answer: 0,
      hints: ['So sánh lượng tế bào chất của trứng và của tinh trùng (hạt phấn).'],
      solution:
        'Tế bào chất của hợp tử, cùng ti thể và lục lạp trong đó, chủ yếu đến từ trứng (noãn). Vì vậy, đổi vai bố mẹ thì đời con nhận gene ngoài nhân khác nhau.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi ứng dụng với hiểu biết về gene ngoài nhân được dùng.',
      left: [
        'Sản xuất hạt lúa lai không cần khử đực bằng tay',
        'Giúp người mẹ mang gene bệnh ti thể sinh con khoẻ mạnh',
        'Truy tìm nguồn gốc châu Phi của loài người',
        'Xác định danh tính hài cốt liệt sĩ',
      ],
      right: [
        'Bất thụ đực tế bào chất do đột biến gene ti thể',
        'Chuyển nhân sang trứng có tế bào chất của người cho khoẻ mạnh',
        'Giải trình tự DNA ti thể của nhiều nhóm người',
        'So sánh DNA ti thể với người thân cùng dòng mẹ',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: [
        'Mỗi ứng dụng dựa trên một tính chất: bất thụ đực, thay tế bào chất, di truyền theo dòng mẹ.',
      ],
      solution:
        'Lúa lai dùng dòng bất thụ đực tế bào chất; chuyển nhân thay tế bào chất mang ti thể bệnh; DNA ti thể di truyền theo dòng mẹ nên dùng để truy nguồn gốc loài người và xác định danh tính theo dòng mẹ.',
    },
    {
      type: 'number',
      prompt:
        'Correns làm lai thuận nghịch giữa ba loại cành (lá xanh, lá trắng, lá khảm), mỗi cặp gồm hai loại cành khác nhau. Có bao nhiêu phép lai (tính cả lai thuận và lai nghịch)?',
      answer: 6,
      hints: [
        'Đếm số cặp hai loại cành khác nhau, mỗi cặp có một phép lai thuận và một phép lai nghịch.',
      ],
      solution:
        'Có $3$ cặp: xanh – trắng, xanh – khảm, trắng – khảm. Mỗi cặp gồm lai thuận và lai nghịch, nên có $3 \\cdot 2 = 6$ phép lai.',
    },
  ],
  takeaways: [
    'Thí nghiệm của Correns ở cây hoa bốn giờ: lai thuận nghịch cho kết quả khác nhau, màu lá đời con theo cây mẹ.',
    'Gene ngoài nhân nằm trong ti thể và lục lạp; hợp tử nhận tế bào chất chủ yếu từ giao tử cái nên tính trạng di truyền theo dòng mẹ, biểu hiện ở cả hai giới.',
    'Gene ngoài nhân không phân li theo quy luật Mendel, không có quan hệ trội – lặn, không tái tổ hợp khi thụ tinh; bào quan được chia ngẫu nhiên cho tế bào con.',
    'Ứng dụng: giúp người mẹ mang gene bệnh ti thể sinh con khoẻ mạnh bằng chuyển nhân, tạo lúa lai nhờ bất thụ đực tế bào chất, truy nguồn gốc loài người và xác định danh tính theo dòng mẹ.',
  ],
};
