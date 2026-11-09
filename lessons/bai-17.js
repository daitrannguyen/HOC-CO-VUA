// Bài 17 · Chiếu hết 1 nước – các mẫu hay gặp
export default {
  no: 17, part: 2, icon: '🎯',
  title: 'Chiếu hết 1 nước',
  sub: 'Các mẫu chiếu hết hay gặp nhất',
  nextLesson: 'bai-11.html',
  sections: [
    {
      slug: 'la-gi', title: '🎯 Cách tìm chiếu hết', short: 'Cách tìm',
      blocks: [
        { type: 'text', html: `
          <p>Mỗi khi có thể <b>chiếu</b>, con thử từng nước chiếu và hỏi 3 câu về Vua đối thủ:</p>
          <ul class="tips">
            <li>🏃 Vua có <b>chạy</b> được không?</li>
            <li>🧱 Có quân nào <b>chặn</b> được không?</li>
            <li>🍽️ Có quân nào <b>ăn</b> được quân đang chiếu không?</li>
            <li>✅ Cả 3 câu đều “không” → <b>chiếu hết</b>!</li>
          </ul>` },
      ],
    },
    {
      slug: 'hau-vua', title: '♛ Hậu áp sát Vua', short: 'Hậu áp sát',
      blocks: [
        { type: 'text', html: '<p>Hậu đứng sát Vua đối thủ, có quân mình <b>bảo vệ</b> nên Vua không ăn được Hậu.</p>' },
        {
          type: 'puzzle', tag: '🧩 Câu đố 1', fen: '7k/2Q5/6K1/8/8/8/8/8 w - - 0 1',
          html: 'Chiếu hết trong 1 nước!',
          solution: ['Qg7#'], anyMate: true,
          hint: 'Hậu tiến sát Vua h8, ở ô có Vua Trắng bảo vệ.',
          success: 'Chiếu hết! Vua Đen không ăn được Hậu vì Vua Trắng đứng sau bảo vệ.',
        },
        {
          type: 'puzzle', tag: '🧩 Câu đố 2', fen: '6k1/5p1p/6p1/8/8/2Q5/1B6/6K1 w - - 0 1',
          html: 'Hậu và Tượng cùng nhìn một đường chéo. Chiếu hết đi!',
          solution: ['Qg7#'], anyMate: true,
          hint: 'Hậu c3 đi chéo tới g7 – Tượng b2 đứng sau bảo vệ.',
          success: '<b>{{Qg7#}}</b> – Hậu và Tượng phối hợp chiếu hết!',
        },
      ],
    },
    {
      slug: 'xe-vua', title: '♜ Xe + Vua', short: 'Xe + Vua',
      blocks: [
        {
          type: 'puzzle', tag: '🧩 Câu đố 3', fen: '6k1/8/6K1/8/8/8/8/R7 w - - 0 1',
          html: 'Vua Trắng đã chặn đường lên của Vua Đen. Chiếu hết bằng Xe!',
          solution: ['Ra8#'], anyMate: true,
          hint: 'Xe a1 đi thẳng lên hàng 8.',
          success: '<b>{{Ra8#}}</b> – Xe chiếu hàng 8, Vua Trắng giữ hàng 7.',
        },
      ],
    },
    {
      slug: 'ma-ngop', title: '♞ Mã chiếu ngộp', short: 'Chiếu ngộp',
      blocks: [
        { type: 'text', html: '<p>Vua bị chính quân nhà <b>vây kín</b>. Mã nhảy qua đầu các quân và chiếu – không ai chặn được!</p>' },
        {
          type: 'puzzle', tag: '🧩 Câu đố 4', fen: '6rk/6pp/8/6N1/8/8/8/6K1 w - - 0 1',
          html: 'Vua h8 bị Xe g8 và 2 Tốt vây kín. Chiếu hết bằng Mã!',
          solution: ['Nf7#'], anyMate: true,
          hint: 'Mã g5 nhảy tới ô chiếu được h8.',
          success: '<b>{{Nf7#}}</b> – Chiếu ngộp! Vua bị chính quân nhà nhốt.',
        },
      ],
    },
    {
      slug: 'cam-quan-den', title: '⚫ Cầm quân Đen', short: 'Quân Đen',
      blocks: [
        {
          type: 'puzzle', tag: '🧩 Câu đố 5', after: ['f3', 'e5', 'g4'],
          html: 'Trắng vừa đi 2 nước rất yếu. Con cầm Đen – chiếu hết đi!',
          solution: ['Qh4#'], anyMate: true,
          hint: 'Hậu d8 đi chéo xuống h4.',
          success: '<b>{{Qh4#}}</b> – Chiếu hết chỉ sau 2 nước!',
        },
      ],
    },
    {
      slug: 'on-tap', title: '✏️ Ôn tập', short: 'Ôn tập',
      blocks: [
        { type: 'quiz', q: 'Câu 1. Chiếu hết là khi Vua bị chiếu và…', options: [
          { label: 'Không chạy, không chặn, không ăn được', ok: true, why: 'Đúng!' },
          { label: 'Chỉ cần không chạy được', why: 'Chưa đúng. Còn phải không chặn và không ăn được nữa.' },
        ] },
        { type: 'quiz', q: 'Câu 2. Hậu áp sát Vua đối thủ mà không ai bảo vệ thì sao?', options: [
          { label: 'Vẫn là chiếu hết', why: 'Chưa đúng. Vua sẽ ăn Hậu!' },
          { label: 'Vua ăn được Hậu', ok: true, why: 'Đúng! Hậu áp sát phải có quân bảo vệ.' },
        ] },
      ],
    },
  ],
};
