/** @type {import('#lib/core/content-schema.js').LessonContent} */
export default {
  summary:
    'Bốn nhóm phân tử sinh học của tế bào: carbohydrate, lipid, protein với bốn bậc cấu trúc và nucleic acid, cùng cấu tạo và chức năng của mỗi nhóm.',
  intro:
    'Bữa cơm hằng ngày có cơm, thịt, rau, dầu ăn; những thức ăn này đều chứa các phân tử sinh học do sinh vật khác tạo ra. Ăn quá nhiều hoặc quá ít nhóm chất nào cũng có hại cho sức khoẻ: thừa chất có thể gây béo phì, thiếu chất có thể gây suy dinh dưỡng. Để hiểu vì sao, em cần biết mỗi nhóm phân tử được tạo nên như thế nào và đảm nhiệm vai trò gì trong tế bào.',
  objectives: [
    'Nêu được khái niệm phân tử sinh học và nguyên tắc đa phân.',
    'Trình bày được thành phần cấu tạo và chức năng của carbohydrate, lipid.',
    'Phân tích được mối quan hệ giữa cấu trúc và chức năng của protein; phân biệt bốn bậc cấu trúc.',
    'So sánh được cấu trúc và chức năng của DNA với RNA.',
    'Vận dụng kiến thức về phân tử sinh học để giải thích một số hiện tượng và xây dựng chế độ ăn hợp lí.',
  ],
  sections: [
    {
      heading: 'Khái quát về phân tử sinh học',
      blocks: [
        {
          type: 'callout',
          tone: 'definition',
          title: 'Phân tử sinh học',
          text: 'Phân tử sinh học là các hợp chất hữu cơ do tế bào tổng hợp và tồn tại trong tế bào sống. Bốn nhóm chính là carbohydrate, lipid, protein và nucleic acid.',
        },
        {
          type: 'p',
          text: 'Thành phần chủ yếu của phân tử sinh học là carbon và hydrogen, tạo nên bộ khung hydrocarbon rất đa dạng. Gắn vào bộ khung ấy là các nhóm chức khác nhau, nhờ đó phân tử có những tính chất riêng.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Nguyên tắc đa phân',
          text: 'Carbohydrate phức tạp, protein và nucleic acid là các polymer: chúng gồm nhiều đơn phân (monomer) giống hoặc tương tự nhau nối lại. Khi hai đơn phân nối với nhau thường tách ra một phân tử nước; ngược lại, phản ứng thuỷ phân dùng nước để cắt polymer thành đơn phân. Lipid không được cấu tạo theo nguyên tắc đa phân.',
        },
        {
          type: 'table',
          caption: 'Đơn phân và liên kết của các polymer sinh học',
          head: ['Polymer', 'Đơn phân', 'Liên kết nối đơn phân'],
          rows: [
            ['Đường đa', 'Đường đơn', 'Glycosidic'],
            ['Protein', 'Amino acid', 'Peptide'],
            ['Nucleic acid', 'Nucleotide', 'Phosphodiester'],
          ],
        },
      ],
    },
    {
      heading: 'Carbohydrate',
      blocks: [
        {
          type: 'p',
          text: 'Carbohydrate được cấu tạo từ C, H, O, thường theo tỉ lệ $1 : 2 : 1$, với công thức chung $\\mathrm{(CH_2O)_n}$. Carbohydrate gồm ba loại: đường đơn, đường đôi và đường đa.',
        },
        {
          type: 'table',
          caption: 'Các loại carbohydrate',
          head: ['Loại', 'Ví dụ', 'Đặc điểm, vai trò'],
          rows: [
            [
              'Đường đơn',
              'Glucose, fructose, galactose (6 carbon); ribose, deoxyribose (5 carbon)',
              'Nguồn năng lượng trực tiếp; nguyên liệu tổng hợp các phân tử khác. Ribose và deoxyribose là thành phần của RNA và DNA',
            ],
            [
              'Đường đôi',
              'Sucrose (glucose + fructose), lactose (glucose + galactose), maltose (glucose + glucose)',
              'Hai đường đơn nối bằng liên kết glycosidic. Sucrose là dạng đường vận chuyển trong cây; lactose là đường trong sữa',
            ],
            [
              'Đường đa',
              'Tinh bột, glycogen, cellulose, chitin',
              'Hàng trăm đến hàng nghìn đường đơn nối lại; dùng để dự trữ năng lượng hoặc làm vật liệu cấu trúc',
            ],
          ],
        },
        {
          type: 'list',
          items: [
            'Tinh bột: dự trữ năng lượng ở thực vật, có nhiều trong hạt, củ, quả.',
            'Glycogen: dự trữ năng lượng ở động vật (gan, cơ) và nấm; phân nhánh nhiều nên dễ cắt nhanh thành glucose khi cần.',
            'Cellulose: thành phần của thành tế bào thực vật; các sợi cellulose bền chắc. Người không tiêu hoá được cellulose, nhưng chất xơ này giúp ruột hoạt động tốt.',
            'Chitin: thành phần của thành tế bào nấm và bộ xương ngoài của côn trùng, tôm, cua.',
          ],
        },
        {
          type: 'p',
          text: 'Ở phần khám phá, em hãy nối thêm các phân tử glucose và đổi giữa ba dạng đường đa: cùng một đơn phân, nhưng cách nối khác nhau tạo ra các chất có vai trò khác nhau.',
        },
      ],
    },
    {
      heading: 'Lipid',
      blocks: [
        {
          type: 'p',
          text: 'Lipid là nhóm chất rất đa dạng về cấu trúc nhưng có chung đặc tính kị nước: không tan trong nước, tan trong các dung môi hữu cơ như cồn, ether. Lipid không được cấu tạo theo nguyên tắc đa phân.',
        },
        {
          type: 'table',
          caption: 'Một số loại lipid',
          head: ['Loại', 'Cấu tạo', 'Vai trò'],
          rows: [
            [
              'Mỡ và dầu',
              'Một glycerol liên kết với ba acid béo. Mỡ động vật chứa nhiều acid béo no, thường ở thể rắn; dầu thực vật và dầu cá chứa nhiều acid béo không no, thường ở thể lỏng',
              'Dự trữ năng lượng: $1$ g mỡ cho năng lượng gấp hơn hai lần $1$ g đường; cách nhiệt, bảo vệ cơ thể',
            ],
            [
              'Phospholipid',
              'Một glycerol liên kết với hai acid béo và một nhóm phosphate; đầu phosphate ưa nước, hai đuôi acid béo kị nước',
              'Cấu tạo nên các loại màng của tế bào',
            ],
            [
              'Steroid',
              'Có khung gồm các vòng carbon',
              'Cholesterol là thành phần của màng tế bào động vật; testosterone, estrogen là hormone sinh dục',
            ],
            [
              'Sắc tố, vitamin',
              'Carotenoid; các vitamin A, D, E, K',
              'Carotenoid là sắc tố ở thực vật; các vitamin này tan trong dầu mỡ và tham gia nhiều hoạt động sống',
            ],
          ],
        },
        {
          type: 'callout',
          tone: 'warning',
          title: 'Dùng dầu mỡ hợp lí',
          text: 'Chế độ ăn thừa mỡ động vật làm tăng nguy cơ béo phì và bệnh tim mạch; nhưng bỏ hẳn lipid lại khiến cơ thể khó hấp thu các vitamin tan trong dầu và thiếu nguyên liệu tạo màng tế bào.',
        },
      ],
    },
    {
      heading: 'Protein',
      blocks: [
        {
          type: 'p',
          text: 'Protein là polymer có đơn phân là amino acid. Mỗi amino acid gồm một nguyên tử carbon gắn với nhóm amino $\\mathrm{(-NH_2)}$, nhóm carboxyl $\\mathrm{(-COOH)}$, một nguyên tử hydrogen và một chuỗi bên R. Có $20$ loại amino acid tạo nên protein, khác nhau ở chuỗi bên R. Các amino acid nối với nhau bằng liên kết peptide thành chuỗi polypeptide.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Vì sao protein đa dạng?',
          text: 'Protein khác nhau ở số lượng, thành phần và trình tự sắp xếp các amino acid. Chỉ cần đổi trật tự vài amino acid đã có thể tạo nên một chuỗi polypeptide khác.',
        },
        {
          type: 'table',
          caption: 'Các bậc cấu trúc của protein',
          head: ['Bậc', 'Đặc điểm', 'Giữ bởi'],
          rows: [
            ['Bậc 1', 'Trình tự amino acid trong chuỗi polypeptide', 'Liên kết peptide'],
            ['Bậc 2', 'Chuỗi cuộn xoắn (xoắn α) hoặc gấp nếp (gấp β)', 'Liên kết hydrogen'],
            [
              'Bậc 3',
              'Chuỗi xoắn, gấp tiếp thành cấu trúc không gian ba chiều',
              'Liên kết yếu, liên kết disulfide',
            ],
            [
              'Bậc 4',
              'Hai hay nhiều chuỗi polypeptide liên kết với nhau',
              'Liên kết yếu, liên kết disulfide',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Chọn từng bậc để xem hình dạng protein, rồi tăng nhiệt độ hoặc đổi pH để quan sát điều gì xảy ra với cấu trúc của nó.',
        },
        { type: 'widget', name: 'bac-cau-truc' },
        {
          type: 'callout',
          tone: 'definition',
          title: 'Biến tính protein',
          text: 'Khi nhiệt độ quá cao hoặc độ pH thay đổi mạnh, các liên kết yếu giữ cấu trúc không gian bị phá vỡ, protein mất chức năng. Hiện tượng này gọi là biến tính. Lòng trắng trứng đông lại khi luộc là một ví dụ quen thuộc.',
        },
        {
          type: 'list',
          items: [
            'Cấu trúc: collagen trong da, keratin trong tóc.',
            'Xúc tác: các enzyme xúc tác phản ứng sinh hoá.',
            'Bảo vệ: kháng thể chống tác nhân gây bệnh.',
            'Vận chuyển: hemoglobin vận chuyển oxygen.',
            'Vận động, tiếp nhận thông tin: protein co cơ; các thụ thể trên màng tế bào.',
            'Điều hoà: nhiều hormone là protein, như insulin.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          text: 'Một số amino acid cơ thể người không tự tổng hợp được (amino acid thiết yếu) mà phải lấy từ thức ăn. Vì vậy, nên ăn protein từ nhiều nguồn khác nhau.',
        },
      ],
    },
    {
      heading: 'Nucleic acid',
      blocks: [
        {
          type: 'p',
          text: 'Nucleic acid (acid nhân) gồm DNA và RNA, là polymer có đơn phân là nucleotide. Mỗi nucleotide gồm ba thành phần: một nhóm phosphate, một đường 5 carbon và một base chứa nitrogen. Các nucleotide nối với nhau bằng liên kết phosphodiester thành chuỗi polynucleotide.',
        },
        {
          type: 'callout',
          tone: 'theorem',
          title: 'Nguyên tắc bổ sung trong DNA',
          text: 'DNA gồm hai chuỗi polynucleotide xoắn kép, song song và ngược chiều. Base của hai chuỗi bắt cặp bằng liên kết hydrogen: A với T bằng $2$ liên kết, G với C bằng $3$ liên kết. Vì vậy, trong một phân tử DNA, $A = T$ và $G = C$.',
        },
        {
          type: 'table',
          caption: 'So sánh DNA và RNA',
          head: ['Đặc điểm', 'DNA', 'RNA'],
          rows: [
            ['Đường', 'Deoxyribose', 'Ribose'],
            ['Base', 'A, T, G, C', 'A, U, G, C'],
            ['Số chuỗi', 'Hai chuỗi xoắn kép', 'Một chuỗi'],
            [
              'Chức năng',
              'Mang, bảo quản và truyền đạt thông tin di truyền',
              'mRNA mang thông tin tới nơi tổng hợp protein; tRNA vận chuyển amino acid; rRNA cấu tạo nên ribosome',
            ],
          ],
        },
        {
          type: 'p',
          text: 'Số lượng, thành phần và trình tự nucleotide làm DNA vừa đa dạng vừa đặc trưng cho từng loài. Trình tự nucleotide của gene quy định trình tự amino acid của protein, nên thông tin trong DNA quyết định đặc điểm của sinh vật.',
        },
      ],
    },
  ],
  explore: {
    title: 'Lắp đơn phân thành polymer',
    instruction:
      'Với glucose: đổi dạng đường đa, nối thêm đơn phân, rồi chọn dạng đúng cho từng tình huống. Với amino acid: nối thành chuỗi, đổi chỗ hai amino acid và so sánh với chuỗi mẫu. Chú ý số liên kết và số phân tử nước tách ra.',
  },
  examples: [
    {
      problem:
        'Hai phân tử glucose ($\\mathrm{C_6H_{12}O_6}$, khối lượng phân tử $180$ amu) nối với nhau tạo thành maltose. Tính khối lượng phân tử của maltose. Biết nước có khối lượng phân tử $18$ amu.',
      steps: [
        'Hai đơn phân nối bằng một liên kết glycosidic, tách ra một phân tử nước.',
        'Tổng khối lượng hai glucose: $2 \\cdot 180 = 360$ amu.',
        'Trừ đi nước tách ra: $360 - 18 = 342$ amu.',
      ],
      answer: 'Maltose có khối lượng phân tử $342$ amu (công thức $\\mathrm{C_{12}H_{22}O_{11}}$).',
    },
    {
      problem:
        'Từ $20$ loại amino acid có thể tạo ra bao nhiêu chuỗi polypeptide khác nhau dài $3$ amino acid? Chuỗi này có bao nhiêu liên kết peptide?',
      steps: [
        'Mỗi vị trí trong chuỗi có thể là một trong $20$ loại amino acid.',
        'Số chuỗi khác nhau: $20 \\cdot 20 \\cdot 20 = 20^3 = 8\\,000$.',
        'Chuỗi có $n$ amino acid có $n - 1$ liên kết peptide: $3 - 1 = 2$.',
      ],
      answer:
        'Có $8\\,000$ chuỗi; mỗi chuỗi có $2$ liên kết peptide. Vì thế, chỉ với $20$ loại đơn phân, protein đã rất đa dạng.',
    },
    {
      problem:
        'Một phân tử DNA có $A = 20\\%$ tổng số nucleotide. Tính tỉ lệ phần trăm các loại nucleotide còn lại.',
      steps: [
        'Theo nguyên tắc bổ sung, $T = A = 20\\%$.',
        'Tổng bốn loại bằng $100\\%$, nên $G + C = 100\\% - 20\\% - 20\\% = 60\\%$.',
        'Vì $G = C$, nên $G = C = 60\\% : 2 = 30\\%$.',
      ],
      answer: '$T = 20\\%$, $G = C = 30\\%$.',
    },
    {
      problem: 'Vì sao lòng trắng trứng trong suốt khi tươi lại đông thành màu trắng khi luộc?',
      steps: [
        'Lòng trắng trứng chứa nhiều protein có cấu trúc không gian nhất định, tan được trong nước.',
        'Nhiệt độ cao phá vỡ các liên kết yếu giữ cấu trúc không gian, làm protein biến tính.',
        'Các chuỗi polypeptide bung ra, liên kết với nhau và kết tụ lại, nên lòng trắng đông đặc và đục màu.',
      ],
      answer: 'Protein trong lòng trắng trứng bị biến tính do nhiệt và kết tụ lại.',
    },
  ],
  practice: [
    {
      type: 'choice',
      prompt: 'Nhóm phân tử sinh học nào không được cấu tạo theo nguyên tắc đa phân?',
      options: ['Protein', 'Nucleic acid', 'Lipid', 'Đường đa'],
      answer: 2,
      hints: ['Hãy nhớ đơn phân của từng nhóm; nhóm nào không có đơn phân chung?'],
      solution:
        'Lipid gồm các chất rất khác nhau, không phải là chuỗi các đơn phân lặp lại. Protein có đơn phân là amino acid, nucleic acid có đơn phân là nucleotide, đường đa có đơn phân là đường đơn.',
    },
    {
      type: 'match',
      prompt: 'Nối mỗi đường đa với vai trò hoặc vị trí của nó.',
      left: ['Tinh bột', 'Glycogen', 'Cellulose', 'Chitin'],
      right: [
        'Thành tế bào nấm, bộ xương ngoài của côn trùng',
        'Dự trữ năng lượng ở gan, cơ động vật',
        'Dự trữ năng lượng trong hạt, củ',
        'Thành tế bào thực vật',
      ],
      pairs: [
        [0, 2],
        [1, 1],
        [2, 3],
        [3, 0],
      ],
      hints: [
        'Hai chất dùng để dự trữ, hai chất làm vật liệu cấu trúc.',
        'Chitin giúp vỏ tôm, cua cứng chắc.',
      ],
      solution:
        'Tinh bột dự trữ ở thực vật; glycogen dự trữ ở động vật và nấm; cellulose tạo nên thành tế bào thực vật; chitin có trong thành tế bào nấm và bộ xương ngoài của côn trùng.',
    },
    {
      type: 'number',
      prompt:
        'Một chuỗi đường đa không phân nhánh gồm $100$ phân tử glucose. Tính khối lượng phân tử của chuỗi, biết glucose $180$ amu và nước $18$ amu.',
      answer: 16218,
      tolerance: 0.01,
      unit: 'amu',
      hints: [
        'Có $n$ đơn phân thì có $n - 1$ liên kết, mỗi liên kết tách ra một phân tử nước.',
        'Tính $100 \\cdot 180$ rồi trừ khối lượng nước đã tách.',
      ],
      solution: '$100 \\cdot 180 - 99 \\cdot 18 = 18\\,000 - 1\\,782 = 16\\,218$ amu.',
    },
    {
      type: 'multi',
      prompt: 'Chọn tất cả các chất thuộc nhóm lipid.',
      options: [
        'Dầu thực vật',
        'Cellulose',
        'Phospholipid',
        'Hemoglobin',
        'Cholesterol',
        'Testosterone',
      ],
      answers: [0, 2, 4, 5],
      hints: ['Lipid có đặc tính chung là kị nước.', 'Hormone sinh dục thuộc nhóm steroid.'],
      solution:
        'Dầu thực vật, phospholipid, cholesterol và testosterone là lipid. Cellulose là đường đa, hemoglobin là protein.',
    },
    {
      type: 'choice',
      prompt:
        'Vì sao dầu thực vật thường ở thể lỏng còn mỡ động vật thường ở thể rắn ở nhiệt độ phòng?',
      options: [
        'Dầu chứa nhiều glycerol hơn mỡ',
        'Dầu có ít carbon hơn mỡ',
        'Dầu tan trong nước còn mỡ thì không',
        'Dầu chứa nhiều acid béo không no, còn mỡ chứa nhiều acid béo no',
      ],
      answer: 3,
      hints: ['Hãy nghĩ đến loại acid béo trong mỗi chất.'],
      solution:
        'Acid béo không no có các liên kết đôi làm chuỗi gấp khúc, khó xếp sít nhau nên dầu ở thể lỏng; acid béo no xếp sít nhau nên mỡ ở thể rắn. Cả dầu và mỡ đều không tan trong nước.',
    },
    {
      type: 'number',
      prompt: 'Một chuỗi polypeptide gồm $150$ amino acid có bao nhiêu liên kết peptide?',
      answer: 149,
      hints: ['Hai amino acid cần một liên kết; thử với một chuỗi ngắn để thấy quy luật.'],
      solution: 'Chuỗi có $n$ amino acid có $n - 1$ liên kết peptide: $150 - 1 = 149$.',
    },
    {
      type: 'order',
      prompt: 'Sắp xếp các bậc cấu trúc của protein từ đơn giản đến phức tạp.',
      items: [
        'Chuỗi cuộn xoắn hoặc gấp nếp',
        'Nhiều chuỗi polypeptide liên kết với nhau',
        'Trình tự amino acid trong chuỗi',
        'Chuỗi gấp thành khối không gian ba chiều',
      ],
      answer: [2, 0, 3, 1],
      hints: ['Mọi cấu trúc đều bắt đầu từ trình tự amino acid.'],
      solution:
        'Bậc 1: trình tự amino acid. Bậc 2: cuộn xoắn hoặc gấp nếp. Bậc 3: khối không gian ba chiều. Bậc 4: nhiều chuỗi liên kết với nhau.',
    },
    {
      type: 'choice',
      prompt: 'Khi bị sốt cao kéo dài, enzyme trong cơ thể có thể hoạt động kém đi chủ yếu vì',
      options: [
        'nhiệt độ cao làm phá vỡ cấu trúc không gian của enzyme',
        'nhiệt độ cao cắt đứt liên kết peptide của enzyme',
        'enzyme bị chuyển thành lipid',
        'cơ thể không còn amino acid',
      ],
      answer: 0,
      hints: ['Enzyme là protein. Chức năng của protein phụ thuộc vào hình dạng của nó.'],
      solution:
        'Nhiệt độ cao phá vỡ các liên kết yếu giữ cấu trúc không gian, làm protein biến tính và mất dần chức năng. Liên kết peptide bền hơn, không bị cắt ở nhiệt độ này.',
    },
    {
      type: 'number',
      prompt:
        'Một phân tử DNA có tổng cộng $3\\,000$ nucleotide, trong đó số nucleotide loại A là $600$. Tính tổng số liên kết hydrogen của phân tử này.',
      answer: 3900,
      hints: [
        'Vì $A = T$ và $G = C$ nên $A + G$ bằng một nửa tổng số nucleotide.',
        'Mỗi cặp A – T có $2$ liên kết hydrogen, mỗi cặp G – C có $3$.',
      ],
      solution:
        '$A + G = 3\\,000 : 2 = 1\\,500$, nên $G = 1\\,500 - 600 = 900$. Số liên kết hydrogen: $2 \\cdot 600 + 3 \\cdot 900 = 1\\,200 + 2\\,700 = 3\\,900$.',
    },
    {
      type: 'text',
      prompt:
        'Một đoạn mạch DNA có trình tự base là ATGCCA. Viết trình tự base tương ứng trên mạch bổ sung, theo đúng thứ tự từ trái sang phải.',
      accept: ['TACGGT'],
      hints: ['A bắt cặp với T, G bắt cặp với C.'],
      solution: 'A → T, T → A, G → C, C → G, C → G, A → T: mạch bổ sung là TACGGT.',
    },
    {
      type: 'multi',
      prompt: 'Chọn các đặc điểm chỉ có ở RNA mà không có ở DNA.',
      options: [
        'Có đường ribose',
        'Có base T',
        'Có base U',
        'Có nhóm phosphate',
        'Có các loại mRNA, tRNA, rRNA',
      ],
      answers: [0, 2, 4],
      hints: ['DNA có đường deoxyribose và base T.', 'Cả hai đều có nhóm phosphate.'],
      solution:
        'RNA có đường ribose, base U và gồm các loại mRNA, tRNA, rRNA. Base T là của DNA; nhóm phosphate có ở cả DNA và RNA.',
    },
    {
      type: 'choice',
      prompt: 'Vì sao cắt bỏ hoàn toàn lipid khỏi khẩu phần ăn để giảm cân là không nên?',
      options: [
        'Vì lipid là nguồn cung cấp amino acid duy nhất',
        'Vì cơ thể cần lipid để tạo màng tế bào và hấp thu các vitamin tan trong dầu',
        'Vì lipid là đơn phân của protein',
        'Vì lipid chứa nhiều nucleotide',
      ],
      answer: 1,
      hints: ['Nhớ lại vai trò của phospholipid và các vitamin A, D, E, K.'],
      solution:
        'Lipid là nguyên liệu tạo màng tế bào, một số hormone, và giúp hấp thu vitamin A, D, E, K. Điều cần làm là dùng dầu mỡ ở mức hợp lí, không bỏ hẳn.',
    },
  ],
  takeaways: [
    'Phân tử sinh học là hợp chất hữu cơ do tế bào tổng hợp: carbohydrate, lipid, protein, nucleic acid. Đường đa, protein, nucleic acid là polymer; lipid thì không.',
    'Carbohydrate có công thức chung $\\mathrm{(CH_2O)_n}$, gồm đường đơn, đường đôi, đường đa; dùng làm năng lượng, dự trữ và vật liệu cấu trúc.',
    'Lipid kị nước, gồm mỡ, dầu, phospholipid, steroid, sắc tố và một số vitamin; dùng để dự trữ năng lượng, tạo màng tế bào, điều hoà.',
    'Protein có đơn phân là $20$ loại amino acid, có bốn bậc cấu trúc; khi bị biến tính, protein mất chức năng.',
    'DNA có hai chuỗi với $A = T$, $G = C$, mang thông tin di truyền; RNA có một chuỗi, gồm mRNA, tRNA, rRNA, tham gia biểu hiện thông tin di truyền.',
  ],
};
