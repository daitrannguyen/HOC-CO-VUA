// Nhập môn 6 · Mã
export default {
  no: 'NM6', label: 'Nhập môn 6', part: 0, icon: '♘',
  title: 'Quân Mã',
  sub: 'Nhảy hình chữ L, qua đầu quân khác',
  nextLesson: 'nhap-mon-7.html',
  sections: [
    {
      slug: 'cach-di', title: '♘ Mã đi thế nào?', short: 'Cách đi',
      blocks: [
        { type: 'text', html: `
          <ul class="tips">
            <li>🔤 Mã đi hình chữ <b>L</b>: 2 ô theo một hướng, rồi rẽ 1 ô.</li>
            <li>🦘 Mã là quân <b>duy nhất nhảy qua</b> quân khác.</li>
            <li>🎨 Mỗi nước Mã đều <b>đổi màu ô</b>: đang ở ô sáng sẽ nhảy sang ô tối.</li>
            <li>⚖️ Mã đáng <b>3 điểm</b>.</li>
          </ul>` },
        {
          type: 'explore', fen: '4k3/8/8/8/4N3/8/8/N3K3 w - - 0 1',
          html: '<p>Một Mã ở <b>giữa bàn (e4)</b>, một Mã ở <b>góc (a1)</b>. Bấm từng con.</p>',
          prompt: 'Bấm vào Mã e4, rồi Mã a1.',
          verify: { count: { e4: 8, a1: 2 } },
          squares: {
            e4: '♘ Mã ở giữa đi được <b>8 ô</b>.',
            a1: '♘ Mã ở góc chỉ đi được <b>2 ô</b>. “Mã ở rìa bàn – buồn như mất bạn”!',
          },
        },
      ],
    },
    {
      slug: 'di-tuan', title: '🗺️ Mã đi tuần', short: 'Đi tuần',
      blocks: [
        {
          type: 'puzzle', tag: '🧩 Câu đố 1', fen: 'k7/8/8/8/8/8/8/1N4K1 w - - 0 1',
          html: 'Đưa Mã b1 tới ô vàng <b>d5</b> trong <b>2 nước</b>.',
          yellow: ['d5'],
          solution: ['Nc3', 'Kb8', 'Nd5'],
          hint: 'Nước đầu, Mã nhảy về phía giữa bàn: ô c3.',
          next: 'Còn 1 nước nữa tới d5!',
          success: 'Mã đã tới <b>d5</b> sau 2 nước: b1 → c3 → d5.',
        },
        {
          type: 'puzzle', tag: '🧩 Câu đố 2', fen: '4k3/8/8/8/2r5/2PPP3/2PNP3/4K3 w - - 0 1',
          html: 'Mã d2 bị Tốt bao quanh. Nhưng Mã <b>nhảy qua được</b>! Hãy ăn Xe c4.',
          solution: ['Nxc4'], verify: { free: true },
          hint: 'Mã d2 nhảy hình chữ L lên c4.',
          success: '<b>{{Nxc4}}</b> – Mã nhảy qua Tốt và ăn Xe!',
        },
      ],
    },
    {
      slug: 'on-tap', title: '✏️ Ôn tập', short: 'Ôn tập',
      blocks: [
        { type: 'quiz', q: 'Câu 1. Quân nào nhảy được qua quân khác?', options: [
          { label: 'Mã', ok: true, why: 'Đúng! Chỉ có Mã.' },
          { label: 'Xe', why: 'Chưa đúng.' },
          { label: 'Hậu', why: 'Chưa đúng.' },
        ] },
        { type: 'quiz', q: 'Câu 2. Mã đang ở ô sáng. Nước sau Mã sẽ ở ô màu gì?', options: [
          { label: 'Ô sáng', why: 'Chưa đúng. Mỗi nước Mã đều đổi màu ô.' },
          { label: 'Ô tối', ok: true, why: 'Đúng!' },
        ] },
        { type: 'quiz', q: 'Câu 3. Mã nên đứng ở đâu?', options: [
          { label: 'Ở rìa bàn cờ', why: 'Chưa đúng. Ở rìa Mã đi được ít ô.' },
          { label: 'Gần giữa bàn cờ', ok: true, why: 'Đúng! Ở giữa Mã đi được tới 8 ô.' },
        ] },
      ],
    },
  ],
};
