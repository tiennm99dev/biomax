/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Tế bào lớn lên đến một kích thước nhất định thì phân chia: nhân chia trước, tế bào chất chia sau, tạo hai tế bào con; từ một tế bào, sau n lần phân chia có 2^n tế bào, giúp cơ thể lớn lên và thay thế tế bào già, chết.',
  intro:
    'Khi mới sinh, em chỉ nặng khoảng ba ki-lô-gam; bây giờ em đã cao lớn hơn rất nhiều. Một hạt ngô nhỏ nảy mầm thành cây ngô cao quá đầu người. Cơ thể lớn lên được là nhờ đâu? Bí mật nằm ở những tế bào nhỏ bé: chúng lớn lên rồi phân chia, từ một tế bào thành hai, hai thành bốn, bốn thành tám...',
  objectives: [
    'Mô tả được sự lớn lên của tế bào.',
    'Mô tả được quá trình phân chia (sinh sản) của tế bào: nhân phân chia trước, tế bào chất phân chia sau; nêu được điểm khác nhau ở tế bào động vật và tế bào thực vật.',
    'Tính được số tế bào tạo thành sau $n$ lần phân chia: $2^n$ tế bào từ một tế bào ban đầu.',
    'Nêu được ý nghĩa của sự lớn lên và sinh sản của tế bào đối với cơ thể.',
  ],
  sections: [
    {
      heading: 'Sự lớn lên và sự sinh sản của tế bào',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Sự lớn lên của tế bào',
          text: 'Tế bào non mới hình thành có kích thước nhỏ. Nhờ trao đổi chất, tế bào lấy chất dinh dưỡng từ môi trường và lớn dần lên đến một kích thước nhất định. Ở tế bào thực vật, không bào cũng to dần ra.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Sự sinh sản (phân chia) của tế bào',
          text: 'Khi lớn đến một kích thước nhất định, tế bào phân chia: từ một tế bào mẹ tạo thành hai tế bào con. Đầu tiên nhân phân chia thành hai nhân, sau đó tế bào chất phân chia, tách thành hai tế bào con.',
        },
        {
          type: 'table',
          caption: 'Phân chia tế bào chất ở tế bào động vật và tế bào thực vật',
          head: ['Đặc điểm', 'Tế bào động vật', 'Tế bào thực vật'],
          rows: [
            ['Giống nhau', 'Nhân phân chia trước', 'Nhân phân chia trước'],
            [
              'Khác nhau',
              'Màng tế bào thắt lại ở giữa, tách tế bào chất làm hai',
              'Hình thành vách ngăn ở giữa, chia tế bào chất làm hai',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Em hãy xem từng giai đoạn trên hình dưới đây, với cả tế bào động vật và tế bào thực vật.',
        },
        { type: 'widget', name: 'cac-giai-doan' },
      ],
    },
    {
      heading: 'Số tế bào sau các lần phân chia',
      blocks: [
        {
          type: 'p',
          text: 'Mỗi lần phân chia, mỗi tế bào tạo ra hai tế bào con, nên số tế bào tăng gấp đôi. Từ một tế bào ban đầu:',
        },
        {
          type: 'table',
          head: ['Số lần phân chia', '$0$', '$1$', '$2$', '$3$', '$4$', '$n$'],
          rows: [['Số tế bào', '$1$', '$2$', '$4$', '$8$', '$16$', '$2^n$']],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Công thức',
          text: 'Từ một tế bào, sau $n$ lần phân chia tạo ra $2^n$ tế bào. Nếu có $a$ tế bào cùng phân chia $n$ lần thì tạo ra $a \\cdot 2^n$ tế bào.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Gấp đôi, không phải cộng thêm',
          text: 'Sau mỗi lần phân chia, số tế bào được nhân $2$ chứ không cộng thêm $2$. Ví dụ, sau $3$ lần phân chia có $2 \\cdot 2 \\cdot 2 = 8$ tế bào, không phải $1 + 2 + 2 + 2 = 7$ tế bào.',
        },
      ],
    },
    {
      heading: 'Ý nghĩa của sự lớn lên và sinh sản của tế bào',
      blocks: [
        {
          type: 'list',
          items: [
            'Giúp cơ thể lớn lên: số lượng tế bào tăng lên (nhờ phân chia) và kích thước tế bào tăng lên (nhờ lớn lên). Ví dụ, cây ngô lớn lên nhờ tế bào ở các mô phân sinh phân chia và lớn lên.',
            'Thay thế các tế bào già, tế bào chết và tế bào bị tổn thương. Ví dụ, các tế bào da mới liên tục thay cho tế bào da chết bong ra; khi bị đứt tay, tế bào phân chia để làm lành vết thương.',
            'Ở sinh vật đơn bào như vi khuẩn, sự phân chia tế bào chính là sự sinh sản tạo ra cá thể mới.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Em có biết',
          text: 'Cơ thể luôn điều khiển để tế bào chỉ phân chia khi cần. Nếu một nhóm tế bào phân chia liên tục, mất kiểm soát, chúng có thể tạo thành khối u. Lối sống lành mạnh, tránh khói thuốc lá và hoá chất độc hại giúp giảm nguy cơ này.',
        },
      ],
    },
  ],
  explore: {
    title: 'Đếm tế bào sau mỗi lần phân chia',
    instruction:
      'Bắt đầu từ một tế bào. Trước mỗi lần bấm "Phân chia", hãy đoán số tế bào sẽ có rồi kiểm tra. Bảng bên dưới ghi lại số tế bào sau mỗi lần; em hãy tìm quy luật $1, 2, 4, 8, \\dots$',
  },
  examples: [
    {
      problem: 'Từ một tế bào ban đầu, sau $4$ lần phân chia liên tiếp tạo ra bao nhiêu tế bào?',
      steps: [
        'Mỗi lần phân chia, số tế bào tăng gấp đôi: $1 \\to 2 \\to 4 \\to 8 \\to 16$.',
        'Hay dùng công thức: $2^4 = 2 \\cdot 2 \\cdot 2 \\cdot 2 = 16$.',
      ],
      answer: 'Tạo ra $16$ tế bào.',
    },
    {
      problem:
        'Có $5$ tế bào, mỗi tế bào đều phân chia $3$ lần. Tổng số tế bào con tạo thành là bao nhiêu?',
      steps: [
        'Mỗi tế bào sau $3$ lần phân chia tạo ra $2^3 = 8$ tế bào.',
        '$5$ tế bào tạo ra $5 \\cdot 8 = 40$ tế bào.',
      ],
      answer: 'Tạo thành $40$ tế bào.',
    },
    {
      problem: 'Từ một tế bào, phải qua bao nhiêu lần phân chia để tạo ra $128$ tế bào?',
      steps: [
        'Cần tìm $n$ sao cho $2^n = 128$.',
        'Nhân đôi liên tiếp: $2, 4, 8, 16, 32, 64, 128$, tức là $2^7 = 128$.',
      ],
      answer: 'Phải qua $7$ lần phân chia.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Một tế bào phân chia một lần tạo ra bao nhiêu tế bào con?',
      options: ['$1$', '$2$', '$3$', '$4$'],
      answer: 1,
      hints: ['Tế bào mẹ tách làm đôi.'],
      solution: 'Một tế bào mẹ phân chia tạo thành $2$ tế bào con.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các giai đoạn theo đúng thứ tự, từ một tế bào non đến hai tế bào con.',
      items: [
        'Tế bào chất phân chia',
        'Tế bào non lớn lên đến một kích thước nhất định',
        'Hình thành hai tế bào con',
        'Nhân phân chia thành hai nhân',
      ],
      answer: [1, 3, 0, 2],
      hints: [
        'Tế bào phải lớn lên trước khi phân chia.',
        'Bộ phận nào phân chia trước: nhân hay tế bào chất?',
      ],
      solution:
        'Tế bào non lớn lên → nhân phân chia → tế bào chất phân chia → hình thành hai tế bào con.',
    },
    {
      type: 'number',
      prompt: 'Từ một tế bào, sau $3$ lần phân chia tạo ra bao nhiêu tế bào?',
      answer: 8,
      hints: ['Mỗi lần phân chia, số tế bào gấp đôi.'],
      solution: '$2^3 = 8$ tế bào.',
    },
    {
      type: 'number',
      prompt: 'Từ một tế bào, sau $5$ lần phân chia tạo ra bao nhiêu tế bào?',
      answer: 32,
      hints: ['Tính $2^5$.'],
      solution: '$2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$ tế bào.',
    },
    {
      type: 'number',
      prompt: 'Có $4$ tế bào, mỗi tế bào đều phân chia $2$ lần. Có tất cả bao nhiêu tế bào con?',
      answer: 16,
      hints: [
        'Mỗi tế bào sau $2$ lần phân chia cho $2^2$ tế bào.',
        'Nhân kết quả với số tế bào ban đầu.',
      ],
      solution: 'Mỗi tế bào tạo ra $2^2 = 4$ tế bào; $4$ tế bào tạo ra $4 \\cdot 4 = 16$ tế bào.',
    },
    {
      type: 'number',
      prompt: 'Từ một tế bào, phải qua bao nhiêu lần phân chia để tạo ra $64$ tế bào?',
      answer: 6,
      hints: ['Tìm $n$ để $2^n = 64$.', 'Nhân đôi liên tiếp từ $1$ và đếm số lần.'],
      solution:
        '$1 \\to 2 \\to 4 \\to 8 \\to 16 \\to 32 \\to 64$: $2^6 = 64$, vậy cần $6$ lần phân chia.',
    },
    {
      type: 'number',
      prompt:
        'Trong điều kiện thuận lợi, vi khuẩn E. coli cứ khoảng $20$ phút phân chia một lần. Từ một vi khuẩn, sau $2$ giờ có bao nhiêu vi khuẩn?',
      answer: 64,
      hints: ['Đổi $2$ giờ ra phút rồi tìm số lần phân chia.', '$120 : 20 = 6$ lần.'],
      solution: '$2$ giờ $= 120$ phút; số lần phân chia: $120 : 20 = 6$. Số vi khuẩn: $2^6 = 64$.',
    },
    {
      type: 'choice',
      prompt: 'Khi phân chia, tế bào chất của tế bào thực vật được chia làm hai bằng cách',
      options: [
        'màng tế bào thắt lại ở giữa',
        'hình thành vách ngăn ở giữa tế bào',
        'nhân tan ra trong tế bào chất',
        'lục lạp tách tế bào làm đôi',
      ],
      answer: 1,
      hints: ['Tế bào thực vật có thành tế bào cứng, không thắt lại được.'],
      solution:
        'Ở tế bào thực vật, một vách ngăn hình thành ở giữa chia tế bào chất làm hai. Màng tế bào thắt lại ở giữa là cách phân chia của tế bào động vật.',
    },
    {
      type: 'multi',
      prompt: 'Sự lớn lên và sinh sản của tế bào có những ý nghĩa nào với cơ thể?',
      options: [
        'Giúp cơ thể lớn lên',
        'Thay thế các tế bào già, tế bào chết',
        'Giúp làm lành vết thương',
        'Làm cho mỗi tế bào to ra mãi không ngừng',
        'Làm giảm số lượng tế bào của cơ thể',
      ],
      answers: [0, 1, 2],
      hints: ['Tế bào chỉ lớn đến một kích thước nhất định rồi phân chia.'],
      solution:
        'Lớn lên và phân chia giúp cơ thể lớn lên, thay thế tế bào già, chết và tổn thương (làm lành vết thương). Tế bào không to ra mãi, và phân chia làm tăng chứ không giảm số tế bào.',
    },
    {
      type: 'choice',
      prompt: 'Cây ngô từ một cây con nhỏ lớn lên thành cây cao là nhờ',
      options: [
        'tế bào chỉ tăng kích thước, không tăng số lượng',
        'tế bào lớn lên và phân chia, làm tăng kích thước và số lượng tế bào',
        'cây hút nhiều nước làm thân dài ra',
        'tế bào già không bao giờ chết đi',
      ],
      answer: 1,
      hints: ['Cơ thể lớn lên cần cả hai quá trình của tế bào.'],
      solution:
        'Cây ngô lớn lên nhờ sự lớn lên (tăng kích thước) và sự phân chia (tăng số lượng) của tế bào.',
    },
  ],
  takeaways: [
    'Tế bào non lớn lên đến một kích thước nhất định thì phân chia (sinh sản).',
    'Khi phân chia, nhân chia trước, tế bào chất chia sau, tạo hai tế bào con. Tế bào động vật thắt màng ở giữa; tế bào thực vật hình thành vách ngăn.',
    'Từ một tế bào, sau $n$ lần phân chia có $2^n$ tế bào; $a$ tế bào phân chia $n$ lần tạo ra $a \\cdot 2^n$ tế bào.',
    'Sự lớn lên và sinh sản của tế bào giúp cơ thể lớn lên và thay thế các tế bào già, chết, bị tổn thương.',
  ],
};
