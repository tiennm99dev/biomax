/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Chức năng và cấu tạo cơ quan sinh dục nam, nữ; thụ tinh và thụ thai; hiện tượng kinh nguyệt; các biện pháp tránh thai; một số bệnh lây truyền qua đường tình dục và bảo vệ sức khỏe sinh sản ở tuổi vị thành niên.',
  intro:
    'Mỗi người chúng ta đều bắt đầu từ một tế bào duy nhất, hợp tử, hình thành khi một tinh trùng kết hợp với một trứng. Hệ sinh dục làm thế nào để tạo ra tinh trùng, trứng và nuôi dưỡng một em bé? Ở tuổi dậy thì, em cần biết gì để bảo vệ sức khỏe sinh sản của mình?',
  objectives: [
    'Nêu được chức năng của hệ sinh dục; kể tên và nêu được chức năng của các cơ quan sinh dục nam và nữ.',
    'Phân biệt được thụ tinh và thụ thai; nêu được hiện tượng kinh nguyệt.',
    'Nêu được các nguyên tắc và một số biện pháp tránh thai.',
    'Kể tên được một số bệnh lây truyền qua đường tình dục và cách phòng tránh; nêu được ý nghĩa của bảo vệ sức khỏe sinh sản vị thành niên.',
  ],
  sections: [
    {
      heading: 'Cơ quan sinh dục',
      blocks: [
        {
          type: 'p',
          text: 'Hệ sinh dục có chức năng sinh sản, duy trì nòi giống. Cơ quan sinh dục nam sản sinh tinh trùng, cơ quan sinh dục nữ sản sinh trứng và là nơi thai phát triển. Tinh hoàn và buồng trứng còn tiết hormone sinh dục, gây nên những biến đổi ở tuổi dậy thì.',
        },
        {
          type: 'table',
          caption: 'Cơ quan sinh dục nam',
          head: ['Bộ phận', 'Chức năng'],
          rows: [
            [
              'Tinh hoàn',
              'Sản sinh tinh trùng (từ tuổi dậy thì); tiết hormone sinh dục nam testosterone',
            ],
            [
              'Bìu',
              'Chứa và bảo vệ tinh hoàn, giữ nhiệt độ khoảng $33$ – $34\\,^\\circ\\text{C}$, thấp hơn thân nhiệt, thích hợp cho sự sản sinh tinh trùng',
            ],
            ['Mào tinh', 'Nơi tinh trùng tiếp tục phát triển, hoàn thiện về cấu tạo'],
            ['Ống dẫn tinh', 'Dẫn tinh trùng từ mào tinh đến túi tinh'],
            ['Túi tinh', 'Chứa tinh trùng'],
            [
              'Tuyến tiền liệt, tuyến hành',
              'Tiết dịch hòa với tinh trùng tạo thành tinh dịch, nuôi dưỡng tinh trùng',
            ],
            [
              'Dương vật (có ống đái)',
              'Đưa tinh dịch vào âm đạo; ống đái là đường dẫn chung của nước tiểu và tinh dịch',
            ],
          ],
        },
        {
          type: 'table',
          caption: 'Cơ quan sinh dục nữ',
          head: ['Bộ phận', 'Chức năng'],
          rows: [
            [
              'Buồng trứng',
              'Sản sinh trứng (từ tuổi dậy thì, thường mỗi chu kì có một trứng chín và rụng); tiết hormone estrogen, progesterone',
            ],
            [
              'Ống dẫn trứng (có phễu ở đầu)',
              'Phễu hứng trứng rụng; ống dẫn trứng đưa trứng về tử cung, là nơi xảy ra sự thụ tinh',
            ],
            ['Tử cung', 'Nơi phôi làm tổ và phát triển thành thai'],
            ['Âm đạo', 'Nơi tiếp nhận tinh trùng; đường ra của máu kinh và của thai nhi khi sinh'],
          ],
        },
        { type: 'widget', name: 'co-quan-nu' },
      ],
    },
    {
      heading: 'Thụ tinh và thụ thai',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Thụ tinh',
          text: 'Thụ tinh là sự kết hợp giữa trứng và tinh trùng tạo thành hợp tử. Sự thụ tinh thường xảy ra ở đoạn $\\tfrac{1}{3}$ phía ngoài của ống dẫn trứng (gần buồng trứng).',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Thụ thai',
          text: 'Thụ thai là hiện tượng trứng đã thụ tinh (phôi) di chuyển xuống tử cung, bám và làm tổ trong lớp niêm mạc tử cung để phát triển thành thai.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Trứng chín rụng khỏi buồng trứng, được phễu hứng vào ống dẫn trứng.',
            'Tinh trùng từ âm đạo bơi qua tử cung lên ống dẫn trứng; một tinh trùng chui vào trứng: sự thụ tinh, tạo hợp tử.',
            'Hợp tử vừa phân chia thành phôi vừa di chuyển xuống tử cung (khoảng $6$ – $7$ ngày).',
            'Phôi bám và làm tổ trong niêm mạc tử cung: sự thụ thai. Phôi phát triển thành thai, được nuôi qua nhau thai.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Điều kiện để có thai',
          text: 'Trứng phải gặp tinh trùng và được thụ tinh; sau đó trứng đã thụ tinh phải làm tổ được trong niêm mạc tử cung. Tinh trùng có thể sống trong cơ quan sinh dục nữ khoảng $3$ – $5$ ngày, còn trứng sau khi rụng chỉ có khả năng thụ tinh trong khoảng một ngày.',
        },
      ],
    },
    {
      heading: 'Hiện tượng kinh nguyệt',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Kinh nguyệt',
          text: 'Kinh nguyệt là hiện tượng trứng không được thụ tinh, lớp niêm mạc tử cung bong ra từng mảng, thoát ra ngoài cùng với máu và dịch nhầy. Kinh nguyệt diễn ra theo chu kì, thường từ $28$ đến $32$ ngày, mỗi lần kéo dài khoảng $3$ – $5$ ngày. Có kinh nguyệt là dấu hiệu bạn gái đã dậy thì.',
        },
        {
          type: 'table',
          caption: 'Các giai đoạn của chu kì kinh nguyệt (chu kì $28$ ngày)',
          head: ['Ngày', 'Buồng trứng', 'Niêm mạc tử cung', 'Hormone'],
          rows: [
            ['$1$ – $5$', 'Nang trứng mới bắt đầu phát triển', 'Bong ra: hành kinh', 'Thấp'],
            [
              '$6$ – $13$',
              'Nang trứng lớn dần, trứng chín',
              'Dày lên trở lại',
              'Estrogen tăng dần',
            ],
            ['$14$', 'Trứng rụng', 'Đã khá dày', 'Estrogen cao nhất rồi giảm'],
            [
              '$15$ – $28$',
              'Nang trứng biến thành thể vàng',
              'Dày, xốp, nhiều mạch máu, đón phôi',
              'Thể vàng tiết progesterone',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Trứng rụng khoảng $14$ ngày trước kì kinh tiếp theo. Nếu trứng không được thụ tinh, thể vàng teo đi, lượng progesterone giảm, niêm mạc tử cung bong ra: một kì kinh mới bắt đầu. Nếu trứng được thụ tinh và phôi làm tổ, thể vàng được duy trì, tiếp tục tiết progesterone, niêm mạc không bong ra nên người phụ nữ không có kinh nguyệt trong thời gian mang thai.',
        },
      ],
    },
    {
      heading: 'Các biện pháp tránh thai',
      blocks: [
        {
          type: 'p',
          text: 'Muốn tránh thai cần ngăn một trong các điều kiện của sự thụ thai. Các biện pháp tránh thai dựa vào ba nguyên tắc:',
        },
        {
          type: 'list',
          items: [
            'Ngăn trứng chín và rụng: uống thuốc tránh thai đúng chỉ dẫn.',
            'Ngăn tinh trùng gặp trứng: dùng bao cao su; thắt ống dẫn tinh hoặc thắt ống dẫn trứng; tránh quan hệ tình dục vào thời kì trứng rụng.',
            'Ngăn trứng đã thụ tinh làm tổ: đặt vòng tránh thai (dụng cụ tử cung).',
          ],
        },
        { type: 'widget', name: 'tranh-thai' },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Lưu ý',
          text: 'Bao cao su là biện pháp vừa tránh thai vừa phòng được các bệnh lây truyền qua đường tình dục. Cách tính ngày trứng rụng kém tin cậy vì chu kì kinh nguyệt có thể không đều, nhất là ở tuổi vị thành niên.',
        },
      ],
    },
    {
      heading: 'Bảo vệ sức khỏe sinh sản',
      blocks: [
        {
          type: 'table',
          caption: 'Một số bệnh lây truyền qua đường tình dục',
          head: ['Bệnh', 'Tác nhân', 'Tác hại'],
          rows: [
            [
              'Lậu',
              'Song cầu khuẩn lậu (vi khuẩn)',
              'Viêm, tiểu buốt, chảy mủ ở đường sinh dục; có thể gây vô sinh, chửa ngoài dạ con; lây sang con khi sinh gây mù',
            ],
            [
              'Giang mai',
              'Xoắn khuẩn giang mai (vi khuẩn)',
              'Vết loét ở cơ quan sinh dục, phát ban; về sau tổn thương tim mạch, thần kinh; có thể truyền sang thai nhi',
            ],
            [
              'HIV/AIDS',
              'Virus HIV',
              'Phá hủy tế bào bạch cầu, làm suy giảm miễn dịch; người bệnh dễ mắc các bệnh cơ hội và tử vong',
            ],
          ],
        },
        {
          type: 'p',
          text: 'HIV lây qua ba con đường: quan hệ tình dục không an toàn, đường máu (dùng chung kim tiêm, truyền máu nhiễm HIV) và từ mẹ sang con. HIV không lây khi bắt tay, ôm, ăn chung hay dùng chung nhà vệ sinh.',
        },
        {
          type: 'list',
          items: [
            'Không quan hệ tình dục sớm; sống chung thủy một vợ một chồng; sử dụng bao cao su.',
            'Không dùng chung kim tiêm, dao cạo; chỉ truyền máu đã được xét nghiệm.',
            'Giữ vệ sinh cơ quan sinh dục, nhất là trong những ngày hành kinh; khám và điều trị sớm khi có dấu hiệu bất thường.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Mang thai ở tuổi vị thành niên',
          text: 'Ở tuổi vị thành niên, cơ thể, nhất là cơ quan sinh dục, chưa phát triển hoàn chỉnh. Mang thai sớm dễ gây sẩy thai, đẻ non, con nhẹ cân, nguy cơ tử vong của mẹ cao; nạo phá thai có thể gây viêm nhiễm, thủng tử cung, vô sinh; việc học tập và tương lai bị ảnh hưởng. Vì vậy cần tránh quan hệ tình dục sớm, tìm hiểu kiến thức sức khỏe sinh sản từ nguồn tin cậy và chia sẻ với cha mẹ, thầy cô, nhân viên y tế khi cần.',
        },
      ],
    },
  ],
  explore: {
    title: 'Lịch chu kì kinh nguyệt',
    instruction:
      'Ở chế độ "Khám phá", chọn từng ngày trên lịch (bấm hoặc dùng phím mũi tên) hoặc bấm lên đồ thị để xem buồng trứng, niêm mạc tử cung và hormone thay đổi thế nào. Đổi độ dài chu kì để thấy ngày trứng rụng dịch chuyển; bật "Trứng rụng được thụ tinh" để xem vì sao khi có thai không có kinh nguyệt. Sau đó thử chế độ "Thử thách".',
  },
  examples: [
    {
      problem:
        'Một bạn nữ có chu kì kinh nguyệt đều $30$ ngày. Hỏi trứng thường rụng vào ngày thứ mấy của chu kì (tính ngày đầu hành kinh là ngày $1$)? Những ngày nào trong chu kì dễ có thai nếu có tinh trùng gặp trứng?',
      steps: [
        'Trứng rụng khoảng $14$ ngày trước kì kinh tiếp theo, nên ngày rụng trứng là $30 - 14 = 16$.',
        'Tinh trùng có thể sống trong đường sinh dục nữ tới khoảng $5$ ngày, nên tinh trùng có từ ngày $16 - 5 = 11$ vẫn có thể gặp trứng.',
        'Trứng chỉ thụ tinh được khoảng một ngày sau khi rụng, tức đến ngày $17$.',
      ],
      answer:
        'Trứng rụng khoảng ngày thứ $16$; những ngày dễ có thai là khoảng ngày $11$ đến ngày $17$ của chu kì. Đây chỉ là ước tính, vì chu kì có thể thay đổi.',
    },
    {
      problem:
        'Phân biệt thụ tinh với thụ thai. Vì sao người phụ nữ mang thai thì không có kinh nguyệt?',
      steps: [
        'Thụ tinh: trứng kết hợp với tinh trùng tạo thành hợp tử, xảy ra ở ống dẫn trứng.',
        'Thụ thai: trứng đã thụ tinh (phôi) di chuyển xuống và làm tổ trong niêm mạc tử cung, xảy ra ở tử cung, sau thụ tinh khoảng một tuần.',
        'Khi phôi làm tổ, thể vàng được duy trì và tiếp tục tiết progesterone, giữ cho niêm mạc tử cung dày, không bong ra.',
      ],
      answer:
        'Thụ tinh tạo ra hợp tử ở ống dẫn trứng; thụ thai là phôi làm tổ ở tử cung. Khi mang thai, progesterone vẫn cao nên niêm mạc tử cung không bong ra, không có kinh nguyệt.',
    },
  ],
  practice: [
    {
      type: 'match',
      prompt: 'Nối mỗi bộ phận của cơ quan sinh dục nam với chức năng của nó.',
      left: ['Tinh hoàn', 'Túi tinh', 'Mào tinh', 'Tuyến tiền liệt'],
      right: [
        'Tiết dịch hòa với tinh trùng tạo tinh dịch',
        'Sản sinh tinh trùng, tiết testosterone',
        'Nơi tinh trùng tiếp tục hoàn thiện',
        'Chứa tinh trùng',
      ],
      pairs: [
        [0, 1],
        [1, 3],
        [2, 2],
        [3, 0],
      ],
      hints: ['Tên "túi" gợi ý nơi chứa.'],
      solution:
        'Tinh hoàn: sản sinh tinh trùng, tiết testosterone; túi tinh: chứa tinh trùng; mào tinh: nơi tinh trùng hoàn thiện; tuyến tiền liệt: tiết dịch tạo tinh dịch.',
    },
    {
      type: 'choice',
      prompt: 'Sự thụ tinh ở người thường xảy ra ở đâu?',
      options: ['Buồng trứng', 'Ống dẫn trứng', 'Tử cung', 'Âm đạo'],
      answer: 1,
      hints: [
        'Trứng rụng được phễu hứng lấy rồi đi về phía tử cung, tinh trùng bơi lên gặp trứng.',
      ],
      solution:
        'Thụ tinh thường xảy ra ở đoạn 1/3 phía ngoài của ống dẫn trứng; tử cung là nơi phôi làm tổ (thụ thai).',
    },
    {
      type: 'text',
      prompt:
        'Hiện tượng trứng đã thụ tinh di chuyển xuống tử cung, bám và làm tổ trong niêm mạc tử cung gọi là gì?',
      accept: ['thụ thai', 'sự thụ thai', 'thu thai'],
      hints: ['Phân biệt với sự kết hợp trứng và tinh trùng (thụ tinh).'],
      solution: 'Đó là sự thụ thai.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các sự kiện theo đúng thứ tự từ khi trứng rụng đến khi có thai.',
      items: [
        'Phôi làm tổ trong niêm mạc tử cung',
        'Trứng rụng, được phễu hứng vào ống dẫn trứng',
        'Hợp tử vừa phân chia vừa di chuyển xuống tử cung',
        'Tinh trùng gặp trứng ở ống dẫn trứng, tạo hợp tử',
      ],
      answer: [1, 3, 2, 0],
      hints: ['Thụ tinh xảy ra trước, thụ thai xảy ra sau.'],
      solution:
        'Trứng rụng → thụ tinh ở ống dẫn trứng tạo hợp tử → hợp tử phân chia, di chuyển xuống tử cung → phôi làm tổ (thụ thai).',
    },
    {
      type: 'number',
      prompt:
        'Một bạn nữ có chu kì kinh nguyệt đều $32$ ngày. Trứng thường rụng vào ngày thứ mấy của chu kì (ngày đầu hành kinh là ngày $1$)?',
      answer: 18,
      hints: [
        'Trứng rụng khoảng $14$ ngày trước kì kinh tiếp theo.',
        'Lấy độ dài chu kì trừ đi $14$.',
      ],
      solution: 'Ngày rụng trứng: $32 - 14 = 18$.',
    },
    {
      type: 'number',
      prompt:
        'Chu kì kinh nguyệt của Lan đều $28$ ngày. Kì kinh gần nhất của Lan bắt đầu ngày $3$ tháng $5$. Kì kinh tiếp theo dự kiến bắt đầu vào ngày nào của tháng $5$?',
      answer: 31,
      hints: [
        'Ngày đầu kì kinh sau cách ngày đầu kì kinh trước đúng một chu kì.',
        'Cộng $28$ ngày vào ngày $3$.',
      ],
      solution: '$3 + 28 = 31$: kì kinh tiếp theo dự kiến bắt đầu ngày $31$ tháng $5$.',
    },
    {
      type: 'choice',
      prompt: 'Nguyên nhân trực tiếp gây ra kinh nguyệt là gì?',
      options: [
        'Trứng được thụ tinh và làm tổ',
        'Trứng không được thụ tinh, lớp niêm mạc tử cung bong ra cùng máu và dịch nhầy',
        'Buồng trứng bị tổn thương mỗi tháng',
        'Tinh trùng vào tử cung',
      ],
      answer: 1,
      hints: ['Khi có thai thì không có kinh nguyệt.'],
      solution:
        'Khi trứng không được thụ tinh, thể vàng teo, progesterone giảm, niêm mạc tử cung bong ra thoát ra ngoài cùng máu và dịch nhầy: kinh nguyệt.',
    },
    {
      type: 'choice',
      prompt: 'Đặt vòng tránh thai (dụng cụ tử cung) dựa vào nguyên tắc nào?',
      options: [
        'Ngăn trứng chín và rụng',
        'Ngăn tinh trùng được sinh ra',
        'Ngăn trứng đã thụ tinh làm tổ',
        'Tiêu diệt virus HIV',
      ],
      answer: 2,
      hints: ['Vòng tránh thai được đặt ở cơ quan nào?'],
      solution:
        'Vòng tránh thai đặt trong tử cung, cản trở trứng đã thụ tinh làm tổ ở niêm mạc tử cung.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các con đường lây truyền HIV.',
      options: [
        'Quan hệ tình dục không an toàn',
        'Dùng chung kim tiêm',
        'Mẹ nhiễm HIV truyền sang con',
        'Bắt tay, ôm người nhiễm HIV',
        'Ăn chung mâm với người nhiễm HIV',
      ],
      answers: [0, 1, 2],
      hints: ['HIV lây qua máu, dịch sinh dục và từ mẹ sang con.'],
      solution:
        'HIV lây qua quan hệ tình dục không an toàn, đường máu và từ mẹ sang con; không lây qua bắt tay, ôm, ăn chung.',
    },
    {
      type: 'choice',
      prompt:
        'Biện pháp nào vừa giúp tránh thai vừa phòng được bệnh lây truyền qua đường tình dục?',
      options: [
        'Uống thuốc tránh thai',
        'Dùng bao cao su',
        'Đặt vòng tránh thai',
        'Tính ngày trứng rụng',
      ],
      answer: 1,
      hints: ['Biện pháp nào ngăn tiếp xúc trực tiếp giữa dịch sinh dục của hai người?'],
      solution:
        'Bao cao su ngăn tinh trùng gặp trứng và ngăn tiếp xúc với dịch sinh dục, máu chứa mầm bệnh; các biện pháp còn lại không phòng được bệnh.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các nguy cơ khi mang thai ở tuổi vị thành niên.',
      options: [
        'Dễ sẩy thai, đẻ non, con nhẹ cân',
        'Nguy cơ tử vong của mẹ cao',
        'Nạo phá thai có thể gây vô sinh',
        'Giúp cơ thể phát triển nhanh hơn',
        'Ảnh hưởng đến học tập và tương lai',
      ],
      answers: [0, 1, 2, 4],
      hints: ['Ở tuổi này cơ quan sinh dục chưa phát triển hoàn chỉnh.'],
      solution:
        'Mang thai sớm dễ gây sẩy thai, đẻ non, con nhẹ cân, mẹ có nguy cơ tử vong cao; nạo phá thai có thể gây vô sinh; học tập, tương lai bị ảnh hưởng. Mang thai không làm cơ thể phát triển nhanh hơn.',
    },
  ],
  takeaways: [
    'Hệ sinh dục có chức năng sinh sản. Tinh hoàn sản sinh tinh trùng, tiết testosterone; buồng trứng sản sinh trứng, tiết estrogen, progesterone; tử cung là nơi thai phát triển.',
    'Thụ tinh: trứng kết hợp tinh trùng tạo hợp tử, ở ống dẫn trứng. Thụ thai: phôi làm tổ trong niêm mạc tử cung.',
    'Kinh nguyệt: trứng không được thụ tinh, niêm mạc tử cung bong ra cùng máu và dịch nhầy; chu kì $28$ – $32$ ngày, kéo dài $3$ – $5$ ngày; trứng rụng khoảng $14$ ngày trước kì kinh sau.',
    'Tránh thai: ngăn trứng chín và rụng, ngăn tinh trùng gặp trứng, ngăn trứng đã thụ tinh làm tổ.',
    'Phòng bệnh lây truyền qua đường tình dục (lậu, giang mai, HIV/AIDS): không quan hệ tình dục sớm, dùng bao cao su, không dùng chung kim tiêm; tránh mang thai ở tuổi vị thành niên.',
  ],
};
