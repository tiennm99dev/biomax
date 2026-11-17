/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Tiến hoá lớn: sự hình thành loài và các đơn vị phân loại trên loài; sự phát sinh sự sống qua tiến hoá hoá học, tiền sinh học và sinh học; sinh giới qua các đại địa chất và các lần tuyệt chủng hàng loạt; cây phát sinh chủng loại; quá trình phát sinh loài người.',
  intro:
    'Chim và cá sấu trông chẳng giống nhau chút nào, còn cá sấu và thằn lằn thì rất giống nhau. Vậy mà bằng chứng phân tử và hoá thạch cho thấy cá sấu có họ hàng gần với chim hơn với thằn lằn. Làm thế nào các nhà khoa học vẽ được "cây gia phả" của toàn bộ sinh giới qua hàng trăm triệu năm?',
  objectives: [
    'Phân biệt được tiến hoá lớn và tiến hoá nhỏ.',
    'Trình bày được các giai đoạn phát sinh sự sống trên Trái Đất và sự phát triển của sinh giới qua các đại địa chất.',
    'Nêu được khái niệm phát sinh chủng loại; đọc được cây phát sinh chủng loại để xác định quan hệ họ hàng giữa các loài.',
    'Trình bày được các giai đoạn chính trong quá trình phát sinh loài người.',
  ],
  sections: [
    {
      heading: 'Tiến hoá lớn',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tiến hoá lớn',
          text: 'Tiến hoá lớn là quá trình hình thành loài và các đơn vị phân loại trên loài (chi, họ, bộ, lớp, ngành, ...) cũng như toàn bộ sinh giới. Ví dụ: sự hình thành tế bào nhân thực từ tế bào nhân sơ, sự hình thành chi năm ngón khi động vật chuyển từ nước lên cạn.',
        },
        {
          type: 'table',
          head: ['Tiêu chí', 'Tiến hoá nhỏ', 'Tiến hoá lớn'],
          rows: [
            [
              'Nội dung',
              'Biến đổi tần số allele, tần số kiểu gene của quần thể; có thể dẫn đến loài mới',
              'Hình thành loài và các đơn vị phân loại trên loài',
            ],
            [
              'Quy mô, thời gian',
              'Phạm vi hẹp, thời gian tương đối ngắn',
              'Phạm vi rộng, thời gian địa chất rất dài',
            ],
            [
              'Cách nghiên cứu',
              'Có thể nghiên cứu bằng thực nghiệm',
              'Nghiên cứu gián tiếp qua hoá thạch, giải phẫu so sánh, bằng chứng phân tử',
            ],
          ],
          caption: 'Ranh giới giữa tiến hoá nhỏ và tiến hoá lớn là sự hình thành loài mới.',
        },
      ],
    },
    {
      heading: 'Sự phát sinh và phát triển của sự sống',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Tiến hoá hoá học (hơn $4$ tỉ năm trước): từ các chất vô cơ hình thành các chất hữu cơ đơn giản rồi phức tạp. Oparin và Haldane cho rằng chúng hình thành nhờ năng lượng của sấm sét, núi lửa, tia tử ngoại; năm $1953$, Miller và Urey phóng tia lửa điện qua hỗn hợp khí mô phỏng khí quyển nguyên thuỷ và thu được các amino acid. Chất hữu cơ cũng có thể đến từ thiên thạch. Phân tử tự nhân đôi đầu tiên có lẽ là RNA.',
            'Tiến hoá tiền sinh học (khoảng $4{,}2 - 3{,}8$ tỉ năm trước): lớp màng phospholipid bao lấy các đại phân tử tạo thành các giọt (protobiont); giọt nào trao đổi chất, lớn lên và phân chia được thì trở thành tế bào sơ khai.',
            'Tiến hoá sinh học (từ ít nhất $3{,}5$ tỉ năm trước đến nay): chọn lọc tự nhiên biến tế bào sơ khai thành sinh vật nhân sơ; tế bào nhân thực xuất hiện khoảng $1{,}8$ tỉ năm trước (ti thể và lục lạp có nguồn gốc từ vi khuẩn được thực bào theo thuyết nội cộng sinh); từ đơn bào tiến hoá thành đa bào và toàn bộ sinh giới ngày nay.',
          ],
        },
        {
          type: 'table',
          head: ['Đại', 'Thời gian (triệu năm trước)', 'Sinh vật điển hình'],
          rows: [
            ['Thái cổ', 'khoảng $4\\,000 - 2\\,500$', 'Sinh vật nhân sơ'],
            [
              'Nguyên sinh',
              'khoảng $2\\,500 - 541$',
              'Sinh vật nhân thực, tảo, động vật không xương sống ở biển',
            ],
            [
              'Cổ sinh',
              'khoảng $541 - 252$',
              'Cá, thực vật và động vật lên cạn, lưỡng cư, bò sát đầu tiên',
            ],
            [
              'Trung sinh',
              'khoảng $252 - 66$',
              'Bò sát (khủng long) ngự trị, thú và chim xuất hiện, thực vật hạt kín',
            ],
            [
              'Tân sinh',
              'khoảng $66$ đến nay',
              'Thú, chim, côn trùng, thực vật hạt kín phát triển; loài người xuất hiện',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Ranh giới giữa các đại, các kỉ thường đánh dấu những biến đổi lớn của Trái Đất gây tuyệt chủng hàng loạt; sau đó các loài sống sót phát triển bùng nổ, chiếm các ổ sinh thái còn trống. Đã có năm lần tuyệt chủng hàng loạt; cuối kỉ Permian khoảng $96\\%$ số loài sinh vật biển bị tuyệt chủng, cuối kỉ Phấn trắng hầu hết khủng long bị tuyệt chủng. Phần lớn các loài từng sống trên Trái Đất đã tuyệt chủng.',
        },
      ],
    },
    {
      heading: 'Cây phát sinh chủng loại',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phát sinh chủng loại',
          text: 'Phát sinh chủng loại là lịch sử hình thành các đơn vị phân loại từ tổ tiên chung và quan hệ tiến hoá giữa chúng. Sơ đồ cây phát sinh chủng loại (cây sự sống) là sơ đồ hình cây phân nhánh: từ một gốc chung toả ra các nhánh; mỗi điểm phân nhánh là một tổ tiên chung.',
        },
        {
          type: 'list',
          items: [
            'Hai nhóm có tổ tiên chung gần nhất càng gần hiện tại (điểm phân nhánh càng muộn) thì quan hệ họ hàng càng gần.',
            'Cây được xây dựng dựa trên các đặc điểm tương đồng ở mọi cấp độ: phân tử (DNA, protein), nhiễm sắc thể, tế bào, hình thái, giải phẫu, tập tính; bằng chứng phân tử là chính xác nhất.',
            'Dựa trên trình tự rRNA, sinh giới được chia thành ba lãnh giới: Vi khuẩn, Vi khuẩn cổ và Nhân thực, cùng tiến hoá từ một tổ tiên chung.',
            'Cây phát sinh chủng loại chỉ là giả thuyết, có thể được điều chỉnh khi có thêm bằng chứng mới.',
          ],
        },
      ],
    },
    {
      heading: 'Quá trình phát sinh loài người',
      blocks: [
        {
          type: 'p',
          text: 'Loài người phát sinh dưới tác động của các nhân tố sinh học (biến dị di truyền, chọn lọc tự nhiên, ...) và các nhân tố xã hội (lao động, tiếng nói, tư duy, ...). Người và tinh tinh có chung tổ tiên khoảng $6$ triệu năm trước.',
        },
        {
          type: 'table',
          head: ['Giai đoạn', 'Thời gian', 'Đặc điểm'],
          rows: [
            [
              'Ardipithecus',
              'khoảng $4{,}4$ triệu năm trước',
              'Đi thẳng nhưng vẫn leo trèo giỏi; ăn tạp',
            ],
            [
              'Australopithecus (người vượn phương Nam)',
              '$4 - 2{,}5$ triệu năm trước',
              'Đi thẳng bằng hai chân; dùng cành cây, hòn đá có sẵn làm công cụ',
            ],
            [
              'Homo habilis (người khéo léo)',
              'khoảng $2{,}5$ triệu năm trước',
              'Hộp sọ $600 - 800\\ \\mathrm{cm^3}$; chế tác công cụ đá; sống thành đàn',
            ],
            [
              'Homo erectus (người đứng thẳng)',
              'từ khoảng $1{,}9$ triệu năm trước',
              'Đi thẳng nhanh nhẹn, dùng lửa, di cư khỏi châu Phi',
            ],
            [
              'Homo sapiens (người hiện đại)',
              'từ khoảng $300\\,000 - 200\\,000$ năm trước',
              'Hộp sọ $1\\,000 - 1\\,850\\ \\mathrm{cm^3}$, lồi cằm rõ, tiếng nói phát triển, công cụ tinh xảo, có văn hoá, nghệ thuật',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Người Neanderthal (Homo neanderthalensis) sống ở châu Âu, Tây Á, biết dùng lửa và chế tác công cụ đá, nhưng là một nhánh riêng đã tuyệt chủng, không phải tổ tiên của người hiện đại. Homo sapiens xuất hiện ở châu Phi, rời châu Phi khoảng $60\\,000$ năm trước rồi toả đi khắp các châu lục. Trong nhánh tiến hoá dẫn đến loài người, mọi loài khác đều đã tuyệt chủng, chỉ còn Homo sapiens.',
        },
      ],
    },
  ],
  explore: {
    title: 'Cây phát sinh chủng loại theo thời gian địa chất',
    instruction:
      'Chọn thang thời gian (từ $450$ triệu năm đến $7$ triệu năm gần đây), rồi chạm vào tên hai loài để tô đỏ đường nối chúng với tổ tiên chung gần nhất. So sánh thời điểm phân nhánh để biết loài nào họ hàng gần hơn.',
  },
  examples: [
    {
      problem:
        'Trên cây phát sinh chủng loại động vật có xương sống, chim và cá sấu có tổ tiên chung gần nhất khoảng $245$ triệu năm trước, chim và thằn lằn khoảng $280$ triệu năm trước. Cá sấu có họ hàng gần với chim hay với thằn lằn hơn? Vì sao?',
      steps: [
        'Tổ tiên chung của cá sấu và chim (khoảng $245$ triệu năm trước) sống muộn hơn tổ tiên chung của cá sấu và thằn lằn (cũng là điểm phân nhánh khoảng $280$ triệu năm trước, nơi nhánh thằn lằn tách ra).',
        'Hai nhóm tách nhau càng muộn thì có chung lịch sử tiến hoá càng dài nên quan hệ họ hàng càng gần.',
        'Hình dạng bên ngoài giống nhau (cá sấu, thằn lằn đều có vảy, bò sát) không quyết định quan hệ họ hàng; quan hệ được xác định bằng thứ tự phân nhánh.',
      ],
      answer: 'Cá sấu có họ hàng gần với chim hơn với thằn lằn.',
    },
    {
      problem:
        'Nếu thu gọn $4{,}6$ tỉ năm lịch sử Trái Đất vào một ngày $24$ giờ, loài người hiện đại (xuất hiện khoảng $300\\,000$ năm trước) xuất hiện bao nhiêu giây trước nửa đêm?',
      steps: [
        'Một ngày có $24 \\cdot 3\\,600 = 86\\,400$ giây ứng với $4\\,600\\,000\\,000$ năm.',
        'Tỉ lệ thời gian: $\\dfrac{300\\,000}{4\\,600\\,000\\,000} \\approx 0{,}0000652$.',
        'Số giây: $0{,}0000652 \\cdot 86\\,400 \\approx 5{,}6$ giây.',
      ],
      answer:
        'Chỉ khoảng $5{,}6$ giây trước nửa đêm: loài người là "người đến sau" trong lịch sử sự sống.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Tiến hoá lớn là quá trình',
      options: [
        'hình thành loài và các đơn vị phân loại trên loài như chi, họ, bộ',
        'biến đổi tần số allele trong quần thể',
        'hình thành các đặc điểm thích nghi trong quần thể',
        'thay đổi kiểu hình của cá thể theo môi trường',
      ],
      answer: 0,
      hints: ['Tiến hoá lớn diễn ra trên quy mô rộng, trong thời gian địa chất.'],
      solution:
        'Tiến hoá lớn là quá trình hình thành loài và các đơn vị phân loại trên loài. Biến đổi tần số allele trong quần thể là tiến hoá nhỏ.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp ba giai đoạn tiến hoá của sự sống theo thứ tự thời gian.',
      items: ['Tiến hoá sinh học', 'Tiến hoá hoá học', 'Tiến hoá tiền sinh học'],
      answer: [1, 2, 0],
      hints: ['Trước khi có tế bào phải có các chất hữu cơ.'],
      solution:
        'Tiến hoá hoá học (hình thành chất hữu cơ) → tiến hoá tiền sinh học (hình thành tế bào sơ khai) → tiến hoá sinh học (từ tế bào sơ khai đến toàn bộ sinh giới).',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các đại địa chất từ cổ nhất đến gần nhất.',
      items: ['Trung sinh', 'Thái cổ', 'Tân sinh', 'Nguyên sinh', 'Cổ sinh'],
      answer: [1, 3, 4, 0, 2],
      hints: ['Đại Tân sinh là đại hiện nay.'],
      solution: 'Thái cổ → Nguyên sinh → Cổ sinh → Trung sinh → Tân sinh.',
    },
    {
      type: 'choice',
      prompt:
        'Trên một cây phát sinh chủng loại, người và chuột có tổ tiên chung khoảng $90$ triệu năm trước, người và ếch khoảng $352$ triệu năm trước. Kết luận nào đúng?',
      options: [
        'Người có họ hàng gần với chuột hơn với ếch',
        'Người có họ hàng gần với ếch hơn với chuột',
        'Chuột tiến hoá từ ếch',
        'Người tiến hoá từ chuột',
      ],
      answer: 0,
      hints: ['Điểm phân nhánh càng muộn thì họ hàng càng gần.'],
      solution:
        'Tổ tiên chung của người và chuột sống muộn hơn ($90$ so với $352$ triệu năm trước) nên người có họ hàng gần với chuột hơn. Các loài hiện nay không tiến hoá từ nhau mà từ tổ tiên chung.',
    },
    {
      type: 'number',
      prompt:
        'Theo cây phát sinh chủng loại, người tách khỏi tinh tinh khoảng $6$ triệu năm trước và tách khỏi khỉ đột khoảng $9$ triệu năm trước. Nhánh dẫn đến người và tinh tinh đã tiến hoá chung bao nhiêu triệu năm sau khi tách khỏi nhánh khỉ đột?',
      answer: 3,
      unit: 'triệu năm',
      hints: ['Lấy hai thời điểm phân nhánh trừ cho nhau.'],
      solution: '$9 - 6 = 3$ triệu năm.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các dạng người và người vượn theo thứ tự xuất hiện, từ sớm nhất.',
      items: ['Homo erectus', 'Australopithecus', 'Homo sapiens', 'Ardipithecus', 'Homo habilis'],
      answer: [3, 1, 4, 0, 2],
      hints: ['Ardipithecus là tổ tiên cổ nhất được biết của nhánh người.'],
      solution:
        'Ardipithecus (khoảng $4{,}4$ triệu năm) → Australopithecus ($4 - 2{,}5$ triệu năm) → Homo habilis (khoảng $2{,}5$ triệu năm) → Homo erectus (từ khoảng $1{,}9$ triệu năm) → Homo sapiens (khoảng $300\\,000 - 200\\,000$ năm).',
    },
    {
      type: 'choice',
      prompt: 'Phát biểu nào sau đây về người Neanderthal là đúng?',
      options: [
        'Là một nhánh riêng đã tuyệt chủng, không phải tổ tiên của người hiện đại',
        'Là tổ tiên trực tiếp của người hiện đại',
        'Chưa biết dùng lửa và chưa chế tác công cụ',
        'Sống cùng thời với Ardipithecus',
      ],
      answer: 0,
      hints: ['Xem vị trí của nhánh Neanderthal trên cây phát sinh loài người.'],
      solution:
        'Người Neanderthal và người hiện đại tách nhau từ tổ tiên chung; Neanderthal biết dùng lửa, chế tác công cụ đá nhưng là nhánh riêng đã tuyệt chủng.',
    },
    {
      type: 'number',
      prompt:
        'Thu gọn $4{,}6$ tỉ năm lịch sử Trái Đất vào một ngày $24$ giờ. Khủng long tuyệt chủng khoảng $66$ triệu năm trước. Sự kiện này xảy ra bao nhiêu phút trước nửa đêm? (làm tròn đến hàng phần mười)',
      answer: 20.7,
      unit: 'phút',
      tolerance: 0.1,
      hints: ['Một ngày có $1\\,440$ phút.', 'Số phút $= \\dfrac{66}{4\\,600} \\cdot 1\\,440$.'],
      solution:
        '$\\dfrac{66}{4\\,600} \\cdot 1\\,440 \\approx 20{,}66 \\approx 20{,}7$ phút trước nửa đêm.',
    },
    {
      type: 'multi',
      prompt: 'Cây phát sinh chủng loại được xây dựng dựa vào những bằng chứng nào?',
      options: [
        'Trình tự DNA và protein',
        'Hoá thạch',
        'Đặc điểm hình thái, giải phẫu',
        'Kích thước cơ thể lớn hay nhỏ',
        'Màu sắc cơ thể giống nhau',
      ],
      answers: [0, 1, 2],
      hints: ['Cần các đặc điểm tương đồng có nguồn gốc chung, không phải giống nhau bề ngoài.'],
      solution:
        'Cây được xây dựng từ các đặc điểm tương đồng ở cấp phân tử, tế bào, hình thái, giải phẫu cùng với hoá thạch. Kích thước hay màu sắc giống nhau có thể do thích nghi với môi trường giống nhau, không phản ánh họ hàng.',
    },
  ],
  takeaways: [
    'Tiến hoá lớn là quá trình hình thành loài và các đơn vị phân loại trên loài; ranh giới với tiến hoá nhỏ là sự hình thành loài mới.',
    'Sự sống phát sinh qua tiến hoá hoá học, tiền sinh học và sinh học; sinh giới phát triển qua các đại Thái cổ, Nguyên sinh, Cổ sinh, Trung sinh, Tân sinh, xen kẽ các lần tuyệt chủng hàng loạt.',
    'Cây phát sinh chủng loại thể hiện quan hệ tiến hoá: điểm phân nhánh càng muộn thì họ hàng càng gần.',
    'Loài người: Ardipithecus → Australopithecus → Homo habilis → Homo erectus → Homo sapiens; chỉ còn Homo sapiens tồn tại.',
  ],
};
