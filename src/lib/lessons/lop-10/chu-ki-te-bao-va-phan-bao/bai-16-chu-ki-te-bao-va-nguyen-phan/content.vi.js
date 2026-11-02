/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Chu kì tế bào gồm kì trung gian và nguyên phân, được kiểm soát ở ba điểm; diễn biến bốn kì của nguyên phân, ý nghĩa của nguyên phân và bệnh ung thư do tế bào phân chia mất kiểm soát.',
  intro:
    'Mỗi ngày, cơ thể em tạo ra hàng tỉ tế bào mới để thay thế tế bào già và làm lành vết thương. Điều gì khiến tế bào phân chia đúng lúc và đúng cách? Khi việc kiểm soát ấy hỏng, chuyện gì sẽ xảy ra?',
  objectives: [
    'Nêu được khái niệm chu kì tế bào và trình bày được đặc điểm các pha của kì trung gian.',
    'Giải thích được vai trò của các điểm kiểm soát chu kì tế bào.',
    'Mô tả được diễn biến các kì của nguyên phân và sự phân chia tế bào chất.',
    'Trình bày được ý nghĩa của nguyên phân.',
    'Giải thích được cơ chế phát sinh ung thư, nêu được một số tác nhân và biện pháp phòng tránh.',
  ],
  sections: [
    {
      heading: 'Chu kì tế bào',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Chu kì tế bào',
          text: 'Chu kì tế bào là khoảng thời gian từ khi một tế bào được sinh ra đến khi tế bào đó phân chia thành hai tế bào con. Chu kì tế bào của sinh vật nhân thực gồm hai giai đoạn: kì trung gian và quá trình nguyên phân (pha M).',
        },
        {
          type: 'table',
          caption: 'Ba pha của kì trung gian',
          head: ['Pha', 'Diễn biến chính'],
          rows: [
            ['$G_1$', 'Tế bào lớn lên, tổng hợp các chất và bào quan.'],
            [
              'S',
              'DNA nhân đôi, NST chuyển sang dạng kép gồm hai nhiễm sắc tử chị em dính nhau ở tâm động. Ở tế bào động vật, trung tử cũng nhân đôi.',
            ],
            [
              '$G_2$',
              'Tế bào tiếp tục lớn lên, tổng hợp protein cần cho sự hình thành thoi phân bào.',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Thời gian một chu kì khác nhau giữa các loại tế bào, ngay cả trong cùng một cơ thể: tế bào ở lớp đáy của da phân chia liên tục, còn đa số tế bào thần kinh trưởng thành gần như không phân chia.',
        },
      ],
    },
    {
      heading: 'Các điểm kiểm soát chu kì tế bào',
      blocks: [
        {
          type: 'p',
          text: 'Chu kì tế bào được điều khiển bởi một hệ thống kiểm soát. Tại các điểm kiểm soát, tế bào chỉ đi tiếp khi đã đạt đủ điều kiện; nếu chưa đạt, chu kì dừng lại. Có ba điểm kiểm soát chính:',
        },
        {
          type: 'list',
          items: [
            'Điểm $G_1$/S: quyết định tế bào có nhân đôi DNA để đi vào phân bào hay không.',
            'Điểm $G_2$/M: kiểm tra DNA đã nhân đôi xong và các sai sót đã được sửa chữa hay chưa.',
            'Điểm kiểm soát thoi phân bào (ở kì giữa): kiểm tra tất cả các NST đã gắn với thoi phân bào hay chưa.',
          ],
        },
      ],
    },
    {
      heading: 'Nguyên phân',
      blocks: [
        {
          type: 'p',
          text: 'Nguyên phân xảy ra ở tế bào sinh dưỡng và tế bào sinh dục sơ khai của sinh vật nhân thực. Quá trình gồm phân chia nhân (bốn kì) và phân chia tế bào chất. Trong hình dưới, tế bào có $2n = 4$, một chiếc của mỗi cặp NST tương đồng tô xanh và chiếc kia tô đỏ.',
        },
        { type: 'widget', name: 'nguyen-phan' },
        {
          type: 'table',
          caption: 'Diễn biến của phân chia nhân',
          head: ['Kì', 'Diễn biến', 'NST trong tế bào'],
          rows: [
            [
              'Kì đầu',
              'NST kép co xoắn, thoi phân bào hình thành, màng nhân và hạch nhân tiêu biến.',
              '$2n$ kép',
            ],
            [
              'Kì giữa',
              'NST kép co xoắn cực đại, xếp một hàng trên mặt phẳng xích đạo; thoi phân bào gắn vào tâm động.',
              '$2n$ kép',
            ],
            [
              'Kì sau',
              'Hai nhiễm sắc tử chị em tách nhau thành hai NST đơn và đi về hai cực. Đây là kì ngắn nhất.',
              '$4n$ đơn',
            ],
            [
              'Kì cuối',
              'NST dãn xoắn, hai nhân mới hình thành, thoi phân bào tiêu biến.',
              '$2n$ đơn ở mỗi nhân mới',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Phân chia tế bào chất diễn ra sau khi phân chia nhân hoàn tất: tế bào động vật thắt eo ở vùng giữa, còn tế bào thực vật có thành cứng nên hình thành vách ngăn ở giữa tế bào.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Kết quả của nguyên phân',
          text: 'Từ một tế bào mẹ $2n$ tạo ra hai tế bào con có bộ NST $2n$ giống hệt nhau và giống tế bào mẹ. Sau $k$ lần nguyên phân liên tiếp, một tế bào tạo ra $2^k$ tế bào con.',
        },
        {
          type: 'list',
          items: [
            'Ổn định bộ NST của loài qua các thế hệ tế bào.',
            'Ở sinh vật đơn bào nhân thực, nguyên phân là hình thức sinh sản.',
            'Ở sinh vật đa bào, nguyên phân giúp cơ thể lớn lên, thay thế tế bào già hoặc tổn thương và tái sinh bộ phận.',
            'Nguyên phân là cơ chế của sinh sản vô tính ở nhiều loài, được ứng dụng trong giâm, chiết, ghép cây và nuôi cấy mô.',
          ],
        },
      ],
    },
    {
      heading: 'Bệnh ung thư',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Cơ chế phát sinh ung thư',
          text: 'Khi tín hiệu kích thích phân bào quá nhiều hoặc tín hiệu kìm hãm quá ít, tế bào phân chia mất kiểm soát và tạo thành khối u. U lành tính ở yên một chỗ. U ác tính (ung thư) có tế bào di chuyển đến nơi khác trong cơ thể và tạo thành các khối u mới.',
        },
        {
          type: 'p',
          text: 'Phần lớn ung thư do đột biến gene xảy ra trong tế bào cơ thể nên không di truyền cho đời sau; chỉ khoảng hơn $10\\%$ trường hợp liên quan đến gene đột biến nhận từ bố mẹ.',
        },
        {
          type: 'table',
          caption: 'Tác nhân gây đột biến và cách đối phó với ung thư',
          head: ['Nội dung', 'Ví dụ'],
          rows: [
            [
              'Tác nhân bên ngoài',
              'Khói thuốc lá, độc tố nấm mốc, tia tử ngoại, chất phóng xạ, một số hoá chất',
            ],
            [
              'Tác nhân bên trong',
              'Một số virus gây nhiễm mạn tính, gốc tự do, sản phẩm chuyển hoá độc hại',
            ],
            [
              'Phòng tránh',
              'Hạn chế tiếp xúc tác nhân gây ung thư, tập thể dục, khám sức khoẻ định kì, điều trị dứt điểm viêm nhiễm mạn tính',
            ],
            ['Điều trị', 'Phẫu thuật, xạ trị, hoá trị, liệu pháp tế bào gốc, liệu pháp miễn dịch'],
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Vòng chu kì và ba điểm kiểm soát',
    instruction:
      'Bấm "Chạy chu kì" và theo dõi tế bào đi quanh vòng. Thử tắt từng điều kiện: tế bào dừng ở đâu? Bật lại để tế bào đi tiếp. Sau đó làm hỏng hệ thống kiểm soát rồi chạy lại: số tế bào thay đổi ra sao? (Độ dài các cung trên vòng chỉ để minh hoạ, không theo tỉ lệ thời gian.)',
  },
  examples: [
    {
      problem:
        'Ở ruồi giấm, $2n = 8$. Một tế bào đang nguyên phân. Tính số NST và trạng thái của chúng, số nhiễm sắc tử, số tâm động trong tế bào ở kì giữa và kì sau.',
      steps: [
        'Ở kì giữa, NST đã nhân đôi từ pha S nên tế bào có $8$ NST kép.',
        'Mỗi NST kép có $2$ nhiễm sắc tử và $1$ tâm động, nên có $8 \\cdot 2 = 16$ nhiễm sắc tử và $8$ tâm động.',
        'Ở kì sau, mỗi NST kép tách thành $2$ NST đơn, nên tế bào có $8 \\cdot 2 = 16$ NST đơn.',
        'NST đơn không còn nhiễm sắc tử chị em nên số nhiễm sắc tử là $0$; mỗi NST đơn có $1$ tâm động nên có $16$ tâm động.',
      ],
      answer:
        'Kì giữa: $8$ NST kép, $16$ nhiễm sắc tử, $8$ tâm động. Kì sau: $16$ NST đơn, $0$ nhiễm sắc tử, $16$ tâm động.',
    },
    {
      problem:
        'Một tế bào có $2n = 24$ nguyên phân liên tiếp $4$ lần. Tính số tế bào con và tổng số NST trong các tế bào con đó.',
      steps: [
        'Sau $k$ lần nguyên phân, một tế bào tạo ra $2^k$ tế bào con: $2^4 = 16$ tế bào con.',
        'Nguyên phân giữ nguyên bộ NST nên mỗi tế bào con có $24$ NST đơn.',
        'Tổng số NST: $16 \\cdot 24 = 384$.',
      ],
      answer: '$16$ tế bào con với tổng cộng $384$ NST.',
    },
    {
      problem:
        'Một tế bào có DNA bị sai hỏng ở pha S nhưng gene giúp dừng chu kì tại điểm $G_2$/M đã bị đột biến. Hãy dự đoán điều gì có thể xảy ra.',
      steps: [
        'Bình thường, tại điểm $G_2$/M tế bào kiểm tra DNA và chỉ vào nguyên phân khi sai sót đã được sửa.',
        'Khi điểm kiểm soát hỏng, tế bào vẫn vào nguyên phân dù DNA còn sai hỏng.',
        'Các tế bào con nhận DNA sai hỏng và có thể tích luỹ thêm đột biến ở những lần phân chia sau.',
        'Nếu đột biến làm các tế bào phân chia mất kiểm soát, chúng có thể tạo thành khối u.',
      ],
      answer: 'Sai hỏng được truyền lại cho tế bào con và làm tăng nguy cơ hình thành khối u.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'DNA nhân đôi ở giai đoạn nào của chu kì tế bào?',
      options: ['Pha $G_1$', 'Pha S', 'Pha $G_2$', 'Kì đầu của nguyên phân'],
      answer: 1,
      hints: ['NST chuyển từ dạng đơn sang dạng kép ở pha nằm giữa hai pha lớn lên của tế bào.'],
      solution: 'DNA nhân đôi ở pha S của kì trung gian, nhờ đó NST chuyển sang dạng kép.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi giai đoạn với sự kiện đặc trưng của nó.',
      left: ['Pha $G_1$', 'Pha $G_2$', 'Kì giữa', 'Kì sau'],
      right: [
        'Tế bào lớn lên, tổng hợp các chất và bào quan',
        'Tổng hợp protein cần cho thoi phân bào',
        'NST kép xếp một hàng trên mặt phẳng xích đạo',
        'Hai nhiễm sắc tử chị em tách nhau đi về hai cực',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: [
        '$G_1$ và $G_2$ đều thuộc kì trung gian, nhưng $G_2$ là bước chuẩn bị gần phân bào nhất.',
      ],
      solution:
        '$G_1$: tế bào lớn lên. $G_2$: tổng hợp protein cho thoi phân bào. Kì giữa: NST kép xếp một hàng. Kì sau: nhiễm sắc tử chị em tách nhau.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các sự kiện của nguyên phân theo đúng trình tự.',
      items: [
        'NST dãn xoắn, hai nhân mới hình thành',
        'NST co xoắn cực đại, xếp một hàng ở mặt phẳng xích đạo',
        'Thoi phân bào hình thành, màng nhân tiêu biến',
        'Nhiễm sắc tử chị em tách nhau, đi về hai cực',
        'Tế bào chất phân chia, tạo hai tế bào con',
      ],
      answer: [2, 1, 3, 0, 4],
      hints: ['Bắt đầu từ lúc nhân còn đang biến mất, kết thúc khi đã có hai tế bào riêng.'],
      solution:
        'Kì đầu: thoi hình thành, màng nhân tiêu biến. Kì giữa: NST xếp một hàng. Kì sau: nhiễm sắc tử tách nhau. Kì cuối: hai nhân mới. Sau đó tế bào chất phân chia.',
    },
    {
      type: 'number',
      prompt:
        'Ở người, $2n = 46$. Trong một tế bào đang ở kì giữa của nguyên phân có bao nhiêu nhiễm sắc tử?',
      answer: 92,
      hints: ['Ở kì giữa, các NST đang ở trạng thái kép.', 'Mỗi NST kép có $2$ nhiễm sắc tử.'],
      solution: 'Tế bào có $46$ NST kép, mỗi NST kép có $2$ nhiễm sắc tử: $46 \\cdot 2 = 92$.',
    },
    {
      type: 'number',
      prompt:
        'Ở ruồi giấm, $2n = 8$. Trong một tế bào đang ở kì sau của nguyên phân có bao nhiêu NST đơn?',
      answer: 16,
      hints: ['Ở kì sau, mỗi NST kép đã tách thành hai NST đơn.'],
      solution: '$8$ NST kép tách thành $8 \\cdot 2 = 16$ NST đơn, chưa chia về hai tế bào.',
    },
    {
      type: 'number',
      prompt:
        'Có $5$ tế bào cùng nguyên phân liên tiếp $3$ lần. Tạo ra tất cả bao nhiêu tế bào con?',
      answer: 40,
      unit: 'tế bào',
      hints: [
        'Một tế bào tạo ra $2^k$ tế bào con sau $k$ lần.',
        'Nhân kết quả với số tế bào ban đầu.',
      ],
      solution: 'Mỗi tế bào tạo ra $2^3 = 8$ tế bào con. Tổng số: $5 \\cdot 8 = 40$ tế bào.',
    },
    {
      type: 'number',
      prompt:
        'Một tế bào có $2n = 24$ nguyên phân liên tiếp $3$ lần. Môi trường đã cung cấp nguyên liệu tương đương bao nhiêu NST đơn?',
      answer: 168,
      hints: [
        'Tính tổng số NST trong các tế bào con, rồi trừ đi số NST vốn có của tế bào mẹ.',
        'Số tế bào con là $2^3$.',
      ],
      solution:
        'Các tế bào con có tổng $2^3 \\cdot 24 = 192$ NST, trong đó $24$ NST là từ tế bào mẹ. Môi trường cung cấp $192 - 24 = 168$ NST đơn.',
    },
    {
      type: 'choice',
      prompt: 'Điểm kiểm soát nào kiểm tra việc tất cả các NST đã gắn với thoi phân bào?',
      options: [
        'Điểm $G_1$/S',
        'Điểm $G_2$/M',
        'Điểm kiểm soát thoi phân bào ở kì giữa',
        'Không có điểm nào',
      ],
      answer: 2,
      hints: ['NST gắn với thoi phân bào khi tế bào đã vào nguyên phân.'],
      solution:
        'Điểm kiểm soát thoi phân bào ở kì giữa kiểm tra việc này. Nhờ đó, các nhiễm sắc tử chị em chỉ tách nhau khi mọi NST đã gắn đúng.',
    },
    {
      type: 'choice',
      prompt: 'Điều gì phân biệt khối u ác tính với khối u lành tính?',
      options: [
        'U ác tính chỉ xuất hiện ở người cao tuổi',
        'U ác tính có tế bào di chuyển đến nơi khác và tạo khối u mới',
        'U lành tính có tế bào không phân chia',
        'U lành tính luôn lớn hơn u ác tính',
      ],
      answer: 1,
      hints: ['Hãy nghĩ đến khả năng lan sang cơ quan khác.'],
      solution:
        'U lành tính ở yên một chỗ, còn tế bào của u ác tính có thể di chuyển đến nơi khác và tạo thành khối u mới.',
    },
    {
      type: 'multi',
      prompt: 'Những biện pháp nào giúp giảm nguy cơ mắc ung thư?',
      options: [
        'Không hút thuốc lá, tránh khói thuốc',
        'Không ăn thực phẩm bị nấm mốc',
        'Tập thể dục và khám sức khoẻ định kì',
        'Phơi nắng thật lâu vào buổi trưa',
      ],
      answers: [0, 1, 2],
      hints: ['Tia tử ngoại cũng là một tác nhân gây đột biến.'],
      solution:
        'Ba biện pháp đầu giúp giảm nguy cơ. Phơi nắng gắt lâu làm tăng lượng tia tử ngoại, một tác nhân gây đột biến.',
    },
  ],
  takeaways: [
    'Chu kì tế bào gồm kì trung gian ($G_1$, S, $G_2$) và nguyên phân; DNA nhân đôi ở pha S.',
    'Ba điểm kiểm soát $G_1$/S, $G_2$/M và thoi phân bào chỉ cho tế bào đi tiếp khi đủ điều kiện.',
    'Nguyên phân gồm kì đầu, kì giữa, kì sau, kì cuối và phân chia tế bào chất, tạo hai tế bào con $2n$ giống hệt tế bào mẹ.',
    'Tế bào phân chia mất kiểm soát tạo khối u; u ác tính lan sang nơi khác gây bệnh ung thư.',
  ],
};
