/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Khái niệm sinh trưởng và phát triển, dấu hiệu đặc trưng và mối quan hệ giữa hai quá trình; vòng đời, tuổi thọ của sinh vật, các nhân tố ảnh hưởng đến tuổi thọ và ứng dụng hiểu biết về vòng đời.',
  intro:
    'Từ một hạt thóc nhỏ mọc lên cả khóm lúa trĩu bông; từ một trứng muỗi chỉ sau khoảng $10$ ngày đã có một con muỗi biết bay. Vì sao một hạt có thể thành cây, một hợp tử có thể thành con vật? Mỗi loài cần bao lâu để đi hết vòng đời và sống được bao lâu?',
  objectives: [
    'Nêu được khái niệm sinh trưởng và phát triển ở sinh vật.',
    'Trình bày được các dấu hiệu đặc trưng của sinh trưởng và phát triển; phân tích được mối quan hệ giữa hai quá trình.',
    'Nêu được khái niệm vòng đời và tuổi thọ; phân biệt được vòng đời với tuổi thọ.',
    'Trình bày được các nhân tố ảnh hưởng đến tuổi thọ của con người và vận dụng hiểu biết về vòng đời vào thực tiễn.',
  ],
  sections: [
    {
      heading: 'Khái niệm sinh trưởng và phát triển',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Sinh trưởng',
          text: 'Sinh trưởng là quá trình tăng lên về kích thước và khối lượng của cơ thể theo thời gian, do tế bào tăng lên về số lượng và kích thước.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phát triển',
          text: 'Phát triển là toàn bộ những biến đổi diễn ra trong vòng đời của một cá thể sinh vật, gồm ba quá trình liên quan với nhau: sinh trưởng, phân hoá tế bào và phát sinh hình thái các cơ quan của cơ thể.',
        },
        {
          type: 'table',
          head: ['Quá trình', 'Dấu hiệu đặc trưng', 'Ví dụ'],
          rows: [
            [
              'Sinh trưởng',
              'Tăng số lượng tế bào, kích thước tế bào; cơ thể tăng chiều cao, khối lượng',
              'Cây ngô cao thêm mỗi ngày; lợn con tăng cân',
            ],
            [
              'Phân hoá tế bào',
              'Tế bào thay đổi cấu trúc để chuyên hoá về chức năng',
              'Tế bào phôi thành tế bào cơ, tế bào thần kinh',
            ],
            [
              'Phát sinh hình thái',
              'Hình thành các cơ quan mới, thay đổi hình dạng cơ thể',
              'Cây ra hoa; nòng nọc mọc chân, mất đuôi',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Xếp mỗi hiện tượng dưới đây vào quá trình mà nó thể hiện rõ nhất.',
        },
        { type: 'widget', name: 'qua-trinh' },
      ],
    },
    {
      heading: 'Mối quan hệ giữa sinh trưởng và phát triển',
      blocks: [
        {
          type: 'p',
          text: 'Sinh trưởng, phân hoá tế bào và phát sinh hình thái diễn ra đan xen, liên quan mật thiết với nhau. Ở sinh vật sinh sản hữu tính, hợp tử phân chia tạo nhiều tế bào (sinh trưởng); các tế bào phân hoá thành các mô, cơ quan (phân hoá, phát sinh hình thái); khi cơ thể đạt kích thước và khối lượng nhất định, một số tế bào mới phân hoá tạo cơ quan sinh sản.',
        },
        {
          type: 'list',
          items: [
            'Sinh trưởng tạo tiền đề cho phát triển: cơ thể phải lớn đến một mức nhất định mới chuyển sang ra hoa, sinh sản.',
            'Phát triển tạo điều kiện cho sinh trưởng: các cơ quan mới hình thành (lá, rễ, cơ quan tiêu hoá…) giúp cơ thể lấy thêm chất dinh dưỡng để tiếp tục lớn.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Tốc độ không đều',
          text: 'Sinh trưởng và phát triển diễn ra không đều theo thời gian: cơ thể non thường sinh trưởng nhanh, sau giai đoạn sinh sản tốc độ sinh trưởng chậm lại.',
        },
      ],
    },
    {
      heading: 'Vòng đời và tuổi thọ',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Vòng đời',
          text: 'Vòng đời là khoảng thời gian tính từ khi cơ thể được sinh ra, lớn lên, phát triển thành cơ thể trưởng thành, sinh sản tạo ra cơ thể mới, rồi già và chết. Các giai đoạn ấy lặp lại qua các thế hệ.',
        },
        {
          type: 'p',
          text: 'Ví dụ, vòng đời của muỗi: trứng $\\to$ bọ gậy (ấu trùng) $\\to$ cung quăng (nhộng) $\\to$ muỗi trưởng thành; vòng đời của ếch: trứng $\\to$ nòng nọc $\\to$ nòng nọc mọc chân $\\to$ ếch con $\\to$ ếch trưởng thành.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tuổi thọ',
          text: 'Tuổi thọ là thời gian sống của một cá thể. Tuổi thọ của một loài là thời gian sống trung bình của các cá thể trong loài.',
        },
        {
          type: 'table',
          head: ['Sinh vật', 'Tuổi thọ (khoảng)'],
          rows: [
            ['Muỗi', '$1$ tháng'],
            ['Cây lúa', '$3$ đến $5$ tháng'],
            ['Gà nhà', '$5$ đến $10$ năm'],
            ['Người (Việt Nam)', 'trung bình khoảng $74$ năm'],
            ['Rùa khổng lồ', 'trên $100$ năm'],
            ['Cây thông đuôi chồn', 'gần $5\\,000$ năm'],
          ],
          caption: 'Tuổi thọ rất khác nhau giữa các loài.',
        },
        {
          type: 'p',
          text: 'Tuổi thọ chịu ảnh hưởng của nhân tố bên trong (đặc điểm di truyền của loài, của cá thể) và các nhân tố bên ngoài. Ở người, tuổi thọ tăng nhờ chế độ dinh dưỡng hợp lí, giàu rau quả; luyện tập thể dục, thể thao thường xuyên; lối sống lành mạnh, không dùng rượu bia, thuốc lá, chất gây nghiện, tinh thần lạc quan; môi trường sống không ô nhiễm.',
        },
      ],
    },
    {
      heading: 'Ứng dụng hiểu biết về vòng đời',
      blocks: [
        {
          type: 'list',
          items: [
            'Trồng trọt: chăm sóc (tưới nước, bón phân, phòng bệnh) phù hợp với từng giai đoạn để cây cho năng suất lá, hoa, củ, quả, hạt cao nhất.',
            'Chăn nuôi: cho ăn theo giai đoạn; vật nuôi non sinh trưởng nhanh nên dùng thức ăn hiệu quả hơn, xuất chuồng đúng lúc để có lợi nhất.',
            'Phòng trừ sinh vật gây hại: tác động vào giai đoạn dễ diệt nhất, như diệt sâu non khi chưa hoá nhộng, đậy kín dụng cụ chứa nước, phát quang nơi nước đọng để muỗi không có chỗ đẻ trứng và bọ gậy không sống được.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Dòng thời gian vòng đời',
    instruction:
      'Chọn một loài, kéo thanh "Tuổi" để đi dọc vòng đời và đọc những biến đổi ở từng giai đoạn. Bấm tên một giai đoạn để nhảy tới đó. Thước bên dưới so sánh tuổi thọ của các loài trên cùng một thước chia theo luỹ thừa của $10$.',
  },
  examples: [
    {
      problem:
        'Từ trứng đến muỗi trưởng thành mất khoảng $10$ ngày, trong đó trứng, bọ gậy và cung quăng đều sống trong nước. Một gia đình thay nước bể chứa $7$ ngày một lần. Việc làm này có ngăn được muỗi sinh ra từ bể không? Giải thích.',
      steps: [
        'Muỗi chỉ rời khỏi nước khi đã qua đủ trứng, bọ gậy, cung quăng, tức khoảng $10$ ngày.',
        'Thay nước sau $7$ ngày ($7 < 10$) thì trứng, bọ gậy, cung quăng trong bể bị đổ bỏ trước khi kịp thành muỗi.',
        'Vậy vòng đời bị cắt ở giai đoạn sống trong nước.',
      ],
      answer:
        'Có: thay nước $7$ ngày một lần cắt đứt vòng đời của muỗi trước khi bọ gậy, cung quăng thành muỗi.',
    },
    {
      problem:
        'Một cây ngô cao $20$ cm vào ngày thứ $10$ sau khi gieo và cao $62$ cm vào ngày thứ $24$. Tính tốc độ tăng chiều cao trung bình của cây trong khoảng thời gian đó. Đây là biểu hiện của quá trình nào?',
      steps: [
        'Chiều cao tăng thêm: $62 - 20 = 42$ cm.',
        'Thời gian: $24 - 10 = 14$ ngày.',
        'Tốc độ trung bình: $42 : 14 = 3$ cm mỗi ngày.',
        'Chiều cao tăng do tế bào tăng số lượng và kích thước: đó là sinh trưởng.',
      ],
      answer: '$3$ cm mỗi ngày; biểu hiện của sinh trưởng.',
    },
    {
      problem:
        'Tuổi thọ trung bình của người Việt Nam khoảng $74$ năm, tuổi thọ của muỗi khoảng $1$ tháng. Tuổi thọ của người gấp khoảng bao nhiêu lần tuổi thọ của muỗi?',
      steps: [
        'Đổi về cùng đơn vị: $74$ năm $= 74 \\cdot 12 = 888$ tháng.',
        'So sánh: $888 : 1 = 888$.',
      ],
      answer:
        'Gấp khoảng $888$ lần, tức gần $900$ lần: tuổi thọ là đặc điểm của loài, do di truyền quy định và chịu ảnh hưởng của môi trường.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Sinh trưởng ở sinh vật là',
      options: [
        'quá trình tăng lên về kích thước và khối lượng của cơ thể',
        'toàn bộ những biến đổi diễn ra trong vòng đời của cá thể',
        'quá trình tế bào thay đổi cấu trúc để chuyên hoá chức năng',
        'quá trình hình thành các cơ quan sinh sản',
      ],
      answer: 0,
      hints: ['Sinh trưởng chỉ nói về "lớn lên".'],
      solution:
        'Sinh trưởng là sự tăng kích thước, khối lượng cơ thể do tăng số lượng và kích thước tế bào. "Toàn bộ những biến đổi trong vòng đời" là phát triển.',
    },
    {
      type: 'multi',
      prompt: 'Phát triển ở sinh vật gồm những quá trình liên quan nào?',
      options: ['Sinh trưởng', 'Phân hoá tế bào', 'Phát sinh hình thái', 'Hướng động', 'Bài tiết'],
      answers: [0, 1, 2],
      hints: ['Có ba quá trình: lớn lên, chuyên hoá tế bào, tạo cơ quan.'],
      solution:
        'Phát triển gồm ba quá trình liên quan với nhau: sinh trưởng, phân hoá tế bào và phát sinh hình thái các cơ quan.',
    },
    {
      type: 'text',
      prompt:
        'Điền cụm từ: quá trình tế bào thay đổi cấu trúc để thực hiện các chức năng chuyên biệt gọi là …',
      accept: ['phân hoá tế bào', 'phân hoá', 'sự phân hoá tế bào', 'biệt hoá tế bào', 'biệt hoá'],
      hints: ['Tế bào phôi trở thành tế bào cơ, tế bào thần kinh…'],
      solution: 'Đó là phân hoá tế bào, một trong ba quá trình của sự phát triển.',
    },
    {
      type: 'choice',
      prompt: 'Phát biểu nào phân biệt đúng vòng đời và tuổi thọ?',
      options: [
        'Vòng đời là chuỗi giai đoạn từ khi sinh ra, lớn lên, trưởng thành, sinh sản tạo thế hệ mới đến già và chết; tuổi thọ là thời gian sống của một cá thể',
        'Vòng đời và tuổi thọ là hai tên gọi của cùng một khái niệm',
        'Tuổi thọ là chuỗi giai đoạn lặp lại qua các thế hệ; vòng đời là thời gian sống trung bình',
        'Vòng đời chỉ có ở động vật, tuổi thọ chỉ có ở thực vật',
      ],
      answer: 0,
      hints: ['Một khái niệm nói về các giai đoạn, khái niệm kia nói về thời gian sống.'],
      solution:
        'Vòng đời là chuỗi giai đoạn sinh ra, lớn lên, trưởng thành, sinh sản (lặp lại qua thế hệ); tuổi thọ là thời gian sống của cá thể, tuổi thọ của loài là thời gian sống trung bình của các cá thể.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các giai đoạn trong vòng đời của bướm cải theo đúng thứ tự.',
      items: ['Nhộng', 'Trứng', 'Bướm', 'Sâu'],
      answer: [1, 3, 0, 2],
      hints: ['Sâu ăn lá lớn lên rồi mới hoá nhộng.'],
      solution: 'Trứng $\\to$ sâu $\\to$ nhộng $\\to$ bướm.',
    },
    {
      type: 'number',
      prompt:
        'Một cây ngô cao $35$ cm vào ngày thứ $15$ và cao $75$ cm vào ngày thứ $25$. Trung bình mỗi ngày cây cao thêm bao nhiêu xentimét?',
      answer: 4,
      tolerance: 0.01,
      unit: 'cm',
      hints: ['Lấy chiều cao tăng thêm chia cho số ngày.'],
      solution: '$(75 - 35) : (25 - 15) = 40 : 10 = 4$ cm mỗi ngày.',
    },
    {
      type: 'number',
      prompt:
        'Một lợn con nặng $20$ kg, sau $90$ ngày nuôi đạt $101$ kg. Trung bình mỗi ngày lợn tăng bao nhiêu kilôgam?',
      answer: 0.9,
      tolerance: 0.001,
      unit: 'kg',
      hints: ['Khối lượng tăng thêm là $101 - 20$.'],
      solution: '$(101 - 20) : 90 = 81 : 90 = 0{,}9$ kg mỗi ngày.',
    },
    {
      type: 'choice',
      prompt: 'Để phòng trừ muỗi hiệu quả, nên tác động vào giai đoạn nào và bằng cách nào?',
      options: [
        'Trứng, bọ gậy, cung quăng: loại bỏ nước đọng, đậy kín dụng cụ chứa nước',
        'Chỉ muỗi trưởng thành: mắc màn khi ngủ là đủ',
        'Chỉ trứng: phun thuốc vào không khí',
        'Không giai đoạn nào: muỗi không thể bị cắt vòng đời',
      ],
      answer: 0,
      hints: ['Ba giai đoạn đầu của muỗi sống ở đâu?'],
      solution:
        'Trứng, bọ gậy, cung quăng đều sống trong nước; loại bỏ nơi nước đọng, đậy kín và thay nước thường xuyên cắt đứt vòng đời ngay từ đầu. Mắc màn chỉ tránh bị đốt, không giảm số muỗi.',
    },
    {
      type: 'multi',
      prompt: 'Những việc nào giúp kéo dài tuổi thọ của con người?',
      options: [
        'Ăn uống đủ chất, nhiều rau quả',
        'Luyện tập thể dục, thể thao thường xuyên',
        'Không hút thuốc lá, hạn chế rượu bia',
        'Thường xuyên thức khuya, ít vận động',
        'Sống trong môi trường không ô nhiễm',
      ],
      answers: [0, 1, 2, 4],
      hints: ['Chọn các thói quen tốt cho sức khoẻ.'],
      solution:
        'Dinh dưỡng hợp lí, luyện tập, lối sống lành mạnh và môi trường trong lành giúp tăng tuổi thọ; thức khuya, ít vận động làm giảm sức khoẻ.',
    },
    {
      type: 'choice',
      prompt:
        'Với cùng một lượng thức ăn, nuôi gà con đến khi trưởng thành cho nhiều thịt hơn nuôi tiếp gà đã trưởng thành. Giải thích nào đúng?',
      options: [
        'Cơ thể non sinh trưởng nhanh, sau tuổi trưởng thành tốc độ sinh trưởng chậm lại',
        'Gà trưởng thành không cần ăn',
        'Gà con có tuổi thọ dài hơn gà trưởng thành',
        'Gà trưởng thành không còn tế bào phân chia',
      ],
      answer: 0,
      hints: ['Tốc độ sinh trưởng thay đổi thế nào theo tuổi?'],
      solution:
        'Sinh trưởng không đều theo thời gian: giai đoạn non tăng khối lượng nhanh nên thức ăn được chuyển thành thịt hiệu quả hơn; gà trưởng thành dùng phần lớn thức ăn để duy trì cơ thể và sinh sản.',
    },
  ],
  takeaways: [
    'Sinh trưởng: tăng kích thước, khối lượng cơ thể do tăng số lượng và kích thước tế bào.',
    'Phát triển: toàn bộ biến đổi trong vòng đời, gồm sinh trưởng, phân hoá tế bào và phát sinh hình thái.',
    'Sinh trưởng tạo tiền đề cho phát triển; phát triển tạo điều kiện cho sinh trưởng.',
    'Vòng đời: từ khi sinh ra, lớn lên, trưởng thành, sinh sản đến già và chết; tuổi thọ là thời gian sống của cá thể.',
    'Tuổi thọ do di truyền quy định và chịu ảnh hưởng của dinh dưỡng, lối sống, môi trường; hiểu vòng đời giúp chăm sóc cây, vật nuôi và phòng trừ sinh vật gây hại.',
  ],
};
