// Nhập môn 8 · Chiếu, chiếu hết, nhập thành, hòa
export default {
  no: 'NM8', label: 'Nhập môn 8', part: 0, icon: '🏆',
  title: 'Chiếu, chiếu hết & nhập thành',
  sub: 'Thoát chiếu 3 cách · thắng – thua – hòa · nhập thành',
  nextLesson: 'co-vua-khai-cuoc.html',
  sections: [
    {
      slug: 'chieu', title: '⚠️ Chiếu là gì?', short: 'Chiếu',
      blocks: [
        { type: 'text', html: `
          <p><b>Chiếu</b> là khi Vua bị một quân đối thủ tấn công. Bị chiếu thì <b>bắt buộc phải thoát</b> ngay, bằng 1 trong 3 cách:</p>
          <ul class="tips">
            <li>🏃 <b>Chạy</b>: đưa Vua sang ô an toàn.</li>
            <li>🧱 <b>Chặn</b>: đặt một quân vào giữa.</li>
            <li>🍽️ <b>Ăn</b>: ăn luôn quân đang chiếu.</li>
          </ul>` },
        {
          type: 'puzzle', tag: '🏃 Cách 1: Chạy', fen: '4r2k/8/8/8/8/8/8/4K3 w - - 0 1',
          html: 'Xe e8 chiếu Vua e1. Cho Vua <b>chạy</b> sang ô an toàn.',
          accept: ['Kd1', 'Kd2', 'Kf1', 'Kf2'],
          hint: 'Vua phải rời khỏi cột e. Ô e2 vẫn bị Xe nhìn!',
          success: 'Vua đã chạy khỏi cột e – an toàn!',
        },
        {
          type: 'puzzle', tag: '🧱 Cách 2: Chặn', fen: '4r2k/8/8/8/8/8/8/2B1K3 w - - 0 1',
          html: 'Lần này hãy <b>chặn</b> đường chiếu bằng Tượng c1.',
          accept: ['Be3'],
          hint: 'Tượng c1 đi chéo tới một ô trên cột e.',
          wrong: 'Bài này con hãy dùng Tượng để chặn nhé.',
          success: '<b>{{Be3}}</b> – Tượng chặn đường chiếu của Xe!',
        },
        {
          type: 'puzzle', tag: '🍽️ Cách 3: Ăn', fen: 'R3r2k/8/8/8/8/8/8/4K3 w - - 0 1',
          html: 'Lần này hãy <b>ăn</b> luôn quân đang chiếu!',
          accept: ['Rxe8+'],
          hint: 'Xe a8 đi ngang trên hàng 8.',
          wrong: 'Bài này con hãy ăn quân đang chiếu nhé.',
          success: '<b>{{Rxe8+}}</b> – Ăn Xe, lại còn chiếu ngược Vua Đen!',
        },
      ],
    },
    {
      slug: 'chieu-het', title: '🏆 Chiếu hết', short: 'Chiếu hết',
      blocks: [
        { type: 'text', html: '<p><b>Chiếu hết</b>: Vua bị chiếu mà <b>không chạy, không chặn, không ăn</b> được. Bên bị chiếu hết <b>thua</b> ván cờ.</p>' },
        {
          type: 'replay', fen: 'start', sans: ['f3', 'e5', 'g4', 'Qh4#'],
          notes: {
            0: 'Ván cờ ngắn nhất có thể! Xem Trắng mắc lỗi gì. Bấm “Tiếp”.',
            1: '<b>{{f3}}</b> – nước yếu, mở đường chéo trước Vua.',
            2: '<b>{{e5}}</b> – Đen mở đường cho Hậu.',
            3: '<b>{{g4}}??</b> – lại mở thêm đường chéo trước Vua!',
            4: '💥 <b>{{Qh4#}}</b> – Chiếu hết! Vua e1 không chạy, không chặn, không ăn được Hậu.',
          },
          bad: [1, 3], marks: { 4: { red: ['e1'] } },
          lesson: 'Đừng đi các Tốt f và g trước Vua ở đầu ván.',
        },
      ],
    },
    {
      slug: 'nhap-thanh', title: '🏰 Nhập thành', short: 'Nhập thành',
      blocks: [
        { type: 'text', html: `
          <p><b>Nhập thành</b> là nước đặc biệt: Vua đi <b>2 ô</b> về phía Xe, Xe nhảy qua đứng sát bên kia Vua. Vua được giấu vào góc an toàn!</p>
          <ul class="tips">
            <li>Vua và Xe đó <b>chưa đi lần nào</b>.</li>
            <li>Giữa Vua và Xe <b>không còn quân</b> nào.</li>
            <li>Vua <b>không đang bị chiếu</b>.</li>
            <li>Vua không đi qua hoặc tới ô đang bị tấn công.</li>
          </ul>` },
        {
          type: 'explore', fen: 'r3k2r/8/8/8/8/8/8/R3K2R w KQkq - 0 1',
          html: '<p>Bấm vào <b>Vua e1</b>. Hai ô <b>g1</b> và <b>c1</b> chính là nhập thành.</p>',
          prompt: 'Bấm vào Vua e1.',
          verify: { count: { e1: 7 } },
          squares: { e1: '♔ Vua đi được 1 ô xung quanh, <b>cộng thêm g1</b> (nhập thành gần) và <b>c1</b> (nhập thành xa).' },
        },
        {
          type: 'replay', fen: 'r3k2r/8/8/8/8/8/8/R3K2R w KQkq - 0 1', sans: ['O-O', 'O-O-O'],
          notes: {
            0: 'Bấm “Tiếp” để xem 2 kiểu nhập thành.',
            1: '<b>O-O</b> – Nhập thành gần: Vua e1 → g1, Xe h1 → f1.',
            2: '<b>O-O-O</b> – Nhập thành xa: Vua e8 → c8, Xe a8 → d8.',
          },
        },
        {
          type: 'puzzle', tag: '🧩 Câu đố', after: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5'],
          html: 'Mã và Tượng đã ra. Hãy <b>nhập thành gần</b>!',
          solution: ['O-O'],
          hint: 'Kéo Vua e1 sang ô g1.',
          success: '<b>O-O</b> – Vua đã vào “lâu đài” an toàn!',
        },
      ],
    },
    {
      slug: 'hoa', title: '🤝 Hòa', short: 'Hòa',
      blocks: [
        { type: 'text', html: `
          <p>Ván cờ <b>hòa</b> (không ai thắng) khi:</p>
          <ul class="tips">
            <li>🤝 <b>Hòa pat</b>: đến lượt đi, Vua không bị chiếu nhưng không còn nước nào đi được (học kỹ ở Bài 14).</li>
            <li>🔁 Cùng một thế cờ <b>lặp lại 3 lần</b>.</li>
            <li>♔♚ <b>Không đủ quân</b> để chiếu hết, ví dụ chỉ còn 2 Vua.</li>
            <li>⏳ <b>50 nước</b> liền không ai ăn quân và không ai đi Tốt.</li>
            <li>🤝 Hai bên <b>đồng ý hòa</b>.</li>
          </ul>` },
      ],
    },
    {
      slug: 'on-tap', title: '✏️ Ôn tập', short: 'Ôn tập',
      blocks: [
        { type: 'quiz', q: 'Câu 1. Có mấy cách thoát chiếu?', options: [
          { label: '2', why: 'Chưa đúng. Chạy – Chặn – Ăn.' },
          { label: '3', ok: true, why: 'Đúng! Chạy – Chặn – Ăn.' },
        ] },
        { type: 'quiz', q: 'Câu 2. Đang bị chiếu thì có được nhập thành không?', options: [
          { label: 'Được', why: 'Chưa đúng. Đang bị chiếu thì không được nhập thành.' },
          { label: 'Không được', ok: true, why: 'Đúng!' },
        ] },
        { type: 'quiz', q: 'Câu 3. Chỉ còn 2 Vua trên bàn cờ. Kết quả là gì?', options: [
          { label: 'Hòa', ok: true, why: 'Đúng! Không đủ quân để chiếu hết.' },
          { label: 'Bên nào đi trước thắng', why: 'Chưa đúng. 2 Vua không chiếu hết được nhau.' },
        ] },
      ],
    },
  ],
};
