/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Vật sống thực hiện được các quá trình sống cơ bản như cảm ứng và vận động, sinh trưởng, sinh sản, hô hấp, bài tiết, dinh dưỡng; mỗi vật sống là một cơ thể, có thể là cơ thể đơn bào (một tế bào) hoặc cơ thể đa bào (nhiều tế bào).',
  intro:
    'Một chú robot hút bụi tự chạy khắp nhà, tránh được chân bàn và tự về chỗ sạc pin. Một hạt đậu nằm im trong đất, vài ngày sau nảy mầm thành cây con. Vậy robot hay cây đậu mới là vật sống? Để trả lời, ta không nhìn xem vật có cử động hay không, mà xem nó có thực hiện được các quá trình sống hay không.',
  objectives: [
    'Phân biệt được vật sống và vật không sống dựa vào các quá trình sống cơ bản.',
    'Nêu được khái niệm cơ thể; nhận biết được cơ thể đơn bào và cơ thể đa bào, lấy được ví dụ.',
    'Giải thích được vì sao các sinh vật có kích thước khác nhau.',
  ],
  sections: [
    {
      heading: 'Vật sống và vật không sống',
      blocks: [
        {
          type: 'p',
          text: 'Xung quanh em có rất nhiều vật: con mèo, cây bàng, hòn đá, chiếc xe đạp... Một số vật đang sống, một số vật không sống. Điều làm nên sự khác nhau là các quá trình sống.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Các quá trình sống cơ bản',
          text: 'Vật sống (sinh vật) thực hiện được các quá trình sống cơ bản: cảm ứng và vận động, sinh trưởng, sinh sản, hô hấp, bài tiết, dinh dưỡng. Vật không sống không thực hiện được các quá trình đó.',
        },
        {
          type: 'table',
          caption: 'Ý nghĩa của các quá trình sống cơ bản',
          head: ['Quá trình', 'Ý nghĩa', 'Ví dụ'],
          rows: [
            [
              'Cảm ứng và vận động',
              'Tiếp nhận và phản ứng lại các kích thích của môi trường',
              'Cây trồng bên cửa sổ vươn ngọn về phía ánh sáng; tay chạm vào vật nóng thì rụt lại',
            ],
            [
              'Sinh trưởng',
              'Cơ thể lớn lên về kích thước và khối lượng',
              'Gà con lớn thành gà trưởng thành',
            ],
            ['Sinh sản', 'Tạo ra cơ thể mới', 'Mèo đẻ con; cây đậu tạo quả và hạt'],
            [
              'Hô hấp',
              'Lấy khí oxygen để phân giải chất dinh dưỡng, tạo năng lượng cho cơ thể',
              'Người hít vào khí oxygen, thở ra khí carbon dioxide',
            ],
            ['Bài tiết', 'Loại bỏ các chất thải ra khỏi cơ thể', 'Người thải mồ hôi, nước tiểu'],
            [
              'Dinh dưỡng',
              'Lấy thức ăn, chất dinh dưỡng để cơ thể sống và lớn lên',
              'Bò ăn cỏ; cây hút nước và muối khoáng, quang hợp tạo chất hữu cơ',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Dễ nhầm',
          text: 'Chỉ một dấu hiệu "giống sống" là chưa đủ. Ô tô chạy được và thải khí, robot tự tránh vật cản, tinh thể muối to dần trong nước muối, đám mây lớn dần: tất cả đều không dinh dưỡng, không sinh trưởng từ bên trong và không sinh sản, nên đều là vật không sống. Một vật được làm từ sinh vật, như cái bàn gỗ hay quyển vở giấy, cũng là vật không sống.',
        },
        {
          type: 'p',
          text: 'Hãy tự kiểm tra: chọn một vật rồi bấm vào từng quá trình sống để xem vật đó có thực hiện được không.',
        },
        { type: 'widget', name: 'dau-hieu' },
      ],
    },
    {
      heading: 'Cơ thể sinh vật',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Cơ thể',
          text: 'Mỗi vật sống được gọi là một cơ thể (một cá thể sinh vật). Cơ thể thực hiện được đầy đủ các quá trình sống cơ bản. Mọi cơ thể đều được cấu tạo từ tế bào.',
        },
        {
          type: 'p',
          text: 'Một con chó, một cây hoa hướng dương, một con vi khuẩn đều là những cơ thể. Dù khác nhau rất nhiều về hình dạng và kích thước, chúng đều được cấu tạo từ tế bào và đều thực hiện được các quá trình sống.',
        },
      ],
    },
    {
      heading: 'Cơ thể đơn bào và cơ thể đa bào',
      blocks: [
        {
          type: 'p',
          text: 'Dựa vào số lượng tế bào cấu tạo nên cơ thể, người ta chia sinh vật thành hai nhóm.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Cơ thể đơn bào',
          text: 'Cơ thể đơn bào là cơ thể được cấu tạo từ một tế bào. Tế bào đó thực hiện mọi quá trình sống của cơ thể. Ví dụ: vi khuẩn E. coli, trùng roi, trùng giày, trùng biến hình, nấm men, tảo lục đơn bào.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Cơ thể đa bào',
          text: 'Cơ thể đa bào là cơ thể được cấu tạo từ nhiều tế bào. Các tế bào có hình dạng, kích thước khác nhau và đảm nhận những chức năng khác nhau. Ví dụ: cây ổi, cây rêu, cây hoa hướng dương, cây nấm rơm, con giun đất, con ếch, con người.',
        },
        {
          type: 'table',
          caption: 'So sánh cơ thể đơn bào và cơ thể đa bào',
          head: ['Đặc điểm', 'Cơ thể đơn bào', 'Cơ thể đa bào'],
          rows: [
            ['Số lượng tế bào', 'Một tế bào', 'Nhiều tế bào'],
            [
              'Chức năng',
              'Một tế bào thực hiện mọi quá trình sống',
              'Mỗi loại tế bào đảm nhận một chức năng riêng, phối hợp với nhau',
            ],
            [
              'Kích thước',
              'Thường rất nhỏ, phải quan sát bằng kính hiển vi',
              'Thường lớn, đa số thấy được bằng mắt thường',
            ],
            [
              'Ví dụ',
              'Vi khuẩn, trùng roi, trùng giày, nấm men',
              'Cây xanh, nấm rơm, giun đất, con người',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Vì sao sinh vật có kích thước khác nhau?',
          text: 'Kích thước tế bào của các loài không chênh lệch nhau nhiều. Sinh vật lớn hay nhỏ chủ yếu là do số lượng tế bào cấu tạo nên cơ thể nhiều hay ít: cơ thể con voi có nhiều tế bào hơn cơ thể con chuột rất nhiều.',
        },
        {
          type: 'p',
          text: 'Cơ thể đơn bào và cơ thể đa bào giống nhau ở chỗ đều là vật sống, đều được cấu tạo từ tế bào và tế bào nào cũng có màng tế bào, tế bào chất và vật chất di truyền (nhân hoặc vùng nhân). Ở phần khám phá, em hãy phân loại các vật theo hai vòng: sống hay không sống, rồi đơn bào hay đa bào.',
        },
      ],
    },
  ],
  explore: {
    title: 'Phân loại sinh vật',
    instruction:
      'Chọn vòng phân loại. Bấm (hoặc kéo) một thẻ, rồi bấm vào ô phù hợp để đặt thẻ. Mỗi lần đặt, em được biết ngay đúng hay sai và vì sao; bấm vào thẻ đã đặt để lấy lại.',
  },
  examples: [
    {
      problem:
        'Bạn An cho rằng ngọn lửa là vật sống vì lửa "ăn" củi, cần không khí và có thể lan rộng ra. Em hãy nhận xét ý kiến của An.',
      steps: [
        'So sánh với các quá trình sống: lửa cần oxygen và nhiên liệu, trông giống hô hấp, dinh dưỡng; lửa lan rộng ra, trông giống sinh trưởng.',
        'Nhưng lửa không được cấu tạo từ tế bào, không có cảm ứng, không tự lớn lên từ bên trong và không sinh sản tạo ra cơ thể mới; nó chỉ là sự cháy của nhiên liệu.',
        'Vật sống phải thực hiện được các quá trình sống của một cơ thể, không chỉ có vài dấu hiệu trông giống.',
      ],
      answer: 'Ý kiến của An chưa đúng: ngọn lửa là vật không sống.',
    },
    {
      problem:
        'Cho các sinh vật: trùng giày, cây rêu, nấm men, con ếch, vi khuẩn E. coli, cây nấm rơm. Hãy xếp chúng thành hai nhóm cơ thể đơn bào và cơ thể đa bào.',
      steps: [
        'Cơ thể đơn bào chỉ gồm một tế bào: trùng giày, nấm men, vi khuẩn E. coli.',
        'Cơ thể đa bào gồm nhiều tế bào: cây rêu, con ếch, cây nấm rơm.',
        'Lưu ý: nấm men và nấm rơm đều là nấm nhưng nấm men là đơn bào, nấm rơm là đa bào; cây rêu nhỏ nhưng vẫn là đa bào.',
      ],
      answer:
        'Đơn bào: trùng giày, nấm men, vi khuẩn E. coli. Đa bào: cây rêu, con ếch, cây nấm rơm.',
    },
    {
      problem: 'Vì sao con voi có kích thước lớn hơn con chuột rất nhiều?',
      steps: [
        'Tế bào của voi và tế bào của chuột có kích thước gần như nhau.',
        'Cơ thể voi được cấu tạo từ số lượng tế bào lớn hơn rất nhiều so với cơ thể chuột.',
      ],
      answer:
        'Vì cơ thể voi có nhiều tế bào hơn cơ thể chuột, không phải vì tế bào của voi to hơn.',
    },
  ],
  practice: [
    {
      type: 'multi',
      prompt: 'Chọn tất cả các vật sống.',
      options: [
        'Con giun đất',
        'Chiếc xe máy',
        'Cây lúa',
        'Hòn sỏi',
        'Vi khuẩn E. coli',
        'Cái ghế gỗ',
      ],
      answers: [0, 2, 4],
      hints: [
        'Vật sống thực hiện được dinh dưỡng, sinh trưởng, sinh sản...',
        'Cái ghế làm từ gỗ của cây, nhưng bản thân cái ghế có còn lớn lên hay sinh sản không?',
      ],
      solution:
        'Giun đất, cây lúa và vi khuẩn E. coli đều dinh dưỡng, hô hấp, lớn lên và sinh sản nên là vật sống. Xe máy, hòn sỏi và cái ghế gỗ không thực hiện được các quá trình sống nên là vật không sống.',
    },
    {
      type: 'choice',
      prompt: 'Quá trình cơ thể lớn lên về kích thước và khối lượng được gọi là',
      options: ['sinh sản', 'sinh trưởng', 'cảm ứng', 'bài tiết'],
      answer: 1,
      hints: ['Gà con lớn thành gà trưởng thành là quá trình gì?'],
      solution:
        'Sinh trưởng là quá trình cơ thể lớn lên về kích thước và khối lượng. Sinh sản là tạo ra cơ thể mới; cảm ứng là phản ứng với kích thích; bài tiết là loại bỏ chất thải.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi hiện tượng với quá trình sống tương ứng.',
      left: [
        'Cây cà chua trồng bên cửa sổ vươn ngọn về phía ánh sáng',
        'Mèo mẹ đẻ ra ba mèo con',
        'Người thải mồ hôi khi trời nóng',
        'Con bò ăn cỏ',
        'Cá lấy oxygen hoà tan trong nước qua mang',
      ],
      right: ['Sinh sản', 'Hô hấp', 'Cảm ứng và vận động', 'Dinh dưỡng', 'Bài tiết', 'Sinh trưởng'],
      pairs: [
        [0, 2],
        [1, 0],
        [2, 4],
        [3, 3],
        [4, 1],
      ],
      hints: [
        'Có một quá trình thừa.',
        'Phản ứng với ánh sáng là cảm ứng; loại bỏ chất thải là bài tiết.',
      ],
      solution:
        'Vươn về phía ánh sáng: cảm ứng và vận động. Đẻ con: sinh sản. Thải mồ hôi: bài tiết. Ăn cỏ: dinh dưỡng. Lấy oxygen qua mang: hô hấp. Sinh trưởng là quá trình thừa.',
    },
    {
      type: 'choice',
      prompt: 'Cơ thể đơn bào là cơ thể được cấu tạo từ',
      options: ['một tế bào', 'hai tế bào', 'hàng trăm tế bào', 'rất nhiều tế bào'],
      answer: 0,
      hints: ['"Đơn" nghĩa là một.'],
      solution: 'Cơ thể đơn bào chỉ gồm một tế bào, tế bào đó thực hiện mọi quá trình sống.',
    },
    {
      type: 'choice',
      prompt: 'Nhóm nào sau đây gồm toàn cơ thể đa bào?',
      options: [
        'Trùng roi, cây ổi, bắp cải',
        'Vi khuẩn, giun đất, con ếch',
        'Cây rêu, con ếch, chim sâu',
        'Nấm men, cây rêu, con ếch',
      ],
      answer: 2,
      hints: ['Loại các nhóm có chứa một sinh vật đơn bào: trùng roi, vi khuẩn, nấm men.'],
      solution:
        'Cây rêu, con ếch và chim sâu đều gồm nhiều tế bào. Các nhóm còn lại lần lượt có trùng roi, vi khuẩn, nấm men là cơ thể đơn bào.',
    },
    {
      type: 'choice',
      prompt: 'Các sinh vật có kích thước khác nhau chủ yếu là do',
      options: [
        'kích thước tế bào của chúng khác nhau rất nhiều',
        'số lượng tế bào cấu tạo nên cơ thể khác nhau',
        'chúng sống ở môi trường khác nhau',
        'chúng ăn những loại thức ăn khác nhau',
      ],
      answer: 1,
      hints: ['Tế bào của voi có to hơn tế bào của chuột nhiều không?'],
      solution:
        'Tế bào của các loài có kích thước không chênh lệch nhiều; sinh vật lớn hay nhỏ chủ yếu do có nhiều hay ít tế bào.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các đặc điểm chung của cơ thể đơn bào và cơ thể đa bào.',
      options: [
        'Đều là vật sống',
        'Đều được cấu tạo từ tế bào',
        'Đều có nhiều loại tế bào khác nhau',
        'Tế bào đều có màng tế bào, tế bào chất và vật chất di truyền',
        'Đều nhìn thấy được bằng mắt thường',
      ],
      answers: [0, 1, 3],
      hints: [
        'Cơ thể đơn bào chỉ có một tế bào, vậy có "nhiều loại tế bào" được không?',
        'Vi khuẩn có nhìn thấy bằng mắt thường không?',
      ],
      solution:
        'Cả hai đều là vật sống, đều cấu tạo từ tế bào và tế bào nào cũng có màng tế bào, tế bào chất, vật chất di truyền. Chỉ cơ thể đa bào mới có nhiều loại tế bào; phần lớn cơ thể đơn bào phải quan sát bằng kính hiển vi.',
    },
    {
      type: 'text',
      prompt:
        'Robot hút bụi tự di chuyển và tránh vật cản. Robot là vật sống hay vật không sống? (Trả lời: "vật sống" hoặc "vật không sống")',
      accept: ['vật không sống', 'không sống', 'vat khong song', 'vật không sống.'],
      hints: [
        'Robot có dinh dưỡng, lớn lên, sinh sản không?',
        'Robot chạy bằng pin và cảm biến do con người chế tạo.',
      ],
      solution:
        'Robot là vật không sống: nó không dinh dưỡng, không hô hấp, không lớn lên và không sinh sản; chuyển động của robot là nhờ pin và động cơ.',
    },
    {
      type: 'choice',
      prompt: 'Trong cơ thể đa bào, các tế bào',
      options: [
        'đều giống hệt nhau về hình dạng và chức năng',
        'mỗi tế bào tự thực hiện mọi chức năng và không cần nhau',
        'có nhiều loại, mỗi loại đảm nhận một chức năng và phối hợp với nhau',
        'chỉ có một loại là tế bào thần kinh',
      ],
      answer: 2,
      hints: ['Nhớ lại hồng cầu, tế bào thần kinh, tế bào cơ ở người.'],
      solution:
        'Cơ thể đa bào có nhiều loại tế bào với hình dạng khác nhau, mỗi loại đảm nhận một chức năng (hồng cầu vận chuyển khí, tế bào cơ co rút...) và cùng phối hợp để cơ thể sống.',
    },
  ],
  takeaways: [
    'Vật sống thực hiện được các quá trình sống cơ bản: cảm ứng và vận động, sinh trưởng, sinh sản, hô hấp, bài tiết, dinh dưỡng; vật không sống thì không.',
    'Mỗi vật sống là một cơ thể; mọi cơ thể đều được cấu tạo từ tế bào.',
    'Cơ thể đơn bào gồm một tế bào (vi khuẩn, trùng roi, trùng giày, nấm men); cơ thể đa bào gồm nhiều tế bào (cây xanh, nấm rơm, động vật, con người).',
    'Sinh vật lớn hay nhỏ chủ yếu do số lượng tế bào nhiều hay ít.',
  ],
};
