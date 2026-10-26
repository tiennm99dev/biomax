/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Con đường thu nhận và tiêu hoá thức ăn trong ống tiêu hoá ở người; nhu cầu sử dụng nước và con đường trao đổi nước ở động vật; sự vận chuyển các chất trong cơ thể nhờ hệ tuần hoàn với vòng tuần hoàn lớn và vòng tuần hoàn nhỏ; vận dụng vào ăn uống hợp lí, vệ sinh.',
  intro:
    'Em vừa ăn một miếng bánh mì kẹp trứng. Vài giờ sau, tinh bột trong bánh đã thành đường glucose trong máu, đang được đưa tới từng tế bào cơ của em. Miếng bánh đã đi qua những đâu, bị biến đổi thế nào, và máu đã chở chất dinh dưỡng đi bằng con đường nào? Cơ thể em lại mất nước liên tục qua nước tiểu, mồ hôi, hơi thở: mỗi ngày em cần bao nhiêu nước để bù lại?',
  objectives: [
    'Mô tả được con đường thu nhận và tiêu hoá thức ăn trong ống tiêu hoá ở động vật (lấy ví dụ ở người).',
    'Trình bày được nhu cầu sử dụng nước và con đường trao đổi nước ở động vật; tính được nhu cầu nước mỗi ngày của bản thân.',
    'Mô tả được quá trình vận chuyển các chất ở động vật thông qua hệ tuần hoàn (vòng tuần hoàn lớn và vòng tuần hoàn nhỏ ở người).',
    'Vận dụng hiểu biết về trao đổi chất ở động vật vào ăn uống hợp lí, vệ sinh và bù nước cho cơ thể.',
  ],
  sections: [
    {
      heading: 'Con đường thu nhận và tiêu hoá thức ăn',
      blocks: [
        {
          type: 'p',
          text: 'Động vật lấy thức ăn từ môi trường qua hoạt động ăn. Thức ăn chứa các chất phức tạp (tinh bột, protein, lipid) mà tế bào không dùng trực tiếp được. Tiêu hoá là quá trình biến đổi các chất phức tạp trong thức ăn thành chất đơn giản để cơ thể hấp thụ; chất không được hấp thụ bị thải ra ngoài.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Ống tiêu hoá ở người',
          text: 'Thức ăn đi theo con đường: khoang miệng → thực quản → dạ dày → ruột non → ruột già → hậu môn. Các tuyến tiêu hoá (tuyến nước bọt, tuyến vị, gan, tuỵ, tuyến ruột) tiết dịch tiêu hoá đổ vào ống tiêu hoá.',
        },
        {
          type: 'table',
          caption: 'Sự biến đổi thức ăn trong ống tiêu hoá ở người',
          head: ['Cơ quan', 'Hoạt động chính'],
          rows: [
            [
              'Khoang miệng',
              'Răng cắn, xé, nghiền nhỏ; lưỡi đảo trộn cho thức ăn thấm nước bọt. Enzyme trong nước bọt biến đổi một phần tinh bột thành đường.',
            ],
            ['Thực quản', 'Co bóp, đẩy viên thức ăn xuống dạ dày.'],
            [
              'Dạ dày',
              'Co bóp, nhào trộn thức ăn với dịch vị. Enzyme trong dịch vị biến đổi một phần protein thành các chuỗi ngắn hơn.',
            ],
            [
              'Ruột non',
              'Nhờ dịch tuỵ, dịch mật, dịch ruột, thức ăn được biến đổi hoàn toàn thành chất đơn giản: tinh bột thành glucose, protein thành amino acid, lipid thành glycerol và acid béo. Chất dinh dưỡng được hấp thụ qua thành ruột non vào máu.',
            ],
            [
              'Ruột già',
              'Hấp thụ phần lớn nước còn lại; chất không được tiêu hoá, hấp thụ (như chất xơ) tạo thành phân.',
            ],
            ['Hậu môn', 'Thải phân ra ngoài.'],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Ruột non là nơi quan trọng nhất',
          text: 'Ở ruột non, thức ăn được biến đổi hoàn toàn thành chất đơn giản và phần lớn chất dinh dưỡng được hấp thụ. Thành ruột non có nhiều nếp gấp với vô số lông ruột nên diện tích hấp thụ rất lớn.',
        },
      ],
    },
    {
      heading: 'Nhu cầu sử dụng nước và con đường trao đổi nước',
      blocks: [
        {
          type: 'p',
          text: 'Nước là thành phần chủ yếu của cơ thể và cần cho mọi hoạt động sống. Nhu cầu nước khác nhau tuỳ loài, độ tuổi, mức độ hoạt động và điều kiện môi trường. Ví dụ, một con voi cần uống khoảng $160$ đến $300$ lít nước mỗi ngày, còn chuột nhảy ở sa mạc Bắc Mỹ hầu như không uống nước, chủ yếu lấy nước từ thức ăn (hạt) và từ quá trình chuyển hoá trong cơ thể.',
        },
        {
          type: 'table',
          caption: 'Con đường trao đổi nước ở người',
          head: ['Lấy nước vào', 'Thải nước ra'],
          rows: [
            ['Uống nước, đồ uống', 'Nước tiểu (thận lọc máu tạo thành nước tiểu)'],
            ['Nước có trong thức ăn (rau, quả, canh...)', 'Mồ hôi (qua da)'],
            ['Nước tạo ra từ hô hấp tế bào', 'Hơi thở, phân'],
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Nhu cầu nước ở tuổi vị thành niên',
          text: 'Theo khuyến nghị năm 2012 của Viện Dinh dưỡng Quốc gia, mỗi ngày trẻ vị thành niên cần khoảng $40$ mL nước cho mỗi kilôgam khối lượng cơ thể: $V = 40 \\cdot m$ (mL), với $m$ là khối lượng cơ thể tính bằng kg.',
        },
        { type: 'widget', name: 'nhu-cau-nuoc' },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Mất nước',
          text: 'Cơ thể mất nước liên tục nên phải bổ sung nước thường xuyên, không đợi khát mới uống. Khi trời nóng, vận động mạnh, sốt cao hay bị tiêu chảy, cơ thể mất nhiều nước và muối khoáng; cần uống thêm nước, khi tiêu chảy nên uống dung dịch oresol để bù nước và chất điện giải.',
        },
      ],
    },
    {
      heading: 'Vận chuyển các chất trong cơ thể động vật',
      blocks: [
        {
          type: 'p',
          text: 'Ở động vật đơn bào, các chất trao đổi trực tiếp qua bề mặt tế bào. Ở động vật đa bào có hệ tuần hoàn, máu được tim bơm đi trong hệ mạch, mang oxygen và chất dinh dưỡng đến các tế bào, đồng thời nhận carbon dioxide và chất thải từ tế bào để đưa đến phổi, thận, da thải ra ngoài.',
        },
        {
          type: 'p',
          text: 'Hệ tuần hoàn ở người gồm tim và hệ mạch (động mạch, mao mạch, tĩnh mạch), tạo thành hai vòng tuần hoàn:',
        },
        {
          type: 'table',
          head: ['Vòng tuần hoàn', 'Đường đi của máu', 'Vai trò'],
          rows: [
            [
              'Vòng tuần hoàn nhỏ',
              'Máu đỏ thẫm từ tâm thất phải → động mạch phổi → mao mạch phổi → tĩnh mạch phổi → tâm nhĩ trái (máu đỏ tươi)',
              'Đưa máu đến phổi để thải $\\text{CO}_2$, nhận $\\text{O}_2$; máu đỏ thẫm thành máu đỏ tươi',
            ],
            [
              'Vòng tuần hoàn lớn',
              'Máu đỏ tươi từ tâm thất trái → động mạch chủ → mao mạch các cơ quan → tĩnh mạch chủ → tâm nhĩ phải (máu đỏ thẫm)',
              'Đưa $\\text{O}_2$ và chất dinh dưỡng đến các cơ quan, nhận $\\text{CO}_2$ và chất thải mang về tim',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Chất dinh dưỡng đi đâu?',
          text: 'Chất dinh dưỡng hấp thụ ở ruột non vào máu, theo vòng tuần hoàn lớn đến từng tế bào. Tại tế bào, chất dinh dưỡng và oxygen được dùng cho hô hấp tế bào, tạo năng lượng và nguyên liệu xây dựng cơ thể.',
        },
      ],
    },
    {
      heading: 'Vận dụng vào thực tiễn',
      blocks: [
        {
          type: 'list',
          items: [
            'Ăn uống hợp lí: ăn đa dạng nhiều loại thức ăn, đủ chất (tinh bột, protein, lipid, vitamin, chất khoáng, chất xơ) và đủ nước; không ăn quá nhiều đường, chất béo. Thiếu hay thừa chất dinh dưỡng đều làm cơ thể hoạt động không bình thường (suy dinh dưỡng, béo phì...).',
            'Vệ sinh ăn uống: ăn chín, uống sôi, rửa tay trước khi ăn; không ăn thức ăn ôi thiu vì vi khuẩn, nấm và trứng giun sán có thể gây hại cho hệ tiêu hoá.',
            'Ăn chậm, nhai kĩ giúp thức ăn được nghiền nhỏ, thấm đều dịch tiêu hoá, tiêu hoá tốt hơn; vệ sinh răng miệng sau khi ăn, hạn chế đồ ngọt để phòng sâu răng.',
          ],
        },
      ],
    },
  ],
  explore: {
    title: 'Theo dõi miếng bánh mì qua ống tiêu hoá',
    instruction:
      'Ở chế độ "Theo dõi miếng ăn", bấm "Đi tiếp" hoặc chạm vào từng cơ quan để xem miếng ăn bị biến đổi cơ học, hoá học thế nào và chất nào đã vào máu. Chú ý lúc các chất màu cam (phức tạp) đổi thành màu xanh (đơn giản). Sau đó chuyển sang "Tìm cơ quan" và trả lời từng câu bằng cách chạm vào cơ quan đúng.',
  },
  examples: [
    {
      problem:
        'Bạn Minh nặng $42$ kg. Theo khuyến nghị của Viện Dinh dưỡng, mỗi ngày Minh cần khoảng bao nhiêu mililít nước? Đổi ra lít.',
      steps: [
        'Trẻ vị thành niên cần khoảng $40$ mL nước cho mỗi kg khối lượng cơ thể mỗi ngày.',
        'Nhu cầu nước của Minh: $V = 40 \\cdot 42 = 1\\,680$ (mL).',
        'Đổi đơn vị: $1\\,680\\ \\text{mL} = 1{,}68$ lít.',
      ],
      answer: 'Khoảng $1\\,680$ mL, tức khoảng $1{,}68$ lít nước mỗi ngày.',
    },
    {
      problem:
        'Mô tả con đường đi và sự biến đổi của tinh bột trong miếng bánh mì, từ khi vào miệng đến khi thành chất dinh dưỡng trong máu.',
      steps: [
        'Khoang miệng: bánh được nghiền nhỏ, thấm nước bọt; enzyme trong nước bọt biến đổi một phần tinh bột thành đường.',
        'Thực quản đẩy viên thức ăn xuống dạ dày; ở dạ dày, thức ăn được nhào trộn, tinh bột hầu như không được biến đổi thêm.',
        'Ruột non: nhờ dịch tuỵ và dịch ruột, tinh bột (và đường) được biến đổi hoàn toàn thành glucose.',
        'Glucose được hấp thụ qua thành ruột non vào máu.',
      ],
      answer:
        'Miệng → thực quản → dạ dày → ruột non; tinh bột bắt đầu biến đổi ở miệng, được biến đổi hoàn toàn thành glucose ở ruột non rồi hấp thụ vào máu.',
    },
    {
      problem:
        'Glucose hấp thụ ở ruột non được đưa đến tế bào cơ ở chân như thế nào? Khí carbon dioxide do tế bào cơ tạo ra được thải ra ngoài theo con đường nào?',
      steps: [
        'Glucose vào máu ở ruột non, theo tĩnh mạch về tim.',
        'Máu qua vòng tuần hoàn nhỏ lên phổi nhận oxygen, về tim rồi theo vòng tuần hoàn lớn: tâm thất trái → động mạch chủ → mao mạch ở cơ chân, đưa glucose và oxygen tới tế bào cơ.',
        'Tế bào cơ hô hấp tạo ra carbon dioxide; khí này vào máu, theo tĩnh mạch chủ về tâm nhĩ phải.',
        'Từ tâm thất phải, máu theo động mạch phổi lên phổi (vòng tuần hoàn nhỏ), thải carbon dioxide ra ngoài qua hơi thở ra.',
      ],
      answer:
        'Glucose được máu chở theo vòng tuần hoàn lớn đến tế bào cơ; carbon dioxide theo máu về tim rồi theo vòng tuần hoàn nhỏ đến phổi và được thải ra ngoài.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các bộ phận của ống tiêu hoá ở người theo thứ tự thức ăn đi qua.',
      items: ['Dạ dày', 'Ruột già', 'Khoang miệng', 'Hậu môn', 'Thực quản', 'Ruột non'],
      answer: [2, 4, 0, 5, 1, 3],
      hints: ['Thức ăn vào từ miệng và đi theo một chiều đến hậu môn.'],
      solution: 'Khoang miệng → thực quản → dạ dày → ruột non → ruột già → hậu môn.',
    },
    {
      type: 'choice',
      prompt: 'Chất dinh dưỡng được hấp thụ vào máu chủ yếu ở bộ phận nào?',
      options: ['Dạ dày', 'Ruột non', 'Ruột già', 'Thực quản'],
      answer: 1,
      hints: ['Ở đâu thức ăn được biến đổi hoàn toàn thành chất đơn giản?'],
      solution:
        'Ở ruột non, thức ăn được biến đổi hoàn toàn thành chất đơn giản và phần lớn chất dinh dưỡng được hấp thụ qua thành ruột non vào máu.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi bộ phận với hoạt động chính của nó.',
      left: ['Khoang miệng', 'Dạ dày', 'Ruột non', 'Ruột già'],
      right: [
        'Nghiền nhỏ thức ăn, biến đổi một phần tinh bột thành đường',
        'Nhào trộn thức ăn, biến đổi một phần protein',
        'Biến đổi hoàn toàn thức ăn thành chất đơn giản và hấp thụ chất dinh dưỡng',
        'Hấp thụ phần lớn nước còn lại, tạo thành phân',
        'Đẩy viên thức ăn xuống dạ dày',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Protein bắt đầu được biến đổi ở dạ dày; tinh bột bắt đầu ở miệng.'],
      solution:
        'Miệng: nghiền nhỏ, biến đổi một phần tinh bột; dạ dày: nhào trộn, biến đổi một phần protein; ruột non: biến đổi hoàn toàn và hấp thụ; ruột già: hấp thụ nước, tạo phân. "Đẩy viên thức ăn xuống dạ dày" là việc của thực quản.',
    },
    {
      type: 'text',
      prompt:
        'Ở ruột non, tinh bột được biến đổi hoàn toàn thành chất đơn giản nào? (Viết tên chất.)',
      accept: ['glucose', 'đường glucose', 'đường đơn glucose', 'glucozo', 'glucôzơ'],
      hints: ['Đây cũng là sản phẩm của quang hợp và là nguyên liệu của hô hấp tế bào.'],
      solution:
        'Tinh bột được biến đổi thành glucose; protein thành amino acid; lipid thành glycerol và acid béo.',
    },
    {
      type: 'number',
      prompt:
        'Theo khuyến nghị $40$ mL nước cho mỗi kg khối lượng cơ thể mỗi ngày, một bạn nặng $45$ kg cần khoảng bao nhiêu mililít nước mỗi ngày?',
      answer: 1800,
      unit: 'mL',
      hints: ['Nhân lượng nước cho $1$ kg với khối lượng cơ thể.'],
      solution: '$V = 40 \\cdot 45 = 1\\,800$ mL (khoảng $1{,}8$ lít).',
    },
    {
      type: 'number',
      prompt:
        'Bạn Lan nặng $38$ kg. Mỗi ngày Lan cần khoảng bao nhiêu lít nước? (Viết số thập phân, dùng dấu phẩy.)',
      answer: 1.52,
      tolerance: 0.005,
      unit: 'lít',
      hints: [
        'Tính nhu cầu theo mL trước: $40 \\cdot 38$.',
        'Đổi mL sang lít: chia cho $1\\,000$.',
      ],
      solution: '$V = 40 \\cdot 38 = 1\\,520$ mL $= 1{,}52$ lít.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các con đường cơ thể người thải nước ra ngoài.',
      options: ['Nước tiểu', 'Mồ hôi', 'Hơi thở', 'Phân', 'Tóc và móng'],
      answers: [0, 1, 2, 3],
      hints: ['Nghĩ đến thận, da, phổi và ruột già.'],
      solution:
        'Nước được thải ra qua nước tiểu (thận), mồ hôi (da), hơi thở (phổi) và một ít theo phân. Tóc và móng không phải đường thải nước.',
    },
    {
      type: 'choice',
      prompt: 'Vòng tuần hoàn nhỏ ở người có vai trò gì?',
      options: [
        'Đưa máu đến các cơ quan để cung cấp chất dinh dưỡng',
        'Đưa máu đến phổi để thải carbon dioxide và nhận oxygen',
        'Đưa thức ăn từ dạ dày xuống ruột non',
        'Lọc máu tạo thành nước tiểu',
      ],
      answer: 1,
      hints: ['Vòng tuần hoàn nhỏ đi qua cơ quan nào ngoài tim?'],
      solution:
        'Vòng tuần hoàn nhỏ: tâm thất phải → động mạch phổi → phổi (thải $\\text{CO}_2$, nhận $\\text{O}_2$) → tĩnh mạch phổi → tâm nhĩ trái; máu đỏ thẫm thành máu đỏ tươi.',
    },
    {
      type: 'choice',
      prompt: 'Trong vòng tuần hoàn lớn, máu đỏ tươi được bơm đi từ ngăn nào của tim?',
      options: ['Tâm nhĩ phải', 'Tâm thất phải', 'Tâm thất trái', 'Tâm nhĩ trái'],
      answer: 2,
      hints: ['Máu đỏ tươi từ phổi về tâm nhĩ trái, xuống ngăn nào rồi vào động mạch chủ?'],
      solution:
        'Vòng tuần hoàn lớn bắt đầu từ tâm thất trái: máu đỏ tươi theo động mạch chủ đến các cơ quan, rồi theo tĩnh mạch chủ về tâm nhĩ phải.',
    },
    {
      type: 'choice',
      prompt: 'Khi bị tiêu chảy nặng, việc nên làm ngay để tránh mất nước là gì?',
      options: [
        'Nhịn ăn, nhịn uống để ruột nghỉ',
        'Uống dung dịch oresol để bù nước và chất điện giải, rồi đi khám',
        'Chỉ uống nước ngọt có ga',
        'Ăn thật nhiều đồ chiên rán',
      ],
      answer: 1,
      hints: ['Tiêu chảy làm cơ thể mất nhiều nước và muối khoáng.'],
      solution:
        'Tiêu chảy làm mất nhiều nước và muối khoáng; cần bù ngay bằng dung dịch oresol (pha đúng hướng dẫn) và đi khám nếu không đỡ.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao nên ăn đa dạng nhiều loại thức ăn thay vì chỉ ăn một loại?',
      options: [
        'Vì mỗi loại thức ăn cung cấp những chất dinh dưỡng khác nhau, ăn đa dạng giúp cơ thể đủ chất',
        'Vì ăn một loại thức ăn sẽ không tiêu hoá được',
        'Vì ăn đa dạng giúp không cần uống nước',
        'Vì cơ thể chỉ cần tinh bột',
      ],
      answer: 0,
      hints: ['Không có loại thức ăn nào chứa đủ mọi chất với tỉ lệ cơ thể cần.'],
      solution:
        'Mỗi loại thức ăn giàu một số chất (gạo giàu tinh bột, thịt cá giàu protein, rau quả giàu vitamin, chất khoáng, chất xơ). Ăn đa dạng giúp cơ thể có đủ các chất, tránh thiếu hay thừa chất.',
    },
  ],
  takeaways: [
    'Thức ăn đi qua: khoang miệng → thực quản → dạ dày → ruột non → ruột già → hậu môn, được biến đổi cơ học và hoá học thành chất đơn giản.',
    'Ruột non biến đổi hoàn toàn thức ăn (tinh bột → glucose, protein → amino acid, lipid → glycerol và acid béo) và hấp thụ chất dinh dưỡng vào máu; ruột già hấp thụ nước, tạo phân.',
    'Động vật lấy nước qua uống và thức ăn, thải nước qua nước tiểu, mồ hôi, hơi thở, phân; trẻ vị thành niên cần khoảng $40$ mL nước/kg cơ thể mỗi ngày.',
    'Hệ tuần hoàn vận chuyển các chất: vòng tuần hoàn nhỏ đưa máu qua phổi trao đổi khí, vòng tuần hoàn lớn đưa $\\text{O}_2$ và chất dinh dưỡng đến các cơ quan, mang $\\text{CO}_2$ và chất thải về.',
  ],
};
