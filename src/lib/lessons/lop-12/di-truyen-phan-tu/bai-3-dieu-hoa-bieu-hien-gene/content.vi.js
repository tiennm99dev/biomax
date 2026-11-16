/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Khái niệm điều hoà biểu hiện gene; mô hình điều hoà operon lac ở E. coli khi môi trường có và không có lactose; ý nghĩa và ứng dụng của điều hoà biểu hiện gene.',
  intro:
    'Vi khuẩn E. coli sống trong ruột người thường dùng glucose. Khi ta uống sữa, lactose tràn đến, và chỉ sau vài phút vi khuẩn đã có đủ enzyme để phân giải lactose; khi lactose hết, chúng lại ngừng tạo enzyme đó. Làm sao một tế bào "biết" lúc nào cần bật hay tắt gene?',
  objectives: [
    'Nêu được khái niệm biểu hiện gene và điều hoà biểu hiện gene.',
    'Trình bày được cấu trúc operon lac và cơ chế điều hoà khi môi trường có và không có lactose (thí nghiệm của Jacob và Monod).',
    'Dự đoán được hoạt động của operon lac khi gene điều hoà, vùng vận hành hoặc vùng khởi động bị đột biến.',
    'Nêu được ý nghĩa của điều hoà biểu hiện gene đối với tế bào, cơ thể và một số ứng dụng thực tiễn.',
  ],
  sections: [
    {
      heading: 'Khái niệm điều hoà biểu hiện gene',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Biểu hiện gene và điều hoà biểu hiện gene',
          text: 'Biểu hiện gene là quá trình gene được phiên mã và dịch mã để tạo ra sản phẩm. Điều hoà biểu hiện gene là quá trình kiểm soát việc tạo ra sản phẩm của gene: gene có được biểu hiện hay không, vào lúc nào và với lượng bao nhiêu, tuỳ theo nhu cầu của tế bào và cơ thể.',
        },
        {
          type: 'p',
          text: 'Ở sinh vật nhân sơ, điều hoà biểu hiện gene chủ yếu diễn ra ở giai đoạn phiên mã. Ở sinh vật nhân thực, điều hoà diễn ra ở nhiều mức: trước phiên mã, phiên mã, sau phiên mã, dịch mã và sau dịch mã.',
        },
      ],
    },
    {
      heading: 'Điều hoà biểu hiện gene ở operon lac',
      blocks: [
        {
          type: 'p',
          text: 'Những năm 1950 – 1960, F. Jacob và J. Monod nhận thấy: khi môi trường có lactose, E. coli đồng loạt tổng hợp ba enzyme β-galactosidase, permease và transacetylase; khi không có lactose, lượng ba enzyme này rất thấp. Từ đó hai ông đề xuất mô hình operon: các gene cấu trúc có chức năng liên quan nằm liền nhau và được điều hoà chung.',
        },
        {
          type: 'table',
          caption: 'Các thành phần tham gia điều hoà operon lac',
          head: ['Thành phần', 'Vai trò'],
          rows: [
            [
              'Vùng khởi động P (promoter)',
              'Nơi RNA polymerase bám vào để khởi động phiên mã các gene cấu trúc',
            ],
            ['Vùng vận hành O (operator)', 'Nơi protein ức chế gắn vào để ngăn cản phiên mã'],
            ['Gene lacZ', 'Mã hoá β-galactosidase, enzyme phân giải lactose'],
            ['Gene lacY', 'Mã hoá permease, protein vận chuyển lactose vào tế bào'],
            ['Gene lacA', 'Mã hoá transacetylase'],
            [
              'Gene điều hoà lacI (không thuộc operon)',
              'Nằm trước operon, mã hoá protein ức chế có khả năng gắn vào vùng O',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Operon lac gồm P, O và ba gene cấu trúc Z, Y, A. Gene điều hoà lacI không thuộc operon và luôn hoạt động tạo protein ức chế, dù môi trường có hay không có lactose.',
        },
        {
          type: 'list',
          items: [
            'Khi môi trường không có lactose: protein ức chế gắn vào vùng O. RNA polymerase bám được vào vùng P nhưng không trượt qua được vùng O, nên Z, Y, A không được phiên mã.',
            'Khi môi trường có lactose: một lượng nhỏ lactose chuyển thành allolactose; chất này gắn vào protein ức chế, làm biến đổi cấu hình không gian của nó, nên protein ức chế không gắn được vào vùng O. RNA polymerase trượt qua O, phiên mã Z, Y, A tạo một phân tử mRNA, được dịch mã thành ba enzyme phân giải và vận chuyển lactose.',
            'Khi lactose đã bị phân giải hết: protein ức chế lại gắn vào vùng O, phiên mã dừng lại.',
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Lactose là chất cảm ứng',
          text: 'Lactose đóng vai trò chất cảm ứng: có lactose thì operon lac được "bật", hết lactose thì operon "tắt". Nhờ vậy, tế bào chỉ tạo enzyme khi cần.',
        },
      ],
    },
    {
      heading: 'Ý nghĩa và ứng dụng',
      blocks: [
        {
          type: 'list',
          items: [
            'Với tế bào: sản phẩm của gene chỉ được tạo ra khi cần, với lượng phù hợp, giúp tiết kiệm vật chất và năng lượng, thích nghi với môi trường. Ví dụ khi có sẵn tryptophan, E. coli ngừng tổng hợp các enzyme tạo tryptophan; khi nhiệt độ tăng cao bất thường, một số gene được kích hoạt tạo protein chống sốc nhiệt.',
            'Với sinh vật đa bào: mọi tế bào của cơ thể có cùng hệ gene, nhưng nhờ điều hoà biểu hiện gene, mỗi loại tế bào chỉ biểu hiện một số gene nhất định, nên tế bào biệt hoá thành các mô, cơ quan khác nhau, và cơ thể phát triển đúng theo từng giai đoạn.',
            'Rối loạn điều hoà biểu hiện gene có thể gây bệnh: ví dụ gene tiền ung thư (proto-oncogene) hoạt động quá mức trở thành gene gây ung thư (oncogene).',
          ],
        },
        {
          type: 'table',
          caption: 'Một số ứng dụng của điều hoà biểu hiện gene',
          head: ['Lĩnh vực', 'Ví dụ'],
          rows: [
            [
              'Y dược',
              'Thuốc tamoxifen ức chế thụ thể ERα trong điều trị ung thư vú; nuôi cấy và biệt hoá tế bào gốc',
            ],
            [
              'Trồng trọt',
              'Dùng chất kích hoạt gene để tế bào thực vật tái sinh thành cây; điều khiển chế độ chiếu sáng để cây ra hoa đúng vụ',
            ],
            [
              'Chăn nuôi',
              'Xử lí trứng cá rô phi đã thụ tinh bằng hormone sinh dục đực để thu toàn cá đực, lớn nhanh',
            ],
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Bật, tắt operon lac',
    instruction:
      'Thêm lactose rồi bấm "Thời gian trôi" nhiều lần: quan sát protein ức chế rời vùng O, gene Z, Y, A được phiên mã, enzyme phân giải lactose, rồi operon tắt khi lactose hết. Sau đó chọn một chủng đột biến (lacI, O hoặc P) và dự đoán trước điều sẽ xảy ra.',
  },
  examples: [
    {
      problem:
        'Ở một chủng E. coli, gene lacI bị đột biến làm protein ức chế mất khả năng gắn vào vùng O. Các gene Z, Y, A của chủng này hoạt động thế nào khi môi trường có và không có lactose?',
      steps: [
        'Gene lacI vẫn tạo protein ức chế, nhưng protein này không gắn được vào vùng O.',
        'Khi không có lactose: vùng O vẫn để trống, RNA polymerase trượt qua O và phiên mã Z, Y, A.',
        'Khi có lactose: protein ức chế vốn đã không gắn được vào O, nên Z, Y, A cũng được phiên mã.',
      ],
      answer:
        'Z, Y, A luôn được phiên mã trong cả hai điều kiện; khi không có lactose, tế bào tạo enzyme vô ích, lãng phí vật chất và năng lượng.',
    },
    {
      problem:
        'Một chủng E. coli bị đột biến ở vùng khởi động P làm RNA polymerase không bám được. Nuôi chủng này trong môi trường chỉ có lactose là nguồn carbon. Dự đoán kết quả.',
      steps: [
        'Có lactose nên allolactose vẫn gắn vào protein ức chế, vùng O được giải phóng.',
        'Nhưng RNA polymerase không bám được vào P, nên không có phiên mã Z, Y, A.',
        'Tế bào không tạo được β-galactosidase và permease nên không sử dụng được lactose.',
      ],
      answer:
        'Z, Y, A không bao giờ được phiên mã; chủng này không phân giải được lactose và khó sinh trưởng trong môi trường đó.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Trong mô hình operon lac, protein ức chế liên kết với',
      options: ['vùng vận hành O', 'vùng khởi động P', 'gene lacZ', 'gene điều hoà lacI'],
      answer: 0,
      hints: ['Vùng này nằm giữa vùng khởi động và các gene cấu trúc.'],
      solution:
        'Protein ức chế gắn vào vùng vận hành O, chặn RNA polymerase (đã bám ở P) trượt tới các gene cấu trúc.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các thành phần thuộc operon lac.',
      options: [
        'Vùng khởi động P',
        'Vùng vận hành O',
        'Gene lacZ, lacY, lacA',
        'Gene điều hoà lacI',
      ],
      answers: [0, 1, 2],
      hints: ['Một thành phần nằm trước operon và không thuộc operon.'],
      solution:
        'Operon lac gồm P, O và ba gene cấu trúc Z, Y, A. Gene điều hoà lacI nằm ngoài operon.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi gene cấu trúc với sản phẩm của nó.',
      left: ['lacZ', 'lacY', 'lacA'],
      right: [
        'β-galactosidase phân giải lactose',
        'Permease vận chuyển lactose vào tế bào',
        'Transacetylase',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Gene lacY mã hoá protein vận chuyển trên màng.'],
      solution: 'lacZ → β-galactosidase; lacY → permease; lacA → transacetylase.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các sự kiện xảy ra khi đưa lactose vào môi trường nuôi E. coli.',
      items: [
        'Allolactose gắn vào protein ức chế',
        'Protein ức chế biến đổi cấu hình, rời khỏi vùng O',
        'RNA polymerase trượt qua O, phiên mã Z, Y, A',
        'Ba enzyme được tổng hợp, lactose bị phân giải',
        'Lactose hết, protein ức chế lại gắn vào vùng O',
      ],
      answer: [0, 1, 2, 3, 4],
      hints: ['Lactose phải tác động lên protein ức chế trước thì vùng O mới được giải phóng.'],
      solution:
        'Allolactose gắn vào protein ức chế → protein ức chế rời O → phiên mã Z, Y, A → tổng hợp enzyme, phân giải lactose → hết lactose, protein ức chế gắn lại O.',
    },
    {
      type: 'choice',
      prompt:
        'Một chủng E. coli có vùng O bị đột biến làm protein ức chế không gắn được. Ở chủng này, các gene Z, Y, A',
      options: [
        'được phiên mã cả khi có và khi không có lactose',
        'chỉ được phiên mã khi có lactose',
        'không bao giờ được phiên mã',
        'chỉ được phiên mã khi không có lactose',
      ],
      answer: 0,
      hints: ['Hãy hỏi: còn gì chặn RNA polymerase khi vùng O luôn để trống?'],
      solution:
        'Protein ức chế không gắn được vào vùng O đột biến, nên không có gì chặn RNA polymerase: Z, Y, A luôn được phiên mã.',
    },
    {
      type: 'choice',
      prompt: 'Nhận định nào đúng về gene điều hoà lacI?',
      options: [
        'Luôn được phiên mã, tạo protein ức chế dù có hay không có lactose',
        'Chỉ được phiên mã khi môi trường có lactose',
        'Là một thành phần của operon lac',
        'Mã hoá enzyme phân giải lactose',
      ],
      answer: 0,
      hints: ['Lactose tác động vào protein ức chế, không tác động vào gene lacI.'],
      solution:
        'Gene lacI nằm ngoài operon và hoạt động liên tục; lactose chỉ làm protein ức chế mất khả năng gắn vào O.',
    },
    {
      type: 'text',
      prompt:
        'Nhóm gene cấu trúc có chức năng liên quan, nằm liền nhau và được điều hoà chung một vùng khởi động, một vùng vận hành ở vi khuẩn gọi là gì?',
      accept: ['operon', 'một operon'],
      hints: ['Đây là tên mô hình do Jacob và Monod đề xuất.'],
      solution: 'Đó là operon, ví dụ operon lac ở E. coli.',
    },
    {
      type: 'choice',
      prompt:
        'Vì sao các tế bào trong cơ thể người có cùng hệ gene nhưng lại khác nhau về hình dạng và chức năng?',
      options: [
        'Mỗi loại tế bào biểu hiện những gene khác nhau nhờ điều hoà biểu hiện gene',
        'Mỗi loại tế bào mang một bộ gene khác nhau',
        'Các tế bào bị đột biến gene khác nhau',
        'Tế bào biệt hoá đã mất phần lớn DNA',
      ],
      answer: 0,
      hints: ['Mọi tế bào sinh dưỡng đều được tạo ra từ hợp tử qua nguyên phân.'],
      solution:
        'Các tế bào cùng hệ gene; sự khác nhau do điều hoà biểu hiện gene: mỗi loại tế bào chỉ "bật" một số gene nhất định, nên biệt hoá thành mô, cơ quan khác nhau.',
    },
  ],
  takeaways: [
    'Điều hoà biểu hiện gene là kiểm soát lượng sản phẩm của gene được tạo ra, tuỳ nhu cầu của tế bào và cơ thể.',
    'Operon lac gồm vùng khởi động P, vùng vận hành O và các gene cấu trúc Z, Y, A; gene điều hoà lacI nằm ngoài operon, tạo protein ức chế.',
    'Không có lactose: protein ức chế gắn vào O, gene Z, Y, A không phiên mã. Có lactose: allolactose làm protein ức chế rời O, gene được phiên mã.',
    'Điều hoà biểu hiện gene giúp tiết kiệm năng lượng, giúp tế bào biệt hoá và cơ thể phát triển bình thường; rối loạn có thể gây bệnh như ung thư.',
  ],
};
