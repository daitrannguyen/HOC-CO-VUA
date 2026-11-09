// Nhập môn 1 · Bàn cờ & tọa độ
export default {
  no: 'NM1', label: 'Nhập môn 1', part: 0, icon: '🏁',
  title: 'Bàn cờ & tọa độ',
  sub: '64 ô, tên ô, bày quân đúng chỗ',
  nextLesson: 'nhap-mon-2.html',
  sections: [
    {
      slug: 'ban-co', title: '🏁 Bàn cờ', short: 'Bàn cờ',
      blocks: [
        { type: 'text', html: `
          <p>Bàn cờ có <b>64 ô</b>, xen kẽ ô sáng và ô tối.</p>
          <ul class="tips">
            <li>↔️ <b>8 cột</b> tên là chữ: <b>a, b, c, d, e, f, g, h</b> (từ trái sang phải, nhìn từ phía Trắng).</li>
            <li>↕️ <b>8 hàng</b> tên là số: <b>1 → 8</b> (hàng 1 là hàng của Trắng).</li>
            <li>📍 Tên ô = <b>chữ cột + số hàng</b>. Ví dụ: <b>e4</b> là cột e, hàng 4.</li>
            <li>⬜ Đặt bàn cờ sao cho <b>ô góc dưới bên phải là ô sáng</b> (ô h1).</li>
          </ul>` },
      ],
    },
    {
      slug: 'bay-quan', title: '♖ Bày quân', short: 'Bày quân',
      blocks: [
        { type: 'text', html: `
          <ul class="tips">
            <li>Hàng 1 (Trắng), từ trái sang: <b>Xe – Mã – Tượng – Hậu – Vua – Tượng – Mã – Xe</b>.</li>
            <li>Hàng 2: 8 con <b>Tốt</b>.</li>
            <li>👑 Mẹo: <b>“Hậu đứng ô cùng màu”</b> – Hậu Trắng ở ô sáng d1, Hậu Đen ở ô tối d8.</li>
            <li>Bên Đen bày giống hệt ở hàng 8 và hàng 7, Vua đối diện Vua.</li>
          </ul>` },
        {
          type: 'explore', fen: 'start',
          html: '<p>Đây là thế cờ lúc bắt đầu ván. Bấm từng quân Trắng ở <b>hàng 1</b> để biết tên và ô của nó.</p>',
          prompt: 'Bấm vào một quân Trắng.',
          squares: {
            a1: '♖ <b>Xe</b> ở ô <b>a1</b> – Xe đứng ở góc. Bị kẹt, chưa đi được.',
            h1: '♖ <b>Xe</b> ở ô <b>h1</b> – Xe đứng ở góc. Bị kẹt, chưa đi được.',
            b1: '♘ <b>Mã</b> ở ô <b>b1</b>. Mã nhảy được qua quân khác nên đi được ngay (chấm xanh)!',
            g1: '♘ <b>Mã</b> ở ô <b>g1</b>. Mã nhảy được qua quân khác nên đi được ngay (chấm xanh)!',
            c1: '♗ <b>Tượng</b> ở ô <b>c1</b>. Bị tốt chặn, chưa đi được.',
            f1: '♗ <b>Tượng</b> ở ô <b>f1</b>. Bị tốt chặn, chưa đi được.',
            d1: '♕ <b>Hậu</b> ở ô <b>d1</b> – ô sáng. “Hậu đứng ô cùng màu”!',
            e1: '♔ <b>Vua</b> ở ô <b>e1</b>, ngay cạnh Hậu.',
          },
        },
      ],
    },
    {
      slug: 'tim-o', title: '📍 Tìm ô', short: 'Tìm ô',
      blocks: [
        {
          type: 'puzzle', tag: '🧩 Câu đố 1', fen: 'start',
          html: 'Đi Tốt cột e tới ô <b>e4</b>.',
          solution: ['e4'], hint: 'Tìm cột e (cột thứ 5), rồi đếm lên hàng 4.',
          success: 'Đúng rồi! Tốt đã tới ô <b>e4</b>.',
        },
        {
          type: 'puzzle', tag: '🧩 Câu đố 2', after: ['e4'],
          html: 'Con cầm quân Đen. Đi Tốt tới ô <b>e5</b>.',
          solution: ['e5'], hint: 'Cột e, hàng 5 – ngay trước mặt Tốt e4 của Trắng.',
          success: 'Chính xác! <b>e5</b>.',
        },
        {
          type: 'puzzle', tag: '🧩 Câu đố 3', after: ['e4', 'e5'],
          html: 'Đi Mã g1 tới ô <b>f3</b>.',
          solution: ['Nf3'], hint: 'Mã g1 là Mã bên phải. Ô f3: cột f, hàng 3.',
          success: 'Giỏi lắm! Mã tới <b>f3</b>.',
        },
      ],
    },
    {
      slug: 'on-tap', title: '✏️ Ôn tập', short: 'Ôn tập',
      blocks: [
        { type: 'quiz', q: 'Câu 1. Bàn cờ có bao nhiêu ô?', options: [
          { label: '32', why: 'Chưa đúng. 8 × 8 = 64.' },
          { label: '64', ok: true, why: 'Đúng! 8 hàng × 8 cột = 64 ô.' },
          { label: '100', why: 'Chưa đúng. 8 × 8 = 64.' },
        ] },
        { type: 'quiz', q: 'Câu 2. Ô góc dưới bên phải (phía Trắng) phải là ô gì?', options: [
          { label: 'Ô sáng', ok: true, why: 'Đúng! Ô h1 là ô sáng.' },
          { label: 'Ô tối', why: 'Chưa đúng. Nhớ: góc phải bên dưới là ô sáng.' },
        ] },
        { type: 'quiz', q: 'Câu 3. Lúc bắt đầu, Hậu Trắng đứng ở ô nào?', options: [
          { label: 'd1', ok: true, why: 'Đúng! Hậu đứng ô cùng màu: d1 là ô sáng.' },
          { label: 'e1', why: 'Chưa đúng. e1 là chỗ của Vua.' },
          { label: 'd8', why: 'Chưa đúng. d8 là Hậu Đen.' },
        ] },
      ],
    },
  ],
};
