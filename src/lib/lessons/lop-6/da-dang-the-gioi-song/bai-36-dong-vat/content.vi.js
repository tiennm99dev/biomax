/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Động vật được chia thành hai nhóm lớn: động vật không xương sống (ruột khoang, giun, thân mềm, chân khớp) và động vật có xương sống (cá, lưỡng cư, bò sát, chim, thú); động vật có nhiều vai trò với tự nhiên và con người, nhưng một số loài gây hại.',
  intro:
    'Con sứa trôi lững lờ ngoài biển, con giun đất chui trong vườn, con tôm trong rổ, con chim sẻ trên mái nhà và chú mèo nằm sưởi nắng: thế giới động vật đa dạng đến mức người ta ước tính có hơn một triệu loài đã được đặt tên. Vậy làm sao để sắp xếp chúng? Câu hỏi đầu tiên rất đơn giản: con vật có xương sống không?',
  objectives: [
    'Phân biệt được hai nhóm động vật không xương sống và có xương sống, lấy được ví dụ minh họa.',
    'Nhận biết được các nhóm động vật không xương sống (ruột khoang, giun, thân mềm, chân khớp) và có xương sống (cá, lưỡng cư, bò sát, chim, thú) dựa vào đặc điểm bên ngoài.',
    'Nêu được vai trò và tác hại của động vật trong tự nhiên và đối với con người.',
  ],
  sections: [
    {
      heading: 'Đa dạng động vật',
      blocks: [
        {
          type: 'p',
          text: 'Động vật là những sinh vật nhân thực, đa bào, không có thành tế bào và không có lục lạp nên sống dị dưỡng (lấy chất hữu cơ có sẵn), phần lớn có khả năng di chuyển. Dựa vào việc có hay không có xương sống, động vật được chia thành hai nhóm lớn.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Hai nhóm lớn',
          text: 'Động vật không xương sống: cơ thể không có xương sống. Động vật có xương sống: cơ thể có bộ xương trong, trong đó có xương sống (cột sống).',
        },
      ],
    },
    {
      heading: 'Động vật không xương sống',
      blocks: [
        {
          type: 'table',
          caption: 'Các nhóm động vật không xương sống',
          head: ['Nhóm', 'Đặc điểm nhận biết', 'Đại diện'],
          rows: [
            [
              'Ruột khoang',
              'Cơ thể đối xứng tỏa tròn, ruột hình túi, có tế bào gai để tự vệ và bắt mồi; sống ở nước',
              'Thủy tức, sứa, hải quỳ, san hô',
            ],
            [
              'Giun',
              'Cơ thể mềm, dài, đối xứng hai bên, phân biệt đầu, đuôi, lưng, bụng; gồm giun dẹp, giun tròn, giun đốt',
              'Sán lá gan, giun đũa, giun đất, đỉa, rươi',
            ],
            [
              'Thân mềm',
              'Cơ thể mềm, không phân đốt, thường có vỏ đá vôi bao bọc',
              'Trai, ốc sên, mực, bạch tuộc',
            ],
            [
              'Chân khớp',
              'Có bộ xương ngoài bằng chitin, các đôi chân phân đốt và khớp động với nhau',
              'Tôm, cua, nhện, châu chấu, bướm, ong',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Chân khớp: nhóm đông nhất',
          text: 'Chân khớp có số loài lớn nhất trong giới Động vật và sống ở khắp nơi: dưới nước (tôm, cua), trên cạn (nhện, kiến), trên không (ong, bướm). Bộ xương ngoài bằng chitin vừa che chở cơ thể vừa làm chỗ bám cho cơ.',
        },
      ],
    },
    {
      heading: 'Động vật có xương sống',
      blocks: [
        {
          type: 'table',
          caption: 'Các lớp động vật có xương sống',
          head: ['Lớp', 'Đặc điểm nhận biết', 'Đại diện'],
          rows: [
            [
              'Cá',
              'Sống hoàn toàn dưới nước, thở bằng mang, bơi bằng vây',
              'Cá chép, cá rô, cá mập, cá đuối',
            ],
            [
              'Lưỡng cư',
              'Da trần, luôn ẩm ướt, chân có màng bơi; vừa sống ở nước vừa sống ở cạn',
              'Ếch đồng, cóc nhà, ếch giun',
            ],
            [
              'Bò sát',
              'Da khô, có vảy sừng bao bọc; sống chủ yếu ở cạn, thở bằng phổi, đẻ trứng có vỏ',
              'Thằn lằn, rắn, rùa, cá sấu',
            ],
            [
              'Chim',
              'Lông vũ bao phủ, chi trước biến đổi thành cánh, có mỏ sừng',
              'Bồ câu, chim sẻ, gà, vịt, đà điểu',
            ],
            [
              'Thú (Động vật có vú)',
              'Có lông mao bao phủ, có răng; đẻ con và nuôi con bằng sữa mẹ',
              'Chó, mèo, trâu, dơi, cá voi',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Đừng nhìn tên mà đoán',
          text: 'Cá voi và cá heo không thuộc lớp Cá mà thuộc lớp Thú: chúng thở bằng phổi, đẻ con và nuôi con bằng sữa. Dơi bay được nhưng là thú vì có lông mao và nuôi con bằng sữa. Chim cánh cụt không bay được nhưng vẫn là chim vì có lông vũ, mỏ sừng.',
        },
        {
          type: 'p',
          text: 'Ở phần khám phá, em hãy mở từng nhánh của cây phân loại để xem đặc điểm và đại diện của mỗi nhóm, rồi chuyển sang chế độ "Tìm nhóm cho con vật".',
        },
      ],
    },
    {
      heading: 'Vai trò và tác hại của động vật',
      blocks: [
        {
          type: 'list',
          items: [
            'Trong tự nhiên: làm thức ăn cho các động vật khác; giúp thụ phấn cho cây (ong, bướm) và phát tán quả, hạt (chim, sóc); giun đất làm tơi xốp và màu mỡ đất; góp phần giữ cân bằng tự nhiên.',
            'Đối với con người: cung cấp thực phẩm (thịt, cá, trứng, sữa, tôm, mực), nguyên liệu (lông, da), dược liệu (mật ong); làm sức kéo (trâu, bò, ngựa); làm cảnh, giải trí, thể thao; giúp bảo vệ an ninh (chó nghiệp vụ); làm vật thí nghiệm trong nghiên cứu khoa học.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Tác hại',
          text: 'Một số động vật kí sinh gây bệnh cho người và vật nuôi (giun đũa, giun kim, sán lá gan); một số truyền bệnh (muỗi truyền sốt xuất huyết, sốt rét; ruồi truyền bệnh đường ruột; chuột truyền bệnh dịch hạch); một số phá hoại mùa màng (châu chấu, sâu, chuột, ốc bươu vàng) hoặc phá hỏng đồ gỗ, nhà cửa (mối, mọt).',
        },
      ],
    },
  ],
  explore: {
    title: 'Cây phân loại động vật',
    instruction:
      'Ở chế độ "Cây phân loại", bấm vào một nhánh để mở các nhóm, bấm vào một nhóm để xem đặc điểm và đại diện. Ở chế độ "Tìm nhóm cho con vật", chọn nhánh (có hay không có xương sống) rồi chọn nhóm cho từng con vật.',
  },
  examples: [
    {
      problem: 'Xếp các động vật sau vào đúng nhóm: con tôm, con ếch, con mực, con thằn lằn.',
      steps: [
        'Tôm có vỏ cứng bằng chitin, các đôi chân phân đốt, không có xương sống: nhóm Chân khớp.',
        'Mực có cơ thể mềm, không phân đốt, mai đá vôi nằm trong cơ thể, không có xương sống: nhóm Thân mềm.',
        'Ếch có xương sống, da trần ẩm ướt, chân sau có màng bơi, sống cả ở nước và ở cạn: lớp Lưỡng cư.',
        'Thằn lằn có xương sống, da khô phủ vảy sừng, sống ở cạn: lớp Bò sát.',
      ],
      answer: 'Tôm: Chân khớp; mực: Thân mềm; ếch: Lưỡng cư; thằn lằn: Bò sát.',
    },
    {
      problem: 'Cá voi sống ở biển, có hình dạng giống cá. Vì sao cá voi được xếp vào lớp Thú?',
      steps: [
        'Lớp Cá: thở bằng mang, đẻ trứng; lớp Thú: đẻ con, nuôi con bằng sữa mẹ.',
        'Cá voi phải ngoi lên mặt nước để thở bằng phổi, không có mang.',
        'Cá voi đẻ con và nuôi con bằng sữa mẹ.',
      ],
      answer: 'Vì cá voi thở bằng phổi, đẻ con và nuôi con bằng sữa: đó là đặc điểm của lớp Thú.',
    },
    {
      problem:
        'Kể hai động vật có lợi và hai động vật có hại đối với sản xuất nông nghiệp, nêu rõ lợi ích hoặc tác hại.',
      steps: [
        'Có lợi: ong mật giúp cây thụ phấn, tăng năng suất cây ăn quả; giun đất đào hang làm đất tơi xốp, phân của chúng làm đất màu mỡ.',
        'Có hại: châu chấu ăn lá, phá hoại lúa và hoa màu; ốc bươu vàng cắn phá lúa non.',
      ],
      answer:
        'Có lợi: ong mật, giun đất. Có hại: châu chấu, ốc bươu vàng (ngoài ra còn chuột, sâu).',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Dấu hiệu nào dùng để chia động vật thành hai nhóm lớn?',
      options: [
        'Có hay không có cánh',
        'Có hay không có xương sống',
        'Sống ở nước hay ở cạn',
        'Có hay không có chân',
      ],
      answer: 1,
      hints: ['Hai nhóm lớn có tên gọi chứa chính dấu hiệu này.'],
      solution:
        'Động vật được chia thành động vật không xương sống và động vật có xương sống, dựa vào việc có hay không có xương sống.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các động vật không xương sống.',
      options: ['Con sứa', 'Cá chép', 'Giun đất', 'Con cua', 'Con thằn lằn', 'Ốc sên'],
      answers: [0, 2, 3, 5],
      hints: ['Cá và bò sát đều có cột sống.'],
      solution:
        'Sứa (Ruột khoang), giun đất (Giun), cua (Chân khớp), ốc sên (Thân mềm) không có xương sống; cá chép và thằn lằn có xương sống.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi nhóm động vật không xương sống với đặc điểm của nó.',
      left: ['Ruột khoang', 'Giun', 'Thân mềm', 'Chân khớp'],
      right: [
        'Cơ thể mềm, thường có vỏ đá vôi',
        'Chân phân đốt, bộ xương ngoài bằng chitin',
        'Đối xứng tỏa tròn, có tế bào gai',
        'Cơ thể dài, đối xứng hai bên',
      ],
      pairs: [
        [0, 2],
        [1, 3],
        [2, 0],
        [3, 1],
      ],
      hints: ['Tên "Chân khớp" gợi ý đặc điểm của các đôi chân.'],
      solution:
        'Ruột khoang: đối xứng tỏa tròn, có tế bào gai. Giun: cơ thể dài, đối xứng hai bên. Thân mềm: cơ thể mềm, thường có vỏ đá vôi. Chân khớp: chân phân đốt, bộ xương ngoài bằng chitin.',
    },
    {
      type: 'choice',
      prompt: 'Con ếch đồng thuộc lớp nào?',
      options: ['Cá', 'Lưỡng cư', 'Bò sát', 'Thú'],
      answer: 1,
      hints: ['Da ếch trần và luôn ẩm; ếch sống cả dưới nước và trên cạn.'],
      solution:
        'Ếch có da trần, ẩm ướt, chân có màng bơi, vừa sống ở nước vừa sống ở cạn: lớp Lưỡng cư.',
    },
    {
      type: 'choice',
      prompt: 'Đặc điểm nào chỉ có ở lớp Chim?',
      options: ['Đẻ trứng', 'Cơ thể phủ lông vũ', 'Thở bằng phổi', 'Có xương sống'],
      answer: 1,
      hints: ['Bò sát cũng đẻ trứng và thở bằng phổi.'],
      solution:
        'Lông vũ chỉ có ở chim. Đẻ trứng có cả ở cá, lưỡng cư, bò sát; thở bằng phổi và có xương sống có ở nhiều lớp.',
    },
    {
      type: 'choice',
      prompt: 'Con dơi biết bay nhưng được xếp vào lớp Thú vì',
      options: [
        'dơi ăn sâu bọ',
        'dơi có lông mao, đẻ con và nuôi con bằng sữa',
        'dơi hoạt động về đêm',
        'dơi có cánh bằng da',
      ],
      answer: 1,
      hints: ['Tìm đặc điểm chung của mọi loài thú.'],
      solution:
        'Đặc điểm của lớp Thú là có lông mao, đẻ con và nuôi con bằng sữa mẹ; dơi có đủ các đặc điểm này.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước khi xác định nhóm của một con vật lạ theo cây phân loại.',
      items: [
        'Quan sát đặc điểm bên ngoài của con vật',
        'Đối chiếu với đặc điểm của từng nhóm trong nhánh đó để chọn nhóm',
        'Xác định con vật có xương sống hay không',
      ],
      answer: [0, 2, 1],
      hints: ['Cây phân loại chia hai nhánh lớn trước, rồi mới chia nhóm nhỏ.'],
      solution:
        'Quan sát đặc điểm, xác định có hay không có xương sống (chọn nhánh), rồi đối chiếu đặc điểm từng nhóm trong nhánh để chọn nhóm.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các động vật gây hại cho con người hoặc mùa màng.',
      options: ['Ong mật', 'Muỗi', 'Giun đũa', 'Châu chấu', 'Trâu', 'Mối'],
      answers: [1, 2, 3, 5],
      hints: ['Hai con vật trong danh sách đem lại lợi ích (mật ong, sức kéo).'],
      solution:
        'Muỗi truyền bệnh sốt xuất huyết, sốt rét; giun đũa kí sinh trong ruột người; châu chấu phá hoại mùa màng; mối phá hỏng đồ gỗ. Ong mật và trâu có lợi.',
    },
    {
      type: 'text',
      prompt: 'Bộ xương ngoài của tôm, cua, châu chấu được cấu tạo bằng chất gì? (một từ)',
      accept: ['chitin', 'kitin', 'chất chitin'],
      hints: ['Chất này cũng có trong thành tế bào của nấm.'],
      solution: 'Bộ xương ngoài của chân khớp được cấu tạo bằng chitin.',
    },
  ],
  takeaways: [
    'Động vật chia thành hai nhóm lớn: không xương sống và có xương sống.',
    'Không xương sống: Ruột khoang (đối xứng tỏa tròn, tế bào gai), Giun (cơ thể dài, đối xứng hai bên), Thân mềm (cơ thể mềm, vỏ đá vôi), Chân khớp (chân phân đốt, xương ngoài bằng chitin).',
    'Có xương sống: Cá (mang, vây), Lưỡng cư (da trần ẩm), Bò sát (da khô, vảy sừng), Chim (lông vũ, cánh, mỏ sừng), Thú (lông mao, đẻ con, nuôi con bằng sữa).',
    'Động vật cung cấp thực phẩm, nguyên liệu, dược liệu, sức kéo, giúp thụ phấn, phát tán hạt; một số loài gây bệnh, truyền bệnh, phá hoại mùa màng, đồ gỗ.',
  ],
};
