/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Quần xã sinh vật và các đặc trưng cơ bản: thành phần loài, độ đa dạng, độ phong phú, cấu trúc không gian, cấu trúc dinh dưỡng; các mối quan hệ hỗ trợ và đối kháng giữa các loài; ổ sinh thái và sự phân li ổ sinh thái; loài ngoại lai, tác động của con người và biện pháp bảo vệ quần xã.',
  intro:
    'Trong một khu rừng, cây gỗ, dây leo, nấm, côn trùng, chim, thú... cùng sống bên nhau: loài này làm thức ăn cho loài kia, loài này che bóng cho loài khác, có loài giúp nhau, có loài tranh giành nhau. Tập hợp nhiều loài như vậy có những đặc trưng gì, và vì sao nhiều loài có nhu cầu gần giống nhau vẫn cùng tồn tại được?',
  objectives: [
    'Phát biểu được khái niệm quần xã sinh vật.',
    'Trình bày được các đặc trưng cơ bản của quần xã: thành phần loài (loài ưu thế, loài đặc trưng, loài chủ chốt...), độ đa dạng, độ phong phú, cấu trúc không gian, cấu trúc dinh dưỡng; tính được độ phong phú của một loài.',
    'Phân biệt được các mối quan hệ hỗ trợ (cộng sinh, hợp tác, hội sinh) và đối kháng (cạnh tranh, kí sinh, ức chế – cảm nhiễm, sinh vật ăn sinh vật) giữa các loài; giải thích được hiện tượng khống chế sinh học.',
    'Phát biểu được khái niệm ổ sinh thái; giải thích được vì sao sự phân li ổ sinh thái giúp các loài cùng tồn tại.',
    'Nêu được ảnh hưởng của loài ngoại lai, của con người tới quần xã và các biện pháp bảo vệ quần xã.',
  ],
  sections: [
    {
      heading: 'Khái niệm quần xã sinh vật',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Quần xã sinh vật',
          text: 'Quần xã sinh vật là tập hợp các quần thể sinh vật thuộc nhiều loài khác nhau, cùng sống trong một không gian và thời gian nhất định; các sinh vật trong quần xã có mối quan hệ gắn bó với nhau (về dinh dưỡng, nơi ở...) như một thể thống nhất.',
        },
        {
          type: 'p',
          text: 'Quần xã thường được gọi tên theo đặc điểm môi trường sống hoặc theo loài ưu thế: quần xã rừng thông, quần xã ruộng lúa, quần xã ao cá... Quần xã có kích thước rất khác nhau, từ một khu rừng mưa nhiệt đới rộng lớn tới một khu vườn nhỏ. Quần xã là một hệ mở, luôn trao đổi vật chất và năng lượng với môi trường, có khả năng tự điều chỉnh để duy trì trạng thái cân bằng động.',
        },
      ],
    },
    {
      heading: 'Các đặc trưng cơ bản của quần xã',
      blocks: [
        {
          type: 'p',
          text: 'Thành phần loài thể hiện qua số lượng loài và số lượng cá thể của mỗi loài. Quần xã có nhiều loài thường ổn định hơn, vì khi một loài suy giảm, loài khác có thể thay thế vai trò của nó.',
        },
        {
          type: 'table',
          caption: 'Vai trò của các loài trong quần xã',
          head: ['Nhóm loài', 'Đặc điểm', 'Ví dụ'],
          rows: [
            [
              'Loài ưu thế',
              'Có số lượng cá thể hoặc sinh khối lớn, hoạt động mạnh, ảnh hưởng lớn tới cấu trúc quần xã',
              'Cây gỗ lớn trong rừng mưa nhiệt đới; lúa trong quần xã ruộng lúa',
            ],
            [
              'Loài đặc trưng',
              'Chỉ có (hoặc có nhiều) ở một quần xã, phân biệt quần xã đó với quần xã khác; có thể trùng với loài ưu thế',
              'Đước, sú, vẹt ở rừng ngập mặn; cây cọ ở vùng đồi Phú Thọ',
            ],
            [
              'Loài chủ chốt',
              'Có vai trò kiểm soát, khống chế sự phát triển của các loài khác, quyết định sự ổn định của quần xã, dù số lượng có thể không nhiều',
              'Sư tử trên đồng cỏ; hổ trong rừng',
            ],
            [
              'Loài thứ yếu, loài ngẫu nhiên',
              'Loài thứ yếu có thể thay thế loài ưu thế khi loài này suy giảm; loài ngẫu nhiên ít gặp, số lượng ít',
              'Cây bụi dưới tán rừng',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Độ phong phú và độ đa dạng',
          text: 'Độ phong phú của một loài là tỉ lệ (%) số cá thể của loài đó so với tổng số cá thể của tất cả các loài trong quần xã. Độ đa dạng của quần xã phụ thuộc vào số lượng loài và mức độ đồng đều về độ phong phú giữa các loài: quần xã càng nhiều loài, độ phong phú của các loài càng đồng đều thì độ đa dạng càng cao.',
        },
        {
          type: 'tex',
          tex: '\\text{Độ phong phú của loài } i = \\dfrac{n_i}{N} \\cdot 100\\%',
        },
        {
          type: 'p',
          text: 'Trong đó $n_i$ là số cá thể của loài $i$, $N$ là tổng số cá thể của tất cả các loài trong quần xã. Độ đa dạng thường giảm dần khi đi từ vĩ độ thấp (xích đạo) lên vĩ độ cao, từ chân núi lên đỉnh núi, từ bờ ra khơi và từ tầng nước mặt xuống tầng nước sâu. Quần xã đa dạng thì ổn định hơn; khi độ đa dạng giảm, quần xã dễ mất cân bằng.',
        },
        {
          type: 'list',
          items: [
            'Cấu trúc không gian là sự phân bố cá thể của các loài trong không gian, giúp giảm cạnh tranh và tận dụng tốt nguồn sống. Theo chiều thẳng đứng, quần xã phân thành nhiều tầng (rừng mưa nhiệt đới có tầng vượt tán, tầng tán, tầng dưới tán, tầng cây bụi, tầng cỏ; hồ nước có tầng mặt, tầng giữa, tầng đáy). Theo chiều ngang, các loài phân bố thành từng vành đai theo sự thay đổi của môi trường: từ ven bờ ra khơi, từ đồng bằng lên núi cao.',
            'Cấu trúc dinh dưỡng thể hiện mối quan hệ dinh dưỡng giữa các loài, gồm ba nhóm: sinh vật sản xuất (thực vật, tảo, một số vi khuẩn tự dưỡng tổng hợp chất hữu cơ), sinh vật tiêu thụ (chủ yếu là động vật, sử dụng chất hữu cơ có sẵn), sinh vật phân giải (chủ yếu là vi khuẩn, nấm, phân giải chất hữu cơ thành chất vô cơ trả lại môi trường).',
          ],
        },
      ],
    },
    {
      heading: 'Quan hệ giữa các loài trong quần xã',
      blocks: [
        {
          type: 'table',
          head: ['Quan hệ', 'Đặc điểm', 'Ví dụ'],
          rows: [
            [
              'Cộng sinh',
              'Hai loài gắn bó chặt chẽ, cùng có lợi, sống chung là bắt buộc',
              'Nấm và vi khuẩn lam (tảo) trong địa y; vi khuẩn Rhizobium trong nốt sần rễ cây họ Đậu; vi sinh vật trong dạ cỏ trâu, bò',
            ],
            [
              'Hợp tác',
              'Hai loài cùng có lợi nhưng không bắt buộc phải sống cùng nhau',
              'Chim sáo và trâu; chim mỏ đỏ và linh dương; chim hút mật và cây có hoa',
            ],
            [
              'Hội sinh',
              'Một loài có lợi, loài kia không có lợi cũng không bị hại',
              'Phong lan, dương xỉ bám trên thân cây gỗ; cá ép bám vào cá lớn',
            ],
            [
              'Cạnh tranh',
              'Các loài tranh giành nguồn sống (thức ăn, nơi ở, ánh sáng...); các loài đều bị hại, có thể dẫn tới loại trừ nhau',
              'Lúa và cỏ dại; cú và chồn cùng ăn chuột trong rừng',
            ],
            [
              'Kí sinh – vật chủ',
              'Loài kí sinh sống nhờ trên cơ thể vật chủ, lấy chất dinh dưỡng, làm vật chủ yếu dần nhưng thường không giết chết ngay',
              'Giun sán trong ruột người; dây tơ hồng trên cây khác',
            ],
            [
              'Ức chế – cảm nhiễm',
              'Một loài tiết chất vào môi trường gây hại cho loài khác, bản thân không được lợi hoặc không bị ảnh hưởng',
              'Tảo giáp nở hoa gây độc cho cá, tôm; cây tỏi tiết chất ức chế vi sinh vật',
            ],
            [
              'Sinh vật ăn sinh vật',
              'Loài này dùng loài kia làm thức ăn (động vật ăn thực vật, vật ăn thịt – con mồi, thực vật bắt sâu bọ)',
              'Hổ ăn hươu; bò ăn cỏ; cây nắp ấm bắt ruồi',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Cộng sinh, hợp tác, hội sinh là các quan hệ hỗ trợ (không loài nào bị hại); cạnh tranh, kí sinh, ức chế – cảm nhiễm, sinh vật ăn sinh vật là các quan hệ đối kháng (ít nhất một loài bị hại).',
        },
        { type: 'widget', name: 'quan-he' },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Khống chế sinh học',
          text: 'Khống chế sinh học là hiện tượng số lượng cá thể của một loài bị khống chế ở một mức nhất định do các mối quan hệ hỗ trợ hoặc đối kháng giữa các loài trong quần xã. Con mồi tăng thì vật ăn thịt có nhiều thức ăn và tăng theo; vật ăn thịt tăng làm con mồi giảm, rồi vật ăn thịt thiếu thức ăn lại giảm. Nhờ vậy số lượng các loài dao động quanh một trạng thái cân bằng (cân bằng sinh học). Con người ứng dụng hiện tượng này để dùng thiên địch phòng trừ sinh vật gây hại.',
        },
      ],
    },
    {
      heading: 'Ổ sinh thái',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Ổ sinh thái',
          text: 'Ổ sinh thái của một loài là một không gian sinh thái mà ở đó tất cả các nhân tố sinh thái của môi trường nằm trong giới hạn sinh thái cho phép loài đó tồn tại và phát triển lâu dài.',
        },
        {
          type: 'p',
          text: 'Giới hạn sinh thái về một nhân tố (nhiệt độ, độ ẩm, độ mặn...) là ổ sinh thái của loài về nhân tố đó; tổ hợp các giới hạn sinh thái về mọi nhân tố tạo nên ổ sinh thái chung của loài. Ổ sinh thái khác với nơi ở: nơi ở chỉ là nơi cư trú, còn ổ sinh thái biểu hiện cách sinh sống của loài (ăn gì, kiếm ăn ở đâu, vào lúc nào, chịu được điều kiện nào...).',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Phân li ổ sinh thái',
          text: 'Các loài có ổ sinh thái càng trùng nhau thì cạnh tranh càng gay gắt, có thể dẫn tới một loài bị loại trừ. Sự phân li ổ sinh thái (khác nhau về thức ăn, nơi kiếm ăn, thời gian hoạt động...) làm giảm cạnh tranh, nhờ đó nhiều loài có nhu cầu gần giống nhau vẫn cùng tồn tại trong một quần xã. Ví dụ: các loài chim sống trên cùng một cây nhưng kiếm ăn ở các tầng tán khác nhau; các loài chim sẻ có mỏ to nhỏ khác nhau ăn các loại hạt kích thước khác nhau.',
        },
      ],
    },
    {
      heading: 'Loài ngoại lai, tác động của con người và bảo vệ quần xã',
      blocks: [
        {
          type: 'p',
          text: 'Loài ngoại lai là loài xuất hiện ở khu vực vốn không phải là môi trường sống tự nhiên của chúng (do con người mang tới hoặc phát tán tới). Ở môi trường mới, nếu không có thiên địch và đối thủ cạnh tranh, loài ngoại lai có thể sinh sản rất nhanh, cạnh tranh với loài bản địa, trở thành loài ưu thế và làm thay đổi cấu trúc quần xã. Ví dụ: ốc bươu vàng phá hại lúa; cây mai dương (trinh nữ móc) lấn át thực vật bản địa ở nhiều vùng đất ngập nước.',
        },
        {
          type: 'list',
          items: [
            'Tác động của con người: phá rừng, chuyển đất rừng thành đất nông nghiệp, đô thị hoá làm mất nơi sống; khai thác quá mức làm nhiều quần thể giảm dưới kích thước tối thiểu; lạm dụng phân bón hoá học, thuốc bảo vệ thực vật gây ô nhiễm, làm giảm độ đa dạng của quần xã.',
            'Biện pháp bảo vệ: xây dựng khu bảo tồn thiên nhiên, vườn quốc gia, trung tâm cứu hộ động vật hoang dã; khai thác hợp lí tài nguyên; bảo vệ và phục hồi các quần thể bị suy thoái; phát triển nông nghiệp hữu cơ, dùng thiên địch thay thuốc hoá học; kiểm soát chặt việc nhập nội sinh vật, ngăn chặn loài ngoại lai xâm hại.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Vật ăn thịt – con mồi và cạnh tranh',
    instruction:
      'Ở chế độ "Vật ăn thịt – con mồi", kéo thanh trượt thời điểm $t$ để đọc số thỏ và linh miêu: đỉnh của linh miêu luôn đến sau đỉnh của thỏ, rồi cả hai dao động quanh trạng thái cân bằng. Đặt số vật ăn thịt ban đầu bằng $0$ để thấy con mồi tăng tới sức chứa. Ở chế độ "Cạnh tranh", tăng mức trùng lặp ổ sinh thái $\\alpha$ và quan sát lúc nào loài 2 bị loại trừ.',
  },
  examples: [
    {
      problem:
        'Khảo sát một quần xã đồng cỏ, người ta đếm được $4$ loài: loài A có $450$ cá thể, loài B có $300$, loài C có $150$ và loài D có $100$ cá thể. Tính độ phong phú của mỗi loài và cho biết loài ưu thế.',
      steps: [
        'Tổng số cá thể: $N = 450 + 300 + 150 + 100 = 1\\,000$.',
        'Độ phong phú: A $= \\dfrac{450}{1\\,000} \\cdot 100\\% = 45\\%$; B $= 30\\%$; C $= 15\\%$; D $= 10\\%$.',
        'Loài A có số cá thể và độ phong phú lớn nhất nên là loài ưu thế của quần xã.',
      ],
      answer: 'A $45\\%$, B $30\\%$, C $15\\%$, D $10\\%$; loài ưu thế là A.',
    },
    {
      problem:
        'Hai quần xã X và Y cùng có $4$ loài và cùng $200$ cá thể. Ở X, số cá thể của các loài là $50$, $50$, $50$, $50$; ở Y là $170$, $10$, $10$, $10$. Quần xã nào có độ đa dạng cao hơn? Vì sao?',
      steps: [
        'Hai quần xã có cùng số loài, nên so sánh mức độ đồng đều về độ phong phú.',
        'Ở X, mỗi loài chiếm $\\dfrac{50}{200} = 25\\%$: rất đồng đều.',
        'Ở Y, một loài chiếm $\\dfrac{170}{200} = 85\\%$, ba loài còn lại mỗi loài chỉ $5\\%$: rất chênh lệch.',
        'Độ đa dạng phụ thuộc cả số loài và mức đồng đều, nên X đa dạng hơn Y.',
      ],
      answer: 'Quần xã X đa dạng hơn vì độ phong phú của các loài đồng đều hơn.',
    },
    {
      problem:
        'Ba loài chim chích cùng sống trên một cây thông và cùng ăn sâu bọ, nhưng loài 1 kiếm ăn ở ngọn cây, loài 2 ở giữa tán, loài 3 ở các cành thấp gần gốc. Giải thích vì sao ba loài cùng tồn tại được.',
      steps: [
        'Ba loài có thức ăn giống nhau nên ổ sinh thái của chúng gần nhau, dễ cạnh tranh gay gắt.',
        'Mỗi loài kiếm ăn ở một tầng tán khác nhau: ổ sinh thái về nơi kiếm ăn đã phân li.',
        'Sự phân li ổ sinh thái làm giảm mức trùng lặp về nguồn sống, giảm cạnh tranh.',
      ],
      answer:
        'Nhờ phân li ổ sinh thái (kiếm ăn ở các tầng khác nhau), cạnh tranh giảm nên ba loài cùng tồn tại.',
    },
  ],
  practice: [
    {
      type: 'number',
      prompt:
        'Một quần xã có $4$ loài với số cá thể lần lượt là $120$, $60$, $15$ và $5$. Độ phong phú của loài có $120$ cá thể là bao nhiêu phần trăm?',
      answer: 60,
      unit: '%',
      hints: [
        'Tính tổng số cá thể của cả quần xã trước.',
        'Độ phong phú $= \\dfrac{n_i}{N} \\cdot 100\\%$.',
      ],
      solution:
        '$N = 120 + 60 + 15 + 5 = 200$; độ phong phú $= \\dfrac{120}{200} \\cdot 100\\% = 60\\%$.',
    },
    {
      type: 'choice',
      prompt: 'Loài ưu thế trong quần xã là loài',
      options: [
        'có số lượng cá thể hoặc sinh khối lớn, hoạt động mạnh, ảnh hưởng lớn tới quần xã',
        'chỉ có ở một quần xã nhất định',
        'được đưa từ nơi khác tới',
        'ít gặp, số lượng cá thể ít',
      ],
      answer: 0,
      hints: ['"Ưu thế" nghĩa là chiếm ưu thế về số lượng, sinh khối.'],
      solution:
        'Loài ưu thế có số lượng hoặc sinh khối lớn, quyết định cấu trúc quần xã. Loài chỉ có ở một quần xã là loài đặc trưng; loài từ nơi khác tới là loài ngoại lai; loài ít gặp là loài ngẫu nhiên.',
    },
    {
      type: 'match',
      prompt: 'Ghép mỗi nhóm loài với ví dụ phù hợp.',
      left: ['Loài ưu thế', 'Loài đặc trưng', 'Loài chủ chốt', 'Loài ngoại lai'],
      right: [
        'Lúa trong quần xã ruộng lúa',
        'Đước, sú, vẹt ở rừng ngập mặn',
        'Sư tử khống chế số lượng động vật ăn cỏ trên đồng cỏ',
        'Ốc bươu vàng ở các ruộng lúa Việt Nam',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: [
        'Loài chủ chốt có vai trò kiểm soát loài khác; loài ngoại lai vốn không sống ở nơi đó.',
      ],
      solution:
        'Lúa có số lượng, sinh khối lớn nhất ruộng: ưu thế. Đước, sú, vẹt chỉ có ở rừng ngập mặn: đặc trưng. Sư tử khống chế động vật ăn cỏ: chủ chốt. Ốc bươu vàng được đưa từ nơi khác vào: ngoại lai.',
    },
    {
      type: 'multi',
      prompt: 'Những mối quan hệ nào sau đây là quan hệ hỗ trợ giữa các loài?',
      options: [
        'Nấm và vi khuẩn lam trong địa y',
        'Chim sáo bắt chấy rận trên lưng trâu',
        'Phong lan bám trên thân cây gỗ',
        'Giun đũa sống trong ruột người',
        'Lúa và cỏ dại trên cùng ruộng',
      ],
      answers: [0, 1, 2],
      hints: ['Quan hệ hỗ trợ: không loài nào bị hại.'],
      solution:
        'Địa y (cộng sinh), chim sáo – trâu (hợp tác), phong lan – cây gỗ (hội sinh) là quan hệ hỗ trợ. Giun đũa – người là kí sinh, lúa – cỏ dại là cạnh tranh: quan hệ đối kháng.',
    },
    {
      type: 'choice',
      prompt:
        'Hai loài cùng sống trong một khu vực có ổ sinh thái về thức ăn trùng nhau gần như hoàn toàn. Hiện tượng nào dễ xảy ra nhất?',
      options: [
        'Cạnh tranh gay gắt, có thể dẫn tới một loài bị loại trừ hoặc phải phân li ổ sinh thái',
        'Hai loài cộng sinh với nhau',
        'Cả hai loài đều tăng số lượng nhanh hơn',
        'Hai loài không ảnh hưởng gì tới nhau',
      ],
      answer: 0,
      hints: ['Ổ sinh thái càng trùng nhau, các loài càng tranh giành cùng một nguồn sống.'],
      solution:
        'Ổ sinh thái trùng nhau thì cạnh tranh gay gắt. Kết quả là loài yếu hơn bị loại trừ, bị đẩy đi nơi khác, hoặc các loài phân li ổ sinh thái (đổi thức ăn, nơi kiếm ăn, thời gian hoạt động) để cùng tồn tại.',
    },
    {
      type: 'choice',
      prompt: 'Trong các quần xã sau, quần xã nào thường có độ đa dạng loài cao nhất?',
      options: [
        'Rừng mưa nhiệt đới',
        'Rừng lá kim phương Bắc',
        'Đồng rêu hàn đới',
        'Một cánh đồng lúa',
      ],
      answer: 0,
      hints: ['Độ đa dạng giảm dần từ xích đạo về hai cực.'],
      solution:
        'Độ đa dạng giảm khi đi từ vĩ độ thấp lên vĩ độ cao, nên rừng mưa nhiệt đới đa dạng nhất. Cánh đồng lúa là quần xã nhân tạo, ít loài.',
    },
    {
      type: 'choice',
      prompt: 'Sự phân tầng của thực vật trong rừng mưa nhiệt đới có ý nghĩa chủ yếu là',
      options: [
        'giảm cạnh tranh và tận dụng tốt nguồn ánh sáng, nguồn sống',
        'làm tăng cạnh tranh giữa các loài',
        'giúp các loài cây có cùng chiều cao',
        'làm giảm số loài động vật trong rừng',
      ],
      answer: 0,
      hints: ['Mỗi tầng nhận lượng ánh sáng khác nhau.'],
      solution:
        'Phân tầng giúp các loài sống ở các tầng khác nhau, tận dụng ánh sáng và nguồn sống theo chiều thẳng đứng, nhờ đó giảm cạnh tranh; nhiều loài động vật cũng phân bố theo tầng của thực vật.',
    },
    {
      type: 'choice',
      prompt:
        'Theo dõi nhiều năm số lượng thỏ rừng và linh miêu ở Canada, người ta thấy số lượng hai loài dao động. Nhận xét nào đúng?',
      options: [
        'Số linh miêu đạt cực đại sau khi số thỏ đạt cực đại',
        'Số linh miêu đạt cực đại trước khi số thỏ đạt cực đại',
        'Hai loài luôn tăng, giảm đồng thời',
        'Số thỏ không phụ thuộc vào số linh miêu',
      ],
      answer: 0,
      hints: [
        'Linh miêu chỉ tăng được khi đã có nhiều thức ăn.',
        'Thử mô phỏng trong phần khám phá và xem đỉnh nào đến trước.',
      ],
      solution:
        'Thỏ tăng trước, linh miêu có nhiều thức ăn nên tăng sau; linh miêu đông làm thỏ giảm, rồi linh miêu thiếu thức ăn giảm theo. Vì vậy đỉnh của linh miêu luôn đến sau đỉnh của thỏ: đây là hiện tượng khống chế sinh học.',
    },
    {
      type: 'text',
      prompt:
        'Tảo giáp nở hoa tiết chất độc làm chết hàng loạt cá, tôm trong vùng nước. Đây là mối quan hệ gì giữa các loài?',
      accept: ['ức chế – cảm nhiễm', 'ức chế - cảm nhiễm', 'ức chế cảm nhiễm', 'ức chế'],
      hints: ['Tảo không ăn cá, tôm; tảo gây hại cho loài khác qua chất tiết vào môi trường.'],
      solution:
        'Một loài tiết chất vào môi trường gây hại cho loài khác mà bản thân không được lợi: quan hệ ức chế – cảm nhiễm.',
    },
    {
      type: 'choice',
      prompt:
        'Ốc bươu vàng được đưa vào Việt Nam để nuôi, sau đó phát tán ra đồng ruộng, phá hại lúa nghiêm trọng. Vì sao loài này phát triển mạnh như vậy?',
      options: [
        'Ở môi trường mới chúng có nguồn thức ăn dồi dào và hầu như không có thiên địch khống chế',
        'Chúng là loài đặc trưng của ruộng lúa Việt Nam',
        'Chúng cộng sinh với cây lúa',
        'Chúng là sinh vật sản xuất',
      ],
      answer: 0,
      hints: ['Ốc bươu vàng là loài ngoại lai.'],
      solution:
        'Ốc bươu vàng là loài ngoại lai: ở môi trường mới, thức ăn dồi dào, không có thiên địch và đối thủ cạnh tranh nên chúng sinh sản nhanh, lấn át loài bản địa, gây hại lớn cho lúa.',
    },
  ],
  takeaways: [
    'Quần xã là tập hợp các quần thể của nhiều loài, cùng sống trong một không gian, thời gian, gắn bó với nhau như một thể thống nhất.',
    'Đặc trưng cơ bản của quần xã: thành phần loài (loài ưu thế, đặc trưng, chủ chốt...), độ đa dạng, độ phong phú $\\left(\\dfrac{n_i}{N} \\cdot 100\\%\\right)$, cấu trúc không gian (phân tầng, vành đai) và cấu trúc dinh dưỡng.',
    'Quan hệ hỗ trợ: cộng sinh, hợp tác, hội sinh; quan hệ đối kháng: cạnh tranh, kí sinh, ức chế – cảm nhiễm, sinh vật ăn sinh vật; nhờ đó có hiện tượng khống chế sinh học.',
    'Ổ sinh thái là không gian sinh thái cho phép loài tồn tại, phát triển lâu dài; ổ sinh thái càng trùng nhau cạnh tranh càng gay gắt, phân li ổ sinh thái giúp các loài cùng tồn tại.',
    'Loài ngoại lai và hoạt động của con người có thể làm thay đổi, suy thoái quần xã; cần bảo tồn, khai thác hợp lí và kiểm soát loài ngoại lai.',
  ],
};
