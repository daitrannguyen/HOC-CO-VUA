// Bài 9 · Đòn phát hiện & chiếu đôi
export default {
  no: 9, part: 2, icon: '💥',
  title: 'Phát hiện & chiếu đôi',
  sub: 'Một quân tránh đường – quân phía sau tấn công',
  nextLesson: 'bai-10.html',
  sections: [
    {
      slug: 'la-gi', title: '💥 Đòn phát hiện là gì?', short: 'Là gì?',
      blocks: [
        { type: 'text', html: `
          <p><b>Đòn phát hiện:</b> quân phía trước <b>di chuyển</b>, mở đường cho quân phía sau (Tượng, Xe, Hậu) tấn công. Một nước đi mà <b>hai quân cùng ra đòn</b>!</p>
          <ul class="tips">
            <li>👁️ <b>Chiếu phát hiện:</b> quân phía sau chiếu Vua, còn quân vừa đi được tự do tấn công quân khác.</li>
            <li>⚡ <b>Chiếu đôi:</b> cả hai quân cùng chiếu Vua. Đối thủ <b>không thể chặn hay ăn</b> – chỉ còn cách chạy Vua!</li>
          </ul>` },
        {
          type: 'replay', fen: '3q3k/8/8/8/3R4/8/1B6/6K1 w - - 0 1',
          sans: ['Rxd8+', 'Kh7'],
          notes: {
            0: 'Xe d4 đứng chắn đường chéo của Tượng b2 tới Vua h8. Bấm “Tiếp”.',
            1: '💥 <b>{{Rxd8+}}</b> – Xe ăn Hậu, đồng thời mở đường cho Tượng b2 <b>chiếu</b> Vua h8!',
            2: '<b>{{Kh7}}</b> – Đen phải lo cứu Vua, không ăn lại được Xe. Trắng lời cả Hậu!',
          },
          marks: { 1: { red: ['h8'] } },
          lesson: 'Khi quân của mình chắn đường quân khác của mình tới Vua đối thủ – hãy tìm đòn phát hiện!',
        },
      ],
    },
    {
      slug: 'chieu-phat-hien', title: '👁️ Chiếu phát hiện', short: 'Phát hiện',
      blocks: [
        {
          type: 'puzzle', tag: '🧩 Câu đố 1', fen: 'q3k3/8/8/8/4B3/8/8/4R1K1 w - - 0 1',
          html: 'Tượng e4 đang chắn đường Xe e1 tới Vua e8. Hậu a8 lại đang tấn công Tượng. Hãy ra đòn!',
          solution: ['Bxa8+'],
          hint: 'Tượng rời cột e – và nhìn xem nó ăn được quân nào.',
          success: '<b>{{Bxa8+}}</b> – Tượng ăn Hậu, Xe e1 chiếu Vua. Đòn phát hiện tuyệt đẹp!',
        },
      ],
    },
    {
      slug: 'chieu-doi', title: '⚡ Chiếu đôi', short: 'Chiếu đôi',
      blocks: [
        { type: 'text', html: '<p>Vua Đen bị chính quân của mình vây quanh. Một chiếu đôi là đủ chiếu hết!</p>' },
        {
          type: 'puzzle', tag: '🧩 Câu đố 2', fen: '3qkb2/3p1p2/8/8/4N3/8/8/4R1K1 w - - 0 1',
          html: 'Mã e4 hãy nhảy đi để <b>chiếu đôi</b>: Mã chiếu và Xe e1 cũng chiếu!',
          solution: ['Nd6#'], anyMate: true,
          hint: 'Mã nhảy tới ô chiếu được Vua e8.',
          success: 'Chiếu đôi – chiếu hết! Vua không chạy được, mà chặn hay ăn cũng không kịp.',
        },
      ],
    },
    {
      slug: 'on-tap', title: '✏️ Ôn tập', short: 'Ôn tập',
      blocks: [
        { type: 'quiz', q: 'Câu 1. Khi bị chiếu đôi, Đen làm được gì?', options: [
          { label: 'Chặn đường chiếu', why: 'Chưa đúng. Có hai quân chiếu, chặn một thì vẫn còn một.' },
          { label: 'Ăn quân chiếu', why: 'Chưa đúng. Ăn một quân thì quân kia vẫn chiếu.' },
          { label: 'Chỉ có thể chạy Vua', ok: true, why: 'Đúng! Chiếu đôi chỉ thoát được bằng cách chạy Vua.' },
        ] },
        { type: 'quiz', q: 'Câu 2. Trong đòn phát hiện, quân nào ra đòn?', options: [
          { label: 'Cả quân vừa đi và quân phía sau', ok: true, why: 'Đúng! Một nước – hai đòn.' },
          { label: 'Chỉ quân vừa đi', why: 'Chưa đúng. Quân phía sau được mở đường cũng tấn công.' },
        ] },
      ],
    },
  ],
};
