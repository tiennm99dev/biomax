/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Các nguyên tố đa lượng và vi lượng trong tế bào, vai trò đặc biệt của carbon, cấu trúc phân cực của phân tử nước, liên kết hydrogen và vai trò của nước với sự sống.',
  intro:
    'Cơ thể em, một chiếc lá hay một con vi khuẩn đều được tạo nên từ những nguyên tố hoá học có sẵn trong đất, nước và không khí. Thế nhưng sinh vật không lấy các nguyên tố theo tỉ lệ có trong tự nhiên: chúng chọn lọc một số ít nguyên tố, trong đó bốn nguyên tố C, H, O, N chiếm khoảng $96\\%$ khối lượng cơ thể. Bài học này cho em biết tế bào được cấu tạo từ những nguyên tố nào, vì sao carbon lại quan trọng đến vậy, và vì sao nước, một phân tử rất nhỏ, lại không thể thiếu cho sự sống.',
  objectives: [
    'Nêu được khái niệm nguyên tố đa lượng, nguyên tố vi lượng và kể được tên một số nguyên tố mỗi nhóm.',
    'Trình bày được vai trò của các nguyên tố hoá học đối với tế bào và cơ thể; giải thích được vì sao thiếu nguyên tố vi lượng cũng gây bệnh.',
    'Giải thích được vì sao carbon là nguyên tố quan trọng trong việc tạo nên sự đa dạng của các phân tử sinh học.',
    'Mô tả được cấu trúc phân tử nước, giải thích được tính phân cực và liên kết hydrogen giữa các phân tử nước.',
    'Trình bày được vai trò sinh học của nước đối với tế bào và cơ thể.',
  ],
  sections: [
    {
      heading: 'Các nguyên tố hoá học trong tế bào',
      blocks: [
        {
          type: 'p',
          text: 'Trong số các nguyên tố hoá học có trong tự nhiên, chỉ khoảng $20$ đến $25$ nguyên tố là thành phần cấu tạo nên cơ thể sống. Các nguyên tố C, H, O, N chiếm tỉ lệ lớn nhất, khoảng $96\\%$ khối lượng cơ thể, vì chúng là thành phần chính của nước và của các phân tử hữu cơ.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nguyên tố đa lượng và vi lượng',
          text: 'Dựa vào tỉ lệ trong cơ thể, các nguyên tố được chia thành hai nhóm. Nguyên tố đa lượng có lượng chứa lớn hơn $0{,}01\\%$ khối lượng cơ thể, như C, H, O, N, Ca, P, K, S, Na, Cl, Mg. Nguyên tố vi lượng có lượng chứa nhỏ hơn $0{,}01\\%$, như Fe, Zn, Cu, I, Mn, Mo, Co, B.',
        },
        {
          type: 'table',
          caption: 'Tỉ lệ gần đúng của một số nguyên tố trong khối lượng cơ thể người',
          head: ['Nguyên tố', 'Tỉ lệ (%)', 'Nhóm', 'Một vai trò'],
          rows: [
            ['Oxygen (O)', '$65$', 'Đa lượng', 'Có trong nước và hầu hết chất hữu cơ'],
            ['Carbon (C)', '$18{,}5$', 'Đa lượng', 'Bộ khung của các phân tử hữu cơ'],
            ['Hydrogen (H)', '$9{,}5$', 'Đa lượng', 'Có trong nước và mọi chất hữu cơ'],
            ['Nitrogen (N)', '$3{,}2$', 'Đa lượng', 'Thành phần của protein, nucleic acid'],
            ['Calcium (Ca)', '$1{,}5$', 'Đa lượng', 'Thành phần của xương, răng'],
            ['Phosphorus (P)', '$1{,}0$', 'Đa lượng', 'Thành phần của nucleic acid, ATP'],
            ['Iron (Fe)', '$\\approx 0{,}006$', 'Vi lượng', 'Thành phần của hemoglobin'],
            ['Iodine (I)', '$\\approx 0{,}00002$', 'Vi lượng', 'Thành phần của hormone tuyến giáp'],
          ],
        },
        {
          type: 'p',
          text: 'Các nguyên tố đa lượng chủ yếu tham gia cấu tạo nên các đại phân tử hữu cơ (carbohydrate, lipid, protein, nucleic acid) và các cấu trúc của tế bào. Các nguyên tố vi lượng tuy chiếm lượng rất nhỏ nhưng lại là thành phần của nhiều enzyme, vitamin, hormone, nên tham gia điều hoà các quá trình sống. Ví dụ, magnesium (Mg) là thành phần của diệp lục; iron (Fe) là thành phần của hemoglobin trong hồng cầu; molybdenum (Mo) cần cho enzyme cố định nitrogen ở vi khuẩn.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Ít nhưng không thể thiếu',
          text: 'Thiếu một nguyên tố vi lượng cũng có thể gây bệnh: thiếu iodine làm tuyến giáp to ra (bệnh bướu cổ) và ở trẻ em có thể làm chậm phát triển trí tuệ; thiếu iron gây thiếu máu. Vì vậy, muối ăn thường được bổ sung iodine, và chế độ ăn cần đa dạng.',
        },
        {
          type: 'p',
          text: 'Ở phần khám phá bên dưới, em hãy tự xếp các nguyên tố trong cơ thể người vào hai nhóm. Mỗi nguyên tố đã xếp đúng hiện trên thước chia theo luỹ thừa của $10$, nên em thấy rõ các nguyên tố cách nhau hàng nghìn, hàng triệu lần.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Vai trò đặc biệt của carbon',
          text: 'Nguyên tử carbon có $4$ electron ở lớp ngoài cùng nên cùng lúc có thể tạo $4$ liên kết cộng hoá trị với các nguyên tử khác (C, H, O, N, ...). Các nguyên tử carbon liên kết với nhau tạo thành mạch carbon thẳng, phân nhánh hoặc mạch vòng, làm bộ khung cho vô số phân tử hữu cơ khác nhau. Nhờ vậy, carbon là nguyên tố quan trọng nhất trong việc tạo nên sự đa dạng của các phân tử sinh học.',
        },
        {
          type: 'p',
          text: 'Ví dụ, trong phân tử methane $\\mathrm{CH_4}$, nguyên tử carbon liên kết với bốn nguyên tử hydrogen bằng bốn liên kết cộng hoá trị:',
        },
        {
          type: 'tex',
          tex: '\\begin{array}{ccccc} & & \\mathrm{H} & & \\\\ & & | & & \\\\ \\mathrm{H} & - & \\mathrm{C} & - & \\mathrm{H} \\\\ & & | & & \\\\ & & \\mathrm{H} & & \\end{array}',
        },
      ],
    },
    {
      heading: 'Nước và vai trò của nước',
      blocks: [
        {
          type: 'p',
          text: 'Nước chiếm phần lớn khối lượng của tế bào và cơ thể sinh vật (ở người trưởng thành khoảng $65\\%$ đến $70\\%$, ở sứa có thể tới hơn $90\\%$). Những tính chất đặc biệt của nước đều bắt nguồn từ cấu trúc phân tử của nó.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Cấu trúc và tính phân cực của phân tử nước',
          text: 'Mỗi phân tử nước $\\mathrm{H_2O}$ gồm một nguyên tử oxygen liên kết với hai nguyên tử hydrogen bằng liên kết cộng hoá trị. Oxygen có độ âm điện lớn hơn hydrogen nên đôi electron dùng chung bị kéo lệch về phía oxygen: đầu oxygen tích điện âm một phần ($\\delta^-$), hai đầu hydrogen tích điện dương một phần ($\\delta^+$). Vì vậy, nước là phân tử phân cực.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Liên kết hydrogen',
          text: 'Đầu $\\delta^+$ (hydrogen) của phân tử nước này hút đầu $\\delta^-$ (oxygen) của phân tử nước bên cạnh, tạo thành liên kết hydrogen. Mỗi liên kết hydrogen rất yếu và liên tục đứt, tạo lại; nhưng số lượng rất lớn liên kết hydrogen làm cho các phân tử nước liên kết chặt với nhau.',
        },
        {
          type: 'p',
          text: 'Chạm vào các số trên hình để tìm hiểu từng phần của phân tử nước, rồi chuyển sang chế độ "Gọi tên" để tự kiểm tra.',
        },
        { type: 'widget', name: 'phan-tu-nuoc' },
        {
          type: 'table',
          caption: 'Tính chất của nước và ý nghĩa sinh học',
          head: ['Tính chất', 'Nguyên nhân', 'Ý nghĩa đối với sự sống'],
          rows: [
            [
              'Hoà tan nhiều chất',
              'Phân tử nước phân cực',
              'Là dung môi hoà tan các chất phân cực và ion; là môi trường của các phản ứng sinh hoá',
            ],
            [
              'Nhiệt dung riêng lớn',
              'Cần nhiều năng lượng để phá vỡ liên kết hydrogen',
              'Nhiệt độ của tế bào, cơ thể ít thay đổi khi môi trường thay đổi',
            ],
            [
              'Nhiệt bay hơi cao',
              'Phải phá vỡ liên kết hydrogen để phân tử nước bay hơi',
              'Thoát hơi nước ở lá, ra mồ hôi giúp hạ nhiệt cơ thể',
            ],
            [
              'Sức căng bề mặt, mao dẫn',
              'Các phân tử nước liên kết với nhau và với thành mạch',
              'Nước được vận chuyển trong mạch gỗ từ rễ lên lá',
            ],
            [
              'Nước đá nhẹ hơn nước lỏng',
              'Ở thể rắn, liên kết hydrogen bền tạo mạng tinh thể thưa',
              'Băng nổi trên mặt, giữ ấm lớp nước bên dưới cho sinh vật sống qua mùa đông',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Thành phần cấu tạo chủ yếu của tế bào: nước làm tế bào có hình dạng và độ căng nhất định.',
            'Dung môi và môi trường cho các phản ứng sinh hoá; nhờ nước, các chất được vận chuyển trong tế bào và trong cơ thể (máu, dịch mạch gỗ, mạch rây).',
            'Nguyên liệu của một số phản ứng: quang hợp dùng nước, các phản ứng thuỷ phân cần nước.',
            'Điều hoà nhiệt cho tế bào và cơ thể nhờ nhiệt dung riêng lớn và nhiệt bay hơi cao.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Mất nhiều nước, tế bào và cơ thể không thể hoạt động bình thường: khi bị tiêu chảy, cơ thể mất nước và chất điện giải, nên cần uống bù nước và muối khoáng (dung dịch oresol).',
        },
      ],
    },
  ],
  explore: {
    title: 'Xếp các nguyên tố của cơ thể người',
    instruction:
      'Chọn từng nguyên tố để đọc tỉ lệ khối lượng và vai trò của nó, rồi xếp vào nhóm đa lượng hay vi lượng. Ngưỡng phân chia là $0{,}01\\%$; thước bên dưới cho thấy vị trí của mỗi nguyên tố so với ngưỡng đó.',
  },
  examples: [
    {
      problem:
        'Một người nặng $60$ kg. Biết oxygen, carbon, hydrogen và nitrogen lần lượt chiếm khoảng $65\\%$, $18{,}5\\%$, $9{,}5\\%$ và $3{,}2\\%$ khối lượng cơ thể. Tính khối lượng mỗi nguyên tố và tổng khối lượng bốn nguyên tố này.',
      steps: [
        'Oxygen: $60 \\cdot 65\\% = 60 \\cdot 0{,}65 = 39$ kg.',
        'Carbon: $60 \\cdot 0{,}185 = 11{,}1$ kg; hydrogen: $60 \\cdot 0{,}095 = 5{,}7$ kg.',
        'Nitrogen: $60 \\cdot 0{,}032 = 1{,}92$ kg.',
        'Tổng: $39 + 11{,}1 + 5{,}7 + 1{,}92 = 57{,}72$ kg, tức $\\dfrac{57{,}72}{60} \\cdot 100\\% = 96{,}2\\%$ khối lượng cơ thể.',
      ],
      answer:
        'O khoảng $39$ kg, C $11{,}1$ kg, H $5{,}7$ kg, N $1{,}92$ kg; bốn nguyên tố nặng khoảng $57{,}72$ kg, chiếm khoảng $96\\%$ khối lượng cơ thể.',
    },
    {
      problem:
        'Vì sao khi cho muối ăn (NaCl) vào nước thì muối tan, còn khi cho dầu ăn vào nước thì dầu nổi thành lớp riêng?',
      steps: [
        'Phân tử nước phân cực: đầu oxygen mang $\\delta^-$, các đầu hydrogen mang $\\delta^+$.',
        'Muối ăn gồm các ion $\\mathrm{Na^+}$ và $\\mathrm{Cl^-}$. Đầu $\\delta^-$ của nước hút ion $\\mathrm{Na^+}$, đầu $\\delta^+$ hút ion $\\mathrm{Cl^-}$; các phân tử nước bao quanh và tách rời từng ion, nên muối tan.',
        'Dầu ăn là lipid không phân cực, không tích điện, nên các phân tử nước không hút chúng. Nước liên kết hydrogen với nhau và đẩy các phân tử dầu tụ lại thành lớp riêng; dầu nhẹ hơn nước nên nổi lên trên.',
      ],
      answer:
        'Nước là dung môi phân cực: nó hoà tan các chất phân cực và ion như NaCl, nhưng không hoà tan các chất không phân cực như dầu ăn.',
    },
    {
      problem:
        'Vì sao vào mùa đông ở xứ lạnh, mặt hồ đóng băng nhưng cá và các sinh vật dưới hồ vẫn sống được?',
      steps: [
        'Khi nước đóng băng, các liên kết hydrogen trở nên bền vững và giữ các phân tử nước cách xa nhau trong một mạng tinh thể thưa.',
        'Vì vậy, nước đá có khối lượng riêng nhỏ hơn nước lỏng và nổi lên trên mặt hồ.',
        'Lớp băng trên mặt ngăn nhiệt thoát ra không khí lạnh, nên lớp nước bên dưới không đông cứng.',
      ],
      answer:
        'Nhờ liên kết hydrogen, băng nhẹ hơn nước và nổi lên tạo lớp cách nhiệt; nước ở dưới vẫn ở thể lỏng nên sinh vật vẫn sống được.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Bốn nguyên tố nào chiếm khoảng $96\\%$ khối lượng cơ thể sống?',
      options: ['C, H, O, N', 'C, H, O, P', 'C, O, N, Ca', 'H, O, N, S'],
      answer: 0,
      hints: [
        'Đó là các nguyên tố có trong nước và trong hầu hết các phân tử hữu cơ.',
        'Protein luôn chứa nitrogen.',
      ],
      solution:
        'Carbon, hydrogen, oxygen và nitrogen chiếm khoảng $96\\%$ khối lượng cơ thể sống, vì chúng là thành phần chính của nước và các chất hữu cơ.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các nguyên tố vi lượng.',
      options: [
        'Iron (Fe)',
        'Calcium (Ca)',
        'Zinc (Zn)',
        'Iodine (I)',
        'Potassium (K)',
        'Copper (Cu)',
      ],
      answers: [0, 2, 3, 5],
      hints: [
        'Nguyên tố vi lượng chiếm dưới $0{,}01\\%$ khối lượng cơ thể.',
        'Calcium có nhiều trong xương; potassium giữ cân bằng ion trong mọi tế bào.',
      ],
      solution:
        'Fe, Zn, I, Cu là nguyên tố vi lượng. Ca và K chiếm tỉ lệ lớn hơn $0{,}01\\%$ nên là nguyên tố đa lượng.',
    },
    {
      type: 'choice',
      prompt:
        'Carbon là nguyên tố quan trọng trong việc tạo nên sự đa dạng của các phân tử sinh học vì',
      options: [
        'carbon chiếm tỉ lệ lớn nhất trong cơ thể',
        'nguyên tử carbon có thể tạo đồng thời 4 liên kết cộng hoá trị, hình thành mạch carbon thẳng, nhánh hoặc vòng',
        'carbon có độ âm điện lớn nhất',
        'carbon dễ tan trong nước',
      ],
      answer: 1,
      hints: ['Hãy nghĩ tới số electron ở lớp ngoài cùng của nguyên tử carbon.'],
      solution:
        'Carbon có $4$ electron lớp ngoài cùng, tạo được $4$ liên kết cộng hoá trị với C, H, O, N, ... nên hình thành vô số bộ khung carbon khác nhau. Oxygen (không phải carbon) mới chiếm tỉ lệ lớn nhất.',
    },
    {
      type: 'number',
      prompt:
        'Một nguyên tử carbon có thể tạo tối đa bao nhiêu liên kết cộng hoá trị với các nguyên tử khác?',
      answer: 4,
      hints: [
        'Mỗi liên kết cộng hoá trị đơn dùng chung một cặp electron.',
        'Carbon có $4$ electron lớp ngoài cùng.',
      ],
      solution:
        'Carbon có $4$ electron ở lớp ngoài cùng, mỗi electron góp vào một cặp electron dùng chung, nên tạo tối đa $4$ liên kết cộng hoá trị (như trong $\\mathrm{CH_4}$).',
    },
    {
      type: 'choice',
      prompt: 'Phân tử nước có tính phân cực là do',
      options: [
        'oxygen có độ âm điện lớn hơn hydrogen nên đôi electron dùng chung lệch về phía oxygen',
        'các phân tử nước liên kết với nhau bằng liên kết hydrogen',
        'phân tử nước có ba nguyên tử',
        'hydrogen có độ âm điện lớn hơn oxygen',
      ],
      answer: 0,
      hints: ['Tính phân cực là tính chất bên trong một phân tử, không phải giữa các phân tử.'],
      solution:
        'Oxygen hút đôi electron dùng chung mạnh hơn hydrogen nên đầu oxygen tích điện âm một phần, đầu hydrogen tích điện dương một phần. Liên kết hydrogen là hệ quả của tính phân cực, không phải nguyên nhân.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi tính chất của nước với ý nghĩa sinh học của nó.',
      left: [
        'Là dung môi phân cực',
        'Nhiệt dung riêng lớn',
        'Nhiệt bay hơi cao',
        'Nước đá nhẹ hơn nước lỏng',
      ],
      right: [
        'Ra mồ hôi giúp cơ thể hạ nhiệt',
        'Hoà tan và vận chuyển nhiều chất trong cơ thể',
        'Lớp băng nổi giữ ấm cho nước bên dưới',
        'Nhiệt độ cơ thể ít thay đổi khi môi trường thay đổi',
      ],
      pairs: [
        [0, 1],
        [1, 3],
        [2, 0],
        [3, 2],
      ],
      hints: [
        'Nhiệt dung riêng là nhiệt lượng cần để làm nóng nước; nhiệt bay hơi là nhiệt lượng cần để nước bốc hơi.',
      ],
      solution:
        'Dung môi phân cực: hoà tan và vận chuyển các chất. Nhiệt dung riêng lớn: nhiệt độ cơ thể ổn định. Nhiệt bay hơi cao: mồ hôi bay hơi lấy đi nhiều nhiệt. Nước đá nhẹ hơn: băng nổi, cách nhiệt cho nước bên dưới.',
    },
    {
      type: 'text',
      prompt:
        'Thiếu nguyên tố vi lượng nào trong khẩu phần ăn có thể gây bệnh bướu cổ? (viết tên nguyên tố)',
      accept: ['iodine', 'iot', 'i-ốt', 'i ốt', 'iod', 'I'],
      hints: [
        'Nguyên tố này là thành phần của hormone tuyến giáp.',
        'Người ta bổ sung nó vào muối ăn.',
      ],
      solution:
        'Iodine là thành phần của hormone tuyến giáp. Thiếu iodine, tuyến giáp to ra gây bệnh bướu cổ; vì vậy muối ăn thường được trộn thêm iodine.',
    },
    {
      type: 'number',
      prompt:
        'Nước chiếm khoảng $70\\%$ khối lượng cơ thể một người nặng $50$ kg. Cơ thể người đó chứa khoảng bao nhiêu kilogam nước?',
      answer: 35,
      tolerance: 0.01,
      unit: 'kg',
      hints: ['Tính $70\\%$ của $50$ kg.'],
      solution: '$50 \\cdot 70\\% = 50 \\cdot 0{,}7 = 35$ kg nước.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao các nguyên tố vi lượng chỉ chiếm lượng rất nhỏ nhưng cơ thể không thể thiếu?',
      options: [
        'Vì chúng là thành phần chính của nước',
        'Vì chúng là thành phần của nhiều enzyme, vitamin, hormone điều hoà các quá trình sống',
        'Vì chúng cung cấp phần lớn năng lượng cho tế bào',
        'Vì chúng tạo nên bộ khung của mọi phân tử hữu cơ',
      ],
      answer: 1,
      hints: ['Nhớ ví dụ: iron trong hemoglobin, iodine trong hormone tuyến giáp.'],
      solution:
        'Nguyên tố vi lượng tham gia cấu tạo enzyme, vitamin, hormone, nên điều hoà các hoạt động sống; thiếu chúng gây rối loạn, bệnh tật. Bộ khung của phân tử hữu cơ là carbon, một nguyên tố đa lượng.',
    },
  ],
  takeaways: [
    'Khoảng $20$ đến $25$ nguyên tố cấu tạo nên cơ thể sống; C, H, O, N chiếm khoảng $96\\%$ khối lượng cơ thể.',
    'Nguyên tố đa lượng (lớn hơn $0{,}01\\%$: C, H, O, N, Ca, P, K, S, Na, Cl, Mg) chủ yếu cấu tạo nên tế bào; nguyên tố vi lượng (nhỏ hơn $0{,}01\\%$: Fe, Zn, Cu, I, Mo, ...) là thành phần của enzyme, vitamin, hormone. Thiếu nguyên tố nào cũng có thể gây bệnh.',
    'Carbon tạo được $4$ liên kết cộng hoá trị, hình thành mạch carbon đa dạng làm bộ khung cho các phân tử hữu cơ.',
    'Phân tử nước phân cực (O mang $\\delta^-$, H mang $\\delta^+$); các phân tử nước liên kết với nhau bằng liên kết hydrogen.',
    'Nước là thành phần chủ yếu của tế bào, là dung môi, môi trường và nguyên liệu của phản ứng sinh hoá, và giúp điều hoà nhiệt.',
  ],
};
