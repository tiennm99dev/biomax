/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Sinh sản hữu tính là hình thức sinh sản có sự hợp nhất của giao tử đực và giao tử cái tạo thành hợp tử, hợp tử phát triển thành cơ thể mới; ở thực vật có hoa gồm cấu tạo hoa, thụ phấn, thụ tinh, hình thành quả và hạt; ở động vật gồm hình thành giao tử, thụ tinh, phát triển phôi.',
  intro:
    'Một bông hoa bưởi nở, ong bay tới hút mật. Ít lâu sau, cánh hoa rụng hết, ở chỗ bông hoa lại có một quả bưởi non. Một con gà mái đẻ trứng, ấp ba tuần thì nở ra gà con. Quả, hạt và gà con được tạo ra như thế nào, và chúng giống bố mẹ ra sao?',
  objectives: [
    'Phát biểu được khái niệm sinh sản hữu tính ở sinh vật.',
    'Mô tả được cấu tạo hoa và các bộ phận sinh sản của hoa (nhị, nhụy); phân biệt hoa lưỡng tính và hoa đơn tính.',
    'Mô tả được quá trình thụ phấn, thụ tinh và hình thành quả, hạt ở thực vật có hoa.',
    'Mô tả được các giai đoạn sinh sản hữu tính ở động vật; phân biệt thụ tinh ngoài và thụ tinh trong.',
    'Nêu được vai trò và ứng dụng của sinh sản hữu tính.',
  ],
  sections: [
    {
      heading: 'Khái niệm sinh sản hữu tính',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Sinh sản hữu tính',
          text: 'Sinh sản hữu tính là hình thức sinh sản có sự hợp nhất của giao tử đực và giao tử cái tạo thành hợp tử; hợp tử phát triển thành cơ thể mới. Cơ thể con mang đặc điểm của cả bố và mẹ.',
        },
        {
          type: 'p',
          text: 'Sinh sản hữu tính là hình thức sinh sản phổ biến ở thực vật có hoa (lúa, ngô, cam, chanh, vải, nhãn, ...) và ở nhiều nhóm động vật (lợn, gà, chó, mèo, cá chép, ...).',
        },
        {
          type: 'table',
          caption: 'So sánh sinh sản vô tính và sinh sản hữu tính',
          head: ['Tiêu chí', 'Sinh sản vô tính', 'Sinh sản hữu tính'],
          rows: [
            ['Kết hợp giao tử đực và giao tử cái', 'Không có', 'Có (tạo hợp tử)'],
            [
              'Đặc điểm của con',
              'Giống nhau và giống mẹ',
              'Mang đặc điểm của cả bố và mẹ, đa dạng',
            ],
            [
              'Khả năng thích nghi khi môi trường thay đổi',
              'Kém',
              'Tốt hơn, vì các cá thể con khác nhau',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Sinh sản hữu tính ở thực vật có hoa',
      blocks: [
        {
          type: 'p',
          text: 'Hoa là cơ quan sinh sản của cây có hoa. Hoa gồm cuống hoa, đế hoa, đài hoa, tràng hoa (các cánh hoa), nhị và nhụy. Nhị và nhụy là bộ phận sinh sản chủ yếu của hoa.',
        },
        {
          type: 'list',
          items: [
            'Nhị gồm chỉ nhị và bao phấn; bao phấn chứa các hạt phấn mang giao tử đực.',
            'Nhụy gồm đầu nhụy, vòi nhụy và bầu nhụy; bầu nhụy chứa noãn mang giao tử cái.',
          ],
        },
        { type: 'p', text: 'Bấm vào các số trên sơ đồ để tìm hiểu, gọi tên các bộ phận của hoa.' },
        { type: 'widget', name: 'cau-tao-hoa' },
        {
          type: 'table',
          caption: 'Hoa lưỡng tính và hoa đơn tính',
          head: ['Loại hoa', 'Đặc điểm', 'Ví dụ'],
          rows: [
            [
              'Hoa lưỡng tính',
              'Có cả nhị và nhụy trên cùng một hoa',
              'Hoa bưởi, hoa ly, hoa hồng, hoa đào, hoa cải',
            ],
            [
              'Hoa đơn tính',
              'Chỉ có nhị (hoa đực) hoặc chỉ có nhụy (hoa cái)',
              'Hoa mướp, hoa bí, hoa ngô',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Quá trình sinh sản hữu tính ở thực vật có hoa',
          text: 'Gồm các giai đoạn nối tiếp nhau: hình thành giao tử (giao tử đực trong hạt phấn, giao tử cái trong noãn) → thụ phấn → thụ tinh → hình thành quả và hạt.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Thụ phấn là hiện tượng hạt phấn tiếp xúc với đầu nhụy. Hoa tự thụ phấn khi hạt phấn rơi vào đầu nhụy của chính hoa đó; hoa giao phấn khi hạt phấn được chuyển tới đầu nhụy của hoa khác. Hạt phấn có thể được chuyển tới đầu nhụy nhờ gió, nhờ côn trùng (ong, bướm, ...), nhờ nước hoặc nhờ con người.',
            'Hạt phấn nảy mầm thành ống phấn; ống phấn xuyên qua vòi nhụy vào bầu nhụy, tới noãn.',
            'Thụ tinh là sự kết hợp giữa giao tử đực và giao tử cái (thực chất là sự hợp nhất nhân của chúng) tạo thành hợp tử.',
            'Sau thụ tinh: hợp tử phát triển thành phôi; noãn phát triển thành hạt chứa phôi; bầu nhụy phát triển thành quả chứa hạt. Mỗi noãn được thụ tinh tạo thành một hạt.',
          ],
        },
      ],
    },
    {
      heading: 'Sinh sản hữu tính ở động vật',
      blocks: [
        {
          type: 'p',
          text: 'Quá trình sinh sản hữu tính ở động vật gồm ba giai đoạn nối tiếp nhau: hình thành giao tử, thụ tinh, phát triển phôi thành cơ thể mới.',
        },
        {
          type: 'list',
          items: [
            'Hình thành giao tử: cơ quan sinh dục đực tạo tinh trùng, cơ quan sinh dục cái tạo trứng.',
            'Thụ tinh: tinh trùng kết hợp với trứng tạo thành hợp tử.',
            'Phát triển phôi: hợp tử phân chia nhiều lần tạo thành phôi, phôi phát triển thành cơ thể mới.',
          ],
        },
        {
          type: 'table',
          caption: 'Thụ tinh ngoài và thụ tinh trong',
          head: ['Hình thức', 'Nơi trứng gặp tinh trùng', 'Ví dụ'],
          rows: [
            ['Thụ tinh ngoài', 'Bên ngoài cơ thể con cái (thường trong nước)', 'Cá chép, ếch'],
            ['Thụ tinh trong', 'Trong cơ quan sinh dục của con cái', 'Chim, gà, thú, người'],
          ],
        },
        {
          type: 'p',
          text: 'Ở loài đẻ trứng (cá, ếch, chim, gà), phôi phát triển trong trứng, bên ngoài cơ thể mẹ. Ở loài đẻ con (thỏ, chó, mèo, trâu, bò, người), phôi phát triển trong tử cung của cơ thể mẹ.',
        },
      ],
    },
    {
      heading: 'Vai trò và ứng dụng của sinh sản hữu tính',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Vai trò',
          text: 'Sinh sản hữu tính tạo ra các cá thể con đa dạng, mang đặc điểm của cả bố và mẹ, giúp loài thích nghi với môi trường luôn thay đổi; đồng thời là nguồn nguyên liệu phong phú cho chọn giống.',
        },
        {
          type: 'list',
          items: [
            'Trồng trọt: lấy hạt phấn của cây ngô bắp to, hạt ngọt thụ phấn cho cây ngô nếp hạt dẻo để có giống ngô bắp to, hạt dẻo; thụ phấn bổ sung cho cây để tăng số quả, hạt.',
            'Chăn nuôi: lai lợn Ỉ với lợn Đại Bạch tạo giống lợn lớn nhanh, tỉ lệ nạc cao.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Từ hoa đến quả, từ trứng đến con non',
    instruction:
      'Thẻ "Thực vật có hoa": chọn tác nhân thụ phấn rồi bấm "Bước tiếp" để theo dõi hạt phấn tới đầu nhụy, ống phấn tới noãn, thụ tinh và hình thành quả, hạt. Thẻ "Động vật": chọn cá chép, gà hoặc thỏ để so sánh thụ tinh ngoài với thụ tinh trong, đẻ trứng với đẻ con.',
  },
  examples: [
    {
      problem:
        'Một cây bí ngô ra rất nhiều hoa nhưng đậu rất ít quả do vườn ít ong. Vì sao? Người trồng có thể làm gì?',
      steps: [
        'Hoa bí là hoa đơn tính: hoa đực chỉ có nhị, hoa cái chỉ có nhụy. Muốn có quả, hạt phấn từ hoa đực phải được chuyển sang đầu nhụy của hoa cái.',
        'Hoa bí thụ phấn chủ yếu nhờ côn trùng. Ít ong thì ít hoa cái được thụ phấn, nên ít hoa được thụ tinh và phát triển thành quả.',
        'Người trồng có thể ngắt hoa đực, quét phấn lên đầu nhụy của hoa cái (thụ phấn nhờ con người).',
      ],
      answer:
        'Vì ít côn trùng nên hoa cái không được thụ phấn; có thể thụ phấn bổ sung bằng tay cho hoa cái.',
    },
    {
      problem: 'Một quả bưởi có 60 hạt. Có bao nhiêu noãn đã được thụ tinh? Giải thích.',
      steps: [
        'Sau thụ tinh, mỗi noãn được thụ tinh phát triển thành một hạt.',
        'Quả có 60 hạt nên có 60 noãn đã được thụ tinh.',
      ],
      answer: '60 noãn đã được thụ tinh.',
    },
    {
      problem:
        'So sánh sự sinh sản của cá chép và thỏ ở hai điểm: nơi thụ tinh và nơi phôi phát triển.',
      steps: [
        'Cá chép cái đẻ trứng vào nước, cá đực tưới tinh trùng lên trứng: thụ tinh diễn ra ngoài cơ thể con cái, là thụ tinh ngoài. Phôi phát triển trong trứng ở môi trường nước.',
        'Ở thỏ, tinh trùng gặp trứng trong cơ quan sinh dục của con cái: thụ tinh trong. Phôi phát triển trong tử cung của mẹ, rồi mẹ đẻ ra thỏ con.',
      ],
      answer:
        'Cá chép: thụ tinh ngoài, phôi phát triển trong trứng ngoài cơ thể mẹ. Thỏ: thụ tinh trong, phôi phát triển trong cơ thể mẹ (đẻ con).',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Sinh sản hữu tính là hình thức sinh sản',
      options: [
        'tạo ra cơ thể mới từ một phần cơ thể mẹ',
        'có sự hợp nhất của giao tử đực và giao tử cái tạo thành hợp tử',
        'chỉ có ở động vật',
        'tạo ra các cá thể con giống hệt nhau',
      ],
      answer: 1,
      hints: ['Hãy nhớ từ khoá "hợp tử".'],
      solution:
        'Sinh sản hữu tính có sự hợp nhất của giao tử đực và giao tử cái tạo thành hợp tử, hợp tử phát triển thành cơ thể mới.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi bộ phận của hoa với chức năng (hoặc số phận sau thụ tinh) của nó.',
      left: ['Bao phấn', 'Đầu nhụy', 'Bầu nhụy', 'Noãn'],
      right: [
        'Tiếp nhận hạt phấn',
        'Phát triển thành hạt',
        'Chứa hạt phấn',
        'Phát triển thành quả',
        'Bảo vệ hoa khi còn là nụ',
      ],
      pairs: [
        [0, 2],
        [1, 0],
        [2, 3],
        [3, 1],
      ],
      hints: ['Sau thụ tinh: bầu nhụy → quả, noãn → hạt.'],
      solution:
        'Bao phấn chứa hạt phấn; đầu nhụy tiếp nhận hạt phấn; bầu nhụy phát triển thành quả; noãn phát triển thành hạt. (Đài hoa bảo vệ hoa khi còn là nụ.)',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các giai đoạn sinh sản hữu tính ở thực vật có hoa theo đúng thứ tự.',
      items: ['Thụ tinh', 'Hình thành quả và hạt', 'Thụ phấn', 'Hạt phấn nảy mầm thành ống phấn'],
      answer: [2, 3, 0, 1],
      hints: ['Hạt phấn phải tới đầu nhụy trước, rồi mới đi tới được noãn.'],
      solution: 'Thụ phấn → hạt phấn nảy mầm thành ống phấn → thụ tinh → hình thành quả và hạt.',
    },
    {
      type: 'multi',
      prompt: 'Những hoa nào dưới đây là hoa đơn tính?',
      options: ['Hoa bí', 'Hoa bưởi', 'Hoa mướp', 'Hoa hồng', 'Hoa ngô'],
      answers: [0, 2, 4],
      hints: [
        'Hoa đơn tính chỉ có nhị hoặc chỉ có nhụy; cây bí, mướp, ngô có hoa đực và hoa cái riêng.',
      ],
      solution:
        'Hoa bí, hoa mướp, hoa ngô là hoa đơn tính. Hoa bưởi và hoa hồng có cả nhị và nhụy nên là hoa lưỡng tính.',
    },
    {
      type: 'number',
      prompt:
        'Một quả cà chua có 85 hạt. Có bao nhiêu noãn trong bầu nhụy đã được thụ tinh để tạo thành các hạt đó?',
      answer: 85,
      hints: ['Mỗi noãn được thụ tinh phát triển thành mấy hạt?'],
      solution: 'Mỗi noãn được thụ tinh tạo thành một hạt, nên có 85 noãn đã được thụ tinh.',
    },
    {
      type: 'choice',
      prompt: 'Thụ tinh ở thực vật có hoa là',
      options: [
        'hiện tượng hạt phấn tiếp xúc với đầu nhụy',
        'sự kết hợp giữa giao tử đực và giao tử cái tạo thành hợp tử',
        'sự lớn lên của bầu nhụy thành quả',
        'sự nảy mầm của hạt thành cây con',
      ],
      answer: 1,
      hints: ['Đừng nhầm thụ tinh với thụ phấn.'],
      solution:
        'Thụ phấn là hạt phấn tiếp xúc với đầu nhụy; thụ tinh là giao tử đực kết hợp với giao tử cái trong noãn tạo thành hợp tử.',
    },
    {
      type: 'multi',
      prompt: 'Những loài nào dưới đây thụ tinh trong?',
      options: ['Cá chép', 'Gà', 'Ếch', 'Thỏ', 'Chim bồ câu'],
      answers: [1, 3, 4],
      hints: ['Trứng gặp tinh trùng trong nước hay trong cơ thể con cái?'],
      solution:
        'Gà, thỏ, chim bồ câu thụ tinh trong (trong cơ quan sinh dục của con cái). Cá chép và ếch thụ tinh ngoài (trong nước).',
    },
    {
      type: 'choice',
      prompt: 'Vì sao sinh sản hữu tính giúp loài thích nghi tốt hơn với môi trường thay đổi?',
      options: [
        'Vì tạo ra rất nhiều cá thể giống hệt nhau',
        'Vì các cá thể con đa dạng, mang đặc điểm của cả bố và mẹ',
        'Vì chỉ cần một cơ thể ban đầu',
        'Vì phôi luôn phát triển trong cơ thể mẹ',
      ],
      answer: 1,
      hints: ['Khi môi trường thay đổi, cá thể nào có lợi thế sống sót?'],
      solution:
        'Các cá thể con khác nhau, nên khi môi trường thay đổi vẫn có những cá thể mang đặc điểm phù hợp để sống sót, giúp loài tồn tại.',
    },
  ],
  takeaways: [
    'Sinh sản hữu tính: giao tử đực hợp nhất với giao tử cái tạo hợp tử; hợp tử phát triển thành cơ thể mới mang đặc điểm của cả bố và mẹ.',
    'Hoa gồm cuống, đế, đài, tràng, nhị (chỉ nhị, bao phấn) và nhụy (đầu, vòi, bầu nhụy chứa noãn). Hoa lưỡng tính có cả nhị và nhụy; hoa đơn tính chỉ có một trong hai.',
    'Thụ phấn (hạt phấn tới đầu nhụy, nhờ gió, côn trùng, con người) → thụ tinh (tạo hợp tử) → noãn thành hạt, bầu nhụy thành quả.',
    'Ở động vật: hình thành giao tử → thụ tinh (ngoài hoặc trong) → phát triển phôi (đẻ trứng hoặc đẻ con).',
    'Sinh sản hữu tính tạo con đa dạng, giúp loài thích nghi; là nguồn nguyên liệu cho chọn giống.',
  ],
};
