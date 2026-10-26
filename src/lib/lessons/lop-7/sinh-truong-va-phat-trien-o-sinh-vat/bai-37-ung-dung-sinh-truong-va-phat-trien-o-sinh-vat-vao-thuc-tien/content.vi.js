/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Nhiệt độ, ánh sáng, nước và chất dinh dưỡng là các nhân tố chủ yếu ảnh hưởng đến sinh trưởng và phát triển của sinh vật; con người điều chỉnh các nhân tố này và vận dụng hiểu biết về vòng đời để tăng năng suất trồng trọt, chăn nuôi và phòng trừ sinh vật gây hại.',
  intro:
    'Cùng một giống lúa, có ruộng cho năng suất cao, có ruộng cho năng suất thấp. Cùng một lứa cá giống, ao này cá lớn nhanh, ao kia cá còi cọc. Để vật nuôi, cây trồng sinh trưởng và phát triển tốt, cho năng suất cao, con người cần làm gì? Muốn trả lời, trước hết phải biết những nhân tố nào ảnh hưởng đến sinh trưởng và phát triển.',
  objectives: [
    'Nêu được các nhân tố chủ yếu ảnh hưởng đến sinh trưởng và phát triển của sinh vật: nhiệt độ, ánh sáng, nước, chất dinh dưỡng.',
    'Trình bày được một số ứng dụng sinh trưởng và phát triển trong trồng trọt và chăn nuôi.',
    'Vận dụng hiểu biết về vòng đời để giải thích một số biện pháp thực tiễn, như diệt muỗi ở giai đoạn ấu trùng, diệt sâu hại.',
  ],
  sections: [
    {
      heading: 'Các nhân tố chủ yếu ảnh hưởng đến sinh trưởng và phát triển',
      blocks: [
        {
          type: 'p',
          text: 'Nhiệt độ: Mỗi loài sinh vật chỉ sinh trưởng và phát triển được trong một giới hạn nhiệt độ nhất định. Trong giới hạn đó có một khoảng nhiệt độ thuận lợi, ở đó sinh vật sinh trưởng và phát triển tốt nhất. Nhiệt độ quá cao hoặc quá thấp làm sinh vật sinh trưởng, phát triển chậm, thậm chí chết.',
        },
        {
          type: 'table',
          caption: 'Ảnh hưởng của nhiệt độ nước đến cá rô phi',
          head: ['Nhiệt độ', 'Sinh trưởng và phát triển của cá rô phi'],
          rows: [
            ['Dưới $5{,}6\\ ^\\circ\\mathrm{C}$', 'Cá chết'],
            [
              'Từ $5{,}6\\ ^\\circ\\mathrm{C}$ đến $23\\ ^\\circ\\mathrm{C}$',
              'Sinh trưởng, phát triển kém',
            ],
            ['Từ $23\\ ^\\circ\\mathrm{C}$ đến $37\\ ^\\circ\\mathrm{C}$', 'Thuận lợi nhất'],
            [
              'Từ $37\\ ^\\circ\\mathrm{C}$ đến $42\\ ^\\circ\\mathrm{C}$',
              'Sinh trưởng, phát triển kém',
            ],
            ['Trên $42\\ ^\\circ\\mathrm{C}$', 'Cá chết'],
          ],
        },
        {
          type: 'p',
          text: 'Ánh sáng: Thực vật cần ánh sáng để quang hợp; thiếu ánh sáng, cây vươn dài, yếu ớt, lá vàng. Nhiều loài động vật có tập tính phơi nắng: ánh sáng giúp chúng tăng nhiệt độ cơ thể, các hoạt động sống diễn ra mạnh hơn. Ở người và động vật non, ánh sáng mặt trời giúp cơ thể tổng hợp vitamin D, nhờ đó hấp thụ được calcium để xương phát triển. Nên cho trẻ tắm nắng vào sáng sớm hoặc chiều muộn, khi ánh nắng yếu, có lợi mà không làm hại da.',
        },
        {
          type: 'p',
          text: 'Nước: Nước là thành phần chủ yếu của tế bào và là môi trường diễn ra các quá trình trao đổi chất. Thiếu nước, các hoạt động sống bị đình trệ, sinh vật chậm lớn, cây héo; ngập úng lâu thì rễ cây thiếu oxygen, bị thối.',
        },
        {
          type: 'p',
          text: 'Chất dinh dưỡng: Chất dinh dưỡng là nguyên liệu để tạo nên tế bào, cơ quan và cung cấp năng lượng cho cơ thể. Thiếu chất dinh dưỡng, sinh trưởng và phát triển bị ức chế, thậm chí sinh vật có thể chết: động vật thiếu protein thì chậm lớn, gầy yếu, sức đề kháng kém; cây thiếu nitrogen thì chậm lớn, lá vàng. Thừa chất dinh dưỡng cũng gây hại.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Kết luận',
          text: 'Nhiệt độ, ánh sáng, nước và chất dinh dưỡng là các nhân tố chủ yếu ảnh hưởng đến sinh trưởng và phát triển của sinh vật. Mỗi nhân tố đều có mức thích hợp; thiếu hoặc thừa đều làm sinh vật sinh trưởng, phát triển kém.',
        },
      ],
    },
    {
      heading: 'Ứng dụng trong trồng trọt',
      blocks: [
        {
          type: 'table',
          caption: 'Một số biện pháp điều khiển sinh trưởng và phát triển của cây trồng',
          head: ['Biện pháp', 'Tác dụng'],
          rows: [
            ['Bón phân hợp lí', 'Cung cấp chất dinh dưỡng cho cây sinh trưởng, phát triển'],
            ['Tưới nước, tiêu nước đúng lúc', 'Cung cấp đủ nước, tránh khô hạn và ngập úng'],
            [
              'Trồng cây trong nhà kính, chiếu sáng nhân tạo',
              'Cung cấp ánh sáng, nhiệt độ thích hợp; che chắn mưa, gió, rét và sinh vật gây hại',
            ],
            ['Ủ rơm, che phủ gốc chống rét', 'Giữ ấm cho cây vào mùa lạnh'],
            ['Làm đất kĩ, trồng cây đúng thời vụ', 'Cây gặp điều kiện nhiệt độ, độ ẩm thuận lợi'],
            ['Tuốt lá cây đào vào thời điểm thích hợp', 'Điều khiển cây đào ra hoa đúng dịp Tết'],
          ],
        },
        {
          type: 'p',
          text: 'Khi trồng rừng lấy gỗ, người ta trồng dày lúc cây còn non để cây vươn cao, thân thẳng; khi cây đạt chiều cao mong muốn thì tỉa thưa để cây tập trung dinh dưỡng làm thân to ra, cho gỗ tốt.',
        },
        {
          type: 'table',
          caption: 'Sử dụng hormone (chất điều hoà sinh trưởng) cho cây trồng',
          head: ['Đối tượng', 'Loại hormone', 'Lợi ích'],
          rows: [
            ['Cây lấy sợi, lấy gỗ', 'Kích thích sinh trưởng', 'Thân vươn cao, cho nhiều sợi, gỗ'],
            [
              'Cây quất cảnh',
              'Kích thích sinh trưởng',
              'Cây ra nhiều quả, tăng giá trị thẩm mĩ của cây cảnh',
            ],
            [
              'Củ hành, tỏi, khoai tây',
              'Ức chế sinh trưởng',
              'Củ không nảy mầm, bảo quản được lâu',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Ứng dụng trong chăn nuôi',
      blocks: [
        {
          type: 'list',
          items: [
            'Cho vật nuôi ăn đủ lượng, đủ chất, phù hợp với từng giai đoạn sinh trưởng.',
            'Làm chuồng trại hợp lí (ví dụ chuồng hướng đông nam: mùa đông ấm, mùa hè mát), giữ vệ sinh chuồng trại.',
            'Chống nóng vào mùa hè, chống rét vào mùa đông; nuôi cá trong khoảng nhiệt độ nước thuận lợi.',
            'Có thể dùng chất kích thích sinh trưởng trộn vào thức ăn để vật nuôi lớn nhanh.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Lưu ý khi dùng chất kích thích sinh trưởng',
          text: 'Phải dùng đúng loại được phép, đúng liều lượng, thời điểm và đối tượng. Dùng sai, chất kích thích tồn dư trong thịt vật nuôi, gây hại cho sức khoẻ người tiêu dùng.',
        },
      ],
    },
    {
      heading: 'Ứng dụng trong phòng trừ sinh vật gây hại',
      blocks: [
        {
          type: 'p',
          text: 'Nhiều loài côn trùng có hình thái và lối sống rất khác nhau ở các giai đoạn trong vòng đời. Muỗi: trứng → bọ gậy (ấu trùng, sống trong nước) → cung quăng (nhộng, sống trong nước) → muỗi trưởng thành (bay). Bướm: trứng → sâu → nhộng → bướm.',
        },
        {
          type: 'list',
          items: [
            'Diệt muỗi hiệu quả nhất ở giai đoạn ấu trùng (bọ gậy): bọ gậy chỉ sống được trong nước, tập trung ở các vũng nước đọng nên dễ tiêu diệt, trong khi muỗi trưởng thành bay khắp nơi. Biện pháp: loại bỏ nước đọng, đậy kín dụng cụ chứa nước, thả cá ăn bọ gậy; kết hợp diệt muỗi trưởng thành.',
            'Với các loài bướm hại cây trồng, giai đoạn sâu phá hại mùa màng mạnh nhất, nên cần diệt sâu non sớm; dùng bẫy đèn bắt bướm để chúng không đẻ trứng.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Nuôi trồng thử',
    instruction:
      'Chọn nuôi cá rô phi hoặc trồng rau cải. Điều chỉnh nhiệt độ, ánh sáng, nước, thức ăn hay phân bón và so sánh đường cong sinh trưởng với đường nét đứt (điều kiện tốt nhất). Tìm nhân tố đang hạn chế sự sinh trưởng và sửa nó.',
  },
  examples: [
    {
      problem:
        'Ba ao nuôi cá rô phi có nhiệt độ nước lần lượt là $15\\ ^\\circ\\mathrm{C}$, $30\\ ^\\circ\\mathrm{C}$ và $40\\ ^\\circ\\mathrm{C}$; các điều kiện khác như nhau. Ở ao nào cá sinh trưởng tốt nhất? Cá ở hai ao còn lại thế nào?',
      steps: [
        'Khoảng nhiệt độ thuận lợi của cá rô phi là từ $23\\ ^\\circ\\mathrm{C}$ đến $37\\ ^\\circ\\mathrm{C}$; giới hạn chịu đựng là từ $5{,}6\\ ^\\circ\\mathrm{C}$ đến $42\\ ^\\circ\\mathrm{C}$.',
        '$30\\ ^\\circ\\mathrm{C}$ nằm trong khoảng thuận lợi.',
        '$15\\ ^\\circ\\mathrm{C}$ và $40\\ ^\\circ\\mathrm{C}$ nằm trong giới hạn chịu đựng nhưng ngoài khoảng thuận lợi: cá vẫn sống nhưng sinh trưởng kém.',
      ],
      answer:
        'Cá ở ao $30\\ ^\\circ\\mathrm{C}$ sinh trưởng tốt nhất; cá ở ao $15\\ ^\\circ\\mathrm{C}$ và $40\\ ^\\circ\\mathrm{C}$ vẫn sống nhưng sinh trưởng, phát triển kém.',
    },
    {
      problem:
        'Vì sao diệt muỗi ở giai đoạn bọ gậy lại hiệu quả hơn diệt muỗi trưởng thành? Nêu hai biện pháp cụ thể.',
      steps: [
        'Vòng đời muỗi: trứng → bọ gậy → cung quăng → muỗi trưởng thành.',
        'Bọ gậy chỉ sống trong nước, tập trung ở chum, vại, lốp xe cũ, vũng nước đọng; muỗi trưởng thành bay khắp nơi, khó diệt hết.',
        'Diệt bọ gậy thì ngăn được muỗi trưởng thành xuất hiện và tiếp tục đẻ trứng.',
      ],
      answer:
        'Bọ gậy sống tập trung trong nước nên dễ diệt và diệt từ gốc. Biện pháp: loại bỏ, lật úp các vật chứa nước đọng; đậy kín bể nước; thả cá ăn bọ gậy.',
    },
    {
      problem:
        'Khi trồng rừng keo lấy gỗ, người ta trồng dày lúc cây còn non, sau đó tỉa thưa. Giải thích ý nghĩa của mỗi việc.',
      steps: [
        'Trồng dày: các cây che bóng lẫn nhau, cạnh tranh ánh sáng nên vươn cao, thân thẳng, ít cành ngang.',
        'Khi cây đã đủ cao, tỉa thưa để mỗi cây có đủ ánh sáng, chất dinh dưỡng.',
        'Cây tập trung dinh dưỡng làm thân to ra nhờ mô phân sinh bên, cho gỗ chắc và nhiều.',
      ],
      answer:
        'Trồng dày để cây cao, thân thẳng; tỉa thưa để cây tập trung dinh dưỡng phát triển đường kính thân, cho nhiều gỗ tốt.',
    },
  ],
  practice: [
    {
      type: 'multi',
      prompt:
        'Những nhân tố nào là nhân tố chủ yếu ảnh hưởng đến sinh trưởng và phát triển của sinh vật?',
      options: ['Nhiệt độ', 'Ánh sáng', 'Nước', 'Chất dinh dưỡng', 'Màu sắc của chuồng nuôi'],
      answers: [0, 1, 2, 3],
      hints: ['Có bốn nhân tố chủ yếu.'],
      solution: 'Bốn nhân tố chủ yếu là nhiệt độ, ánh sáng, nước và chất dinh dưỡng.',
    },
    {
      type: 'choice',
      prompt: 'Nhiệt độ nước $40\\ ^\\circ\\mathrm{C}$ ảnh hưởng thế nào đến cá rô phi?',
      options: [
        'Cá sinh trưởng tốt nhất',
        'Cá vẫn sống nhưng sinh trưởng, phát triển kém',
        'Cá chết ngay',
        'Không ảnh hưởng gì',
      ],
      answer: 1,
      hints: [
        'So sánh $40\\ ^\\circ\\mathrm{C}$ với khoảng thuận lợi và giới hạn trên $42\\ ^\\circ\\mathrm{C}$.',
      ],
      solution:
        '$40\\ ^\\circ\\mathrm{C}$ cao hơn khoảng thuận lợi ($23$ đến $37\\ ^\\circ\\mathrm{C}$) nhưng chưa vượt giới hạn $42\\ ^\\circ\\mathrm{C}$: cá sống nhưng sinh trưởng, phát triển kém.',
    },
    {
      type: 'number',
      prompt:
        'Cá rô phi sống được trong khoảng nhiệt độ từ $5{,}6\\ ^\\circ\\mathrm{C}$ đến $42\\ ^\\circ\\mathrm{C}$. Khoảng nhiệt độ này rộng bao nhiêu độ?',
      answer: 36.4,
      tolerance: 0.01,
      unit: '°C',
      hints: ['Lấy giới hạn trên trừ giới hạn dưới.'],
      solution: '$42 - 5{,}6 = 36{,}4$, nên giới hạn chịu đựng rộng $36{,}4\\ ^\\circ\\mathrm{C}$.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao nên cho trẻ nhỏ tắm nắng vào sáng sớm hoặc chiều muộn?',
      options: [
        'Vì lúc đó trời mát, trẻ dễ ngủ',
        'Vì ánh nắng yếu giúp cơ thể tổng hợp vitamin D để hấp thụ calcium cho xương, mà không làm hại da',
        'Vì ánh nắng lúc đó giúp trẻ quang hợp',
        'Vì nắng buổi trưa không có ánh sáng',
      ],
      answer: 1,
      hints: ['Ánh nắng giúp cơ thể tạo ra một loại vitamin cần cho xương.'],
      solution:
        'Ánh nắng sáng sớm, chiều muộn yếu, giúp cơ thể tổng hợp vitamin D (giúp hấp thụ calcium, xương phát triển) mà không gây hại cho da như nắng gắt buổi trưa.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi biện pháp trong trồng trọt với tác dụng của nó.',
      left: [
        'Ủ rơm quanh gốc cây vào mùa đông',
        'Chiếu đèn trong nhà kính',
        'Bón phân',
        'Tuốt lá cây đào',
      ],
      right: [
        'Cung cấp chất dinh dưỡng',
        'Giữ ấm, chống rét cho cây',
        'Điều khiển cây ra hoa đúng dịp Tết',
        'Cung cấp ánh sáng cho cây quang hợp',
        'Diệt bọ gậy',
      ],
      pairs: [
        [0, 1],
        [1, 3],
        [2, 0],
        [3, 2],
      ],
      hints: ['Mỗi biện pháp điều chỉnh một nhân tố: nhiệt độ, ánh sáng hay chất dinh dưỡng?'],
      solution:
        'Ủ rơm: giữ ấm. Chiếu đèn: cung cấp ánh sáng. Bón phân: cung cấp chất dinh dưỡng. Tuốt lá đào: điều khiển cây ra hoa đúng Tết.',
    },
    {
      type: 'choice',
      prompt: 'Người ta xử lí củ khoai tây, hành, tỏi bằng hormone ức chế sinh trưởng nhằm',
      options: [
        'làm củ to ra nhanh hơn',
        'ngăn củ nảy mầm, giữ được chất dinh dưỡng khi bảo quản',
        'làm củ ra hoa',
        'giúp củ hút nhiều nước',
      ],
      answer: 1,
      hints: ['Củ để lâu thường mọc mầm và bị teo lại.'],
      solution:
        'Hormone ức chế sinh trưởng ngăn củ nảy mầm, nhờ đó củ không bị hao hụt chất dinh dưỡng và bảo quản được lâu.',
    },
    {
      type: 'choice',
      prompt:
        'Khi dùng chất kích thích sinh trưởng trong chăn nuôi, điều quan trọng nhất cần lưu ý là gì?',
      options: [
        'Dùng càng nhiều càng tốt để vật nuôi lớn nhanh',
        'Dùng loại được phép, đúng liều lượng, thời điểm và đối tượng để không tồn dư trong thịt',
        'Chỉ dùng cho vật nuôi đã trưởng thành',
        'Trộn vào nước uống của người chăn nuôi',
      ],
      answer: 1,
      hints: ['Thịt vật nuôi được con người ăn.'],
      solution:
        'Dùng sai cách, chất kích thích tồn dư trong thịt, gây hại cho người tiêu dùng; vì vậy phải dùng loại được phép, đúng liều lượng, thời điểm, đối tượng.',
    },
    {
      type: 'choice',
      prompt: 'Diệt muỗi ở giai đoạn nào là hiệu quả nhất?',
      options: [
        'Trứng bám trên cây',
        'Ấu trùng (bọ gậy) sống trong nước',
        'Muỗi trưởng thành',
        'Giai đoạn nào cũng như nhau',
      ],
      answer: 1,
      hints: ['Giai đoạn nào sống tập trung ở một nơi, dễ tìm thấy?'],
      solution:
        'Bọ gậy chỉ sống trong nước, tập trung ở các vật chứa nước đọng nên dễ diệt; diệt bọ gậy ngăn muỗi trưởng thành xuất hiện. Trứng muỗi được đẻ trên mặt nước, không phải trên cây.',
    },
    {
      type: 'multi',
      prompt: 'Những việc làm nào giúp ngăn muỗi sinh sản và phát triển quanh nhà?',
      options: [
        'Lật úp chum, vại, lốp xe cũ không dùng đến',
        'Đậy kín bể, chum chứa nước',
        'Thả cá vào bể nước để ăn bọ gậy',
        'Để nước đọng trong chậu cây cảnh nhiều ngày',
        'Bón thêm phân cho cây trong vườn',
      ],
      answers: [0, 1, 2],
      hints: ['Muỗi đẻ trứng và bọ gậy sống ở đâu?'],
      solution:
        'Muỗi đẻ trứng trên mặt nước đọng, bọ gậy sống trong nước: lật úp vật chứa nước, đậy kín bể, thả cá ăn bọ gậy đều cắt đứt vòng đời của muỗi. Để nước đọng thì ngược lại.',
    },
    {
      type: 'text',
      prompt: 'Ấu trùng của muỗi sống trong nước thường được gọi là gì?',
      accept: ['bọ gậy', 'bo gay', 'lăng quăng', 'lang quang'],
      hints: ['Tên gọi ở miền Bắc gồm hai chữ, bắt đầu bằng "bọ".'],
      solution: 'Ấu trùng của muỗi là bọ gậy (miền Nam gọi là lăng quăng).',
    },
  ],
  takeaways: [
    'Nhân tố chủ yếu ảnh hưởng đến sinh trưởng và phát triển: nhiệt độ, ánh sáng, nước, chất dinh dưỡng; mỗi nhân tố đều có mức thích hợp.',
    'Cá rô phi chết dưới $5{,}6\\ ^\\circ\\mathrm{C}$ và trên $42\\ ^\\circ\\mathrm{C}$; thuận lợi nhất từ $23\\ ^\\circ\\mathrm{C}$ đến $37\\ ^\\circ\\mathrm{C}$.',
    'Trồng trọt: bón phân, tưới tiêu, chiếu sáng, chống rét, đúng thời vụ, mật độ hợp lí, dùng hormone kích thích hoặc ức chế sinh trưởng.',
    'Chăn nuôi: thức ăn đủ chất theo giai đoạn, chuồng trại hợp lí; dùng chất kích thích sinh trưởng đúng quy định.',
    'Phòng trừ: diệt muỗi ở giai đoạn bọ gậy, diệt sâu non, bẫy đèn bắt bướm.',
  ],
};
