/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Môi trường sống và bốn loại môi trường; nhân tố sinh thái vô sinh và hữu sinh; ảnh hưởng của ánh sáng và nhiệt độ; các quy luật giới hạn sinh thái, tác động tổng hợp, tác động không đồng đều; ổ sinh thái và nhịp sinh học.',
  intro:
    'Một người khoẻ mạnh bay từ Hà Nội sang Mỹ thường mất ngủ vào ban đêm và buồn ngủ vào ban ngày suốt vài hôm. Vì sao cơ thể "lệch giờ" như vậy? Cá rô phi nuôi ở miền Bắc lại hay chết rét vào những đợt rét đậm. Các nhân tố của môi trường tác động lên sinh vật theo những quy luật nào?',
  objectives: [
    'Phát biểu được khái niệm môi trường sống, nhân tố sinh thái; phân biệt được nhân tố vô sinh và nhân tố hữu sinh, lấy được ví dụ.',
    'Trình bày được ảnh hưởng của một số nhân tố sinh thái (ánh sáng, nhiệt độ) lên sinh vật và sự thích nghi của sinh vật.',
    'Phát biểu được các quy luật sinh thái: giới hạn sinh thái, tác động tổng hợp, tác động không đồng đều; giải thích được ổ sinh thái của loài theo nhiều nhân tố.',
    'Nêu được khái niệm nhịp sinh học, lấy được ví dụ và vận dụng vào việc sắp xếp thời gian biểu hợp lí.',
  ],
  sections: [
    {
      heading: 'Môi trường sống',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Môi trường sống',
          text: 'Môi trường sống của sinh vật là tập hợp tất cả các nhân tố bao quanh sinh vật, có ảnh hưởng trực tiếp hoặc gián tiếp đến sự tồn tại, sinh trưởng, phát triển và các hoạt động khác của sinh vật.',
        },
        {
          type: 'table',
          caption: 'Các loại môi trường sống',
          head: ['Môi trường', 'Ví dụ sinh vật sống trong đó'],
          rows: [
            ['Trên cạn (mặt đất và lớp khí quyển)', 'Hổ, chim sẻ, cây lúa, cây bạch đàn'],
            ['Nước (nước ngọt, nước lợ, nước mặn)', 'Cá chép, tôm, rong biển'],
            ['Đất', 'Giun đất, dế dũi, nhiều vi khuẩn đất'],
            [
              'Sinh vật (trong hoặc trên cơ thể sinh vật khác)',
              'Giun đũa trong ruột người, chấy trên đầu người',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Phần lớn các loài sống trong một loại môi trường, một số loài sống ở nhiều môi trường, như ếch nhái (lưỡng cư) vừa sống trên cạn vừa sống dưới nước. Sinh vật chịu tác động của môi trường, nhưng hoạt động sống của chúng cũng làm môi trường thay đổi: giun đất đào hang làm đất tơi xốp, thoáng khí và giữ nước tốt hơn.',
        },
      ],
    },
    {
      heading: 'Nhân tố sinh thái',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nhân tố sinh thái',
          text: 'Những nhân tố môi trường có tác động trực tiếp hoặc gián tiếp lên đời sống của sinh vật gọi là nhân tố sinh thái.',
        },
        {
          type: 'list',
          items: [
            'Nhân tố vô sinh: toàn bộ các nhân tố vật lí, hoá học của môi trường tự nhiên như ánh sáng, nhiệt độ, độ ẩm, gió, nước, độ mặn, đất (thổ nhưỡng), không khí.',
            'Nhân tố hữu sinh: các sinh vật khác cùng sống trong môi trường và mối quan hệ giữa chúng, như kí sinh, cộng sinh, hợp tác, cạnh tranh, vật ăn thịt – con mồi. Con người là nhân tố hữu sinh có ảnh hưởng lớn: có thể làm suy thoái hoặc cải tạo, bảo vệ môi trường.',
          ],
        },
        {
          type: 'table',
          caption: 'Ảnh hưởng của ánh sáng và nhiệt độ',
          head: ['Nhân tố', 'Ảnh hưởng và sự thích nghi'],
          rows: [
            [
              'Ánh sáng – thực vật',
              'Ánh sáng ảnh hưởng đến hình thái và các quá trình sinh lí (quang hợp, hô hấp, thoát hơi nước). Cây ưa sáng (lúa, bạch đàn) có lá nhỏ, dày, xếp xiên; cây ưa bóng (lá lốt, phong lan) có lá to, mỏng, màu xanh đậm. Theo độ dài ngày, có cây ngày ngắn, cây ngày dài và cây trung tính. Lá xếp so le giúp cây nhận được nhiều ánh sáng.',
            ],
            [
              'Ánh sáng – động vật',
              'Ánh sáng giúp động vật định hướng, nhận biết thức ăn, kẻ thù. Có nhóm động vật ưa hoạt động ban ngày (ong mật, nhiều loài chim) và nhóm ưa hoạt động ban đêm (cú mèo, chuột, hổ), mắt của chúng thích nghi khác nhau.',
            ],
            [
              'Nhiệt độ',
              'Nhiệt độ ảnh hưởng đến tốc độ trao đổi chất, sinh trưởng, phát triển và sự phân bố của sinh vật. Sinh vật biến nhiệt (thực vật, lưỡng cư, bò sát, côn trùng) có thân nhiệt thay đổi theo môi trường; sinh vật hằng nhiệt (chim, thú) giữ thân nhiệt ổn định. Thú hằng nhiệt ở vùng lạnh thường có kích thước cơ thể lớn hơn, tai, đuôi, chi nhỏ hơn, lông dày và lớp mỡ dưới da dày hơn so với loài gần gũi ở vùng nóng, giúp giảm mất nhiệt.',
            ],
          ],
        },
      ],
    },
    {
      heading: 'Các quy luật tác động của nhân tố sinh thái',
      blocks: [
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Quy luật giới hạn sinh thái',
          text: 'Mỗi loài chỉ tồn tại và phát triển ổn định trong một khoảng giá trị xác định của một nhân tố sinh thái, gọi là giới hạn sinh thái. Giới hạn sinh thái có giới hạn dưới và giới hạn trên (các điểm gây chết); trong đó có khoảng thuận lợi, nơi sinh vật thực hiện các chức năng sống tốt nhất, và khoảng chống chịu (khoảng ức chế), nơi hoạt động sống của sinh vật bị ức chế.',
        },
        {
          type: 'p',
          text: 'Ví dụ: cá rô phi ở Việt Nam sống được trong khoảng nhiệt độ từ $5$ °C đến $42$ °C, phát triển thuận lợi từ $20$ °C đến $35$ °C; cá chép sống được từ $2$ °C đến $44$ °C. Loài có giới hạn sinh thái rộng đối với nhiều nhân tố thường phân bố rộng; loài có giới hạn hẹp thường phân bố hẹp.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Quy luật tác động tổng hợp',
          text: 'Sinh vật luôn chịu tác động đồng thời của nhiều nhân tố sinh thái; các nhân tố ảnh hưởng lẫn nhau, khi một nhân tố thay đổi có thể kéo theo sự thay đổi của các nhân tố khác. Một nhân tố nằm ngoài khoảng thuận lợi sẽ làm giảm khả năng sinh vật chống chịu các nhân tố còn lại. Ví dụ: đất đủ phân bón nhưng thiếu nước thì cây vẫn sinh trưởng kém.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Quy luật tác động không đồng đều',
          text: 'Các nhân tố sinh thái tác động không giống nhau lên các chức năng sống và lên các giai đoạn phát triển khác nhau của sinh vật: một giá trị của nhân tố có thể thuận lợi cho hoạt động này nhưng bất lợi cho hoạt động khác. Ví dụ: nhiệt độ ấp trứng quyết định giới tính của rùa biển; tôm he trưởng thành sống và đẻ trứng ở biển khơi có độ mặn cao, còn giai đoạn ấu trùng phát triển ở vùng nước lợ ven bờ, rừng ngập mặn.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Ổ sinh thái',
          text: 'Ổ sinh thái của một loài là một "không gian sinh thái" mà ở đó tất cả các nhân tố sinh thái của môi trường đều nằm trong giới hạn sinh thái cho phép loài đó tồn tại và phát triển lâu dài. Với hai nhân tố nhiệt độ và độ ẩm, ổ sinh thái là phần chồng lên nhau của hai giới hạn sinh thái; xét càng nhiều nhân tố, ổ sinh thái càng được mô tả đầy đủ.',
        },
        {
          type: 'p',
          text: 'Hai loài có ổ sinh thái trùng nhau một phần sẽ cùng sử dụng một phần nguồn sống và có thể cạnh tranh với nhau; nội dung này được học kĩ hơn ở bài Quần xã sinh vật.',
        },
      ],
    },
    {
      heading: 'Nhịp sinh học',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Nhịp sinh học',
          text: 'Nhịp sinh học là những phản ứng nhịp nhàng, có tính chu kì của sinh vật trước những thay đổi có tính chu kì của môi trường. Nhịp sinh học được hình thành qua chọn lọc tự nhiên và giúp sinh vật thích nghi với sự thay đổi tuần hoàn của môi trường.',
        },
        {
          type: 'table',
          head: ['Chu kì', 'Ví dụ'],
          rows: [
            [
              'Ngày đêm',
              'Hoa mười giờ nở vào buổi sáng; cú mèo, hổ, chuột hoạt động ban đêm; ong mật lấy mật ban ngày; thân nhiệt, nhịp tim của người thay đổi theo ngày đêm.',
            ],
            [
              'Mùa, năm',
              'Chim én di cư tránh rét; gấu ngủ đông; cây bàng, cây xoan rụng lá vào mùa đông; chim, thú thay lông theo mùa.',
            ],
            [
              'Chu kì khác',
              'Chu kì kinh nguyệt ở người khoảng $28$ ngày; hoạt động của sinh vật vùng ven biển theo nhịp thuỷ triều.',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Có nhịp sinh học chịu tác động trực tiếp của tín hiệu môi trường (nhịp bên ngoài), có nhịp vẫn duy trì khi không còn tín hiệu môi trường nhờ "đồng hồ sinh học" bên trong cơ thể (nhịp bên trong) như nhịp tim, nhịp thở. Khi bay qua nhiều múi giờ, chu kì sáng – tối thay đổi đột ngột nhưng đồng hồ sinh học chưa kịp điều chỉnh nên người bị "lệch múi giờ". Hiểu nhịp sinh học giúp con người sắp xếp thời gian biểu học tập, làm việc, nghỉ ngơi hợp lí, chẳng hạn ngủ đúng giờ và hạn chế dùng điện thoại trước khi ngủ.',
        },
      ],
    },
  ],
  explore: {
    title: 'Tìm ổ sinh thái theo hai nhân tố',
    instruction:
      'Kéo điểm tròn (hoặc dùng hai thanh trượt) để đổi nhiệt độ và độ ẩm. Dải màu dưới trục ngang là giới hạn nhiệt độ, dải bên trục đứng là giới hạn độ ẩm; vùng vàng là nơi chúng chồng lên nhau: ổ sinh thái theo hai nhân tố. Thử một điểm có nhiệt độ thuận lợi nhưng độ ẩm vượt giới hạn, rồi bật "So sánh hai loài" để tìm phần chung của hai ổ sinh thái.',
  },
  examples: [
    {
      problem:
        'Xếp các nhân tố sau vào nhóm vô sinh hoặc hữu sinh: nhiệt độ, sâu ăn lá, độ mặn của nước, nấm kí sinh, ánh sáng, cỏ dại mọc chen, con người chặt phá rừng.',
      steps: [
        'Nhân tố vô sinh là các yếu tố vật lí, hoá học của môi trường: nhiệt độ, độ mặn của nước, ánh sáng.',
        'Nhân tố hữu sinh là các sinh vật và quan hệ giữa chúng: sâu ăn lá (vật ăn thịt – con mồi), nấm kí sinh (kí sinh), cỏ dại mọc chen (cạnh tranh).',
        'Con người là một sinh vật nên hoạt động chặt phá rừng thuộc nhân tố hữu sinh.',
      ],
      answer:
        'Vô sinh: nhiệt độ, độ mặn, ánh sáng. Hữu sinh: sâu ăn lá, nấm kí sinh, cỏ dại, con người chặt phá rừng.',
    },
    {
      problem:
        'Loài A có giới hạn nhiệt độ $10$ – $38$ °C (thuận lợi $20$ – $30$ °C) và giới hạn độ ẩm $40$ – $95$% (thuận lợi $60$ – $85$%). Loài A sống thế nào ở: a) $35$ °C, độ ẩm $70$%; b) $25$ °C, độ ẩm $30$%?',
      steps: [
        'a) $35$ °C nằm giữa $30$ °C và $38$ °C: khoảng chống chịu. Độ ẩm $70$% nằm trong $60$ – $85$%: thuận lợi.',
        'Theo quy luật tác động tổng hợp, chỉ cần một nhân tố ở khoảng chống chịu thì hoạt động sống đã bị ức chế: loài A sống được nhưng kém phát triển; nhiệt độ là nhân tố hạn chế.',
        'b) $25$ °C thuận lợi, nhưng độ ẩm $30$% thấp hơn giới hạn dưới $40$%: ngoài giới hạn sinh thái.',
        'Điểm này nằm ngoài ổ sinh thái của loài A ($10$ – $38$ °C và $40$ – $95$%), nên loài A không tồn tại được dù nhiệt độ thuận lợi.',
      ],
      answer:
        'a) Sống được nhưng bị ức chế (do nhiệt độ). b) Không tồn tại được (độ ẩm dưới giới hạn).',
    },
    {
      problem:
        'Cá rô phi sống được từ $5$ °C đến $42$ °C, cá chép từ $2$ °C đến $44$ °C. Tính độ rộng giới hạn nhiệt độ của mỗi loài và cho biết loài nào có khả năng phân bố rộng hơn.',
      steps: [
        'Cá rô phi: $42 - 5 = 37$ °C.',
        'Cá chép: $44 - 2 = 42$ °C.',
        'Cá chép có giới hạn sinh thái về nhiệt độ rộng hơn nên có khả năng phân bố rộng hơn; điều này giải thích vì sao cá rô phi dễ chết rét ở miền Bắc trong các đợt rét đậm.',
      ],
      answer: 'Cá rô phi $37$ °C, cá chép $42$ °C; cá chép phân bố rộng hơn.',
    },
  ],
  practice: [
    {
      type: 'multi',
      prompt: 'Chọn tất cả các nhân tố sinh thái vô sinh.',
      options: [
        'Ánh sáng',
        'Độ ẩm không khí',
        'Vi khuẩn gây bệnh',
        'Độ mặn của nước',
        'Cỏ dại mọc chen với lúa',
      ],
      answers: [0, 1, 3],
      hints: [
        'Nhân tố vô sinh là các yếu tố vật lí, hoá học của môi trường.',
        'Vi khuẩn và cỏ dại là sinh vật.',
      ],
      solution:
        'Ánh sáng, độ ẩm và độ mặn là yếu tố vật lí, hoá học nên là nhân tố vô sinh. Vi khuẩn gây bệnh (kí sinh) và cỏ dại (cạnh tranh) là nhân tố hữu sinh.',
    },
    {
      type: 'choice',
      prompt: 'Giun đũa sống trong ruột người. Môi trường sống của giun đũa là',
      options: ['môi trường sinh vật', 'môi trường đất', 'môi trường nước', 'môi trường trên cạn'],
      answer: 0,
      hints: ['Ruột người là một phần cơ thể của sinh vật khác.'],
      solution:
        'Giun đũa sống trong cơ thể người, tức là sống trong (hoặc trên) cơ thể sinh vật khác: môi trường sinh vật.',
    },
    {
      type: 'number',
      prompt:
        'Cá rô phi ở Việt Nam có giới hạn dưới về nhiệt độ là $5$ °C và giới hạn trên là $42$ °C. Độ rộng giới hạn sinh thái về nhiệt độ của cá rô phi là bao nhiêu độ C?',
      answer: 37,
      unit: '°C',
      hints: ['Độ rộng giới hạn bằng giới hạn trên trừ giới hạn dưới.'],
      solution: '$42 - 5 = 37$ °C.',
    },
    {
      type: 'choice',
      prompt:
        'Cá rô phi có khoảng thuận lợi $20$ – $35$ °C, giới hạn sinh thái $5$ – $42$ °C. Khi nước ao nóng lên $38$ °C, cá rô phi',
      options: [
        'vẫn sống nhưng hoạt động sống bị ức chế',
        'phát triển tốt nhất',
        'chết ngay',
        'phát triển tốt hơn ở $30$ °C vì nhiệt độ cao hơn',
      ],
      answer: 0,
      hints: ['Xác định $38$ °C nằm trong khoảng nào: thuận lợi, chống chịu hay ngoài giới hạn.'],
      solution:
        '$35 < 38 < 42$ nên $38$ °C thuộc khoảng chống chịu: cá vẫn sống nhưng ăn ít, lớn chậm, hoạt động sống bị ức chế.',
    },
    {
      type: 'choice',
      prompt:
        'Loài A có giới hạn nhiệt độ $10$ – $38$ °C (thuận lợi $20$ – $30$ °C) và giới hạn độ ẩm $40$ – $95$% (thuận lợi $60$ – $85$%). Ở $12$ °C và độ ẩm $90$%, loài A',
      options: [
        'sống được nhưng bị ức chế, do cả nhiệt độ và độ ẩm đều ở khoảng chống chịu',
        'sinh trưởng tốt vì cả hai nhân tố đều nằm trong giới hạn',
        'không tồn tại được vì độ ẩm vượt giới hạn trên',
        'sống được nhưng bị ức chế chỉ do độ ẩm',
      ],
      answer: 0,
      hints: [
        'Xét riêng từng nhân tố: $12$ °C so với $10$, $20$; $90$% so với $85$, $95$.',
        'Theo quy luật tác động tổng hợp, kết quả do nhân tố bất lợi nhất quyết định.',
      ],
      solution:
        '$10 < 12 < 20$: nhiệt độ ở khoảng chống chịu; $85 < 90 < 95$: độ ẩm cũng ở khoảng chống chịu. Điểm vẫn nằm trong ổ sinh thái nên loài A sống được nhưng hoạt động sống bị ức chế bởi cả hai nhân tố.',
    },
    {
      type: 'number',
      prompt:
        'Loài A sống được ở $10$ – $38$ °C, loài B ở $5$ – $30$ °C. Khoảng nhiệt độ mà cả hai loài cùng sống được rộng bao nhiêu độ C?',
      answer: 20,
      unit: '°C',
      hints: ['Phần chung bắt đầu ở giới hạn dưới lớn hơn và kết thúc ở giới hạn trên nhỏ hơn.'],
      solution: 'Phần chung là $10$ – $30$ °C, rộng $30 - 10 = 20$ °C.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi quy luật sinh thái với ví dụ minh hoạ phù hợp.',
      left: [
        'Quy luật giới hạn sinh thái',
        'Quy luật tác động tổng hợp',
        'Quy luật tác động không đồng đều',
      ],
      right: [
        'Cá rô phi chết khi nhiệt độ nước xuống dưới $5$ °C.',
        'Ruộng đủ phân bón nhưng thiếu nước, lúa vẫn sinh trưởng kém.',
        'Nhiệt độ ấp trứng quyết định giới tính của rùa biển.',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: [
        'Giới hạn: vượt ngưỡng thì chết. Tổng hợp: nhiều nhân tố cùng lúc. Không đồng đều: tác động khác nhau lên từng chức năng, giai đoạn.',
      ],
      solution:
        'Cá rô phi chết dưới $5$ °C: vượt giới hạn dưới. Thiếu nước làm cây không dùng được phân: các nhân tố tác động cùng nhau. Nhiệt độ ấp quyết định giới tính rùa: nhân tố tác động mạnh lên một chức năng, một giai đoạn cụ thể.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi hiện tượng với loại nhịp sinh học tương ứng.',
      left: [
        'Hoa mười giờ nở vào buổi sáng',
        'Chim én di cư tránh rét',
        'Chu kì kinh nguyệt ở người',
      ],
      right: ['Nhịp ngày đêm', 'Nhịp mùa', 'Nhịp có chu kì khoảng một tháng'],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      hints: ['Xét xem hiện tượng lặp lại sau bao lâu: một ngày, một năm hay khoảng $28$ ngày.'],
      solution:
        'Hoa mười giờ nở theo chu kì ngày đêm; chim én di cư theo mùa trong năm; chu kì kinh nguyệt lặp lại khoảng $28$ ngày.',
    },
    {
      type: 'choice',
      prompt:
        'Người bay từ Việt Nam sang Mỹ thường buồn ngủ ban ngày, tỉnh táo ban đêm trong vài ngày đầu vì',
      options: [
        'nhịp sinh học ngày đêm của cơ thể chưa kịp điều chỉnh theo chu kì sáng – tối mới',
        'nhiệt độ ở Mỹ vượt giới hạn sinh thái của người',
        'cơ thể bị thiếu ánh sáng',
        'nhịp sinh học bị mất hoàn toàn',
      ],
      answer: 0,
      hints: ['Chu kì sáng – tối ở nơi đến lệch nhiều giờ so với nơi đi.'],
      solution:
        'Đồng hồ sinh học vẫn chạy theo giờ Việt Nam trong khi chu kì ngày đêm ở Mỹ lệch khoảng nửa ngày, nên người bị lệch múi giờ cho đến khi nhịp sinh học được điều chỉnh lại.',
    },
    {
      type: 'text',
      prompt:
        'Khoảng giá trị của nhân tố sinh thái mà ở đó sinh vật thực hiện các chức năng sống tốt nhất gọi là khoảng gì? (Viết hai từ sau chữ "khoảng".)',
      accept: ['thuận lợi', 'khoảng thuận lợi'],
      hints: ['Đối lập với khoảng chống chịu.'],
      solution: 'Đó là khoảng thuận lợi.',
    },
  ],
  takeaways: [
    'Môi trường sống gồm môi trường trên cạn, nước, đất và sinh vật; nhân tố sinh thái gồm nhân tố vô sinh và hữu sinh (có con người).',
    'Mỗi loài có giới hạn sinh thái riêng với mỗi nhân tố: giới hạn dưới, giới hạn trên, khoảng thuận lợi và khoảng chống chịu; loài có giới hạn rộng thường phân bố rộng.',
    'Các nhân tố tác động tổng hợp và không đồng đều; ổ sinh thái là vùng mà mọi nhân tố đều nằm trong giới hạn cho phép loài tồn tại, phát triển lâu dài.',
    'Nhịp sinh học là phản ứng có chu kì của sinh vật trước thay đổi có chu kì của môi trường (ngày đêm, mùa, năm...).',
  ],
};
