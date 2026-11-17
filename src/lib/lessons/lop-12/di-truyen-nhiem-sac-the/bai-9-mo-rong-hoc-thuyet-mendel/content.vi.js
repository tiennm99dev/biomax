/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Mở rộng học thuyết Mendel: tương tác giữa các allele của cùng một gene (trội không hoàn toàn, đồng trội, gene đa allele), tương tác giữa các gene khác nhau (tương tác gián tiếp, tương tác cộng gộp) và gene đa hiệu.',
  intro:
    'Lai hai giống đậu thơm đều có hoa trắng, Bateson và Punnett lại thu được toàn cây hoa đỏ; cho chúng tự thụ phấn, đời sau có $9$ đỏ $: 7$ trắng chứ không phải $3 : 1$ hay $9 : 3 : 3 : 1$. Phải chăng mọi tính trạng đều do một gene quy định, và một gene chỉ quy định một tính trạng?',
  objectives: [
    'Phân biệt được trội hoàn toàn, trội không hoàn toàn và đồng trội; nêu được ví dụ gene đa allele (nhóm máu ABO).',
    'Giải thích được tương tác gián tiếp (kiểu bổ sung) và tương tác cộng gộp giữa các gene khác nhau qua sản phẩm của gene.',
    'Nêu được khái niệm và ví dụ về gene đa hiệu.',
    'Nhận ra kiểu tác động của gene từ tỉ lệ kiểu hình ở đời con.',
  ],
  sections: [
    {
      heading: 'Tương tác giữa các allele của cùng một gene',
      blocks: [
        {
          type: 'p',
          text: 'Mendel nghiên cứu các tính trạng trội hoàn toàn: kiểu hình của thể dị hợp $Aa$ giống thể đồng hợp trội $AA$. Thực tế, sản phẩm của hai allele trong thể dị hợp có thể quy định kiểu hình theo những cách khác.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Trội không hoàn toàn',
          text: 'Trội không hoàn toàn là hiện tượng thể dị hợp có kiểu hình trung gian giữa kiểu hình của hai thể đồng hợp. Ví dụ, ở hoa mõm chó (và ở hoa phấn): cây hoa đỏ thuần chủng $AA$ × cây hoa trắng $aa$ cho $F_1$ toàn hoa hồng $Aa$; $F_2$ có $1$ đỏ $: 2$ hồng $: 1$ trắng, tỉ lệ kiểu hình trùng với tỉ lệ kiểu gene.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Đồng trội',
          text: 'Đồng trội là hiện tượng trong thể dị hợp, cả hai allele đều biểu hiện ra kiểu hình. Ví dụ: ở người, thể dị hợp $I^AI^B$ tạo cả kháng nguyên A và kháng nguyên B trên hồng cầu, có nhóm máu AB.',
        },
        {
          type: 'p',
          text: 'Gene quy định nhóm máu ABO là một gene đa allele: trong quần thể người, gene này có ba allele $I^A$, $I^B$ và $I^O$; $I^A$ và $I^B$ đồng trội, cả hai trội hoàn toàn so với $I^O$. Mỗi người chỉ mang hai trong số các allele đó.',
        },
        {
          type: 'table',
          caption: 'Kiểu gene và nhóm máu ABO',
          head: ['Nhóm máu', 'Kiểu gene'],
          rows: [
            ['A', '$I^AI^A$, $I^AI^O$'],
            ['B', '$I^BI^B$, $I^BI^O$'],
            ['AB', '$I^AI^B$'],
            ['O', '$I^OI^O$'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Số kiểu gene của gene đa allele',
          text: 'Một gene có $k$ allele (trên NST thường) tạo $\\frac{k(k+1)}{2}$ kiểu gene trong quần thể; với $k = 3$ có $6$ kiểu gene.',
        },
      ],
    },
    {
      heading: 'Tương tác giữa các gene khác nhau',
      blocks: [
        {
          type: 'p',
          text: 'Nhiều tính trạng do hai hay nhiều gene khác nhau (gene không allele) cùng quy định. Thực chất, các gene không tác động trực tiếp lên nhau mà sản phẩm của chúng (enzyme, protein) cùng tham gia hình thành một tính trạng, theo hai cách: tương tác gián tiếp và tương tác trực tiếp kiểu cộng gộp.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tương tác gián tiếp',
          text: 'Sản phẩm của các gene khác nhau không tương tác trực tiếp với nhau mà cùng tham gia một chuỗi phản ứng chuyển hoá, bổ sung cho nhau để tạo ra kiểu hình. Ví dụ, ở ốc sên, enzyme do allele $A$ và enzyme do allele $B$ lần lượt biến một tiền chất không màu thành sắc tố nâu của vỏ; mất chức năng một trong hai gene, vỏ ốc màu trắng. Ở đậu thơm cũng vậy: thiếu một trong hai enzyme ($aa$ hoặc $bb$), hoa trắng. Kiểu tương tác gián tiếp cần đủ các allele trội của hai gene này thường được gọi là tương tác bổ sung.',
        },
        {
          type: 'tex',
          tex: '\\text{tiền chất (trắng)} \\xrightarrow{\\text{enzyme A}} \\text{chất trung gian (trắng)} \\xrightarrow{\\text{enzyme B}} \\text{sắc tố đỏ}',
        },
        {
          type: 'p',
          text: 'P: $AAbb$ (trắng) × $aaBB$ (trắng) → $F_1$: $AaBb$ (đỏ). $F_2$: $9\\, A\\text{-}B\\text{-}$ (đỏ) $: 3\\, A\\text{-}bb : 3\\, aaB\\text{-} : 1\\, aabb$ (trắng), tức $9$ đỏ $: 7$ trắng. Một ví dụ khác: hình dạng quả bí ngô cho $F_2$ $9$ dẹt $: 6$ tròn $: 1$ dài.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tương tác cộng gộp',
          text: 'Đây là kiểu tương tác trực tiếp: mỗi allele trội của các gene không allele đều góp một phần như nhau vào sự biểu hiện của tính trạng; càng nhiều allele trội, tính trạng biểu hiện càng mạnh. Ví dụ: màu hạt lúa mì, màu da người, chiều cao, khối lượng cơ thể.',
        },
        {
          type: 'p',
          text: 'Với hai gene, $F_2$ của $AaBb \\times AaBb$ phân thành $5$ lớp theo số allele trội ($4, 3, 2, 1, 0$) với tỉ lệ $1 : 4 : 6 : 4 : 1$; nếu chỉ phân biệt có màu và không màu thì được $15 : 1$. Khi số gene tăng, các lớp kiểu hình sát nhau và chịu thêm ảnh hưởng của môi trường, tạo nên tính trạng số lượng biến đổi liên tục.',
        },
        {
          type: 'table',
          caption: 'Tỉ lệ $F_2$ ($AaBb \\times AaBb$) theo kiểu tác động',
          head: ['Kiểu tác động', 'Tỉ lệ kiểu hình', 'Ví dụ'],
          rows: [
            ['Phân li độc lập, mỗi gene một tính trạng', '$9 : 3 : 3 : 1$', 'Hạt đậu Hà Lan'],
            ['Tương tác gián tiếp (bổ sung)', '$9 : 7$', 'Màu hoa đậu thơm'],
            ['Tương tác gián tiếp (bổ sung)', '$9 : 6 : 1$', 'Hình dạng quả bí ngô'],
            ['Tương tác cộng gộp', '$1 : 4 : 6 : 4 : 1$ hoặc $15 : 1$', 'Màu hạt lúa mì'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Mendel vẫn đúng',
          text: 'Trong mọi trường hợp trên, các gene vẫn phân li và tổ hợp theo đúng quy luật Mendel ($16$ tổ hợp, $9$ kiểu gene); chỉ cách các kiểu gene biểu hiện thành kiểu hình là khác.',
        },
      ],
    },
    {
      heading: 'Gene đa hiệu',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Gene đa hiệu',
          text: 'Gene đa hiệu là gene mà sản phẩm của nó tác động đến sự biểu hiện của nhiều tính trạng khác nhau.',
        },
        {
          type: 'list',
          items: [
            'Ở người, allele đột biến $Hb^S$ của gene β-globin làm hồng cầu hình lưỡi liềm, kéo theo hàng loạt biểu hiện: thiếu máu, cơ thể suy nhược, tắc mạch gây đau, tổn thương tim, não, thận, lách…',
            'Ở đậu Hà Lan, thứ hoa tím thì hạt có màu nâu, nách lá có một chấm đen; thứ hoa trắng thì hạt màu nhạt, nách lá không có chấm: cùng một gene quy định cả ba tính trạng.',
          ],
        },
        {
          type: 'p',
          text: 'Như vậy, quan hệ giữa gene và tính trạng không chỉ là "một gene – một tính trạng": một gene có thể quy định nhiều tính trạng (gene đa hiệu), và một tính trạng có thể do nhiều gene quy định (tương tác gene).',
        },
      ],
    },
  ],
  explore: {
    title: 'Đổi kiểu tác động, xem tỉ lệ đổi theo',
    instruction:
      'Chọn một kiểu tác động: bảng Punnett giữ nguyên các kiểu gene nhưng tô màu lại theo kiểu hình. Chạm vào một kiểu hình để thấy những kiểu gene nào cho nó. Sau đó đọc số liệu lai thực tế ở ô cuối và đoán kiểu tác động.',
  },
  examples: [
    {
      problem:
        'Ở đậu thơm, cho lai hai dòng hoa trắng thuần chủng $AAbb$ và $aaBB$ được $F_1$ toàn hoa đỏ. Cho $F_1$ tự thụ phấn. Xác định tỉ lệ kiểu hình $F_2$ và tỉ lệ cây hoa đỏ thuần chủng trong số cây hoa đỏ.',
      steps: [
        '$F_1$: $AaBb$ (đỏ) vì có cả $A$ và $B$.',
        '$F_1 \\times F_1$: $9\\, A\\text{-}B\\text{-} : 3\\, A\\text{-}bb : 3\\, aaB\\text{-} : 1\\, aabb$.',
        'Chỉ $A\\text{-}B\\text{-}$ có hoa đỏ, còn lại hoa trắng: $9$ đỏ $: 7$ trắng.',
        'Trong $9$ tổ hợp hoa đỏ chỉ có $1$ tổ hợp $AABB$, nên tỉ lệ là $\\frac{1}{9}$.',
      ],
      answer: '$F_2$: $9$ đỏ $: 7$ trắng; cây đỏ thuần chủng chiếm $\\frac{1}{9}$ số cây hoa đỏ.',
    },
    {
      problem:
        'Bố có nhóm máu A, mẹ có nhóm máu B, con đầu lòng có nhóm máu O. Xác định kiểu gene của bố mẹ và xác suất để đứa con thứ hai có nhóm máu AB.',
      steps: [
        'Con nhóm máu O có kiểu gene $I^OI^O$, nhận một $I^O$ từ bố và một $I^O$ từ mẹ.',
        'Bố nhóm A mang $I^O$ nên là $I^AI^O$; mẹ nhóm B mang $I^O$ nên là $I^BI^O$.',
        '$I^AI^O \\times I^BI^O$ cho $\\frac{1}{4} I^AI^B : \\frac{1}{4} I^AI^O : \\frac{1}{4} I^BI^O : \\frac{1}{4} I^OI^O$.',
        'Xác suất con nhóm AB ($I^AI^B$) là $\\frac{1}{4}$.',
      ],
      answer: 'Bố $I^AI^O$, mẹ $I^BI^O$; xác suất con nhóm máu AB là $\\frac{1}{4}$.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt:
        'Cho $F_1$ dị hợp hai cặp gene tự thụ phấn, $F_2$ có tỉ lệ $9$ cây hoa đỏ $: 7$ cây hoa trắng. Tính trạng màu hoa di truyền theo kiểu',
      options: [
        'tương tác gián tiếp (kiểu bổ sung)',
        'tương tác cộng gộp',
        'trội không hoàn toàn',
        'phân li độc lập, mỗi gene một tính trạng',
      ],
      answer: 0,
      hints: [
        '$F_2$ có $16$ tổ hợp, nên tính trạng do hai gene quy định.',
        'Chỉ $A\\text{-}B\\text{-}$ cho hoa đỏ.',
      ],
      solution:
        'Có $9 + 7 = 16$ tổ hợp nên tính trạng do hai gene không allele quy định; chỉ khi có cả hai allele trội hoa mới đỏ: tương tác gián tiếp kiểu bổ sung.',
    },
    {
      type: 'fraction',
      prompt:
        'Màu hạt lúa mì do hai gene tương tác cộng gộp, chỉ $aabb$ cho hạt trắng. Phép lai $AaBb \\times AaBb$ cho tỉ lệ hạt trắng là bao nhiêu?',
      answer: [1, 16],
      hints: ['Tính tỉ lệ $aa$ và $bb$ rồi nhân lại.'],
      solution:
        '$aabb = \\frac{1}{4} \\cdot \\frac{1}{4} = \\frac{1}{16}$ (tỉ lệ $15$ đỏ $: 1$ trắng).',
    },
    {
      type: 'number',
      prompt:
        'Trong quần thể người, gene quy định nhóm máu ABO (ba allele) tạo ra bao nhiêu kiểu gene?',
      answer: 6,
      hints: ['Đếm $3$ kiểu đồng hợp và các kiểu dị hợp.', 'Dùng công thức $\\frac{k(k+1)}{2}$.'],
      solution:
        '$\\frac{3 \\cdot 4}{2} = 6$: $I^AI^A$, $I^AI^O$, $I^BI^B$, $I^BI^O$, $I^AI^B$, $I^OI^O$.',
    },
    {
      type: 'fraction',
      prompt:
        'Ở hoa phấn, $A$ (đỏ) trội không hoàn toàn so với $a$ (trắng), $Aa$ cho hoa hồng. Phép lai hoa hồng × hoa hồng cho tỉ lệ hoa hồng là bao nhiêu?',
      answer: [1, 2],
      hints: ['Hoa hồng có kiểu gene $Aa$.'],
      solution:
        '$Aa \\times Aa$ cho $1 AA : 2 Aa : 1 aa$; hoa hồng ($Aa$) chiếm $\\frac{2}{4} = \\frac{1}{2}$.',
    },
    {
      type: 'choice',
      prompt: 'Cặp bố mẹ nào không thể sinh con có nhóm máu O?',
      options: [
        'Bố nhóm AB, mẹ nhóm O',
        'Bố nhóm A, mẹ nhóm B',
        'Bố nhóm A, mẹ nhóm O',
        'Bố nhóm O, mẹ nhóm O',
      ],
      answer: 0,
      hints: ['Con nhóm O cần nhận $I^O$ từ cả bố và mẹ.'],
      solution:
        'Người nhóm AB ($I^AI^B$) không mang $I^O$, nên không cho được giao tử $I^O$; con của họ chỉ có nhóm A hoặc B. Các cặp còn lại đều có thể cùng mang $I^O$.',
    },
    {
      type: 'fraction',
      prompt:
        'Màu hạt lúa mì do hai gene tương tác cộng gộp, mỗi allele trội làm hạt đỏ thêm. Phép lai $AaBb \\times AaBb$ cho tỉ lệ cây có đúng $3$ allele trội (hạt đỏ) là bao nhiêu?',
      answer: [1, 4],
      hints: [
        'Các kiểu gene có $3$ allele trội: $AABb$, $AaBB$.',
        'Tỉ lệ $F_2$ theo số allele trội là $1 : 4 : 6 : 4 : 1$.',
      ],
      solution:
        '$AABb = \\frac{1}{4} \\cdot \\frac{1}{2} = \\frac{1}{8}$, $AaBB = \\frac{1}{8}$; tổng $\\frac{4}{16} = \\frac{1}{4}$.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi kết quả lai với kiểu tác động của gene.',
      left: [
        '$F_2$: $9$ dẹt $: 6$ tròn $: 1$ dài',
        '$F_2$: $1$ đỏ $: 2$ hồng $: 1$ trắng',
        '$I^AI^O \\times I^BI^O$: $1$ A $: 1$ AB $: 1$ B $: 1$ O',
        '$F_2$: $15$ hạt đỏ $: 1$ hạt trắng',
      ],
      right: [
        'Tương tác gián tiếp (bổ sung)',
        'Trội không hoàn toàn',
        'Đồng trội',
        'Tương tác cộng gộp',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Tỉ lệ $1 : 2 : 1$ về kiểu hình ở một gene là dấu hiệu của kiểu hình trung gian.'],
      solution:
        '$9 : 6 : 1$ là tương tác gián tiếp kiểu bổ sung; $1 : 2 : 1$ là trội không hoàn toàn; nhóm máu AB xuất hiện là đồng trội; $15 : 1$ là tương tác cộng gộp.',
    },
    {
      type: 'fraction',
      prompt:
        'Ở bí ngô, $F_2$ có tỉ lệ $9$ quả dẹt $: 6$ quả tròn $: 1$ quả dài ($A\\text{-}B\\text{-}$ dẹt; $A\\text{-}bb$ và $aaB\\text{-}$ tròn; $aabb$ dài). Trong số cây quả tròn ở $F_2$, cây thuần chủng chiếm tỉ lệ bao nhiêu?',
      answer: [1, 3],
      hints: ['Liệt kê các tổ hợp quả tròn: $1 AAbb, 2 Aabb, 1 aaBB, 2 aaBb$.'],
      solution:
        'Có $6$ tổ hợp quả tròn, trong đó thuần chủng là $AAbb$ và $aaBB$ ($2$ tổ hợp): $\\frac{2}{6} = \\frac{1}{3}$.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các ví dụ về gene đa hiệu.',
      options: [
        'Allele $Hb^S$ gây hồng cầu hình liềm kèm thiếu máu, tổn thương tim, thận, não',
        'Gene quy định hoa tím ở đậu Hà Lan đồng thời quy định hạt màu nâu và chấm đen ở nách lá',
        'Màu hạt lúa mì do hai gene cùng quy định',
        'Nhóm máu ABO do một gene có ba allele quy định',
      ],
      answers: [0, 1],
      hints: ['Gene đa hiệu: một gene, nhiều tính trạng.'],
      solution:
        'Hai ví dụ đầu là một gene ảnh hưởng nhiều tính trạng. Màu hạt lúa mì là nhiều gene – một tính trạng (tương tác gene); nhóm máu ABO là gene đa allele.',
    },
  ],
  takeaways: [
    'Trội không hoàn toàn: thể dị hợp có kiểu hình trung gian, $F_2$ $1 : 2 : 1$. Đồng trội: cả hai allele cùng biểu hiện ($I^AI^B$ – nhóm máu AB).',
    'Gene đa allele có nhiều hơn hai allele trong quần thể; $k$ allele tạo $\\frac{k(k+1)}{2}$ kiểu gene.',
    'Tương tác gián tiếp (kiểu bổ sung): sản phẩm các gene cùng tham gia một chuỗi phản ứng ($9 : 7$, $9 : 6 : 1$).',
    'Tương tác cộng gộp (trực tiếp): mỗi allele trội góp phần như nhau ($1 : 4 : 6 : 4 : 1$ hoặc $15 : 1$), thường gặp ở tính trạng số lượng.',
    'Gene đa hiệu: một gene tác động lên nhiều tính trạng (allele $Hb^S$).',
  ],
};
