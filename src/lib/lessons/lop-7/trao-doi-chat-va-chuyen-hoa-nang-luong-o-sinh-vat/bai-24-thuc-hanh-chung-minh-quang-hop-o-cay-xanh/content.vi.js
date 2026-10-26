/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Bài thực hành: chứng minh lá cây tạo ra tinh bột khi được chiếu sáng bằng thuốc thử iodine, và chứng minh quang hợp giải phóng khí oxygen bằng cành rong đuôi chó và que đóm còn tàn đỏ.',
  intro:
    'Ở bài trước, em đã biết quang hợp tạo ra chất hữu cơ và khí oxygen. Nhưng làm sao để thấy được điều đó tận mắt? Trong bài thực hành này, em sẽ tự làm hai thí nghiệm: dùng iodine để tìm tinh bột trong lá và dùng que đóm để nhận ra khí oxygen do cây thải ra, qua đó chứng minh quang hợp chỉ diễn ra khi có ánh sáng.',
  objectives: [
    'Tiến hành được thí nghiệm chứng minh quang hợp ở cây xanh tạo ra tinh bột.',
    'Tiến hành được thí nghiệm chứng minh quang hợp ở cây xanh giải phóng khí oxygen.',
    'Giải thích được mục đích của từng bước thí nghiệm, vai trò của mẫu đối chứng, và rút ra kết luận từ kết quả.',
  ],
  sections: [
    {
      heading: 'Chuẩn bị',
      blocks: [
        {
          type: 'list',
          items: [
            'Dụng cụ: đèn cồn, giá đỡ, ống nghiệm, kẹp ống nghiệm, cốc thuỷ tinh $500$ mL, đĩa Petri, băng giấy đen, panh, ống hút, hộp diêm, que đóm.',
            'Hoá chất: cồn $90^\\circ$, dung dịch iodine (thuốc thử tinh bột), nước ấm.',
            'Mẫu vật: chậu cây xanh (khoai lang, trầu bà, ...), một số cành rong đuôi chó.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Thuốc thử iodine',
          text: 'Dung dịch iodine có màu vàng nâu. Khi gặp tinh bột, iodine chuyển sang màu xanh tím. Vì vậy, nhỏ iodine lên lá giúp ta biết phần lá nào có tinh bột.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'An toàn',
          text: 'Cồn rất dễ cháy: luôn đun cách thuỷ (đặt ống nghiệm hoặc cốc chứa cồn vào cốc nước nóng), không đun cồn trực tiếp trên lửa và để cồn xa đèn cồn đang cháy. Cẩn thận khi dùng dụng cụ thuỷ tinh và khi châm que đóm. Không nếm, ngửi trực tiếp hoá chất; rửa tay sau thí nghiệm.',
        },
      ],
    },
    {
      heading: 'Thí nghiệm 1: Chứng minh quang hợp tạo ra tinh bột',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Đặt chậu cây (ví dụ cây khoai lang) vào chỗ tối trong $2$ ngày.',
            'Dùng băng giấy đen bịt kín một phần lá ở cả hai mặt. Đem chậu cây ra chỗ có nắng (hoặc để dưới ánh sáng bóng điện) từ $4$ đến $6$ giờ.',
            'Ngắt chiếc lá thí nghiệm, bỏ băng giấy đen.',
            'Cho lá vào cồn $90^\\circ$ và đun cách thuỷ để tẩy hết diệp lục.',
            'Rửa sạch lá trong nước ấm.',
            'Nhúng lá vào đĩa Petri đựng dung dịch iodine loãng, quan sát màu của các phần lá.',
          ],
        },
        {
          type: 'table',
          caption: 'Mục đích của các bước chính',
          head: ['Bước', 'Mục đích'],
          rows: [
            [
              'Để cây trong tối $2$ ngày',
              'Lá dùng hết tinh bột có sẵn, để tinh bột tìm thấy sau này chắc chắn là mới tạo ra',
            ],
            [
              'Bịt một phần lá bằng giấy đen',
              'Phần bị bịt không nhận được ánh sáng, không quang hợp; đó là phần đối chứng để so sánh',
            ],
            [
              'Đun cách thuỷ trong cồn $90^\\circ$',
              'Tẩy diệp lục (màu xanh) để dễ quan sát màu của iodine',
            ],
            ['Nhúng lá vào iodine', 'Nhận biết tinh bột: có tinh bột thì lá chuyển màu xanh tím'],
          ],
        },
        {
          type: 'table',
          caption: 'Kết quả thí nghiệm 1',
          head: ['Phần lá', 'Màu sau khi nhúng iodine', 'Có tinh bột không?'],
          rows: [
            ['Bị bịt giấy đen (không được chiếu sáng)', 'Vàng nâu (màu của iodine)', 'Không'],
            ['Không bị bịt (được chiếu sáng)', 'Xanh tím', 'Có'],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Kết luận',
          text: 'Lá chỉ tạo ra tinh bột ở phần được chiếu sáng. Vậy khi có ánh sáng, lá cây quang hợp tạo ra tinh bột (chất hữu cơ).',
        },
      ],
    },
    {
      heading: 'Thí nghiệm 2: Chứng minh quang hợp giải phóng khí oxygen',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Cho hai cành rong đuôi chó vào hai ống nghiệm, ngọn cành hướng về phía đáy ống.',
            'Đổ đầy nước vào hai ống nghiệm, bịt kín miệng ống bằng ngón tay rồi úp ngược từng ống vào cốc A và cốc B đã đựng nước, sao cho trong ống không có bọt khí.',
            'Để cốc A vào chỗ tối (hoặc bọc giấy đen), để cốc B ra chỗ có nắng.',
            'Sau khoảng $6$ giờ, quan sát bọt khí và mực nước trong hai ống. Nhẹ nhàng lấy cành rong ra, bịt miệng ống, lật ngược ống lên và đưa nhanh que đóm còn tàn đỏ vào miệng mỗi ống.',
          ],
        },
        {
          type: 'table',
          caption: 'Kết quả thí nghiệm 2',
          head: ['Quan sát', 'Cốc A (chỗ tối)', 'Cốc B (chỗ sáng)'],
          rows: [
            ['Bọt khí', 'Không có (hoặc rất ít)', 'Nhiều bọt khí nổi lên'],
            ['Mực nước trong ống', 'Gần như không đổi', 'Hạ xuống do khí đẩy nước ra'],
            ['Que đóm còn tàn đỏ', 'Tắt dần', 'Bùng cháy trở lại'],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Kết luận',
          text: 'Khí oxygen duy trì sự cháy nên làm que đóm còn tàn đỏ bùng cháy. Cành rong ở chỗ sáng đã thải ra khí oxygen, còn cành rong ở chỗ tối thì không. Vậy khi có ánh sáng, cây quang hợp và giải phóng khí oxygen.',
        },
      ],
    },
    {
      heading: 'Báo cáo thực hành',
      blocks: [
        {
          type: 'list',
          items: [
            'Ghi lại các bước đã làm và kết quả quan sát của từng thí nghiệm vào bảng.',
            'Giải thích mục đích của các bước chính, chỉ ra mẫu đối chứng trong mỗi thí nghiệm.',
            'Rút ra kết luận về sản phẩm của quang hợp và điều kiện ánh sáng.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Phòng thí nghiệm ảo',
    instruction:
      'Thí nghiệm 1: chọn có để cây trong tối 2 ngày không, có tẩy diệp lục không, kéo thời gian chiếu sáng rồi bấm "Nhỏ iodine" và so sánh màu hai phần lá. Thử bỏ qua một bước để thấy vì sao không được bỏ. Thí nghiệm 2: đặt hai cốc ở chỗ sáng hoặc tối, chọn thời gian rồi đưa que đóm vào.',
  },
  examples: [
    {
      problem:
        'Nhóm của An quên không để chậu cây trong tối $2$ ngày mà làm ngay các bước còn lại. Khi nhúng vào iodine, cả lá đều có màu xanh tím. Hãy giải thích và cho biết thí nghiệm có chứng minh được quang hợp tạo ra tinh bột không.',
      steps: [
        'Lá cây trước khi thí nghiệm đã quang hợp ngoài sáng, nên trong lá có sẵn tinh bột.',
        'Không để trong tối, lá không dùng hết lượng tinh bột cũ. Vì vậy, cả phần lá bị bịt giấy đen cũng có tinh bột và chuyển màu xanh tím.',
        'Hai phần lá giống nhau nên không so sánh được: không biết tinh bột ở phần lá được chiếu sáng có phải mới tạo ra hay không.',
      ],
      answer:
        'Lá còn tinh bột cũ nên cả lá xanh tím; thí nghiệm không chứng minh được. Phải để cây trong tối $2$ ngày rồi làm lại.',
    },
    {
      problem:
        'Trong thí nghiệm 2, vì sao phải dùng hai cốc, một cốc để ở chỗ tối? Nếu chỉ làm với cốc để ở chỗ sáng thì có kết luận được không?',
      steps: [
        'Hai cốc giống hệt nhau, chỉ khác một điều kiện là ánh sáng.',
        'Cốc để ở chỗ tối là cốc đối chứng: nếu chỉ ống ở chỗ sáng có khí làm que đóm bùng cháy, ta biết chắc khí oxygen được tạo ra là nhờ ánh sáng.',
        'Nếu chỉ có một cốc ở chỗ sáng, ta biết cây thải oxygen nhưng không chứng minh được việc thải oxygen cần ánh sáng.',
      ],
      answer:
        'Cốc ở chỗ tối là đối chứng giúp chứng minh khí oxygen được thải ra nhờ quang hợp khi có ánh sáng; thiếu nó thì kết luận không chặt chẽ.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt:
        'Sắp xếp các bước của thí nghiệm chứng minh quang hợp tạo ra tinh bột theo đúng thứ tự.',
      items: [
        'Nhúng lá vào dung dịch iodine',
        'Để chậu cây trong tối 2 ngày',
        'Đun cách thuỷ lá trong cồn 90°',
        'Bịt một phần lá bằng giấy đen, đem ra chỗ nắng 4 đến 6 giờ',
        'Rửa lá trong nước ấm',
        'Ngắt lá, bỏ băng giấy đen',
      ],
      answer: [1, 3, 5, 2, 4, 0],
      hints: [
        'Bước đầu tiên làm cho lá hết tinh bột cũ.',
        'Phải tẩy diệp lục và rửa sạch trước khi thử bằng iodine.',
      ],
      solution:
        'Để trong tối 2 ngày → bịt giấy đen, chiếu sáng 4 đến 6 giờ → ngắt lá, bỏ giấy → đun cách thuỷ trong cồn 90° → rửa nước ấm → nhúng vào iodine.',
    },
    {
      type: 'choice',
      prompt: 'Mục đích của việc để chậu cây trong tối 2 ngày trước khi thí nghiệm là gì?',
      options: [
        'Để lá dùng hết tinh bột có sẵn',
        'Để lá tạo ra nhiều tinh bột hơn',
        'Để diệp lục trong lá bị phân huỷ',
        'Để cây hút nhiều nước hơn',
      ],
      answer: 0,
      hints: ['Ta muốn tinh bột tìm thấy sau này phải là tinh bột mới.'],
      solution:
        'Trong tối, lá không quang hợp mà vẫn dùng tinh bột, nên sau 2 ngày lá hết tinh bột cũ. Tinh bột tìm thấy sau đó chắc chắn được tạo ra trong lúc thí nghiệm.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao phải đun cách thuỷ lá trong cồn $90^\\circ$ trước khi nhúng vào iodine?',
      options: [
        'Để làm chín lá',
        'Để tẩy diệp lục, giúp dễ quan sát màu của iodine',
        'Để tạo thêm tinh bột',
        'Để diệt vi khuẩn trên lá',
      ],
      answer: 1,
      hints: ['Màu xanh của lá sẽ che mất màu gì?'],
      solution:
        'Cồn hoà tan diệp lục làm lá mất màu xanh; khi đó màu xanh tím (có tinh bột) hay vàng nâu (không có tinh bột) của iodine hiện rõ.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi phần của chiếc lá thí nghiệm với màu của nó sau khi nhúng iodine.',
      left: ['Phần lá bị bịt giấy đen', 'Phần lá được chiếu sáng'],
      right: ['Xanh tím', 'Vàng nâu', 'Đỏ'],
      pairs: [
        [0, 1],
        [1, 0],
      ],
      hints: ['Phần nào quang hợp được và tạo ra tinh bột?'],
      solution:
        'Phần bị bịt không quang hợp, không có tinh bột nên giữ màu vàng nâu của iodine. Phần được chiếu sáng có tinh bột nên chuyển màu xanh tím.',
    },
    {
      type: 'choice',
      prompt: 'Trong thí nghiệm 1, phần lá được bịt giấy đen có vai trò gì?',
      options: [
        'Là phần đối chứng, không được chiếu sáng để so sánh với phần được chiếu sáng',
        'Giúp lá hút nhiều ánh sáng hơn',
        'Giữ cho lá không bị héo',
        'Giúp iodine thấm vào lá tốt hơn',
      ],
      answer: 0,
      hints: ['Hai phần của cùng một lá chỉ khác nhau một điều kiện.'],
      solution:
        'Phần bị bịt không nhận ánh sáng, là phần đối chứng. So sánh với phần được chiếu sáng cho thấy tinh bột chỉ được tạo ra khi có ánh sáng.',
    },
    {
      type: 'text',
      prompt: 'Dung dịch nào được dùng làm thuốc thử để nhận biết tinh bột?',
      accept: ['iodine', 'dung dịch iodine', 'iot', 'i-ốt', 'i ốt', 'dung dịch iot'],
      hints: ['Gặp tinh bột, dung dịch này chuyển màu xanh tím.'],
      solution: 'Dung dịch iodine: gặp tinh bột chuyển màu xanh tím.',
    },
    {
      type: 'choice',
      prompt:
        'Trong thí nghiệm 2, que đóm còn tàn đỏ bùng cháy trở lại khi đưa vào ống nghiệm của cốc để ở chỗ sáng. Điều đó chứng tỏ khí trong ống là',
      options: ['khí carbon dioxide', 'khí oxygen', 'hơi nước', 'khí nitrogen'],
      answer: 1,
      hints: ['Khí nào duy trì sự cháy?'],
      solution:
        'Khí oxygen duy trì sự cháy, làm que đóm còn tàn đỏ bùng cháy. Vậy cành rong ở chỗ sáng đã thải ra khí oxygen.',
    },
    {
      type: 'choice',
      prompt: 'Trong thí nghiệm 2, vì sao mực nước trong ống nghiệm ở cốc để chỗ sáng hạ xuống?',
      options: [
        'Vì cành rong hút hết nước',
        'Vì nước bay hơi qua miệng ống',
        'Vì khí oxygen do cành rong thải ra tụ lại ở đỉnh ống, đẩy nước xuống',
        'Vì ánh sáng làm nước co lại',
      ],
      answer: 2,
      hints: ['Ống được úp ngược; bọt khí nổi lên sẽ đi đâu?'],
      solution:
        'Bọt khí oxygen từ cành rong nổi lên và tụ ở đỉnh ống (đáy ống nghiệm úp ngược), chiếm chỗ và đẩy nước trong ống xuống.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao trong thí nghiệm 2 người ta dùng cây rong đuôi chó?',
      options: [
        'Vì rong đuôi chó sống trong nước, bọt khí oxygen thải ra dễ quan sát và thu được',
        'Vì rong đuôi chó không cần ánh sáng',
        'Vì rong đuôi chó không có diệp lục',
        'Vì rong đuôi chó thải ra khí carbon dioxide khi quang hợp',
      ],
      answer: 0,
      hints: ['Muốn thu và thấy được chất khí do cây thải ra thì cây nên sống ở đâu?'],
      solution:
        'Rong đuôi chó là cây sống trong nước, có diệp lục và quang hợp được; khí oxygen thải ra thành bọt nổi lên, dễ quan sát và thu vào ống nghiệm.',
    },
    {
      type: 'number',
      prompt:
        'Theo cách làm trong sách, sau khi bịt giấy đen, chậu cây cần được chiếu sáng ít nhất khoảng bao nhiêu giờ?',
      answer: 4,
      unit: 'giờ',
      hints: ['Sách ghi một khoảng thời gian "từ ... đến 6 giờ".'],
      solution: 'Sách cho chiếu sáng từ $4$ đến $6$ giờ, nên ít nhất khoảng $4$ giờ.',
    },
    {
      type: 'multi',
      prompt: 'Từ hai thí nghiệm, em rút ra được những kết luận nào?',
      options: [
        'Khi có ánh sáng, lá cây tạo ra tinh bột',
        'Khi có ánh sáng, cây thải ra khí oxygen',
        'Trong tối, lá cây vẫn tạo ra nhiều tinh bột',
        'Quang hợp cần ánh sáng',
        'Cây hấp thụ khí oxygen khi quang hợp',
      ],
      answers: [0, 1, 3],
      hints: ['So sánh phần (cốc) được chiếu sáng với phần (cốc) để trong tối ở mỗi thí nghiệm.'],
      solution:
        'Thí nghiệm 1: lá chỉ tạo tinh bột ở phần được chiếu sáng. Thí nghiệm 2: chỉ cành rong ở chỗ sáng thải oxygen. Vậy quang hợp cần ánh sáng, tạo ra tinh bột và thải oxygen.',
    },
  ],
  takeaways: [
    'Iodine là thuốc thử tinh bột: gặp tinh bột chuyển màu xanh tím.',
    'Thí nghiệm 1: để cây trong tối 2 ngày, bịt một phần lá bằng giấy đen, chiếu sáng 4 đến 6 giờ, tẩy diệp lục bằng cồn 90° đun cách thuỷ, rửa nước ấm, nhúng iodine: chỉ phần lá được chiếu sáng chuyển xanh tím.',
    'Thí nghiệm 2: cành rong đuôi chó trong ống nghiệm đầy nước úp ngược; ở chỗ sáng có bọt khí và que đóm còn tàn đỏ bùng cháy, ở chỗ tối thì không.',
    'Kết luận: khi có ánh sáng, cây quang hợp tạo ra tinh bột và giải phóng khí oxygen. Mẫu đối chứng (phần lá bị bịt, cốc để chỗ tối) giúp kết luận chặt chẽ.',
  ],
};
