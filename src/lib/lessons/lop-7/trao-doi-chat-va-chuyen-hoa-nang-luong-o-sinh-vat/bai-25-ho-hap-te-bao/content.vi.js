/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Khái niệm hô hấp tế bào, phương trình chữ, nơi diễn ra là ti thể, vai trò giải phóng năng lượng, và mối quan hệ giữa tổng hợp (quang hợp) và phân giải (hô hấp tế bào) chất hữu cơ.',
  intro:
    'Cơm em ăn, sữa em uống chứa năng lượng; nhưng cơ bắp không thể dùng trực tiếp năng lượng trong hạt gạo. Năng lượng ấy phải được giải phóng ở bên trong từng tế bào, nhờ một quá trình diễn ra liên tục cả ngày lẫn đêm ở mọi sinh vật: hô hấp tế bào. Bài học này cho em biết tế bào "đốt" chất hữu cơ thế nào, ở đâu, và vì sao nó gắn bó chặt chẽ với quang hợp.',
  objectives: [
    'Phát biểu được khái niệm hô hấp tế bào; nêu được nơi diễn ra hô hấp tế bào là ti thể.',
    'Viết được phương trình hô hấp tế bào dạng chữ; nêu được nguyên liệu, sản phẩm và vai trò của hô hấp tế bào.',
    'Nêu được mối quan hệ giữa tổng hợp và phân giải chất hữu cơ ở tế bào; so sánh được quang hợp với hô hấp tế bào.',
  ],
  sections: [
    {
      heading: 'Khái niệm hô hấp tế bào',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Hô hấp tế bào',
          text: 'Hô hấp tế bào là quá trình tế bào phân giải chất hữu cơ (chủ yếu là glucose) với sự tham gia của khí oxygen, tạo thành khí carbon dioxide và nước, đồng thời giải phóng năng lượng.',
        },
        {
          type: 'table',
          caption: 'Phương trình chữ của hô hấp tế bào',
          head: ['Nguyên liệu', 'Chiều phản ứng', 'Sản phẩm'],
          rows: [['Glucose + Oxygen', '⟶', 'Carbon dioxide + Nước + Năng lượng (ATP + nhiệt)']],
        },
        {
          type: 'list',
          items: [
            'Nơi diễn ra: ti thể của tế bào. Hô hấp tế bào diễn ra ở mọi tế bào sống, ở cả thực vật và động vật, cả ngày lẫn đêm.',
            'Nguyên liệu: glucose (do quang hợp tạo ra ở cây, hay do thức ăn cung cấp ở động vật) và khí oxygen (lấy từ môi trường).',
            'Sản phẩm: khí carbon dioxide và nước được thải ra; năng lượng được giải phóng.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Năng lượng ATP',
          text: 'Một phần năng lượng giải phóng được tích luỹ trong ATP, một dạng năng lượng tế bào dùng được ngay cho các hoạt động sống như co cơ, tổng hợp chất, vận chuyển chất, sinh trưởng. Phần còn lại toả ra dưới dạng nhiệt, giúp giữ ấm cơ thể.',
        },
        {
          type: 'p',
          text: 'Ở phần khám phá bên dưới, em hãy cho cơ thể nghỉ ngơi, đi bộ hay chạy và xem ti thể dùng bao nhiêu glucose và oxygen, thải ra bao nhiêu carbon dioxide. Thử tắt nguồn oxygen để thấy điều gì xảy ra.',
        },
      ],
    },
    {
      heading: 'Mối quan hệ giữa tổng hợp và phân giải chất hữu cơ',
      blocks: [
        {
          type: 'p',
          text: 'Trong tế bào luôn diễn ra hai quá trình trái ngược nhau. Tổng hợp chất hữu cơ (như quang hợp) tích luỹ năng lượng; phân giải chất hữu cơ (như hô hấp tế bào) giải phóng năng lượng.',
        },
        {
          type: 'table',
          caption: 'So sánh quang hợp và hô hấp tế bào',
          head: ['Tiêu chí', 'Quang hợp', 'Hô hấp tế bào'],
          rows: [
            ['Nơi diễn ra', 'Lục lạp (ở tế bào có diệp lục)', 'Ti thể (ở mọi tế bào sống)'],
            ['Nguyên liệu', 'Nước, khí carbon dioxide', 'Glucose, khí oxygen'],
            ['Sản phẩm', 'Glucose, khí oxygen', 'Khí carbon dioxide, nước, năng lượng'],
            ['Điều kiện', 'Cần ánh sáng, diệp lục', 'Diễn ra cả khi sáng và khi tối'],
            ['Năng lượng', 'Tích luỹ (quang năng thành hoá năng)', 'Giải phóng (ATP và nhiệt)'],
            ['Chất hữu cơ', 'Được tổng hợp', 'Bị phân giải'],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Trái ngược nhưng phụ thuộc lẫn nhau',
          text: 'Sản phẩm của quang hợp (glucose, oxygen) là nguyên liệu của hô hấp tế bào; sản phẩm của hô hấp tế bào (carbon dioxide, nước) là nguyên liệu của quang hợp. Quang hợp tạo ra chất hữu cơ để hô hấp phân giải; hô hấp giải phóng năng lượng cho các hoạt động sống của tế bào, trong đó có việc tổng hợp chất. Hai quá trình trái ngược nhau nhưng phụ thuộc lẫn nhau.',
        },
        {
          type: 'p',
          text: 'Xếp từng thẻ đặc điểm vào quá trình phù hợp để tự kiểm tra:',
        },
        { type: 'widget', name: 'so-sanh' },
      ],
    },
  ],
  explore: {
    title: 'Bên trong ti thể',
    instruction:
      'Chọn hoạt động và có hoặc không có oxygen, rồi bấm "Hoạt động 1 phút". Quan sát glucose và oxygen đi vào ti thể; carbon dioxide, nước, ATP và nhiệt đi ra. Hết glucose thì bấm "Ăn một bữa".',
  },
  examples: [
    {
      problem: 'Vì sao khi chạy, em thở nhanh hơn và thấy nóng hơn khi ngồi nghỉ?',
      steps: [
        'Khi chạy, cơ cần nhiều năng lượng hơn, nên tế bào cơ phải tăng cường hô hấp tế bào, phân giải nhiều glucose hơn.',
        'Hô hấp tế bào cần oxygen và thải carbon dioxide: phân giải nhiều glucose thì cần nhiều oxygen và thải nhiều carbon dioxide, nên em phải thở nhanh, sâu hơn.',
        'Một phần năng lượng giải phóng toả ra dưới dạng nhiệt: hô hấp mạnh thì toả nhiều nhiệt, nên cơ thể nóng lên.',
      ],
      answer:
        'Chạy làm tế bào cơ hô hấp mạnh hơn: cần nhiều oxygen, thải nhiều carbon dioxide (nên thở nhanh) và toả nhiều nhiệt (nên thấy nóng).',
    },
    {
      problem:
        'Vì sao nói quang hợp và hô hấp tế bào là hai quá trình trái ngược nhau nhưng phụ thuộc lẫn nhau?',
      steps: [
        'Trái ngược: quang hợp tổng hợp chất hữu cơ, lấy carbon dioxide, thải oxygen, tích luỹ năng lượng; hô hấp tế bào phân giải chất hữu cơ, lấy oxygen, thải carbon dioxide, giải phóng năng lượng.',
        'Phụ thuộc lẫn nhau: glucose và oxygen do quang hợp tạo ra là nguyên liệu của hô hấp tế bào.',
        'Carbon dioxide và nước do hô hấp thải ra là nguyên liệu của quang hợp; năng lượng hô hấp giải phóng được dùng cho các hoạt động sống của tế bào.',
      ],
      answer:
        'Hai quá trình có nguyên liệu, sản phẩm và chiều biến đổi năng lượng ngược nhau, nhưng sản phẩm của quá trình này là nguyên liệu của quá trình kia.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Hô hấp tế bào diễn ra ở bào quan nào?',
      options: ['Lục lạp', 'Ti thể', 'Nhân tế bào', 'Không bào'],
      answer: 1,
      hints: ['Bào quan này thường được ví như "nhà máy năng lượng" của tế bào.'],
      solution: 'Hô hấp tế bào diễn ra ở ti thể. Lục lạp là nơi diễn ra quang hợp.',
    },
    {
      type: 'choice',
      prompt: 'Phương trình chữ nào viết đúng quá trình hô hấp tế bào?',
      options: [
        'Glucose + Oxygen ⟶ Carbon dioxide + Nước + Năng lượng (ATP + nhiệt)',
        'Nước + Carbon dioxide ⟶ Glucose + Oxygen',
        'Glucose + Carbon dioxide ⟶ Oxygen + Nước + Năng lượng',
        'Oxygen + Nước ⟶ Glucose + Carbon dioxide',
      ],
      answer: 0,
      hints: ['Hô hấp tế bào phân giải glucose và cần oxygen.'],
      solution:
        'Hô hấp tế bào: Glucose + Oxygen ⟶ Carbon dioxide + Nước + Năng lượng (ATP + nhiệt). Phương án thứ hai là quang hợp.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các sản phẩm của hô hấp tế bào.',
      options: ['Khí carbon dioxide', 'Glucose', 'Nước', 'Khí oxygen', 'Năng lượng'],
      answers: [0, 2, 4],
      hints: ['Glucose và oxygen bị dùng đi trong hô hấp tế bào.'],
      solution:
        'Sản phẩm của hô hấp tế bào là khí carbon dioxide, nước và năng lượng (ATP và nhiệt). Glucose và oxygen là nguyên liệu.',
    },
    {
      type: 'choice',
      prompt: 'Phát biểu nào đúng về hô hấp tế bào?',
      options: [
        'Chỉ diễn ra ở thực vật vào ban đêm',
        'Chỉ diễn ra ở động vật',
        'Diễn ra ở mọi tế bào sống, cả ngày lẫn đêm',
        'Chỉ diễn ra khi có ánh sáng',
      ],
      answer: 2,
      hints: ['Tế bào nào cũng cần năng lượng liên tục để sống.'],
      solution:
        'Mọi tế bào sống của thực vật và động vật đều cần năng lượng liên tục, nên hô hấp tế bào diễn ra ở mọi tế bào, cả ngày lẫn đêm, không cần ánh sáng.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi thành phần với vai trò của nó.',
      left: ['Lục lạp', 'Ti thể', 'Diệp lục', 'ATP'],
      right: [
        'Nơi diễn ra hô hấp tế bào',
        'Dạng năng lượng tế bào dùng được ngay cho các hoạt động sống',
        'Nơi diễn ra quang hợp',
        'Hấp thụ năng lượng ánh sáng',
      ],
      pairs: [
        [0, 2],
        [1, 0],
        [2, 3],
        [3, 1],
      ],
      hints: ['Diệp lục nằm trong lục lạp; ATP được tạo ra khi hô hấp tế bào.'],
      solution:
        'Lục lạp: nơi quang hợp. Ti thể: nơi hô hấp tế bào. Diệp lục: hấp thụ năng lượng ánh sáng. ATP: dạng năng lượng tế bào dùng được ngay, được tạo ra trong hô hấp tế bào.',
    },
    {
      type: 'text',
      prompt:
        'Một phần năng lượng giải phóng trong hô hấp tế bào được tích luỹ trong một chất mà tế bào dùng được ngay. Viết tên viết tắt của chất đó.',
      accept: ['ATP'],
      hints: ['Phương trình chữ ghi: Năng lượng (... + nhiệt).'],
      solution:
        'Đó là ATP. Năng lượng giải phóng một phần tích luỹ trong ATP, phần còn lại toả ra dưới dạng nhiệt.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao nói quang hợp và hô hấp tế bào phụ thuộc lẫn nhau?',
      options: [
        'Vì cả hai đều diễn ra ở ti thể',
        'Vì sản phẩm của quá trình này là nguyên liệu của quá trình kia',
        'Vì cả hai đều cần ánh sáng',
        'Vì cả hai đều tích luỹ năng lượng',
      ],
      answer: 1,
      hints: ['So sánh nguyên liệu của quá trình này với sản phẩm của quá trình kia.'],
      solution:
        'Glucose và oxygen (sản phẩm quang hợp) là nguyên liệu của hô hấp; carbon dioxide và nước (sản phẩm hô hấp) là nguyên liệu của quang hợp. Vì vậy hai quá trình phụ thuộc lẫn nhau.',
    },
    {
      type: 'choice',
      prompt:
        'Một người leo núi cao, nơi không khí loãng, thấy mệt nhanh hơn bình thường. Nguyên nhân chính là',
      options: [
        'thiếu glucose vì không khí loãng',
        'thiếu oxygen nên tế bào hô hấp kém, giải phóng ít năng lượng',
        'thừa carbon dioxide trong không khí',
        'tế bào ngừng quang hợp',
      ],
      answer: 1,
      hints: ['Không khí loãng thì mỗi hơi thở đưa vào ít chất khí nào?'],
      solution:
        'Không khí loãng chứa ít oxygen trong mỗi hơi thở. Thiếu oxygen, tế bào hô hấp kém, giải phóng ít năng lượng nên cơ thể nhanh mệt.',
    },
  ],
  takeaways: [
    'Hô hấp tế bào là quá trình tế bào phân giải chất hữu cơ (chủ yếu là glucose) với sự tham gia của oxygen, tạo thành carbon dioxide và nước, đồng thời giải phóng năng lượng.',
    'Glucose + Oxygen ⟶ Carbon dioxide + Nước + Năng lượng (ATP + nhiệt).',
    'Hô hấp tế bào diễn ra ở ti thể của mọi tế bào sống, cả ngày lẫn đêm; năng lượng giải phóng dùng cho các hoạt động sống và giữ ấm cơ thể.',
    'Quang hợp tổng hợp chất hữu cơ, tích luỹ năng lượng; hô hấp tế bào phân giải chất hữu cơ, giải phóng năng lượng. Hai quá trình trái ngược nhưng phụ thuộc lẫn nhau.',
  ],
};
