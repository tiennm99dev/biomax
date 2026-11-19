/**
 * Thuật ngữ lớp 10 for the /thuat-ngu/ page. Site-owned data: the rules are in
 * src/lib/core/glossary.js, and src/lib/core/glossary.test.js checks them.
 */

const BAI_2 = 'mo-dau/bai-2-phuong-phap-nghien-cuu-va-hoc-tap-mon-sinh-hoc';
const BAI_3 = 'mo-dau/bai-3-cac-cap-do-to-chuc-cua-the-gioi-song';
const BAI_4 = 'thanh-phan-hoa-hoc-cua-te-bao/bai-4-cac-nguyen-to-hoa-hoc-va-nuoc';
const BAI_5 = 'thanh-phan-hoa-hoc-cua-te-bao/bai-5-cac-phan-tu-sinh-hoc';
const BAI_7 = 'cau-truc-te-bao/bai-7-te-bao-nhan-so';
const BAI_8 = 'cau-truc-te-bao/bai-8-te-bao-nhan-thuc';
const BAI_10 = 'trao-doi-chat-qua-mang-va-truyen-tin-te-bao/bai-10-trao-doi-chat-qua-mang-te-bao';
const BAI_12 = 'trao-doi-chat-qua-mang-va-truyen-tin-te-bao/bai-12-truyen-tin-te-bao';
const BAI_13 =
  'chuyen-hoa-nang-luong-trong-te-bao/bai-13-khai-quat-ve-chuyen-hoa-vat-chat-va-nang-luong';
const BAI_14 =
  'chuyen-hoa-nang-luong-trong-te-bao/bai-14-phan-giai-va-tong-hop-cac-chat-trong-te-bao';
const BAI_16 = 'chu-ki-te-bao-va-phan-bao/bai-16-chu-ki-te-bao-va-nguyen-phan';
const BAI_17 = 'chu-ki-te-bao-va-phan-bao/bai-17-giam-phan';
const BAI_19 = 'chu-ki-te-bao-va-phan-bao/bai-19-cong-nghe-te-bao';
const BAI_20 = 'sinh-hoc-vi-sinh-vat/bai-20-su-da-dang-va-phuong-phap-nghien-cuu-vi-sinh-vat';
const BAI_21 = 'sinh-hoc-vi-sinh-vat/bai-21-trao-doi-chat-sinh-truong-va-sinh-san-o-vi-sinh-vat';
const BAI_24 = 'virus/bai-24-khai-quat-ve-virus';
const CD_BAI_1 =
  'cd-cong-nghe-te-bao-va-mot-so-thanh-tuu/cd-bai-1-cong-nghe-te-bao-thuc-vat-va-thanh-tuu';

