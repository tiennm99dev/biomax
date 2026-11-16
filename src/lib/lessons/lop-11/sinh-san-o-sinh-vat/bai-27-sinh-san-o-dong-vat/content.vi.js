/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Các hình thức sinh sản vô tính ở động vật (phân đôi, nảy chồi, phân mảnh, trinh sinh); sinh sản hữu tính: đẻ trứng, đẻ trứng thai, đẻ con, sinh sản ở người; điều hoà sinh tinh, sinh trứng bằng hormone với điều hoà ngược; điều khiển sinh sản và sinh đẻ có kế hoạch.',
  intro:
    'Cắt một con sao biển thành nhiều mảnh, mỗi mảnh có thể mọc thành một con sao biển mới; còn ong chúa đẻ ra ong đực từ những trứng không hề được thụ tinh. Ở người và thú, sinh sản lại được điều khiển chặt chẽ bởi các hormone. Hiểu cơ chế ấy giúp con người chăn nuôi hiệu quả và chủ động sinh đẻ có kế hoạch.',
  objectives: [
    'Phân biệt được các hình thức sinh sản vô tính ở động vật; lấy được ví dụ.',
    'Trình bày được các hình thức sinh sản hữu tính (đẻ trứng, đẻ trứng thai, đẻ con) và quá trình sinh sản hữu tính ở người.',
    'Trình bày được cơ chế điều hoà sinh tinh và sinh trứng bằng hormone, có điều hoà ngược; nêu được ảnh hưởng của thần kinh và môi trường.',
    'Nêu được một số biện pháp điều khiển sinh sản ở động vật; giải thích được ý nghĩa của sinh đẻ có kế hoạch và một số biện pháp tránh thai.',
  ],
  sections: [
    {
      heading: 'Sinh sản vô tính ở động vật',
      blocks: [
        {
          type: 'table',
          head: ['Hình thức', 'Đặc điểm', 'Ví dụ'],
          rows: [
            [
              'Phân đôi',
              'Cơ thể mẹ tách thành hai cá thể có kích thước gần bằng nhau',
              'Hải quỳ, san hô (ruột khoang)',
            ],
            [
              'Nảy chồi',
              'Một chồi mọc ra từ cơ thể mẹ, lớn dần rồi tách ra thành cơ thể mới',
              'Thuỷ tức, bọt biển',
            ],
            [
              'Phân mảnh',
              'Cơ thể mẹ tách thành nhiều mảnh, mỗi mảnh phát triển thành cơ thể mới',
              'Giun dẹp, bọt biển, sao biển',
            ],
            [
              'Trinh sinh',
              'Tế bào trứng không thụ tinh phát triển thành cơ thể mới (đơn bội)',
              'Ong, kiến, rệp',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Ứng dụng',
          text: 'Dựa trên nguyên lí sinh sản vô tính, con người nuôi cấy mô, tế bào động vật và nhân bản vô tính (ví dụ cừu Dolly ra đời năm 1996 từ nhân tế bào tuyến vú của một cừu cho nhân).',
        },
      ],
    },
    {
      heading: 'Sinh sản hữu tính ở động vật và ở người',
      blocks: [
        {
          type: 'p',
          text: 'Sinh sản hữu tính gồm ba giai đoạn: hình thành giao tử (giảm phân), thụ tinh tạo hợp tử, phát triển phôi thành cơ thể mới. Thụ tinh ngoài xảy ra trong nước (cá, ếch); thụ tinh trong xảy ra trong cơ quan sinh dục của con cái (bò sát, chim, thú).',
        },
        {
          type: 'table',
          head: ['Hình thức', 'Phôi phát triển ở đâu, nhờ gì', 'Ví dụ'],
          rows: [
            [
              'Đẻ trứng',
              'Trứng (thụ tinh ngoài hoặc trong) được đẻ ra ngoài, phôi phát triển nhờ noãn hoàng trong trứng',
              'Cá, ếch, bò sát, chim',
            ],
            [
              'Đẻ trứng thai (noãn thai sinh)',
              'Hợp tử phát triển trong ống dẫn trứng của con cái nhờ noãn hoàng, rồi con non được đẻ ra',
              'Một số loài cá, bò sát, chân khớp',
            ],
            [
              'Đẻ con (thai sinh)',
              'Phôi phát triển trong tử cung, nhận dinh dưỡng từ mẹ qua nhau thai',
              'Thú (trừ thú mỏ vịt), người',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Ở người, tinh trùng hình thành trong ống sinh tinh của tinh hoàn; trứng hình thành trong buồng trứng.',
            'Thụ tinh: tinh trùng ($n$) kết hợp với trứng ($n$) tạo hợp tử ($2n$), thường ở khoảng $\\frac{1}{3}$ ống dẫn trứng phía gần loa vòi.',
            'Hợp tử phân bào trên đường về tử cung và làm tổ ở tử cung. Khoảng $8$ tuần đầu là giai đoạn phôi (hình thành mô, cơ quan), sau đó là giai đoạn thai.',
            'Sau khoảng $9$ tháng $10$ ngày, hormone oxytocin kích thích tử cung co bóp, prostaglandin làm co bóp mạnh hơn, đẩy thai ra ngoài.',
          ],
        },
      ],
    },
    {
      heading: 'Điều hoà sinh sản',
      blocks: [
        {
          type: 'table',
          head: ['Thành phần', 'Điều hoà sinh tinh', 'Điều hoà sinh trứng'],
          rows: [
            ['Vùng dưới đồi', 'Tiết GnRH kích thích tuyến yên', 'Tiết GnRH kích thích tuyến yên'],
            [
              'FSH (tuyến yên)',
              'Kích thích ống sinh tinh sản sinh tinh trùng',
              'Kích thích nang trứng phát triển, tiết estrogen',
            ],
            [
              'LH (tuyến yên)',
              'Kích thích tế bào kẽ (Leydig) tiết testosterone',
              'Làm trứng chín, rụng và hình thành thể vàng; thể vàng tiết progesterone, estrogen',
            ],
            [
              'Hormone sinh dục',
              'Testosterone kích thích ống sinh tinh sản sinh tinh trùng',
              'Progesterone, estrogen làm niêm mạc tử cung dày lên',
            ],
            [
              'Điều hoà ngược',
              'Testosterone trong máu tăng cao ức chế vùng dưới đồi và tuyến yên, giảm tiết GnRH, FSH, LH',
              'Progesterone, estrogen trong máu tăng cao ức chế vùng dưới đồi và tuyến yên, giảm tiết GnRH, FSH, LH',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Căng thẳng thần kinh kéo dài làm rối loạn hormone, giảm sản sinh tinh trùng, rối loạn chu kì trứng chín và rụng.',
            'Thiếu ăn, suy dinh dưỡng, chế độ ăn không hợp lí, béo phì gây rối loạn chuyển hoá, ảnh hưởng đến sinh sản.',
            'Ít vận động, mặc quần lót quá chật làm giảm sản sinh tinh trùng; hút thuốc lá, uống rượu, dùng ma tuý gây hại cho sinh tinh và chu kì kinh nguyệt.',
          ],
        },
      ],
    },
    {
      heading: 'Điều khiển sinh sản và sinh đẻ có kế hoạch',
      blocks: [
        {
          type: 'list',
          items: [
            'Điều khiển số con: thụ tinh nhân tạo, thay đổi yếu tố môi trường (chiếu sáng, nhiệt độ), nuôi cấy phôi, dùng hormone.',
            'Điều khiển giới tính: tách tinh trùng mang X và mang Y (lọc, li tâm, điện di); nuôi cá rô phi bột bằng 17-methyltestosterone kết hợp vitamin C để tạo ra toàn cá đực (dùng hormone nhân tạo).',
            'Thụ tinh trong ống nghiệm: trứng và tinh trùng thụ tinh ngoài cơ thể tạo phôi, rồi chuyển phôi vào tử cung người phụ nữ để làm tổ và phát triển thành thai; giúp các cặp vợ chồng hiếm muộn có con.',
          ],
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Sinh đẻ có kế hoạch',
          text: 'Sinh đẻ có kế hoạch là điều chỉnh về số con, thời điểm sinh con và khoảng cách giữa các lần sinh sao cho phù hợp với việc nâng cao chất lượng cuộc sống của mỗi cá nhân, gia đình và xã hội. Mỗi cặp vợ chồng nên có $2$ con, không sinh quá sớm, quá muộn hoặc quá dày.',
        },
        {
          type: 'table',
          head: ['Biện pháp tránh thai', 'Cơ chế'],
          rows: [
            ['Bao cao su', 'Ngăn tinh trùng gặp trứng'],
            [
              'Thuốc tránh thai (chứa progesterone, estrogen)',
              'Ức chế ngược vùng dưới đồi và tuyến yên, giảm FSH, LH nên trứng không chín, không rụng',
            ],
            ['Dụng cụ tử cung (vòng tránh thai)', 'Ngăn hợp tử làm tổ trong tử cung'],
            [
              'Thắt ống dẫn tinh, thắt ống dẫn trứng',
              'Tinh trùng không ra ngoài được, trứng không gặp được tinh trùng',
            ],
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Trục hormone điều hoà sinh tinh, sinh trứng',
    instruction:
      'Chọn trục sinh tinh hoặc sinh trứng, rồi bật từng thay đổi: dùng hormone sinh dục từ bên ngoài, cắt bỏ tuyến sinh dục, căng thẳng kéo dài. Quan sát mũi tên GnRH, FSH, LH và đường ức chế ngược màu đỏ thay đổi thế nào.',
  },
  examples: [
    {
      problem:
        'Ong mật có bộ nhiễm sắc thể $2n = 32$. Ong thợ và ong chúa phát triển từ trứng được thụ tinh, ong đực phát triển từ trứng không được thụ tinh. Tế bào cơ thể ong đực có bao nhiêu nhiễm sắc thể? Đây là hình thức sinh sản nào?',
      steps: [
        'Trứng của ong chúa là giao tử, đơn bội: $n = 32 : 2 = 16$.',
        'Trứng không thụ tinh phát triển thành ong đực, nên tế bào ong đực có $n = 16$ nhiễm sắc thể.',
        'Cơ thể mới phát triển từ trứng không thụ tinh: đó là trinh sinh, một hình thức sinh sản vô tính.',
      ],
      answer: '$16$ nhiễm sắc thể; trinh sinh.',
    },
    {
      problem:
        'Giải thích vì sao uống thuốc tránh thai chứa progesterone và estrogen hằng ngày lại ngăn được trứng chín và rụng.',
      steps: [
        'Thuốc làm nồng độ progesterone, estrogen trong máu luôn cao.',
        'Nồng độ cao này ức chế ngược vùng dưới đồi và tuyến yên: GnRH, FSH, LH giảm.',
        'Thiếu FSH, nang trứng không phát triển; thiếu LH, trứng không chín và không rụng, nên không thể thụ thai.',
      ],
      answer:
        'Hormone trong thuốc gây ức chế ngược, giảm FSH và LH nên trứng không chín, không rụng.',
    },
  ],
  practice: [
    {
      type: 'match',
      prompt: 'Ghép mỗi động vật với hình thức sinh sản vô tính của nó.',
      left: ['Thuỷ tức', 'Sao biển', 'Rệp', 'San hô'],
      right: ['Nảy chồi', 'Phân mảnh', 'Trinh sinh', 'Phân đôi'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Trinh sinh là cơ thể mới từ trứng không thụ tinh.'],
      solution: 'Thuỷ tức: nảy chồi; sao biển: phân mảnh; rệp: trinh sinh; san hô: phân đôi.',
    },
    {
      type: 'number',
      prompt:
        'Một loài ong có $2n = 32$. Mỗi tế bào cơ thể của ong đực (sinh ra bằng trinh sinh) có bao nhiêu nhiễm sắc thể?',
      answer: 16,
      hints: ['Ong đực phát triển từ trứng không thụ tinh.'],
      solution:
        'Trứng là giao tử đơn bội $n = 16$; ong đực từ trứng không thụ tinh nên có $16$ nhiễm sắc thể.',
    },
    {
      type: 'choice',
      prompt: 'Ở hình thức đẻ con (thai sinh), phôi nhận chất dinh dưỡng chủ yếu từ',
      options: [
        'cơ thể mẹ qua nhau thai',
        'noãn hoàng trong trứng',
        'môi trường nước bên ngoài',
        'dịch trong ống dẫn trứng',
      ],
      answer: 0,
      hints: ['Phôi thú phát triển trong tử cung.'],
      solution:
        'Ở thai sinh, phôi phát triển trong tử cung và nhận chất dinh dưỡng, khí từ mẹ qua nhau thai; noãn hoàng là nguồn nuôi phôi ở đẻ trứng và đẻ trứng thai.',
    },
    {
      type: 'choice',
      prompt: 'Ở người, sự thụ tinh thường xảy ra ở',
      options: [
        'khoảng $\\frac{1}{3}$ ống dẫn trứng phía gần loa vòi',
        'tử cung',
        'buồng trứng',
        'âm đạo',
      ],
      answer: 0,
      hints: ['Hợp tử còn phải phân bào trên đường về tử cung.'],
      solution:
        'Tinh trùng gặp trứng ở khoảng $\\frac{1}{3}$ ống dẫn trứng phía gần loa vòi; hợp tử vừa phân bào vừa di chuyển về tử cung để làm tổ.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi hormone với vai trò của nó trong điều hoà sinh tinh.',
      left: ['GnRH', 'FSH', 'LH', 'Testosterone'],
      right: [
        'Kích thích tuyến yên tiết FSH, LH',
        'Kích thích ống sinh tinh sản sinh tinh trùng',
        'Kích thích tế bào kẽ tiết testosterone',
        'Kích thích sản sinh tinh trùng; nồng độ cao ức chế ngược vùng dưới đồi và tuyến yên',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Đi theo thứ tự: vùng dưới đồi → tuyến yên → tinh hoàn.'],
      solution:
        'GnRH từ vùng dưới đồi kích thích tuyến yên; FSH tác động lên ống sinh tinh; LH lên tế bào kẽ tiết testosterone; testosterone kích thích sinh tinh và gây ức chế ngược khi tăng cao.',
    },
    {
      type: 'choice',
      prompt:
        'Một người dùng testosterone liều cao kéo dài để tăng cơ. Điều gì xảy ra với FSH, LH và sự sản sinh tinh trùng?',
      options: [
        'FSH, LH giảm; sản sinh tinh trùng giảm',
        'FSH, LH tăng; sản sinh tinh trùng tăng',
        'FSH, LH không đổi; sản sinh tinh trùng tăng',
        'FSH, LH tăng; sản sinh tinh trùng giảm',
      ],
      answer: 0,
      hints: ['Testosterone cao trong máu tác động thế nào lên vùng dưới đồi và tuyến yên?'],
      solution:
        'Testosterone cao gây ức chế ngược vùng dưới đồi và tuyến yên, GnRH, FSH, LH giảm; thiếu FSH và LH, tinh hoàn giảm sản sinh tinh trùng.',
    },
    {
      type: 'choice',
      prompt: 'Sau khi cắt bỏ hai buồng trứng, nồng độ FSH và LH trong máu thay đổi thế nào?',
      options: ['Tăng', 'Giảm', 'Không đổi', 'Giảm về $0$'],
      answer: 0,
      hints: ['Không còn progesterone, estrogen của buồng trứng thì còn ức chế ngược không?'],
      solution:
        'Không còn buồng trứng tiết progesterone, estrogen nên mất ức chế ngược; vùng dưới đồi và tuyến yên tăng tiết GnRH, FSH, LH.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các biện pháp điều khiển giới tính ở động vật.',
      options: [
        'Tách tinh trùng mang X và mang Y bằng lọc, li tâm, điện di',
        'Nuôi cá rô phi bột bằng 17-methyltestosterone kết hợp vitamin C',
        'Dùng bao cao su',
        'Thắt ống dẫn trứng',
      ],
      answers: [0, 1],
      hints: ['Hai lựa chọn còn lại là biện pháp tránh thai ở người.'],
      solution:
        'Tách tinh trùng X, Y và dùng hormone nhân tạo (17-methyltestosterone cho cá rô phi) là các biện pháp điều khiển giới tính; bao cao su và thắt ống dẫn trứng là biện pháp tránh thai.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi biện pháp tránh thai với cơ chế của nó.',
      left: ['Bao cao su', 'Thuốc tránh thai', 'Dụng cụ tử cung', 'Thắt ống dẫn trứng'],
      right: [
        'Ngăn tinh trùng đi vào cơ quan sinh dục nữ',
        'Ức chế tuyến yên, trứng không chín, không rụng',
        'Ngăn hợp tử làm tổ trong tử cung',
        'Trứng không di chuyển tới gặp tinh trùng',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Thuốc tránh thai dựa trên điều hoà ngược bằng hormone.'],
      solution:
        'Bao cao su ngăn tinh trùng vào cơ thể nữ; thuốc tránh thai ức chế ngược làm trứng không chín, không rụng; dụng cụ tử cung ngăn hợp tử làm tổ; thắt ống dẫn trứng làm trứng không gặp được tinh trùng.',
    },
    {
      type: 'choice',
      prompt: 'Sinh đẻ có kế hoạch là',
      options: [
        'điều chỉnh số con, thời điểm sinh và khoảng cách giữa các lần sinh để nâng cao chất lượng cuộc sống',
        'sinh càng nhiều con càng tốt khi kinh tế cho phép',
        'chỉ sinh con bằng thụ tinh trong ống nghiệm',
        'chọn giới tính của con trước khi sinh',
      ],
      answer: 0,
      hints: ['Mục tiêu là chất lượng cuộc sống của cá nhân, gia đình và xã hội.'],
      solution:
        'Sinh đẻ có kế hoạch là điều chỉnh số con, thời điểm sinh và khoảng cách giữa các lần sinh phù hợp với việc nâng cao chất lượng cuộc sống của cá nhân, gia đình và xã hội.',
    },
  ],
  takeaways: [
    'Sinh sản vô tính ở động vật: phân đôi, nảy chồi, phân mảnh, trinh sinh.',
    'Sinh sản hữu tính: hình thành giao tử, thụ tinh (ngoài hoặc trong), phát triển phôi; đẻ trứng, đẻ trứng thai, đẻ con.',
    'GnRH → FSH, LH → tinh hoàn (testosterone) hoặc buồng trứng (progesterone, estrogen); hormone sinh dục tăng cao ức chế ngược vùng dưới đồi và tuyến yên.',
    'Thần kinh, dinh dưỡng, chất kích thích ảnh hưởng đến sinh sản; con người điều khiển số con, giới tính ở vật nuôi và chủ động sinh đẻ có kế hoạch.',
  ],
};
