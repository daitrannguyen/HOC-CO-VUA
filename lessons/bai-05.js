// Bài 5 · Quân bỏ ngỏ – ăn quân miễn phí
// verify.free: quân bị ăn không có ai ăn lại được.
export default {
  no: 5, part: 2, icon: '🎁',
  title: 'Quân bỏ ngỏ',
  sub: 'Đếm quân tấn công, quân bảo vệ – ăn quân miễn phí',
  nextLesson: 'bai-6.html',
  sections: [
    {
      slug: 'mo-dau', title: '🎁 Quân bỏ ngỏ là gì?', short: 'Là gì?',
      blocks: [
        { type: 'text', html: `
          <p><b>Quân bỏ ngỏ</b> là quân <b>không được bảo vệ</b>. Nếu con tấn công được nó, con ăn <b>miễn phí</b> – đối thủ không ăn lại được!</p>
          <ul class="tips">
            <li>⚖️ Giá trị quân: Tốt <b>1</b> · Mã <b>3</b> · Tượng <b>3</b> · Xe <b>5</b> · Hậu <b>9</b>.</li>
            <li>🔢 Trước khi ăn, <b>đếm</b>: có bao nhiêu quân của mình tấn công, bao nhiêu quân đối thủ bảo vệ?</li>
            <li>✅ Quân bỏ ngỏ (0 quân bảo vệ) → ăn ngay!</li>
            <li>⚠️ Quân được bảo vệ → chỉ ăn khi quân mình <b>rẻ hơn hoặc bằng</b> quân bị ăn.</li>
            <li>👀 Mỗi nước, kiểm tra luôn: <b>quân nào của mình</b> đang bỏ ngỏ?</li>
          </ul>` },
      ],
    },
    {
      slug: 'an-mien-phi', title: '🍰 Ăn quân miễn phí', short: 'Ăn miễn phí',
      blocks: [
        {
          type: 'puzzle', tag: '🧩 Câu đố 1', fen: '4k3/8/8/4n3/8/8/8/4R1K1 w - - 0 1',
          html: 'Mã e5 của Đen không có ai bảo vệ. Hãy <b>ăn nó</b>!',
          solution: ['Rxe5+'], verify: { free: true },
          hint: 'Xe e1 đi thẳng lên cột e.',
          success: '<b>{{Rxe5+}}</b> – Ăn Mã miễn phí, lại còn chiếu Vua!',
        },
        {
          type: 'puzzle', tag: '🧩 Câu đố 2', fen: 'q3k3/8/8/8/8/8/8/R3K3 w - - 0 1',
          html: 'Đối thủ quên bảo vệ Hậu! Hãy <b>ăn Hậu</b>.',
          solution: ['Rxa8+'], verify: { free: true },
          hint: 'Xe a1 nhìn thẳng lên cột a.',
          success: '<b>{{Rxa8+}}</b> – Ăn Hậu (9 điểm) miễn phí!',
        },
      ],
    },
    {
      slug: 'dem-quan', title: '🔢 Ăn quân nào?', short: 'Đếm quân',
      blocks: [
        { type: 'text', html: '<p>Có nhiều quân để ăn, nhưng quân nào <b>được bảo vệ</b>, quân nào <b>bỏ ngỏ</b>? Đếm kỹ trước khi ăn!</p>' },
        {
          type: 'puzzle', tag: '🧩 Câu đố 3', fen: '4k3/8/3p4/4p1b1/8/5N2/8/4K3 w - - 0 1',
          html: 'Mã f3 nên ăn quân nào?',
          solution: ['Nxg5'], verify: { free: true },
          hint: 'Tốt e5 được tốt d6 bảo vệ. Tượng g5 thì sao?',
          wrong: 'Tốt e5 được tốt d6 bảo vệ – ăn thì mất Mã (3) để lấy Tốt (1)!',
          success: '<b>{{Nxg5}}</b> – Tượng g5 bỏ ngỏ, ăn miễn phí 3 điểm!',
        },
        {
          type: 'puzzle', tag: '🧩 Câu đố 4', fen: '4k3/8/4p3/3p4/n7/8/8/3QK3 w - - 0 1',
          html: 'Hậu d1 nhìn thấy tốt d5 và Mã a4. Ăn quân nào thì <b>an toàn</b>?',
          solution: ['Qxa4+'], verify: { free: true },
          hint: 'Tốt d5 có tốt e6 bảo vệ. Mã a4 thì không ai bảo vệ.',
          wrong: 'Tốt d5 được tốt e6 bảo vệ – Hậu ăn tốt sẽ bị tốt ăn lại, mất 9 điểm!',
          success: '<b>{{Qxa4+}}</b> – Ăn Mã bỏ ngỏ, lại còn chiếu Vua!',
        },
      ],
    },
    {
      slug: 'on-tap', title: '✏️ Ôn tập', short: 'Ôn tập',
      blocks: [
        { type: 'quiz', q: 'Câu 1. Hậu bao nhiêu điểm?', options: [
          { label: '3', why: 'Chưa đúng. 3 điểm là Mã hoặc Tượng.' },
          { label: '5', why: 'Chưa đúng. 5 điểm là Xe.' },
          { label: '9', ok: true, why: 'Đúng! Hậu là quân mạnh nhất: 9 điểm.' },
        ] },
        { type: 'quiz', q: 'Câu 2. Con đổi Mã (3) lấy Xe (5) của đối thủ. Con lời hay lỗ?', options: [
          { label: 'Lời 2 điểm', ok: true, why: 'Đúng! 5 − 3 = 2 điểm.' },
          { label: 'Lỗ', why: 'Chưa đúng. Xe 5 điểm, Mã 3 điểm – con lời.' },
        ] },
        { type: 'quiz', q: 'Câu 3. Một quân bị tấn công 2 lần mà chỉ được bảo vệ 1 lần. Nó có an toàn không?', options: [
          { label: 'Không an toàn', ok: true, why: 'Đúng! Bên tấn công có nhiều quân hơn sẽ ăn được.' },
          { label: 'An toàn', why: 'Chưa đúng. Đếm lại: 2 tấn công, 1 bảo vệ.' },
        ] },
      ],
    },
  ],
};
