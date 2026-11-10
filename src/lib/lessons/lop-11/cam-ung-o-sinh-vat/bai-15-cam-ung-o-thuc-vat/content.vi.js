/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Khái niệm, vai trò và đặc điểm cảm ứng ở thực vật; hướng động (hướng sáng, hướng trọng lực, hướng nước, hướng hoá, hướng tiếp xúc) và cơ chế auxin; ứng động sinh trưởng và không sinh trưởng; ứng dụng trong trồng trọt.',
  intro:
    'Chậu cây đặt cạnh cửa sổ, sau ít ngày ngọn cây nghiêng hẳn ra phía ngoài. Hạt đậu gieo lộn ngược, rễ vẫn đâm xuống đất, thân vẫn vươn lên trời. Cây không có mắt, không có hệ thần kinh, vậy làm sao cây "biết" đâu là ánh sáng, đâu là phía dưới?',
  objectives: [
    'Nêu được khái niệm, vai trò và đặc điểm của cảm ứng ở thực vật.',
    'Phân biệt được hướng động và ứng động; nêu được các kiểu hướng động và vai trò của chúng.',
    'Giải thích được cơ chế hướng động nhờ sự phân bố không đều của auxin.',
    'Phân biệt được ứng động sinh trưởng và ứng động không sinh trưởng, lấy được ví dụ.',
    'Vận dụng được hiểu biết về cảm ứng vào trồng trọt.',
  ],
  sections: [
    {
      heading: 'Khái niệm, vai trò và đặc điểm',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Cảm ứng ở thực vật',
          text: 'Cảm ứng ở thực vật là sự tiếp nhận và trả lời của thực vật đối với các kích thích từ môi trường.',
        },
        {
          type: 'list',
          items: [
            'Vai trò: giúp thực vật thích nghi với những biến đổi thường xuyên của môi trường, đảm bảo sinh trưởng và phát triển. Ví dụ: ngọn cây hướng về phía ánh sáng để quang hợp; khí khổng cây xương rồng đóng ban ngày, mở ban đêm giúp hạn chế mất nước ở sa mạc.',
            'Tác nhân kích thích: ánh sáng, nhiệt độ, nước, hoá chất, trọng lực, tiếp xúc cơ học…',
            'Phần lớn cảm ứng diễn ra chậm, khó thấy bằng mắt thường; một số diễn ra nhanh như cụp lá cây trinh nữ, bắt mồi của cây gọng vó.',
            'Cảm ứng có thể liên quan hoặc không liên quan đến sinh trưởng của tế bào.',
          ],
        },
      ],
    },
    {
      heading: 'Hướng động',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Hướng động',
          text: 'Hướng động (vận động định hướng) là phản ứng của cơ quan thực vật đối với tác nhân kích thích từ một hướng xác định. Cơ quan vận động về phía tác nhân là hướng động dương; vận động tránh xa tác nhân là hướng động âm.',
        },
        {
          type: 'table',
          head: ['Kiểu hướng động', 'Tác nhân', 'Biểu hiện', 'Vai trò'],
          rows: [
            [
              'Hướng sáng',
              'Ánh sáng',
              'Thân hướng sáng dương; rễ hướng sáng âm',
              'Lá nhận đủ ánh sáng cho quang hợp',
            ],
            [
              'Hướng trọng lực',
              'Trọng lực',
              'Rễ hướng trọng lực dương; thân hướng trọng lực âm',
              'Cây đứng vững trên giá thể',
            ],
            [
              'Hướng hoá',
              'Chất khoáng, chất hữu cơ, hormone, chất độc',
              'Rễ mọc về phía chất dinh dưỡng (dương), tránh kim loại nặng, chất độc (âm)',
              'Lấy được chất dinh dưỡng, tránh chất độc',
            ],
            [
              'Hướng nước',
              'Nước',
              'Rễ sinh trưởng mạnh về phía nguồn nước (trường hợp đặc biệt của hướng hoá)',
              'Lấy đủ nước cho cây',
            ],
            [
              'Hướng tiếp xúc',
              'Giá thể tiếp xúc từ một phía',
              'Thân, tua cuốn của cây leo quấn quanh cọc, giàn',
              'Cây leo vươn cao, nhận nhiều ánh sáng',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Cơ chế hướng động',
          text: 'Tác nhân kích thích tác động theo một hướng lên thụ thể của bộ phận tiếp nhận; thông tin được truyền đến bộ phận đáp ứng. Hàm lượng auxin ở hai phía đối diện của cơ quan trở nên không đều, làm tốc độ dãn dài của tế bào hai phía khác nhau, nên cơ quan uốn cong.',
        },
        {
          type: 'list',
          items: [
            'Hướng sáng của thân: auxin tập trung nhiều ở phía khuất sáng, kích thích tế bào phía đó dãn dài nhanh hơn, thân cong về phía ánh sáng.',
            'Cây đặt nằm ngang: auxin dồn về mặt dưới của thân và rễ. Tế bào rễ nhạy cảm với auxin hơn tế bào thân: nồng độ auxin cao ở mặt dưới ức chế tế bào rễ dãn dài, nhưng kích thích tế bào thân dãn dài. Vì vậy rễ cong xuống, thân cong lên.',
          ],
        },
        { type: 'widget', name: 'phan-loai' },
      ],
    },
    {
      heading: 'Ứng động',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Ứng động',
          text: 'Ứng động (vận động cảm ứng) là phản ứng của thực vật đối với tác nhân kích thích không định hướng. Dựa vào sự liên quan với sinh trưởng, ứng động gồm ứng động không sinh trưởng và ứng động sinh trưởng.',
        },
        {
          type: 'table',
          head: ['Đặc điểm', 'Ứng động không sinh trưởng', 'Ứng động sinh trưởng'],
          rows: [
            [
              'Bản chất',
              'Vận động thuận nghịch, do thay đổi sức trương nước hoặc do kích thích lan truyền trong tế bào, mô chuyên hoá',
              'Do tốc độ sinh trưởng, phân chia tế bào không đều ở các phía của cơ quan',
            ],
            [
              'Tác nhân',
              'Kích thích cơ học, hoá học',
              'Kích thích không định hướng, thường có tính chu kì (ánh sáng, nhiệt độ): quang ứng động, nhiệt ứng động',
            ],
            [
              'Ví dụ',
              'Cụp lá cây trinh nữ; bắt mồi của cây gọng vó, cây bắt ruồi',
              'Hoa bồ công anh nở lúc có ánh sáng, cụp lúc chạng vạng; chồi cây bàng, cây phượng ngủ, thức theo mùa',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Cơ chế ứng động không sinh trưởng: tác nhân cơ học, hoá học tác động lên thụ thể trên màng tế bào, kích hoạt bơm ion (như $\\mathrm{K^+}$, $\\mathrm{Cl^-}$), làm thay đổi sức trương nước của tế bào (ví dụ tế bào thể gối ở lá trinh nữ mất nước, lá cụp lại); hoặc kích thích lan truyền dạng sóng như khi lá cây bắt ruồi khép lại.',
            'Cơ chế ứng động sinh trưởng: tác nhân có tính chu kì (ngày đêm, mùa) làm thay đổi tương quan hàm lượng hoặc phân bố lại hormone, làm thay đổi tốc độ sinh trưởng của cơ quan.',
          ],
        },
      ],
    },
    {
      heading: 'Ứng dụng',
      blocks: [
        {
          type: 'list',
          items: [
            'Làm đất tơi xốp, thoáng khí, bón phân và tưới nước quanh gốc để rễ phát triển rộng và sâu (vận dụng hướng hoá, hướng nước).',
            'Hạn chế ánh sáng khi hạt mới nảy mầm, trồng dày khi cây non để cây vươn cao, rồi tỉa thưa khi cây lớn.',
            'Làm giàn, mở rộng giàn cho cây thân leo (hướng tiếp xúc).',
            'Kéo dài thời gian ngủ của hạt, củ giống bằng cách giảm nhiệt độ, độ ẩm khi bảo quản (kho lạnh, phơi khô) hoặc dùng chất ức chế nảy mầm.',
            'Kích thích hạt, củ nảy mầm, đánh thức chồi ngủ bằng cách cung cấp nước, tăng nhiệt độ hoặc dùng chất kích thích sinh trưởng.',
            'Điều khiển ra hoa bằng ánh sáng, nhiệt độ, ví dụ chiếu đèn vào ban đêm cho ruộng hoa cúc.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Cây mầm trong hộp kính',
    instruction:
      'Chọn hướng chiếu sáng và xoay hộp, rồi kéo "Số ngày" để theo dõi thân và rễ uốn cong. Chấm hồng cho biết phía có nhiều auxin. Thử xoay hộp $90^\\circ$ trong tối: thân và rễ cong về đâu, auxin nằm ở mặt nào?',
  },
  examples: [
    {
      problem:
        'Một chậu cây non đặt cạnh cửa sổ, ánh sáng chỉ chiếu vào từ bên phải. Sau một tuần, ngọn cây cong về phía nào? Giải thích.',
      steps: [
        'Ánh sáng chiếu từ một hướng xác định nên đây là hướng động, cụ thể là hướng sáng.',
        'Auxin di chuyển sang phía khuất sáng (bên trái ngọn), tập trung ở đó.',
        'Tế bào bên trái dãn dài nhanh hơn tế bào bên phải.',
        'Ngọn cây cong về phía phải, phía có ánh sáng.',
      ],
      answer: 'Ngọn cong về phía ánh sáng (bên phải): thân hướng sáng dương.',
    },
    {
      problem:
        'Đặt một cây mầm nằm ngang trong tối. Vì sao cùng có nhiều auxin ở mặt dưới mà thân lại cong lên còn rễ lại cong xuống?',
      steps: [
        'Do trọng lực, auxin dồn về mặt dưới của cả thân và rễ.',
        'Tế bào thân: auxin nồng độ cao kích thích dãn dài, mặt dưới dài nhanh hơn mặt trên, thân cong lên trên.',
        'Tế bào rễ nhạy cảm với auxin hơn: auxin nồng độ cao ức chế dãn dài, mặt dưới dài chậm hơn mặt trên, rễ cong xuống dưới.',
      ],
      answer: 'Do tế bào rễ và thân phản ứng ngược nhau với cùng nồng độ auxin cao.',
    },
    {
      problem: 'Phân biệt sự cụp lá của cây trinh nữ với sự nở hoa của cây bồ công anh.',
      steps: [
        'Cả hai đều do tác nhân không định hướng gây ra nên đều là ứng động.',
        'Lá trinh nữ cụp do tế bào thể gối mất nước, giảm sức trương; lá có thể xoè lại sau ít phút: ứng động không sinh trưởng.',
        'Hoa bồ công anh nở, cụp theo ánh sáng ngày đêm do tốc độ sinh trưởng không đều ở hai mặt cánh hoa: ứng động sinh trưởng (quang ứng động).',
      ],
      answer:
        'Cụp lá trinh nữ: ứng động không sinh trưởng; nở hoa bồ công anh: ứng động sinh trưởng.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Hướng động là phản ứng của cơ quan thực vật đối với tác nhân kích thích',
      options: [
        'từ một hướng xác định',
        'không định hướng',
        'chỉ có tính chu kì ngày đêm',
        'chỉ là tiếp xúc cơ học',
      ],
      answer: 0,
      hints: ['Tên gọi "hướng động" đã gợi ý.'],
      solution:
        'Hướng động là phản ứng đối với tác nhân từ một hướng xác định; ứng động là phản ứng với tác nhân không định hướng.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi hiện tượng với kiểu hướng động tương ứng.',
      left: [
        'Rễ cây mọc về phía có phân bón',
        'Tua cuốn của cây bầu quấn quanh giàn',
        'Hạt gieo lộn ngược, rễ vẫn mọc xuống',
        'Cây trồng trong nhà có ngọn nghiêng ra cửa sổ',
      ],
      right: [
        'Hướng trọng lực',
        'Hướng sáng',
        'Hướng hoá',
        'Hướng tiếp xúc',
        'Ứng động sinh trưởng',
      ],
      pairs: [
        [0, 2],
        [1, 3],
        [2, 0],
        [3, 1],
      ],
      hints: ['Tìm tác nhân kích thích của mỗi hiện tượng.'],
      solution:
        'Phân bón: hướng hoá; giàn: hướng tiếp xúc; rễ mọc xuống: hướng trọng lực; ngọn nghiêng ra cửa sổ: hướng sáng.',
    },
    {
      type: 'choice',
      prompt: 'Khi ngọn cây được chiếu sáng từ một phía, auxin',
      options: [
        'tập trung nhiều ở phía khuất sáng, làm tế bào phía đó dãn dài nhanh hơn',
        'tập trung nhiều ở phía được chiếu sáng, làm tế bào phía đó dãn dài nhanh hơn',
        'bị ánh sáng phân huỷ hết',
        'phân bố đều ở hai phía',
      ],
      answer: 0,
      hints: ['Thân cong về phía ánh sáng, vậy phía nào phải dài nhanh hơn?'],
      solution:
        'Auxin tập trung ở phía khuất sáng, kích thích tế bào phía đó dãn dài nhanh hơn, nên thân cong về phía có ánh sáng.',
    },
    {
      type: 'multi',
      prompt: 'Những hiện tượng nào là ứng động không sinh trưởng?',
      options: [
        'Lá cây trinh nữ cụp lại khi bị chạm',
        'Lá cây bắt ruồi khép lại khi có côn trùng chạm vào',
        'Hoa bồ công anh nở khi có ánh sáng',
        'Ngọn cây cong về phía ánh sáng',
        'Chồi cây bàng nảy vào mùa xuân',
      ],
      answers: [0, 1],
      hints: [
        'Ứng động không sinh trưởng là vận động thuận nghịch, xảy ra nhanh, do sức trương nước hoặc kích thích lan truyền.',
      ],
      solution:
        'Cụp lá trinh nữ, khép lá cây bắt ruồi là ứng động không sinh trưởng. Nở hoa bồ công anh, chồi bàng nảy là ứng động sinh trưởng; ngọn cong về ánh sáng là hướng động.',
    },
    {
      type: 'choice',
      prompt: 'Rễ cây đặt nằm ngang cong xuống dưới vì',
      options: [
        'auxin dồn về mặt dưới, ở nồng độ cao ức chế tế bào rễ dãn dài',
        'auxin dồn về mặt trên, kích thích tế bào rễ mặt trên dãn dài',
        'rễ nặng hơn nên rủ xuống',
        'rễ tìm ánh sáng ở phía dưới',
      ],
      answer: 0,
      hints: ['Tế bào rễ nhạy cảm với auxin hơn tế bào thân.'],
      solution:
        'Auxin dồn về mặt dưới; nồng độ cao ức chế tế bào rễ dãn dài, nên mặt trên dài nhanh hơn, rễ cong xuống (hướng trọng lực dương).',
    },
    {
      type: 'text',
      prompt: 'Rễ cây sinh trưởng mạnh về phía nguồn nước. Kiểu hướng động này gọi là gì?',
      accept: ['hướng nước', 'tính hướng nước', 'hướng nước dương'],
      hints: ['Tên kiểu hướng động gọi theo tác nhân kích thích.'],
      solution: 'Hướng nước, là trường hợp đặc biệt của hướng hoá.',
    },
    {
      type: 'choice',
      prompt: 'Muốn giữ khoai tây giống lâu không nảy mầm, người ta nên',
      options: [
        'bảo quản ở nơi khô, mát, tối',
        'tưới nước thường xuyên',
        'để ở nơi ấm và nhiều ánh sáng',
        'phun chất kích thích sinh trưởng',
      ],
      answer: 0,
      hints: ['Nước, nhiệt độ cao, chất kích thích sinh trưởng đánh thức mầm ngủ.'],
      solution:
        'Giảm nhiệt độ, độ ẩm và ánh sáng kéo dài thời gian ngủ của củ giống; các biện pháp còn lại kích thích củ nảy mầm.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao người trồng rau thường gieo hạt dày khi cây còn non, sau đó mới tỉa thưa?',
      options: [
        'Cây mọc dày che sáng lẫn nhau nên vươn cao nhanh; khi cây lớn tỉa thưa để mỗi cây nhận đủ ánh sáng',
        'Để rễ mọc về phía nước',
        'Để cây cụp lá khi bị chạm',
        'Để cây ra hoa sớm',
      ],
      answer: 0,
      hints: ['Cây thiếu sáng phản ứng thế nào?'],
      solution:
        'Gieo dày làm cây non che sáng lẫn nhau, thân vươn cao; khi cây lớn tỉa thưa để cây nhận đủ ánh sáng, quang hợp tốt (vận dụng hướng sáng).',
    },
  ],
  takeaways: [
    'Cảm ứng ở thực vật là sự tiếp nhận và trả lời kích thích từ môi trường, thường chậm, giúp cây thích nghi.',
    'Hướng động: phản ứng với tác nhân có hướng xác định (hướng sáng, hướng trọng lực, hướng hoá, hướng nước, hướng tiếp xúc); dương khi hướng về, âm khi tránh xa tác nhân.',
    'Cơ chế hướng động: auxin phân bố không đều làm tế bào hai phía dãn dài không đều; auxin cao kích thích tế bào thân nhưng ức chế tế bào rễ.',
    'Ứng động: phản ứng với tác nhân không định hướng; ứng động không sinh trưởng do sức trương nước hoặc kích thích lan truyền, ứng động sinh trưởng do sinh trưởng không đều.',
    'Ứng dụng: làm đất, bón phân, tưới nước, làm giàn, trồng dày rồi tỉa thưa, bảo quản hạt giống, điều khiển ra hoa.',
  ],
};
