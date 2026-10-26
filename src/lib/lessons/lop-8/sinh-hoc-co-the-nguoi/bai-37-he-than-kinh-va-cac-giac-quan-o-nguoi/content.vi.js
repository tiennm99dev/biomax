/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Cấu tạo và chức năng của hệ thần kinh; một số bệnh về hệ thần kinh và tác hại của chất gây nghiện; cấu tạo, chức năng của mắt và tai, quá trình thu nhận ánh sáng và âm thanh; tật cận thị, viễn thị, một số bệnh về mắt, tai và cách bảo vệ.',
  intro:
    'Một quả bóng bay về phía em: mắt nhìn thấy bóng, não tính hướng bay và ra lệnh cho tay giơ lên bắt, tất cả chỉ trong chưa đầy một giây. Hệ thần kinh và các giác quan phối hợp với nhau như thế nào? Vì sao có bạn phải đeo kính mới nhìn rõ chữ trên bảng?',
  objectives: [
    'Nêu được chức năng của hệ thần kinh; phân biệt được bộ phận trung ương và bộ phận ngoại biên của hệ thần kinh.',
    'Trình bày được một số bệnh về hệ thần kinh, cách phòng tránh và tác hại của các chất gây nghiện.',
    'Nêu được cấu tạo, chức năng của mắt và tai; mô tả được quá trình thu nhận ánh sáng và âm thanh.',
    'Trình bày được tật cận thị, viễn thị, một số bệnh về mắt, tai và cách phòng tránh.',
  ],
  sections: [
    {
      heading: 'Hệ thần kinh',
      blocks: [
        {
          type: 'p',
          text: 'Hệ thần kinh thu nhận thông tin từ môi trường trong và ngoài cơ thể, xử lí thông tin rồi điều khiển, điều hòa và phối hợp hoạt động của các cơ quan, giúp cơ thể là một khối thống nhất và thích nghi với môi trường.',
        },
        {
          type: 'table',
          caption: 'Cấu tạo hệ thần kinh',
          head: ['Bộ phận', 'Gồm', 'Chức năng chính'],
          rows: [
            [
              'Trung ương',
              'Não (trong hộp sọ) và tủy sống (trong ống xương sống)',
              'Tiếp nhận, xử lí thông tin và phát lệnh điều khiển',
            ],
            [
              'Ngoại biên',
              'Dây thần kinh và hạch thần kinh',
              'Dẫn truyền xung thần kinh giữa trung ương và các cơ quan',
            ],
          ],
        },
        { type: 'widget', name: 'than-kinh' },
        {
          type: 'table',
          caption: 'Một số bệnh về hệ thần kinh',
          head: ['Bệnh', 'Biểu hiện'],
          rows: [
            [
              'Alzheimer',
              'Suy giảm trí nhớ, khả năng suy nghĩ, thay đổi hành vi; thường gặp ở người cao tuổi',
            ],
            ['Parkinson', 'Run tay chân, cử động chậm, cứng cơ, mất thăng bằng'],
            ['Động kinh', 'Co giật, có thể mất ý thức trong thời gian ngắn, lặp đi lặp lại'],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Chất gây nghiện',
          text: 'Ma túy, rượu bia, thuốc lá… tác động lên hệ thần kinh, gây nghiện, làm rối loạn hoạt động của não, suy giảm trí nhớ, tổn hại sức khỏe và kéo theo nhiều hệ lụy cho gia đình, xã hội. Tuyệt đối không thử ma túy; không uống rượu bia, không hút thuốc lá.',
        },
        {
          type: 'p',
          text: 'Để bảo vệ hệ thần kinh: ngủ đủ giấc, học tập và nghỉ ngơi hợp lí, ăn uống đủ chất, tập thể dục, tránh căng thẳng kéo dài, đội mũ bảo hiểm khi đi xe máy, xe đạp điện, tránh xa chất gây nghiện.',
        },
      ],
    },
    {
      heading: 'Thị giác',
      blocks: [
        {
          type: 'p',
          text: 'Cơ quan thị giác gồm mắt (cầu mắt) và dây thần kinh thị giác. Cầu mắt có ba lớp màng: màng cứng (phần trước trong suốt là màng giác), màng mạch (phần trước là lòng đen, giữa có lỗ đồng tử) và màng lưới chứa các tế bào thụ cảm thị giác (tế bào nón, tế bào que). Bên trong cầu mắt là môi trường trong suốt: thủy dịch, thể thủy tinh và dịch thủy tinh.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Quá trình thu nhận ánh sáng',
          text: 'Ánh sáng từ vật đi qua màng giác, thủy dịch, đồng tử, thể thủy tinh, dịch thủy tinh rồi hội tụ trên màng lưới, tạo ảnh. Tế bào thụ cảm ở màng lưới bị kích thích, phát sinh xung thần kinh truyền theo dây thần kinh thị giác về vùng thị giác ở não, cho ta cảm giác nhìn thấy vật. Thể thủy tinh có thể phồng lên (nhìn vật ở gần) hoặc dẹt xuống (nhìn vật ở xa) để ảnh luôn rơi đúng màng lưới.',
        },
        {
          type: 'table',
          caption: 'Tật cận thị và viễn thị',
          head: ['Tật', 'Nguyên nhân', 'Ảnh của vật', 'Khắc phục'],
          rows: [
            [
              'Cận thị: chỉ nhìn rõ vật ở gần',
              'Cầu mắt dài bẩm sinh, hoặc thể thủy tinh quá phồng do đọc sách quá gần, sai tư thế lâu ngày',
              'Hiện ở trước màng lưới khi nhìn vật ở xa',
              'Đeo kính phân kì (kính cận)',
            ],
            [
              'Viễn thị: chỉ nhìn rõ vật ở xa',
              'Cầu mắt ngắn bẩm sinh, hoặc thể thủy tinh bị lão hóa, kém đàn hồi ở người già',
              'Hiện ở sau màng lưới khi nhìn vật ở gần',
              'Đeo kính hội tụ (kính viễn, kính lão)',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Bệnh đau mắt đỏ (viêm kết mạc) do virus, vi khuẩn; lây qua tiếp xúc, dùng chung khăn, chậu rửa mặt.',
            'Đục thủy tinh thể: thể thủy tinh bị mờ đục, thường ở người cao tuổi, làm nhìn mờ.',
            'Bảo vệ mắt: ngồi học đúng tư thế, đủ ánh sáng, giữ khoảng cách khi đọc sách, không dùng máy tính, điện thoại quá lâu; giữ vệ sinh mắt, không dùng chung khăn; ăn thức ăn giàu vitamin A; khám mắt định kì.',
          ],
        },
      ],
    },
    {
      heading: 'Thính giác',
      blocks: [
        {
          type: 'table',
          caption: 'Cấu tạo của tai',
          head: ['Phần', 'Gồm', 'Chức năng'],
          rows: [
            [
              'Tai ngoài',
              'Vành tai, ống tai, màng nhĩ',
              'Hứng và hướng sóng âm vào; màng nhĩ rung theo sóng âm',
            ],
            [
              'Tai giữa',
              'Chuỗi xương tai (xương búa, xương đe, xương bàn đạp), vòi nhĩ',
              'Truyền và khuếch đại rung động; vòi nhĩ cân bằng áp suất hai bên màng nhĩ',
            ],
            [
              'Tai trong',
              'Ốc tai (chứa tế bào thụ cảm thính giác) và bộ phận tiền đình',
              'Ốc tai thu nhận âm thanh; bộ phận tiền đình giúp giữ thăng bằng',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Quá trình thu nhận âm thanh',
          text: 'Sóng âm được vành tai hứng, đi qua ống tai làm màng nhĩ rung. Rung động truyền qua chuỗi xương tai vào tai trong, làm chuyển động chất lỏng trong ốc tai và kích thích tế bào thụ cảm thính giác. Xung thần kinh xuất hiện, theo dây thần kinh thính giác về vùng thính giác ở não, cho ta cảm nhận âm thanh.',
        },
        {
          type: 'p',
          text: 'Bệnh viêm tai giữa thường gặp ở trẻ em, do vi khuẩn từ họng theo vòi nhĩ lên tai giữa, gây đau tai, chảy mủ, nghe kém. Để bảo vệ tai: vệ sinh tai đúng cách, không dùng vật nhọn ngoáy tai; chữa dứt điểm viêm họng, viêm mũi; tránh tiếng ồn lớn, không nghe tai nghe với âm lượng lớn trong thời gian dài.',
        },
      ],
    },
  ],
  explore: {
    title: 'Mô phỏng mắt nhìn vật',
    instruction:
      'Chọn loại mắt và kéo thanh trượt để đưa vật lại gần hay ra xa. Quan sát thể thủy tinh phồng hay dẹt và ảnh hiện trên, trước hay sau màng lưới. Với mắt cận thị và viễn thị, bật "Đeo kính" để xem kính khắc phục tật như thế nào.',
  },
  examples: [
    {
      problem:
        'Vì sao người cận thị nhìn rõ chữ trong sách nhưng không nhìn rõ chữ trên bảng? Cần khắc phục bằng cách nào?',
      steps: [
        'Ở mắt cận thị, cầu mắt dài hoặc thể thủy tinh quá phồng nên mắt hội tụ ánh sáng quá mạnh.',
        'Khi nhìn vật ở xa (chữ trên bảng), ảnh hiện ở trước màng lưới, trên màng lưới chỉ có vệt mờ nên nhìn không rõ.',
        'Khi nhìn vật ở gần (chữ trong sách), ánh sáng tới mắt phân kì hơn nên ảnh lùi về đúng màng lưới, nhìn rõ.',
        'Kính phân kì làm chùm sáng tới mắt loe rộng ra hơn, bù lại độ hội tụ quá mạnh của mắt, đưa ảnh của vật ở xa lùi về đúng màng lưới.',
      ],
      answer:
        'Vì ảnh của vật ở xa hiện ở trước màng lưới. Khắc phục bằng kính phân kì (kính cận) và giữ thói quen học tập đúng tư thế.',
    },
    {
      problem: 'Hãy trình bày đường đi của âm thanh từ khi sóng âm tới tai đến khi ta nghe được.',
      steps: [
        'Vành tai hứng sóng âm, ống tai dẫn sóng âm đến màng nhĩ, màng nhĩ rung.',
        'Chuỗi xương tai (búa, đe, bàn đạp) truyền rung động vào tai trong.',
        'Chất lỏng trong ốc tai chuyển động, kích thích tế bào thụ cảm thính giác phát sinh xung thần kinh.',
        'Xung thần kinh theo dây thần kinh thính giác về vùng thính giác ở não.',
      ],
      answer:
        'Vành tai → ống tai → màng nhĩ → chuỗi xương tai → ốc tai (tế bào thụ cảm) → dây thần kinh thính giác → vùng thính giác ở não.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Bộ phận trung ương của hệ thần kinh gồm',
      options: [
        'não và tủy sống',
        'dây thần kinh và hạch thần kinh',
        'não và dây thần kinh',
        'tủy sống và hạch thần kinh',
      ],
      answer: 0,
      hints: ['Bộ phận trung ương được xương bảo vệ: hộp sọ và cột sống.'],
      solution: 'Trung ương gồm não và tủy sống; ngoại biên gồm dây thần kinh và hạch thần kinh.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp đường đi của ánh sáng từ vật đến màng lưới.',
      items: ['Thể thủy tinh', 'Màng giác', 'Dịch thủy tinh', 'Thủy dịch', 'Màng lưới'],
      answer: [1, 3, 0, 2, 4],
      hints: ['Màng giác nằm ở phía trước, ngoài cùng của cầu mắt.'],
      solution: 'Màng giác → thủy dịch → (đồng tử) → thể thủy tinh → dịch thủy tinh → màng lưới.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi tật của mắt với vị trí ảnh và loại kính khắc phục.',
      left: ['Cận thị', 'Viễn thị'],
      right: [
        'Ảnh của vật ở gần hiện sau màng lưới; đeo kính hội tụ',
        'Ảnh của vật ở xa hiện trước màng lưới; đeo kính phân kì',
        'Ảnh luôn hiện đúng trên màng lưới; không cần kính',
      ],
      pairs: [
        [0, 1],
        [1, 0],
      ],
      hints: ['Người cận thị không nhìn rõ vật ở xa.'],
      solution:
        'Cận thị: ảnh của vật ở xa ở trước màng lưới, đeo kính phân kì. Viễn thị: ảnh của vật ở gần ở sau màng lưới, đeo kính hội tụ.',
    },
    {
      type: 'choice',
      prompt: 'Khi chuyển từ nhìn bảng sang nhìn vở trên bàn, thể thủy tinh thay đổi thế nào?',
      options: ['Dẹt xuống', 'Phồng lên', 'Không thay đổi', 'Di chuyển ra trước'],
      answer: 1,
      hints: ['Nhìn vật ở gần cần hội tụ ánh sáng mạnh hơn.'],
      solution: 'Vở ở gần hơn bảng nên thể thủy tinh phồng lên để ảnh vẫn rơi đúng màng lưới.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi bộ phận của tai với chức năng của nó.',
      left: ['Màng nhĩ', 'Chuỗi xương tai', 'Ốc tai', 'Bộ phận tiền đình'],
      right: [
        'Giúp giữ thăng bằng cơ thể',
        'Rung lên khi sóng âm tới',
        'Chứa tế bào thụ cảm thính giác',
        'Truyền rung động vào tai trong',
      ],
      pairs: [
        [0, 1],
        [1, 3],
        [2, 2],
        [3, 0],
      ],
      hints: ['Tế bào thụ cảm thính giác nằm ở tai trong.'],
      solution:
        'Màng nhĩ rung khi sóng âm tới; chuỗi xương tai truyền rung động; ốc tai chứa tế bào thụ cảm thính giác; bộ phận tiền đình giữ thăng bằng.',
    },
    {
      type: 'choice',
      prompt: 'Bệnh viêm tai giữa ở trẻ em thường do nguyên nhân nào?',
      options: [
        'Vi khuẩn từ họng theo vòi nhĩ lên tai giữa',
        'Thiếu vitamin A',
        'Nhìn màn hình quá lâu',
        'Ăn quá mặn',
      ],
      answer: 0,
      hints: ['Vòi nhĩ nối tai giữa với họng.'],
      solution:
        'Vi khuẩn gây viêm họng, viêm mũi có thể theo vòi nhĩ lên tai giữa gây viêm tai giữa.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các thói quen giúp phòng tránh cận thị.',
      options: [
        'Ngồi học đúng tư thế, đủ ánh sáng',
        'Đọc sách khi nằm, trên xe đang chạy',
        'Nghỉ ngơi cho mắt sau mỗi khoảng thời gian dùng điện thoại, máy tính',
        'Giữ khoảng cách hợp lí từ mắt đến sách vở',
        'Xem điện thoại trong bóng tối',
      ],
      answers: [0, 2, 3],
      hints: ['Thói quen nào bắt mắt điều tiết quá nhiều và lâu?'],
      solution:
        'Ngồi đúng tư thế, đủ sáng, giữ khoảng cách và cho mắt nghỉ ngơi giúp phòng cận thị. Đọc sách khi nằm, trên xe, xem điện thoại trong bóng tối làm mắt mỏi, dễ cận thị.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các bệnh về hệ thần kinh.',
      options: ['Alzheimer', 'Parkinson', 'Động kinh', 'Sỏi thận', 'Viêm phổi'],
      answers: [0, 1, 2],
      hints: ['Sỏi thận và viêm phổi thuộc hệ cơ quan khác.'],
      solution:
        'Alzheimer, Parkinson, động kinh là bệnh về hệ thần kinh; sỏi thận thuộc hệ bài tiết, viêm phổi thuộc hệ hô hấp.',
    },
    {
      type: 'number',
      prompt:
        'Một mắt cận thị chỉ nhìn rõ vật cách mắt từ $17$ cm đến $50$ cm. Khoảng nhìn rõ của mắt đó dài bao nhiêu xentimét?',
      answer: 33,
      unit: 'cm',
      hints: ['Lấy khoảng cách xa nhất trừ khoảng cách gần nhất.'],
      solution: '$50 - 17 = 33$ cm. Vật cách mắt xa hơn $50$ cm thì mắt này nhìn mờ.',
    },
  ],
  takeaways: [
    'Hệ thần kinh gồm bộ phận trung ương (não, tủy sống) và bộ phận ngoại biên (dây thần kinh, hạch thần kinh); điều khiển, điều hòa, phối hợp hoạt động các cơ quan.',
    'Alzheimer, Parkinson, động kinh là bệnh về hệ thần kinh; chất gây nghiện làm tổn hại hệ thần kinh.',
    'Ánh sáng qua màng giác, thủy dịch, thể thủy tinh, dịch thủy tinh hội tụ trên màng lưới; xung thần kinh theo dây thần kinh thị giác về não.',
    'Cận thị: ảnh của vật ở xa trước màng lưới, đeo kính phân kì. Viễn thị: ảnh của vật ở gần sau màng lưới, đeo kính hội tụ.',
    'Tai gồm tai ngoài, tai giữa, tai trong; ốc tai thu nhận âm thanh, bộ phận tiền đình giữ thăng bằng.',
  ],
};
