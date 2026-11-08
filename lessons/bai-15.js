// Bài 15 · Phong cấp & quy tắc hình vuông
const SQ_A5 = ['a5', 'b5', 'c5', 'd5', 'a6', 'b6', 'c6', 'd6', 'a7', 'b7', 'c7', 'd7', 'a8', 'b8', 'c8', 'd8'];
export default {
  no: 15, part: 3, icon: '👑',
  title: 'Phong cấp & hình vuông',
  sub: 'Tốt chạy về đích – Vua có đuổi kịp không?',
  nextLesson: 'bai-16.html',
  sections: [
    {
      slug: 'phong-cap', title: '👑 Phong cấp', short: 'Phong cấp',
      blocks: [
        { type: 'text', html: `
          <p>Khi <b>Tốt</b> đi tới hàng cuối (Trắng: hàng 8, Đen: hàng 1), nó được <b>phong cấp</b> – đổi thành Hậu, Xe, Tượng hoặc Mã. Hầu như luôn chọn <b>Hậu</b>, vì Hậu mạnh nhất!</p>
          <p>Trên trang này, Tốt về đích sẽ tự thành Hậu.</p>` },
        {
          type: 'puzzle', tag: '🧩 Câu đố 1', fen: '8/P7/8/8/8/k7/8/7K w - - 0 1',
          html: 'Tốt a7 chỉ còn 1 bước. Hãy <b>phong cấp</b>!',
          solution: ['a8=Q+'], hint: 'Tốt a7 tiến lên a8.',
          success: 'Tốt đã thành <b>Hậu</b>!',
        },
      ],
    },
    {
      slug: 'hinh-vuong', title: '⬜ Quy tắc hình vuông', short: 'Hình vuông',
      blocks: [
        { type: 'text', html: `
          <p>Tốt chạy, Vua đối thủ đuổi. Ai thắng? Dùng <b>quy tắc hình vuông</b>:</p>
          <ul class="tips">
            <li>⬜ Vẽ một hình vuông: một cạnh đi từ Tốt tới ô phong cấp, cạnh kia sang ngang bằng đúng độ dài đó.</li>
            <li>✅ Đến lượt Vua đi, nếu Vua <b>bước vào được</b> hình vuông → Vua <b>đuổi kịp</b> Tốt.</li>
            <li>❌ Nếu Vua <b>không vào được</b> → Tốt chạy thoát và phong cấp.</li>
          </ul>` },
        {
          type: 'replay', fen: '8/8/8/6k1/P7/8/8/7K w - - 0 1',
          sans: ['a5', 'Kf6', 'a6', 'Ke7', 'a7', 'Kd7', 'a8=Q'],
          notes: {
            0: 'Vua Đen ở g5. Tốt a4 có thoát được không? Bấm “Tiếp”.',
            1: '<b>a5</b> – Hình vuông của tốt (ô vàng). Vua g5 <b>không bước vào được</b>!',
            6: '<b>{{Kd7}}</b> – Vua Đen chậm một bước…',
            7: '👑 <b>a8={{Q}}</b> – Tốt phong Hậu! Vua không đuổi kịp.',
          },
          marks: { 1: { yellow: SQ_A5 } },
          verify: { promote: true },
        },
        {
          type: 'replay', fen: '8/8/8/4k3/P7/8/8/7K w - - 0 1',
          sans: ['a5', 'Kd6', 'a6', 'Kc7', 'a7', 'Kb7', 'a8=Q+', 'Kxa8'],
          notes: {
            0: 'Lần này Vua Đen ở e5, gần hơn. Bấm “Tiếp”.',
            1: '<b>a5</b> – Hình vuông của tốt (ô vàng). Vua e5 bước vào được ô d6!',
            2: '<b>{{Kd6}}</b> – Vua đã vào trong hình vuông.',
            8: '<b>{{Kxa8}}</b> – Vua đuổi kịp và ăn mất quân vừa phong cấp!',
          },
          marks: { 1: { yellow: SQ_A5 } },
          lesson: 'Vua vào được hình vuông → đuổi kịp. Không vào được → Tốt thoát!',
        },
      ],
    },
    {
      slug: 'on-tap', title: '✏️ Ôn tập', short: 'Ôn tập',
      blocks: [
        { type: 'quiz', q: 'Câu 1. Tốt phong cấp thường thành quân gì?', options: [
          { label: 'Hậu', ok: true, why: 'Đúng! Hậu mạnh nhất.' },
          { label: 'Vua', why: 'Chưa đúng. Tốt không được phong thành Vua.' },
          { label: 'Tốt', why: 'Chưa đúng. Tốt phải đổi thành quân khác.' },
        ] },
        { type: 'quiz', q: 'Câu 2. Vua bước vào được hình vuông của Tốt thì sao?', options: [
          { label: 'Vua đuổi kịp Tốt', ok: true, why: 'Đúng!' },
          { label: 'Tốt vẫn chạy thoát', why: 'Chưa đúng. Vua vào được hình vuông thì đuổi kịp.' },
        ] },
      ],
    },
  ],
};
