/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Công nghệ gene tạo ra tế bào, sinh vật có gene bị biến đổi hoặc mang thêm gene mới. Bài trình bày các công cụ (enzyme cắt giới hạn, ligase, vector), kĩ thuật PCR và điện di, quy trình tạo DNA tái tổ hợp, chuyển gene và các ứng dụng.',
  intro:
    'Một giọt máu nhỏ ở hiện trường chỉ chứa vài nanogram DNA, quá ít để phân tích. Chỉ sau khoảng hai giờ trong máy PCR, đoạn DNA cần xét nghiệm đã được nhân lên hàng tỉ lần; điện di trên gel cho thấy nó trùng hay không trùng với DNA của nghi phạm. Cũng những công cụ ấy giúp vi khuẩn sản xuất insulin người và cây bông tự sinh độc tố diệt sâu.',
  objectives: [
    'Nêu được khái niệm công nghệ gene, DNA tái tổ hợp và vai trò của enzyme cắt giới hạn, ligase, vector.',
    'Trình bày được nguyên lí và các bước của kĩ thuật PCR; tính được số bản sao sau $n$ chu kì.',
    'Trình bày được nguyên lí của điện di trên gel và đọc được kết quả điện di đơn giản.',
    'Trình bày được quy trình tạo DNA tái tổ hợp, chuyển gene và một số ứng dụng của công nghệ gene.',
  ],
  sections: [
    {
      heading: 'Công nghệ gene và các công cụ',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Công nghệ gene',
          text: 'Công nghệ gene là quy trình kĩ thuật tạo ra những tế bào hoặc sinh vật có gene bị biến đổi, hoặc có thêm gene mới, nhằm tạo ra sản phẩm hoặc giống sinh vật mới phục vụ con người. Trung tâm của công nghệ gene là kĩ thuật tạo DNA tái tổ hợp.',
        },
        {
          type: 'callout',
          tone: 'definition',
          title: 'DNA tái tổ hợp',
          text: 'DNA tái tổ hợp là phân tử DNA được tạo ra bằng cách nối đoạn DNA của tế bào cho (gene cần chuyển) với DNA của vector (thể truyền).',
        },
        {
          type: 'table',
          caption: 'Các công cụ chính',
          head: ['Công cụ', 'Vai trò'],
          rows: [
            [
              'Enzyme cắt giới hạn (restrictase)',
              'Nhận biết và cắt DNA tại trình tự xác định, thường tạo đầu dính, ví dụ EcoRI cắt trình tự GAATTC',
            ],
            ['DNA ligase', 'Nối các đoạn DNA bằng liên kết phosphodiester, tạo DNA tái tổ hợp'],
            [
              'Vector (thể truyền)',
              'Plasmid, virus: mang gene vào tế bào nhận, giúp gene tồn tại, nhân lên và biểu hiện',
            ],
            [
              'Tế bào nhận',
              'Vi khuẩn E. coli, nấm men, tế bào thực vật, động vật nuôi cấy: nơi gene được nhân lên và biểu hiện',
            ],
          ],
        },
        {
          type: 'p',
          text: 'DNA lạ đưa vào tế bào dễ bị enzyme của tế bào phân giải, nên cần vector. Một vector plasmid thường có ba thành phần: trình tự khởi đầu tái bản để tự nhân lên trong tế bào nhận; gene chỉ thị chọn lọc (thường là gene kháng kháng sinh) để nhận biết tế bào mang vector; vị trí đa nhân dòng gồm nhiều điểm cắt của các enzyme giới hạn để gắn gene cần chuyển.',
        },
      ],
    },
    {
      heading: 'Kĩ thuật PCR',
      blocks: [
        {
          type: 'p',
          text: 'PCR (phản ứng chuỗi polymerase) nhân bản một đoạn DNA xác định thành rất nhiều bản sao trong ống nghiệm, dựa trên nguyên tắc tái bản DNA. Hỗn hợp phản ứng gồm: DNA khuôn chứa đoạn cần nhân; cặp mồi (hai đoạn DNA ngắn bổ sung với hai đầu đoạn cần nhân); bốn loại nucleotide tự do; DNA polymerase chịu nhiệt (Taq polymerase); dung dịch đệm có ion $\\mathrm{Mg^{2+}}$.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Biến tính ($94$–$95$ °C): liên kết hydrogen bị phá vỡ, DNA mạch kép tách thành hai mạch đơn.',
            'Gắn mồi ($50$–$65$ °C): mồi bắt cặp bổ sung với đầu đoạn cần nhân trên mỗi mạch khuôn.',
            'Kéo dài ($72$ °C): Taq polymerase lắp các nucleotide nối dài mồi theo chiều $5^\\prime \\to 3^\\prime$, tạo mạch mới bổ sung với mạch khuôn.',
          ],
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Số bản sao',
          text: 'Mỗi chu kì số phân tử DNA tăng gấp đôi. Từ $a$ phân tử ban đầu, sau $n$ chu kì có $a \\cdot 2^{n}$ phân tử. Các phân tử có đúng chiều dài đoạn cần nhân (giới hạn bởi hai mồi) chỉ xuất hiện từ chu kì thứ ba; từ $1$ phân tử, sau $n$ chu kì có $2^{n} - 2n$ phân tử như vậy.',
        },
        {
          type: 'p',
          text: 'Taq polymerase được tách từ vi khuẩn Thermus aquaticus sống ở suối nước nóng, nên không bị biến tính ở $95$ °C; nhờ đó không phải thêm enzyme sau mỗi chu kì. Muốn nhân bản gene từ mRNA, người ta dùng enzyme phiên mã ngược tổng hợp cDNA (DNA bổ sung) từ mRNA, rồi mới PCR (gọi là RT-PCR). cDNA của gene nhân thực không còn intron, nên tế bào nhân sơ biểu hiện được.',
        },
      ],
    },
    {
      heading: 'Điện di trên gel',
      blocks: [
        {
          type: 'p',
          text: 'Điện di là kĩ thuật tách các đoạn DNA theo kích thước. Mẫu DNA được nạp vào giếng trên bản gel agarose đặt trong dung dịch đệm, giếng ở phía cực âm. Khi có dòng điện, DNA mang điện tích âm (do các nhóm phosphate) chạy về cực dương. Gel như một tấm lưới: đoạn càng ngắn càng dễ luồn qua, chạy càng xa giếng.',
        },
        {
          type: 'p',
          text: 'Sau khi chạy, gel được nhuộm bằng chất phát sáng dưới tia tử ngoại; mỗi băng là tập hợp các đoạn DNA cùng kích thước. Kích thước một băng được ước lượng bằng cách so với thang chuẩn (các đoạn DNA đã biết kích thước, đơn vị bp là cặp base) chạy cùng gel.',
        },
        { type: 'widget', name: 'dien-di' },
        {
          type: 'p',
          text: 'Điện di dùng để kiểm tra sản phẩm PCR, kiểm tra DNA sau tách chiết hoặc sau khi cắt bằng enzyme giới hạn, so sánh DNA trong giám định pháp y và xét nghiệm huyết thống.',
        },
      ],
    },
    {
      heading: 'Quy trình tạo DNA tái tổ hợp và chuyển gene',
      blocks: [
        {
          type: 'list',
          ordered: true,
          items: [
            'Tách DNA chứa gene cần chuyển từ tế bào cho (hoặc tổng hợp cDNA từ mRNA, nhân bản bằng PCR) và tách vector (plasmid).',
            'Tạo DNA tái tổ hợp: cắt gene và vector bằng cùng một loại enzyme cắt giới hạn để có đầu dính bổ sung, rồi nối bằng DNA ligase.',
            'Đưa DNA tái tổ hợp vào tế bào nhận: biến nạp (xử lí bằng $\\mathrm{CaCl_2}$ hoặc xung điện), tải nạp bằng virus, vi tiêm, súng bắn gene, hoặc nhờ vi khuẩn Agrobacterium ở thực vật.',
            'Chọn lọc tế bào mang DNA tái tổ hợp: nuôi trên môi trường có kháng sinh, chỉ tế bào có gene chỉ thị kháng kháng sinh sống sót; kiểm tra lại bằng PCR, điện di.',
            'Nuôi cấy tế bào đã chọn để gene biểu hiện; tách chiết, tinh sạch sản phẩm, hoặc tái sinh thành sinh vật biến đổi gene.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Ví dụ: sản xuất hormone sinh trưởng người (HGH)',
          text: 'Gene HGH được gắn vào plasmid, biến nạp vào E. coli, chọn lọc trên môi trường có kháng sinh; vi khuẩn mang gene được nuôi ở quy mô lớn để sản xuất HGH nhanh, rẻ, dùng chữa bệnh lùn do thiếu hormone.',
        },
      ],
    },
    {
      heading: 'Ứng dụng của công nghệ gene',
      blocks: [
        {
          type: 'table',
          head: ['Lĩnh vực', 'Ví dụ'],
          rows: [
            [
              'Y học',
              'Insulin, HGH, vaccine tái tổ hợp do vi sinh vật sản xuất; chẩn đoán bệnh bằng PCR; liệu pháp gene',
            ],
            [
              'Trồng trọt',
              'Bông, ngô mang gene độc tố Bt kháng sâu; cây kháng thuốc diệt cỏ; lúa gạo vàng giàu tiền vitamin A; cây chịu hạn, mặn',
            ],
            [
              'Chăn nuôi',
              'Vật nuôi sinh trưởng nhanh; dê, bò chuyển gene tiết protein người trong sữa; động vật mô hình để nghiên cứu bệnh, thử thuốc',
            ],
            ['Môi trường', 'Vi sinh vật biến đổi gene phân giải dầu mỏ, chất độc khó phân huỷ'],
          ],
        },
        {
          type: 'p',
          text: 'Độc tố Bt được tạo ra ở dạng tiền độc tố không hoạt động; nó chỉ được hoạt hoá trong ruột có môi trường kiềm của sâu, phá huỷ màng ruột làm sâu chết. Ruột người có môi trường acid, không có cơ chế hoạt hoá này.',
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Rủi ro cần kiểm soát',
          text: 'Sâu hại có thể kháng độc tố Bt; gene kháng thuốc diệt cỏ có thể phát tán sang cỏ dại họ hàng; sinh vật biến đổi gene có thể ảnh hưởng đến đa dạng sinh học. Vì vậy sản phẩm biến đổi gene phải được đánh giá an toàn trước khi được phép sử dụng.',
        },
      ],
    },
    {
      heading: 'Hoạt động: Mô hình tạo DNA tái tổ hợp bằng giấy',
      project: true,
      blocks: [
        {
          type: 'p',
          text: 'Mục tiêu: dùng băng giấy mô phỏng cắt và nối DNA để hiểu vì sao gene và vector phải được cắt bằng cùng một enzyme giới hạn. Làm theo cặp trong khoảng $30$ phút.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Vật liệu: hai băng giấy viết trình tự base (một băng "plasmid" dán thành vòng, một băng "DNA người" chứa gene), kéo, băng dính, bút màu.',
            'Tìm trình tự nhận biết của EcoRI (GAATTC) trên cả hai băng; cắt mạch trên giữa G và A, mạch dưới ở vị trí đối xứng, để thấy đầu dính AATT.',
            'Ghép đoạn gene vào chỗ cắt của plasmid sao cho các đầu dính bắt cặp bổ sung; dùng băng dính thay cho ligase.',
            'Làm lại với gene cắt bằng một enzyme khác (BamHI, trình tự GGATCC) và thử ghép vào plasmid cắt bằng EcoRI.',
          ],
        },
        {
          type: 'p',
          text: 'Báo cáo: ảnh mô hình; giải thích vì sao lần ghép thứ hai không khớp; nêu vai trò của enzyme cắt giới hạn, ligase, plasmid trong mô hình và trong thực tế.',
        },
      ],
    },
  ],
  explore: {
    title: 'Máy PCR ảo',
    instruction:
      'Đặt nhiệt độ cho máy PCR để chạy từng chu kì: chọn đúng thứ tự thì mỗi chu kì số phân tử DNA tăng gấp đôi. Quan sát mạch gốc, mạch dài và mạch có đúng chiều dài đoạn cần nhân qua ba chu kì đầu. Thử thay Taq polymerase bằng DNA polymerase của người, rồi kéo thanh số chu kì để tính số bản sao.',
  },
  examples: [
    {
      problem:
        'Một mẫu có $10$ phân tử DNA chứa đoạn gene cần nhân. Sau $25$ chu kì PCR, mỗi chu kì đều nhân đôi, có bao nhiêu phân tử DNA? Trong số đó, có bao nhiêu phân tử chứa mạch gốc ban đầu?',
      steps: [
        'Mỗi chu kì số phân tử tăng gấp đôi: sau $25$ chu kì có $10 \\cdot 2^{25}$ phân tử.',
        '$2^{25} = 33\\,554\\,432$, nên có $10 \\cdot 33\\,554\\,432 = 335\\,544\\,320$ phân tử.',
        'Mỗi phân tử ban đầu có $2$ mạch gốc; mạch gốc luôn được giữ lại làm khuôn, mỗi mạch nằm trong một phân tử. Vậy có $10 \\cdot 2 = 20$ phân tử chứa mạch gốc.',
      ],
      answer: 'Có $335\\,544\\,320$ phân tử, trong đó $20$ phân tử chứa mạch gốc.',
    },
    {
      problem:
        'Điện di sản phẩm PCR cùng thang chuẩn $100$, $200$, $300$, $500$, $700$, $1000$ bp. Băng sản phẩm nằm giữa băng $500$ bp và băng $700$ bp. Ước lượng kích thước sản phẩm và cho biết đoạn $2000$ bp (nếu có) sẽ nằm ở đâu so với các băng trên.',
      steps: [
        'Trên gel, đoạn càng ngắn càng chạy xa giếng, nên các băng thang chuẩn xếp từ $1000$ bp (gần giếng) đến $100$ bp (xa giếng nhất).',
        'Băng sản phẩm nằm giữa băng $500$ bp và $700$ bp, nên sản phẩm dài khoảng từ $500$ đến $700$ bp, khoảng $600$ bp.',
        'Đoạn $2000$ bp dài hơn mọi đoạn trên nên chạy chậm nhất, nằm gần giếng hơn băng $1000$ bp.',
      ],
      answer: 'Sản phẩm dài khoảng $600$ bp; đoạn $2000$ bp nằm gần giếng nhất.',
    },
  ],
  practice: [
    {
      type: 'order',
      prompt: 'Sắp xếp các bước của một chu kì PCR theo đúng thứ tự.',
      items: ['Biến tính ở $95$ °C', 'Gắn mồi ở khoảng $55$ °C', 'Kéo dài ở $72$ °C'],
      answer: [0, 1, 2],
      hints: ['Mồi chỉ bám được vào mạch đơn.'],
      solution: 'Biến tính tách hai mạch → gắn mồi vào mạch khuôn → Taq polymerase kéo dài mồi.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi thành phần của phản ứng PCR với vai trò của nó.',
      left: ['DNA khuôn', 'Cặp mồi', 'Taq polymerase', 'Nucleotide tự do'],
      right: [
        'Chứa đoạn DNA cần nhân',
        'Bắt cặp với hai đầu đoạn cần nhân, là điểm khởi đầu tổng hợp',
        'Lắp nucleotide nối dài mạch mới, chịu được nhiệt độ cao',
        'Nguyên liệu tổng hợp mạch mới',
        'Nối các đoạn DNA thành DNA tái tổ hợp',
      ],
      pairs: [
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ],
      hints: ['Có một vai trò thuộc về DNA ligase, không thuộc PCR.'],
      solution:
        'DNA khuôn chứa đoạn cần nhân; mồi là điểm khởi đầu; Taq polymerase tổng hợp mạch mới; nucleotide tự do là nguyên liệu. Nối DNA tái tổ hợp là việc của ligase.',
    },
    {
      type: 'number',
      prompt:
        'Từ $3$ phân tử DNA khuôn, sau $10$ chu kì PCR (mỗi chu kì đều nhân đôi) có bao nhiêu phân tử DNA?',
      answer: 3072,
      hints: ['Sau mỗi chu kì số phân tử gấp đôi.', 'Tính $3 \\cdot 2^{10}$.'],
      solution: '$3 \\cdot 2^{10} = 3 \\cdot 1024 = 3072$ phân tử.',
    },
    {
      type: 'number',
      prompt:
        'Từ $1$ phân tử DNA khuôn, sau $5$ chu kì PCR có bao nhiêu phân tử có đúng chiều dài đoạn cần nhân (cả hai mạch đều giới hạn bởi hai mồi)?',
      answer: 22,
      hints: ['Dùng công thức $2^{n} - 2n$.', 'Thay $n = 5$.'],
      solution: '$2^{5} - 2 \\cdot 5 = 32 - 10 = 22$ phân tử.',
    },
    {
      type: 'number',
      prompt:
        'Từ $1$ phân tử DNA khuôn, cần ít nhất bao nhiêu chu kì PCR để có từ $1\\,000\\,000$ phân tử trở lên?',
      answer: 20,
      unit: 'chu kì',
      hints: [
        'Tìm $n$ nhỏ nhất để $2^{n} \\ge 1\\,000\\,000$.',
        '$2^{10} = 1024$, vậy $2^{20}$ bằng bao nhiêu?',
      ],
      solution:
        '$2^{19} = 524\\,288 < 1\\,000\\,000$ và $2^{20} = 1\\,048\\,576 \\ge 1\\,000\\,000$, nên cần ít nhất $20$ chu kì.',
    },
    {
      type: 'choice',
      prompt: 'PCR dùng Taq polymerase thay cho DNA polymerase của người vì Taq polymerase',
      options: [
        'không bị biến tính ở nhiệt độ biến tính khoảng $95$ °C',
        'tổng hợp mạch mới không cần mồi',
        'tự cắt DNA thành các đoạn cần nhân',
        'hoạt động tốt nhất ở $37$ °C',
      ],
      answer: 0,
      hints: ['Mỗi chu kì đều có bước nâng nhiệt độ lên rất cao.'],
      solution:
        'Taq polymerase của vi khuẩn suối nước nóng chịu được nhiệt, không bị biến tính ở $95$ °C nên hoạt động suốt các chu kì. Nó vẫn cần mồi và hoạt động tốt nhất ở khoảng $72$ °C.',
    },
    {
      type: 'choice',
      prompt: 'Trong điện di trên gel agarose, các đoạn DNA',
      options: [
        'chạy về cực dương, đoạn càng ngắn chạy càng xa',
        'chạy về cực âm, đoạn càng dài chạy càng xa',
        'chạy về cực dương, đoạn càng dài chạy càng xa',
        'đứng yên, chỉ protein di chuyển',
      ],
      answer: 0,
      hints: ['Nhóm phosphate của DNA mang điện tích gì?', 'Gel như một tấm lưới cản đường.'],
      solution:
        'DNA mang điện tích âm nên chạy về cực dương; đoạn ngắn luồn qua lưới gel dễ hơn nên chạy xa hơn.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bước tạo vi khuẩn sản xuất insulin người theo đúng thứ tự.',
      items: [
        'Tách gene insulin và plasmid',
        'Cắt gene và plasmid bằng cùng một enzyme cắt giới hạn',
        'Nối gene vào plasmid bằng DNA ligase',
        'Biến nạp DNA tái tổ hợp vào E. coli',
        'Chọn lọc vi khuẩn mang gene trên môi trường có kháng sinh',
        'Nuôi vi khuẩn, tách chiết và tinh sạch insulin',
      ],
      answer: [0, 1, 2, 3, 4, 5],
      hints: [
        'DNA tái tổ hợp phải được tạo xong trước khi đưa vào tế bào.',
        'Chọn lọc xong mới nuôi ở quy mô lớn.',
      ],
      solution:
        'Tách gene, plasmid → cắt bằng cùng enzyme → nối bằng ligase → biến nạp → chọn lọc bằng kháng sinh → nuôi, thu insulin.',
    },
    {
      type: 'multi',
      prompt:
        'Chọn tất cả các thành phần thường có trên một vector plasmid dùng trong công nghệ gene.',
      options: [
        'Trình tự khởi đầu tái bản',
        'Gene chỉ thị chọn lọc, như gene kháng kháng sinh',
        'Vị trí đa nhân dòng có nhiều điểm cắt của enzyme giới hạn',
        'Toàn bộ hệ gene của tế bào nhận',
        'Taq polymerase',
      ],
      answers: [0, 1, 2],
      hints: ['Vector cần tự nhân lên, giúp nhận biết tế bào mang nó và có chỗ gắn gene.'],
      solution:
        'Plasmid cần trình tự khởi đầu tái bản, gene chỉ thị chọn lọc và vị trí đa nhân dòng. Nó không mang hệ gene của tế bào nhận, và Taq polymerase là enzyme dùng trong PCR.',
    },
    {
      type: 'choice',
      prompt:
        'Vì sao độc tố Bt của cây bông chuyển gene diệt được sâu nhưng không gây hại cho người?',
      options: [
        'Độc tố chỉ được hoạt hoá trong ruột có môi trường kiềm của sâu',
        'Người không ăn lá bông nên không bao giờ tiếp xúc',
        'Độc tố bị phân giải hết khi cây ra hoa',
        'Gene Bt chỉ hoạt động trong tế bào sâu',
      ],
      answer: 0,
      hints: ['So sánh môi trường trong ruột sâu và trong dạ dày người.'],
      solution:
        'Độc tố Bt ở dạng tiền độc tố, chỉ được hoạt hoá trong môi trường kiềm của ruột sâu rồi phá huỷ màng ruột. Đường tiêu hoá của người có môi trường acid, không hoạt hoá được nó.',
    },
  ],
  takeaways: [
    'Công nghệ gene tạo tế bào, sinh vật có gene biến đổi hoặc thêm gene mới; trung tâm là tạo DNA tái tổ hợp bằng enzyme cắt giới hạn, ligase và vector.',
    'PCR gồm các chu kì biến tính ($95$ °C), gắn mồi ($50$–$65$ °C), kéo dài ($72$ °C) với Taq polymerase; sau $n$ chu kì có $a \\cdot 2^{n}$ bản sao.',
    'Điện di: DNA chạy về cực dương, đoạn ngắn chạy xa hơn; so với thang chuẩn để ước lượng kích thước.',
    'Chuyển gene: tách gene và vector → tạo DNA tái tổ hợp → đưa vào tế bào nhận → chọn lọc → cho biểu hiện; ứng dụng rộng trong y học, nông nghiệp, môi trường nhưng cần đánh giá an toàn.',
  ],
};
