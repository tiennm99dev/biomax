/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Cấu tạo và chức năng của hệ vận động: bộ xương, các loại khớp, cơ; cơ chế cơ co kéo xương và đòn bẩy ở khuỷu tay; một số bệnh về hệ vận động (cong vẹo cột sống, loãng xương) và cách bảo vệ, rèn luyện, sơ cứu khi gãy xương.',
  intro:
    'Em cầm cốc nước lên miệng uống chỉ trong một giây, nhưng để làm được động tác đó, xương, khớp và hàng chục cơ phải phối hợp với nhau. Xương cứng như vậy làm sao cử động được? Cơ kéo xương bằng cách nào? Vì sao ngồi học sai tư thế lâu ngày có thể làm cột sống bị cong vẹo? Bài học này giúp em trả lời những câu hỏi đó.',
  objectives: [
    'Nêu được tên và vai trò của các bộ phận chính của hệ vận động; phân biệt được các loại khớp.',
    'Phân tích được sự phù hợp giữa cấu tạo và chức năng của hệ vận động; giải thích được cơ chế vận động nhờ cơ co, dãn kéo xương và nguyên tắc đòn bẩy.',
    'Nêu được một số bệnh, tật liên quan đến hệ vận động, biện pháp phòng tránh và ý nghĩa của việc tập thể dục, thể thao; biết cách sơ cứu khi bị gãy xương.',
  ],
  sections: [
    {
      heading: 'Cấu tạo và chức năng của hệ vận động',
      blocks: [
        {
          type: 'p',
          text: 'Hệ vận động gồm bộ xương và hệ cơ. Bộ xương người trưởng thành có khoảng 206 chiếc xương, chia thành ba phần: xương đầu, xương thân và xương chi (tay, chân). Cơ thể người có khoảng 600 cơ; cơ bám vào xương nhờ gân.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Thành phần hóa học của xương',
          text: 'Xương gồm chất hữu cơ (chủ yếu là protein) và chất khoáng (chủ yếu là calcium). Chất khoáng làm xương cứng chắc, chất hữu cơ làm xương mềm dẻo, đàn hồi. Nhờ vậy, xương vừa vững chắc vừa chịu được va đập.',
        },
        {
          type: 'table',
          caption: 'Các loại khớp xương',
          head: ['Loại khớp', 'Đặc điểm', 'Ví dụ'],
          rows: [
            ['Khớp động', 'Cử động dễ dàng, linh hoạt', 'Khớp khuỷu tay, khớp gối, khớp vai'],
            ['Khớp bán động', 'Cử động hạn chế', 'Khớp giữa các đốt sống'],
            ['Khớp bất động', 'Không cử động được', 'Khớp giữa các xương sọ'],
          ],
        },
        {
          type: 'p',
          text: 'Mỗi bắp cơ gồm nhiều bó cơ, mỗi bó cơ gồm nhiều sợi cơ (tế bào cơ). Tính chất của cơ là co và dãn.',
        },
        {
          type: 'list',
          items: [
            'Bộ xương: làm khung định hình và nâng đỡ cơ thể, bảo vệ các nội quan (hộp sọ bảo vệ não, lồng ngực bảo vệ tim và phổi), là nơi bám của cơ.',
            'Khớp: nối các xương với nhau, giúp cơ thể cử động.',
            'Cơ: co, dãn kéo xương chuyển động, giúp cơ thể cử động và di chuyển.',
          ],
        },
        {
          type: 'p',
          text: 'Chạm vào các số trên bộ xương dưới đây để tìm hiểu tên và vai trò của từng xương, sau đó thử chế độ "Gọi tên":',
        },
        { type: 'widget', name: 'bo-xuong' },
        { type: 'p', text: 'Xếp mỗi khớp vào đúng loại khớp:' },
        { type: 'widget', name: 'khop' },
      ],
    },
    {
      heading: 'Cơ chế vận động',
      blocks: [
        {
          type: 'p',
          text: 'Khi cơ co, bắp cơ ngắn lại và to ra, kéo xương mà nó bám vào chuyển động quanh khớp. Cơ chỉ kéo được, không đẩy được, nên các cơ thường xếp thành từng cặp hoạt động đối kháng: cơ này co thì cơ kia dãn.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Gập và duỗi cẳng tay',
          text: 'Khi gập cẳng tay, cơ hai đầu (mặt trước cánh tay) co, cơ ba đầu (mặt sau cánh tay) dãn. Khi duỗi cẳng tay, cơ ba đầu co, cơ hai đầu dãn.',
        },
        {
          type: 'p',
          text: 'Nhiều xương và khớp hoạt động theo nguyên tắc đòn bẩy. Ở cẳng tay, điểm tựa là khớp khuỷu, lực do cơ hai đầu tạo ra đặt ở chỗ gân cơ bám vào xương cẳng tay, vật nặng đặt ở bàn tay. Điểm bám của cơ rất gần khớp nên chỉ cần cơ co ngắn một chút, bàn tay đã di chuyển được một quãng dài.',
        },
      ],
    },
    {
      heading: 'Bệnh về hệ vận động và cách bảo vệ',
      blocks: [
        {
          type: 'table',
          caption: 'Một số bệnh, tật về hệ vận động',
          head: ['Bệnh, tật', 'Biểu hiện', 'Nguyên nhân', 'Phòng tránh'],
          rows: [
            [
              'Cong vẹo cột sống',
              'Cột sống bị cong sang một bên, hoặc gù (cong ra sau), ưỡn (cong ra trước) quá mức',
              'Ngồi học, làm việc sai tư thế trong thời gian dài; mang vác nặng một bên; chấn thương; còi xương',
              'Ngồi đúng tư thế; bàn ghế phù hợp chiều cao; đeo cặp hai quai; tập thể dục vừa sức; ăn uống đủ chất',
            ],
            [
              'Loãng xương',
              'Mật độ chất khoáng trong xương giảm, xương giòn, dễ gãy (hay gặp ở người cao tuổi)',
              'Thiếu calcium, phosphorus; ít vận động',
              'Tập luyện đều đặn; ăn đủ protein, calcium, vitamin D; tắm nắng hợp lí; hạn chế rượu, bia, cà phê',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Lợi ích của tập thể dục, thể thao',
          text: 'Tập luyện thường xuyên, vừa sức giúp xương và cơ phát triển cân đối, cơ săn chắc, tăng sức bền, tăng khả năng chịu đựng của cơ thể. Các hoạt động phù hợp với học sinh: đi bộ, chạy, đạp xe, nhảy dây, bơi, bóng rổ, cầu lông, bóng đá, ...',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Sơ cứu khi gãy xương cẳng tay: đặt nhẹ cẳng tay bị thương sát thân; đặt hai nẹp (dài khoảng 30–40 cm) dọc hai bên cẳng tay từ khuỷu đến cổ tay, lót gạc hoặc vải sạch ở chỗ đầu xương; buộc cố định nẹp bằng băng; dùng khăn đeo đỡ cẳng tay vuông góc với cánh tay, treo trước ngực.',
            'Sơ cứu khi gãy xương chân: đặt người bị nạn nằm, chân duỗi thẳng; đặt nẹp ở mặt trong và mặt ngoài chân, lót gạc, buộc cố định phía trên và phía dưới chỗ gãy; rồi đưa đến cơ sở y tế.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Lưu ý',
          text: 'Khi nghi bị gãy xương, không được tự ý nắn chỗ xương gãy, không để người bị nạn cử động phần bị thương; sơ cứu xong cần đưa ngay đến cơ sở y tế.',
        },
      ],
    },
  ],
  explore: {
    title: 'Cơ co, cơ dãn ở khuỷu tay',
    instruction:
      'Kéo bàn tay, kéo thanh trượt hoặc bấm "Gập tay", "Duỗi tay". Quan sát cơ nào ngắn lại và phình to (co), cơ nào dài ra (dãn). Bấm "Xem đòn bẩy" để thấy điểm tựa, điểm đặt lực của cơ và vị trí vật nặng.',
  },
  examples: [
    {
      problem:
        'Khi em co tay đưa cốc nước lên miệng, cơ hai đầu và cơ ba đầu ở cánh tay hoạt động thế nào? Giải thích vì sao cẳng tay chuyển động được.',
      steps: [
        'Đưa cốc lên miệng là động tác gập cẳng tay.',
        'Khi gập, cơ hai đầu ở mặt trước cánh tay co lại (ngắn và to ra), cơ ba đầu ở mặt sau dãn ra.',
        'Gân cơ hai đầu bám vào xương cẳng tay nên khi cơ co, nó kéo xương cẳng tay quay quanh khớp khuỷu (điểm tựa) đi lên.',
      ],
      answer:
        'Cơ hai đầu co, cơ ba đầu dãn; cơ hai đầu co kéo xương cẳng tay quay quanh khớp khuỷu nên cẳng tay gập lại.',
    },
    {
      problem:
        'Xương của trẻ em mềm dẻo hơn, còn xương của người già giòn, dễ gãy hơn. Hãy giải thích dựa vào thành phần hóa học của xương.',
      steps: [
        'Xương gồm chất hữu cơ (tạo tính mềm dẻo) và chất khoáng, chủ yếu calcium (tạo tính cứng chắc).',
        'Ở trẻ em, tỉ lệ chất hữu cơ trong xương cao hơn nên xương mềm dẻo, đàn hồi.',
        'Ở người già, chất hữu cơ giảm, đồng thời mật độ chất khoáng cũng giảm (loãng xương) nên xương giòn, dễ gãy.',
      ],
      answer:
        'Do tỉ lệ chất hữu cơ trong xương trẻ em cao hơn; ở người già chất hữu cơ và mật độ khoáng giảm nên xương giòn, dễ gãy.',
    },
  ],
  practice: [
    {
      type: 'number',
      prompt: 'Bộ xương người trưởng thành có khoảng bao nhiêu chiếc xương?',
      answer: 206,
      unit: 'xương',
      hints: ['Con số này lớn hơn 200 một chút.'],
      solution: 'Bộ xương người trưởng thành có khoảng 206 chiếc xương.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi thành phần của xương với tính chất nó tạo ra cho xương.',
      left: ['Chất khoáng (chủ yếu calcium)', 'Chất hữu cơ (chủ yếu protein)'],
      right: ['Làm xương cứng chắc', 'Làm xương mềm dẻo, đàn hồi', 'Làm xương co và dãn'],
      pairs: [
        [0, 0],
        [1, 1],
      ],
      hints: ['Xương co, dãn được không? Tính chất co, dãn thuộc về bộ phận nào?'],
      solution:
        'Chất khoáng làm xương cứng chắc; chất hữu cơ làm xương mềm dẻo. Co và dãn là tính chất của cơ, không phải của xương.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi khớp với loại khớp của nó.',
      left: ['Khớp gối', 'Khớp giữa các đốt sống', 'Khớp giữa các xương sọ'],
      right: ['Khớp bất động', 'Khớp động', 'Khớp bán động'],
      pairs: [
        [0, 1],
        [1, 2],
        [2, 0],
      ],
      hints: ['Khớp nào cử động dễ dàng, khớp nào cử động hạn chế, khớp nào không cử động?'],
      solution:
        'Khớp gối: khớp động. Khớp giữa các đốt sống: khớp bán động. Khớp giữa các xương sọ: khớp bất động.',
    },
    {
      type: 'choice',
      prompt: 'Khi duỗi cẳng tay, hai cơ ở cánh tay hoạt động như thế nào?',
      options: [
        'Cơ hai đầu co, cơ ba đầu dãn',
        'Cơ ba đầu co, cơ hai đầu dãn',
        'Cả hai cơ cùng co',
        'Cả hai cơ cùng dãn',
      ],
      answer: 1,
      hints: [
        'Cơ chỉ kéo được, không đẩy được. Cơ nằm ở mặt nào của cánh tay kéo cẳng tay duỗi ra?',
      ],
      solution:
        'Khi duỗi, cơ ba đầu ở mặt sau cánh tay co, kéo vào mỏm khuỷu làm cẳng tay duỗi ra; cơ hai đầu dãn.',
    },
    {
      type: 'choice',
      prompt: 'Trong đòn bẩy ở cẳng tay khi cầm vật nặng, điểm tựa là bộ phận nào?',
      options: ['Bàn tay', 'Khớp vai', 'Khớp khuỷu tay', 'Bắp cơ hai đầu'],
      answer: 2,
      hints: ['Cẳng tay quay quanh điểm nào khi gập, duỗi?'],
      solution:
        'Cẳng tay quay quanh khớp khuỷu nên khớp khuỷu là điểm tựa; lực của cơ đặt ở chỗ gân cơ hai đầu bám vào xương cẳng tay, vật nặng ở bàn tay.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các thói quen có thể gây cong vẹo cột sống ở học sinh.',
      options: [
        'Ngồi học cúi gập người, nghiêng một bên trong thời gian dài',
        'Đeo cặp nặng trên một vai',
        'Ngồi bàn ghế quá thấp hoặc quá cao so với cơ thể',
        'Đeo cặp hai quai, ngồi thẳng lưng',
        'Tập thể dục vừa sức hằng ngày',
      ],
      answers: [0, 1, 2],
      hints: ['Những thói quen làm cột sống phải chịu lực lệch về một phía trong thời gian dài.'],
      solution:
        'Ngồi sai tư thế, mang vác nặng một bên và bàn ghế không phù hợp gây cong vẹo cột sống. Đeo cặp hai quai, ngồi thẳng lưng và tập thể dục là cách phòng tránh.',
    },
    {
      type: 'choice',
      prompt: 'Biện pháp nào giúp phòng tránh bệnh loãng xương?',
      options: [
        'Ăn đủ calcium, vitamin D và tập luyện đều đặn',
        'Uống nhiều cà phê, ít vận động',
        'Ăn kiêng hoàn toàn chất đạm',
        'Tránh ánh nắng hoàn toàn',
      ],
      answer: 0,
      hints: ['Loãng xương là do mật độ chất khoáng trong xương giảm.'],
      solution:
        'Bổ sung đủ calcium, vitamin D, protein, tắm nắng hợp lí và tập luyện đều đặn giúp xương chắc khỏe, phòng loãng xương.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước sơ cứu khi bị gãy xương cẳng tay.',
      items: [
        'Buộc cố định nẹp bằng băng',
        'Đặt cẳng tay bị thương nhẹ nhàng sát thân',
        'Dùng khăn đeo đỡ cẳng tay vuông góc với cánh tay, treo trước ngực',
        'Đặt hai nẹp dọc hai bên cẳng tay, lót gạc ở chỗ đầu xương',
      ],
      answer: [1, 3, 0, 2],
      hints: ['Phải đặt nẹp trước rồi mới buộc; treo tay là bước cuối.'],
      solution:
        'Đặt cẳng tay sát thân → đặt hai nẹp, lót gạc → buộc cố định nẹp → dùng khăn đeo đỡ cẳng tay trước ngực, rồi đưa đến cơ sở y tế.',
    },
  ],
  takeaways: [
    'Hệ vận động gồm bộ xương (khoảng 206 xương: xương đầu, xương thân, xương chi) và hệ cơ (khoảng 600 cơ), nối với nhau qua khớp và gân.',
    'Xương gồm chất hữu cơ (mềm dẻo) và chất khoáng, chủ yếu calcium (cứng chắc). Khớp có ba loại: khớp động, khớp bán động, khớp bất động.',
    'Cơ co kéo xương chuyển động quanh khớp; các cơ hoạt động đối kháng (gập tay: cơ hai đầu co, cơ ba đầu dãn). Xương và khớp hoạt động theo nguyên tắc đòn bẩy.',
    'Ngồi đúng tư thế, ăn đủ chất (calcium, vitamin D), tập thể dục vừa sức giúp phòng cong vẹo cột sống và loãng xương. Khi gãy xương phải sơ cứu bằng nẹp rồi đưa đến cơ sở y tế.',
  ],
};
