/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Sự hấp thụ nước và chất khoáng ở rễ qua lông hút, sự vận chuyển các chất trong mạch gỗ và mạch rây, thoát hơi nước ở lá qua khí khổng, các yếu tố ảnh hưởng và vận dụng trong tưới nước, bón phân.',
  intro:
    'Một cây xoài cao vài mét, một cây dừa cao hơn chục mét: nước từ đất làm sao leo lên được tận ngọn mà cây không có tim để bơm? Còn đường do lá tạo ra làm sao đến được quả, củ nằm ở xa? Trong cây có những "đường ống" riêng cho từng dòng chất, và chiếc lá chính là nơi tạo ra lực kéo dòng nước đi lên. Bài học này sẽ theo chân một giọt nước từ đất, qua rễ, thân, đến lá rồi bay vào không khí.',
  objectives: [
    'Mô tả được quá trình hấp thụ nước và chất khoáng ở rễ: con đường từ đất vào lông hút, qua vỏ rễ đến mạch gỗ.',
    'Trình bày được sự vận chuyển các chất trong mạch gỗ (nước, chất khoáng) và mạch rây (chất hữu cơ).',
    'Nêu được thoát hơi nước ở lá diễn ra chủ yếu qua khí khổng và vai trò của thoát hơi nước; nêu được các yếu tố ảnh hưởng và vận dụng vào việc tưới nước, bón phân hợp lí.',
  ],
  sections: [
    {
      heading: 'Hấp thụ nước và chất khoáng ở rễ',
      blocks: [
        {
          type: 'p',
          text: 'Phần lớn thực vật hấp thụ nước và chất khoáng hoà tan từ đất chủ yếu nhờ các tế bào lông hút ở rễ. Mỗi lông hút là một tế bào biểu bì kéo dài, len lỏi vào các khe đất; rất nhiều lông hút làm tăng diện tích tiếp xúc với đất. Bộ rễ càng phát triển thì cây hấp thụ nước và chất khoáng càng hiệu quả.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Con đường của nước và chất khoáng ở rễ',
          text: 'Nước và chất khoáng hoà tan trong đất $\\rightarrow$ tế bào lông hút $\\rightarrow$ các tế bào vỏ rễ $\\rightarrow$ mạch gỗ của rễ $\\rightarrow$ mạch gỗ của thân, lá.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Chất khoáng phải hoà tan trong nước',
          text: 'Cây chỉ hấp thụ được chất khoáng ở dạng hoà tan trong nước. Vì vậy, sau khi bón phân cần tưới nước, và đất phải đủ ẩm thì rễ mới hút được chất khoáng.',
        },
      ],
    },
    {
      heading: 'Vận chuyển các chất trong thân',
      blocks: [
        {
          type: 'table',
          caption: 'So sánh mạch gỗ và mạch rây',
          head: ['Đặc điểm', 'Mạch gỗ', 'Mạch rây'],
          rows: [
            ['Chất vận chuyển', 'Nước và chất khoáng hoà tan', 'Chủ yếu là chất hữu cơ (đường)'],
            ['Nguồn gốc của chất', 'Được rễ hấp thụ từ đất', 'Được tổng hợp ở lá qua quang hợp'],
            [
              'Chiều vận chuyển',
              'Từ rễ lên thân, lá (dòng đi lên)',
              'Từ lá đến các cơ quan sử dụng hoặc dự trữ như hạt, củ, quả, rễ (chủ yếu là dòng đi xuống)',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Nhờ hai hệ thống mạch, nước và chất khoáng đến được mọi bộ phận trên mặt đất để lá quang hợp, còn chất hữu cơ do lá tạo ra được đưa đến nuôi các bộ phận của cây và tích luỹ trong hạt, củ, quả.',
        },
      ],
    },
    {
      heading: 'Thoát hơi nước ở lá',
      blocks: [
        {
          type: 'p',
          text: 'Phần lớn lượng nước cây hút vào không được giữ lại mà thoát ra ngoài dưới dạng hơi nước, chủ yếu qua khí khổng ở lá. Khí khổng mở khi tế bào hạt đậu đủ nước và khi có ánh sáng; khi thiếu nước (khô hạn, đất mặn) khí khổng khép lại để giữ nước, và khi chuyển từ sáng vào tối khí khổng cũng đóng lại.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Vai trò của thoát hơi nước',
          text: 'Thoát hơi nước tạo ra lực hút ở lá, kéo dòng nước và chất khoáng từ rễ đi lên lá và các bộ phận trên mặt đất. Khi thoát hơi nước, khí khổng mở cho khí carbon dioxide đi vào lá cung cấp cho quang hợp và khí oxygen đi ra. Hơi nước thoát ra mang theo nhiệt, giúp hạ nhiệt độ của lá trong những ngày nắng nóng.',
        },
      ],
    },
    {
      heading: 'Các yếu tố ảnh hưởng và vận dụng',
      blocks: [
        {
          type: 'table',
          caption: 'Một số yếu tố ảnh hưởng đến trao đổi nước và chất dinh dưỡng ở thực vật',
          head: ['Yếu tố', 'Ảnh hưởng'],
          rows: [
            [
              'Độ ẩm của đất',
              'Đất đủ ẩm giúp rễ hút được nước và chất khoáng hoà tan; đất khô hạn làm cây thiếu nước, héo',
            ],
            [
              'Khí oxygen trong đất',
              'Đất tơi xốp, thoáng khí giúp rễ hô hấp tốt, hút nước và khoáng mạnh; đất ngập úng, bí chặt thiếu oxygen làm rễ hút kém, có thể bị thối',
            ],
            ['Ánh sáng', 'Chủ yếu ảnh hưởng đến thoát hơi nước ở lá thông qua sự mở khí khổng'],
            [
              'Nhiệt độ',
              'Ảnh hưởng đến sự hấp thụ nước ở rễ, sự vận chuyển các chất trong thân và thoát hơi nước ở lá',
            ],
            ['Độ ẩm không khí', 'Độ ẩm không khí càng thấp thì thoát hơi nước càng mạnh'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Tưới nước và bón phân hợp lí',
          text: 'Cần tưới nước, bón phân hợp lí: đúng lúc, đủ lượng, phù hợp với nhu cầu của từng loài cây, từng giai đoạn phát triển và điều kiện thời tiết. Ví dụ, rau ăn thân, lá (rau cải, rau muống) cần nhiều phân đạm (nitrogen); những ngày hanh khô, gió mạnh, cây thoát hơi nước nhiều nên cần tưới thêm nước. Tránh tưới quá nhiều gây ngập úng, và làm đất tơi xốp cho rễ thoáng khí.',
        },
        {
          type: 'p',
          text: 'Ở phần khám phá, em hãy thay đổi độ ẩm không khí, ánh sáng và tình trạng đất, quan sát các giọt nước đi từ lông hút qua mạch gỗ lên lá và các hạt đường đi trong mạch rây.',
        },
      ],
    },
  ],
  explore: {
    title: 'Dòng nước trong cây',
    instruction:
      'Kéo thanh độ ẩm không khí, chọn ban ngày hay ban đêm và tình trạng đất. Các chấm xanh là nước đi từ lông hút qua vỏ rễ, mạch gỗ lên lá rồi thoát ra qua khí khổng; các ô cam là chất hữu cơ đi trong mạch rây từ lá xuống. Quan sát tốc độ dòng nước, độ mở khí khổng và lá có bị héo không.',
  },
  examples: [
    {
      problem:
        'Vì sao sau khi bón phân cho cây, người ta thường tưới nước ngay? Nếu bón quá nhiều phân mà không tưới thì có thể xảy ra điều gì?',
      steps: [
        'Rễ chỉ hấp thụ được chất khoáng ở dạng hoà tan trong nước, qua tế bào lông hút.',
        'Tưới nước giúp phân hoà tan, ngấm xuống vùng có rễ, để lông hút hấp thụ được.',
        'Bón quá nhiều phân mà không tưới, đất quanh rễ trở nên quá mặn (nồng độ chất tan quá cao): rễ khó hút nước, cây thiếu nước, khí khổng khép lại, cây có thể héo, cháy rễ.',
      ],
      answer:
        'Tưới nước để phân hoà tan, rễ mới hấp thụ được. Bón quá nhiều không tưới làm đất quá mặn, rễ khó hút nước, cây bị héo.',
    },
    {
      problem:
        'Ngày hè nắng nóng, hanh khô, gió mạnh, vì sao cây cần được tưới nhiều nước hơn ngày mát, trời ẩm? Nên tưới vào lúc nào?',
      steps: [
        'Không khí khô (độ ẩm thấp), nắng nóng và gió làm thoát hơi nước ở lá diễn ra mạnh, cây mất nhiều nước.',
        'Nếu rễ hút không kịp lượng nước mất đi, tế bào hạt đậu thiếu nước, khí khổng khép lại, cây héo và quang hợp giảm.',
        'Vì vậy cần tưới thêm nước, nên tưới vào sáng sớm hoặc chiều mát để nước ít bị bốc hơi và cây không bị sốc nhiệt.',
      ],
      answer:
        'Vì thoát hơi nước mạnh nên cây mất nhiều nước, cần tưới bù; nên tưới vào sáng sớm hoặc chiều mát.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Phần lớn thực vật hấp thụ nước và chất khoáng chủ yếu nhờ bộ phận nào?',
      options: ['Khí khổng ở lá', 'Tế bào lông hút ở rễ', 'Mạch rây ở thân', 'Vỏ cây'],
      answer: 1,
      hints: ['Bộ phận này nằm ở rễ, là những tế bào biểu bì kéo dài len vào khe đất.'],
      solution: 'Cây hấp thụ nước và chất khoáng hoà tan chủ yếu qua các tế bào lông hút ở rễ.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp con đường đi của nước từ đất vào cây.',
      items: [
        'Mạch gỗ của rễ',
        'Đất',
        'Các tế bào vỏ rễ',
        'Tế bào lông hút',
        'Mạch gỗ của thân, lá',
      ],
      answer: [1, 3, 2, 0, 4],
      hints: ['Nước đi từ ngoài vào trong rễ rồi mới đi lên.'],
      solution: 'Đất → tế bào lông hút → các tế bào vỏ rễ → mạch gỗ của rễ → mạch gỗ của thân, lá.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi loại mạch với chất mà nó vận chuyển chủ yếu.',
      left: ['Mạch gỗ', 'Mạch rây'],
      right: ['Chất hữu cơ (đường) do lá tổng hợp', 'Nước và chất khoáng hoà tan', 'Khí oxygen'],
      pairs: [
        [0, 1],
        [1, 0],
      ],
      hints: ['Một loại mạch đưa chất lên từ rễ, loại kia đưa chất đi từ lá.'],
      solution:
        'Mạch gỗ vận chuyển nước và chất khoáng hoà tan từ rễ lên; mạch rây vận chuyển chất hữu cơ từ lá đến các cơ quan.',
    },
    {
      type: 'choice',
      prompt: 'Chiều vận chuyển các chất trong mạch rây là:',
      options: [
        'Từ rễ lên lá',
        'Từ lá đến các cơ quan sử dụng hoặc dự trữ như hạt, củ, quả',
        'Từ không khí vào lá',
        'Từ đất vào lông hút',
      ],
      answer: 1,
      hints: ['Chất hữu cơ được tạo ra ở đâu, và được dự trữ ở đâu?'],
      solution:
        'Mạch rây đưa chất hữu cơ từ lá (nơi quang hợp) đến các cơ quan sử dụng hoặc dự trữ như hạt, củ, quả.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các vai trò của thoát hơi nước ở lá.',
      options: [
        'Tạo lực kéo nước và chất khoáng từ rễ lên lá',
        'Khí khổng mở, giúp khí carbon dioxide đi vào lá cho quang hợp',
        'Giúp hạ nhiệt độ của lá khi trời nắng nóng',
        'Cung cấp năng lượng cho cây',
      ],
      answers: [0, 1, 2],
      hints: ['Thoát hơi nước là sự mất nước, nó không tạo ra năng lượng.'],
      solution:
        'Thoát hơi nước tạo lực kéo dòng nước đi lên, đi kèm việc khí khổng mở cho CO₂ vào lá, và hạ nhiệt độ lá. Nó không cung cấp năng lượng.',
    },
    {
      type: 'choice',
      prompt: 'Khi độ ẩm không khí giảm (không khí khô hơn), thoát hơi nước ở lá thay đổi thế nào?',
      options: ['Giảm', 'Tăng', 'Không đổi', 'Ngừng hẳn'],
      answer: 1,
      hints: ['Quần áo phơi khô nhanh hơn vào ngày hanh khô hay ngày nồm ẩm?'],
      solution:
        'Độ ẩm không khí càng thấp thì hơi nước từ lá thoát ra càng mạnh, nên thoát hơi nước tăng.',
    },
    {
      type: 'choice',
      prompt:
        'Vì sao cây trồng ở đất bị ngập úng lâu ngày thường bị héo, dù xung quanh rễ rất nhiều nước?',
      options: [
        'Vì nước ngập làm lá thoát hơi nước quá mạnh',
        'Vì đất ngập thiếu oxygen, rễ không hô hấp được bình thường nên hút nước, chất khoáng kém, có thể bị thối',
        'Vì nước ngập chứa quá nhiều oxygen',
        'Vì mạch rây bị tắc',
      ],
      answer: 1,
      hints: ['Rễ cũng là tế bào sống, cần khí gì để hô hấp và lấy năng lượng hút khoáng?'],
      solution:
        'Đất ngập úng thiếu oxygen, rễ hô hấp kém, không đủ năng lượng để hút nước và chất khoáng, lâu ngày rễ thối nên cây héo. Cần tháo nước, làm đất tơi xốp.',
    },
    {
      type: 'choice',
      prompt: 'Rau cải, rau muống (rau ăn thân, lá) cần được bón nhiều loại phân nào?',
      options: [
        'Phân đạm (nitrogen)',
        'Vôi bột',
        'Phân lân là chủ yếu, không cần đạm',
        'Không cần bón phân',
      ],
      answer: 0,
      hints: ['Chất dinh dưỡng nào giúp cây phát triển thân, lá xanh tốt?'],
      solution: 'Rau ăn thân, lá cần nhiều nitrogen (phân đạm) để thân, lá phát triển xanh tốt.',
    },
    {
      type: 'text',
      prompt: 'Thoát hơi nước ở lá diễn ra chủ yếu qua bộ phận nào? (Viết tên bộ phận.)',
      accept: ['khí khổng', 'khi khong', 'các khí khổng', 'lỗ khí'],
      hints: ['Bộ phận này gồm hai tế bào hình hạt đậu, có nhiều ở mặt dưới lá.'],
      solution: 'Thoát hơi nước diễn ra chủ yếu qua khí khổng ở lá.',
    },
  ],
  takeaways: [
    'Rễ hấp thụ nước và chất khoáng hoà tan chủ yếu qua lông hút: đất → lông hút → vỏ rễ → mạch gỗ.',
    'Mạch gỗ vận chuyển nước và chất khoáng từ rễ lên thân, lá; mạch rây vận chuyển chất hữu cơ từ lá đến các cơ quan.',
    'Thoát hơi nước diễn ra chủ yếu qua khí khổng, tạo lực kéo nước lên, giúp CO₂ vào lá và hạ nhiệt độ lá.',
    'Độ ẩm đất, oxygen trong đất, ánh sáng, nhiệt độ, độ ẩm không khí ảnh hưởng đến trao đổi nước và chất dinh dưỡng; cần tưới nước, bón phân hợp lí.',
  ],
};
