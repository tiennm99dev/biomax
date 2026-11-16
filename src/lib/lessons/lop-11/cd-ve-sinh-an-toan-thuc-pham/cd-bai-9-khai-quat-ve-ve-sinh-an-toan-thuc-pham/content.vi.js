/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Vệ sinh an toàn thực phẩm là bảo đảm mọi điều kiện, biện pháp ở mọi khâu từ sản xuất đến khi ăn để thực phẩm không gây hại cho sức khoẻ, tính mạng con người. Thực phẩm bị ô nhiễm bởi tác nhân sinh học, hoá học hoặc vật lí ở bất kì khâu nào, gây bệnh cấp tính, mạn tính và về lâu dài làm suy thoái nòi giống.',
  intro:
    'Một đĩa thịt luộc để trên bàn từ sáng, vài con ruồi đậu lên; mớ rau hái ngay sau khi phun thuốc trừ sâu; củ khoai tây đã mọc mầm. Nhìn qua, các thực phẩm này vẫn bình thường, nhưng chúng có an toàn không? Thế nào là thực phẩm an toàn, và điều gì khiến thực phẩm mất an toàn?',
  objectives: [
    'Nêu được khái niệm vệ sinh an toàn thực phẩm và điều kiện để thực phẩm được coi là an toàn.',
    'Giải thích được vì sao vệ sinh an toàn thực phẩm cần được quy định bằng luật.',
    'Nêu được khái niệm ô nhiễm thực phẩm; phân biệt được các nhóm tác nhân sinh học, hoá học, vật lí và các khâu có thể gây ô nhiễm.',
    'Trình bày được tác hại của việc mất vệ sinh an toàn thực phẩm đối với sức khoẻ con người và nòi giống.',
  ],
  sections: [
    {
      heading: 'Vệ sinh an toàn thực phẩm là gì?',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Vệ sinh an toàn thực phẩm',
          text: 'Vệ sinh an toàn thực phẩm là việc bảo đảm mọi điều kiện và biện pháp cần thiết ở tất cả các khâu, từ sản xuất, chế biến, bảo quản, vận chuyển đến khi sử dụng, để thực phẩm không gây hại cho sức khoẻ, tính mạng con người.',
        },
        {
          type: 'p',
          text: 'Thực phẩm được coi là an toàn khi:',
        },
        {
          type: 'list',
          items: [
            'được sản xuất, chế biến, bảo quản đúng quy định về vệ sinh;',
            'không bị nhiễm vi sinh vật gây bệnh, không chứa hoá chất độc hại, dị vật vượt mức cho phép;',
            'không bị hư hỏng, biến chất; có nguồn gốc rõ ràng, còn hạn sử dụng.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vì sao cần có luật?',
          text: 'Thực phẩm không chỉ cung cấp năng lượng, chất dinh dưỡng mà còn ảnh hưởng lâu dài tới sức khoẻ, tầm vóc, trí tuệ của cả nòi giống; an toàn thực phẩm còn tác động tới kinh tế, xã hội và hội nhập quốc tế. Vì vậy Nhà nước ban hành Luật An toàn thực phẩm (năm 2010), quy định trách nhiệm của người sản xuất, kinh doanh và quyền của người tiêu dùng, kèm chế tài xử lí vi phạm.',
        },
      ],
    },
    {
      heading: 'Ô nhiễm thực phẩm',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Ô nhiễm thực phẩm',
          text: 'Ô nhiễm thực phẩm là sự có mặt của các tác nhân gây ô nhiễm trong thực phẩm, có thể gây hại cho sức khoẻ, tính mạng con người.',
        },
        {
          type: 'table',
          caption: 'Các nhóm tác nhân gây ô nhiễm thực phẩm',
          head: ['Nhóm tác nhân', 'Ví dụ', 'Thường gặp khi'],
          rows: [
            [
              'Sinh học',
              'Vi khuẩn (Salmonella, E. coli, tụ cầu vàng), virus (rota virus, virus viêm gan A), nấm mốc và độc tố của chúng (aflatoxin), kí sinh trùng (sán lá gan nhỏ, sán dây lợn)',
              'Thực phẩm để lâu, ôi thiu; chế biến không vệ sinh; ô nhiễm chéo sống – chín; ăn gỏi, tái',
            ],
            [
              'Hoá học',
              'Tồn dư thuốc bảo vệ thực vật, thuốc thú y; chất phụ gia, chất bảo quản cấm (hàn the, phẩm màu công nghiệp); kim loại nặng (chì, thuỷ ngân); chất độc có sẵn (solanin ở khoai tây mọc mầm); hoá chất từ bao bì (benzene)',
              'Nuôi trồng sai quy định; dùng phụ gia trái phép; dụng cụ, bao bì không dành cho thực phẩm',
            ],
            [
              'Vật lí',
              'Mảnh thuỷ tinh, mảnh kim loại, sạn, đá, xương, tóc; chất phóng xạ',
              'Thu hoạch, sơ chế, chế biến không cẩn thận; môi trường bị nhiễm xạ',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Ô nhiễm có thể xảy ra ở mọi khâu: nuôi trồng (đất, nước ô nhiễm, lạm dụng hoá chất), thu hoạch, giết mổ, sơ chế, chế biến, bảo quản, vận chuyển và cả khi bày bán, khi ăn. Vì vậy phải giữ vệ sinh ở tất cả các khâu, "từ trang trại đến bàn ăn".',
        },
        {
          type: 'p',
          text: 'Thử làm thanh tra bếp ăn: tìm các vi phạm và gọi tên nhóm tác nhân của từng vi phạm.',
        },
      ],
    },
    {
      heading: 'Tác hại của việc mất vệ sinh an toàn thực phẩm',
      blocks: [
        {
          type: 'list',
          items: [
            'Gây ngộ độc cấp tính: các triệu chứng (đau bụng, nôn, tiêu chảy, sốt, …) xuất hiện nhanh sau khi ăn, có thể dẫn đến tử vong.',
            'Gây bệnh mạn tính: hoá chất độc (kim loại nặng, tồn dư thuốc bảo vệ thực vật, aflatoxin) tích luỹ dần trong cơ thể, gây tổn thương gan, thận, thần kinh, có thể gây ung thư.',
            'Làm giảm giá trị dinh dưỡng của thực phẩm; gây các bệnh truyền nhiễm qua đường tiêu hoá (tả, lị, thương hàn, viêm gan A).',
            'Về lâu dài ảnh hưởng tới sự phát triển thể lực, trí tuệ, có thể gây dị tật bẩm sinh, dẫn đến suy thoái nòi giống, giảm chất lượng dân số.',
            'Gây thiệt hại kinh tế: chi phí khám chữa bệnh, mất ngày công, giảm uy tín và khả năng xuất khẩu nông sản, thực phẩm.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Tác hại âm thầm',
          text: 'Nhiều chất độc tích luỹ không gây triệu chứng ngay. Thực phẩm trông vẫn tươi, ngon chưa chắc đã an toàn; cần chọn thực phẩm có nguồn gốc rõ ràng.',
        },
      ],
    },
    {
      heading: 'Nhiệm vụ: kiểm tra bếp ăn gia đình em',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: phát hiện những nguy cơ mất vệ sinh an toàn thực phẩm trong bếp ăn gia đình và đề xuất cách khắc phục.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Chuẩn bị: một phiếu ghi chép gồm các cột "Khâu", "Điều quan sát được", "Nhóm tác nhân", "Cách khắc phục"; điện thoại để chụp ảnh (được sự đồng ý của gia đình).',
            'Quan sát trong một ngày: nguồn gốc thực phẩm đã mua, cách sơ chế (thớt, dao, nước rửa), cách nấu, cách bảo quản thức ăn thừa, nơi để hoá chất tẩy rửa, thùng rác.',
            'Ghi từng nguy cơ vào phiếu và xếp vào nhóm tác nhân sinh học, hoá học hoặc vật lí.',
            'Thảo luận với gia đình, chọn ba việc dễ làm nhất để cải thiện ngay.',
            'Báo cáo trước lớp: bảng tổng hợp, ảnh minh hoạ (nếu có) và những thay đổi gia đình đã thực hiện.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Thanh tra bếp ăn',
    instruction:
      'Chạm vào từng thứ trong bếp. Nếu là vi phạm, chọn nhóm tác nhân (sinh học, hoá học, vật lí) làm thực phẩm mất an toàn; đọc giải thích và cách khắc phục. Tìm đủ tất cả các vi phạm.',
  },
  examples: [
    {
      problem:
        'Một gia đình thái thịt lợn sống trên thớt rồi dùng ngay thớt đó, không rửa, để thái giò. Hãy cho biết thực phẩm nào bị ô nhiễm, do nhóm tác nhân nào và cách khắc phục.',
      steps: [
        'Thịt lợn sống có thể mang vi khuẩn (như Salmonella), trứng hoặc nang kí sinh trùng.',
        'Vi khuẩn bám lên thớt rồi truyền sang giò: đây là ô nhiễm chéo từ thực phẩm sống sang thực phẩm chín.',
        'Giò được ăn ngay, không nấu lại, nên vi khuẩn không bị tiêu diệt; tác nhân thuộc nhóm sinh học.',
        'Khắc phục: dùng thớt, dao riêng cho đồ sống và đồ chín; rửa kĩ, tráng nước sôi, để khô sau khi dùng.',
      ],
      answer:
        'Giò bị ô nhiễm chéo bởi tác nhân sinh học từ thịt sống; cần dùng riêng thớt, dao cho thực phẩm sống và chín.',
    },
    {
      problem:
        'Bác An ăn rau muống của một vườn thường phun thuốc trừ sâu và hái rau ngay hôm sau. Nhiều năm ăn như vậy, bác không thấy đau bụng lần nào. Có thể kết luận rau này an toàn không?',
      steps: [
        'Hái rau ngay sau khi phun thuốc là chưa đủ thời gian cách li: rau còn tồn dư thuốc bảo vệ thực vật, tác nhân hoá học.',
        'Lượng nhỏ tồn dư có thể không gây ngộ độc cấp tính nên không thấy triệu chứng ngay.',
        'Ăn lâu dài, hoá chất tích luỹ trong cơ thể, có thể gây bệnh mạn tính (tổn thương gan, thận, thần kinh, ung thư).',
      ],
      answer:
        'Không. Rau còn tồn dư thuốc bảo vệ thực vật, có thể gây hại mạn tính dù không gây triệu chứng ngay.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Phát biểu nào đúng về vệ sinh an toàn thực phẩm?',
      options: [
        'Là bảo đảm mọi điều kiện, biện pháp ở tất cả các khâu từ sản xuất đến khi sử dụng để thực phẩm không gây hại cho người ăn',
        'Chỉ là việc nấu chín thức ăn trước khi ăn',
        'Chỉ là việc giữ bếp ăn sạch sẽ',
        'Là việc chọn thực phẩm có nhiều chất dinh dưỡng',
      ],
      answer: 0,
      hints: ['An toàn thực phẩm phải được bảo đảm ở một khâu hay ở mọi khâu?'],
      solution:
        'Vệ sinh an toàn thực phẩm là bảo đảm mọi điều kiện và biện pháp ở tất cả các khâu: sản xuất, chế biến, bảo quản, vận chuyển, sử dụng. Nấu chín hay giữ bếp sạch chỉ là một phần.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi tác nhân gây ô nhiễm thực phẩm với nhóm của nó.',
      left: ['Sán lá gan nhỏ trong gỏi cá', 'Hàn the trong giò chả', 'Mảnh kim loại trong đồ hộp'],
      right: ['Sinh học', 'Hoá học', 'Vật lí'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: [
        'Sinh vật là tác nhân sinh học; chất là tác nhân hoá học; dị vật là tác nhân vật lí.',
      ],
      solution:
        'Sán lá gan nhỏ là kí sinh trùng: tác nhân sinh học. Hàn the là chất: tác nhân hoá học. Mảnh kim loại là dị vật: tác nhân vật lí.',
    },
    {
      type: 'multi',
      prompt: 'Những trường hợp nào là ô nhiễm thực phẩm bởi tác nhân hoá học?',
      options: [
        'Rau còn tồn dư thuốc trừ sâu vì hái trước thời gian cách li',
        'Bánh phở có hàn the',
        'Khoai tây mọc mầm chứa nhiều solanin',
        'Thịt lợn có nang sán dây',
        'Cơm lẫn sạn',
      ],
      answers: [0, 1, 2],
      hints: ['Chất độc có sẵn trong thực phẩm cũng là một chất hoá học.'],
      solution:
        'Thuốc trừ sâu, hàn the và solanin là các chất hoá học. Nang sán là tác nhân sinh học, sạn là tác nhân vật lí.',
    },
    {
      type: 'order',
      prompt:
        'Sắp xếp các khâu của chuỗi thực phẩm theo thứ tự từ đầu đến cuối (ở khâu nào cũng có thể xảy ra ô nhiễm).',
      items: [
        'Nuôi trồng',
        'Thu hoạch, giết mổ',
        'Chế biến',
        'Bảo quản, vận chuyển, bày bán',
        'Sử dụng',
      ],
      answer: [0, 1, 2, 3, 4],
      hints: ['Đi theo đường của mớ rau từ cánh đồng tới bữa cơm.'],
      solution:
        'Nuôi trồng → thu hoạch, giết mổ → chế biến → bảo quản, vận chuyển, bày bán → sử dụng.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao nói mất vệ sinh an toàn thực phẩm có thể dẫn đến suy thoái nòi giống?',
      options: [
        'Chất độc tích luỹ lâu dài ảnh hưởng tới thể lực, trí tuệ và có thể gây dị tật bẩm sinh ở thế hệ sau',
        'Vì mọi vụ ngộ độc đều làm người bệnh tử vong',
        'Vì thực phẩm bẩn làm tăng chiều cao của trẻ',
        'Vì vi khuẩn trong thức ăn làm thay đổi gene của mọi người ăn phải',
      ],
      answer: 0,
      hints: ['Nghĩ tới tác hại mạn tính, kéo dài qua nhiều năm và nhiều thế hệ.'],
      solution:
        'Hoá chất độc, kim loại nặng tích luỹ lâu dài làm suy giảm sức khoẻ, thể lực, trí tuệ, có thể gây dị tật thai nhi; trên quy mô cả cộng đồng, chất lượng dân số giảm.',
    },
    {
      type: 'multi',
      prompt: 'Khi mua thức ăn chế biến sẵn, em nên làm gì để đảm bảo an toàn?',
      options: [
        'Mua ở cơ sở có địa chỉ rõ ràng, bày bán sạch sẽ, thức ăn được che đậy',
        'Xem nhãn mác, hạn sử dụng với thực phẩm đóng gói',
        'Kiểm tra màu, mùi; không mua thức ăn có mùi lạ, ôi thiu',
        'Chọn món có màu sắc sặc sỡ bất thường vì trông hấp dẫn',
        'Mua chỗ rẻ nhất, không cần quan tâm nguồn gốc',
      ],
      answers: [0, 1, 2],
      hints: ['Màu sắc quá sặc sỡ có thể do phẩm màu không được phép dùng.'],
      solution:
        'Chọn cơ sở rõ nguồn gốc, sạch sẽ; đọc nhãn, hạn dùng; kiểm tra cảm quan. Màu sặc sỡ bất thường có thể do phẩm màu công nghiệp; giá quá rẻ, không rõ nguồn gốc là dấu hiệu nguy cơ.',
    },
    {
      type: 'choice',
      prompt:
        'Hai loại rau có thành phần dinh dưỡng như nhau. Loại A có nhãn VietGAP, giá cao hơn; loại B không rõ nguồn gốc, rẻ hơn. Nên chọn loại nào?',
      options: [
        'Loại A, vì được sản xuất theo quy trình an toàn, truy xuất được nguồn gốc',
        'Loại B, vì cùng dinh dưỡng mà rẻ hơn',
        'Loại B, vì rau không nhãn mác luôn là rau sạch tự trồng',
        'Loại nào cũng được vì nấu chín sẽ hết mọi chất độc',
      ],
      answer: 0,
      hints: ['Nấu chín diệt được vi khuẩn nhưng có loại bỏ được tồn dư hoá chất không?'],
      solution:
        'Dinh dưỡng như nhau nhưng độ an toàn khác nhau. Rau VietGAP được sản xuất theo quy trình an toàn, có nguồn gốc rõ ràng. Nấu chín không loại bỏ được thuốc trừ sâu, kim loại nặng.',
    },
    {
      type: 'text',
      prompt:
        'Vi khuẩn từ thịt sống truyền sang thức ăn chín qua thớt, dao dùng chung được gọi là ô nhiễm gì?',
      accept: ['ô nhiễm chéo', 'nhiễm chéo', 'lây nhiễm chéo'],
      hints: ['Mầm bệnh đi "chéo" từ đồ sống sang đồ chín.'],
      solution: 'Đó là ô nhiễm chéo.',
    },
  ],
  takeaways: [
    'Vệ sinh an toàn thực phẩm là bảo đảm mọi điều kiện, biện pháp ở mọi khâu để thực phẩm không gây hại cho sức khoẻ, tính mạng con người.',
    'Ô nhiễm thực phẩm do tác nhân sinh học (vi khuẩn, virus, nấm mốc, kí sinh trùng), hoá học (thuốc bảo vệ thực vật, phụ gia cấm, kim loại nặng, chất độc có sẵn) hoặc vật lí (dị vật, chất phóng xạ).',
    'Ô nhiễm có thể xảy ra ở mọi khâu, từ nuôi trồng đến khi ăn.',
    'Mất vệ sinh an toàn thực phẩm gây bệnh cấp tính, mạn tính, có thể gây tử vong và về lâu dài làm suy thoái nòi giống.',
  ],
};
