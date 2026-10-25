/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Tế bào là đơn vị cấu trúc và chức năng của mọi cơ thể sống; tế bào có nhiều hình dạng, kích thước khác nhau, phù hợp với chức năng, và đa số chỉ quan sát được dưới kính hiển vi.',
  intro:
    'Ngôi nhà được xây từ những viên gạch. Vậy cây lúa, con mèo hay chính cơ thể em được xây nên từ những "viên gạch" nào? Câu trả lời là tế bào. Có tế bào to bằng hạt tấm như trứng cá, nhưng phần lớn tế bào nhỏ đến mức hàng trăm tế bào xếp cạnh nhau mới dài bằng $1$ mm. Bài học này giúp em hiểu vì sao tế bào là đơn vị cơ bản của sự sống, và tế bào có những hình dạng, kích thước như thế nào.',
  objectives: [
    'Nêu được khái niệm tế bào và giải thích được vì sao tế bào là đơn vị cơ bản (đơn vị cấu trúc và chức năng) của cơ thể sống.',
    'Nhận biết được tế bào có nhiều hình dạng khác nhau và giải thích được hình dạng phù hợp với chức năng.',
    'So sánh được kích thước của một số loại tế bào, đổi được đơn vị micromet ($\\mu\\text{m}$) sang milimet và ngược lại.',
    'Biết lựa chọn mắt thường, kính lúp hay kính hiển vi để quan sát tế bào theo kích thước của nó.',
  ],
  sections: [
    {
      heading: 'Tế bào là đơn vị cơ bản của sự sống',
      blocks: [
        {
          type: 'p',
          text: 'Khi quan sát một lát mỏng vỏ cây, lá cây hay da người dưới kính hiển vi, các nhà khoa học đều thấy chúng gồm rất nhiều ô nhỏ xếp sát nhau. Những ô nhỏ đó là tế bào. Mọi sinh vật, từ vi khuẩn nhỏ bé đến cây đa hay con voi, đều được cấu tạo từ tế bào.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Tế bào',
          text: 'Tế bào là đơn vị cấu trúc và chức năng cơ bản của cơ thể sống. Có sinh vật chỉ gồm một tế bào (vi khuẩn, trùng roi, nấm men); có sinh vật gồm rất nhiều tế bào (cây xanh, động vật, con người).',
        },
        {
          type: 'list',
          items: [
            'Đơn vị cấu trúc: mọi cơ thể sống đều được cấu tạo từ tế bào, giống như ngôi nhà được xây từ những viên gạch.',
            'Đơn vị chức năng: tế bào thực hiện được các hoạt động sống cơ bản: trao đổi chất và chuyển hoá năng lượng, sinh trưởng (lớn lên), sinh sản, cảm ứng.',
            'Các tế bào cùng loại tập hợp thành mô, các mô tạo nên cơ quan, các cơ quan tạo nên hệ cơ quan và cơ thể. Cơ thể lớn hay nhỏ chủ yếu do có nhiều hay ít tế bào: con voi có nhiều tế bào hơn con chuột, chứ tế bào của voi không to hơn tế bào chuột bao nhiêu.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Ví dụ',
          text: 'Một con vi khuẩn chỉ là một tế bào nhưng vẫn tự lấy thức ăn, lớn lên và sinh sản. Ở người, mỗi hồng cầu vận chuyển khí oxygen, mỗi tế bào cơ co lại để cơ thể cử động. Không có tế bào thì không có sự sống.',
        },
      ],
    },
    {
      heading: 'Hình dạng và kích thước của tế bào',
      blocks: [
        {
          type: 'p',
          text: 'Tế bào có hình dạng rất đa dạng: hình cầu, hình đĩa, hình que, hình sao, hình nhiều cạnh, hình chữ nhật... Mỗi loại tế bào có hình dạng phù hợp với chức năng mà nó đảm nhận.',
        },
        {
          type: 'table',
          caption: 'Hình dạng của một số loại tế bào và chức năng',
          head: ['Tế bào', 'Hình dạng', 'Liên hệ với chức năng'],
          rows: [
            [
              'Hồng cầu người',
              'Hình đĩa lõm hai mặt',
              'Diện tích bề mặt lớn, dễ trao đổi khí; dễ uốn mình đi qua mạch máu nhỏ',
            ],
            [
              'Tế bào thần kinh',
              'Hình sao, có nhiều tua, có sợi dài',
              'Nối với nhiều tế bào khác, dẫn truyền xung thần kinh đi xa',
            ],
            ['Tế bào biểu bì da', 'Dẹt, xếp sát nhau', 'Che phủ, bảo vệ cơ thể'],
            [
              'Vi khuẩn E. coli',
              'Hình que (hình trụ)',
              'Sống đơn độc, tự thực hiện mọi hoạt động sống',
            ],
            ['Tế bào biểu bì lá, vảy hành', 'Gần hình chữ nhật', 'Xếp khít thành lớp bảo vệ'],
          ],
        },
        {
          type: 'p',
          text: 'Kích thước tế bào cũng khác nhau giữa các loài và giữa các cơ quan của cùng một cơ thể. Phần lớn tế bào rất nhỏ, được đo bằng micromet.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Micromet',
          text: 'Micromet, kí hiệu $\\mu\\text{m}$, bằng một phần nghìn milimet: $1\\ \\text{mm} = 1000\\ \\mu\\text{m}$, hay $1\\ \\mu\\text{m} = 0{,}001\\ \\text{mm}$.',
        },
        {
          type: 'table',
          caption: 'Kích thước gần đúng của một số loại tế bào',
          head: ['Tế bào', 'Kích thước', 'Quan sát bằng'],
          rows: [
            ['Vi khuẩn E. coli', 'dài khoảng $2\\ \\mu\\text{m}$', 'Kính hiển vi'],
            [
              'Tế bào nấm men',
              'khoảng $6\\ \\mu\\text{m} \\times 5\\ \\mu\\text{m}$',
              'Kính hiển vi',
            ],
            ['Hồng cầu người', 'đường kính khoảng $7{,}5\\ \\mu\\text{m}$', 'Kính hiển vi'],
            ['Tế bào niêm mạc miệng', 'khoảng $50$ đến $60\\ \\mu\\text{m}$', 'Kính hiển vi'],
            [
              'Tế bào biểu bì vảy hành',
              'dài khoảng $200$ đến $400\\ \\mu\\text{m}$',
              'Kính hiển vi (kính lúp chỉ thấy hình dạng)',
            ],
            ['Tế bào trứng cá', 'đường kính khoảng $1\\ \\text{mm}$', 'Mắt thường, kính lúp'],
            ['Tế bào trứng gà (lòng đỏ)', 'đường kính khoảng $3\\ \\text{cm}$', 'Mắt thường'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Chọn dụng cụ quan sát',
          text: 'Mắt thường chỉ phân biệt được những vật từ khoảng $0{,}1\\ \\text{mm} = 100\\ \\mu\\text{m}$ trở lên. Kính lúp phóng to vật từ $3$ đến $20$ lần; kính hiển vi quang học phóng to từ $40$ đến $3000$ lần. Vì vậy đa số tế bào phải quan sát bằng kính hiển vi; chỉ một số tế bào lớn như tế bào trứng cá, trứng gà mới thấy được bằng mắt thường. Ngoài ra, tế bào thường trong suốt và xếp sát nhau, nên khi quan sát người ta còn nhuộm màu cho dễ thấy.',
        },
        {
          type: 'p',
          text: 'Ở phần khám phá, em kéo thanh độ phóng đại và chọn từng loại tế bào để xem ảnh của nó to dần lên. Thước bên dưới chia theo luỹ thừa của $10$: mỗi vạch lớn gấp $10$ lần vạch trước, nên các tế bào nhỏ $2\\ \\mu\\text{m}$ và lớn $1\\ \\text{mm}$ cùng nằm vừa trên một thước.',
        },
      ],
    },
  ],
  explore: {
    title: 'Phóng to để thấy tế bào',
    instruction:
      'Chọn một loại tế bào rồi kéo thanh độ phóng đại từ $1$ lần (mắt thường) đến $1000$ lần (kính hiển vi). Theo dõi khi nào tế bào chỉ là một chấm và khi nào em thấy rõ hình dạng của nó; vùng xanh trên thước là những kích thước nhìn rõ được ở độ phóng đại đang chọn.',
  },
  examples: [
    {
      problem:
        'Tế bào trứng cá có đường kính khoảng $1$ mm, vi khuẩn E. coli dài khoảng $2\\ \\mu\\text{m}$. Tế bào trứng cá lớn gấp bao nhiêu lần vi khuẩn E. coli?',
      steps: [
        'Đổi về cùng đơn vị: $1\\ \\text{mm} = 1000\\ \\mu\\text{m}$.',
        'Lập tỉ số: $1000 : 2 = 500$.',
      ],
      answer: 'Tế bào trứng cá lớn gấp khoảng $500$ lần vi khuẩn E. coli.',
    },
    {
      problem:
        'Hồng cầu người có đường kính khoảng $7{,}5\\ \\mu\\text{m}$. Em cần dùng mắt thường, kính lúp hay kính hiển vi để thấy rõ hình dạng của hồng cầu?',
      steps: [
        'Mắt thường chỉ phân biệt được vật từ khoảng $100\\ \\mu\\text{m}$ trở lên, mà $7{,}5\\ \\mu\\text{m}$ nhỏ hơn nhiều, nên mắt thường không thấy.',
        'Kính lúp phóng to tối đa khoảng $20$ lần: ảnh dài $7{,}5 \\cdot 20 = 150\\ \\mu\\text{m} = 0{,}15$ mm, chỉ là một chấm nhỏ, chưa thấy được hình đĩa lõm.',
        'Kính hiển vi phóng to $400$ lần: ảnh dài $7{,}5 \\cdot 400 = 3000\\ \\mu\\text{m} = 3$ mm, đủ lớn để thấy rõ hình dạng.',
      ],
      answer: 'Cần dùng kính hiển vi quang học.',
    },
    {
      problem:
        'Vì sao hồng cầu có hình đĩa lõm hai mặt, còn tế bào thần kinh có hình sao với nhiều tua?',
      steps: [
        'Hồng cầu vận chuyển khí oxygen và carbon dioxide. Hình đĩa lõm hai mặt làm tăng diện tích bề mặt nên trao đổi khí nhanh, và giúp hồng cầu uốn cong để đi qua những mạch máu rất nhỏ.',
        'Tế bào thần kinh nhận và truyền thông tin. Nhiều tua ngắn giúp nó nối với nhiều tế bào khác; sợi dài giúp dẫn truyền xung thần kinh đi xa.',
        'Như vậy, mỗi loại tế bào có hình dạng phù hợp với chức năng của nó.',
      ],
      answer: 'Hình dạng của mỗi loại tế bào phù hợp với chức năng mà tế bào đó đảm nhận.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Vì sao tế bào được coi là đơn vị cơ bản của sự sống?',
      options: [
        'Vì tế bào rất nhỏ, chỉ thấy được dưới kính hiển vi',
        'Vì mọi cơ thể sống đều được cấu tạo từ tế bào và tế bào thực hiện được các hoạt động sống cơ bản',
        'Vì chỉ động vật mới có tế bào',
        'Vì mọi tế bào đều có hình dạng giống nhau',
      ],
      answer: 1,
      hints: [
        'Tế bào vừa là đơn vị cấu trúc vừa là đơn vị chức năng.',
        'Nghĩ tới "viên gạch" xây nên ngôi nhà và các hoạt động như lớn lên, sinh sản.',
      ],
      solution:
        'Mọi cơ thể sống đều được cấu tạo từ tế bào (đơn vị cấu trúc), và tế bào thực hiện được các hoạt động sống như trao đổi chất, lớn lên, sinh sản, cảm ứng (đơn vị chức năng). Kích thước nhỏ không phải lí do; thực vật, nấm, vi khuẩn cũng có tế bào; và tế bào có nhiều hình dạng khác nhau.',
    },
    {
      type: 'choice',
      prompt: 'Tế bào nào sau đây có thể quan sát bằng mắt thường?',
      options: ['Vi khuẩn E. coli', 'Hồng cầu người', 'Tế bào trứng cá', 'Tế bào niêm mạc miệng'],
      answer: 2,
      hints: ['Mắt thường chỉ phân biệt được vật từ khoảng $0{,}1$ mm trở lên.'],
      solution:
        'Tế bào trứng cá có đường kính khoảng $1$ mm nên nhìn được bằng mắt thường. Vi khuẩn ($2\\ \\mu\\text{m}$), hồng cầu ($7{,}5\\ \\mu\\text{m}$) và tế bào niêm mạc miệng ($50$ đến $60\\ \\mu\\text{m}$) đều nhỏ hơn $100\\ \\mu\\text{m}$, phải dùng kính hiển vi.',
    },
    {
      type: 'number',
      prompt: '$1$ mm bằng bao nhiêu micromet?',
      answer: 1000,
      unit: 'µm',
      hints: ['Micromet bằng một phần nghìn milimet.'],
      solution:
        '$1\\ \\mu\\text{m} = 0{,}001\\ \\text{mm}$ nên $1\\ \\text{mm} = 1000\\ \\mu\\text{m}$.',
    },
    {
      type: 'number',
      prompt: 'Một tế bào biểu bì lá dài $0{,}05$ mm. Tế bào đó dài bao nhiêu micromet?',
      answer: 50,
      unit: 'µm',
      hints: ['Nhân số đo theo milimet với $1000$.'],
      solution: '$0{,}05 \\cdot 1000 = 50$, vậy tế bào dài $50\\ \\mu\\text{m}$.',
    },
    {
      type: 'number',
      prompt:
        'Vi khuẩn E. coli dài khoảng $2\\ \\mu\\text{m}$. Cần bao nhiêu vi khuẩn xếp nối đuôi nhau để được một hàng dài $1$ mm?',
      answer: 500,
      hints: ['Đổi $1$ mm ra micromet trước.', 'Chia độ dài hàng cho độ dài một vi khuẩn.'],
      solution: '$1\\ \\text{mm} = 1000\\ \\mu\\text{m}$; $1000 : 2 = 500$ vi khuẩn.',
    },
    {
      type: 'number',
      prompt:
        'Quan sát hồng cầu đường kính $7{,}5\\ \\mu\\text{m}$ qua kính hiển vi phóng to $400$ lần. Ảnh của hồng cầu có đường kính bao nhiêu milimet?',
      answer: 3,
      tolerance: 0.001,
      unit: 'mm',
      hints: [
        'Kích thước ảnh = kích thước thật nhân với độ phóng đại.',
        'Tính ra micromet rồi đổi sang milimet.',
      ],
      solution:
        '$7{,}5 \\cdot 400 = 3000\\ \\mu\\text{m}$; $3000\\ \\mu\\text{m} = 3\\ \\text{mm}$.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi loại tế bào với hình dạng của nó.',
      left: ['Hồng cầu người', 'Tế bào thần kinh', 'Vi khuẩn E. coli', 'Tế bào trứng cá'],
      right: [
        'Hình que (hình trụ)',
        'Hình cầu',
        'Hình đĩa lõm hai mặt',
        'Hình sao, có nhiều tua',
        'Hình chữ nhật',
      ],
      pairs: [
        [0, 2],
        [1, 3],
        [2, 0],
        [3, 1],
      ],
      hints: ['Có một hình dạng thừa: hình chữ nhật là của tế bào biểu bì lá, vảy hành.'],
      solution:
        'Hồng cầu: hình đĩa lõm hai mặt. Tế bào thần kinh: hình sao, nhiều tua. Vi khuẩn E. coli: hình que. Tế bào trứng cá: hình cầu.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các phát biểu đúng.',
      options: [
        'Phần lớn tế bào có kích thước rất nhỏ, phải dùng kính hiển vi mới thấy được.',
        'Mọi tế bào trong cơ thể người đều có hình dạng và kích thước như nhau.',
        'Con voi to hơn con chuột chủ yếu vì cơ thể voi có nhiều tế bào hơn.',
        'Hình dạng của tế bào phù hợp với chức năng của nó.',
        'Sinh vật đơn bào không thực hiện được hoạt động sống nào.',
      ],
      answers: [0, 2, 3],
      hints: [
        'Hồng cầu và tế bào thần kinh của cùng một người có giống nhau không?',
        'Một con vi khuẩn chỉ có một tế bào nhưng vẫn sống.',
      ],
      solution:
        'Đúng: phần lớn tế bào rất nhỏ; cơ thể lớn hay nhỏ chủ yếu do số lượng tế bào; hình dạng phù hợp với chức năng. Sai: các tế bào trong cơ thể người có nhiều hình dạng, kích thước khác nhau; sinh vật đơn bào vẫn trao đổi chất, lớn lên và sinh sản.',
    },
    {
      type: 'text',
      prompt: 'Đơn vị $\\mu\\text{m}$ thường dùng để đo kích thước tế bào có tên là gì?',
      accept: ['micromet', 'micrômét', 'micro met', 'micrometer', 'micromét', 'micrômet'],
      hints: ['Tiền tố "micro" nghĩa là một phần triệu; đơn vị này bằng một phần triệu mét.'],
      solution:
        '$\\mu\\text{m}$ là micromet: $1\\ \\mu\\text{m} = 0{,}001\\ \\text{mm} = 0{,}000001\\ \\text{m}$.',
    },
    {
      type: 'choice',
      prompt:
        'Tế bào thần kinh có nhiều tua và một sợi rất dài. Hình dạng đó giúp tế bào thần kinh',
      options: [
        'chứa được nhiều chất dự trữ',
        'nối với nhiều tế bào khác và dẫn truyền xung thần kinh đi xa',
        'di chuyển nhanh trong máu',
        'bảo vệ bề mặt cơ thể',
      ],
      answer: 1,
      hints: ['Chức năng của tế bào thần kinh là nhận và truyền thông tin.'],
      solution:
        'Các tua giúp tế bào thần kinh liên hệ với nhiều tế bào khác, sợi dài giúp truyền xung thần kinh đi xa. Hình dạng phù hợp với chức năng dẫn truyền.',
    },
  ],
  takeaways: [
    'Tế bào là đơn vị cấu trúc và chức năng cơ bản của mọi cơ thể sống.',
    'Tế bào có nhiều hình dạng (cầu, đĩa, que, sao, chữ nhật...) phù hợp với chức năng của nó.',
    'Kích thước tế bào khác nhau; đa số rất nhỏ, đo bằng micromet: $1\\ \\text{mm} = 1000\\ \\mu\\text{m}$.',
    'Mắt thường thấy vật từ khoảng $0{,}1$ mm; phần lớn tế bào phải quan sát bằng kính hiển vi, chỉ một số tế bào lớn như trứng cá thấy được bằng mắt thường.',
  ],
};
