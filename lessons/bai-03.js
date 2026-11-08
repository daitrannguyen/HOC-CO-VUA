// Bài 3 · Khai cuộc Ý cho Trắng
export default {
  no: 3, part: 1, icon: '♗',
  title: 'Khai cuộc Ý',
  sub: '1.e4 e5 2.Mf3 Mc6 3.Tc4 – khai cuộc đẹp cho quân Trắng',
  nextLesson: 'bai-4.html',
  sections: [
    {
      slug: 'mo-dau', title: '🇮🇹 Khai cuộc Ý là gì?', short: 'Là gì?',
      blocks: [
        { type: 'text', html: `
          <p><b>Khai cuộc Ý</b> bắt đầu bằng <b>1.e4 e5 2.{{Nf3}} {{Nc6}} 3.{{Bc4}}</b>. Mỗi nước của Trắng đều theo đúng 3 nguyên tắc ở Bài 1:</p>
          <ul class="tips">
            <li>🟨 <b>1.e4</b> – chiếm trung tâm, mở đường cho Tượng và Hậu.</li>
            <li>🐴 <b>2.{{Nf3}}</b> – ra quân, tấn công tốt e5.</li>
            <li>🎯 <b>3.{{Bc4}}</b> – ra quân, Tượng nhắm vào ô yếu <b>f7</b>.</li>
            <li>🏰 Tiếp theo: <b>nhập thành</b> sớm để giấu Vua.</li>
          </ul>` },
        {
          type: 'replay', sans: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4'],
          notes: {
            1: '<b>1.e4</b> – Trắng chiếm trung tâm.',
            2: '<b>1…e5</b> – Đen cũng chiếm trung tâm.',
            3: '<b>2.{{Nf3}}</b> – Mã ra trận, tấn công tốt e5.',
            4: '<b>2…{{Nc6}}</b> – Mã Đen bảo vệ tốt e5.',
            5: '<b>3.{{Bc4}}</b> – Tượng nhắm vào ô f7. Đây là khai cuộc Ý!',
          },
          marks: { 3: { red: ['e5'] }, 5: { red: ['f7'] } },
        },
      ],
    },
    {
      slug: 'ke-hoach-1', title: '🏗️ Kế hoạch 1: c3 rồi d4', short: 'c3 – d4',
      blocks: [
        {
          type: 'replay', sans: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'c3', 'Nf6', 'd4'],
          notes: {
            6: '<b>3…{{Bc5}}</b> – Đen cũng ra Tượng nhắm vào f2.',
            7: '<b>4.c3</b> – Tốt c3 chuẩn bị cho tốt d tiến lên d4.',
            8: '<b>4…{{Nf6}}</b> – Đen ra quân, tấn công tốt e4.',
            9: '<b>5.d4</b> – Trắng có 2 tốt ở giữa (e4, d4): trung tâm mạnh!',
          },
          marks: { 9: { yellow: ['d4', 'e4', 'd5', 'e5'] } },
          lesson: 'Tốt c3 giúp tốt d4 được bảo vệ, xây trung tâm vững chắc.',
        },
      ],
    },
    {
      slug: 'ke-hoach-2', title: '🐢 Kế hoạch 2: chậm mà chắc', short: 'd3 – O-O',
      blocks: [
        {
          type: 'replay', sans: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'O-O', 'Nf6', 'd3', 'd6', 'c3', 'O-O'],
          notes: {
            7: '<b>4.O-O</b> – Trắng nhập thành sớm, Vua an toàn.',
            9: '<b>5.d3</b> – Tốt d3 bảo vệ tốt e4 và mở đường cho Tượng c1.',
            11: '<b>6.c3</b> – Chuẩn bị tiến d4 sau này.',
            12: '<b>6…O-O</b> – Cả hai bên đều đã giấu Vua. Ván cờ cân bằng.',
          },
          lesson: 'Đây chính là ván mẫu ở Bài 1. Ra quân, nhập thành rồi mới tính chuyện tấn công.',
        },
      ],
    },
    {
      slug: 'canh-bao', title: '⚠️ Cẩn thận: Đen đi 3…Mf6', short: 'Cẩn thận',
      blocks: [
        {
          type: 'replay', sans: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Nf6', 'Ng5', 'd5'],
          notes: {
            6: '<b>3…{{Nf6}}</b> – Đen tấn công tốt e4 thay vì ra Tượng.',
            7: '<b>4.{{Ng5}}</b> – Mã và Tượng cùng nhắm vào f7!',
            8: '<b>4…d5</b> – Đen chặn đường Tượng c4. Đây là cách phòng thủ đúng.',
          },
          marks: { 7: { red: ['f7'] } },
          lesson: 'Khi Mã và Tượng cùng nhắm f7, Đen phải phòng thủ ngay. Tốt d5 chặn đường chéo của Tượng.',
        },
      ],
    },
    {
      slug: 'thuc-hanh', title: '🧩 Thực hành', short: 'Thực hành',
      blocks: [
        {
          type: 'puzzle', tag: '🧩 Câu đố 1', after: ['e4', 'e5'],
          html: 'Trắng đi nước 2: hãy <b>ra quân</b> và tấn công tốt e5.',
          solution: ['Nf3'], hint: 'Mã g1 nhảy về gần trung tâm.',
          wrong: 'Nhớ: Mã ra trước, đừng ra Hậu sớm.',
          success: '<b>2.{{Nf3}}</b> – Mã ra trận và tấn công tốt e5!',
        },
        {
          type: 'puzzle', tag: '🧩 Câu đố 2', after: ['e4', 'e5', 'Nf3', 'Nc6'],
          html: 'Trắng đi nước 3 của <b>khai cuộc Ý</b>: Tượng nhắm vào ô f7.',
          solution: ['Bc4'], hint: 'Tượng f1 đi chéo tới cột c.',
          success: '<b>3.{{Bc4}}</b> – Chính là khai cuộc Ý!',
        },
        {
          type: 'puzzle', tag: '🧩 Câu đố 3', after: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5'],
          html: 'Mã và Tượng đã ra. Giờ hãy <b>giấu Vua</b>!',
          solution: ['O-O'], hint: 'Vua đi 2 ô sang phải, Xe nhảy qua.',
          success: '<b>4.O-O</b> – Nhập thành! Vua an toàn rồi.',
        },
        {
          type: 'puzzle', tag: '🧩 Câu đố 4', after: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4', 'Bc5', 'c3', 'Nf6'],
          html: 'Trắng đã đi c3. Giờ hãy <b>xây trung tâm</b> bằng tốt d!',
          solution: ['d4'], hint: 'Tốt d2 tiến 2 ô.',
          success: '<b>5.d4</b> – Hai tốt e4, d4 đứng cạnh nhau: trung tâm mạnh!',
        },
      ],
    },
    {
      slug: 'on-tap', title: '✏️ Ôn tập', short: 'Ôn tập',
      blocks: [
        { type: 'quiz', q: 'Câu 1. Trong khai cuộc Ý, Tượng c4 nhắm vào ô nào của Đen?', options: [
          { label: 'f7', ok: true, why: 'Đúng! Ô f7 đầu ván chỉ có Vua bảo vệ.' },
          { label: 'h7', why: 'Chưa đúng. Nhìn đường chéo c4–d5–e6–…' },
          { label: 'a7', why: 'Chưa đúng. Nhìn đường chéo c4–d5–e6–…' },
        ] },
        { type: 'quiz', q: 'Câu 2. Nước 4.c3 chuẩn bị cho nước nào?', options: [
          { label: 'd4', ok: true, why: 'Đúng! Tốt c3 bảo vệ ô d4.' },
          { label: 'Hậu ra a4', why: 'Chưa đúng. Đừng ra Hậu sớm – c3 chuẩn bị cho tốt d4.' },
        ] },
        { type: 'quiz', q: 'Câu 3. Sau 3…Mf6 4.Mg5, Đen nên làm gì?', options: [
          { label: 'Chặn bằng 4…d5', ok: true, why: 'Đúng! Tốt d5 chặn đường Tượng c4 nhắm f7.' },
          { label: 'Mặc kệ, đi a6', why: 'Nguy hiểm! Mã và Tượng đang cùng nhắm f7.' },
        ] },
      ],
    },
  ],
};
