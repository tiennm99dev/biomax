/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Công nghệ tế bào nuôi cấy tế bào và mô trong môi trường nhân tạo, dựa trên tính toàn năng của tế bào, gồm nuôi cấy mô, lai tế bào sinh dưỡng, nuôi cấy hạt phấn và noãn ở thực vật; nhân bản vô tính, liệu pháp tế bào gốc và liệu pháp gene ở động vật.',
  intro:
    'Từ một mảnh mô lan quý, người ta tạo ra hàng nghìn cây giống hệt nhau trong ống nghiệm. Từ nhân của một tế bào tuyến vú, các nhà khoa học đã tạo ra cừu Dolly. Việt Nam cũng đã nhân bản được những con lợn Ỉ. Những thành tựu đó dựa trên nguyên lí nào?',
  objectives: [
    'Nêu được khái niệm công nghệ tế bào và tính toàn năng của tế bào.',
    'Trình bày được nguyên lí và các kĩ thuật của công nghệ tế bào thực vật.',
    'Trình bày được nguyên lí của công nghệ tế bào động vật và các bước nhân bản vô tính.',
    'Phân biệt được tế bào gốc phôi với tế bào gốc trưởng thành.',
    'Kể được một số thành tựu và ứng dụng của công nghệ tế bào.',
  ],
  sections: [
    {
      heading: 'Khái niệm và nguyên lí',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Công nghệ tế bào',
          text: 'Công nghệ tế bào là ngành kĩ thuật nuôi cấy tế bào và mô trong môi trường dinh dưỡng nhân tạo để tạo ra các mô, cơ quan hoặc cơ thể hoàn chỉnh, hoặc một số lượng lớn tế bào phục vụ nghiên cứu và đời sống.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Tính toàn năng của tế bào',
          text: 'Tính toàn năng là khả năng một tế bào phân chia và biệt hoá thành mọi loại tế bào, tạo nên một cơ thể hoàn chỉnh. Hợp tử có tính toàn năng. Nhiều tế bào thực vật đã biệt hoá vẫn giữ được tính toàn năng.',
        },
        {
          type: 'list',
          items: [
            'Biệt hoá: quá trình tế bào chuyên hoá về cấu trúc và chức năng thành một loại tế bào nhất định.',
            'Phản biệt hoá: quá trình tế bào thực vật đã biệt hoá quay về trạng thái chưa chuyên hoá và phân chia trở lại, khi được nuôi trong môi trường có hormone thích hợp.',
          ],
        },
      ],
    },
    {
      heading: 'Công nghệ tế bào thực vật',
      blocks: [
        {
          type: 'p',
          text: 'Nguyên lí: nuôi tế bào hoặc mô thực vật trong điều kiện vô trùng, trên môi trường dinh dưỡng có hormone thực vật thích hợp, để chúng tái sinh thành cây. Có ba kĩ thuật chính:',
        },
        {
          type: 'table',
          caption: 'Các kĩ thuật của công nghệ tế bào thực vật',
          head: ['Kĩ thuật', 'Cách làm', 'Ứng dụng'],
          rows: [
            [
              'Nuôi cấy mô tế bào',
              'Nuôi mô chuyên hoá trong ống nghiệm có hormone để tạo mô sẹo, rồi kích thích mô sẹo tái sinh thành cây',
              'Nhân nhanh giống quý hiếm, giống sinh trưởng chậm, giống sạch bệnh virus; tạo cây biến đổi gene',
            ],
            [
              'Lai tế bào sinh dưỡng',
              'Loại bỏ thành tế bào tạo tế bào trần, dung hợp các tế bào trần thành tế bào lai, rồi nuôi thành cây lai',
              'Tạo giống mang đặc điểm của hai loài mà lai thông thường không làm được',
            ],
            [
              'Nuôi cấy hạt phấn, noãn chưa thụ tinh',
              'Tạo cây đơn bội, rồi lưỡng bội hoá thành cây lưỡng bội hoàn chỉnh',
              'Tạo cây đồng hợp tử về tất cả các gene, có ích cho chọn giống',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Công nghệ tế bào động vật',
      blocks: [
        {
          type: 'p',
          text: 'Nguyên lí: nuôi các tế bào gốc trong môi trường thích hợp và tạo điều kiện để chúng phân chia, rồi biệt hoá thành các loại tế bào khác nhau. Tế bào gốc là tế bào có thể phân chia và biệt hoá thành các loại tế bào khác nhau.',
        },
        {
          type: 'table',
          caption: 'Hai nhóm tế bào gốc',
          head: ['Loại', 'Nguồn gốc', 'Khả năng biệt hoá'],
          rows: [
            [
              'Tế bào gốc phôi',
              'Phôi sớm',
              'Vạn năng: thành mọi loại tế bào của cơ thể trưởng thành',
            ],
            [
              'Tế bào gốc trưởng thành',
              'Mô của cơ thể trưởng thành, ví dụ tuỷ xương',
              'Đa tiềm năng: chỉ thành một số loại tế bào nhất định',
            ],
          ],
        },
        { type: 'widget', name: 'te-bao-goc' },
        {
          type: 'list',
          items: [
            'Nhân bản vô tính: tạo ra các cá thể giống hệt nhau về kiểu gene mà không qua sinh sản hữu tính. Nổi bật là cừu Dolly (1996). Công nghệ này còn giúp tăng số lượng cá thể của các loài có nguy cơ tuyệt chủng.',
            'Liệu pháp tế bào gốc: truyền tế bào gốc đã nuôi cấy vào cơ thể người bệnh để thay thế tế bào bệnh. Ưu tiên dùng tế bào gốc trưởng thành để tránh vấn đề đạo đức. Được kì vọng hỗ trợ điều trị Parkinson, tiểu đường type 1, tổn thương tim và thần kinh.',
            'Liệu pháp gene: thay gene bệnh bằng gene lành. Tế bào được nuôi trong ống nghiệm, chỉnh sửa gene, sàng lọc, nhân lên rồi truyền lại cho người bệnh.',
            'Công nghệ tế bào còn mở ra hướng nghiên cứu thịt nhân tạo và sản xuất protein chữa bệnh.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Sắp xếp hai quy trình',
    instruction:
      'Chọn một quy trình và dùng mũi tên đưa các bước về đúng thứ tự, rồi bấm "Kiểm tra". Mỗi bước phải có sản phẩm của bước trước, đó là chìa khoá để sắp xếp.',
  },
  examples: [
    {
      problem:
        'Trong thí nghiệm tạo cừu Dolly, nhân lấy từ tế bào tuyến vú của cừu mặt trắng, trứng lấy từ cừu mặt đen, phôi được cấy vào tử cung cừu mặt đen khác. Dolly có mặt màu gì? Vì sao?',
      steps: [
        'Nhân tế bào chứa phần lớn vật chất di truyền của tế bào.',
        'Trứng đã bị loại bỏ nhân, nên cừu cho trứng chỉ đóng góp tế bào chất.',
        'Cừu mang thai hộ chỉ nuôi phôi, không truyền gene của nó cho phôi.',
        'Vì vậy, Dolly mang đặc điểm của cừu cho nhân.',
      ],
      answer: 'Dolly có mặt trắng như cừu cho nhân, vì nhân tế bào quyết định các tính trạng này.',
    },
    {
      problem:
        'Lai tế bào sinh dưỡng giữa loài A có $2n = 18$ và loài B có $2n = 20$. Tính số NST trong tế bào lai.',
      steps: [
        'Tế bào sinh dưỡng của mỗi loài giữ nguyên bộ NST $2n$.',
        'Dung hợp hai tế bào trần tạo tế bào lai chứa đủ NST của cả hai tế bào.',
        'Số NST là $18 + 20 = 38$.',
      ],
      answer: 'Tế bào lai có $38$ NST.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Tính toàn năng của tế bào là gì?',
      options: [
        'Khả năng tế bào phân chia và biệt hoá thành mọi loại tế bào, tạo nên cơ thể hoàn chỉnh',
        'Khả năng tế bào sống mãi không chết',
        'Khả năng tế bào tự tổng hợp mọi loại hormone',
        'Khả năng tế bào di chuyển trong cơ thể',
      ],
      answer: 0,
      hints: ['Hãy nghĩ đến hợp tử: một tế bào tạo ra cả cơ thể.'],
      solution:
        'Tính toàn năng là khả năng một tế bào phát triển thành cơ thể hoàn chỉnh với mọi loại tế bào.',
    },
    {
      type: 'text',
      prompt:
        'Khối tế bào chưa chuyên hoá tạo thành khi nuôi cấy mô thực vật trong môi trường có hormone được gọi là gì?',
      accept: ['mô sẹo'],
      hints: ['Tên khối tế bào này gợi đến vết thương đang lành ở da.'],
      solution: 'Đó là mô sẹo. Mô sẹo được kích thích tiếp để tái sinh thành cây hoàn chỉnh.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi kĩ thuật với kết quả của nó.',
      left: ['Nuôi cấy mô', 'Lai tế bào sinh dưỡng', 'Nuôi cấy hạt phấn rồi lưỡng bội hoá'],
      right: [
        'Nhiều cây giống hệt cây mẹ',
        'Cây lai mang đặc điểm của hai loài',
        'Cây đồng hợp tử về tất cả các gene',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Hạt phấn đơn bội, nên sau khi nhân đôi NST, hai chiếc của mỗi cặp giống hệt nhau.'],
      solution:
        'Nuôi cấy mô: nhiều cây giống hệt cây mẹ. Lai tế bào sinh dưỡng: cây lai hai loài. Nuôi cấy hạt phấn rồi lưỡng bội hoá: cây đồng hợp tử về tất cả các gene.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước tạo cừu Dolly theo đúng thứ tự.',
      items: [
        'Cấy phôi vào tử cung cừu mang thai hộ',
        'Chuyển nhân tế bào tuyến vú vào trứng đã mất nhân',
        'Lấy nhân tế bào tuyến vú và trứng đã loại nhân',
        'Nuôi tế bào chuyển nhân thành phôi',
      ],
      answer: [2, 1, 3, 0],
      hints: ['Phải có đủ hai thành phần trước khi ghép chúng lại.'],
      solution:
        'Lấy nhân và trứng đã loại nhân, chuyển nhân vào trứng, nuôi thành phôi, rồi cấy phôi vào tử cung cừu mang thai hộ.',
    },
    {
      type: 'number',
      prompt:
        'Một loài cây có $2n = 24$. Nuôi cấy hạt phấn tạo cây đơn bội, rồi lưỡng bội hoá. Cây thu được có bao nhiêu NST trong mỗi tế bào sinh dưỡng?',
      answer: 24,
      hints: ['Hạt phấn có bộ NST $n$.', 'Lưỡng bội hoá làm số NST tăng gấp đôi.'],
      solution: 'Hạt phấn có $n = 12$; sau lưỡng bội hoá, cây có $2 \\cdot 12 = 24$ NST.',
    },
    {
      type: 'number',
      prompt:
        'Lai tế bào sinh dưỡng giữa loài có $2n = 14$ và loài có $2n = 26$. Tế bào lai có bao nhiêu NST?',
      answer: 40,
      hints: ['Tế bào lai chứa toàn bộ NST của hai tế bào sinh dưỡng.'],
      solution: '$14 + 26 = 40$ NST.',
    },
    {
      type: 'number',
      prompt:
        'Nuôi cấy mô một giống lan, cứ mỗi lần cấy chuyển, một mẫu tạo ra $4$ mẫu mới. Từ $1$ mẫu ban đầu, sau $5$ lần cấy chuyển có bao nhiêu mẫu?',
      answer: 1024,
      hints: ['Mỗi lần cấy chuyển, số mẫu nhân lên $4$ lần.', 'Tính $4^5$.'],
      solution: '$4^5 = 1\\,024$ mẫu.',
    },
    {
      type: 'choice',
      prompt: 'Điểm khác nhau chính giữa tế bào gốc phôi và tế bào gốc trưởng thành là gì?',
      options: [
        'Tế bào gốc phôi biệt hoá được thành mọi loại tế bào; tế bào gốc trưởng thành chỉ thành một số loại',
        'Tế bào gốc trưởng thành biệt hoá được nhiều loại hơn',
        'Tế bào gốc phôi không phân chia',
        'Tế bào gốc trưởng thành chỉ có ở thực vật',
      ],
      answer: 0,
      hints: ['So sánh số loại tế bào mà mỗi nhóm có thể tạo ra.'],
      solution:
        'Tế bào gốc phôi là vạn năng, biệt hoá được thành mọi loại tế bào của cơ thể trưởng thành; tế bào gốc trưởng thành chỉ biệt hoá thành một số loại nhất định.',
    },
    {
      type: 'multi',
      prompt: 'Những ứng dụng nào thuộc công nghệ tế bào?',
      options: [
        'Nhân nhanh giống lan quý bằng nuôi cấy mô',
        'Truyền tế bào gốc để hỗ trợ chữa bệnh',
        'Nhân bản vô tính vật nuôi',
        'Phơi khô rau quả để bảo quản',
      ],
      answers: [0, 1, 2],
      hints: ['Công nghệ tế bào làm việc trực tiếp với tế bào sống được nuôi cấy.'],
      solution:
        'Ba ứng dụng đầu đều nuôi cấy và sử dụng tế bào sống. Phơi khô chỉ là cách bảo quản thực phẩm.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao các cây con tạo từ nuôi cấy mô có kiểu gene giống cây mẹ?',
      options: [
        'Vì chúng tạo thành qua nguyên phân từ tế bào của cây mẹ',
        'Vì chúng trải qua giảm phân và thụ tinh',
        'Vì hormone làm thay đổi gene của chúng',
        'Vì chúng nhận gene từ cả bố và mẹ',
      ],
      answer: 0,
      hints: ['Trong nuôi cấy mô, có giảm phân hay thụ tinh không?'],
      solution:
        'Nuôi cấy mô không qua giảm phân và thụ tinh; tế bào phân chia bằng nguyên phân nên giữ nguyên kiểu gene của cây mẹ.',
    },
  ],
  takeaways: [
    'Công nghệ tế bào nuôi cấy tế bào, mô trong môi trường nhân tạo; cơ sở là tính toàn năng và khả năng biệt hoá, phản biệt hoá của tế bào.',
    'Công nghệ tế bào thực vật gồm nuôi cấy mô, lai tế bào sinh dưỡng, nuôi cấy hạt phấn hoặc noãn chưa thụ tinh.',
    'Công nghệ tế bào động vật gồm nhân bản vô tính, liệu pháp tế bào gốc và liệu pháp gene; tế bào gốc phôi vạn năng, tế bào gốc trưởng thành đa tiềm năng.',
  ],
};
