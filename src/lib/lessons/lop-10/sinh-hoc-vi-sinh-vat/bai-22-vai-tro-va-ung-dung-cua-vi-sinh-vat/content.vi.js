/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Vi sinh vật giữ vòng tuần hoàn vật chất trong tự nhiên và có nhiều vai trò với con người bên cạnh một số tác hại; kích thước nhỏ, sinh trưởng nhanh, phổ dinh dưỡng rộng là cơ sở để ứng dụng chúng trong thực phẩm, nông nghiệp, y dược và môi trường.',
  intro:
    'Ổ bánh mì, hộp sữa chua, liều vaccine và bể xử lí nước thải đều có một điểm chung: phía sau là những sinh vật nhỏ tới mức không nhìn thấy bằng mắt thường. Vì sao vi sinh vật lại làm được nhiều việc đến vậy?',
  objectives: [
    'Trình bày được vai trò của vi sinh vật đối với tự nhiên, con người và nêu được một số tác hại.',
    'Giải thích được cơ sở khoa học của việc ứng dụng vi sinh vật trong thực tiễn.',
    'Kể được các ứng dụng của công nghệ vi sinh vật trong thực phẩm, nông nghiệp, y dược và môi trường.',
    'Nêu được một số thành tựu, triển vọng và ngành nghề liên quan đến công nghệ vi sinh vật.',
  ],
  sections: [
    {
      heading: 'Vai trò và tác hại của vi sinh vật',
      blocks: [
        {
          type: 'table',
          caption: 'Vai trò của vi sinh vật',
          head: ['Đối với', 'Vai trò'],
          rows: [
            [
              'Tự nhiên',
              'Phân giải chất thải và xác sinh vật thành chất khoáng, đảm bảo tuần hoàn vật chất, làm giàu đất. Sinh vật tự dưỡng như vi khuẩn lam tạo $\\mathrm{O_2}$ và chất dinh dưỡng. Cộng sinh với nhiều loài, ví dụ trùng roi trong ruột mối giúp tiêu hoá cellulose',
            ],
            [
              'Con người',
              'Phân giải chất thải độc hại như nhựa, hoá chất nhân tạo, giúp giảm ô nhiễm. Cộng sinh trong cơ thể người, tăng cường miễn dịch, tiêu hoá, tổng hợp một số vitamin và amino acid. Dùng để chế biến thực phẩm, sản xuất kháng sinh, vitamin ở quy mô công nghiệp',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Tác hại',
          text: 'Nhiều vi sinh vật gây bệnh nguy hiểm ở người, vật nuôi, cây trồng; làm hỏng thực phẩm, đồ dùng; tạo màng sinh học bám trên thiết bị, làm tắc đường ống và cản trở sản xuất.',
        },
        { type: 'widget', name: 'vai-tro' },
      ],
    },
    {
      heading: 'Cơ sở khoa học của việc ứng dụng',
      blocks: [
        {
          type: 'list',
          items: [
            'Kích thước hiển vi: rất nhiều tế bào có thể được nuôi cấy và lưu trữ trong một không gian nhỏ.',
            'Sinh trưởng nhanh: kích thước nhỏ nên tỉ lệ diện tích trên thể tích ($S/V$) lớn, trao đổi chất và sinh trưởng nhanh.',
            'Tổng hợp và phân giải các chất nhanh: thu được sản lượng rất lớn trong thời gian ngắn.',
            'Đa dạng di truyền: sinh sản nhanh, tốc độ đột biến lớn, tái tổ hợp di truyền, tiến hoá lâu dài.',
            'Phổ sinh thái và dinh dưỡng rộng: nhiều loại enzyme, sản phẩm chuyển hoá có thể ứng dụng vào thực tiễn.',
          ],
        },
      ],
    },
    {
      heading: 'Ứng dụng của công nghệ vi sinh vật',
      blocks: [
        {
          type: 'table',
          caption: 'Các lĩnh vực ứng dụng',
          head: ['Lĩnh vực', 'Khả năng được dùng', 'Sản phẩm'],
          rows: [
            [
              'Nông nghiệp',
              'Cố định $\\mathrm{N_2}$, biến lân khó tiêu thành dễ tiêu, ức chế sâu bệnh',
              'Phân bón vi sinh; thuốc trừ sâu vi sinh từ Bacillus thuringiensis (Bt), diệt sâu hại và tránh tồn dư thuốc hoá học',
            ],
            [
              'Thực phẩm',
              'Phân giải ngoại bào, lên men',
              'Rượu, bia, bánh mì nhờ nấm men Saccharomyces cerevisiae; sữa chua, pho mát nhờ vi khuẩn lactic',
            ],
            [
              'Y dược',
              'Sản phẩm trao đổi chất',
              'Kháng sinh như penicillin từ nấm Penicillium, vaccine, amino acid, hormone như insulin nhờ E. coli chuyển gene, probiotics; hỗ trợ chẩn đoán bệnh',
            ],
            [
              'Môi trường',
              'Hấp thụ, phân giải chất thải, chất độc, kim loại nặng',
              'Xử lí nước thải; xử lí tràn dầu nhờ vi khuẩn Alcanivorax borkumensis; tạo biogas từ chất thải chăn nuôi nhờ Archaea sinh methane',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Ngoài ra, enzyme của vi sinh vật còn được dùng trong sản xuất bột giặt và thuộc da.',
        },
      ],
    },
    {
      heading: 'Thành tựu, triển vọng và ngành nghề',
      blocks: [
        {
          type: 'p',
          text: 'Công nghệ lên men tạo thức ăn chăn nuôi, bia, rượu, sữa chua. Công nghệ thu hồi sản phẩm tạo thuốc bảo vệ thực vật sinh học (Bt), kháng sinh, vaccine, chế phẩm xử lí chất thải, phân vi sinh, acid và dung môi hữu cơ.',
        },
        {
          type: 'p',
          text: 'Trong tương lai, công nghệ vi sinh kết hợp với công nghệ nano, công nghệ thông tin và trí tuệ nhân tạo. Nghiên cứu hệ vi sinh vật Trái Đất và hệ vi sinh vật con người mở ra những ứng dụng mới, như vi khuẩn sinh điện hay xử lí vết nứt bê tông.',
        },
        {
          type: 'list',
          items: [
            'Công nghiệp thực phẩm: rượu, bia, sản phẩm lên men từ sữa.',
            'Công nghiệp dược phẩm: kháng sinh, kháng thể đơn dòng, vaccine, enzyme.',
            'Y tế: phòng xét nghiệm vi sinh, trung tâm dịch tễ.',
            'Môi trường: trung tâm xử lí ô nhiễm, tái tạo năng lượng.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Bản đồ ứng dụng vi sinh vật',
    instruction:
      'Chọn một lĩnh vực rồi một sản phẩm để xem vi sinh vật tạo ra nó và khả năng được sử dụng. Sau đó chuyển sang "Đố vui" để tự kiểm tra.',
  },
  examples: [
    {
      problem:
        'Vì sao vi sinh vật cho sản lượng lớn trong thời gian rất ngắn so với cây trồng, vật nuôi?',
      steps: [
        'Kích thước nhỏ nên tỉ lệ $S/V$ lớn, tế bào trao đổi chất rất nhanh với môi trường.',
        'Trao đổi chất nhanh kéo theo sinh trưởng và sinh sản nhanh, thời gian thế hệ có thể chỉ tính bằng phút.',
        'Một lượng lớn tế bào có thể nuôi trong không gian nhỏ, tổng hợp nhanh các sản phẩm.',
      ],
      answer: 'Nhờ kích thước nhỏ, tỉ lệ $S/V$ lớn, nên trao đổi chất và sinh trưởng rất nhanh.',
    },
    {
      problem:
        'Một trang trại dùng hầm biogas cho chất thải chăn nuôi. Hãy cho biết nhóm vi sinh vật chủ yếu và lợi ích của cách làm này.',
      steps: [
        'Archaea sinh methane phân giải chất thải trong điều kiện kị khí, tạo khí methane.',
        'Khí methane dùng làm chất đốt cho gia đình.',
        'Chất thải được xử lí, giảm ô nhiễm; phần còn lại làm phân bón hữu cơ.',
      ],
      answer:
        'Archaea sinh methane; lợi ích là có chất đốt, giảm ô nhiễm môi trường và có phân bón hữu cơ.',
    },
  ],
  practice: [
    {
      type: 'multi',
      prompt: 'Những vai trò nào của vi sinh vật là vai trò đối với tự nhiên?',
      options: [
        'Phân giải xác sinh vật, đảm bảo tuần hoàn vật chất',
        'Vi khuẩn lam tạo $\\mathrm{O_2}$',
        'Sản xuất thuốc kháng sinh',
        'Cộng sinh giúp mối tiêu hoá cellulose',
        'Lên men sữa chua',
      ],
      answers: [0, 1, 3],
      hints: ['Những việc diễn ra trong tự nhiên, không cần đến sản xuất của con người.'],
      solution:
        'Phân giải xác, tạo $\\mathrm{O_2}$ và cộng sinh là vai trò với tự nhiên. Kháng sinh và sữa chua là ứng dụng trong đời sống con người.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi sản phẩm với vi sinh vật tạo ra nó.',
      left: ['Bia, bánh mì', 'Sữa chua', 'Thuốc trừ sâu sinh học Bt', 'Khí biogas'],
      right: [
        'Nấm men Saccharomyces cerevisiae',
        'Vi khuẩn lactic',
        'Bacillus thuringiensis',
        'Archaea sinh methane',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Lên men đường tạo $\\mathrm{CO_2}$ làm nở bánh là việc của nấm men.'],
      solution:
        'Bia, bánh mì: nấm men. Sữa chua: vi khuẩn lactic. Thuốc Bt: Bacillus thuringiensis. Biogas: Archaea sinh methane.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao kích thước nhỏ giúp vi sinh vật sinh trưởng nhanh?',
      options: [
        'Tỉ lệ $S/V$ lớn nên trao đổi chất với môi trường nhanh',
        'Tế bào nhỏ không cần năng lượng',
        'Tế bào nhỏ không có vật chất di truyền',
        'Tế bào nhỏ không bao giờ chết',
      ],
      answer: 0,
      hints: ['So sánh diện tích bề mặt với thể tích tế bào.'],
      solution:
        'Tế bào càng nhỏ, tỉ lệ diện tích bề mặt trên thể tích càng lớn, trao đổi chất với môi trường càng nhanh.',
    },
    {
      type: 'choice',
      prompt: 'Sự cố tràn dầu trên biển có thể được xử lí nhờ vi sinh vật nào?',
      options: [
        'Alcanivorax borkumensis',
        'Saccharomyces cerevisiae',
        'Vi khuẩn lactic',
        'Vi khuẩn cố định đạm',
      ],
      answer: 0,
      hints: ['Cần vi khuẩn sử dụng được dầu làm nguồn dinh dưỡng.'],
      solution:
        'Alcanivorax borkumensis là vi khuẩn "ăn" dầu, được dùng để xử lí tràn dầu trên biển.',
    },
    {
      type: 'choice',
      prompt: 'Lợi ích lớn của thuốc trừ sâu vi sinh so với thuốc trừ sâu hoá học là gì?',
      options: [
        'Diệt sâu hiệu quả và tránh tồn dư thuốc hoá học',
        'Diệt mọi loài sinh vật trên đồng ruộng',
        'Không cần lặp lại trong suốt đời cây',
        'Làm cây tự cố định đạm',
      ],
      answer: 0,
      hints: ['Nghĩ tới dư lượng thuốc trên nông sản.'],
      solution:
        'Thuốc trừ sâu vi sinh diệt sâu bệnh hại hiệu quả và tránh tồn dư thuốc hoá học gây độc cho người, vật nuôi.',
    },
    {
      type: 'multi',
      prompt: 'Sản phẩm nào sau đây được sản xuất nhờ vi sinh vật trong ngành y dược?',
      options: ['Penicillin', 'Vaccine', 'Insulin tái tổ hợp', 'Biogas', 'Phân vi sinh'],
      answers: [0, 1, 2],
      hints: ['Hai trong số các lựa chọn thuộc lĩnh vực năng lượng và nông nghiệp.'],
      solution: 'Penicillin, vaccine và insulin thuộc y dược; biogas và phân vi sinh thì không.',
    },
    {
      type: 'choice',
      prompt: 'Hiện tượng nào dưới đây là tác hại của vi sinh vật?',
      options: [
        'Màng sinh học làm tắc đường ống công nghiệp',
        'Phân giải xác thực vật trong đất',
        'Cố định đạm cho cây họ Đậu',
        'Làm sạch nước thải trong bể xử lí',
      ],
      answer: 0,
      hints: ['Hiện tượng nào cản trở hoạt động của con người?'],
      solution:
        'Màng sinh học bám trên thiết bị làm tắc đường ống, cản trở sản xuất là một tác hại.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi ngành nghề với công việc chính.',
      left: ['Công nghiệp thực phẩm', 'Công nghiệp dược phẩm', 'Y tế', 'Môi trường'],
      right: [
        'Sản xuất rượu, bia, sản phẩm lên men từ sữa',
        'Sản xuất kháng sinh, vaccine, enzyme',
        'Xét nghiệm vi sinh, chẩn đoán bệnh',
        'Xử lí ô nhiễm, tái tạo năng lượng',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Đọc tên ngành để đoán sản phẩm của ngành đó.'],
      solution:
        'Thực phẩm: rượu, bia, sữa lên men. Dược phẩm: kháng sinh, vaccine, enzyme. Y tế: xét nghiệm. Môi trường: xử lí ô nhiễm.',
    },
  ],
  takeaways: [
    'Vi sinh vật giữ vòng tuần hoàn vật chất, tạo $\\mathrm{O_2}$, cộng sinh với nhiều loài và có ích cho con người, nhưng cũng gây bệnh và làm hỏng thực phẩm, thiết bị.',
    'Kích thước nhỏ, sinh trưởng nhanh, tổng hợp và phân giải nhanh, đa dạng di truyền và phổ dinh dưỡng rộng là cơ sở của công nghệ vi sinh vật.',
    'Công nghệ vi sinh vật được ứng dụng trong nông nghiệp, thực phẩm, y dược và xử lí môi trường.',
  ],
};
