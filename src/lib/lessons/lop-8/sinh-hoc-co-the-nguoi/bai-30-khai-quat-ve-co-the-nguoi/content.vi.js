/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Các phần của cơ thể người; tám hệ cơ quan (vận động, tuần hoàn, hô hấp, tiêu hóa, bài tiết, thần kinh và giác quan, nội tiết, sinh dục) với các cơ quan và chức năng của chúng; sự phối hợp giữa các hệ cơ quan.',
  intro:
    'Khi em chạy thật nhanh, không chỉ đôi chân làm việc: tim đập thình thịch, em thở hổn hển và mồ hôi túa ra. Vì sao chỉ một hoạt động chạy mà nhiều bộ phận trong cơ thể cùng thay đổi như vậy? Để trả lời, trước hết em cần biết cơ thể người được cấu tạo từ những phần nào, gồm những hệ cơ quan nào và mỗi hệ làm nhiệm vụ gì.',
  objectives: [
    'Nêu được tên và vai trò chính của các cơ quan và hệ cơ quan trong cơ thể người.',
    'Kể được tên các cơ quan chính của mỗi hệ cơ quan và xác định vị trí của chúng trên hình cơ thể.',
    'Lấy được ví dụ về sự phối hợp hoạt động giữa các hệ cơ quan, do hệ thần kinh điều khiển.',
  ],
  sections: [
    {
      heading: 'Các phần của cơ thể người',
      blocks: [
        {
          type: 'p',
          text: 'Nhìn từ bên ngoài, cơ thể người gồm các phần: đầu, cổ, thân, hai tay và hai chân. Bao bọc bên ngoài cơ thể là lớp da; dưới da là lớp mỡ, rồi đến cơ và xương.',
        },
        {
          type: 'p',
          text: 'Cơ thể người được cấu tạo từ tế bào. Các tế bào cùng loại tạo thành mô, các mô tạo thành cơ quan, nhiều cơ quan cùng thực hiện một chức năng tạo thành hệ cơ quan.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Hệ cơ quan',
          text: 'Hệ cơ quan là tập hợp các cơ quan cùng phối hợp hoạt động để thực hiện một chức năng nhất định của cơ thể. Ví dụ: tim và mạch máu tạo thành hệ tuần hoàn.',
        },
      ],
    },
    {
      heading: 'Các hệ cơ quan và chức năng',
      blocks: [
        {
          type: 'table',
          caption: 'Các hệ cơ quan trong cơ thể người',
          head: ['Hệ cơ quan', 'Các cơ quan chính', 'Chức năng'],
          rows: [
            [
              'Vận động',
              'Xương, khớp, cơ',
              'Định hình cơ thể, bảo vệ nội quan, giúp cơ thể cử động và di chuyển',
            ],
            [
              'Tuần hoàn',
              'Tim, mạch máu',
              'Vận chuyển chất dinh dưỡng, oxygen, hormone đến tế bào; đưa chất thải đến cơ quan bài tiết',
            ],
            [
              'Hô hấp',
              'Mũi, họng, thanh quản, khí quản, phế quản, hai lá phổi',
              'Lấy oxygen từ môi trường vào và thải carbon dioxide ra ngoài',
            ],
            [
              'Tiêu hóa',
              'Miệng, thực quản, dạ dày, ruột non, ruột già, hậu môn và các tuyến tiêu hóa',
              'Biến đổi thức ăn thành chất dinh dưỡng cơ thể hấp thụ được; thải chất cặn bã',
            ],
            [
              'Bài tiết',
              'Thận, ống dẫn nước tiểu, bóng đái; phổi, da',
              'Lọc các chất thải có hại khỏi máu và thải ra môi trường',
            ],
            [
              'Thần kinh và giác quan',
              'Não, tủy sống, dây thần kinh, hạch thần kinh; các giác quan (mắt, tai, ...)',
              'Thu nhận kích thích, điều khiển và điều hòa hoạt động của các cơ quan, giúp cơ thể thích nghi với môi trường',
            ],
            [
              'Nội tiết',
              'Tuyến yên, tuyến giáp, tuyến tụy, tuyến trên thận, tuyến sinh dục, ...',
              'Tiết hormone điều hòa hoạt động của các cơ quan',
            ],
            [
              'Sinh dục',
              'Nam: tinh hoàn, ống dẫn tinh, túi tinh, dương vật. Nữ: buồng trứng, ống dẫn trứng, tử cung, âm đạo',
              'Sinh sản, duy trì nòi giống',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Ở phần khám phá, em bật từng hệ cơ quan để thấy vị trí các cơ quan của hệ đó trên cơ thể. Sau đó, hãy tự kiểm tra bằng cách xếp mỗi cơ quan vào đúng hệ của nó:',
        },
        { type: 'widget', name: 'he-co-quan' },
      ],
    },
    {
      heading: 'Mối liên hệ giữa các hệ cơ quan',
      blocks: [
        {
          type: 'p',
          text: 'Các cơ quan và hệ cơ quan trong cơ thể không hoạt động riêng rẽ mà luôn phối hợp chặt chẽ với nhau, tạo nên một thể thống nhất.',
        },
        {
          type: 'list',
          items: [
            'Khi chạy, hệ vận động hoạt động mạnh, cơ cần nhiều oxygen và chất dinh dưỡng hơn, đồng thời thải ra nhiều carbon dioxide và nhiệt.',
            'Hệ tuần hoàn tăng hoạt động: tim đập nhanh và mạnh hơn, mạch máu giãn để đưa nhiều máu đến cơ.',
            'Hệ hô hấp tăng hoạt động: thở nhanh và sâu hơn để lấy thêm oxygen, thải carbon dioxide.',
            'Da tiết nhiều mồ hôi giúp thải nhiệt và một phần chất thải.',
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Sự điều khiển',
          text: 'Sự phối hợp hoạt động giữa các hệ cơ quan được điều khiển bởi hệ thần kinh, cùng với sự điều hòa của hệ nội tiết thông qua hormone.',
        },
      ],
    },
  ],
  explore: {
    title: 'Hình người với các hệ cơ quan',
    instruction:
      'Bấm tên một hệ để bật hoặc tắt hệ đó trên hình. Chạm vào một cơ quan có màu để đọc tên và chức năng. Chuyển sang "Chạy" để thấy những hệ nào cùng tăng hoạt động.',
  },
  examples: [
    {
      problem:
        'Em vừa ăn xong bữa trưa. Hãy kể tên các hệ cơ quan tham gia đưa chất dinh dưỡng trong cơm đến tế bào cơ ở chân và giải thích vai trò của từng hệ.',
      steps: [
        'Hệ tiêu hóa biến đổi cơm (chủ yếu là tinh bột) thành chất dinh dưỡng đơn giản và hấp thụ chúng vào máu ở ruột non.',
        'Hệ tuần hoàn vận chuyển chất dinh dưỡng theo máu đến tế bào cơ ở chân.',
        'Để sử dụng chất dinh dưỡng tạo năng lượng, tế bào cần oxygen do hệ hô hấp lấy vào và hệ tuần hoàn vận chuyển đến.',
        'Hệ thần kinh (và hệ nội tiết) điều khiển, điều hòa hoạt động của các hệ trên.',
      ],
      answer:
        'Hệ tiêu hóa (biến đổi, hấp thụ), hệ tuần hoàn (vận chuyển), hệ hô hấp (cung cấp oxygen), dưới sự điều khiển của hệ thần kinh và hệ nội tiết.',
    },
    {
      problem: 'Vì sao khi chơi bóng đá, cầu thủ thở nhanh hơn và tim đập nhanh hơn lúc ngồi nghỉ?',
      steps: [
        'Khi chơi bóng, hệ vận động (cơ chân, cơ tay) hoạt động mạnh nên tế bào cơ cần nhiều năng lượng.',
        'Để tạo nhiều năng lượng, tế bào cơ cần nhiều oxygen và chất dinh dưỡng, đồng thời thải nhiều carbon dioxide.',
        'Hệ hô hấp tăng nhịp thở để lấy nhiều oxygen và thải carbon dioxide; hệ tuần hoàn tăng nhịp tim để vận chuyển các chất nhanh hơn.',
        'Hệ thần kinh điều khiển sự thay đổi đồng thời này.',
      ],
      answer:
        'Vì các hệ cơ quan phối hợp với nhau: hệ vận động hoạt động mạnh kéo theo hệ hô hấp và hệ tuần hoàn tăng hoạt động, dưới sự điều khiển của hệ thần kinh.',
    },
  ],
  practice: [
    {
      type: 'multi',
      prompt: 'Chọn tất cả các phần của cơ thể người khi nhìn từ bên ngoài.',
      options: ['Đầu', 'Cổ', 'Thân', 'Tay và chân', 'Phổi'],
      answers: [0, 1, 2, 3],
      hints: ['Phần nào nhìn thấy được từ bên ngoài, phần nào nằm bên trong?'],
      solution:
        'Cơ thể người gồm đầu, cổ, thân, hai tay và hai chân. Phổi là cơ quan nằm bên trong thân (lồng ngực).',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi hệ cơ quan với các cơ quan chính của nó.',
      left: ['Hệ tuần hoàn', 'Hệ hô hấp', 'Hệ bài tiết', 'Hệ thần kinh'],
      right: [
        'Thận, ống dẫn nước tiểu, bóng đái',
        'Não, tủy sống, dây thần kinh',
        'Tim, mạch máu',
        'Đường dẫn khí, hai lá phổi',
        'Tinh hoàn, buồng trứng',
      ],
      pairs: [
        [0, 2],
        [1, 3],
        [2, 0],
        [3, 1],
      ],
      hints: ['Hệ nào vận chuyển máu? Hệ nào lọc máu tạo nước tiểu?'],
      solution:
        'Tuần hoàn: tim, mạch máu. Hô hấp: đường dẫn khí, hai lá phổi. Bài tiết: thận, ống dẫn nước tiểu, bóng đái. Thần kinh: não, tủy sống, dây thần kinh. Tinh hoàn, buồng trứng thuộc hệ sinh dục.',
    },
    {
      type: 'choice',
      prompt:
        'Hệ cơ quan nào có chức năng vận chuyển chất dinh dưỡng, oxygen và hormone đến các tế bào?',
      options: ['Hệ tiêu hóa', 'Hệ tuần hoàn', 'Hệ hô hấp', 'Hệ nội tiết'],
      answer: 1,
      hints: ['Các chất được chở đi khắp cơ thể nhờ dòng máu.'],
      solution:
        'Hệ tuần hoàn (tim và mạch máu) vận chuyển chất dinh dưỡng, oxygen, hormone đến tế bào và đưa chất thải đến cơ quan bài tiết.',
    },
    {
      type: 'choice',
      prompt: 'Hệ nội tiết điều hòa hoạt động của các cơ quan bằng cách nào?',
      options: [
        'Truyền xung thần kinh theo dây thần kinh',
        'Tiết hormone vào máu',
        'Co và dãn cơ',
        'Lọc chất thải khỏi máu',
      ],
      answer: 1,
      hints: ['Tuyến yên, tuyến giáp, tuyến tụy tiết ra chất gì?'],
      solution:
        'Các tuyến nội tiết tiết hormone; hormone theo máu đến các cơ quan và điều hòa hoạt động của chúng.',
    },
    {
      type: 'multi',
      prompt: 'Những cơ quan nào tham gia thải chất thải ra khỏi cơ thể (bài tiết)?',
      options: ['Thận', 'Phổi', 'Da', 'Tim', 'Não'],
      answers: [0, 1, 2],
      hints: ['Nước tiểu, khí carbon dioxide và mồ hôi được thải qua những cơ quan nào?'],
      solution:
        'Thận thải nước tiểu, phổi thải khí carbon dioxide, da thải mồ hôi. Tim và não không làm nhiệm vụ bài tiết.',
    },
    {
      type: 'choice',
      prompt: 'Cơ quan nào sau đây thuộc hệ vận động?',
      options: ['Dạ dày', 'Khớp gối', 'Khí quản', 'Tuyến giáp'],
      answer: 1,
      hints: ['Hệ vận động gồm xương, khớp và cơ.'],
      solution: 'Khớp gối nối xương đùi với xương cẳng chân, thuộc hệ vận động.',
    },
    {
      type: 'choice',
      prompt: 'Khi em chạy, hệ nào điều khiển sự phối hợp tăng hoạt động của tim, phổi và cơ?',
      options: ['Hệ tiêu hóa', 'Hệ bài tiết', 'Hệ thần kinh', 'Hệ sinh dục'],
      answer: 2,
      hints: ['Hệ này thu nhận kích thích và điều khiển hoạt động các cơ quan.'],
      solution:
        'Hệ thần kinh điều khiển và điều hòa hoạt động của các hệ cơ quan, giúp chúng phối hợp nhịp nhàng.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các cấp tổ chức của cơ thể người từ nhỏ đến lớn.',
      items: ['Cơ quan', 'Tế bào', 'Cơ thể', 'Mô', 'Hệ cơ quan'],
      answer: [1, 3, 0, 4, 2],
      hints: ['Đơn vị nhỏ nhất cấu tạo nên cơ thể là tế bào.'],
      solution: 'Tế bào → mô → cơ quan → hệ cơ quan → cơ thể.',
    },
  ],
  takeaways: [
    'Cơ thể người gồm đầu, cổ, thân, hai tay và hai chân; ngoài cùng là da, dưới da là mỡ, cơ và xương.',
    'Cơ thể có các hệ: vận động, tuần hoàn, hô hấp, tiêu hóa, bài tiết, thần kinh và giác quan, nội tiết, sinh dục; mỗi hệ gồm nhiều cơ quan cùng thực hiện một chức năng.',
    'Các hệ cơ quan phối hợp chặt chẽ với nhau, tạo thành một thể thống nhất, dưới sự điều khiển của hệ thần kinh và sự điều hòa của hệ nội tiết.',
  ],
};
