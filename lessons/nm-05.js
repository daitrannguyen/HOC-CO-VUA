// Nhập môn 5 · Vua
export default {
  no: 'NM5', label: 'Nhập môn 5', part: 0, icon: '♔',
  title: 'Quân Vua',
  sub: 'Đi 1 ô – không bao giờ đi vào ô nguy hiểm',
  nextLesson: 'nhap-mon-6.html',
  sections: [
    {
      slug: 'cach-di', title: '♔ Vua đi thế nào?', short: 'Cách đi',
      blocks: [
        { type: 'text', html: `
          <ul class="tips">
            <li>🔲 Vua đi <b>1 ô</b> theo mọi hướng: ngang, dọc, chéo.</li>
            <li>⛔ Vua <b>không được</b> đi vào ô đang bị quân đối thủ tấn công.</li>
            <li>👑👑 Hai Vua <b>không bao giờ</b> đứng sát nhau.</li>
            <li>🏆 Vua bị chiếu mà không thoát được = <b>chiếu hết</b> = thua. Vì vậy Vua quý vô giá!</li>
          </ul>` },
        {
          type: 'explore', fen: '4k3/8/8/8/4K3/8/8/8 w - - 0 1',
          html: '<p>Bấm vào <b>Vua e4</b>.</p>',
          prompt: 'Bấm vào Vua e4.',
          verify: { count: { e4: 8 } },
          squares: { e4: '♔ Vua ở giữa bàn đi được <b>8 ô</b> xung quanh.' },
        },
      ],
    },
    {
      slug: 'o-nguy-hiem', title: '⛔ Ô nguy hiểm', short: 'Ô nguy hiểm',
      blocks: [
        {
          type: 'explore', fen: '4k3/8/8/8/4K3/8/8/3r4 w - - 0 1',
          html: '<p>Xe d1 của Đen kiểm soát cả <b>cột d</b>.</p>',
          prompt: 'Bấm vào Vua e4.',
          red: ['d3', 'd4', 'd5'],
          verify: { count: { e4: 5 } },
          squares: { e4: '♔ Vua không được đi vào d3, d4, d5 (ô đỏ) vì Xe d1 đang nhìn cột d. Chỉ còn <b>5 ô</b>.' },
        },
        {
          type: 'explore', fen: '8/8/4k3/8/4K3/8/8/8 w - - 0 1',
          html: '<p>Hai Vua đứng gần nhau.</p>',
          prompt: 'Bấm vào Vua e4.',
          red: ['d5', 'e5', 'f5'],
          verify: { count: { e4: 5 } },
          squares: { e4: '♔ Vua Trắng không được đi lên d5, e5, f5 vì sẽ đứng sát Vua Đen. Chỉ còn <b>5 ô</b>.' },
        },
      ],
    },
    {
      slug: 'an-quan', title: '🍽️ Vua cũng ăn quân', short: 'Ăn quân',
      blocks: [
        {
          type: 'puzzle', tag: '🧩 Câu đố 1', fen: '7k/8/8/2p2n2/3rK3/8/8/8 w - - 0 1',
          html: 'Vua Trắng đang bị Xe d4 chiếu! Hãy cho Vua <b>ăn một quân</b> để thoát chiếu.',
          solution: ['Kxf5'], verify: { free: true },
          hint: 'Xe d4 có Tốt c5 bảo vệ nên Vua không ăn được. Nhìn quân Đen còn lại cạnh Vua.',
          success: '<b>{{Kxf5}}</b> – Vua ăn Mã và thoát chiếu!',
        },
      ],
    },
    {
      slug: 'on-tap', title: '✏️ Ôn tập', short: 'Ôn tập',
      blocks: [
        { type: 'quiz', q: 'Câu 1. Mỗi nước Vua đi được mấy ô?', options: [
          { label: '1 ô', ok: true, why: 'Đúng! (Trừ khi nhập thành – học ở Nhập môn 8.)' },
          { label: 'Bao nhiêu cũng được', why: 'Chưa đúng. Đó là Hậu.' },
        ] },
        { type: 'quiz', q: 'Câu 2. Vua có được đi vào ô bị quân đối thủ tấn công không?', options: [
          { label: 'Được', why: 'Chưa đúng. Như vậy là tự nộp Vua.' },
          { label: 'Không được', ok: true, why: 'Đúng!' },
        ] },
        { type: 'quiz', q: 'Câu 3. Hai Vua có được đứng sát nhau không?', options: [
          { label: 'Không bao giờ', ok: true, why: 'Đúng!' },
          { label: 'Được', why: 'Chưa đúng. Vua nào bước tới cũng sẽ đi vào ô bị Vua kia tấn công.' },
        ] },
      ],
    },
  ],
};
