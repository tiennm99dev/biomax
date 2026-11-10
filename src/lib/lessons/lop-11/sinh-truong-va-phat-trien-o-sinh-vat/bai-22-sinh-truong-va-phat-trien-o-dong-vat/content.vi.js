/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Đặc điểm sinh trưởng và phát triển ở động vật; phát triển không qua biến thái, qua biến thái hoàn toàn và không hoàn toàn; vai trò của hormone sinh trưởng, thyroxine, hormone sinh dục, ecdysone và juvenile hormone; các nhân tố bên ngoài và ứng dụng.',
  intro:
    'Con gà con mới nở đã giống hệt gà mẹ, chỉ nhỏ hơn. Nhưng con sâu bò trên lá rau lại chẳng giống con bướm chút nào, còn con nòng nọc thì sống dưới nước, thở bằng mang, có đuôi. Vì sao cùng là động vật mà con non lại khác nhau đến vậy, và điều gì khiến chúng lớn lên, biến đổi?',
  objectives: [
    'Nêu được đặc điểm sinh trưởng và phát triển ở động vật.',
    'Phân biệt được phát triển không qua biến thái, qua biến thái hoàn toàn và qua biến thái không hoàn toàn; lấy được ví dụ.',
    'Trình bày được vai trò của các hormone đối với sinh trưởng, phát triển ở động vật có xương sống và côn trùng.',
    'Phân tích được ảnh hưởng của các nhân tố bên ngoài; vận dụng vào chăn nuôi, phòng trừ sâu hại và chăm sóc sức khoẻ con người.',
  ],
  sections: [
    {
      heading: 'Đặc điểm và các hình thức phát triển',
      blocks: [
        {
          type: 'p',
          text: 'Phần lớn động vật sinh trưởng đến một kích thước nhất định thì dừng lại (sinh trưởng có giới hạn). Phát triển ở động vật gồm giai đoạn phôi (từ hợp tử đến khi con non ra khỏi trứng hoặc cơ thể mẹ) và giai đoạn hậu phôi (từ con non đến trưởng thành, già và chết). Dựa vào sự khác nhau giữa con non và con trưởng thành ở giai đoạn hậu phôi, có ba hình thức phát triển:',
        },
        {
          type: 'table',
          head: ['Hình thức', 'Đặc điểm con non', 'Ví dụ'],
          rows: [
            [
              'Không qua biến thái',
              'Con non có hình dạng, cấu tạo, sinh lí tương tự con trưởng thành; lớn lên không qua giai đoạn biến đổi trung gian',
              'Người, thú, chim, bò sát, cá',
            ],
            [
              'Qua biến thái hoàn toàn',
              'Ấu trùng có hình dạng, cấu tạo, sinh lí rất khác con trưởng thành; phải qua giai đoạn trung gian (nhộng ở côn trùng) để biến đổi thành con trưởng thành',
              'Bướm, ruồi, muỗi, ong, ếch',
            ],
            [
              'Qua biến thái không hoàn toàn',
              'Ấu trùng (con non) gần giống con trưởng thành nhưng chưa hoàn thiện (chưa có cánh); lột xác nhiều lần để thành con trưởng thành',
              'Châu chấu, cào cào, gián, ve sầu',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vì sao côn trùng phải lột xác?',
          text: 'Côn trùng có bộ xương ngoài bằng kitin cứng, không lớn theo cơ thể. Mỗi lần lột xác, lớp vỏ cũ bong ra, cơ thể lớn thêm trước khi vỏ mới cứng lại.',
        },
      ],
    },
    {
      heading: 'Các nhân tố bên trong: di truyền và hormone',
      blocks: [
        {
          type: 'p',
          text: 'Mỗi loài sinh trưởng, phát triển theo chương trình di truyền riêng (kích thước tối đa, tốc độ lớn, tuổi trưởng thành); giới tính cũng ảnh hưởng (ở nhiều loài con đực lớn hơn con cái). Hormone điều hoà quá trình đó.',
        },
        {
          type: 'table',
          head: ['Hormone', 'Nơi tiết', 'Vai trò'],
          rows: [
            [
              'Hormone sinh trưởng (GH)',
              'Tuyến yên',
              'Kích thích phân chia tế bào, tăng kích thước tế bào, tăng tổng hợp protein, kích thích phát triển xương',
            ],
            [
              'Thyroxine',
              'Tuyến giáp',
              'Tăng chuyển hoá cơ bản, kích thích sinh trưởng, phát triển bình thường; gây biến thái nòng nọc thành ếch',
            ],
            [
              'Testosterone',
              'Tinh hoàn',
              'Ở tuổi dậy thì, kích thích phát triển mạnh xương, cơ và đặc điểm sinh dục phụ ở nam',
            ],
            [
              'Estrogen',
              'Buồng trứng',
              'Ở tuổi dậy thì, kích thích phát triển xương và đặc điểm sinh dục phụ ở nữ',
            ],
            [
              'Ecdysone',
              'Tuyến trước ngực (côn trùng)',
              'Gây lột xác, kích thích sâu biến thành nhộng và bướm',
            ],
            [
              'Juvenile hormone (JH)',
              'Thể allata (côn trùng)',
              'Phối hợp với ecdysone gây lột xác nhưng giữ dạng sâu, ức chế sâu biến thành nhộng, bướm',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Thiếu GH ở trẻ em: cơ thể chậm lớn, người bé nhỏ; thừa GH ở trẻ em: người khổng lồ; thừa GH ở người trưởng thành: các xương đầu chi to ra.',
            'Thiếu thyroxine (thường do thiếu iodine) ở trẻ em: chậm lớn, trí tuệ kém phát triển; ở nòng nọc: không biến thành ếch.',
          ],
        },
        {
          type: 'p',
          text: 'Thử điều khiển hai hormone lột xác ở sâu bướm: mỗi lần tiết ecdysone, sâu lột xác; mức juvenile hormone quyết định sâu vẫn là sâu hay hoá nhộng.',
        },
        { type: 'widget', name: 'lot-xac' },
      ],
    },
    {
      heading: 'Các nhân tố bên ngoài',
      blocks: [
        {
          type: 'list',
          items: [
            'Thức ăn: cung cấp nguyên liệu và năng lượng; thiếu chất (protein, vitamin, khoáng như calcium) làm động vật chậm lớn, còi xương.',
            'Nhiệt độ: mỗi loài có khoảng nhiệt độ thích hợp; động vật biến nhiệt sinh trưởng chậm khi trời lạnh; động vật hằng nhiệt tiêu tốn nhiều năng lượng để giữ thân nhiệt khi lạnh.',
            'Ánh sáng: tia tử ngoại của ánh sáng mặt trời biến tiền vitamin D ở da thành vitamin D, giúp hấp thụ calcium để phát triển xương; tắm nắng sáng sớm cho trẻ là vì vậy.',
            'Chất độc hại: rượu, thuốc lá, ma tuý, thuốc trừ sâu… gây hại cho sinh trưởng, phát triển, nhất là của thai nhi.',
          ],
        },
      ],
    },
    {
      heading: 'Ứng dụng',
      blocks: [
        {
          type: 'list',
          items: [
            'Chăn nuôi: chọn giống lớn nhanh, cho ăn đủ chất theo giai đoạn, cải thiện chuồng trại (nhiệt độ, ánh sáng) để vật nuôi sinh trưởng tốt.',
            'Phòng trừ sâu hại: dựa vào vòng đời, diệt sâu hại ở giai đoạn gây hại hoặc giai đoạn dễ diệt (sâu non, bọ gậy).',
            'Con người: dinh dưỡng hợp lí, luyện tập thể dục, tránh chất độc hại, chăm sóc sức khoẻ sinh sản và thai nhi giúp nâng cao tầm vóc, sức khoẻ.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Vòng đời bướm và châu chấu',
    instruction:
      'Bấm "Chạy hoạt hình" hoặc kéo thanh thời gian để xem hai vòng đời song song. Dừng ở từng mốc và so sánh: con non của loài nào giống con trưởng thành? Loài nào có giai đoạn nhộng?',
  },
  examples: [
    {
      problem:
        'Xếp các loài sau vào hình thức phát triển phù hợp: muỗi, gián, gà, ếch, ve sầu, cá chép.',
      steps: [
        'Muỗi: bọ gậy sống dưới nước, khác hẳn muỗi, qua cung quăng (nhộng): biến thái hoàn toàn.',
        'Ếch: nòng nọc thở bằng mang, có đuôi, khác hẳn ếch: biến thái hoàn toàn.',
        'Gián, ve sầu: con non giống con trưởng thành nhưng chưa có cánh, lột xác nhiều lần: biến thái không hoàn toàn.',
        'Gà, cá chép: con non giống con trưởng thành, không có giai đoạn biến đổi: không qua biến thái.',
      ],
      answer:
        'Biến thái hoàn toàn: muỗi, ếch; biến thái không hoàn toàn: gián, ve sầu; không qua biến thái: gà, cá chép.',
    },
    {
      problem:
        'Hai bể nuôi nòng nọc giống nhau, bể A có bổ sung iodine, bể B nước thiếu iodine. Sau nhiều tuần, nòng nọc bể A thành ếch con, nòng nọc bể B vẫn là nòng nọc. Giải thích.',
      steps: [
        'Iodine là thành phần cấu tạo nên thyroxine của tuyến giáp.',
        'Thyroxine gây biến thái ở lưỡng cư: nòng nọc mọc chân, tiêu biến đuôi, mang thay bằng phổi.',
        'Bể B thiếu iodine nên nòng nọc không tổng hợp đủ thyroxine, không biến thái được.',
      ],
      answer: 'Thiếu iodine thì thiếu thyroxine, nòng nọc không biến thái thành ếch.',
    },
    {
      problem:
        'Sâu bướm cải ăn lá rau, còn bướm chỉ hút mật hoa. Nên phun thuốc trừ sâu sinh học vào giai đoạn nào để bảo vệ rau? Nếu một chất làm sâu non tiết mạnh juvenile hormone mãi, chuyện gì xảy ra?',
      steps: [
        'Giai đoạn gây hại cho rau là sâu (ấu trùng), nên diệt khi sâu còn non, chưa hoá nhộng.',
        'Juvenile hormone cao giữ sâu ở dạng sâu sau mỗi lần lột xác.',
        'Nếu juvenile hormone luôn cao, sâu không hoá nhộng, không thành bướm, không sinh sản được.',
      ],
      answer:
        'Phun khi sâu còn non; juvenile hormone cao mãi thì sâu không hoá nhộng, không thành bướm.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Phát triển không qua biến thái là kiểu phát triển mà',
      options: [
        'con non có hình dạng, cấu tạo, sinh lí tương tự con trưởng thành',
        'con non khác hẳn con trưởng thành và phải qua giai đoạn nhộng',
        'con non phải lột xác nhiều lần mới có cánh',
        'con non sống dưới nước, con trưởng thành sống trên cạn',
      ],
      answer: 0,
      hints: ['Ví dụ: gà con và gà mẹ.'],
      solution:
        'Không qua biến thái: con non giống con trưởng thành, lớn lên không qua giai đoạn biến đổi trung gian (người, gà, cá…).',
    },
    {
      type: 'multi',
      prompt: 'Những loài nào phát triển qua biến thái hoàn toàn?',
      options: ['Bướm', 'Ruồi', 'Ếch', 'Châu chấu', 'Gián', 'Chó'],
      answers: [0, 1, 2],
      hints: ['Ấu trùng của chúng khác hẳn con trưởng thành.'],
      solution:
        'Bướm, ruồi (qua nhộng) và ếch (qua nòng nọc) biến thái hoàn toàn; châu chấu, gián biến thái không hoàn toàn; chó không qua biến thái.',
    },
    {
      type: 'choice',
      prompt: 'Điểm khác nhau cơ bản giữa biến thái hoàn toàn và không hoàn toàn ở côn trùng là',
      options: [
        'biến thái hoàn toàn có ấu trùng khác hẳn con trưởng thành và có giai đoạn nhộng',
        'biến thái không hoàn toàn có giai đoạn nhộng',
        'chỉ biến thái không hoàn toàn mới có lột xác',
        'biến thái hoàn toàn không có giai đoạn trứng',
      ],
      answer: 0,
      hints: ['So sánh vòng đời bướm và châu chấu trong hoạt hình.'],
      solution:
        'Bướm: sâu khác hẳn bướm, phải qua nhộng. Châu chấu: con non giống con trưởng thành, không có nhộng, chỉ lột xác nhiều lần.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi hormone với vai trò của nó.',
      left: [
        'Hormone sinh trưởng (GH)',
        'Thyroxine',
        'Testosterone',
        'Ecdysone',
        'Juvenile hormone',
      ],
      right: [
        'Kích thích phân chia, tăng kích thước tế bào, phát triển xương',
        'Gây biến thái nòng nọc thành ếch',
        'Phát triển xương, cơ và đặc điểm sinh dục phụ ở nam',
        'Gây lột xác ở côn trùng',
        'Ức chế sâu biến thành nhộng, bướm',
        'Thúc quả chín',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
      ],
      hints: ['Một lựa chọn bên phải là hormone thực vật, không dùng đến.'],
      solution:
        'GH: phân chia, lớn tế bào, phát triển xương; thyroxine: biến thái ếch; testosterone: đặc điểm nam; ecdysone: lột xác; juvenile hormone: ức chế hoá nhộng. Thúc quả chín là ethylene ở thực vật.',
    },
    {
      type: 'choice',
      prompt: 'Một trẻ em bị thiếu hormone sinh trưởng (GH) kéo dài sẽ',
      options: [
        'chậm lớn, người bé nhỏ',
        'trở thành người khổng lồ',
        'có các xương đầu chi to ra',
        'dậy thì sớm',
      ],
      answer: 0,
      hints: ['GH kích thích phát triển xương.'],
      solution:
        'Thiếu GH ở trẻ em làm xương và cơ thể chậm lớn, người bé nhỏ. Thừa GH mới gây khổng lồ.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao trẻ em ở vùng núi thiếu iodine dễ bị chậm lớn, trí tuệ kém phát triển?',
      options: [
        'Thiếu iodine thì tuyến giáp không tổng hợp đủ thyroxine',
        'Thiếu iodine thì thiếu hormone sinh dục',
        'Iodine là nguồn năng lượng chính của tế bào',
        'Iodine giúp hấp thụ calcium',
      ],
      answer: 0,
      hints: ['Iodine là thành phần của một hormone tuyến giáp.'],
      solution:
        'Iodine là nguyên liệu tổng hợp thyroxine; thiếu thyroxine làm giảm chuyển hoá, chậm lớn, não kém phát triển. Dùng muối iodine để phòng.',
    },
    {
      type: 'choice',
      prompt: 'Tắm nắng cho trẻ nhỏ vào sáng sớm có lợi vì',
      options: [
        'tia tử ngoại biến tiền vitamin D ở da thành vitamin D, giúp hấp thụ calcium cho xương',
        'ánh sáng giúp trẻ tổng hợp tinh bột',
        'ánh sáng làm tăng tiết juvenile hormone',
        'nắng sáng sớm diệt hết vi khuẩn trong cơ thể',
      ],
      answer: 0,
      hints: ['Liên quan đến một loại vitamin và xương.'],
      solution:
        'Tia tử ngoại yếu của nắng sớm chuyển tiền vitamin D thành vitamin D; vitamin D giúp hấp thụ calcium, xương phát triển, phòng còi xương.',
    },
    {
      type: 'text',
      prompt: 'Ở côn trùng, hormone gây lột xác có tên là gì?',
      accept: ['ecdysone', 'ecdyson', 'ecđixơn', 'ecdisone'],
      hints: ['Hormone này do tuyến trước ngực tiết ra.'],
      solution:
        'Ecdysone gây lột xác; cùng với juvenile hormone, nó quyết định sâu lột xác thành sâu hay hoá nhộng.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao châu chấu non phải lột xác nhiều lần mới thành châu chấu trưởng thành?',
      options: [
        'Lớp vỏ kitin cứng không lớn theo cơ thể',
        'Châu chấu non cần bỏ đi lớp mang',
        'Để hoá thành nhộng',
        'Để đổi màu cho hợp môi trường',
      ],
      answer: 0,
      hints: ['Côn trùng có bộ xương ngoài.'],
      solution:
        'Bộ xương ngoài bằng kitin không giãn ra được; mỗi lần lột xác, cơ thể lớn thêm và mầm cánh to dần đến khi cánh hoàn chỉnh.',
    },
    {
      type: 'choice',
      prompt:
        'Vào mùa đông, cá rô phi nuôi trong ao lớn chậm hơn hẳn mùa hè. Nguyên nhân chủ yếu là',
      options: [
        'cá là động vật biến nhiệt, nhiệt độ thấp làm chậm quá trình chuyển hoá',
        'cá không ăn được vào mùa đông vì thiếu ánh sáng',
        'nước lạnh làm cá tiết nhiều hormone sinh trưởng',
        'mùa đông cá bước vào giai đoạn biến thái',
      ],
      answer: 0,
      hints: ['Thân nhiệt của cá thay đổi theo nhiệt độ nước.'],
      solution:
        'Ở động vật biến nhiệt, nhiệt độ thấp làm giảm tốc độ các phản ứng chuyển hoá, cá ăn ít, sinh trưởng chậm.',
    },
  ],
  takeaways: [
    'Động vật thường sinh trưởng có giới hạn; phát triển gồm giai đoạn phôi và hậu phôi.',
    'Không qua biến thái: con non giống con trưởng thành (người, gà). Biến thái hoàn toàn: ấu trùng khác hẳn, qua giai đoạn trung gian (bướm, ruồi, ếch). Biến thái không hoàn toàn: con non gần giống, lột xác nhiều lần (châu chấu, gián).',
    'GH, thyroxine, testosterone, estrogen điều hoà sinh trưởng, phát triển ở động vật có xương sống; ecdysone và juvenile hormone điều hoà lột xác, biến thái ở côn trùng.',
    'Thức ăn, nhiệt độ, ánh sáng, chất độc hại ảnh hưởng đến sinh trưởng, phát triển; hiểu biết này dùng trong chăn nuôi, phòng trừ sâu hại và chăm sóc sức khoẻ.',
  ],
};
