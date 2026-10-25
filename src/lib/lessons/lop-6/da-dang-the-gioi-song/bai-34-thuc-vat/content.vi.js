/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Thực vật là sinh vật nhân thực, đa bào, có lục lạp, quang hợp được; chúng được chia thành rêu (không có mạch dẫn), dương xỉ (có mạch dẫn, không có hạt), hạt trần (có hạt, không có hoa) và hạt kín (có hoa, hạt nằm trong quả), và có vai trò rất lớn đối với tự nhiên và con người.',
  intro:
    'Từ lớp rêu xanh mướt trên bờ tường, khóm dương xỉ dưới tán rừng, rừng thông trên đồi đến cánh đồng lúa và cây bưởi trong vườn: tất cả đều là thực vật. Chúng khác nhau rất nhiều về kích thước và hình dạng, nhưng chỉ cần trả lời ba câu hỏi: có mạch dẫn không, có hạt không, có hoa không, là ta xếp được chúng vào đúng nhóm.',
  objectives: [
    'Nêu được đặc điểm chung của thực vật.',
    'Phân biệt được các nhóm thực vật: rêu, dương xỉ, hạt trần, hạt kín dựa vào mạch dẫn, hạt, hoa; lấy được ví dụ cho mỗi nhóm.',
    'Nêu được vai trò của thực vật trong tự nhiên và trong đời sống; kể được một số cây có hại.',
  ],
  sections: [
    {
      heading: 'Đa dạng thực vật',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Thực vật',
          text: 'Thực vật là những sinh vật nhân thực, đa bào; tế bào có thành cellulose và có lục lạp chứa diệp lục, nên thực vật tự tổng hợp được chất hữu cơ nhờ quang hợp (sống tự dưỡng). Phần lớn thực vật sống cố định một chỗ.',
        },
        {
          type: 'p',
          text: 'Dựa vào các đặc điểm: có mạch dẫn hay không, có hạt hay không, có hoa hay không, thực vật được chia thành các nhóm sau:',
        },
        {
          type: 'list',
          items: [
            'Thực vật không có mạch dẫn: Rêu.',
            'Thực vật có mạch dẫn, không có hạt (sinh sản bằng bào tử): Dương xỉ.',
            'Thực vật có mạch dẫn, có hạt, không có hoa: Hạt trần.',
            'Thực vật có mạch dẫn, có hạt, có hoa: Hạt kín.',
          ],
        },
        {
          type: 'table',
          caption: 'So sánh bốn nhóm thực vật',
          head: ['Đặc điểm', 'Rêu', 'Dương xỉ', 'Hạt trần', 'Hạt kín'],
          rows: [
            ['Mạch dẫn', 'Chưa có', 'Có', 'Có', 'Có (phát triển)'],
            ['Rễ', 'Rễ giả', 'Rễ thật', 'Rễ thật', 'Rễ thật'],
            ['Cơ quan sinh sản', 'Túi bào tử ở ngọn', 'Túi bào tử ở mặt dưới lá', 'Nón', 'Hoa'],
            ['Sinh sản bằng', 'Bào tử', 'Bào tử', 'Hạt (lộ trên lá noãn)', 'Hạt (nằm trong quả)'],
            ['Ví dụ', 'Rêu tường', 'Dương xỉ, rau bợ', 'Thông, vạn tuế', 'Lúa, bưởi, hoa hồng'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Hạt trần và hạt kín',
          text: 'Ở cây hạt trần (thông), hạt nằm lộ trên các vảy của nón, không được bao bọc. Ở cây hạt kín, hạt nằm trong quả nên được bảo vệ tốt hơn. Hạt kín là nhóm đa dạng nhất, sống ở khắp nơi.',
        },
      ],
    },
    {
      heading: 'Vai trò của thực vật',
      blocks: [
        {
          type: 'list',
          items: [
            'Trong tự nhiên: thực vật cung cấp thức ăn và nơi ở cho nhiều loài động vật; quang hợp thải ra khí oxygen, hấp thụ khí carbon dioxide, góp phần điều hòa khí hậu, làm sạch không khí.',
            'Rễ và tán cây giữ đất, chống xói mòn, sạt lở; giữ nước, hạn chế lũ lụt, hạn hán.',
            'Đối với con người: cung cấp lương thực, thực phẩm (lúa, ngô, rau, quả), dược liệu (nhân sâm, tam thất, bạc hà), gỗ (lim, thông, xoan), nguyên liệu (bông, mía, cao su), làm cảnh và tạo bóng mát.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Một số cây có hại',
          text: 'Một số cây có độc, ăn phải gây ngộ độc như cà độc dược, trúc đào, lá ngón. Một số cây gây nghiện, hại sức khỏe như cây thuốc lá, cây thuốc phiện, cây cần sa: trồng, sử dụng cây thuốc phiện, cần sa là vi phạm pháp luật.',
        },
        {
          type: 'p',
          text: 'Ở phần khám phá, em hãy lọc bảng các nhóm thực vật theo mạch dẫn, hạt, hoa và giải các thử thách xếp cây vào nhóm.',
        },
      ],
    },
  ],
  explore: {
    title: 'Lọc các nhóm thực vật',
    instruction:
      'Chọn "Có", "Không" hoặc "Tất cả" cho mạch dẫn, hạt, hoa và quan sát nhóm nào còn lại. Ở phần thử thách, lọc bảng sao cho chỉ còn nhóm của cây được nêu, rồi chuyển sang cây tiếp theo.',
  },
  examples: [
    {
      problem:
        'Cây thông và cây bưởi đều có hạt. Vì sao thông thuộc nhóm hạt trần, còn bưởi thuộc nhóm hạt kín?',
      steps: [
        'Cây thông không có hoa, cơ quan sinh sản là nón; hạt nằm lộ trên các vảy của nón, không được bao bọc.',
        'Cây bưởi có hoa; sau khi thụ phấn, hoa tạo thành quả, hạt nằm bên trong quả.',
        'Hạt lộ ra ngoài: hạt trần; hạt nằm trong quả: hạt kín.',
      ],
      answer:
        'Vì hạt thông nằm lộ trên nón (chưa có hoa, quả), còn hạt bưởi nằm trong quả (có hoa).',
    },
    {
      problem:
        'Một cây nhỏ mọc ở chân tường ẩm, có thân và lá nhỏ, chỉ có rễ giả, trên ngọn có túi bào tử. Cây này thuộc nhóm nào? Vì sao nó chỉ sống được ở nơi ẩm?',
      steps: [
        'Cây có rễ giả, túi bào tử ở ngọn, chưa có mạch dẫn: đó là rêu.',
        'Rêu chưa có mạch dẫn và rễ thật nên hút và vận chuyển nước kém; cây phải sống nơi ẩm ướt và luôn nhỏ bé.',
        'Rêu sinh sản bằng bào tử, cũng cần môi trường ẩm.',
      ],
      answer: 'Cây thuộc nhóm Rêu; vì chưa có mạch dẫn, rễ thật nên chỉ sống được nơi ẩm.',
    },
    {
      problem: 'Vì sao "phủ xanh đồi trọc" giúp hạn chế lũ lụt và xói mòn đất?',
      steps: [
        'Tán cây cản bớt sức rơi của nước mưa, nước mưa không đập thẳng xuống đất.',
        'Rễ cây giữ đất, lớp lá rụng giữ nước, làm nước ngấm xuống đất từ từ thay vì chảy tràn.',
        'Nhờ vậy đất không bị rửa trôi, nước không dồn nhanh xuống vùng thấp gây lũ.',
      ],
      answer: 'Vì cây che chắn, giữ đất và giữ nước, nên đất không bị xói mòn và hạn chế lũ lụt.',
    },
  ],
  practice: [
    {
      type: 'multi',
      prompt: 'Chọn tất cả các đặc điểm chung của thực vật.',
      options: [
        'Sinh vật nhân thực, đa bào',
        'Có lục lạp, quang hợp được',
        'Đều có hoa và quả',
        'Tế bào có thành cellulose',
        'Phần lớn sống cố định',
      ],
      answers: [0, 1, 3, 4],
      hints: ['Rêu và dương xỉ có hoa không?'],
      solution:
        'Thực vật là sinh vật nhân thực, đa bào, có lục lạp, tế bào có thành cellulose, phần lớn sống cố định. Chỉ hạt kín mới có hoa và quả.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi cây với nhóm thực vật của nó.',
      left: ['Cây rêu tường', 'Cây dương xỉ', 'Cây thông', 'Cây lúa'],
      right: ['Hạt kín', 'Rêu', 'Hạt trần', 'Dương xỉ'],
      pairs: [
        [0, 1],
        [1, 3],
        [2, 2],
        [3, 0],
      ],
      hints: ['Cây lúa có ra hoa không?'],
      solution:
        'Rêu tường thuộc nhóm Rêu, dương xỉ thuộc nhóm Dương xỉ, thông thuộc Hạt trần, lúa thuộc Hạt kín.',
    },
    {
      type: 'choice',
      prompt: 'Nhóm thực vật nào chưa có mạch dẫn?',
      options: ['Rêu', 'Dương xỉ', 'Hạt trần', 'Hạt kín'],
      answer: 0,
      hints: ['Nhóm này chỉ có rễ giả, cây rất nhỏ.'],
      solution: 'Rêu chưa có mạch dẫn và chỉ có rễ giả; ba nhóm còn lại đều có mạch dẫn.',
    },
    {
      type: 'choice',
      prompt: 'Ở cây dương xỉ, túi bào tử nằm ở đâu?',
      options: ['Ở ngọn cây', 'Ở mặt dưới lá', 'Trong quả', 'Trên vảy của nón'],
      answer: 1,
      hints: ['Lật mặt dưới lá dương xỉ già, em thấy các đốm nhỏ màu nâu.'],
      solution:
        'Túi bào tử của dương xỉ tập trung thành các đốm ở mặt dưới lá. Túi bào tử ở ngọn là của rêu; hạt trên nón là của hạt trần.',
    },
    {
      type: 'choice',
      prompt: 'Đặc điểm nào giúp phân biệt cây hạt kín với cây hạt trần?',
      options: [
        'Có mạch dẫn',
        'Sinh sản bằng hạt',
        'Có hoa, hạt nằm trong quả',
        'Có rễ, thân, lá thật',
      ],
      answer: 2,
      hints: ['Ba đặc điểm còn lại cả hai nhóm đều có.'],
      solution:
        'Cả hạt trần và hạt kín đều có mạch dẫn, rễ thân lá thật và sinh sản bằng hạt; chỉ hạt kín có hoa và hạt nằm trong quả.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các cây thuộc nhóm hạt trần.',
      options: ['Cây thông', 'Cây xoài', 'Cây vạn tuế', 'Cây pơ mu', 'Cây lúa'],
      answers: [0, 2, 3],
      hints: ['Cây hạt trần không có hoa và quả.'],
      solution: 'Thông, vạn tuế, pơ mu là cây hạt trần. Xoài và lúa có hoa, quả: cây hạt kín.',
    },
    {
      type: 'order',
      prompt:
        'Sắp xếp các nhóm thực vật theo thứ tự cấu tạo từ đơn giản đến phức tạp (có thêm đặc điểm mới).',
      items: ['Hạt kín', 'Rêu', 'Hạt trần', 'Dương xỉ'],
      answer: [1, 3, 2, 0],
      hints: ['Nhóm đầu chưa có mạch dẫn; nhóm cuối có hoa.'],
      solution:
        'Rêu (chưa có mạch dẫn), dương xỉ (có mạch dẫn), hạt trần (có thêm hạt), hạt kín (có thêm hoa, quả).',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các vai trò của thực vật đối với tự nhiên.',
      options: [
        'Cung cấp khí oxygen, hấp thụ khí carbon dioxide',
        'Giữ đất, chống xói mòn',
        'Cung cấp thức ăn, nơi ở cho động vật',
        'Gây nghiện cho con người',
        'Điều hòa khí hậu',
      ],
      answers: [0, 1, 2, 4],
      hints: ['Một ý là tác hại của một số cây.'],
      solution:
        'Thực vật cung cấp oxygen, hấp thụ carbon dioxide, giữ đất, điều hòa khí hậu, cung cấp thức ăn và nơi ở cho động vật. Gây nghiện là tác hại của một số cây như thuốc phiện, cần sa.',
    },
    {
      type: 'choice',
      prompt: 'Cây nào sau đây là cây có hại vì gây nghiện?',
      options: ['Cây nhân sâm', 'Cây thuốc phiện', 'Cây bạc hà', 'Cây lim'],
      answer: 1,
      hints: ['Trồng loại cây này là vi phạm pháp luật.'],
      solution:
        'Cây thuốc phiện gây nghiện, hại sức khỏe; nhân sâm, bạc hà là cây dược liệu, lim cho gỗ.',
    },
    {
      type: 'text',
      prompt: 'Rêu và dương xỉ đều sinh sản bằng gì? (một từ)',
      accept: ['bào tử', 'bằng bào tử'],
      hints: ['Hai nhóm này chưa có hạt.'],
      solution: 'Rêu và dương xỉ chưa có hạt, chúng sinh sản bằng bào tử.',
    },
  ],
  takeaways: [
    'Thực vật là sinh vật nhân thực, đa bào, có lục lạp, quang hợp được, tế bào có thành cellulose.',
    'Rêu: chưa có mạch dẫn, rễ giả, sinh sản bằng bào tử. Dương xỉ: có mạch dẫn, rễ thật, sinh sản bằng bào tử ở mặt dưới lá.',
    'Hạt trần: có mạch dẫn, có hạt lộ trên nón, chưa có hoa. Hạt kín: có hoa, quả, hạt nằm trong quả; đa dạng nhất.',
    'Vai trò: cung cấp oxygen, thức ăn, nơi ở; điều hòa khí hậu, chống xói mòn, lũ lụt; lương thực, thực phẩm, dược liệu, gỗ. Một số cây có độc hoặc gây nghiện.',
  ],
};
