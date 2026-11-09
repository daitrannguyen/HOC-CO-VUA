// Bài 19 · Ghi biên bản & thi đấu
export default {
  no: 19, part: 4, icon: '📝',
  title: 'Ghi biên bản & thi đấu',
  sub: 'Đọc – viết nước đi · luật thi đấu',
  sections: [
    {
      slug: 'ky-hieu', title: '📝 Ký hiệu nước đi', short: 'Ký hiệu',
      blocks: [
        { type: 'text', html: `
          <ul class="tips">
            <li>♔ Chữ cái chỉ quân: <b>V</b> = Vua · <b>H</b> = Hậu · <b>X</b> = Xe · <b>T</b> = Tượng · <b>M</b> = Mã · Tốt <b>không ghi chữ</b>.</li>
            <li>📍 Sau chữ là <b>ô đến</b>: <b>Mf3</b> = Mã đi tới f3; <b>e4</b> = Tốt đi tới e4.</li>
            <li>✖️ <b>x</b> = ăn quân: <b>Txe5</b> = Tượng ăn quân ở e5; <b>exd5</b> = Tốt cột e ăn quân ở d5.</li>
            <li>➕ <b>+</b> = chiếu · <b>#</b> = chiếu hết · <b>O-O</b> = nhập thành gần · <b>O-O-O</b> = nhập thành xa.</li>
            <li>🔢 Mỗi số thứ tự gồm <b>nước Trắng rồi nước Đen</b>: <b>1. e4 e5</b>.</li>
            <li>🌐 Sách tiếng Anh dùng K, Q, R, B, N thay cho V, H, X, T, M.</li>
          </ul>` },
        {
          type: 'replay', fen: 'start', sans: ['e4', 'e5', 'Bc4', 'Nc6', 'Qh5', 'Nf6', 'Qxf7#'],
          html: '<p>Xem ván và đọc bảng nước đi bên dưới.</p>',
          notes: {
            0: 'Bấm “Tiếp” và đọc từng nước trong bảng.',
            1: '<b>1. e4</b> – Tốt Trắng tới e4.',
            2: '<b>1… e5</b> – dấu “…” nghĩa là nước của Đen.',
            3: '<b>2. {{Bc4}}</b> – Tượng tới c4.',
            4: '<b>2… {{Nc6}}</b> – Mã Đen tới c6.',
            5: '<b>3. {{Qh5}}</b> – Hậu tới h5.',
            6: '<b>3… {{Nf6}}??</b> – Mã tới f6, quên bảo vệ f7.',
            7: '<b>4. {{Qxf7#}}</b> – Hậu <b>ăn</b> (x) ở f7 và <b>chiếu hết</b> (#).',
          },
          bad: [6], marks: { 7: { red: ['e8'] } },
        },
      ],
    },
    {
      slug: 'doc-nuoc', title: '👆 Đi theo biên bản', short: 'Đọc nước',
      blocks: [
        {
          type: 'puzzle', tag: '🧩 Câu đố 1', after: ['e4', 'e5'],
          html: 'Đi nước <b>2. {{Nf3}}</b>.',
          solution: ['Nf3'], hint: 'M là Mã. Ô đến là f3.',
          success: 'Đúng! <b>{{Nf3}}</b>.',
        },
        {
          type: 'puzzle', tag: '🧩 Câu đố 2', after: ['e4', 'e5', 'Nf3', 'Nc6'],
          html: 'Đi nước <b>3. {{Bc4}}</b>.',
          solution: ['Bc4'], hint: 'T là Tượng. Ô đến là c4.',
          success: 'Đúng! <b>{{Bc4}}</b>.',
        },
        {
          type: 'puzzle', tag: '🧩 Câu đố 3', after: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4'],
          html: 'Con cầm Đen. Đi nước <b>3… {{Nf6}}</b>.',
          solution: ['Nf6'], hint: 'M là Mã. Mã g8 tới f6.',
          success: 'Đúng! <b>3… {{Nf6}}</b>.',
        },
      ],
    },
    {
      slug: 'thi-dau', title: '🏅 Luật thi đấu', short: 'Thi đấu',
      blocks: [
        { type: 'text', html: `
          <ul class="tips">
            <li>🤝 <b>Bắt tay</b> đối thủ trước và sau ván cờ.</li>
            <li>✋ <b>Chạm quân là phải đi</b> quân đó (nếu có nước đi hợp lệ). Muốn chỉnh lại quân cho ngay ngắn thì nói “Chỉnh quân” trước khi chạm.</li>
            <li>⏱️ Đi xong thì <b>bấm đồng hồ</b> bằng chính tay vừa đi quân.</li>
            <li>📝 Ghi biên bản <b>từng nước</b> sau khi đi.</li>
            <li>🤫 Giữ im lặng, không nói chuyện hay gợi ý trong lúc thi.</li>
            <li>😊 Thắng không khoe, thua không giận – mỗi ván thua là một bài học.</li>
          </ul>` },
      ],
    },
    {
      slug: 'on-tap', title: '✏️ Ôn tập', short: 'Ôn tập',
      blocks: [
        { type: 'quiz', q: 'Câu 1. “Mf3” nghĩa là gì?', options: [
          { label: 'Mã đi tới ô f3', ok: true, why: 'Đúng!' },
          { label: 'Hậu đi tới ô f3', why: 'Chưa đúng. Hậu viết là H.' },
        ] },
        { type: 'quiz', q: 'Câu 2. Dấu “#” nghĩa là gì?', options: [
          { label: 'Chiếu', why: 'Chưa đúng. Chiếu viết là “+”.' },
          { label: 'Chiếu hết', ok: true, why: 'Đúng!' },
          { label: 'Ăn quân', why: 'Chưa đúng. Ăn quân viết là “x”.' },
        ] },
        { type: 'quiz', q: 'Câu 3. Con lỡ chạm vào Mã của mình. Theo luật thi đấu thì sao?', options: [
          { label: 'Phải đi Mã đó', ok: true, why: 'Đúng! Chạm quân là phải đi (nếu Mã có nước đi hợp lệ).' },
          { label: 'Đổi sang quân khác thoải mái', why: 'Chưa đúng. Trong thi đấu, chạm quân là phải đi.' },
        ] },
        { type: 'quiz', q: 'Câu 4. “O-O” là nước gì?', options: [
          { label: 'Nhập thành gần', ok: true, why: 'Đúng! Nhập thành xa là O-O-O.' },
          { label: 'Hòa', why: 'Chưa đúng.' },
        ] },
      ],
    },
  ],
};
