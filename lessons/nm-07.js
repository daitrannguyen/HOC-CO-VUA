// Nhập môn 7 · Tốt
export default {
  no: 'NM7', label: 'Nhập môn 7', part: 0, icon: '♙',
  title: 'Quân Tốt',
  sub: 'Đi thẳng, ăn chéo, về đích hóa Hậu',
  nextLesson: 'nhap-mon-8.html',
  sections: [
    {
      slug: 'cach-di', title: '♙ Tốt đi thế nào?', short: 'Cách đi',
      blocks: [
        { type: 'text', html: `
          <ul class="tips">
            <li>⬆️ Tốt đi <b>thẳng về phía trước 1 ô</b>. Không bao giờ đi lùi.</li>
            <li>2️⃣ Lần <b>đầu tiên</b> đi, Tốt được chọn đi 1 hoặc 2 ô.</li>
            <li>🚧 Có quân đứng ngay trước mặt thì Tốt <b>bị chặn</b>.</li>
            <li>↗️ Tốt <b>ăn chéo</b> 1 ô về phía trước.</li>
            <li>⚖️ Tốt đáng <b>1 điểm</b> – nhưng về đích sẽ thành quân mạnh!</li>
          </ul>` },
        {
          type: 'explore', fen: '4k3/8/8/3p4/3P4/8/4P3/4K3 w - - 0 1',
          html: '<p>Bấm vào <b>Tốt e2</b> và <b>Tốt d4</b>.</p>',
          prompt: 'Bấm vào Tốt e2, rồi Tốt d4.',
          squares: {
            e2: '♙ Tốt e2 chưa đi lần nào nên được chọn <b>1 ô (e3) hoặc 2 ô (e4)</b>.',
            d4: '♙ Tốt d4 <b>bị chặn</b>: Tốt d5 của Đen đứng ngay trước mặt. Tốt không ăn thẳng được!',
          },
          verify: { zero: ['d4'], count: { e2: 2 } },
        },
      ],
    },
    {
      slug: 'an-cheo', title: '↗️ Tốt ăn chéo', short: 'Ăn chéo',
      blocks: [
        {
          type: 'puzzle', tag: '🧩 Câu đố 1', fen: '4k3/8/8/3n4/4P3/8/8/4K3 w - - 0 1',
          html: 'Tốt e4 <b>ăn Mã</b> d5!',
          solution: ['exd5'], verify: { free: true },
          hint: 'Tốt ăn chéo lên bên trái.',
          success: '<b>{{exd5}}</b> – Tốt 1 điểm ăn Mã 3 điểm!',
        },
      ],
    },
    {
      slug: 'phong-cap', title: '👑 Phong cấp', short: 'Phong cấp',
      blocks: [
        { type: 'text', html: '<p>Tốt đi tới <b>hàng cuối</b> (hàng 8 với Trắng, hàng 1 với Đen) sẽ được <b>phong cấp</b>: đổi thành Hậu, Xe, Tượng hoặc Mã. Hầu như luôn chọn <b>Hậu</b>! (Không được đổi thành Vua.)</p>' },
        {
          type: 'puzzle', tag: '🧩 Câu đố 2', fen: '8/4P3/8/8/8/k7/8/4K3 w - - 0 1',
          html: 'Đưa Tốt e7 về đích để <b>có Hậu mới</b>!',
          solution: ['e8=Q'],
          hint: 'Tốt đi thẳng lên ô e8.',
          success: 'Tốt đã phong cấp thành <b>Hậu</b>!',
        },
      ],
    },
    {
      slug: 'qua-duong', title: '🏃 Bắt tốt qua đường', short: 'Qua đường',
      blocks: [
        { type: 'text', html: '<p>Luật đặc biệt: Tốt đối thủ đi <b>2 ô</b> và dừng <b>ngay cạnh</b> Tốt của con. Ngay nước tiếp theo, con được ăn nó <b>như thể nó chỉ đi 1 ô</b>. Chỉ được làm ngay nước đó thôi!</p>' },
        {
          type: 'replay', fen: '4k3/3p4/8/4P3/8/8/8/4K3 b - - 0 1', sans: ['d5', 'exd6'],
          notes: {
            0: 'Đen sắp đi Tốt d7 lên 2 ô. Bấm “Tiếp”.',
            1: 'Tốt Đen đi <b>d7–d5</b>, dừng ngay cạnh Tốt e5 của Trắng.',
            2: '🏃 <b>{{exd6}}</b> – Trắng bắt tốt qua đường: Tốt e5 đi chéo tới d6 và ăn Tốt d5.',
          },
          marks: { 2: { red: ['d5'] } },
        },
        {
          type: 'puzzle', tag: '🧩 Câu đố 3', fen: '4k3/8/8/4Pp2/8/8/8/4K3 w - f6 0 1',
          html: 'Đen vừa đi Tốt <b>f7–f5</b>. Hãy <b>bắt tốt qua đường</b>!',
          solution: ['exf6'],
          hint: 'Tốt e5 đi chéo tới ô f6.',
          success: '<b>{{exf6}}</b> – Bắt tốt qua đường!',
        },
      ],
    },
    {
      slug: 'on-tap', title: '✏️ Ôn tập', short: 'Ôn tập',
      blocks: [
        { type: 'quiz', q: 'Câu 1. Tốt có đi lùi được không?', options: [
          { label: 'Không bao giờ', ok: true, why: 'Đúng! Tốt chỉ tiến.' },
          { label: 'Được', why: 'Chưa đúng.' },
        ] },
        { type: 'quiz', q: 'Câu 2. Tốt ăn quân theo hướng nào?', options: [
          { label: 'Thẳng', why: 'Chưa đúng. Tốt đi thẳng nhưng ăn chéo.' },
          { label: 'Chéo về phía trước', ok: true, why: 'Đúng!' },
        ] },
        { type: 'quiz', q: 'Câu 3. Tốt về đích KHÔNG được đổi thành quân nào?', options: [
          { label: 'Hậu', why: 'Chưa đúng. Đổi thành Hậu là tốt nhất.' },
          { label: 'Mã', why: 'Chưa đúng. Đổi thành Mã được.' },
          { label: 'Vua', ok: true, why: 'Đúng! Mỗi bên chỉ có 1 Vua.' },
        ] },
      ],
    },
  ],
};
