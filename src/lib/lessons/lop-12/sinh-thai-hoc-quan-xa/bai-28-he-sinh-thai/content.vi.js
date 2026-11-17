/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Hệ sinh thái gồm quần xã sinh vật và sinh cảnh; đặc điểm chung của hệ sinh thái (trao đổi vật chất, dòng năng lượng, hệ mở tự điều chỉnh); thành phần vô sinh và hữu sinh (sinh vật sản xuất, tiêu thụ, phân giải); các kiểu hệ sinh thái tự nhiên trên cạn, dưới nước và hệ sinh thái nhân tạo.',
  intro:
    'Một bể cá cảnh có rong, ốc, cá được đặt gần cửa sổ có thể tồn tại nhiều tháng mà gần như không cần chăm sóc. Vì sao? Bể cá ấy, một cái ao, một khu rừng hay cả Trái Đất đều là những hệ sinh thái. Chúng gồm những thành phần nào và có những kiểu hệ sinh thái nào?',
  objectives: [
    'Phát biểu được khái niệm hệ sinh thái; nêu được đặc điểm chung của hệ sinh thái.',
    'Phân tích được các thành phần cấu trúc của hệ sinh thái: thành phần vô sinh và thành phần hữu sinh (sinh vật sản xuất, sinh vật tiêu thụ, sinh vật phân giải) cùng vai trò của từng thành phần.',
    'Phân biệt được các kiểu hệ sinh thái: tự nhiên (trên cạn, dưới nước) và nhân tạo; so sánh được hệ sinh thái tự nhiên với hệ sinh thái nhân tạo.',
  ],
  sections: [
    {
      heading: 'Khái niệm và đặc điểm chung của hệ sinh thái',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Hệ sinh thái',
          text: 'Hệ sinh thái là một cấp độ tổ chức sống, bao gồm quần xã sinh vật và sinh cảnh (môi trường vô sinh của quần xã). Các thành phần trong hệ sinh thái luôn tác động qua lại và gắn bó với nhau thành một thể thống nhất, tương đối ổn định.',
        },
        {
          type: 'tex',
          tex: '\\text{Hệ sinh thái} = \\text{Quần xã sinh vật} + \\text{Sinh cảnh}',
        },
        {
          type: 'list',
          items: [
            'Trong hệ sinh thái luôn có sự trao đổi vật chất và năng lượng giữa các sinh vật với nhau và giữa quần xã với sinh cảnh, tạo thành chu trình vật chất và dòng năng lượng.',
            'Hệ sinh thái là một hệ thống mở: luôn nhận và thải vật chất, năng lượng ra môi trường hoặc các hệ sinh thái khác. Hệ sinh thái có khả năng tự điều chỉnh để duy trì trạng thái cân bằng động.',
            'Kích thước hệ sinh thái rất đa dạng: một bể cá, một vườn hoa, một cái ao, một khu rừng... Hệ sinh thái lớn nhất là sinh quyển (toàn bộ Trái Đất).',
          ],
        },
        {
          type: 'p',
          text: 'Ví dụ: hệ sinh thái hồ tự nhiên gồm quần xã (tảo, thực vật thuỷ sinh, tôm, cá, vi khuẩn...) và sinh cảnh (nước, nhiệt độ, ánh sáng, nồng độ oxygen hoà tan, muối khoáng, bùn đáy).',
        },
      ],
    },
    {
      heading: 'Thành phần cấu trúc của hệ sinh thái',
      blocks: [
        {
          type: 'table',
          head: ['Thành phần', 'Gồm', 'Vai trò'],
          rows: [
            [
              'Vô sinh (sinh cảnh)',
              'Các yếu tố khí hậu (ánh sáng, nhiệt độ, độ ẩm, lượng mưa, gió...); các chất vô cơ ($\\mathrm{H_2O}$, $\\mathrm{CO_2}$, $\\mathrm{O_2}$, $\\mathrm{N_2}$, muối khoáng...); các chất hữu cơ (xác sinh vật, lá rụng, chất thải, mùn...)',
              'Cung cấp năng lượng, nơi sống và nguyên liệu cho sinh vật; nhận lại chất vô cơ do sinh vật thải ra',
            ],
            [
              'Sinh vật sản xuất',
              'Thực vật, tảo, vi khuẩn lam và một số vi khuẩn tự dưỡng',
              'Tổng hợp chất hữu cơ từ chất vô cơ nhờ năng lượng ánh sáng (hoặc năng lượng hoá học), đưa năng lượng vào hệ sinh thái',
            ],
            [
              'Sinh vật tiêu thụ',
              'Động vật ăn thực vật, động vật ăn thịt, sinh vật kí sinh',
              'Sử dụng chất hữu cơ của sinh vật khác, chuyển năng lượng qua các bậc dinh dưỡng; góp phần thụ phấn, phát tán hạt, điều hoà số lượng loài khác',
            ],
            [
              'Sinh vật phân giải',
              'Chủ yếu là vi khuẩn, nấm; một số động vật ăn mùn bã (giun đất, sâu bọ...)',
              'Phân giải xác và chất thải thành chất vô cơ trả lại môi trường, khép kín chu trình vật chất',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Thành phần hữu sinh chính là quần xã sinh vật. Thiếu sinh vật sản xuất thì hệ không có nguồn chất hữu cơ và năng lượng mới; thiếu sinh vật phân giải thì xác và chất thải tích tụ, chất khoáng không được trả lại cho sinh vật sản xuất.',
        },
      ],
    },
    {
      heading: 'Các kiểu hệ sinh thái',
      blocks: [
        {
          type: 'list',
          items: [
            'Hệ sinh thái tự nhiên được hình thành và tồn tại theo quy luật tự nhiên, ít hoặc không có sự can thiệp của con người. Trên cạn: rừng mưa nhiệt đới, rừng lá rộng rụng lá ôn đới, rừng lá kim phương Bắc (taiga), thảo nguyên, savan, hoang mạc, sa mạc, đồng rêu hàn đới. Dưới nước: nước mặn (rạn san hô, rừng ngập mặn, vùng biển khơi) và nước ngọt (nước đứng như ao, hồ, đầm; nước chảy như sông, suối).',
            'Hệ sinh thái nhân tạo do con người tạo ra và duy trì: đồng ruộng, ao nuôi cá, rừng trồng, công viên, thành phố, mô hình VAC (vườn – ao – chuồng)...',
          ],
        },
        {
          type: 'table',
          caption: 'So sánh hệ sinh thái tự nhiên và hệ sinh thái nhân tạo',
          head: ['Đặc điểm', 'Hệ sinh thái tự nhiên', 'Hệ sinh thái nhân tạo'],
          rows: [
            [
              'Nguồn vật chất, năng lượng',
              'Từ tự nhiên (chủ yếu là ánh sáng mặt trời)',
              'Từ tự nhiên và được con người bổ sung (phân bón, thức ăn, nước tưới, thuốc bảo vệ thực vật...)',
            ],
            [
              'Thành phần loài',
              'Nhiều loài, độ đa dạng cao',
              'Ít loài, chủ yếu là cây trồng, vật nuôi',
            ],
            ['Quan hệ giữa các loài', 'Phức tạp, lưới thức ăn nhiều mắt xích', 'Đơn giản'],
            [
              'Khả năng tự điều chỉnh',
              'Cao, tương đối ổn định',
              'Thấp, kém ổn định, phụ thuộc vào sự chăm sóc của con người',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Nếu không còn được con người chăm sóc, hệ sinh thái nhân tạo sẽ dần biến đổi thành hệ sinh thái tự nhiên (ví dụ ruộng bỏ hoang dần thành trảng cỏ, cây bụi). Để nâng cao hiệu quả và tính bền vững của hệ sinh thái nhân tạo, cần tăng đa dạng loài hợp lí, sử dụng phân hữu cơ, thiên địch, luân canh, xen canh...',
        },
        { type: 'widget', name: 'kieu-he-sinh-thai' },
      ],
    },
  ],
  explore: {
    title: 'Dựng một hệ sinh thái bể cá',
    instruction:
      'Bấm từng thành phần để thả vào bể hoặc lấy ra. Quan sát các thành phần được xếp vào sinh cảnh và ba nhóm sinh vật; đọc nhận xét để biết bể còn thiếu gì mới tự duy trì được. Thử bỏ ánh sáng, bỏ rong và tảo, hoặc bỏ vi khuẩn phân giải để thấy vai trò của từng thành phần.',
  },
  examples: [
    {
      problem:
        'Một cái ao có: nước, bùn đáy, ánh sáng, khí $\\mathrm{O_2}$ và $\\mathrm{CO_2}$ hoà tan, rong, bèo, tảo, tôm, cá mè, cá quả, vi khuẩn, nấm. Hãy xếp các thành phần vào thành phần vô sinh và các nhóm sinh vật của hệ sinh thái ao.',
      steps: [
        'Thành phần vô sinh (sinh cảnh): nước, bùn đáy (chứa chất hữu cơ và muối khoáng), ánh sáng, khí $\\mathrm{O_2}$, $\\mathrm{CO_2}$ hoà tan.',
        'Sinh vật sản xuất: rong, bèo, tảo (quang hợp tạo chất hữu cơ).',
        'Sinh vật tiêu thụ: tôm, cá mè (ăn tảo, sinh vật nhỏ), cá quả (ăn cá nhỏ, tôm).',
        'Sinh vật phân giải: vi khuẩn, nấm.',
      ],
      answer:
        'Vô sinh: nước, bùn, ánh sáng, khí hoà tan; sản xuất: rong, bèo, tảo; tiêu thụ: tôm, cá mè, cá quả; phân giải: vi khuẩn, nấm.',
    },
    {
      problem:
        'Vì sao một cánh đồng lúa (hệ sinh thái nhân tạo) dễ bị dịch sâu bệnh bùng phát hơn một khu rừng tự nhiên? Nêu một biện pháp khắc phục.',
      steps: [
        'Cánh đồng lúa chủ yếu trồng một loài, ít loài khác nên lưới thức ăn đơn giản, ít thiên địch.',
        'Khi sâu hại tăng, ít loài khống chế được chúng, hệ có khả năng tự điều chỉnh thấp.',
        'Rừng tự nhiên có nhiều loài, lưới thức ăn phức tạp, nhiều thiên địch nên số lượng sâu hại được khống chế.',
        'Biện pháp: xen canh, luân canh, trồng hoa ở bờ ruộng để nuôi thiên địch, hạn chế thuốc hoá học.',
      ],
      answer:
        'Vì hệ sinh thái nhân tạo ít loài, quan hệ đơn giản, khả năng tự điều chỉnh thấp; có thể tăng đa dạng loài, bảo vệ thiên địch.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Hệ sinh thái bao gồm',
      options: [
        'quần xã sinh vật và sinh cảnh của quần xã',
        'các quần thể cùng loài',
        'các sinh vật sản xuất và sinh vật tiêu thụ',
        'các nhân tố vô sinh của môi trường',
      ],
      answer: 0,
      hints: ['Hệ sinh thái có cả phần sống và phần không sống.'],
      solution:
        'Hệ sinh thái = quần xã sinh vật (thành phần hữu sinh) + sinh cảnh (thành phần vô sinh).',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi thành phần của hệ sinh thái rừng với nhóm phù hợp.',
      left: ['Lá rụng, xác động vật', 'Cây gỗ, cây bụi', 'Hươu, nai', 'Nấm, vi khuẩn trong đất'],
      right: [
        'Thành phần vô sinh (chất hữu cơ)',
        'Sinh vật sản xuất',
        'Sinh vật tiêu thụ',
        'Sinh vật phân giải',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Xác sinh vật đã chết không còn là sinh vật sống.'],
      solution:
        'Lá rụng, xác động vật là chất hữu cơ thuộc thành phần vô sinh; cây quang hợp là sinh vật sản xuất; hươu, nai ăn cây là sinh vật tiêu thụ; nấm, vi khuẩn phân giải xác là sinh vật phân giải.',
    },
    {
      type: 'choice',
      prompt: 'Vai trò chủ yếu của sinh vật phân giải trong hệ sinh thái là',
      options: [
        'phân giải xác và chất thải thành chất vô cơ trả lại môi trường',
        'tổng hợp chất hữu cơ từ chất vô cơ',
        'làm thức ăn cho động vật ăn thịt',
        'cung cấp năng lượng ánh sáng cho hệ',
      ],
      answer: 0,
      hints: ['Không có nhóm này, xác sinh vật sẽ tích tụ.'],
      solution:
        'Sinh vật phân giải chuyển chất hữu cơ trong xác, chất thải thành chất vô cơ, trả lại cho sinh vật sản xuất sử dụng, khép kín chu trình vật chất.',
    },
    {
      type: 'multi',
      prompt: 'Những hệ sinh thái nào sau đây là hệ sinh thái nhân tạo?',
      options: ['Ruộng lúa', 'Ao nuôi cá', 'Rừng cao su', 'Rạn san hô', 'Rừng mưa nhiệt đới'],
      answers: [0, 1, 2],
      hints: ['Hệ sinh thái nhân tạo do con người tạo ra và duy trì.'],
      solution:
        'Ruộng lúa, ao nuôi cá, rừng cao su do con người tạo ra và chăm sóc: nhân tạo. Rạn san hô, rừng mưa nhiệt đới hình thành tự nhiên.',
    },
    {
      type: 'choice',
      prompt: 'So với hệ sinh thái tự nhiên, hệ sinh thái nhân tạo có đặc điểm',
      options: [
        'ít loài, quan hệ giữa các loài đơn giản, khả năng tự điều chỉnh thấp',
        'nhiều loài, lưới thức ăn phức tạp, rất ổn định',
        'không cần nguồn năng lượng từ mặt trời',
        'không có sinh vật phân giải',
      ],
      answer: 0,
      hints: ['Nghĩ tới một cánh đồng chỉ trồng một giống lúa.'],
      solution:
        'Hệ sinh thái nhân tạo ít loài, quan hệ đơn giản, kém ổn định và phải được con người bổ sung vật chất, năng lượng, chăm sóc thường xuyên. Nó vẫn nhận năng lượng mặt trời và vẫn có sinh vật phân giải.',
    },
    {
      type: 'choice',
      prompt:
        'Một bể kín chứa nước, rong, cá, ốc và vi khuẩn được đặt trong phòng tối hoàn toàn. Sau một thời gian, điều gì xảy ra?',
      options: [
        'Rong không quang hợp được, hết nguồn chất hữu cơ và oxygen mới, các sinh vật dần chết',
        'Hệ vẫn ổn định vì có đủ ba nhóm sinh vật',
        'Cá tăng số lượng vì không bị ánh sáng làm hại',
        'Vi khuẩn chuyển thành sinh vật sản xuất thay rong',
      ],
      answer: 0,
      hints: ['Năng lượng đi vào hệ sinh thái từ đâu?'],
      solution:
        'Ánh sáng là nguồn năng lượng cho sinh vật sản xuất. Trong tối, rong không quang hợp, không tạo chất hữu cơ và oxygen, cá, ốc thiếu thức ăn và oxygen nên dần chết.',
    },
    {
      type: 'choice',
      prompt: 'Hệ sinh thái lớn nhất trên Trái Đất là',
      options: ['sinh quyển', 'đại dương', 'rừng mưa nhiệt đới Amazon', 'sa mạc Sahara'],
      answer: 0,
      hints: ['Hệ sinh thái này bao trùm mọi hệ sinh thái khác.'],
      solution:
        'Sinh quyển gồm toàn bộ sinh vật và môi trường sống của chúng trên Trái Đất, là hệ sinh thái lớn nhất.',
    },
    {
      type: 'text',
      prompt:
        'Thực vật, tảo, vi khuẩn lam tổng hợp chất hữu cơ từ chất vô cơ nhờ năng lượng ánh sáng. Chúng thuộc nhóm sinh vật nào trong hệ sinh thái?',
      accept: ['sinh vật sản xuất', 'sinh vat san xuat'],
      hints: ['Nhóm này "làm ra" chất hữu cơ cho cả hệ.'],
      solution:
        'Đó là sinh vật sản xuất (sinh vật tự dưỡng), mở đầu dòng năng lượng trong hệ sinh thái.',
    },
  ],
  takeaways: [
    'Hệ sinh thái gồm quần xã sinh vật và sinh cảnh, tác động qua lại thành một thể thống nhất; là hệ mở, tự điều chỉnh, có chu trình vật chất và dòng năng lượng.',
    'Thành phần vô sinh: khí hậu, chất vô cơ, chất hữu cơ; thành phần hữu sinh: sinh vật sản xuất, sinh vật tiêu thụ, sinh vật phân giải.',
    'Hệ sinh thái tự nhiên gồm hệ trên cạn và dưới nước (nước mặn, nước ngọt); hệ sinh thái nhân tạo do con người tạo ra, ít loài, kém ổn định, cần con người bổ sung vật chất, năng lượng.',
  ],
};
