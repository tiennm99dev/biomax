/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Công nghệ di truyền và kĩ thuật tạo DNA tái tổ hợp; sinh vật biến đổi gene; ứng dụng trong nông nghiệp, y tế, pháp y, môi trường và an toàn sinh học; đạo đức sinh học khi nghiên cứu và ứng dụng công nghệ di truyền.',
  intro:
    'Trước đây, insulin để chữa bệnh đái tháo đường được tách từ tuỵ lợn, bò với số lượng ít và giá thành cao. Ngày nay, phần lớn insulin được sản xuất bởi những vi khuẩn mang gene insulin của người. Làm thế nào để đưa một gene của người vào vi khuẩn? Trong bài này, em sẽ vào phòng thí nghiệm ảo, tự chọn enzyme để cắt, nối gene và tạo ra vi khuẩn sản xuất insulin.',
  objectives: [
    'Nêu được khái niệm công nghệ di truyền và sinh vật biến đổi gene.',
    'Trình bày được các bước tạo DNA tái tổ hợp và chuyển gene vào tế bào nhận.',
    'Nêu được một số ứng dụng của công nghệ di truyền trong nông nghiệp, y tế, pháp y, làm sạch môi trường và an toàn sinh học.',
    'Nêu được một số vấn đề đạo đức sinh học trong nghiên cứu và ứng dụng công nghệ di truyền.',
  ],
  sections: [
    {
      heading: 'Công nghệ di truyền',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Khái niệm',
          text: 'Công nghệ di truyền là tập hợp các kĩ thuật hiện đại tác động lên vật chất di truyền (DNA) để nghiên cứu, sửa chữa, biến đổi gene: tách, tổng hợp gene mong muốn (gene đích) và chuyển gene đó vào tế bào nhận, tạo ra sinh vật có đặc điểm mới. Cơ sở khoa học của công nghệ di truyền là những hiểu biết về cấu trúc và hoạt động của gene.',
        },
        {
          type: 'p',
          text: 'Để đưa gene đích vào tế bào nhận, người ta dùng thể truyền (vector), phổ biến là plasmid. Plasmid là phân tử DNA nhỏ, dạng vòng, nằm trong tế bào chất của vi khuẩn và có khả năng nhân đôi độc lập với DNA của tế bào. Plasmid dùng làm thể truyền thường mang gene đánh dấu, ví dụ gene kháng một loại kháng sinh, để nhận ra tế bào đã nhận gene.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Tìm hiểu thêm: "kéo" và "keo" của công nghệ di truyền',
          text: 'Enzyme cắt giới hạn nhận ra một trình tự nucleotide xác định trên DNA và cắt tại đó. Ví dụ, enzyme EcoRI nhận ra trình tự GAATTC và cắt giữa G và A trên cả hai mạch, để lại hai đầu sợi đơn AATT gọi là đầu dính. Cắt gene đích và plasmid bằng cùng một enzyme thì đầu dính của chúng bổ sung với nhau, bắt cặp theo nguyên tắc bổ sung; enzyme nối (ligase) sau đó nối chúng lại thành DNA tái tổ hợp.',
        },
        {
          type: 'table',
          caption: 'Một số enzyme cắt giới hạn (vạch | là chỗ cắt trên mạch 1)',
          head: ['Enzyme', 'Trình tự nhận biết', 'Đầu dính tạo ra'],
          rows: [
            ['EcoRI', 'G | AATTC', 'AATT'],
            ['BamHI', 'G | GATCC', 'GATC'],
            ['HindIII', 'A | AGCTT', 'AGCT'],
          ],
        },
      ],
    },
    {
      heading: 'Tạo DNA tái tổ hợp và sinh vật biến đổi gene',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Tách DNA chứa gene đích từ tế bào cho (ví dụ gene insulin từ tế bào người) và tách plasmid từ vi khuẩn.',
            'Cắt DNA chứa gene đích và plasmid bằng cùng một loại enzyme cắt giới hạn; gắn gene đích vào plasmid nhờ enzyme nối, tạo thể truyền tái tổ hợp (DNA tái tổ hợp).',
            'Chuyển DNA tái tổ hợp vào tế bào nhận (vi khuẩn, tế bào thực vật hoặc dòng tế bào phôi động vật).',
            'Chọn lọc các tế bào đã nhận gene (ví dụ nuôi trên môi trường có kháng sinh, chỉ tế bào mang plasmid có gene kháng kháng sinh mới sống), nuôi cấy và cho gene đích biểu hiện thành sản phẩm hoặc phát triển thành cơ thể mang tính trạng mới.',
          ],
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Sinh vật biến đổi gene',
          text: 'Sinh vật biến đổi gene là sinh vật có hệ gene đã được con người làm biến đổi cho phù hợp với lợi ích của mình, bằng cách đưa thêm gene lạ vào, làm biến đổi một gene sẵn có hoặc làm cho một gene không biểu hiện.',
        },
        {
          type: 'p',
          text: 'Vi khuẩn E. coli thường được dùng làm tế bào nhận vì chúng có cấu tạo đơn giản, dễ nuôi cấy và sinh sản rất nhanh (khoảng $20$ phút phân đôi một lần), nên chỉ sau thời gian ngắn đã tạo được lượng lớn sản phẩm của gene đích.',
        },
      ],
    },
    {
      heading: 'Ứng dụng trong nông nghiệp',
      blocks: [
        {
          type: 'p',
          text: 'Công nghệ di truyền giúp tạo các giống cây trồng, vật nuôi mang tính trạng mới mà phương pháp lai thông thường khó hoặc không tạo được: năng suất cao, chống sâu bệnh, chịu hạn, chịu mặn, kháng thuốc diệt cỏ, nâng cao chất lượng sản phẩm.',
        },
        {
          type: 'table',
          caption: 'Một số thành tựu trong nông nghiệp',
          head: ['Sinh vật biến đổi gene', 'Đặc điểm mới'],
          rows: [
            ['Ngô Bt', 'Mang gene của vi khuẩn Bacillus thuringiensis, tạo protein diệt sâu hại'],
            ['Lúa vàng', 'Tổng hợp được β-carotene (tiền vitamin A) trong hạt gạo'],
            ['Đu đủ biến đổi gene', 'Kháng virus gây bệnh'],
            ['Cá chép biến đổi gene', 'Sinh trưởng nhanh, kháng virus'],
            ['Bò biến đổi gene', 'Sữa có chất lượng cao hơn'],
            [
              'Dê biến đổi gene',
              'Sữa chứa protein tơ nhện để làm vật liệu y học (gân, dây chằng nhân tạo) và áo giáp',
            ],
            ['Cá phát sáng', 'Mang gene phát sáng, làm cá cảnh'],
          ],
        },
        {
          type: 'p',
          text: 'Để tạo động vật biến đổi gene, gene đích được chuyển vào dòng tế bào phôi; phôi đã nhận gene được chọn lọc và cấy vào tử cung con cái để mang thai, sinh ra con vật biến đổi gene.',
        },
      ],
    },
    {
      heading: 'Ứng dụng trong y tế, pháp y và môi trường',
      blocks: [
        {
          type: 'list',
          items: [
            'Sản xuất thuốc sinh học: dùng vi sinh vật hoặc tế bào mang gene đích để sản xuất insulin chữa bệnh đái tháo đường, erythropoietin (EPO) chữa thiếu máu, vaccine (ví dụ vaccine RNA phòng Covid-19), với số lượng lớn và giá thành hạ.',
            'Liệu pháp gene: đưa gene lành vào tế bào của người bệnh (thường nhờ thể truyền là virus đã được làm mất khả năng gây bệnh) để thay thế hoặc bù cho gene bị hỏng, chữa một số bệnh di truyền.',
            'Pháp y: phân tích, đối chiếu DNA để xác định danh tính cá nhân, xác định quan hệ huyết thống, nhận dạng hài cốt liệt sĩ, nạn nhân trong thảm hoạ và tìm ra thủ phạm của vụ án.',
            'Làm sạch môi trường: tạo các chủng vi sinh vật biến đổi gene phân huỷ nhanh rác thải hữu cơ, dầu mỏ, thuốc trừ sâu hoặc chuyển hoá kim loại nặng, làm giảm ô nhiễm.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'An toàn sinh học',
          text: 'An toàn sinh học là các biện pháp ngăn chặn việc sử dụng sai mục đích, làm thất thoát, đánh cắp hoặc cố ý phát tán mầm bệnh, chất độc và vật liệu sinh học nguy hiểm, để bảo vệ sức khoẻ con người và môi trường. Công nghệ di truyền góp phần vào an toàn sinh học: giải trình tự gene của tác nhân gây bệnh, chẩn đoán nhanh và sản xuất vaccine.',
        },
      ],
    },
    {
      heading: 'Đạo đức sinh học',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Đạo đức sinh học',
          text: 'Đạo đức sinh học là những quy tắc ứng xử trong nghiên cứu và đưa thành tựu sinh học vào thực tiễn sao cho phù hợp với đạo đức xã hội. Nó giúp mỗi người cân nhắc lợi ích và rủi ro của công nghệ, tự kiểm soát hành vi và tuân thủ quy định.',
        },
        {
          type: 'list',
          items: [
            'Không tạo ra sinh vật biến đổi gene gây nguy hiểm cho con người và môi trường.',
            'Có biện pháp phòng ngừa rủi ro có thể phát sinh trong nghiên cứu; sản phẩm biến đổi gene cần được đánh giá an toàn và ghi nhãn rõ ràng.',
            'Khi nghiên cứu trên động vật, giảm sự đau đớn của chúng ở mức thấp nhất.',
            'Không biến đổi gene trên người.',
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Mặt trái cần cân nhắc',
          text: 'Gene lạ từ cây trồng biến đổi gene có thể phát tán sang các loài hoang dại; sinh vật biến đổi gene có thể ảnh hưởng đến đa dạng sinh học; thông tin di truyền của mỗi người là thông tin riêng tư cần được bảo vệ.',
        },
      ],
    },
  ],
  explore: {
    title: 'Phòng lab ảo: tạo vi khuẩn sản xuất insulin',
    instruction:
      'Bước 1: chọn enzyme cắt giới hạn sao cho gene insulin (tô xanh) được cắt rời nguyên vẹn. Bước 2: chọn enzyme mở vòng plasmid sao cho đầu dính khớp với gene. Sau đó nối bằng enzyme nối, chuyển plasmid tái tổ hợp vào vi khuẩn và dùng môi trường có kháng sinh để giữ lại tế bào đã nhận gene. Thử cả các enzyme sai để xem điều gì xảy ra.',
  },
  examples: [
    {
      problem: 'Trình bày các bước tạo vi khuẩn E. coli sản xuất insulin của người.',
      steps: [
        'Tách gene insulin từ tế bào người và tách plasmid từ vi khuẩn.',
        'Cắt gene insulin và plasmid bằng cùng một enzyme cắt giới hạn để chúng có đầu dính bổ sung; nối gene vào plasmid bằng enzyme nối, tạo plasmid tái tổ hợp.',
        'Chuyển plasmid tái tổ hợp vào vi khuẩn E. coli.',
        'Nuôi vi khuẩn trên môi trường có kháng sinh để chọn những tế bào đã nhận plasmid (mang gene kháng kháng sinh); nuôi cấy chúng với số lượng lớn rồi tách, tinh chế insulin.',
      ],
      answer:
        'Tách gene và plasmid → cắt bằng cùng enzyme, nối tạo DNA tái tổ hợp → chuyển vào E. coli → chọn lọc, nuôi cấy và thu insulin.',
    },
    {
      problem:
        'Một đoạn DNA có gene đích nằm giữa hai trình tự GAATTC; bên trong gene có một trình tự GGATCC. Nên dùng EcoRI (nhận biết GAATTC) hay BamHI (nhận biết GGATCC) để cắt lấy gene? Plasmid phải được cắt bằng enzyme nào?',
      steps: [
        'BamHI cắt tại GGATCC nằm bên trong gene, làm gene bị đứt đôi: không dùng được.',
        'EcoRI cắt tại hai trình tự GAATTC ở hai bên gene, tách gene ra nguyên vẹn với hai đầu dính AATT.',
        'Plasmid cũng phải cắt bằng EcoRI (tại một vị trí duy nhất) để có đầu dính AATT bổ sung với đầu dính của gene, nhờ đó enzyme nối mới nối được gene vào plasmid.',
      ],
      answer: 'Dùng EcoRI để cắt cả DNA chứa gene và plasmid.',
    },
    {
      problem:
        'Một số người lo ngại về cây trồng biến đổi gene. Hãy nêu một lợi ích, một rủi ro và một nguyên tắc đạo đức sinh học liên quan.',
      steps: [
        'Lợi ích: ngô Bt tự tạo protein diệt sâu, giảm lượng thuốc trừ sâu phải phun, tăng năng suất.',
        'Rủi ro: gene lạ có thể phát tán sang loài hoang dại, ảnh hưởng đến đa dạng sinh học.',
        'Nguyên tắc: không tạo sinh vật biến đổi gene gây nguy hiểm cho con người và môi trường; phải đánh giá rủi ro, có biện pháp phòng ngừa và ghi nhãn sản phẩm.',
      ],
      answer:
        'Cây biến đổi gene có lợi ích rõ ràng nhưng cần được đánh giá an toàn và quản lí theo các nguyên tắc đạo đức sinh học.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Công nghệ di truyền là',
      options: [
        'tập hợp các kĩ thuật tác động lên DNA để tách, biến đổi và chuyển gene, tạo sinh vật có đặc điểm mới',
        'phương pháp lai hai giống thuần chủng để tạo ưu thế lai',
        'phương pháp chọn lọc những cá thể tốt nhất trong quần thể để làm giống',
        'kĩ thuật nuôi cấy mô tế bào thực vật trong ống nghiệm',
      ],
      answer: 0,
      hints: ['Công nghệ di truyền làm việc trực tiếp với gene (DNA).'],
      solution:
        'Công nghệ di truyền tác động lên DNA: tách, tổng hợp, biến đổi gene và chuyển gene vào tế bào nhận. Lai giống và chọn lọc không tác động trực tiếp lên DNA.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước tạo vi khuẩn sản xuất insulin người theo đúng thứ tự.',
      items: [
        'Nối gene insulin vào plasmid bằng enzyme nối, tạo DNA tái tổ hợp',
        'Tách DNA chứa gene insulin từ tế bào người và tách plasmid từ vi khuẩn',
        'Chọn lọc, nuôi cấy vi khuẩn mang gene insulin và thu insulin',
        'Cắt DNA người và plasmid bằng cùng một enzyme cắt giới hạn',
        'Chuyển DNA tái tổ hợp vào vi khuẩn E. coli',
      ],
      answer: [1, 3, 0, 4, 2],
      hints: ['Phải có gene và plasmid trước khi cắt; phải cắt trước khi nối.'],
      solution:
        'Tách gene và plasmid → cắt bằng cùng enzyme cắt giới hạn → nối bằng enzyme nối → chuyển vào E. coli → chọn lọc, nuôi cấy, thu insulin.',
    },
    {
      type: 'choice',
      prompt: 'Trong kĩ thuật tạo DNA tái tổ hợp, plasmid đóng vai trò',
      options: [
        'thể truyền mang gene đích vào tế bào nhận',
        'enzyme cắt DNA tại trình tự xác định',
        'enzyme nối các đoạn DNA',
        'tế bào nhận gene',
      ],
      answer: 0,
      hints: ['Plasmid là phân tử DNA vòng nhỏ có thể nhân đôi độc lập trong vi khuẩn.'],
      solution:
        'Plasmid là thể truyền (vector): gene đích được gắn vào plasmid, rồi plasmid mang gene vào tế bào nhận và nhân lên cùng tế bào.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao phải cắt gene đích và plasmid bằng cùng một loại enzyme cắt giới hạn?',
      options: [
        'Để hai đầu dính bổ sung với nhau, nhờ đó gene được nối vào plasmid',
        'Vì mỗi tế bào chỉ có một loại enzyme',
        'Để gene đích bị cắt thành nhiều đoạn nhỏ',
        'Để plasmid không nhân đôi được',
      ],
      answer: 0,
      hints: ['Mỗi enzyme để lại một kiểu đầu dính riêng.'],
      solution:
        'Cùng một enzyme tạo ra cùng một kiểu đầu dính (ví dụ AATT với EcoRI), nên đầu dính của gene và plasmid bắt cặp bổ sung, rồi enzyme nối gắn chúng lại.',
    },
    {
      type: 'text',
      prompt:
        'Enzyme EcoRI nhận biết trình tự GAATTC và cắt giữa G và A trên mỗi mạch. Viết trình tự đầu dính (đoạn sợi đơn) mà EcoRI để lại.',
      accept: ['AATT', "5'-AATT-3'", "AATT-3'"],
      hints: [
        'Viết GAATTC, đánh dấu chỗ cắt G | AATTC.',
        'Mạch bổ sung CTTAAG bị cắt giữa A và G: CTTAA | G.',
      ],
      solution:
        'Mạch 1 bị cắt G | AATTC, mạch bổ sung bị cắt CTTAA | G, nên mỗi đầu cắt có một đoạn sợi đơn AATT: đó là đầu dính.',
    },
    {
      type: 'number',
      prompt:
        'Một đoạn DNA mạch thẳng có trình tự (mạch 1) AGAATTCTTGAATTCCGGAATTCA. Khi cắt bằng EcoRI (nhận biết GAATTC), đoạn DNA bị cắt thành bao nhiêu đoạn?',
      answer: 4,
      unit: 'đoạn',
      hints: [
        'Đếm số lần trình tự GAATTC xuất hiện.',
        'Một DNA mạch thẳng bị cắt ở $k$ chỗ thì tạo $k + 1$ đoạn.',
      ],
      solution:
        'GAATTC xuất hiện $3$ lần (AGAATTC…, …TTGAATTCC…, …CGGAATTCA), nên DNA bị cắt ở $3$ chỗ thành $3 + 1 = 4$ đoạn.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi sinh vật biến đổi gene với đặc điểm mới của nó.',
      left: [
        'Ngô Bt',
        'Lúa vàng',
        'Đu đủ biến đổi gene',
        'Dê biến đổi gene',
        'Cá chép biến đổi gene',
      ],
      right: [
        'Tạo protein diệt sâu nhờ gene của vi khuẩn Bacillus thuringiensis',
        'Tổng hợp β-carotene trong hạt gạo',
        'Kháng virus gây bệnh',
        'Cho sữa chứa protein tơ nhện',
        'Sinh trưởng nhanh, kháng virus',
        'Sản xuất insulin người',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
      ],
      hints: ['Chữ "Bt" là viết tắt tên một loài vi khuẩn; "vàng" là màu của β-carotene.'],
      solution:
        'Ngô Bt: kháng sâu; lúa vàng: β-carotene; đu đủ: kháng virus; dê: sữa chứa protein tơ nhện; cá chép: sinh trưởng nhanh, kháng virus. Insulin người do vi khuẩn E. coli biến đổi gene sản xuất.',
    },
    {
      type: 'choice',
      prompt: 'Vi khuẩn E. coli hay được dùng làm tế bào nhận để sản xuất insulin vì',
      options: [
        'chúng dễ nuôi cấy và sinh sản rất nhanh, nhanh chóng tạo lượng lớn sản phẩm',
        'chúng có sẵn gene insulin',
        'chúng không có DNA',
        'chúng là tế bào nhân thực giống tế bào người',
      ],
      answer: 0,
      hints: ['Cứ khoảng $20$ phút E. coli lại phân đôi một lần.'],
      solution:
        'E. coli có cấu tạo đơn giản, dễ nuôi và sinh sản rất nhanh, nên từ một tế bào nhận gene có thể tạo ra lượng lớn insulin trong thời gian ngắn.',
    },
    {
      type: 'choice',
      prompt:
        'Sau khi chuyển plasmid tái tổ hợp (có gene kháng kháng sinh) vào vi khuẩn, người ta nuôi vi khuẩn trên môi trường có kháng sinh để',
      options: [
        'giữ lại các tế bào đã nhận plasmid, loại bỏ các tế bào không nhận',
        'làm vi khuẩn sinh sản chậm lại',
        'cắt plasmid ra khỏi vi khuẩn',
        'làm gene insulin bị đột biến',
      ],
      answer: 0,
      hints: ['Tế bào không có gene kháng kháng sinh sẽ ra sao trên môi trường có kháng sinh?'],
      solution:
        'Chỉ tế bào mang plasmid (có gene kháng kháng sinh) sống sót trên môi trường có kháng sinh; đó chính là các tế bào mang gene insulin cần chọn.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các ứng dụng của công nghệ di truyền trong pháp y.',
      options: [
        'Xác định quan hệ huyết thống',
        'Nhận dạng hài cốt liệt sĩ',
        'Tìm ra thủ phạm của vụ án từ dấu vết DNA',
        'Sản xuất vaccine phòng bệnh',
        'Tạo vi khuẩn phân huỷ dầu mỏ',
      ],
      answers: [0, 1, 2],
      hints: ['Pháp y dùng DNA để xác định danh tính.'],
      solution:
        'Đối chiếu DNA giúp xác định huyết thống, danh tính hài cốt, nạn nhân và thủ phạm. Sản xuất vaccine là ứng dụng trong y tế; vi khuẩn phân huỷ dầu là ứng dụng trong làm sạch môi trường.',
    },
    {
      type: 'choice',
      prompt: 'Liệu pháp gene là',
      options: [
        'đưa gene lành vào tế bào người bệnh để thay thế hoặc bù cho gene bị hỏng',
        'dùng thuốc kháng sinh để diệt vi khuẩn gây bệnh',
        'phẫu thuật để khắc phục tật di truyền',
        'lai giống để tạo con lai khoẻ mạnh',
      ],
      answer: 0,
      hints: ['Liệu pháp gene chữa bệnh từ gốc: gene bị sai hỏng.'],
      solution:
        'Liệu pháp gene đưa gene lành vào tế bào người bệnh (thường nhờ thể truyền là virus đã mất khả năng gây bệnh) để chữa các bệnh do gene bị sai hỏng.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các nguyên tắc đúng của đạo đức sinh học trong công nghệ di truyền.',
      options: [
        'Không tạo sinh vật biến đổi gene gây nguy hiểm cho con người và môi trường',
        'Có biện pháp phòng ngừa rủi ro trong nghiên cứu',
        'Giảm đau đớn cho động vật thí nghiệm ở mức thấp nhất',
        'Không biến đổi gene trên người',
        'Được tự do thả sinh vật biến đổi gene ra môi trường để thử nghiệm',
      ],
      answers: [0, 1, 2, 3],
      hints: ['Một nguyên tắc đạo đức không thể cho phép gây rủi ro cho môi trường.'],
      solution:
        'Bốn nguyên tắc đầu là nguyên tắc đạo đức sinh học. Tự do thả sinh vật biến đổi gene ra môi trường là sai, vì có thể làm phát tán gene lạ và ảnh hưởng đến đa dạng sinh học.',
    },
  ],
  takeaways: [
    'Công nghệ di truyền là tập hợp các kĩ thuật tác động lên DNA để tách, biến đổi và chuyển gene đích vào tế bào nhận, tạo sinh vật có đặc điểm mới.',
    'Tạo DNA tái tổ hợp: cắt gene đích và plasmid bằng cùng một enzyme cắt giới hạn (đầu dính bổ sung), nối bằng enzyme nối, chuyển vào tế bào nhận rồi chọn lọc, nuôi cấy.',
    'Sinh vật biến đổi gene có hệ gene được con người biến đổi: ngô Bt, lúa vàng, đu đủ kháng virus, cá chép, dê, vi khuẩn sản xuất insulin.',
    'Ứng dụng: nông nghiệp (giống mới), y tế (insulin, EPO, vaccine, liệu pháp gene), pháp y (định danh bằng DNA), làm sạch môi trường và an toàn sinh học.',
    'Đạo đức sinh học: không tạo sinh vật biến đổi gene gây nguy hiểm, phòng ngừa rủi ro, giảm đau đớn cho động vật thí nghiệm, không biến đổi gene trên người.',
  ],
};
