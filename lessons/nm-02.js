// Nhập môn 2 · Xe
export default {
  no: 'NM2', label: 'Nhập môn 2', part: 0, icon: '♖',
  title: 'Quân Xe',
  sub: 'Đi ngang, đi dọc, bao xa cũng được',
  nextLesson: 'nhap-mon-3.html',
  sections: [
    {
      slug: 'cach-di', title: '♖ Xe đi thế nào?', short: 'Cách đi',
      blocks: [
        { type: 'text', html: `
          <ul class="tips">
            <li>↔️↕️ Xe đi <b>ngang</b> hoặc <b>dọc</b>, bao nhiêu ô cũng được.</li>
            <li>🚧 Xe <b>không nhảy qua</b> quân khác.</li>
            <li>🍽️ Xe ăn quân đối thủ bằng cách đi vào đúng ô của quân đó.</li>
            <li>⚖️ Xe đáng <b>5 điểm</b>.</li>
          </ul>` },
        {
          type: 'explore', fen: '4k3/8/8/8/3R4/8/8/4K3 w - - 0 1',
          html: '<p>Bấm vào <b>Xe d4</b> để xem các ô nó đi được.</p>',
          prompt: 'Bấm vào Xe d4.',
          verify: { count: { d4: 14 } },
          squares: { d4: '♖ Xe d4 đi được <b>14 ô</b>: cả cột d và cả hàng 4!' },
        },
      ],
    },
    {
      slug: 'bi-chan', title: '🚧 Bị chặn & ăn quân', short: 'Bị chặn',
      blocks: [
        {
          type: 'explore', fen: '4k3/8/3P4/8/3R2n1/8/8/4K3 w - - 0 1',
          html: '<p>Tốt d6 của Trắng chặn đường Xe. Mã g4 của Đen đứng trên hàng 4.</p>',
          prompt: 'Bấm vào Xe d4.',
          verify: { count: { d4: 10 } },
          squares: { d4: '♖ Xe không đi qua được Tốt d6 của mình, nhưng <b>ăn được Mã g4</b> của Đen. Tất cả <b>10 ô</b>.' },
        },
      ],
    },
    {
      slug: 'an-quan', title: '🍽️ Xe ăn quân', short: 'Ăn quân',
      blocks: [
        {
          type: 'puzzle', tag: '🧩 Câu đố 1', fen: '7k/8/8/8/1n6/8/8/1R4K1 w - - 0 1',
          html: 'Mã b4 của Đen không ai bảo vệ. Cho Xe <b>ăn Mã</b>!',
          solution: ['Rxb4'], verify: { free: true },
          hint: 'Xe b1 đi thẳng lên cột b.',
          success: '<b>{{Rxb4}}</b> – Ăn Mã miễn phí!',
        },
        {
          type: 'puzzle', tag: '🧩 Câu đố 2', fen: '7k/8/p4p2/8/8/8/8/R5K1 w - - 0 1',
          html: 'Cho Xe <b>ăn cả 2 Tốt</b> của Đen. Mỗi lượt Xe ăn 1 Tốt.',
          solution: ['Rxa6', 'Kh7', 'Rxf6'],
          hint: 'Đầu tiên đi lên cột a. Sau đó đi ngang trên hàng 6.',
          next: 'Giờ ăn Tốt còn lại nào!',
          success: 'Xe đã ăn hết 2 Tốt!',
        },
      ],
    },
    {
      slug: 'on-tap', title: '✏️ Ôn tập', short: 'Ôn tập',
      blocks: [
        { type: 'quiz', q: 'Câu 1. Xe đi theo hướng nào?', options: [
          { label: 'Ngang và dọc', ok: true, why: 'Đúng!' },
          { label: 'Chéo', why: 'Chưa đúng. Đi chéo là Tượng.' },
          { label: 'Hình chữ L', why: 'Chưa đúng. Đi hình chữ L là Mã.' },
        ] },
        { type: 'quiz', q: 'Câu 2. Xe có nhảy qua quân khác được không?', options: [
          { label: 'Có', why: 'Chưa đúng. Chỉ có Mã mới nhảy qua quân khác.' },
          { label: 'Không', ok: true, why: 'Đúng! Có quân chặn thì Xe phải dừng.' },
        ] },
        { type: 'quiz', q: 'Câu 3. Xe bao nhiêu điểm?', options: [
          { label: '3', why: 'Chưa đúng. 3 điểm là Mã hoặc Tượng.' },
          { label: '5', ok: true, why: 'Đúng! Xe 5 điểm.' },
          { label: '9', why: 'Chưa đúng. 9 điểm là Hậu.' },
        ] },
      ],
    },
  ],
};
