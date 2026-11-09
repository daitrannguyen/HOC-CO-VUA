// Bài 10 · Chiếu hết hàng cuối
export default {
  no: 10, part: 2, icon: '🧱',
  title: 'Chiếu hết hàng cuối',
  sub: 'Vua bị chính tốt nhà chặn đường',
  nextLesson: 'bai-17.html',
  sections: [
    {
      slug: 'la-gi', title: '🧱 Chiếu hết hàng cuối', short: 'Là gì?',
      blocks: [
        { type: 'text', html: `
          <p>Sau khi nhập thành, Vua đứng sau 3 tốt <b>f, g, h</b>. Rất an toàn – nhưng nếu 3 tốt chưa đi, Vua <b>không có đường thoát</b>. Một Xe hoặc Hậu chiếu ở hàng cuối là chiếu hết!</p>
          <ul class="tips">
            <li>🎯 Tấn công: tìm Vua đối thủ bị “nhốt” ở hàng cuối, đưa Xe/Hậu tới chiếu.</li>
            <li>🌬️ Phòng thủ: làm <b>lỗ thở</b> – đi một tốt trước Vua (ví dụ h3 hoặc g3) để Vua có chỗ chạy.</li>
          </ul>` },
        {
          type: 'replay', fen: '6k1/5ppp/8/8/8/8/5PPP/3R2K1 w - - 0 1', sans: ['Rd8#'],
          notes: {
            0: 'Vua g8 bị 3 tốt f7, g7, h7 chặn đường. Bấm “Tiếp”.',
            1: '💥 <b>{{Rd8#}}</b> – Chiếu hết! Vua không thể tiến lên vì tốt nhà chặn.',
          },
          marks: { 1: { red: ['g8'] } },
        },
      ],
    },
    {
      slug: 'tan-cong', title: '🎯 Ra đòn hàng cuối', short: 'Ra đòn',
      blocks: [
        {
          type: 'puzzle', tag: '🧩 Câu đố 1', fen: '6k1/5ppp/8/8/8/8/5PPP/4R1K1 w - - 0 1',
          html: 'Hãy <b>chiếu hết</b> trong 1 nước!',
          solution: ['Re8#'], anyMate: true, hint: 'Xe e1 đi thẳng lên hàng 8.',
          success: '<b>{{Re8#}}</b> – Chiếu hết hàng cuối!',
        },
        {
          type: 'puzzle', tag: '🧩 Câu đố 2', fen: '6k1/5ppp/8/8/8/8/1Q3PPP/6K1 w - - 0 1',
          html: 'Lần này dùng <b>Hậu</b>. Chiếu hết trong 1 nước!',
          solution: ['Qb8#'], anyMate: true, hint: 'Hậu b2 đi thẳng lên hàng 8.',
          success: '<b>{{Qb8#}}</b> – Hậu chiếu hết hàng cuối!',
        },
        {
          type: 'puzzle', tag: '🧩 Câu đố 3', fen: '3r2k1/5ppp/8/8/8/8/5PPP/6K1 b - - 0 1',
          html: 'Con cầm quân <b>Đen</b>. Vua Trắng cũng bị nhốt! Chiếu hết đi!',
          solution: ['Rd1#'], anyMate: true, hint: 'Xe d8 đi thẳng xuống hàng 1.',
          success: '<b>{{Rd1#}}</b> – Đen chiếu hết hàng cuối!',
        },
      ],
    },
    {
      slug: 'phong-thu', title: '🌬️ Làm lỗ thở', short: 'Lỗ thở',
      blocks: [
        {
          type: 'puzzle', tag: '🛡️ Câu đố 4', fen: '3r2k1/5ppp/8/8/8/8/5PPP/6K1 w - - 0 1',
          html: 'Đen đang dọa {{Rd1#}}. Trắng đi trước – hãy <b>cứu Vua</b>!',
          defend: true, accept: ['h3', 'g3', 'h4', 'g4', 'f3', 'f4', 'Kf1'],
          hint: 'Đi một tốt trước Vua để Vua có lỗ thở, ví dụ h3.',
          success: 'Vua đã có đường thoát. {{Rd1+}} không còn là chiếu hết nữa!',
        },
      ],
    },
    {
      slug: 'on-tap', title: '✏️ Ôn tập', short: 'Ôn tập',
      blocks: [
        { type: 'quiz', q: 'Câu 1. Vì sao Vua bị chiếu hết hàng cuối?', options: [
          { label: 'Tốt nhà chặn đường thoát', ok: true, why: 'Đúng! 3 tốt trước Vua chưa đi nên Vua bị nhốt.' },
          { label: 'Vì Vua đi quá nhiều', why: 'Chưa đúng. Vua bị chính tốt nhà chặn.' },
        ] },
        { type: 'quiz', q: 'Câu 2. “Lỗ thở” là gì?', options: [
          { label: 'Đi một tốt trước Vua để Vua có chỗ chạy', ok: true, why: 'Đúng! Ví dụ h3 hoặc g3.' },
          { label: 'Đưa Vua ra giữa bàn', why: 'Chưa đúng. Vua ra giữa sớm rất nguy hiểm.' },
        ] },
      ],
    },
  ],
};
