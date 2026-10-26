/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Thành phần hoá học, cấu trúc và tính phân cực của phân tử nước; vai trò của nước đối với sinh vật; khái niệm và vai trò của các chất dinh dưỡng đối với thực vật và động vật.',
  intro:
    'Một cây cổ thụ cao hàng chục mét lớn lên từ một hạt nhỏ xíu; em cũng lớn lên từ một tế bào. Để làm được điều đó, cơ thể phải lấy vào thật nhiều nước và chất dinh dưỡng từ môi trường. Vì sao nước lại quan trọng đến mức thiếu nước vài ngày con người đã có thể tử vong? Bí mật nằm ở cấu tạo rất đặc biệt của phân tử nước. Bài học này cũng cho em biết các chất dinh dưỡng giúp cơ thể sinh vật như thế nào.',
  objectives: [
    'Nêu được thành phần hoá học và cấu trúc của phân tử nước; giải thích được vì sao phân tử nước có tính phân cực và vì sao nước là dung môi hoà tan nhiều chất.',
    'Nêu được vai trò của nước đối với sinh vật.',
    'Nêu được khái niệm chất dinh dưỡng và vai trò của chất dinh dưỡng đối với cơ thể sinh vật.',
  ],
  sections: [
    {
      heading: 'Thành phần, cấu trúc và tính chất của nước',
      blocks: [
        {
          type: 'p',
          text: 'Phân tử nước ($\\text{H}_2\\text{O}$) được cấu tạo từ một nguyên tử oxygen liên kết với hai nguyên tử hydrogen bằng liên kết cộng hoá trị. Hai liên kết không nằm trên một đường thẳng mà tạo với nhau một góc khoảng $104{,}5^\\circ$, nên phân tử nước có dạng gấp khúc.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tính phân cực của phân tử nước',
          text: 'Trong mỗi liên kết, cặp electron dùng chung bị lệch về phía nguyên tử oxygen. Vì vậy đầu oxygen của phân tử nước mang một phần điện tích âm ($\\delta^-$), còn hai đầu hydrogen mang một phần điện tích dương ($\\delta^+$). Ta nói phân tử nước có tính phân cực.',
        },
        {
          type: 'p',
          text: 'Nhờ tính phân cực, đầu $\\delta^+$ (hydrogen) của phân tử nước này hút đầu $\\delta^-$ (oxygen) của phân tử nước bên cạnh, tạo thành liên kết hydrogen. Nhấn vào các số trên hình để tìm hiểu từng bộ phận:',
        },
        { type: 'widget', name: 'cau-tao' },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Nước là dung môi hoà tan nhiều chất',
          text: 'Các phân tử nước cũng hút được các chất có cực hoặc tích điện. Ví dụ, khi cho muối ăn vào nước, đầu $\\delta^-$ của các phân tử nước hút ion $\\text{Na}^+$, đầu $\\delta^+$ hút ion $\\text{Cl}^-$, kéo các ion tách ra và bao quanh chúng: muối tan. Đường cũng tan tốt trong nước. Ngược lại, dầu ăn không phân cực nên nước không hút được, dầu không tan mà nổi thành lớp riêng.',
        },
      ],
    },
    {
      heading: 'Vai trò của nước đối với sinh vật',
      blocks: [
        {
          type: 'list',
          items: [
            'Nước là thành phần chủ yếu tham gia cấu tạo nên tế bào và cơ thể sinh vật (ở người, nước chiếm khoảng $60\\%$ đến $70\\%$ khối lượng cơ thể).',
            'Nước là dung môi hoà tan nhiều chất cần thiết cho cơ thể.',
            'Nước là môi trường và là nguyên liệu của nhiều quá trình sống, như quang hợp, tiêu hoá, hấp thụ chất dinh dưỡng.',
            'Nước tham gia vận chuyển các chất trong cơ thể (máu, nước tiểu, mồ hôi, nhựa cây đều chứa phần lớn là nước).',
            'Nước góp phần điều hoà thân nhiệt: thoát hơi nước ở lá giúp hạ nhiệt độ lá, toát mồ hôi giúp cơ thể người mát hơn.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Khi cơ thể thiếu nước',
          text: 'Thiếu nước, các hoạt động sống bị rối loạn: cây bị héo, sinh trưởng kém, có thể chết; người mệt mỏi, khát, da khô, nếu mất nhiều nước (do sốt cao, nôn, tiêu chảy) có thể nguy hiểm đến tính mạng. Khi bị mất nước cần uống nhiều nước, uống dung dịch oresol theo hướng dẫn, ăn thức ăn lỏng, hoặc truyền dịch theo chỉ định của bác sĩ.',
        },
      ],
    },
    {
      heading: 'Vai trò của chất dinh dưỡng đối với sinh vật',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Chất dinh dưỡng',
          text: 'Chất dinh dưỡng là các chất hay hợp chất hoá học có trong thức ăn (hoặc trong môi trường) mà cơ thể sinh vật lấy vào và sử dụng làm nguyên liệu cấu tạo cơ thể, cung cấp năng lượng cho các hoạt động sống, và điều hoà các hoạt động sống.',
        },
        {
          type: 'p',
          text: 'Ở thực vật, rễ hấp thụ nước và các chất khoáng hoà tan từ đất. Các nguyên tố đa lượng (như C, H, O, N, P, K) cây cần với lượng lớn, tham gia cấu tạo nên các chất hữu cơ như protein, diệp lục. Các nguyên tố vi lượng (như Fe, Cu, Zn, Mn) cây cần rất ít nhưng không thể thiếu, chủ yếu tham gia điều hoà các hoạt động sống. Thiếu hay thừa chất dinh dưỡng, cây có biểu hiện bất thường: ví dụ thiếu nitrogen, cây sinh trưởng kém, lá nhỏ, lá non màu xanh nhạt, lá già vàng úa và rụng sớm.',
        },
        {
          type: 'table',
          caption: 'Một số chất dinh dưỡng chủ yếu ở người và động vật',
          head: ['Chất dinh dưỡng', 'Vai trò chính', 'Nguồn thực phẩm'],
          rows: [
            [
              'Carbohydrate (tinh bột, đường)',
              'Cung cấp năng lượng chủ yếu cho các hoạt động sống; tham gia cấu tạo tế bào',
              'Gạo, ngô, khoai, sắn, bánh mì, mía',
            ],
            [
              'Protein (chất đạm)',
              'Nguyên liệu cấu tạo tế bào và cơ thể; tham gia điều hoà các hoạt động sống; có thể cung cấp năng lượng',
              'Thịt, cá, trứng, sữa, các loại đậu',
            ],
            [
              'Lipid (chất béo)',
              'Dự trữ và cung cấp năng lượng; cấu tạo màng tế bào; hoà tan một số vitamin (A, D, E, K)',
              'Mỡ động vật, dầu thực vật, bơ, lạc, vừng',
            ],
            [
              'Vitamin',
              'Cần lượng nhỏ, điều hoà các hoạt động sống của cơ thể',
              'Rau xanh, quả chín, gan, trứng, sữa',
            ],
            [
              'Chất khoáng',
              'Tham gia cấu tạo cơ thể (calcium trong xương, răng; sắt trong hồng cầu) và điều hoà hoạt động sống',
              'Sữa, tôm, cua, cá, rau xanh, muối iodine',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vận dụng',
          text: 'Mỗi loài cây cần các chất dinh dưỡng khác nhau, nên người nông dân bón phân hợp lí và luân canh (thay đổi loại cây trồng trên cùng một thửa ruộng qua các vụ) để đất không bị cạn kiệt một loại chất dinh dưỡng. Con người cần ăn uống đủ chất, đa dạng thức ăn và uống đủ nước mỗi ngày.',
        },
      ],
    },
  ],
  explore: {
    title: 'Mô hình phân tử nước phân cực',
    instruction:
      'Kéo các phân tử nước (hoặc chọn rồi dùng phím mũi tên); dùng nút xoay hoặc phím R để quay phân tử. Đưa đầu H (δ+) của một phân tử lại gần đầu O (δ−) của phân tử khác để thấy liên kết hydrogen. Chọn "Muối ăn" và xếp các phân tử nước quanh ion Na⁺, Cl⁻; chọn "Dầu ăn" để thấy nước không hút được dầu.',
  },
  examples: [
    {
      problem: 'Vì sao muối ăn tan được trong nước còn dầu ăn thì không?',
      steps: [
        'Phân tử nước phân cực: đầu oxygen mang một phần điện tích âm, đầu hydrogen mang một phần điện tích dương.',
        'Muối ăn gồm các ion $\\text{Na}^+$ và $\\text{Cl}^-$ tích điện. Đầu $\\delta^-$ của phân tử nước hút ion $\\text{Na}^+$, đầu $\\delta^+$ hút ion $\\text{Cl}^-$.',
        'Các phân tử nước bao quanh và kéo từng ion tách ra khỏi tinh thể muối, phân tán đều trong nước: muối tan.',
        'Dầu ăn không phân cực, không tích điện nên nước không hút được các phân tử dầu; dầu không tan, nổi lên trên vì nhẹ hơn nước.',
      ],
      answer:
        'Nhờ tính phân cực, nước hút được các ion của muối nên muối tan; dầu không phân cực nên nước không hút được, dầu không tan.',
    },
    {
      problem:
        'Em hãy đề xuất một thí nghiệm chứng minh nếu thiếu nước lâu ngày, cây sẽ bị héo, giảm sức sống và có thể chết.',
      steps: [
        'Chọn hai chậu cây cùng loài, kích thước tương đương, trồng trong cùng loại đất.',
        'Đặt hai chậu ở cùng điều kiện ánh sáng, nhiệt độ, chất dinh dưỡng; chỉ khác nhau về nước.',
        'Chậu A tưới nước đều đặn hằng ngày (đối chứng); chậu B không tưới nước.',
        'Theo dõi trong nhiều ngày, ghi lại hình dạng, màu lá, độ cứng của thân ở hai chậu, rồi rút ra kết luận.',
      ],
      answer:
        'Chậu không tưới nước dần héo, lá vàng, có thể chết, trong khi chậu được tưới vẫn tươi tốt: chứng tỏ nước rất cần cho sự sống của cây.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Phân tử nước được cấu tạo như thế nào?',
      options: [
        'Hai nguyên tử oxygen liên kết với một nguyên tử hydrogen',
        'Một nguyên tử oxygen liên kết với hai nguyên tử hydrogen bằng liên kết cộng hoá trị',
        'Một nguyên tử oxygen liên kết với một nguyên tử hydrogen',
        'Một nguyên tử carbon liên kết với hai nguyên tử oxygen',
      ],
      answer: 1,
      hints: ['Công thức hoá học của nước là $\\text{H}_2\\text{O}$.'],
      solution:
        'Phân tử nước $\\text{H}_2\\text{O}$ gồm một nguyên tử oxygen liên kết với hai nguyên tử hydrogen bằng liên kết cộng hoá trị.',
    },
    {
      type: 'choice',
      prompt: 'Tính phân cực của phân tử nước thể hiện ở điểm nào?',
      options: [
        'Đầu oxygen mang một phần điện tích dương, đầu hydrogen mang một phần điện tích âm',
        'Đầu oxygen mang một phần điện tích âm, hai đầu hydrogen mang một phần điện tích dương',
        'Cả phân tử mang điện tích dương',
        'Phân tử nước không mang điện ở bất kì đầu nào',
      ],
      answer: 1,
      hints: ['Cặp electron dùng chung bị lệch về phía nguyên tử nào?'],
      solution:
        'Cặp electron dùng chung lệch về phía oxygen, nên đầu oxygen mang một phần điện tích âm ($\\delta^-$), hai đầu hydrogen mang một phần điện tích dương ($\\delta^+$).',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các chất tan tốt trong nước.',
      options: ['Muối ăn', 'Đường', 'Dầu ăn', 'Mỡ lợn'],
      answers: [0, 1],
      hints: ['Nước hút được các chất có cực hoặc tích điện, không hút được chất không phân cực.'],
      solution:
        'Muối ăn (gồm các ion) và đường (phân tử có cực) tan tốt trong nước. Dầu ăn, mỡ là chất béo không phân cực nên không tan trong nước.',
    },
    {
      type: 'choice',
      prompt:
        'Khi muối ăn tan trong nước, đầu nào của phân tử nước hướng về phía ion $\\text{Na}^+$?',
      options: [
        'Đầu oxygen ($\\delta^-$)',
        'Đầu hydrogen ($\\delta^+$)',
        'Cả hai đầu như nhau',
        'Không đầu nào, nước đẩy ion $\\text{Na}^+$ ra xa',
      ],
      answer: 0,
      hints: ['Điện tích trái dấu thì hút nhau. $\\text{Na}^+$ mang điện gì?'],
      solution:
        'Ion $\\text{Na}^+$ mang điện dương nên hút đầu mang một phần điện tích âm của phân tử nước, tức đầu oxygen.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các vai trò của nước đối với sinh vật.',
      options: [
        'Là thành phần chủ yếu cấu tạo nên tế bào và cơ thể',
        'Là dung môi hoà tan nhiều chất',
        'Là nguyên liệu và môi trường của nhiều quá trình sống',
        'Vận chuyển các chất trong cơ thể',
        'Góp phần điều hoà nhiệt độ cơ thể',
        'Cung cấp năng lượng chủ yếu cho cơ thể',
      ],
      answers: [0, 1, 2, 3, 4],
      hints: ['Nước không bị phân giải để giải phóng năng lượng như glucose.'],
      solution:
        'Nước cấu tạo tế bào, là dung môi, là nguyên liệu và môi trường của các quá trình sống, vận chuyển các chất và điều hoà nhiệt độ. Nước không cung cấp năng lượng; năng lượng chủ yếu do carbohydrate cung cấp.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi chất dinh dưỡng với vai trò chính của nó.',
      left: ['Carbohydrate', 'Protein', 'Lipid', 'Vitamin'],
      right: [
        'Cần lượng nhỏ, điều hoà các hoạt động sống',
        'Cung cấp năng lượng chủ yếu',
        'Dự trữ năng lượng, cấu tạo màng tế bào',
        'Nguyên liệu cấu tạo tế bào và cơ thể',
      ],
      pairs: [
        [0, 1],
        [1, 3],
        [2, 2],
        [3, 0],
      ],
      hints: ['Cơm, bánh mì giàu chất gì? Thịt, cá, trứng giàu chất gì?'],
      solution:
        'Carbohydrate: năng lượng chủ yếu. Protein: cấu tạo tế bào, cơ thể. Lipid: dự trữ năng lượng, cấu tạo màng tế bào. Vitamin: cần lượng nhỏ, điều hoà hoạt động sống.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao khi bị sốt cao, nôn hoặc tiêu chảy, người bệnh cần được bù nước?',
      options: [
        'Vì cơ thể mất nhiều nước, các hoạt động sống bị rối loạn, có thể nguy hiểm đến tính mạng',
        'Vì nước cung cấp năng lượng thay thức ăn',
        'Vì nước làm tăng nhiệt độ cơ thể',
        'Vì cơ thể không còn cần chất dinh dưỡng',
      ],
      answer: 0,
      hints: ['Mất nhiều nước thì máu, các quá trình sống trong tế bào bị ảnh hưởng ra sao?'],
      solution:
        'Sốt cao, nôn, tiêu chảy làm cơ thể mất nhiều nước; thiếu nước, các quá trình sống bị rối loạn, có thể nguy hiểm đến tính mạng. Cần uống nhiều nước, dung dịch oresol hoặc truyền dịch theo chỉ định.',
    },
    {
      type: 'choice',
      prompt:
        'Vì sao người nông dân thường luân canh, trồng các loại cây khác nhau trên cùng một thửa ruộng qua các vụ?',
      options: [
        'Vì mỗi loài cây cần các chất dinh dưỡng khác nhau, luân canh giúp đất không bị cạn kiệt một loại chất dinh dưỡng',
        'Vì cây trồng không cần chất dinh dưỡng',
        'Vì đất chỉ trồng được một loại cây duy nhất',
        'Vì luân canh làm đất mất hết chất khoáng',
      ],
      answer: 0,
      hints: ['Trồng mãi một loại cây thì loại chất dinh dưỡng mà cây đó cần sẽ ra sao?'],
      solution:
        'Mỗi loài cây lấy từ đất các chất dinh dưỡng với tỉ lệ khác nhau. Luân canh giúp đất không cạn kiệt một loại chất, đồng thời hạn chế sâu bệnh, cỏ dại đặc trưng của một loại cây.',
    },
  ],
  takeaways: [
    'Phân tử nước gồm một nguyên tử O liên kết cộng hoá trị với hai nguyên tử H; đầu O mang một phần điện tích âm, đầu H mang một phần điện tích dương: nước có tính phân cực.',
    'Nhờ tính phân cực, các phân tử nước liên kết với nhau (liên kết hydrogen) và hút được các chất có cực, tích điện nên nước là dung môi hoà tan nhiều chất.',
    'Nước cấu tạo tế bào, là dung môi, nguyên liệu và môi trường của các quá trình sống, vận chuyển các chất, điều hoà thân nhiệt.',
    'Chất dinh dưỡng được cơ thể dùng làm nguyên liệu cấu tạo, cung cấp năng lượng và điều hoà hoạt động sống: carbohydrate, protein, lipid, vitamin, chất khoáng.',
  ],
};
