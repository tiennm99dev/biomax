/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Nhiễm sắc thể giới tính và cơ chế xác định giới tính; di truyền liên kết với giới tính của gene trên NST X và trên NST Y (thí nghiệm của Morgan, di truyền chéo, di truyền thẳng); ứng dụng trong chăn nuôi, trồng trọt và y học.',
  intro:
    'Vì sao tỉ lệ con trai và con gái sinh ra xấp xỉ $1 : 1$? Vì sao bệnh mù màu và máu khó đông gặp ở nam nhiều hơn hẳn ở nữ, còn người ta lại phân biệt được gà trống, gà mái ngay khi vừa nở?',
  objectives: [
    'Phân biệt được NST giới tính và NST thường; trình bày được cơ chế xác định giới tính bằng NST.',
    'Giải thích được thí nghiệm của Morgan về di truyền liên kết với giới tính ở ruồi giấm.',
    'Nêu được đặc điểm di truyền của gene trên NST X (di truyền chéo) và trên NST Y (di truyền thẳng).',
    'Nêu được ứng dụng của di truyền liên kết với giới tính.',
  ],
  sections: [
    {
      heading: 'Nhiễm sắc thể giới tính và cơ chế xác định giới tính',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'NST giới tính',
          text: 'NST giới tính là loại NST chứa các gene quy định giới tính (và một số gene quy định tính trạng thường). Các NST còn lại, giống nhau ở hai giới, là NST thường. Ví dụ, tế bào sinh dưỡng của người có $44$ NST thường và $2$ NST giới tính ($XX$ ở nữ, $XY$ ở nam).',
        },
        {
          type: 'p',
          text: 'NST $X$ và $Y$ có hình dạng, kích thước khác nhau. Chúng có vùng tương đồng (mang các gene tồn tại thành cặp allele trên cả $X$ và $Y$) và vùng không tương đồng (gene trên $X$ không có allele trên $Y$, và ngược lại).',
        },
        {
          type: 'table',
          caption: 'Một số kiểu NST giới tính',
          head: ['Kiểu', 'Giới cái', 'Giới đực', 'Ví dụ'],
          rows: [
            ['$XX$ – $XY$', '$XX$', '$XY$', 'Người, thú, ruồi giấm'],
            ['$ZW$ – $ZZ$', '$ZW$', '$ZZ$', 'Chim (gà), bướm, một số loài bò sát, cá'],
            ['$XX$ – $XO$', '$XX$', '$XO$ (chỉ có một NST $X$)', 'Châu chấu, rệp'],
          ],
        },
        {
          type: 'p',
          text: 'Cơ chế: giới đồng giao tử (như $XX$) chỉ cho một loại giao tử mang $X$; giới dị giao tử ($XY$) cho hai loại giao tử $X$ và $Y$ với tỉ lệ ngang nhau. Qua thụ tinh, hợp tử $XX$ và $XY$ được tạo ra với tỉ lệ xấp xỉ $1 : 1$. Ở người, gene $SRY$ trên NST $Y$ khởi động sự phát triển của tinh hoàn, quy định giới nam.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Môi trường cũng ảnh hưởng đến giới tính',
          text: 'Ở một số loài, giới tính còn chịu ảnh hưởng của môi trường: nhiệt độ ấp trứng quyết định giới tính ở nhiều loài rùa, cá sấu; hormone sinh dục có thể làm thay đổi giới tính ở cá.',
        },
      ],
    },
    {
      heading: 'Di truyền liên kết với giới tính',
      blocks: [
        {
          type: 'p',
          text: 'Morgan phát hiện ở ruồi giấm một con đực mắt trắng (mắt bình thường màu đỏ) và làm phép lai thuận nghịch:',
        },
        {
          type: 'table',
          caption: 'Thí nghiệm của Morgan ($W$: mắt đỏ, $w$: mắt trắng)',
          head: ['Phép lai', 'P', '$F_1$', '$F_2$'],
          rows: [
            [
              'Lai thuận',
              '♀ mắt đỏ $X^WX^W$ × ♂ mắt trắng $X^wY$',
              '$100\\%$ mắt đỏ',
              '$3$ đỏ $: 1$ trắng; mắt trắng toàn là con đực',
            ],
            [
              'Lai nghịch',
              '♀ mắt trắng $X^wX^w$ × ♂ mắt đỏ $X^WY$',
              '♀ mắt đỏ, ♂ mắt trắng',
              '$1$ đỏ $: 1$ trắng ở cả hai giới',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Kết quả lai thuận và lai nghịch khác nhau, tính trạng phân bố không đều ở hai giới. Morgan giải thích: gene quy định màu mắt nằm trên NST $X$, không có allele tương ứng trên $Y$. Con đực chỉ cần một allele lặn $X^w$ đã biểu hiện mắt trắng.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Gene trên vùng không tương đồng của NST X',
          text: 'Gene trên NST $X$ di truyền chéo: allele trên $X$ của bố truyền cho con gái, rồi qua con gái truyền cho cháu trai. Tính trạng lặn biểu hiện ở giới dị giao tử ($XY$) nhiều hơn ở giới đồng giao tử. Ở người: bệnh mù màu đỏ – lục, bệnh máu khó đông gặp chủ yếu ở nam.',
        },
        { type: 'widget', name: 'pha-he' },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Gene trên vùng không tương đồng của NST Y',
          text: 'Gene trên NST $Y$ di truyền thẳng: chỉ biểu hiện ở giới dị giao tử và truyền từ bố cho tất cả con trai. Ví dụ ở người: tật có túm lông ở vành tai.',
        },
        {
          type: 'p',
          text: 'Ở gà ($ZZ$ là trống, $ZW$ là mái), gene $B$ quy định lông vằn trội hoàn toàn so với $b$ (lông không vằn), nằm trên $Z$. Phép lai trống không vằn $Z^bZ^b$ × mái vằn $Z^BW$ cho gà con trống $Z^BZ^b$ đều lông vằn và gà con mái $Z^bW$ đều không vằn.',
        },
      ],
    },
    {
      heading: 'Ứng dụng của di truyền liên kết với giới tính',
      blocks: [
        {
          type: 'list',
          items: [
            'Phân biệt giới tính sớm nhờ các gene liên kết với giới tính: phân biệt gà trống, gà mái từ khi mới nở theo màu lông; phân biệt tằm đực, tằm cái từ giai đoạn trứng theo màu trứng để chọn nuôi tằm đực (cho năng suất tơ cao hơn).',
            'Điều khiển tỉ lệ đực, cái theo nhu cầu sản xuất: chọn lọc tinh trùng mang $X$ để bò sữa đẻ nhiều bê cái; dùng hormone tạo đàn cá rô phi toàn đực (lớn nhanh).',
            'Trong y học: dựa vào quy luật di truyền liên kết với giới tính để tư vấn di truyền, dự đoán khả năng con mắc các bệnh như mù màu, máu khó đông.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Lựa chọn giới tính thai nhi',
          text: 'Ở người, việc lựa chọn giới tính thai nhi bị pháp luật Việt Nam nghiêm cấm vì gây mất cân bằng giới tính, để lại hậu quả lâu dài cho xã hội.',
        },
      ],
    },
  ],
  explore: {
    title: 'Bảng lai gene trên NST giới tính',
    instruction:
      'Chọn một tính trạng và kiểu gene của bố, mẹ (hoặc một phép lai mẫu). Bảng cho kiểu gene, kiểu hình của từng loại con theo giới. So sánh lai thuận và lai nghịch của Morgan, rồi thử phép lai ở gà để thấy vì sao phân biệt được trống mái từ lúc mới nở.',
  },
  examples: [
    {
      problem:
        'Ở người, bệnh mù màu đỏ – lục do allele lặn $m$ trên NST $X$ quy định, $M$ quy định nhìn màu bình thường. Một người phụ nữ nhìn màu bình thường có bố bị mù màu, lấy chồng nhìn màu bình thường. Tính xác suất họ sinh con trai bị mù màu, và xác suất con gái của họ bị mù màu.',
      steps: [
        'Người vợ bình thường nhận $X^m$ từ bố nên có kiểu gene $X^MX^m$; người chồng $X^MY$.',
        '$X^MX^m \\times X^MY$ cho $\\frac{1}{4} X^MX^M : \\frac{1}{4} X^MX^m : \\frac{1}{4} X^MY : \\frac{1}{4} X^mY$.',
        'Con trai mù màu ($X^mY$) chiếm $\\frac{1}{4}$ tổng số con (bằng $\\frac{1}{2}$ số con trai).',
        'Con gái luôn nhận $X^M$ của bố nên không bị mù màu (một nửa mang gene).',
      ],
      answer:
        'Xác suất sinh con trai mù màu là $\\frac{1}{4}$; con gái không bị mù màu (xác suất $0$).',
    },
    {
      problem:
        'Ở gà, $B$ (lông vằn) trội hoàn toàn so với $b$ (lông không vằn), gene nằm trên NST $Z$. Chọn cặp bố mẹ để có thể phân biệt gà trống, gà mái ngay khi mới nở theo màu lông.',
      steps: [
        'Cần gà con trống và gà con mái có màu lông khác nhau.',
        'Gà mái ($ZW$) nhận $Z$ của bố; gà trống nhận một $Z$ của bố và $Z$ của mẹ.',
        'Chọn trống không vằn $Z^bZ^b$ × mái vằn $Z^BW$: con trống $Z^BZ^b$ (vằn), con mái $Z^bW$ (không vằn).',
      ],
      answer: 'Trống lông không vằn × mái lông vằn: gà con vằn là trống, gà con không vằn là mái.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Ở chim (như gà), cặp NST giới tính của con trống và con mái lần lượt là',
      options: ['$ZZ$ và $ZW$', '$ZW$ và $ZZ$', '$XY$ và $XX$', '$XX$ và $XO$'],
      answer: 0,
      hints: ['Ở chim, giới dị giao tử là con mái.'],
      solution: 'Ở chim, con trống $ZZ$ (đồng giao tử), con mái $ZW$ (dị giao tử).',
    },
    {
      type: 'fraction',
      prompt:
        'Bệnh máu khó đông do allele lặn $h$ trên NST $X$ quy định. Mẹ $X^HX^h$ × bố $X^hY$. Xác suất sinh một đứa con bị máu khó đông là bao nhiêu?',
      answer: [1, 2],
      hints: ['Lập bảng: mẹ cho $X^H$, $X^h$; bố cho $X^h$, $Y$.'],
      solution:
        'Con: $X^HX^h$, $X^hX^h$, $X^HY$, $X^hY$ (mỗi loại $\\frac{1}{4}$). Bị bệnh: $X^hX^h$ và $X^hY$, tổng $\\frac{2}{4} = \\frac{1}{2}$.',
    },
    {
      type: 'choice',
      prompt:
        'Bố bị máu khó đông ($X^hY$), mẹ bình thường không mang allele bệnh ($X^HX^H$). Các con của họ',
      options: [
        'đều không bị bệnh; các con gái đều mang allele bệnh',
        'con trai bị bệnh, con gái bình thường',
        'con gái bị bệnh, con trai bình thường',
        'một nửa số con bị bệnh',
      ],
      answer: 0,
      hints: ['Con trai nhận $X$ từ mẹ, $Y$ từ bố.'],
      solution:
        'Con trai $X^HY$ (bình thường); con gái $X^HX^h$ (bình thường, mang allele bệnh). Allele của bố sẽ truyền qua con gái cho cháu trai: di truyền chéo.',
    },
    {
      type: 'choice',
      prompt:
        'Morgan cho ruồi cái mắt trắng $X^wX^w$ lai với ruồi đực mắt đỏ $X^WY$. Kết quả $F_1$ là',
      options: [
        'tất cả con cái mắt đỏ, tất cả con đực mắt trắng',
        'tất cả mắt đỏ',
        'tất cả con cái mắt trắng, tất cả con đực mắt đỏ',
        '$3$ mắt đỏ $: 1$ mắt trắng',
      ],
      answer: 0,
      hints: ['Con đực nhận $X$ từ mẹ.'],
      solution:
        'Con cái $X^WX^w$ (mắt đỏ), con đực $X^wY$ (mắt trắng) — kết quả khác phép lai thuận.',
    },
    {
      type: 'text',
      prompt:
        'Allele trên NST $X$ của ông ngoại truyền cho mẹ rồi biểu hiện ở cháu trai. Kiểu di truyền này gọi là gì?',
      accept: ['di truyền chéo', 'di truyen cheo'],
      hints: ['Allele "chéo" qua giới khác ở thế hệ giữa.'],
      solution: 'Đó là di truyền chéo, đặc trưng của gene trên NST $X$.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các đặc điểm của gene nằm trên vùng không tương đồng của NST $Y$.',
      options: [
        'Chỉ biểu hiện ở giới dị giao tử ($XY$)',
        'Truyền từ bố cho tất cả con trai',
        'Truyền từ bố cho con gái rồi cho cháu trai',
        'Biểu hiện ở nữ nhiều hơn ở nam',
      ],
      answers: [0, 1],
      hints: ['Chỉ con trai nhận NST $Y$ của bố.'],
      solution:
        'Gene trên $Y$ chỉ có ở giới $XY$ và di truyền thẳng từ bố sang con trai. Truyền qua con gái là di truyền chéo của gene trên $X$.',
    },
    {
      type: 'fraction',
      prompt:
        'Mẹ mang allele mù màu $X^MX^m$, bố bị mù màu $X^mY$. Xác suất đứa con đầu lòng là con gái bị mù màu là bao nhiêu?',
      answer: [1, 4],
      hints: ['Con gái mù màu có kiểu gene $X^mX^m$.'],
      solution:
        'Mẹ cho $X^m$ với xác suất $\\frac{1}{2}$, bố cho $X^m$ với xác suất $\\frac{1}{2}$: $X^mX^m = \\frac{1}{4}$.',
    },
    {
      type: 'number',
      prompt: 'Tế bào sinh dưỡng của người ($2n = 46$) có bao nhiêu NST thường?',
      answer: 44,
      hints: ['Trừ đi cặp NST giới tính.'],
      solution: '$46 - 2 = 44$ NST thường ($22$ cặp).',
    },
    {
      type: 'choice',
      prompt: 'Vì sao bệnh do allele lặn trên NST $X$ gặp ở nam nhiều hơn ở nữ?',
      options: [
        'Nam chỉ có một NST $X$, chỉ cần một allele lặn là biểu hiện; nữ cần hai allele lặn',
        'Allele lặn trên $X$ trở thành trội ở nam',
        'NST $Y$ mang allele gây bệnh',
        'Nữ không bao giờ nhận allele lặn từ bố',
      ],
      answer: 0,
      hints: ['So sánh số NST $X$ ở nam và nữ.'],
      solution:
        'Nam $XY$ chỉ có một $X$, không có allele tương ứng trên $Y$, nên một allele lặn đã biểu hiện. Nữ $XX$ cần đồng hợp lặn mới biểu hiện.',
    },
  ],
  takeaways: [
    'NST giới tính mang gene quy định giới tính; các kiểu: $XX/XY$ (người, ruồi giấm), $ZW/ZZ$ (chim, bướm), $XX/XO$ (châu chấu).',
    'Giới dị giao tử cho hai loại giao tử ngang nhau, nên tỉ lệ đực : cái xấp xỉ $1 : 1$; môi trường cũng có thể ảnh hưởng đến giới tính.',
    'Gene trên $X$ (không có allele trên $Y$): lai thuận nghịch khác nhau, di truyền chéo, tính trạng lặn gặp nhiều ở giới $XY$.',
    'Gene trên $Y$: di truyền thẳng từ bố cho con trai.',
    'Ứng dụng: phân biệt giới tính sớm (gà, tằm), điều khiển tỉ lệ đực cái, tư vấn di truyền.',
  ],
};
