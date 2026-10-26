/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Thành phần và chức năng của máu; miễn dịch, kháng nguyên, kháng thể và vaccine; nhóm máu hệ ABO và nguyên tắc truyền máu; cấu tạo, chức năng của tim, mạch máu và hai vòng tuần hoàn; một số bệnh về máu, tim mạch và cách phòng tránh.',
  intro:
    'Một giọt máu nhỏ xíu chứa hàng triệu tế bào, mỗi tế bào có một nhiệm vụ riêng. Máu chảy không ngừng trong mạch nhờ tim đập liên tục suốt cuộc đời. Vì sao người ta phải xét nghiệm nhóm máu trước khi truyền? Vì sao tiêm vaccine lại giúp ta không mắc bệnh? Máu đi trong cơ thể theo con đường nào? Bài học này giúp em tìm câu trả lời.',
  objectives: [
    'Nêu được thành phần và chức năng của máu; khái niệm miễn dịch, kháng nguyên, kháng thể, vaccine.',
    'Nêu được các nhóm máu hệ ABO và nguyên tắc truyền máu; giải thích được vì sao có những trường hợp truyền máu gây kết dính hồng cầu.',
    'Nêu được cấu tạo và chức năng của tim, mạch máu; mô tả được đường đi của máu trong hai vòng tuần hoàn; nêu được một số bệnh về máu, tim mạch và cách phòng tránh.',
  ],
  sections: [
    {
      heading: 'Máu và miễn dịch',
      blocks: [
        {
          type: 'p',
          text: 'Máu gồm huyết tương (chiếm khoảng 55% thể tích máu) và các tế bào máu (chiếm khoảng 45%).',
        },
        {
          type: 'table',
          caption: 'Thành phần và chức năng của máu',
          head: ['Thành phần', 'Chức năng'],
          rows: [
            [
              'Huyết tương (chủ yếu là nước và các chất hòa tan)',
              'Duy trì máu ở trạng thái lỏng để lưu thông dễ dàng; vận chuyển chất dinh dưỡng, hormone, kháng thể, chất thải',
            ],
            ['Hồng cầu', 'Vận chuyển khí O₂ và CO₂'],
            ['Bạch cầu', 'Tham gia bảo vệ cơ thể (phản ứng miễn dịch)'],
            ['Tiểu cầu', 'Tham gia quá trình đông máu, chống mất máu'],
          ],
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Kháng nguyên và kháng thể',
          text: 'Kháng nguyên là những chất lạ (thường có trên bề mặt virus, vi khuẩn, ...) khi xâm nhập vào cơ thể thì kích thích cơ thể tạo ra kháng thể. Kháng thể là phân tử protein do tế bào lympho B (một loại bạch cầu) tạo ra để chống lại kháng nguyên. Kháng nguyên và kháng thể tương ứng kết hợp với nhau theo cơ chế chìa khóa – ổ khóa.',
        },
        {
          type: 'p',
          text: 'Khi kháng nguyên xâm nhập, tế bào lympho B nhận diện kháng nguyên, phân chia và tạo ra kháng thể tiêu diệt mầm bệnh hoặc vô hiệu hóa độc tố. Một số tế bào lympho B trở thành tế bào nhớ, giúp cơ thể phản ứng nhanh và mạnh hơn khi mầm bệnh đó xâm nhập lần sau. Khả năng cơ thể chống lại mầm bệnh như vậy gọi là miễn dịch.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Vaccine',
          text: 'Vaccine là chế phẩm chứa kháng nguyên (mầm bệnh đã chết hoặc làm yếu, hoặc thành phần của mầm bệnh) dùng để kích thích cơ thể tạo ra kháng thể và tế bào nhớ, giúp cơ thể có miễn dịch với bệnh mà không phải mắc bệnh. Ví dụ: vaccine BCG phòng lao, vaccine phòng Covid-19.',
        },
      ],
    },
    {
      heading: 'Nhóm máu và truyền máu',
      blocks: [
        {
          type: 'p',
          text: 'Nhóm máu được xác định dựa vào kháng nguyên trên bề mặt hồng cầu. Hệ nhóm máu phổ biến là hệ ABO, gồm bốn nhóm: A, B, AB và O. Trong huyết tương có thể có kháng thể α (gây kết dính hồng cầu mang kháng nguyên A) và kháng thể β (gây kết dính hồng cầu mang kháng nguyên B).',
        },
        {
          type: 'table',
          caption: 'Kháng nguyên và kháng thể của các nhóm máu hệ ABO',
          head: ['Nhóm máu', 'Kháng nguyên trên hồng cầu', 'Kháng thể trong huyết tương'],
          rows: [
            ['A', 'A', 'β'],
            ['B', 'B', 'α'],
            ['AB', 'A và B', 'Không có'],
            ['O', 'Không có', 'α và β'],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Nguyên tắc truyền máu',
          text: 'Khi truyền máu cần chọn nhóm máu phù hợp: kháng thể trong huyết tương người nhận không được gây kết dính hồng cầu (kháng nguyên) của máu người cho. Nhóm O cho được cả bốn nhóm; nhóm AB nhận được cả bốn nhóm; nhóm A cho được A và AB; nhóm B cho được B và AB.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Lưu ý',
          text: 'Trên thực tế, máu được xét nghiệm kĩ trước khi truyền (nhóm máu, mầm bệnh như HIV, viêm gan B) và ưu tiên truyền cùng nhóm. Truyền máu không phù hợp làm hồng cầu bị kết dính, gây tắc mạch, có thể dẫn đến tử vong.',
        },
      ],
    },
    {
      heading: 'Hệ tuần hoàn',
      blocks: [
        {
          type: 'p',
          text: 'Hệ tuần hoàn gồm tim và hệ mạch máu. Tim nằm trong lồng ngực, giữa hai lá phổi, hơi lệch về bên trái; tim có bốn ngăn: tâm nhĩ phải, tâm thất phải, tâm nhĩ trái, tâm thất trái. Giữa tâm nhĩ và tâm thất, giữa tâm thất và động mạch có van giúp máu chảy theo một chiều.',
        },
        { type: 'widget', name: 'cau-tao-tim' },
        {
          type: 'table',
          caption: 'Các thành phần của hệ tuần hoàn',
          head: ['Thành phần', 'Chức năng'],
          rows: [
            ['Tim', 'Co bóp như một chiếc bơm: hút máu về và đẩy máu đi, giúp máu lưu thông'],
            ['Động mạch', 'Dẫn máu từ tim đến các mao mạch'],
            [
              'Mao mạch',
              'Nơi trao đổi chất (dinh dưỡng, chất thải) và khí (O₂, CO₂) giữa máu và tế bào',
            ],
            ['Tĩnh mạch', 'Dẫn máu từ các mao mạch trở về tim'],
          ],
        },
        {
          type: 'list',
          items: [
            'Vòng tuần hoàn nhỏ (tuần hoàn phổi): máu đỏ thẫm từ tâm thất phải → động mạch phổi → mao mạch phổi (nhận O₂, thải CO₂, thành máu đỏ tươi) → tĩnh mạch phổi → tâm nhĩ trái.',
            'Vòng tuần hoàn lớn: máu đỏ tươi từ tâm thất trái → động mạch chủ → mao mạch ở các cơ quan (cho O₂, chất dinh dưỡng, nhận CO₂, chất thải, thành máu đỏ thẫm) → tĩnh mạch chủ → tâm nhĩ phải.',
          ],
        },
        { type: 'p', text: 'Theo dõi một giọt máu đi qua hai vòng tuần hoàn:' },
        { type: 'widget', name: 'vong-tuan-hoan' },
      ],
    },
    {
      heading: 'Bệnh về máu, tim mạch và cách phòng tránh',
      blocks: [
        {
          type: 'table',
          caption: 'Một số bệnh về máu và tim mạch',
          head: ['Bệnh', 'Nguyên nhân', 'Phòng tránh'],
          rows: [
            [
              'Thiếu máu',
              'Số lượng hồng cầu hoặc hemoglobin giảm do chế độ ăn thiếu sắt, hoặc do mất nhiều máu',
              'Ăn đủ chất, giàu sắt (thịt đỏ, trứng, đậu, rau xanh đậm); uống nước cam, chanh giúp hấp thu sắt; không uống trà, cà phê ngay sau ăn',
            ],
            [
              'Huyết áp cao',
              'Ăn nhiều muối, đường, chất béo; huyết áp tăng kéo dài làm tổn thương thành động mạch',
              'Ăn uống khoa học, kiểm soát cân nặng, tập thể dục, khám sức khỏe định kì',
            ],
            [
              'Xơ vữa động mạch',
              'Cholesterol trong máu cao lắng đọng ở thành mạch làm hẹp lòng mạch; hút thuốc lá, ít vận động',
              'Ăn nhiều rau, quả, ngũ cốc nguyên hạt; hạn chế chất béo bão hòa, muối, đường, rượu bia, thuốc lá',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Khi bị chảy máu ở mao mạch hoặc tĩnh mạch, dùng ngón tay bịt chặt miệng vết thương đến khi máu ngừng chảy, sát trùng rồi băng kín. Khi chảy máu động mạch ở tay, chân, cần ấn mạnh vào động mạch phía trên vết thương, buộc garô phía trên vết thương (về phía tim) rồi đưa ngay đến cơ sở y tế.',
        },
      ],
    },
  ],
  explore: {
    title: 'Trò chơi truyền máu ABO',
    instruction:
      'Chọn nhóm máu của người cho và người nhận rồi bấm "Truyền máu". Quan sát hồng cầu người cho trôi tự do hay bị kết dính. Hãy thử đủ 16 trường hợp để tự lập sơ đồ truyền máu.',
  },
  examples: [
    {
      problem:
        'Một người nhóm máu B cần truyền máu. Có thể truyền máu nhóm A cho người này không? Máu nhóm O thì sao?',
      steps: [
        'Người nhận nhóm B có kháng thể α trong huyết tương.',
        'Máu nhóm A có kháng nguyên A trên hồng cầu; kháng thể α gây kết dính hồng cầu mang kháng nguyên A, nên không truyền được.',
        'Máu nhóm O không có kháng nguyên A, B trên hồng cầu nên kháng thể α không gây kết dính; truyền được (với lượng ít, khi không có máu nhóm B).',
      ],
      answer:
        'Không truyền được máu nhóm A (hồng cầu bị kết dính); có thể truyền máu nhóm O. Tốt nhất là truyền máu cùng nhóm B.',
    },
    {
      problem: 'Mô tả đường đi của một phân tử oxygen từ phế nang đến tế bào cơ ở chân.',
      steps: [
        'Ở phổi, O₂ khuếch tán từ phế nang vào máu trong mao mạch phổi; máu trở thành đỏ tươi.',
        'Máu theo tĩnh mạch phổi về tâm nhĩ trái, xuống tâm thất trái (vòng tuần hoàn nhỏ kết thúc ở tâm nhĩ trái).',
        'Tâm thất trái co, đẩy máu vào động mạch chủ, theo các động mạch đến chân.',
        'Ở mao mạch trong cơ chân, O₂ khuếch tán từ máu vào tế bào cơ.',
      ],
      answer:
        'Phế nang → mao mạch phổi → tĩnh mạch phổi → tâm nhĩ trái → tâm thất trái → động mạch chủ → động mạch → mao mạch ở chân → tế bào cơ.',
    },
  ],
  practice: [
    {
      type: 'match',
      prompt: 'Nối mỗi thành phần của máu với chức năng chính của nó.',
      left: ['Hồng cầu', 'Bạch cầu', 'Tiểu cầu', 'Huyết tương'],
      right: [
        'Tham gia đông máu',
        'Vận chuyển O₂ và CO₂',
        'Duy trì máu ở trạng thái lỏng, vận chuyển các chất',
        'Bảo vệ cơ thể, tham gia miễn dịch',
      ],
      pairs: [
        [0, 1],
        [1, 3],
        [2, 0],
        [3, 2],
      ],
      hints: ['Hemoglobin trong tế bào máu nào gắn với oxygen?'],
      solution:
        'Hồng cầu vận chuyển khí; bạch cầu bảo vệ cơ thể; tiểu cầu tham gia đông máu; huyết tương giữ máu lỏng và vận chuyển các chất.',
    },
    {
      type: 'number',
      prompt:
        'Một người có khoảng $5$ lít máu. Huyết tương chiếm khoảng $55\\%$ thể tích máu. Thể tích huyết tương của người đó khoảng bao nhiêu lít?',
      answer: 2.75,
      tolerance: 0.01,
      unit: 'lít',
      hints: ['Tính $55\\%$ của $5$ lít.'],
      solution: '$5 \\cdot 55 : 100 = 2{,}75$ (lít).',
    },
    {
      type: 'choice',
      prompt: 'Kháng thể do loại tế bào nào tạo ra?',
      options: ['Hồng cầu', 'Tiểu cầu', 'Tế bào lympho B (một loại bạch cầu)', 'Tế bào cơ tim'],
      answer: 2,
      hints: ['Đó là một loại tế bào máu có vai trò bảo vệ cơ thể.'],
      solution: 'Kháng thể là protein do tế bào lympho B (thuộc bạch cầu) tạo ra.',
    },
    {
      type: 'choice',
      prompt: 'Tiêm vaccine giúp phòng bệnh vì',
      options: [
        'vaccine tiêu diệt ngay mọi vi khuẩn trong cơ thể',
        'vaccine kích thích cơ thể tạo kháng thể và tế bào nhớ chống lại mầm bệnh',
        'vaccine thay thế hồng cầu bị hỏng',
        'vaccine làm tăng số lượng tiểu cầu',
      ],
      answer: 1,
      hints: ['Vaccine chứa kháng nguyên đã bị làm chết hoặc làm yếu.'],
      solution:
        'Vaccine chứa kháng nguyên đã bất hoạt hoặc giảm độc lực, kích thích cơ thể tạo kháng thể và tế bào nhớ, nên khi mầm bệnh thật xâm nhập cơ thể phản ứng nhanh, không mắc bệnh.',
    },
    {
      type: 'multi',
      prompt: 'Người có nhóm máu A có thể nhận máu của những nhóm nào? Chọn tất cả.',
      options: ['A', 'B', 'AB', 'O'],
      answers: [0, 3],
      hints: ['Huyết tương nhóm A có kháng thể β. Nhóm máu nào có hồng cầu mang kháng nguyên B?'],
      solution:
        'Huyết tương nhóm A có kháng thể β, gây kết dính hồng cầu mang kháng nguyên B (nhóm B, AB). Vì vậy nhóm A nhận được máu nhóm A và nhóm O.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao người có nhóm máu AB có thể nhận máu của cả bốn nhóm?',
      options: [
        'Vì hồng cầu nhóm AB không có kháng nguyên',
        'Vì huyết tương nhóm AB không có kháng thể α và β',
        'Vì nhóm AB có nhiều hồng cầu nhất',
        'Vì huyết tương nhóm AB có cả kháng thể α và β',
      ],
      answer: 1,
      hints: ['Sự kết dính do kháng thể của người nhận gây ra.'],
      solution:
        'Huyết tương nhóm AB không có kháng thể α, β nên không gây kết dính hồng cầu của máu được truyền.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp đường đi của máu trong vòng tuần hoàn nhỏ.',
      items: ['Mao mạch phổi', 'Tâm nhĩ trái', 'Tâm thất phải', 'Tĩnh mạch phổi', 'Động mạch phổi'],
      answer: [2, 4, 0, 3, 1],
      hints: ['Vòng tuần hoàn nhỏ bắt đầu từ tâm thất phải và kết thúc ở tâm nhĩ trái.'],
      solution: 'Tâm thất phải → động mạch phổi → mao mạch phổi → tĩnh mạch phổi → tâm nhĩ trái.',
    },
    {
      type: 'choice',
      prompt: 'Ở đâu máu chuyển từ đỏ tươi thành đỏ thẫm?',
      options: ['Mao mạch phổi', 'Mao mạch ở các cơ quan', 'Tâm thất trái', 'Động mạch chủ'],
      answer: 1,
      hints: ['Máu trở nên giàu CO₂ khi nhận CO₂ từ đâu?'],
      solution:
        'Ở mao mạch các cơ quan, máu cho O₂ và nhận CO₂ từ tế bào nên chuyển từ đỏ tươi thành đỏ thẫm.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các thói quen giúp phòng bệnh huyết áp cao và xơ vữa động mạch.',
      options: [
        'Ăn mặn, ăn nhiều đồ chiên rán',
        'Ăn nhiều rau, quả, ngũ cốc nguyên hạt',
        'Tập thể dục đều đặn',
        'Hút thuốc lá',
        'Kiểm soát cân nặng, khám sức khỏe định kì',
      ],
      answers: [1, 2, 4],
      hints: ['Muối, chất béo bão hòa và thuốc lá làm tăng nguy cơ bệnh tim mạch.'],
      solution:
        'Ăn nhiều rau quả, tập thể dục, kiểm soát cân nặng và khám định kì giúp phòng bệnh; ăn mặn, nhiều dầu mỡ và hút thuốc lá làm tăng nguy cơ.',
    },
  ],
  takeaways: [
    'Máu gồm huyết tương (khoảng 55%) và tế bào máu (khoảng 45%): hồng cầu vận chuyển khí, bạch cầu bảo vệ cơ thể, tiểu cầu giúp đông máu.',
    'Kháng nguyên kích thích cơ thể tạo kháng thể; vaccine giúp cơ thể có miễn dịch mà không phải mắc bệnh.',
    'Hệ ABO có bốn nhóm máu A, B, AB, O. Truyền máu phải đảm bảo kháng thể của người nhận không làm kết dính hồng cầu của người cho: O cho được mọi nhóm, AB nhận được mọi nhóm.',
    'Hệ tuần hoàn gồm tim (4 ngăn) và mạch máu. Vòng nhỏ: tâm thất phải → phổi → tâm nhĩ trái. Vòng lớn: tâm thất trái → các cơ quan → tâm nhĩ phải.',
    'Ăn uống hợp lí, giàu sắt, ít muối và chất béo, tập thể dục, không hút thuốc giúp phòng thiếu máu, huyết áp cao, xơ vữa động mạch.',
  ],
};
