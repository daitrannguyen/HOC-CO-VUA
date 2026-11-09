// Nhập môn 4 · Hậu
export default {
  no: 'NM4', label: 'Nhập môn 4', part: 0, icon: '♕',
  title: 'Quân Hậu',
  sub: 'Xe + Tượng gộp lại – quân mạnh nhất',
  nextLesson: 'nhap-mon-5.html',
  sections: [
    {
      slug: 'cach-di', title: '♕ Hậu đi thế nào?', short: 'Cách đi',
      blocks: [
        { type: 'text', html: `
          <ul class="tips">
            <li>✳️ Hậu đi <b>ngang, dọc và chéo</b>, bao nhiêu ô cũng được – như Xe và Tượng gộp lại.</li>
            <li>🚧 Hậu <b>không nhảy qua</b> quân khác.</li>
            <li>⚖️ Hậu đáng <b>9 điểm</b> – quân quý nhất sau Vua. Đừng để mất Hậu!</li>
          </ul>` },
        {
          type: 'explore', fen: '4k3/8/8/8/3Q4/8/8/4K3 w - - 0 1',
          html: '<p>Bấm vào <b>Hậu d4</b>.</p>',
          prompt: 'Bấm vào Hậu d4.',
          verify: { count: { d4: 27 } },
          squares: { d4: '♕ Hậu ở giữa bàn đi được <b>27 ô</b>: 14 ô của Xe + 13 ô của Tượng!' },
        },
      ],
    },
    {
      slug: 'an-quan', title: '🍽️ Hậu ăn quân an toàn', short: 'Ăn an toàn',
      blocks: [
        {
          type: 'puzzle', tag: '🧩 Câu đố 1', fen: '6k1/8/8/7p/6b1/1n6/8/3Q2K1 w - - 0 1',
          html: 'Tượng g4 đang dọa Hậu d1! Hậu ăn được Tượng g4 hoặc Mã b3. Ăn quân nào thì <b>an toàn</b>?',
          solution: ['Qxb3+'], verify: { free: true },
          hint: 'Tượng g4 có Tốt h5 bảo vệ. Mã b3 thì sao?',
          wrong: 'Ăn Tượng g4 thì Tốt h5 ăn lại Hậu – mất 9 điểm để lấy 3 điểm!',
          success: '<b>{{Qxb3+}}</b> – Ăn Mã miễn phí, lại còn chiếu Vua!',
        },
      ],
    },
    {
      slug: 'on-tap', title: '✏️ Ôn tập', short: 'Ôn tập',
      blocks: [
        { type: 'quiz', q: 'Câu 1. Hậu đi giống những quân nào gộp lại?', options: [
          { label: 'Xe + Tượng', ok: true, why: 'Đúng! Ngang, dọc như Xe và chéo như Tượng.' },
          { label: 'Mã + Tượng', why: 'Chưa đúng. Hậu không đi hình chữ L.' },
        ] },
        { type: 'quiz', q: 'Câu 2. Hậu bao nhiêu điểm?', options: [
          { label: '5', why: 'Chưa đúng. 5 điểm là Xe.' },
          { label: '9', ok: true, why: 'Đúng!' },
        ] },
        { type: 'quiz', q: 'Câu 3. Có nên đưa Hậu ra đánh ngay từ đầu ván không?', options: [
          { label: 'Có, càng sớm càng tốt', why: 'Chưa đúng. Hậu ra sớm sẽ bị các quân nhỏ đuổi, mất thời gian.' },
          { label: 'Không, ra Mã và Tượng trước', ok: true, why: 'Đúng! Đây là một trong 3 nguyên tắc khai cuộc.' },
        ] },
      ],
    },
  ],
};
