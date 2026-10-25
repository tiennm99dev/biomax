/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Bài thực hành: quan sát tế bào trứng cá bằng kính lúp, làm tiêu bản và quan sát tế bào biểu bì vảy hành dưới kính hiển vi, rồi phân biệt tế bào động vật với tế bào thực vật qua thành tế bào.',
  intro:
    'Ở các bài trước, em đã biết tế bào có màng, tế bào chất và nhân, và tế bào thực vật có thêm thành tế bào. Hôm nay em sẽ tự mình nhìn thấy điều đó: soi những quả trứng cá dưới kính lúp và tự làm một tiêu bản vảy hành để quan sát dưới kính hiển vi.',
  objectives: [
    'Làm được tiêu bản tế bào biểu bì vảy hành.',
    'Sử dụng được kính lúp và kính hiển vi quang học để quan sát tế bào; tính được độ phóng đại của kính hiển vi.',
    'Vẽ được hình tế bào quan sát được và chỉ ra các thành phần: màng tế bào hoặc thành tế bào, tế bào chất, nhân.',
    'Phân biệt được tế bào động vật (trứng cá) và tế bào thực vật (vảy hành).',
  ],
  sections: [
    {
      heading: 'Chuẩn bị',
      blocks: [
        {
          type: 'list',
          items: [
            'Dụng cụ: kính hiển vi quang học, kính lúp, lam kính, lamen, kim mũi mác, dao mổ, ống nhỏ giọt, giấy thấm, đĩa đồng hồ (hoặc đĩa petri), thìa nhỏ.',
            'Hoá chất: nước cất.',
            'Mẫu vật: củ hành tây, trứng cá chép (hoặc trứng cá khác).',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'An toàn',
          text: 'Dao mổ và kim mũi mác sắc nhọn: dùng cẩn thận, hướng mũi dao ra xa tay. Lam kính, lamen bằng thuỷ tinh mỏng, dễ vỡ. Cầm kính hiển vi bằng hai tay: một tay nắm thân kính, một tay đỡ chân kính.',
        },
      ],
    },
    {
      heading: 'Quan sát tế bào trứng cá',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Dùng thìa lấy một ít trứng cá cho vào đĩa đồng hồ, thêm vài giọt nước.',
            'Dùng kim mũi mác tách nhẹ để các trứng rời nhau.',
            'Quan sát bằng mắt thường rồi bằng kính lúp: tìm màng tế bào, tế bào chất và nhân (chấm nhỏ đậm màu).',
          ],
        },
        {
          type: 'p',
          text: 'Tế bào trứng cá có đường kính khoảng $1$ mm, đủ lớn để thấy được bằng mắt thường hay kính lúp. Nếu đặt dưới vật kính $40\\times$ của kính hiển vi, trường nhìn chỉ rộng khoảng $0{,}45$ mm, nhỏ hơn cả một quả trứng, nên em chỉ thấy một phần tế bào.',
        },
      ],
    },
    {
      heading: 'Làm tiêu bản và quan sát tế bào biểu bì vảy hành',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Dùng dao mổ tách lấy một vảy hành tươi.',
            'Cắt một ô vuông nhỏ (khoảng $7$ đến $8$ mm) ở mặt trong vảy hành, dùng kim mũi mác lột nhẹ lớp tế bào biểu bì mỏng, trong suốt.',
            'Nhỏ một giọt nước cất vào giữa lam kính, đặt lớp biểu bì vào giọt nước, trải phẳng, không để bị gập.',
            'Đậy lamen: đặt nghiêng một cạnh lamen chạm vào giọt nước rồi hạ từ từ xuống để không tạo bọt khí.',
            'Dùng giấy thấm hút phần nước thừa tràn ra ngoài lamen.',
            'Đặt tiêu bản lên bàn kính, quan sát ở vật kính $10\\times$ trước, sau đó chuyển sang vật kính $40\\times$ để thấy rõ hơn.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Chỉnh kính hiển vi',
          text: 'Mắt nhìn từ bên ngoài, vặn ốc to hạ vật kính xuống gần sát tiêu bản. Sau đó mắt nhìn vào thị kính, vặn ốc to theo chiều ngược lại để nâng vật kính lên đến khi thấy ảnh, rồi vặn ốc nhỏ để ảnh thật rõ nét. Khi chuyển sang vật kính $40\\times$, thường chỉ cần chỉnh ốc nhỏ.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Độ phóng đại của kính hiển vi',
          text: 'Độ phóng đại = độ phóng đại của thị kính $\\times$ độ phóng đại của vật kính. Với thị kính $10\\times$ và vật kính $40\\times$, ảnh được phóng to $10 \\cdot 40 = 400$ lần.',
        },
        {
          type: 'p',
          text: 'Lớp biểu bì phải thật mỏng (chỉ một lớp tế bào) để ánh sáng xuyên qua được, nhờ đó thấy rõ từng tế bào. Tế bào vảy hành hình gần chữ nhật, xếp sát nhau như những viên gạch; mỗi tế bào có thành tế bào bao ngoài, bên trong là tế bào chất và một nhân. Vảy hành nằm trong củ, không được chiếu sáng nên tế bào không có lục lạp.',
        },
      ],
    },
    {
      heading: 'Báo cáo thực hành',
      project: true,
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Vẽ hình tế bào trứng cá và tế bào biểu bì vảy hành em quan sát được, ghi chú thích các thành phần.',
            'Hoàn thành bảng so sánh bên dưới.',
            'Trả lời: thành phần nào quan sát được ở cả hai loại tế bào? Điểm khác nhau giữa chúng là gì?',
          ],
        },
        {
          type: 'table',
          caption: 'Kết quả quan sát',
          head: ['Thành phần', 'Tế bào trứng cá', 'Tế bào vảy hành'],
          rows: [
            ['Thành tế bào', 'Không có', 'Có'],
            ['Màng tế bào', 'Có', 'Có (nằm sát thành tế bào, khó thấy)'],
            ['Tế bào chất', 'Có', 'Có'],
            ['Nhân', 'Có', 'Có'],
            ['Loại tế bào', 'Tế bào động vật', 'Tế bào thực vật'],
          ],
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Kết luận',
          text: 'Cả hai loại tế bào đều có tế bào chất và nhân. Tế bào vảy hành (tế bào thực vật) có thành tế bào; tế bào trứng cá (tế bào động vật) không có thành tế bào.',
        },
      ],
    },
  ],
  explore: {
    title: 'Kính hiển vi ảo',
    instruction:
      'Chọn mẫu vật và dụng cụ. Vặn ốc to để tìm ảnh, rồi ốc nhỏ để ảnh rõ nét; mỗi khi đổi vật kính, ảnh có thể mờ đi và cần chỉnh lại. Thử quan sát vảy hành bằng kính lúp và trứng cá bằng vật kính $40\\times$ để thấy vì sao mỗi mẫu cần một dụng cụ phù hợp.',
  },
  examples: [
    {
      problem:
        'Một bạn dùng thị kính $10\\times$ và vật kính $40\\times$ để quan sát tế bào vảy hành dài khoảng $280\\ \\mu\\text{m}$. Ảnh được phóng to bao nhiêu lần, và tế bào trong ảnh dài khoảng bao nhiêu milimet?',
      steps: [
        'Độ phóng đại: $10 \\cdot 40 = 400$ lần.',
        'Chiều dài ảnh: $280 \\cdot 400 = 112\\,000\\ \\mu\\text{m}$.',
        'Đổi đơn vị: $112\\,000\\ \\mu\\text{m} = 112$ mm.',
      ],
      answer: 'Ảnh được phóng to $400$ lần; tế bào trong ảnh dài khoảng $112$ mm.',
    },
    {
      problem:
        'Khi quan sát, một bạn thấy trong tiêu bản vảy hành có nhiều vòng tròn viền đen to, rỗng, không có nhân. Đó là gì, vì sao có và làm thế nào để tránh?',
      steps: [
        'Vòng tròn viền đen, rỗng, không có cấu tạo tế bào là bọt khí.',
        'Bọt khí xuất hiện khi đậy lamen xuống quá nhanh hoặc đặt lamen nằm ngang, làm không khí bị nhốt lại.',
        'Cách tránh: đặt nghiêng một cạnh lamen chạm vào giọt nước rồi hạ từ từ xuống.',
      ],
      answer: 'Đó là bọt khí; cần đậy lamen nghiêng và hạ từ từ.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các bước làm tiêu bản tế bào biểu bì vảy hành theo đúng thứ tự.',
      items: [
        'Đậy lamen, dùng giấy thấm hút nước thừa',
        'Dùng dao mổ tách lấy một vảy hành',
        'Quan sát ở vật kính $10\\times$ rồi $40\\times$',
        'Lột lớp biểu bì mỏng ở mặt trong vảy hành',
        'Đặt lớp biểu bì vào giọt nước cất trên lam kính',
      ],
      answer: [1, 3, 4, 0, 2],
      hints: ['Phải có vảy hành trước khi lột biểu bì.', 'Quan sát là bước cuối cùng.'],
      solution:
        'Tách vảy hành → lột lớp biểu bì → đặt vào giọt nước trên lam kính → đậy lamen, thấm nước thừa → quan sát ở vật kính $10\\times$ rồi $40\\times$.',
    },
    {
      type: 'number',
      prompt:
        'Kính hiển vi có thị kính $10\\times$, vật kính $40\\times$. Ảnh được phóng to bao nhiêu lần?',
      answer: 400,
      hints: ['Nhân độ phóng đại của thị kính với độ phóng đại của vật kính.'],
      solution: '$10 \\cdot 40 = 400$ lần.',
    },
    {
      type: 'number',
      prompt:
        'Dùng thị kính $10\\times$, muốn ảnh được phóng to $100$ lần thì phải chọn vật kính phóng to bao nhiêu lần?',
      answer: 10,
      hints: ['Độ phóng đại = thị kính $\\times$ vật kính.'],
      solution: '$100 : 10 = 10$, vậy chọn vật kính $10\\times$.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao phải lột lớp biểu bì vảy hành thật mỏng?',
      options: [
        'Để tế bào không bị chết',
        'Để ánh sáng xuyên qua được, thấy rõ từng tế bào',
        'Để tiết kiệm mẫu vật',
        'Để tế bào có màu xanh',
      ],
      answer: 1,
      hints: ['Kính hiển vi quang học dùng ánh sáng chiếu xuyên qua mẫu vật.'],
      solution:
        'Lớp biểu bì mỏng (một lớp tế bào) cho ánh sáng đi qua, các tế bào không chồng lên nhau nên thấy rõ từng tế bào.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi dụng cụ với công dụng của nó trong bài thực hành.',
      left: ['Kim mũi mác', 'Lamen', 'Giấy thấm', 'Ống nhỏ giọt'],
      right: [
        'Hút phần nước thừa',
        'Lột lớp biểu bì, tách rời trứng cá',
        'Nhỏ nước cất lên lam kính',
        'Đậy lên mẫu vật cho phẳng',
        'Cắt, tách vảy hành',
      ],
      pairs: [
        [0, 1],
        [1, 3],
        [2, 0],
        [3, 2],
      ],
      hints: ['Có một công dụng thừa, đó là việc của dao mổ.'],
      solution:
        'Kim mũi mác: lột biểu bì, tách trứng cá. Lamen: đậy lên mẫu vật. Giấy thấm: hút nước thừa. Ống nhỏ giọt: nhỏ nước cất. Cắt, tách vảy hành là việc của dao mổ.',
    },
    {
      type: 'choice',
      prompt: 'Tế bào trứng cá nên được quan sát bằng',
      options: [
        'kính hiển vi với vật kính $40\\times$',
        'mắt thường hoặc kính lúp',
        'chỉ kính hiển vi điện tử',
        'không thể quan sát được',
      ],
      answer: 1,
      hints: ['Tế bào trứng cá có đường kính khoảng $1$ mm.'],
      solution:
        'Tế bào trứng cá lớn (khoảng $1$ mm) nên thấy được bằng mắt thường và rõ hơn với kính lúp. Ở vật kính $40\\times$, trường nhìn nhỏ hơn quả trứng nên chỉ thấy một phần tế bào.',
    },
    {
      type: 'choice',
      prompt: 'Thành phần nào quan sát được ở tế bào vảy hành nhưng không có ở tế bào trứng cá?',
      options: ['Nhân', 'Tế bào chất', 'Thành tế bào', 'Lục lạp'],
      answer: 2,
      hints: [
        'Vảy hành là tế bào thực vật, trứng cá là tế bào động vật.',
        'Vảy hành nằm trong củ, không được chiếu sáng.',
      ],
      solution:
        'Tế bào vảy hành có thành tế bào, tế bào trứng cá thì không. Cả hai đều có nhân và tế bào chất. Tế bào vảy hành không có lục lạp vì vảy hành nằm trong củ, không quang hợp.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các thành phần quan sát được ở cả tế bào trứng cá và tế bào vảy hành.',
      options: ['Nhân', 'Thành tế bào', 'Tế bào chất', 'Lục lạp'],
      answers: [0, 2],
      hints: ['Thành phần chung của mọi tế bào nhân thực.'],
      solution:
        'Cả hai loại tế bào đều có nhân và tế bào chất. Thành tế bào chỉ có ở tế bào vảy hành; cả hai đều không có lục lạp.',
    },
    {
      type: 'choice',
      prompt: 'Khi đậy lamen, cách nào giúp tránh tạo bọt khí?',
      options: [
        'Thả rơi lamen thẳng xuống giọt nước',
        'Đặt nghiêng một cạnh lamen chạm giọt nước rồi hạ từ từ',
        'Ấn mạnh lamen xuống mẫu vật',
        'Không nhỏ nước lên lam kính',
      ],
      answer: 1,
      hints: ['Không khí cần có đường thoát ra khi lamen hạ xuống.'],
      solution:
        'Đặt nghiêng lamen để nước lan dần và đẩy không khí ra ngoài, rồi hạ từ từ; như vậy không có bọt khí che mất tế bào.',
    },
    {
      type: 'choice',
      prompt: 'Khi đã thấy ảnh ở vật kính $10\\times$ và chuyển sang vật kính $40\\times$, em nên',
      options: [
        'vặn ốc to thật nhiều để hạ vật kính sát tiêu bản',
        'chỉ chỉnh nhẹ ốc nhỏ để ảnh rõ nét',
        'lấy tiêu bản ra làm lại',
        'tắt đèn chiếu sáng',
      ],
      answer: 1,
      hints: ['Ở độ phóng đại lớn, vật kính nằm rất gần tiêu bản.'],
      solution:
        'Ảnh gần như đã đúng tiêu cự, chỉ cần vặn ốc nhỏ. Vặn ốc to ở vật kính $40\\times$ dễ làm vật kính chạm, vỡ tiêu bản.',
    },
    {
      type: 'number',
      prompt:
        'Tế bào vảy hành dài khoảng $280\\ \\mu\\text{m}$. Qua kính hiển vi phóng to $100$ lần, tế bào trong ảnh dài bao nhiêu milimet?',
      answer: 28,
      tolerance: 0.01,
      unit: 'mm',
      hints: ['Nhân chiều dài thật với độ phóng đại.', '$1000\\ \\mu\\text{m} = 1$ mm.'],
      solution: '$280 \\cdot 100 = 28\\,000\\ \\mu\\text{m} = 28$ mm.',
    },
  ],
  takeaways: [
    'Tế bào trứng cá lớn (khoảng $1$ mm), quan sát bằng mắt thường hoặc kính lúp; tế bào vảy hành phải làm tiêu bản và quan sát dưới kính hiển vi.',
    'Làm tiêu bản: lột lớp biểu bì thật mỏng, đặt vào giọt nước cất trên lam kính, đậy lamen nghiêng tránh bọt khí, thấm nước thừa.',
    'Quan sát ở vật kính nhỏ trước, vật kính lớn sau; độ phóng đại = thị kính $\\times$ vật kính.',
    'Tế bào trứng cá (động vật) và tế bào vảy hành (thực vật) đều có tế bào chất và nhân; chỉ tế bào vảy hành có thành tế bào.',
  ],
};
