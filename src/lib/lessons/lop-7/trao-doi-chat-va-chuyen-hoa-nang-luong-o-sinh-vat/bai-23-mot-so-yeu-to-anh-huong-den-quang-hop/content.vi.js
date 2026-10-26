/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Ảnh hưởng của ánh sáng, nước, khí carbon dioxide và nhiệt độ đến quang hợp; cây ưa sáng và cây ưa bóng; ý nghĩa của việc trồng và bảo vệ cây xanh, ứng dụng trong trồng trọt.',
  intro:
    'Cùng một giống lúa, ruộng được chăm sóc đúng thời vụ, đủ nước, đủ nắng cho bông nặng hạt; ruộng gặp hạn hay rét đậm thì lúa còi cọc. Vì sao lại như vậy? Quang hợp không phải lúc nào cũng diễn ra như nhau: nó phụ thuộc vào những điều kiện bên ngoài như ánh sáng, nước, khí carbon dioxide và nhiệt độ. Hiểu được các yếu tố này, người nông dân có thể giúp cây quang hợp tốt hơn và cho năng suất cao hơn.',
  objectives: [
    'Nêu được một số yếu tố chủ yếu ảnh hưởng đến quang hợp: ánh sáng, nước, khí carbon dioxide, nhiệt độ.',
    'Phân biệt được cây ưa sáng và cây ưa bóng, lấy được ví dụ.',
    'Vận dụng hiểu biết về quang hợp để giải thích ý nghĩa của việc trồng và bảo vệ cây xanh, và một số biện pháp kĩ thuật trong trồng trọt.',
  ],
  sections: [
    {
      heading: 'Các yếu tố ảnh hưởng đến quang hợp',
      blocks: [
        {
          type: 'p',
          text: 'Quang hợp cần nước và khí carbon dioxide làm nguyên liệu, cần năng lượng ánh sáng, và diễn ra nhờ hoạt động của tế bào lá. Vì vậy, những yếu tố bên ngoài như ánh sáng, nước, nồng độ khí carbon dioxide và nhiệt độ đều ảnh hưởng đến quang hợp.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Ánh sáng',
          text: 'Trong giới hạn nhất định, cường độ ánh sáng tăng thì hiệu quả quang hợp tăng. Nhu cầu ánh sáng của các loài cây không giống nhau: cây ưa sáng cần nhiều ánh sáng, cây ưa bóng cần ít ánh sáng. Ánh sáng quá mạnh làm quang hợp giảm, nhất là ở cây ưa bóng.',
        },
        {
          type: 'table',
          caption: 'Cây ưa sáng và cây ưa bóng',
          head: ['Đặc điểm', 'Cây ưa sáng', 'Cây ưa bóng'],
          rows: [
            [
              'Nhu cầu ánh sáng',
              'Cần nhiều ánh sáng, sống nơi quang đãng',
              'Cần ít ánh sáng, sống dưới tán cây khác hoặc nơi râm mát',
            ],
            [
              'Ví dụ',
              'Lúa, ngô, mía, bàng, phượng, xoài, hoa hướng dương',
              'Lá lốt, trầu không, vạn niên thanh, dương xỉ, lá dong, lan ý',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Nước',
          text: 'Nước là nguyên liệu của quang hợp và giúp khí khổng mở. Thiếu nước, khí khổng đóng lại để giữ nước, khí carbon dioxide khó vào lá, nên quang hợp giảm; thiếu nước lâu, cây héo và có thể chết. Các loài cây khác nhau có nhu cầu nước khác nhau.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Khí carbon dioxide',
          text: 'Không khí bình thường chỉ chứa khoảng $0{,}04\\%$ khí carbon dioxide. Trong giới hạn nhất định, nồng độ khí carbon dioxide tăng thì hiệu quả quang hợp tăng. Nếu nồng độ quá thấp, quang hợp không diễn ra được; nếu quá cao (khoảng $0{,}2\\%$), cây bị ngộ độc và có thể chết. Mức ảnh hưởng không giống nhau ở các loài cây.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Nhiệt độ',
          text: 'Hầu hết các loài cây quang hợp thuận lợi nhất ở nhiệt độ khoảng $25\\ ^\\circ\\text{C}$ đến $35\\ ^\\circ\\text{C}$. Nhiệt độ quá cao (trên $40\\ ^\\circ\\text{C}$) hoặc quá thấp (dưới $10\\ ^\\circ\\text{C}$) làm quang hợp giảm mạnh hoặc ngừng hẳn. Cây sống ở vùng nhiệt đới và vùng ôn đới có giới hạn nhiệt độ khác nhau.',
        },
        {
          type: 'p',
          text: 'Các yếu tố tác động cùng lúc: dù ánh sáng rất mạnh, nếu thiếu nước hay trời quá rét thì cây vẫn quang hợp kém. Ở phần khám phá bên dưới, em hãy thay đổi từng yếu tố và quan sát tốc độ quang hợp cùng đồ thị thay đổi theo.',
        },
      ],
    },
    {
      heading: 'Ứng dụng trong trồng trọt và ý nghĩa của cây xanh',
      blocks: [
        {
          type: 'table',
          caption: 'Một số biện pháp kĩ thuật dựa trên các yếu tố ảnh hưởng đến quang hợp',
          head: ['Yếu tố', 'Biện pháp', 'Tác dụng'],
          rows: [
            [
              'Ánh sáng',
              'Trồng cây với mật độ hợp lí; trồng xen cây ưa bóng dưới tán cây ưa sáng; chiếu sáng bằng đèn trong nhà kính',
              'Các cây không che khuất nhau, tận dụng được ánh sáng',
            ],
            [
              'Nước',
              'Tưới tiêu hợp lí, đúng lúc, đủ lượng theo nhu cầu từng loại cây',
              'Cây đủ nước, khí khổng mở, quang hợp tốt',
            ],
            [
              'Khí carbon dioxide',
              'Làm thoáng đất, xới đất, bón phân hữu cơ (khi phân giải thải carbon dioxide); bổ sung carbon dioxide trong nhà kính',
              'Tăng lượng carbon dioxide cung cấp cho lá',
            ],
            [
              'Nhiệt độ',
              'Trồng cây đúng thời vụ; che nắng cho cây con vào mùa hè, ủ ấm gốc cây vào mùa đông',
              'Cây quang hợp ở nhiệt độ thuận lợi, tránh nắng nóng, giá rét',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vì sao cần trồng và bảo vệ cây xanh?',
          text: 'Cây xanh quang hợp lấy khí carbon dioxide và thải khí oxygen, giúp điều hoà không khí; tán lá còn cản bụi, giảm nhiệt độ, giảm tiếng ồn. Ở thành phố, khu công nghiệp, nơi đông dân có nhiều khí carbon dioxide, khói bụi và khí thải, càng cần trồng nhiều cây xanh. Mỗi học sinh có thể góp phần: trồng cây, chăm sóc cây, không bẻ cành, ngắt lá, tuyên truyền bảo vệ cây xanh.',
        },
      ],
    },
  ],
  explore: {
    title: 'Điều khiển quang hợp',
    instruction:
      'Chọn loại cây và lượng nước, kéo các thanh trượt ánh sáng, nồng độ CO₂ và nhiệt độ. Thanh màu xanh cho biết tốc độ quang hợp so với mức tối đa; đồ thị cho thấy tốc độ thay đổi theo yếu tố em chọn, các yếu tố khác giữ nguyên. Dòng nhận xét cho biết yếu tố nào đang kìm hãm quang hợp nhiều nhất.',
  },
  examples: [
    {
      problem:
        'Vì sao trong nhà kính trồng rau, người ta có thể thắp đèn vào ban đêm hoặc ngày âm u, và bổ sung thêm khí carbon dioxide?',
      steps: [
        'Quang hợp cần năng lượng ánh sáng; ban đêm hoặc ngày âm u, ánh sáng yếu nên cây quang hợp kém.',
        'Thắp đèn cung cấp thêm ánh sáng nhân tạo, giúp cây quang hợp được lâu hơn, mạnh hơn.',
        'Khí carbon dioxide là nguyên liệu của quang hợp, trong không khí chỉ khoảng $0{,}04\\%$. Tăng nồng độ carbon dioxide (trong giới hạn, dưới mức gây ngộ độc khoảng $0{,}2\\%$) làm quang hợp tăng.',
        'Quang hợp mạnh thì cây tổng hợp được nhiều chất hữu cơ, lớn nhanh và cho năng suất cao.',
      ],
      answer:
        'Để tăng ánh sáng và nguyên liệu carbon dioxide cho quang hợp (trong giới hạn cho phép), cây tạo nhiều chất hữu cơ hơn và cho năng suất cao hơn.',
    },
    {
      problem:
        'Vì sao vào những ngày nắng nóng gay gắt, người ta che nắng cho cây con; còn vào những ngày rét đậm, người ta ủ ấm gốc cây?',
      steps: [
        'Hầu hết các loài cây quang hợp thuận lợi ở khoảng $25\\ ^\\circ\\text{C}$ đến $35\\ ^\\circ\\text{C}$.',
        'Ngày nắng nóng, nhiệt độ có thể vượt $40\\ ^\\circ\\text{C}$: quang hợp giảm mạnh hoặc ngừng, cây con dễ héo, cháy lá. Che nắng giúp hạ nhiệt độ và giảm mất nước.',
        'Ngày rét đậm, nhiệt độ có thể dưới $10\\ ^\\circ\\text{C}$: quang hợp cũng giảm mạnh hoặc ngừng. Ủ ấm gốc giúp cây giữ nhiệt.',
      ],
      answer:
        'Để giữ nhiệt độ quanh cây ở mức thuận lợi cho quang hợp, tránh nhiệt độ quá cao hoặc quá thấp làm quang hợp giảm hoặc ngừng.',
    },
  ],
  practice: [
    {
      type: 'multi',
      prompt: 'Chọn tất cả các yếu tố bên ngoài chủ yếu ảnh hưởng đến quang hợp.',
      options: ['Ánh sáng', 'Nước', 'Khí carbon dioxide', 'Nhiệt độ', 'Tiếng ồn'],
      answers: [0, 1, 2, 3],
      hints: ['Nghĩ tới nguyên liệu, điều kiện của quang hợp và môi trường quanh lá.'],
      solution:
        'Ánh sáng, nước, khí carbon dioxide và nhiệt độ là các yếu tố chủ yếu ảnh hưởng đến quang hợp. Tiếng ồn không ảnh hưởng trực tiếp đến quang hợp.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các cây ưa bóng.',
      options: ['Lá lốt', 'Lúa', 'Trầu không', 'Ngô', 'Vạn niên thanh', 'Hoa hướng dương'],
      answers: [0, 2, 4],
      hints: ['Cây ưa bóng thường sống dưới tán cây khác hoặc nơi râm mát.'],
      solution:
        'Lá lốt, trầu không, vạn niên thanh là cây ưa bóng. Lúa, ngô, hoa hướng dương là cây ưa sáng, cần trồng nơi quang đãng.',
    },
    {
      type: 'number',
      prompt:
        'Theo sách, hầu hết các loài cây quang hợp thuận lợi nhất ở khoảng $25\\ ^\\circ\\text{C}$ đến $35\\ ^\\circ\\text{C}$. Trên khoảng bao nhiêu độ C thì quang hợp giảm mạnh hoặc ngừng hẳn?',
      answer: 40,
      unit: '°C',
      hints: ['Mức nhiệt này cao hơn khoảng thuận lợi khoảng $5\\ ^\\circ\\text{C}$.'],
      solution:
        'Nhiệt độ trên khoảng $40\\ ^\\circ\\text{C}$ (hoặc dưới khoảng $10\\ ^\\circ\\text{C}$) làm quang hợp giảm mạnh hoặc ngừng hẳn.',
    },
    {
      type: 'choice',
      prompt: 'Khi cây bị thiếu nước, vì sao quang hợp giảm?',
      options: [
        'Vì lá nhận được ít ánh sáng hơn',
        'Vì khí khổng đóng lại, khí carbon dioxide khó vào lá; nước cũng là nguyên liệu của quang hợp',
        'Vì lá thải ra quá nhiều oxygen',
        'Vì diệp lục bị nước rửa trôi',
      ],
      answer: 1,
      hints: ['Cây giữ nước bằng cách nào? Việc đó ảnh hưởng đến khí nào đi vào lá?'],
      solution:
        'Thiếu nước, khí khổng đóng để hạn chế thoát hơi nước, nên khí carbon dioxide khó vào lá; đồng thời nước là nguyên liệu của quang hợp. Vì vậy quang hợp giảm.',
    },
    {
      type: 'choice',
      prompt: 'Phát biểu nào đúng về ảnh hưởng của khí carbon dioxide đến quang hợp?',
      options: [
        'Nồng độ carbon dioxide càng cao thì quang hợp càng mạnh, không có giới hạn',
        'Trong giới hạn nhất định, nồng độ carbon dioxide tăng thì quang hợp tăng; quá cao (khoảng 0,2%) cây có thể bị ngộ độc và chết',
        'Carbon dioxide không ảnh hưởng đến quang hợp',
        'Nồng độ carbon dioxide tăng thì quang hợp luôn giảm',
      ],
      answer: 1,
      hints: ['Hầu hết các yếu tố chỉ có lợi trong một giới hạn.'],
      solution:
        'Carbon dioxide là nguyên liệu nên trong giới hạn, nồng độ tăng làm quang hợp tăng. Nồng độ quá cao (khoảng $0{,}2\\%$) gây ngộ độc, cây có thể chết.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi biện pháp trồng trọt với yếu tố ảnh hưởng đến quang hợp mà nó điều chỉnh.',
      left: [
        'Trồng cây với mật độ hợp lí',
        'Tưới tiêu hợp lí',
        'Trồng cây đúng thời vụ',
        'Xới đất, bón phân hữu cơ, bổ sung khí trong nhà kính',
      ],
      right: ['Nhiệt độ', 'Ánh sáng', 'Khí carbon dioxide', 'Nước'],
      pairs: [
        [0, 1],
        [1, 3],
        [2, 0],
        [3, 2],
      ],
      hints: ['Cây trồng quá dày thì che khuất nhau. Mỗi thời vụ trong năm có nhiệt độ khác nhau.'],
      solution:
        'Mật độ hợp lí: ánh sáng. Tưới tiêu: nước. Đúng thời vụ: nhiệt độ (và ánh sáng) phù hợp. Xới đất, bón phân hữu cơ, bổ sung khí trong nhà kính: tăng carbon dioxide.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao người ta có thể trồng xen cây lá lốt dưới tán các cây ăn quả trong vườn?',
      options: [
        'Vì lá lốt là cây ưa bóng, quang hợp tốt trong ánh sáng yếu dưới tán cây',
        'Vì lá lốt không cần ánh sáng để quang hợp',
        'Vì lá lốt là cây ưa sáng',
        'Vì cây ăn quả cung cấp chất hữu cơ cho lá lốt',
      ],
      answer: 0,
      hints: ['Dưới tán cây ăn quả, ánh sáng mạnh hay yếu?'],
      solution:
        'Lá lốt là cây ưa bóng, cần ít ánh sáng, nên trồng dưới tán cây ăn quả (cây ưa sáng) vẫn quang hợp tốt; cách trồng xen này tận dụng được ánh sáng và đất.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao cần trồng nhiều cây xanh ở thành phố và khu công nghiệp?',
      options: [
        'Vì cây xanh thải khí carbon dioxide làm không khí trong lành',
        'Vì cây xanh quang hợp lấy khí carbon dioxide, thải oxygen, đồng thời cản bụi và làm mát không khí',
        'Vì cây xanh làm tăng khói bụi',
        'Vì cây xanh chỉ có tác dụng làm đẹp',
      ],
      answer: 1,
      hints: ['Ở nơi đông dân, khí nào trong không khí nhiều hơn bình thường?'],
      solution:
        'Nơi đông dân và khu công nghiệp có nhiều khí carbon dioxide, khói bụi. Cây xanh quang hợp lấy carbon dioxide, thải oxygen, tán lá cản bụi và làm mát, giúp không khí trong lành.',
    },
  ],
  takeaways: [
    'Ánh sáng, nước, khí carbon dioxide và nhiệt độ là các yếu tố chủ yếu ảnh hưởng đến quang hợp; mỗi yếu tố chỉ có lợi trong một giới hạn.',
    'Trong giới hạn, ánh sáng mạnh hơn thì quang hợp tăng; cây ưa sáng cần nhiều ánh sáng, cây ưa bóng cần ít ánh sáng.',
    'Thiếu nước, khí khổng đóng, quang hợp giảm. Nồng độ carbon dioxide tăng thì quang hợp tăng, nhưng quá cao (khoảng $0{,}2\\%$) gây ngộ độc.',
    'Hầu hết cây quang hợp tốt ở $25\\ ^\\circ\\text{C}$ đến $35\\ ^\\circ\\text{C}$; trên $40\\ ^\\circ\\text{C}$ hoặc dưới $10\\ ^\\circ\\text{C}$ quang hợp giảm mạnh hoặc ngừng.',
    'Biện pháp kĩ thuật: trồng đúng mật độ, đúng thời vụ, tưới tiêu hợp lí, bón phân, chiếu sáng nhân tạo. Cần trồng và bảo vệ cây xanh để điều hoà không khí.',
  ],
};
