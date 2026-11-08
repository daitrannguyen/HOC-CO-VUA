// Bài 2 · Bẫy khai cuộc & cách phòng thủ
// Nước đi viết bằng SAN tiếng Anh (cho chess.js). Trong lời giảng, {{Qh5}} sẽ hiện thành Hh5.
export default {
  no: 2, part: 1, icon: '🪤',
  title: 'Bẫy khai cuộc',
  sub: 'Nhận ra bẫy – và biết cách thoát',
  sections: [
    {
      slug: 'mo-dau', title: '👋 Bẫy là gì?', short: 'Bẫy là gì?',
      blocks: [
        { type: 'text', html: `
          <p><b>Bẫy</b> là nước đi gài sẵn: nếu đối thủ sơ ý, họ sẽ thua ngay – có khi chỉ sau vài nước!</p>
          <ul class="tips">
            <li>👀 <b>Bí kíp 1:</b> Sau mỗi nước của đối thủ, hỏi: <b>“Bạn vừa đe dọa gì?”</b></li>
            <li>🛡️ <b>Bí kíp 2:</b> Giữ ô <b>f7</b> (Đen) và <b>f2</b> (Trắng) – đầu ván ô này chỉ có Vua bảo vệ.</li>
            <li>🚫 <b>Bí kíp 3:</b> Đừng đi tốt <b>f</b> và tốt <b>g</b> sớm – Vua sẽ bị hở.</li>
            <li>🍬 <b>Bí kíp 4:</b> Quân “cho không” có thể là <b>mồi bẫy</b>. Kiểm tra trước khi ăn!</li>
          </ul>` },
      ],
    },
    {
      slug: 'bay-4-nuoc', title: '🪤 Bẫy 4 nước', short: 'Bẫy 4 nước',
      blocks: [
        {
          type: 'replay',
          sans: ['e4', 'e5', 'Qh5', 'Nc6', 'Bc4', 'Nf6', 'Qxf7#'],
          suffix: { 6: '??' },
          notes: {
            0: 'Xem Trắng gài bẫy vào ô <b>f7</b>. Bấm “Tiếp”.',
            3: '<b>{{Qh5}}</b> – Hậu ra sớm, nhắm vào ô f7.',
            5: '<b>{{Bc4}}</b> – Tượng cũng nhắm vào f7. Hai quân cùng tấn công!',
            6: '😱 <b>{{Nf6}}??</b> – Đen đuổi Hậu nhưng quên bảo vệ f7.',
            7: '💥 <b>{{Qxf7#}}</b> – Chiếu hết! Hậu được Tượng c4 bảo vệ.',
          },
          bad: [6, 7],
          marks: { 5: { red: ['f7'] }, 7: { red: ['f7'] } },
          lesson: 'Khi thấy Hậu và Tượng cùng nhắm vào f7, hãy bảo vệ ngay!',
        },
        {
          type: 'puzzle', tag: '🧩 Câu đố 1', after: ['e4', 'e5', 'Qh5', 'Nc6', 'Bc4', 'Nf6'],
          html: 'Đen vừa đi {{Nf6}}?? Con hãy <b>chiếu hết</b> trong 1 nước!',
          solution: ['Qxf7#'], hint: 'Hậu h5 và Tượng c4 cùng nhắm vào một ô…',
          success: '<b>{{Qxf7#}}</b> – Chiếu hết! Con đã hiểu bẫy 4 nước.',
        },
        {
          type: 'puzzle', tag: '🛡️ Câu đố 2', after: ['e4', 'e5', 'Qh5', 'Nc6', 'Bc4'],
          html: 'Trắng đang dọa {{Qxf7#}}. Con hãy đi một nước để <b>Đen không bị chiếu hết</b>.',
          defend: true, accept: ['g6', 'Qe7', 'Qf6'],
          hint: 'Đuổi Hậu Trắng đi (tốt g), hoặc dùng Hậu Đen bảo vệ f7.',
          success: 'Tốt lắm! Sau nước này Trắng <b>không chiếu hết</b> được nữa.',
        },
      ],
    },
    {
      slug: 'hai-nuoc', title: '⚡ Chiếu hết 2 nước', short: '2 nước',
      blocks: [
        {
          type: 'replay', sans: ['f3', 'e5', 'g4', 'Qh4#'],
          suffix: { 1: '?', 3: '??' },
          notes: {
            0: 'Ván cờ ngắn nhất: chỉ 2 nước là hết! Bấm “Tiếp”.',
            1: '😬 <b>1.f3?</b> – Trắng đi tốt f, mở đường chéo tới Vua.',
            2: '<b>1…e5</b> – Đen mở đường cho Hậu.',
            3: '😱 <b>2.g4??</b> – Đường chéo h4–e1 trống trơn!',
            4: '💥 <b>2…{{Qh4#}}</b> – Chiếu hết! Vua Trắng không còn đường chạy.',
          },
          bad: [3, 4],
          marks: { 4: { red: ['e1'] } },
          lesson: 'Đầu ván đừng đi tốt <b>f</b> và tốt <b>g</b>.',
        },
        {
          type: 'puzzle', tag: '🧩 Câu đố 3', after: ['f3', 'e5', 'g4'],
          html: 'Trắng vừa đi 1.f3 và 2.g4. Con cầm quân Đen, hãy <b>chiếu hết</b> ngay!',
          solution: ['Qh4#'], hint: 'Hậu Đen đi theo đường chéo tới gần Vua Trắng.',
          success: '<b>2…{{Qh4#}}</b> – Chiếu hết chỉ sau 2 nước!',
        },
      ],
    },
    {
      slug: 'legal', title: '🍬 Bẫy Légal', short: 'Bẫy Légal',
      blocks: [
        {
          type: 'replay',
          sans: ['e4', 'e5', 'Nf3', 'd6', 'Bc4', 'Bg4', 'Nc3', 'g6', 'Nxe5', 'Bxd1', 'Bxf7+', 'Ke7', 'Nd5#'],
          suffix: { 8: '?', 9: '!', 10: '??' },
          notes: {
            0: 'Bẫy nổi tiếng: Trắng cho Đen ăn Hậu… rồi chiếu hết! Bấm “Tiếp”.',
            6: '<b>3…{{Bg4}}</b> – Tượng Đen ghim Mã f3 vào Hậu d1.',
            8: '<b>4…g6?</b> – Đen chưa nhìn ra nguy hiểm.',
            9: '😮 <b>5.{{Nxe5}}!</b> – Trắng bỏ mặc Hậu cho Đen ăn!',
            10: '🍬 <b>5…{{Bxd1}}??</b> – Đen tham ăn Hậu… đây chính là mồi bẫy!',
            11: '<b>6.{{Bxf7+}}</b> – Chiếu! Vua Đen chỉ còn ô e7.',
            12: '<b>6…{{Ke7}}</b> – Vua Đen bị bắt phải đi.',
            13: '💥 <b>7.{{Nd5#}}</b> – Chiếu hết! Trắng mất Hậu nhưng vẫn chiếu hết bằng Mã và Tượng.',
          },
          bad: [10, 13],
          marks: { 13: { red: ['e7'] } },
          lesson: 'Trước khi ăn quân “cho không”, hỏi: “Sau đó Vua mình có an toàn không?”',
        },
        {
          type: 'puzzle', tag: '🧩 Câu đố 4', after: ['e4', 'e5', 'Nf3', 'd6', 'Bc4', 'Bg4', 'Nc3', 'g6', 'Nxe5', 'Bxd1'],
          html: 'Đen vừa tham ăn Hậu ({{Bxd1}}). Con hãy <b>chiếu hết trong 2 nước</b>!',
          solution: ['Bxf7+', 'Ke7', 'Nd5#'],
          hint: 'Nước đầu: Tượng c4 ăn tốt f7 và chiếu.',
          next: 'Giờ dùng Mã để chiếu hết!',
          success: '<b>7.{{Nd5#}}</b> – Chiếu hết! Con đã làm được bẫy Légal.',
        },
      ],
    },
    {
      slug: 'on-tap', title: '✏️ Ôn tập', short: 'Ôn tập',
      blocks: [
        { type: 'quiz', q: 'Câu 1. Đầu ván, ô yếu nhất của Đen là ô nào?', options: [
          { label: 'f7', ok: true, why: 'Đúng! Đầu ván ô f7 chỉ có Vua bảo vệ.' },
          { label: 'e5', why: 'Chưa đúng. Hãy nhớ lại bẫy 4 nước: Trắng nhắm vào ô nào?' },
          { label: 'd5', why: 'Chưa đúng. Hãy nhớ lại bẫy 4 nước: Trắng nhắm vào ô nào?' },
          { label: 'h7', why: 'Chưa đúng. Hãy nhớ lại bẫy 4 nước: Trắng nhắm vào ô nào?' },
        ] },
        { type: 'quiz', q: 'Câu 2. Đầu ván, nên tránh đi những tốt nào để Vua không bị hở?', options: [
          { label: 'Tốt e và d', why: 'Chưa đúng. Tốt e, d là tốt trung tâm – nên đi!' },
          { label: 'Tốt f và g', ok: true, why: 'Đúng! Nhớ ván chiếu hết 2 nước: 1.f3 và 2.g4.' },
        ] },
        { type: 'quiz', q: 'Câu 3. Đối thủ để Hậu cho con ăn miễn phí. Con nên làm gì trước?', options: [
          { label: 'Ăn ngay!', why: 'Cẩn thận! Đó có thể là mồi bẫy, giống bẫy Légal.' },
          { label: 'Kiểm tra Vua mình có an toàn không', ok: true, why: 'Đúng! Kiểm tra trước rồi mới ăn.' },
        ] },
      ],
    },
  ],
};
