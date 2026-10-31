/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'NST giới tính và NST thường; ở người nữ mang XX, nam mang XY; giới tính được xác định nhờ sự phân li của cặp NST giới tính trong giảm phân và tổ hợp lại trong thụ tinh, cho tỉ lệ nam : nữ xấp xỉ 1 : 1.',
  intro:
    'Có người cho rằng sinh con trai hay con gái là do người mẹ. Quan niệm đó đúng hay sai? Vì sao trong một quần thể lớn, số bé trai và bé gái mới sinh luôn xấp xỉ bằng nhau? Trong bài này, em sẽ cho trứng và tinh trùng gặp nhau ngẫu nhiên hàng nghìn lần và tự đếm tỉ lệ con trai, con gái.',
  objectives: [
    'Nêu được khái niệm NST giới tính và NST thường; phân biệt được hai loại NST này.',
    'Trình bày được cơ chế xác định giới tính ở người bằng sơ đồ lai.',
    'Giải thích được vì sao tỉ lệ nam : nữ xấp xỉ $1 : 1$.',
    'Nêu được một số yếu tố ảnh hưởng đến sự phân hoá giới tính và ứng dụng trong sản xuất.',
  ],
  sections: [
    {
      heading: 'NST giới tính và NST thường',
      blocks: [
        {
          type: 'p',
          text: 'Trong tế bào lưỡng bội của nhiều loài, ngoài các cặp NST thường còn có một cặp NST giới tính. Ở người, tế bào sinh dưỡng có $46$ NST: $44$ NST thường ($22$ cặp) và $2$ NST giới tính. Nữ giới mang cặp NST giới tính XX, nam giới mang cặp XY.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Hai loại NST',
          text: 'NST giới tính là NST mang gene quy định giới tính (tính đực, cái); ngoài ra nó còn mang một số gene quy định tính trạng thường. NST thường là các NST còn lại, mang gene quy định các tính trạng thường của cơ thể.',
        },
        {
          type: 'table',
          caption: 'Phân biệt NST thường và NST giới tính',
          head: ['Đặc điểm', 'NST thường', 'NST giới tính'],
          rows: [
            ['Số lượng', 'Nhiều cặp (ở người $22$ cặp)', 'Thường chỉ có $1$ cặp'],
            [
              'Đặc điểm cặp NST',
              'Luôn là cặp tương đồng, giống nhau ở hai giới',
              'Tương đồng (XX) hoặc không tương đồng (XY), khác nhau giữa giới đực và giới cái',
            ],
            [
              'Chức năng',
              'Mang gene quy định tính trạng thường',
              'Mang gene quy định giới tính và một số tính trạng thường',
            ],
          ],
        },
        {
          type: 'p',
          text: 'NST Y nhỏ hơn NST X rất nhiều. Trên NST Y có gene SRY quyết định sự phát triển của tinh hoàn, nên hợp tử có NST Y phát triển thành nam.',
        },
        {
          type: 'table',
          caption: 'Cặp NST giới tính ở một số loài',
          head: ['Loài', 'Giới cái', 'Giới đực'],
          rows: [
            ['Người, động vật có vú, ruồi giấm', 'XX', 'XY'],
            ['Chim (gà, vịt), bướm', 'XY (còn kí hiệu ZW)', 'XX (còn kí hiệu ZZ)'],
            ['Châu chấu', 'XX', 'XO (chỉ có một NST X)'],
          ],
        },
      ],
    },
    {
      heading: 'Cơ chế xác định giới tính',
      blocks: [
        {
          type: 'p',
          text: 'Giới tính được xác định nhờ sự phân li của cặp NST giới tính trong giảm phân tạo giao tử và sự tổ hợp lại của chúng trong thụ tinh. Ở người (kí hiệu A là một NST thường):',
        },
        {
          type: 'list',
          items: [
            'P: mẹ $44A + XX$ × bố $44A + XY$.',
            'Giao tử: mẹ cho một loại trứng $22A + X$; bố cho hai loại tinh trùng $22A + X$ và $22A + Y$ với tỉ lệ ngang nhau.',
            'Thụ tinh: trứng $22A + X$ kết hợp với tinh trùng $22A + X$ tạo hợp tử $44A + XX$, phát triển thành con gái; kết hợp với tinh trùng $22A + Y$ tạo hợp tử $44A + XY$, phát triển thành con trai.',
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Tỉ lệ nam : nữ xấp xỉ 1 : 1',
          text: 'Bố tạo ra hai loại tinh trùng mang X và mang Y với số lượng ngang nhau; hai loại tinh trùng này có sức sống và khả năng thụ tinh ngang nhau, kết hợp ngẫu nhiên với trứng. Vì vậy tỉ lệ con trai : con gái xấp xỉ $1 : 1$. Tỉ lệ này chỉ đúng khi số lượng cá thể đủ lớn; trong một gia đình ít con, tỉ lệ có thể khác xa $1 : 1$.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Giới tính của con do tinh trùng quyết định',
          text: 'Mẹ chỉ cho một loại trứng mang X, nên con trai hay con gái phụ thuộc vào trứng được thụ tinh bởi tinh trùng mang X hay mang Y. Quan niệm người mẹ quyết định sinh con trai hay con gái là sai. Pháp luật Việt Nam nghiêm cấm lựa chọn giới tính thai nhi, vì làm mất cân bằng giới tính trong xã hội.',
        },
      ],
    },
    {
      heading: 'Các yếu tố ảnh hưởng đến sự phân hoá giới tính',
      blocks: [
        {
          type: 'p',
          text: 'Giới tính được xác định ngay khi thụ tinh, nhưng sự phân hoá giới tính trong quá trình phát triển của cá thể còn chịu ảnh hưởng của các yếu tố bên trong và bên ngoài cơ thể:',
        },
        {
          type: 'list',
          items: [
            'Hormone sinh dục: nếu cho hormone sinh dục tác động vào giai đoạn sớm của sự phát triển cá thể thì có thể làm biến đổi giới tính, dù cặp NST giới tính không đổi. Ví dụ: dùng methyltestosterone tác động vào cá vàng cái có thể làm cá cái biến thành cá đực.',
            'Điều kiện môi trường: nhiệt độ, ánh sáng, nồng độ CO₂, … Ví dụ: ở một số loài rùa, trứng ấp ở nhiệt độ thấp nở ra nhiều con đực, ấp ở nhiệt độ cao nở ra nhiều con cái.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Ứng dụng',
          text: 'Nắm được cơ chế xác định giới tính và các yếu tố ảnh hưởng, người ta chủ động điều chỉnh tỉ lệ đực : cái của vật nuôi cho phù hợp mục đích sản xuất: nuôi nhiều tằm đực vì tằm đực cho nhiều tơ hơn; nuôi nhiều bò cái để lấy sữa, nhiều gà mái để lấy trứng.',
        },
      ],
    },
  ],
  explore: {
    title: 'Thụ tinh ngẫu nhiên và tỉ lệ đực : cái',
    instruction:
      'Bấm "Thụ tinh 1 lần" vài lần và xem trứng gặp tinh trùng nào, hợp tử là con trai hay con gái. Sau đó thụ tinh $10$, $100$, $1000$ lần và quan sát đường tỉ lệ tiến dần về $50\\%$. Chuyển sang gà để thấy ở loài này giới cái mới cho hai loại giao tử.',
  },
  examples: [
    {
      problem:
        'Viết sơ đồ giải thích cơ chế xác định giới tính ở người. Vì sao tỉ lệ con trai : con gái xấp xỉ $1 : 1$?',
      steps: [
        'P: mẹ $44A + XX$ × bố $44A + XY$.',
        'G: mẹ cho $1$ loại trứng $22A + X$; bố cho $2$ loại tinh trùng $22A + X$ và $22A + Y$ tỉ lệ $1 : 1$.',
        'F: $44A + XX$ (con gái) : $44A + XY$ (con trai) $= 1 : 1$.',
        'Hai loại tinh trùng có số lượng, sức sống và khả năng thụ tinh ngang nhau nên xác suất sinh con trai và con gái mỗi lần đều bằng $\\dfrac{1}{2}$.',
      ],
      answer: 'Con gái $44A + XX$ : con trai $44A + XY$ $= 1 : 1$, xét trên số lượng lớn.',
    },
    {
      problem:
        'Ruồi giấm có $2n = 8$, con cái mang cặp NST giới tính XX, con đực mang XY. Viết bộ NST của ruồi cái, ruồi đực và các loại giao tử của chúng.',
      steps: [
        '$8$ NST gồm $3$ cặp NST thường ($6A$) và $1$ cặp NST giới tính.',
        'Ruồi cái: $6A + XX$, cho một loại trứng $3A + X$.',
        'Ruồi đực: $6A + XY$, cho hai loại tinh trùng $3A + X$ và $3A + Y$.',
      ],
      answer: 'Cái $6A + XX$ → trứng $3A + X$; đực $6A + XY$ → tinh trùng $3A + X$, $3A + Y$.',
    },
    {
      problem:
        'Một cặp vợ chồng đã có hai con gái. Người chồng cho rằng lần sinh thứ ba chắc chắn là con trai. Em hãy giải thích.',
      steps: [
        'Mỗi lần thụ tinh, trứng X gặp ngẫu nhiên tinh trùng X hoặc Y với khả năng ngang nhau.',
        'Kết quả các lần sinh trước không ảnh hưởng đến lần sinh sau.',
        'Vì vậy xác suất sinh con trai ở lần thứ ba vẫn là $\\dfrac{1}{2}$.',
      ],
      answer:
        'Không chắc chắn: lần sinh thứ ba có xác suất con trai là $\\dfrac{1}{2}$, như mọi lần sinh khác; tỉ lệ $1 : 1$ chỉ thể hiện trên số lượng lớn.',
    },
  ],
  practice: [
    {
      type: 'number',
      prompt: 'Tế bào sinh dưỡng của người có bao nhiêu NST thường?',
      answer: 44,
      hints: ['Người có $2n = 46$, trong đó có một cặp NST giới tính.'],
      solution: '$46 - 2 = 44$ NST thường ($22$ cặp).',
    },
    {
      type: 'number',
      prompt: 'Một tinh trùng bình thường của người có bao nhiêu NST thường?',
      answer: 22,
      hints: ['Tinh trùng mang bộ NST đơn bội $n = 23$.'],
      solution: 'Tinh trùng có $22A + X$ hoặc $22A + Y$, tức là $22$ NST thường.',
    },
    {
      type: 'choice',
      prompt: 'Ở người, giới tính của con được quyết định khi',
      options: [
        'trứng được thụ tinh bởi tinh trùng mang X hay mang Y',
        'mẹ tạo ra trứng mang X hay mang Y',
        'thai nhi phát triển đến tháng thứ ba',
        'hợp tử nguyên phân lần đầu tiên',
      ],
      answer: 0,
      hints: ['Mẹ mang XX nên chỉ cho một loại trứng.'],
      solution:
        'Mẹ chỉ cho trứng mang X; con là trai hay gái tuỳ trứng được thụ tinh bởi tinh trùng mang Y hay mang X, tức là được quyết định ngay lúc thụ tinh.',
    },
    {
      type: 'fraction',
      prompt:
        'Mỗi lần sinh, xác suất một cặp vợ chồng bình thường sinh được con trai là bao nhiêu?',
      answer: [1, 2],
      hints: ['Bố cho hai loại tinh trùng với tỉ lệ ngang nhau.'],
      solution:
        'Tinh trùng X và Y có tỉ lệ $1 : 1$, nên xác suất sinh con trai là $\\dfrac{1}{2}$.',
    },
    {
      type: 'fraction',
      prompt: 'Một cặp vợ chồng sinh hai con. Xác suất để cả hai đều là con gái là bao nhiêu?',
      answer: [1, 4],
      hints: [
        'Mỗi lần sinh độc lập, xác suất con gái là $\\dfrac{1}{2}$.',
        'Nhân xác suất của hai lần sinh.',
      ],
      solution: '$\\dfrac{1}{2} \\cdot \\dfrac{1}{2} = \\dfrac{1}{4}$.',
    },
    {
      type: 'choice',
      prompt:
        'Ở gà, gà mái mang cặp NST giới tính XY (ZW), gà trống mang XX (ZZ). Giới tính của gà con do',
      options: [
        'trứng của gà mái quyết định',
        'tinh trùng của gà trống quyết định',
        'nhiệt độ ấp trứng quyết định hoàn toàn',
        'cả hai bố mẹ quyết định như nhau',
      ],
      answer: 0,
      hints: ['Giới nào cho hai loại giao tử thì giới đó quyết định giới tính của con.'],
      solution:
        'Gà trống XX chỉ cho một loại tinh trùng X; gà mái XY cho hai loại trứng X và Y. Vì vậy giới tính của gà con do loại trứng của gà mái quyết định.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các đặc điểm đúng với NST giới tính.',
      options: [
        'Mang gene quy định giới tính',
        'Có thể là cặp không tương đồng, ví dụ XY',
        'Có thể mang cả gene quy định tính trạng thường',
        'Ở người có $22$ cặp',
        'Luôn giống nhau ở giới đực và giới cái',
      ],
      answers: [0, 1, 2],
      hints: ['Ở người, nam và nữ khác nhau ở cặp NST nào?'],
      solution:
        'NST giới tính mang gene quy định giới tính và một số tính trạng thường, có thể tương đồng (XX) hoặc không tương đồng (XY). Ở người chỉ có $1$ cặp NST giới tính, khác nhau giữa nam và nữ; $22$ cặp là NST thường.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi loại tế bào ở người với bộ NST của nó.',
      left: ['Tế bào sinh dưỡng của nữ', 'Tế bào sinh dưỡng của nam', 'Trứng', 'Tinh trùng mang Y'],
      right: ['$44A + XX$', '$44A + XY$', '$22A + X$', '$22A + Y$', '$22A + XY$'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Giao tử chỉ mang một NST giới tính.'],
      solution:
        'Nữ $44A + XX$, nam $44A + XY$, trứng $22A + X$, tinh trùng mang Y là $22A + Y$. Không có giao tử bình thường nào mang cả X và Y.',
    },
    {
      type: 'choice',
      prompt: 'Tỉ lệ con trai : con gái xấp xỉ $1 : 1$ là nhờ',
      options: [
        'hai loại tinh trùng X và Y được tạo ra với số lượng ngang nhau, có sức sống và khả năng thụ tinh ngang nhau',
        'mẹ tạo ra hai loại trứng X và Y với số lượng ngang nhau',
        'số con trai sinh ra luôn bằng đúng số con gái trong mọi gia đình',
        'hormone sinh dục của mẹ điều chỉnh giới tính thai nhi',
      ],
      answer: 0,
      hints: ['Xét giới cho hai loại giao tử.'],
      solution:
        'Bố cho hai loại tinh trùng X, Y tỉ lệ $1 : 1$, sức sống và khả năng thụ tinh như nhau, kết hợp ngẫu nhiên với trứng X; tỉ lệ $1 : 1$ thể hiện trên số lượng lớn, không phải trong từng gia đình.',
    },
    {
      type: 'choice',
      prompt:
        'Dùng methyltestosterone tác động vào cá vàng cái ở giai đoạn sớm có thể làm cá cái biến thành cá đực. Ví dụ này cho thấy',
      options: [
        'hormone sinh dục ảnh hưởng đến sự phân hoá giới tính',
        'cặp NST giới tính của cá đã thay đổi',
        'giới tính chỉ do môi trường quyết định',
        'NST thường quyết định giới tính',
      ],
      answer: 0,
      hints: ['Hormone không làm thay đổi bộ NST.'],
      solution:
        'Cặp NST giới tính không đổi, nhưng hormone sinh dục tác động vào giai đoạn sớm làm thay đổi sự phân hoá giới tính.',
    },
  ],
  takeaways: [
    'NST giới tính mang gene quy định giới tính (và một số tính trạng thường), có thể là cặp XX hoặc XY; NST thường mang gene quy định tính trạng thường và luôn tồn tại thành cặp tương đồng.',
    'Ở người: nữ $44A + XX$, nam $44A + XY$; ở chim, bướm thì giới cái mang XY (ZW), giới đực mang XX (ZZ).',
    'Giới tính được xác định nhờ sự phân li của cặp NST giới tính khi giảm phân và tổ hợp lại khi thụ tinh; ở người, giới tính của con do tinh trùng X hay Y quyết định.',
    'Tỉ lệ nam : nữ xấp xỉ $1 : 1$ vì hai loại tinh trùng có số lượng, sức sống và khả năng thụ tinh ngang nhau; tỉ lệ này đúng trên số lượng lớn.',
    'Hormone sinh dục và điều kiện môi trường (nhiệt độ, …) ảnh hưởng đến sự phân hoá giới tính, được ứng dụng để điều chỉnh tỉ lệ đực : cái trong chăn nuôi.',
  ],
};