/** @type {import('#lib/core/glossary.js').GlossaryEntry[]} */
export default [
  {
    id: 'lo-doi-chung',
    term: 'lô đối chứng',
    en: 'control group',
    def: 'Lô giống lô thí nghiệm về mọi điều kiện nhưng không chịu tác động của yếu tố nghiên cứu, nên khác biệt về kết quả giữa hai lô là do yếu tố đó.',
    lesson: BAI_2,
  },
  {
    id: 'cap-do-to-chuc-song',
    term: 'cấp độ tổ chức sống',
    en: 'level of organization',
    def: 'Mức độ tổ chức của vật chất thể hiện đầy đủ các đặc tính của sự sống. Các cấp cơ bản là tế bào, cơ thể, quần thể, quần xã và hệ sinh thái.',
    lesson: BAI_3,
    see: ['dac-tinh-noi-troi'],
  },
  {
    id: 'dac-tinh-noi-troi',
    term: 'đặc tính nổi trội',
    en: 'emergent property',
    def: 'Đặc tính của một cấp độ tổ chức sống hình thành do tương tác giữa các bộ phận cấu thành và không có ở các cấp nhỏ hơn. Ví dụ: khả năng tư duy của não bộ.',
    lesson: BAI_3,
    see: ['cap-do-to-chuc-song'],
  },
  {
    id: 'nguyen-to-vi-luong',
    term: 'nguyên tố vi lượng',
    en: 'trace element',
    def: 'Nguyên tố chiếm dưới 0,01% khối lượng cơ thể, như Fe, Zn, Cu, I. Tuy rất ít nhưng chúng là thành phần của enzyme, vitamin, hormone, nên thiếu chúng có thể gây bệnh.',
    lesson: BAI_4,
  },
  {
    id: 'phan-tu-sinh-hoc',
    term: 'phân tử sinh học',
    en: 'biomolecule',
    def: 'Hợp chất hữu cơ do tế bào tổng hợp và tồn tại trong tế bào sống, gồm bốn nhóm chính: carbohydrate, lipid, protein và nucleic acid.',
    lesson: BAI_5,
    see: ['bien-tinh'],
  },
  {
    id: 'bien-tinh',
    term: 'biến tính',
    en: 'denaturation',
    def: 'Hiện tượng các liên kết yếu giữ cấu trúc không gian của protein bị phá vỡ do nhiệt độ quá cao hoặc pH thay đổi mạnh, làm protein mất chức năng. Ví dụ: lòng trắng trứng đông lại khi luộc.',
    lesson: BAI_5,
  },
  {
    id: 'te-bao-nhan-so',
    term: 'tế bào nhân sơ',
    en: 'prokaryotic cell',
    def: 'Tế bào nhỏ (khoảng 1 - 5 µm), chưa có màng nhân bao bọc vật chất di truyền, chưa có hệ thống nội màng, bào quan có màng và khung xương tế bào. Ví dụ: vi khuẩn.',
    lesson: BAI_7,
    see: ['lop-6/te-bao-nhan-so', 'te-bao-nhan-thuc'],
  },
  {
    id: 'plasmid',
    term: 'plasmid',
    en: 'plasmid',
    def: 'Phân tử DNA vòng, mạch kép, nhỏ, nằm trong tế bào chất của nhiều vi khuẩn, thường mang gene có lợi như gene kháng kháng sinh. Plasmid được dùng làm vector trong kĩ thuật di truyền.',
    lesson: BAI_7,
  },
  {
    id: 'vi-khuan-gram-duong',
    term: 'vi khuẩn Gram dương',
    en: 'Gram-positive bacterium',
    def: 'Vi khuẩn có lớp peptidoglycan dày, không có màng ngoài và bắt màu tím khi nhuộm Gram. Vi khuẩn Gram âm có peptidoglycan mỏng, có màng ngoài và bắt màu đỏ.',
    lesson: BAI_7,
    aka: ['Gr+'],
  },
  {
    id: 'te-bao-nhan-thuc',
    term: 'tế bào nhân thực',
    en: 'eukaryotic cell',
    def: 'Tế bào lớn (khoảng 10 - 100 µm), có nhân hoàn chỉnh với màng nhân, có hệ thống nội màng chia tế bào chất thành các xoang riêng, có nhiều bào quan và khung xương tế bào.',
    lesson: BAI_8,
    see: ['lop-6/te-bao-nhan-thuc', 'he-thong-noi-mang'],
  },
  {
    id: 'he-thong-noi-mang',
    term: 'hệ thống nội màng',
    en: 'endomembrane system',
    def: 'Các cấu trúc màng trong tế bào nhân thực: màng nhân, lưới nội chất, bộ máy Golgi, lysosome, không bào và túi vận chuyển, liên hệ với nhau qua màng hoặc qua các túi.',
    lesson: BAI_8,
  },
  {
    id: 'ti-the',
    term: 'ti thể',
    en: 'mitochondrion',
    def: 'Bào quan có màng kép, màng trong gấp nếp chứa enzyme tổng hợp ATP, là nơi diễn ra hô hấp tế bào. Ti thể có DNA và ribosome riêng nên tự nhân lên được trong tế bào.',
    lesson: BAI_8,
    see: ['ho-hap-te-bao'],
  },
  {
    id: 'cau-truc-kham-dong',
    term: 'cấu trúc khảm động',
    en: 'fluid mosaic model',
    def: 'Cấu trúc của màng sinh chất: lớp kép phospholipid xen các phân tử protein, và các phân tử này có thể di chuyển nên màng linh hoạt. Màng kiểm soát có chọn lọc các chất ra vào tế bào.',
    lesson: BAI_8,
    aka: ['mô hình khảm động'],
  },
  {
    id: 'van-chuyen-thu-dong',
    term: 'vận chuyển thụ động',
    en: 'passive transport',
    def: 'Vận chuyển các chất qua màng theo chiều gradient nồng độ, từ nơi nồng độ cao đến nơi nồng độ thấp, không tốn năng lượng. Ví dụ: khuếch tán, thẩm thấu.',
    lesson: BAI_10,
    see: ['tham-thau', 'van-chuyen-chu-dong'],
  },
  {
    id: 'tham-thau',
    term: 'thẩm thấu',
    en: 'osmosis',
    def: 'Sự khuếch tán của nước qua màng, từ nơi có nồng độ chất tan thấp đến nơi có nồng độ chất tan cao. Phần lớn phân tử nước đi qua kênh protein aquaporin.',
    lesson: BAI_10,
  },
  {
    id: 'van-chuyen-chu-dong',
    term: 'vận chuyển chủ động',
    en: 'active transport',
    def: 'Vận chuyển các chất qua màng ngược chiều gradient nồng độ, từ nơi nồng độ thấp đến nơi nồng độ cao, nhờ bơm protein và tiêu tốn ATP.',
    lesson: BAI_10,
    see: ['van-chuyen-thu-dong'],
  },
  {
    id: 'truyen-tin-te-bao',
    term: 'truyền tin tế bào',
    en: 'cell signaling',
    def: 'Quá trình các tế bào phát và nhận phân tử tín hiệu qua lại, giúp chúng phối hợp hoạt động. Trong tế bào gồm ba giai đoạn: tiếp nhận, truyền tin nội bào, đáp ứng.',
    lesson: BAI_12,
    see: ['thu-the'],
  },
  {
    id: 'thu-the',
    term: 'thụ thể',
    en: 'receptor',
    def: 'Phân tử mà tín hiệu gắn vào một cách đặc hiệu; tế bào chỉ nhận được tín hiệu khi có thụ thể phù hợp. Thụ thể có thể nằm trên màng hoặc trong tế bào.',
    lesson: BAI_12,
  },
  {
    id: 'atp',
    term: 'ATP',
    en: 'adenosine triphosphate',
    def: 'Phân tử gồm adenine, ribose và ba gốc phosphate, có hai liên kết cao năng dễ bị phá vỡ để giải phóng năng lượng. ATP là đồng tiền năng lượng của tế bào.',
    lesson: BAI_13,
  },
  {
    id: 'enzyme',
    term: 'enzyme',
    en: 'enzyme',
    def: 'Chất xúc tác sinh học do tế bào sống tổng hợp, làm giảm năng lượng hoạt hoá nên phản ứng xảy ra nhanh ở điều kiện cơ thể, và không bị biến đổi sau phản ứng.',
    lesson: BAI_13,
    see: ['bien-tinh'],
  },
  {
    id: 'chuyen-hoa-vat-chat',
    term: 'chuyển hoá vật chất',
    en: 'metabolism',
    def: 'Tập hợp các phản ứng hoá học biến đổi chất này thành chất khác trong tế bào, gồm đồng hoá và dị hoá, luôn đi kèm chuyển hoá năng lượng.',
    lesson: BAI_13,
  },
  {
    id: 'ho-hap-te-bao',
    term: 'hô hấp tế bào',
    en: 'cellular respiration',
    def: 'Quá trình phân giải hoàn toàn glucose thành CO₂ và H₂O khi có O₂, qua đường phân, chu trình Krebs và chuỗi truyền electron, tích luỹ khoảng 36 đến 38 ATP từ một phân tử glucose.',
    lesson: BAI_14,
    see: ['len-men', 'ti-the'],
  },
  {
    id: 'len-men',
    term: 'lên men',
    en: 'fermentation',
    def: 'Quá trình phân giải không hoàn toàn glucose khi không có O₂, chỉ tích luỹ 2 ATP. Lên men rượu tạo ethanol và CO₂, lên men lactic tạo lactate.',
    lesson: BAI_14,
    see: ['ho-hap-te-bao'],
  },
  {
    id: 'quang-hop',
    term: 'quang hợp',
    en: 'photosynthesis',
    def: 'Quá trình cây xanh, tảo và vi khuẩn lam dùng năng lượng ánh sáng để tổng hợp carbohydrate từ CO₂ và H₂O, giải phóng O₂. Quang hợp gồm pha sáng và pha tối (chu trình Calvin).',
    lesson: BAI_14,
  },
  {
    id: 'chu-ki-te-bao',
    term: 'chu kì tế bào',
    en: 'cell cycle',
    def: 'Khoảng thời gian từ khi một tế bào được sinh ra đến khi nó phân chia thành hai tế bào con. Ở sinh vật nhân thực gồm kì trung gian (G₁, S, G₂) và nguyên phân (pha M).',
    lesson: BAI_16,
    see: ['nguyen-phan'],
  },
  {
    id: 'nguyen-phan',
    term: 'nguyên phân',
    en: 'mitosis',
    def: 'Hình thức phân bào ở tế bào sinh dưỡng và tế bào sinh dục sơ khai, gồm bốn kì và phân chia tế bào chất. Từ một tế bào mẹ 2n tạo ra hai tế bào con 2n giống hệt tế bào mẹ.',
    lesson: BAI_16,
    see: ['giam-phan'],
  },
  {
    id: 'giam-phan',
    term: 'giảm phân',
    en: 'meiosis',
    def: 'Hình thức phân bào ở tế bào sinh dục chín, gồm hai lần phân bào liên tiếp nhưng DNA chỉ nhân đôi một lần. Từ một tế bào 2n tạo ra bốn tế bào con có bộ NST n.',
    lesson: BAI_17,
    see: ['nguyen-phan', 'trao-doi-cheo'],
  },
  {
    id: 'trao-doi-cheo',
    term: 'trao đổi chéo',
    en: 'crossing over',
    def: 'Hiện tượng hai nhiễm sắc tử không chị em của cặp NST tương đồng trao đổi đoạn tương ứng cho nhau ở kì đầu I của giảm phân, tạo ra NST mang tổ hợp gene mới.',
    lesson: BAI_17,
  },
  {
    id: 'cong-nghe-te-bao',
    term: 'công nghệ tế bào',
    en: 'cell technology',
    def: 'Kĩ thuật nuôi cấy tế bào và mô trong môi trường dinh dưỡng nhân tạo để tạo ra mô, cơ quan, cơ thể hoàn chỉnh hoặc rất nhiều tế bào.',
    lesson: BAI_19,
    see: ['tinh-toan-nang', 'te-bao-goc'],
  },
  {
    id: 'tinh-toan-nang',
    term: 'tính toàn năng',
    en: 'totipotency',
    def: 'Khả năng một tế bào phân chia và biệt hoá thành mọi loại tế bào, tạo nên một cơ thể hoàn chỉnh. Hợp tử và nhiều tế bào thực vật đã biệt hoá có tính toàn năng.',
    lesson: BAI_19,
  },
  {
    id: 'te-bao-goc',
    term: 'tế bào gốc',
    en: 'stem cell',
    def: 'Tế bào có thể phân chia và biệt hoá thành các loại tế bào khác nhau. Tế bào gốc phôi biệt hoá được thành mọi loại tế bào, tế bào gốc trưởng thành chỉ thành một số loại.',
    lesson: BAI_19,
  },
  {
    id: 'vi-sinh-vat',
    term: 'vi sinh vật',
    en: 'microorganism',
    def: 'Những sinh vật có kích thước rất nhỏ, thường chỉ quan sát được bằng kính hiển vi, gồm nhóm nhân sơ (vi khuẩn, Archaea) và nhóm nhân thực (vi nấm, vi tảo, động vật nguyên sinh).',
    lesson: BAI_20,
    see: ['lop-6/vi-khuan'],
  },
  {
    id: 'khuan-lac',
    term: 'khuẩn lạc',
    en: 'colony',
    def: 'Tập hợp các tế bào sinh ra từ một tế bào ban đầu trên môi trường thạch, nhìn thấy được bằng mắt thường. Hình thái khuẩn lạc giúp phân biệt và tách riêng từng loại vi sinh vật.',
    lesson: BAI_20,
  },
  {
    id: 'quang-tu-duong',
    term: 'quang tự dưỡng',
    en: 'photoautotrophy',
    def: 'Kiểu dinh dưỡng lấy năng lượng từ ánh sáng và carbon từ chất vô cơ như CO₂, như ở vi khuẩn lam, tảo. Ba kiểu còn lại là hoá tự dưỡng, quang dị dưỡng và hoá dị dưỡng.',
    lesson: BAI_20,
  },
  {
    id: 'thoi-gian-the-he',
    term: 'thời gian thế hệ',
    en: 'generation time',
    def: 'Thời gian từ khi một tế bào vi sinh vật sinh ra đến khi nó phân chia, cũng là thời gian để số tế bào trong quần thể tăng gấp đôi. Kí hiệu là g.',
    lesson: BAI_21,
    see: ['pha-luy-thua'],
  },
  {
    id: 'pha-luy-thua',
    term: 'pha luỹ thừa',
    en: 'exponential phase',
    def: 'Pha thứ hai của nuôi cấy không liên tục, sau pha tiềm phát: vi khuẩn phân chia mạnh, số tế bào tăng theo luỹ thừa và đạt cực đại ở cuối pha.',
    lesson: BAI_21,
    aka: ['pha log'],
  },
  {
    id: 'khang-sinh',
    term: 'kháng sinh',
    en: 'antibiotic',
    def: 'Chất ức chế hoặc tiêu diệt vi khuẩn một cách có chọn lọc, lấy từ vi sinh vật hoặc tổng hợp nhân tạo. Kháng sinh không có tác dụng với virus.',
    lesson: BAI_21,
  },
  {
    id: 'virus',
    term: 'virus',
    en: 'virus',
    def: 'Thực thể không có cấu tạo tế bào, kích thước khoảng 20 đến 300 nm, chỉ nhân lên được trong tế bào sống. Virus gồm lõi nucleic acid và vỏ capsid bằng protein, một số có thêm vỏ ngoài.',
    lesson: BAI_24,
    see: ['lop-6/virus', 'chu-ki-sinh-tan'],
  },
  {
    id: 'chu-ki-sinh-tan',
    term: 'chu kì sinh tan',
    en: 'lytic cycle',
    def: 'Kiểu nhân lên của virus độc: vật chất di truyền của virus nhân lên độc lập với tế bào chủ, tạo nhiều virus mới rồi làm tan tế bào chủ.',
    lesson: BAI_24,
    see: ['chu-ki-tiem-tan'],
  },
  {
    id: 'chu-ki-tiem-tan',
    term: 'chu kì tiềm tan',
    en: 'lysogenic cycle',
    def: 'Kiểu nhân lên của virus ôn hoà: gene virus tích hợp vào hệ gene tế bào chủ và nhân đôi cùng tế bào, chưa tạo virus mới, tế bào không bị tan. Chu kì này có thể chuyển thành chu kì sinh tan.',
    lesson: BAI_24,
    see: ['chu-ki-sinh-tan'],
  },
  {
    id: 'vi-nhan-giong',
    term: 'vi nhân giống',
    en: 'micropropagation',
    def: 'Nhân giống vô tính cây trồng trong ống nghiệm từ những mẩu mô rất nhỏ, trong điều kiện vô trùng, tạo ra rất nhiều cây con có kiểu gene giống nhau.',
    lesson: CD_BAI_1,
    see: ['tinh-toan-nang'],
  },
];
