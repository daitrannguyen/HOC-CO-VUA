// Bài 18 · Kế hoạch trung cuộc
export default {
  no: 18, part: 4, icon: '🧭',
  title: 'Kế hoạch trung cuộc',
  sub: 'Ra quân xong rồi – đi gì tiếp?',
  nextLesson: 'bai-19.html',
  sections: [
    {
      slug: 'ba-cau-hoi', title: '🧭 3 câu hỏi mỗi nước', short: '3 câu hỏi',
      blocks: [
        { type: 'text', html: `
          <p>Khai cuộc xong (đã chiếm giữa, ra quân, nhập thành), trước mỗi nước con tự hỏi:</p>
          <ul class="tips">
            <li>👀 <b>1. Đối thủ đang dọa gì?</b> Có quân nào của mình đang bị tấn công, bị bỏ ngỏ?</li>
            <li>🎯 <b>2. Mình có đòn gì không?</b> Có chiếu, có ăn quân miễn phí, có chĩa đôi không?</li>
            <li>🛠️ <b>3. Quân nào của mình kém nhất?</b> Đưa nó tới ô tốt hơn: Mã vào giữa, Xe lên cột mở.</li>
          </ul>` },
      ],
    },
    {
      slug: 'doi-thu-doa', title: '👀 Đối thủ dọa gì?', short: 'Bị dọa',
      blocks: [
        {
          type: 'puzzle', tag: '🧩 Câu đố 1', fen: '4k3/8/8/8/3p4/4B3/8/4K3 w - - 0 1',
          html: 'Tốt d4 của Đen đang dọa ăn Tượng e3. Làm gì bây giờ?',
          solution: ['Bxd4'], verify: { free: true },
          hint: 'Tốt d4 có ai bảo vệ không?',
          wrong: 'Chạy Tượng cũng được, nhưng có nước còn tốt hơn: Tốt d4 không ai bảo vệ!',
          success: '<b>{{Bxd4}}</b> – Vừa thoát bị dọa, vừa ăn Tốt miễn phí!',
        },
      ],
    },
    {
      slug: 'quan-kem', title: '🛠️ Cải thiện quân kém', short: 'Quân kém',
      blocks: [
        {
          type: 'puzzle', tag: '🧩 Câu đố 2', fen: '4k3/pp3ppp/8/8/8/N7/PP3PPP/4K3 w - - 0 1',
          html: 'Mã a3 đang đứng ở rìa bàn cờ. Đưa Mã tới <b>ô tốt hơn</b>, gần giữa bàn.',
          accept: ['Nc4', 'Nb5', 'Nc2'],
          hint: 'Mã a3 nhảy về phía giữa bàn: c4, b5 hoặc c2.',
          wrong: 'Ô đó vẫn chưa gần giữa bàn. Thử lại nhé!',
          success: 'Mã đã rời rìa bàn, đi được nhiều ô hơn!',
        },
        {
          type: 'puzzle', tag: '🧩 Câu đố 3', fen: 'r4rk1/ppp2ppp/2n2n2/8/8/2N2N2/PPP2PPP/R4RK1 w - - 0 1',
          html: 'Cột d và cột e không còn Tốt nào – đó là <b>cột mở</b>. Đưa một Xe lên cột mở!',
          accept: ['Rad1', 'Rfd1', 'Rae1', 'Rfe1'],
          hint: 'Đưa Xe a1 hoặc Xe f1 sang cột d hoặc cột e.',
          wrong: 'Xe nên đứng trên cột không có Tốt chặn: cột d hoặc cột e.',
          success: 'Xe đã lên cột mở – giờ Xe nhìn thẳng sang hàng 8 của Đen!',
        },
      ],
    },
    {
      slug: 'on-tap', title: '✏️ Ôn tập', short: 'Ôn tập',
      blocks: [
        { type: 'quiz', q: 'Câu 1. Trước mỗi nước, câu hỏi đầu tiên nên là gì?', options: [
          { label: 'Đối thủ đang dọa gì?', ok: true, why: 'Đúng! Kiểm tra nguy hiểm trước.' },
          { label: 'Mình đi quân nào cho vui?', why: 'Chưa đúng. Luôn xem đối thủ dọa gì trước.' },
        ] },
        { type: 'quiz', q: 'Câu 2. Cột mở là cột như thế nào?', options: [
          { label: 'Cột không còn Tốt nào', ok: true, why: 'Đúng! Xe trên cột mở rất mạnh.' },
          { label: 'Cột có nhiều Tốt', why: 'Chưa đúng. Cột có Tốt là cột đóng.' },
        ] },
        { type: 'quiz', q: 'Câu 3. Quân nào thích đứng trên cột mở nhất?', options: [
          { label: 'Mã', why: 'Chưa đúng. Mã thích ô gần giữa bàn.' },
          { label: 'Xe', ok: true, why: 'Đúng!' },
        ] },
      ],
    },
  ],
};
