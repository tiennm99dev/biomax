/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Chất dinh dưỡng, dinh dưỡng và khẩu phần ăn; cấu tạo và chức năng của hệ tiêu hóa, quá trình tiêu hóa ở khoang miệng, dạ dày, ruột non, ruột già; bệnh sâu răng, viêm loét dạ dày – tá tràng; an toàn vệ sinh thực phẩm.',
  intro:
    'Mỗi ngày em ăn cơm, thịt, rau, uống sữa. Thế nhưng tế bào trong cơ thể không thể dùng trực tiếp miếng cơm hay miếng thịt. Thức ăn phải được biến đổi thành những chất thật đơn giản rồi mới vào máu đến với tế bào. Quá trình đó diễn ra ở đâu, như thế nào? Ăn bao nhiêu, ăn những gì thì đủ và hợp lí? Làm sao để bữa ăn không gây ngộ độc? Bài học này giúp em trả lời.',
  objectives: [
    'Nêu được khái niệm chất dinh dưỡng, dinh dưỡng, khẩu phần; mối quan hệ giữa tiêu hóa và dinh dưỡng; nguyên tắc lập khẩu phần.',
    'Kể tên các cơ quan của hệ tiêu hóa và nêu được chức năng của chúng; mô tả quá trình tiêu hóa ở từng cơ quan.',
    'Nêu được một số bệnh về đường tiêu hóa, cách phòng tránh; nêu được khái niệm và biện pháp đảm bảo an toàn vệ sinh thực phẩm.',
  ],
  sections: [
    {
      heading: 'Chất dinh dưỡng, dinh dưỡng và khẩu phần',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Chất dinh dưỡng và dinh dưỡng',
          text: 'Chất dinh dưỡng là những chất có trong thức ăn mà cơ thể sử dụng làm nguyên liệu cấu tạo cơ thể và cung cấp năng lượng cho các hoạt động sống. Dinh dưỡng là quá trình thu nhận, biến đổi và sử dụng chất dinh dưỡng để duy trì sự sống của cơ thể.',
        },
        {
          type: 'p',
          text: 'Các nhóm chất dinh dưỡng cần thiết cho cơ thể gồm: carbohydrate, protein, lipid (chất béo), vitamin và chất khoáng. Ngoài ra cơ thể còn cần nước và chất xơ. Hệ tiêu hóa biến đổi thức ăn thành chất dinh dưỡng mà cơ thể hấp thụ và sử dụng được, nên tiêu hóa và dinh dưỡng liên quan chặt chẽ với nhau.',
        },
        {
          type: 'p',
          text: 'Nhu cầu dinh dưỡng của mỗi người khác nhau, phụ thuộc vào độ tuổi, giới tính, hình thức lao động, trạng thái sinh lí và môi trường sống. Trẻ em đang lớn cần nhiều chất dinh dưỡng để xây dựng cơ thể; người lao động nặng cần nhiều năng lượng; người ốm mới khỏi cần nhiều chất dinh dưỡng để phục hồi.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Khẩu phần',
          text: 'Khẩu phần là lượng thức ăn cung cấp cho cơ thể trong một ngày. Nguyên tắc lập khẩu phần: đảm bảo đủ lượng thức ăn phù hợp với nhu cầu của cơ thể; cân đối thành phần các chất dinh dưỡng; cung cấp đủ năng lượng cho cơ thể.',
        },
        {
          type: 'p',
          text: 'Để ước tính năng lượng của bữa ăn, người ta dùng giá trị gần đúng: mỗi gam protein hoặc carbohydrate cho khoảng 4 kcal, mỗi gam lipid cho khoảng 9 kcal.',
        },
        {
          type: 'tex',
          tex: 'E \\approx 4\\cdot m_{\\text{protein}} + 4\\cdot m_{\\text{carbohydrate}} + 9\\cdot m_{\\text{lipid}} \\quad (\\text{kcal; } m \\text{ tính bằng g})',
        },
      ],
    },
    {
      heading: 'Hệ tiêu hóa và quá trình tiêu hóa',
      blocks: [
        {
          type: 'p',
          text: 'Hệ tiêu hóa gồm ống tiêu hóa (miệng, hầu, thực quản, dạ dày, ruột non, ruột già, hậu môn) và các tuyến tiêu hóa (tuyến nước bọt, gan, tụy, tuyến vị, tuyến ruột). Hệ tiêu hóa biến đổi thức ăn thành các chất dinh dưỡng mà cơ thể hấp thụ được và thải chất cặn bã ra ngoài.',
        },
        {
          type: 'table',
          caption: 'Quá trình tiêu hóa ở các cơ quan',
          head: ['Cơ quan', 'Tiêu hóa cơ học', 'Tiêu hóa hóa học', 'Hấp thụ'],
          rows: [
            [
              'Khoang miệng',
              'Răng nhai, nghiền; lưỡi đảo trộn',
              'Amylase (nước bọt): một phần tinh bột chín → đường maltose',
              'Hầu như không',
            ],
            [
              'Dạ dày',
              'Co bóp làm nhuyễn, thấm đều dịch vị',
              'Pepsin (dịch vị): một phần protein → chuỗi ngắn hơn',
              'Rất ít',
            ],
            [
              'Ruột non',
              'Co bóp, đảo trộn',
              'Dịch tụy, dịch mật, dịch ruột biến đổi thức ăn thành chất đơn giản: đường đơn, amino acid, acid béo và glycerol',
              'Hấp thụ hầu hết chất dinh dưỡng qua lông ruột vào máu và bạch huyết',
            ],
            [
              'Ruột già',
              'Co bóp đẩy chất bã',
              'Vi khuẩn phân hủy phần chất còn sót lại',
              'Hấp thụ lại nước, một số muối khoáng; tạo phân',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Ruột non là nơi tiêu hóa và hấp thụ chủ yếu',
          text: 'Ở ruột non có đủ ba loại dịch tiêu hóa (dịch tụy, dịch mật, dịch ruột) chứa nhiều enzyme; niêm mạc ruột non có rất nhiều nếp gấp với các lông ruột, bên trong có mạng mao mạch máu và mạch bạch huyết dày đặc.',
        },
        {
          type: 'p',
          text: 'Bấm "Đưa thức ăn đi tiếp" để theo dõi một miếng thức ăn đi qua ống tiêu hóa:',
        },
        { type: 'widget', name: 'duong-di' },
      ],
    },
    {
      heading: 'Bệnh về tiêu hóa và an toàn thực phẩm',
      blocks: [
        {
          type: 'table',
          caption: 'Một số bệnh về đường tiêu hóa',
          head: ['Bệnh', 'Nguyên nhân', 'Phòng tránh'],
          rows: [
            [
              'Sâu răng',
              'Vi khuẩn trong miệng phân hủy đường, tinh bột bám trên răng tạo acid ăn mòn men răng',
              'Vệ sinh răng miệng đúng cách, hạn chế đồ ngọt, khám răng định kì',
            ],
            [
              'Viêm loét dạ dày – tá tràng',
              'Chủ yếu do vi khuẩn Helicobacter pylori; rượu bia, ăn uống, sinh hoạt không điều độ làm tăng nguy cơ',
              'Ăn uống hợp lí, nghỉ ngơi điều độ, giữ tinh thần thoải mái',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'An toàn vệ sinh thực phẩm',
          text: 'An toàn vệ sinh thực phẩm là giữ cho thực phẩm không bị nhiễm khuẩn, nhiễm độc và không bị biến chất.',
        },
        {
          type: 'list',
          items: [
            'Nguyên nhân gây mất an toàn: thực phẩm nhiễm vi sinh vật và độc tố của chúng; thực phẩm bị biến chất, ôi thiu; nhiễm hóa chất độc (chì, formaldehyde, thuốc bảo vệ thực vật, ...); thực phẩm có sẵn chất độc (mầm khoai tây chứa solanine, cá nóc chứa tetrodotoxin).',
            'Hậu quả: ngộ độc thực phẩm, rối loạn tiêu hóa (đau bụng, tiêu chảy, nôn), rối loạn thần kinh, có thể nguy hiểm đến tính mạng.',
            'Biện pháp: chọn thực phẩm sạch, rõ nguồn gốc; dùng thực phẩm đóng hộp còn hạn sử dụng; bảo quản lạnh thực phẩm tươi; nấu chín kĩ; rửa sạch rau quả ăn sống; để riêng thực phẩm sống và chín; che đậy thức ăn sau khi chế biến.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Lập khẩu phần một ngày',
    instruction:
      'Chọn nhu cầu năng lượng, rồi bấm − và + để thêm, bớt thức ăn. Quan sát tổng năng lượng, tỉ lệ năng lượng từ carbohydrate, protein, lipid và lời nhận xét. Hãy lập một khẩu phần đủ năng lượng, cân đối và có đủ bốn nhóm thức ăn.',
  },
  examples: [
    {
      problem:
        'Một bữa ăn cung cấp $80$ g carbohydrate, $20$ g protein và $15$ g lipid. Tính năng lượng của bữa ăn.',
      steps: [
        'Năng lượng từ carbohydrate: $4 \\cdot 80 = 320$ (kcal).',
        'Năng lượng từ protein: $4 \\cdot 20 = 80$ (kcal).',
        'Năng lượng từ lipid: $9 \\cdot 15 = 135$ (kcal).',
        'Tổng: $320 + 80 + 135 = 535$ (kcal).',
      ],
      answer: 'Bữa ăn cung cấp khoảng $535$ kcal.',
    },
    {
      problem:
        'Vì sao nói ruột non là nơi diễn ra quá trình tiêu hóa hóa học và hấp thụ chất dinh dưỡng chủ yếu?',
      steps: [
        'Tiêu hóa hóa học: ở khoang miệng chỉ một phần tinh bột, ở dạ dày chỉ một phần protein được biến đổi. Ở ruột non có đủ dịch tụy, dịch mật, dịch ruột nên carbohydrate, protein, lipid đều được biến đổi thành chất đơn giản.',
        'Hấp thụ: niêm mạc ruột non có nhiều nếp gấp và lông ruột làm tăng diện tích bề mặt; trong lông ruột có mạng mao mạch máu và mạch bạch huyết dày đặc.',
        'Vì vậy hầu hết chất dinh dưỡng được hấp thụ qua thành ruột non vào máu và bạch huyết.',
      ],
      answer:
        'Vì ruột non có đủ các loại dịch tiêu hóa để biến đổi hoàn toàn thức ăn, và có diện tích hấp thụ rất lớn với mạng mạch máu, bạch huyết dày đặc.',
    },
  ],
  practice: [
    {
      type: 'text',
      prompt: 'Lượng thức ăn cung cấp cho cơ thể trong một ngày được gọi là gì?',
      accept: ['khẩu phần', 'khẩu phần ăn'],
      hints: ['Khi lập thực đơn cả ngày, em đang lập ... ăn.'],
      solution: 'Đó là khẩu phần (khẩu phần ăn).',
    },
    {
      type: 'number',
      prompt:
        'Một hộp sữa chứa $8$ g protein, $9$ g lipid và $12$ g carbohydrate. Hộp sữa cung cấp khoảng bao nhiêu kcal?',
      answer: 161,
      unit: 'kcal',
      hints: [
        'Protein và carbohydrate: khoảng $4$ kcal/g; lipid: khoảng $9$ kcal/g.',
        'Tính $4 \\cdot 8 + 9 \\cdot 9 + 4 \\cdot 12$.',
      ],
      solution: '$4 \\cdot 8 + 9 \\cdot 9 + 4 \\cdot 12 = 32 + 81 + 48 = 161$ (kcal).',
    },
    {
      type: 'number',
      prompt:
        'Nhu cầu năng lượng của một bạn học sinh là $2\\,200$ kcal/ngày. Bữa sáng cần cung cấp khoảng $25\\%$ nhu cầu đó. Bữa sáng cần bao nhiêu kcal?',
      answer: 550,
      unit: 'kcal',
      hints: ['Tính $25\\%$ của $2\\,200$.'],
      solution: '$2\\,200 \\cdot 25 : 100 = 550$ (kcal).',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các cơ quan theo đường đi của thức ăn trong ống tiêu hóa.',
      items: ['Dạ dày', 'Ruột già', 'Khoang miệng', 'Thực quản', 'Hậu môn', 'Ruột non', 'Hầu'],
      answer: [2, 6, 3, 0, 5, 1, 4],
      hints: ['Thức ăn vào miệng, được nuốt qua hầu rồi theo thực quản xuống.'],
      solution: 'Khoang miệng → hầu → thực quản → dạ dày → ruột non → ruột già → hậu môn.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi cơ quan với sự biến đổi hoặc hấp thụ chủ yếu diễn ra ở đó.',
      left: ['Khoang miệng', 'Dạ dày', 'Ruột non', 'Ruột già'],
      right: [
        'Pepsin biến đổi một phần protein',
        'Hấp thụ lại nước, tạo phân',
        'Amylase biến đổi một phần tinh bột chín thành maltose',
        'Biến đổi thức ăn thành chất đơn giản và hấp thụ hầu hết chất dinh dưỡng',
      ],
      pairs: [
        [0, 2],
        [1, 0],
        [2, 3],
        [3, 1],
      ],
      hints: ['Nước bọt chứa enzyme amylase, dịch vị chứa enzyme pepsin.'],
      solution:
        'Khoang miệng: amylase biến đổi một phần tinh bột. Dạ dày: pepsin biến đổi một phần protein. Ruột non: biến đổi hoàn toàn và hấp thụ chủ yếu. Ruột già: hấp thụ lại nước, tạo phân.',
    },
    {
      type: 'choice',
      prompt: 'Lipid (chất béo) trong thức ăn được biến đổi thành acid béo và glycerol ở đâu?',
      options: ['Khoang miệng', 'Dạ dày', 'Ruột non', 'Ruột già'],
      answer: 2,
      hints: ['Ở cơ quan nào có dịch mật và dịch tụy?'],
      solution:
        'Lipid được biến đổi ở ruột non nhờ dịch mật (từ gan) và enzyme trong dịch tụy, dịch ruột, thành acid béo và glycerol.',
    },
    {
      type: 'choice',
      prompt: 'Nguyên nhân chủ yếu gây bệnh viêm loét dạ dày – tá tràng là gì?',
      options: [
        'Ăn nhiều rau xanh',
        'Nhiễm vi khuẩn Helicobacter pylori',
        'Uống đủ nước',
        'Thiếu vitamin C',
      ],
      answer: 1,
      hints: ['Đó là một loại vi khuẩn sống được trong môi trường acid của dạ dày.'],
      solution:
        'Viêm loét dạ dày – tá tràng chủ yếu do vi khuẩn Helicobacter pylori; rượu bia, ăn uống và sinh hoạt không điều độ làm tăng nguy cơ.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các việc làm giúp đảm bảo an toàn vệ sinh thực phẩm.',
      options: [
        'Nấu chín kĩ thịt, cá trước khi ăn',
        'Để chung thịt sống với thức ăn đã nấu chín',
        'Ăn khoai tây đã mọc mầm',
        'Bảo quản thực phẩm tươi trong tủ lạnh',
        'Kiểm tra hạn sử dụng của thực phẩm đóng hộp',
      ],
      answers: [0, 3, 4],
      hints: ['Mầm khoai tây chứa chất độc solanine.'],
      solution:
        'Nấu chín kĩ, bảo quản lạnh và kiểm tra hạn sử dụng là việc làm đúng. Để chung đồ sống với đồ chín dễ lây nhiễm vi khuẩn; mầm khoai tây chứa solanine gây ngộ độc.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao ăn nhiều đồ ngọt, không đánh răng dễ bị sâu răng?',
      options: [
        'Đường làm răng mềm ra',
        'Vi khuẩn trong miệng phân hủy đường tạo acid ăn mòn men răng',
        'Đường làm thiếu calcium trong xương',
        'Đường diệt hết vi khuẩn có ích trong miệng',
      ],
      answer: 1,
      hints: ['Chất nào có thể ăn mòn men răng?'],
      solution:
        'Vi khuẩn có sẵn trong miệng phân hủy đường, tinh bột bám trên răng tạo ra acid; acid ăn mòn men răng gây sâu răng.',
    },
  ],
  takeaways: [
    'Chất dinh dưỡng (carbohydrate, protein, lipid, vitamin, chất khoáng) cung cấp nguyên liệu và năng lượng; dinh dưỡng là quá trình thu nhận, biến đổi, sử dụng chất dinh dưỡng.',
    'Khẩu phần là lượng thức ăn trong một ngày; cần đủ lượng, cân đối các chất và đủ năng lượng. Ước tính: 1 g protein hoặc carbohydrate khoảng 4 kcal, 1 g lipid khoảng 9 kcal.',
    'Hệ tiêu hóa gồm ống tiêu hóa và tuyến tiêu hóa. Miệng biến đổi một phần tinh bột, dạ dày một phần protein; ruột non là nơi tiêu hóa hóa học và hấp thụ chủ yếu; ruột già hấp thụ lại nước, tạo phân.',
    'Phòng sâu răng, viêm loét dạ dày bằng vệ sinh răng miệng, ăn uống điều độ. Giữ thực phẩm không nhiễm khuẩn, nhiễm độc, biến chất để phòng ngộ độc thực phẩm.',
  ],
};
