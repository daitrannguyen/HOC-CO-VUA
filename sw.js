// Service worker: cho phép mở app khi mất mạng sau lần truy cập đầu tiên.
// Đổi VERSION mỗi khi cập nhật bài học để máy học sinh tải bản mới.
const VERSION = 'hoc-co-vua-v5';
const CORE = [
  './',
  'index.html',
  'co-vua-khai-cuoc.html',
  ...Array.from({ length: 18 }, (_, i) => `bai-${i + 2}.html`),
  ...Array.from({ length: 18 }, (_, i) => `lessons/bai-${String(i + 2).padStart(2, '0')}.js`),
  ...Array.from({ length: 8 }, (_, i) => `nhap-mon-${i + 1}.html`),
  ...Array.from({ length: 8 }, (_, i) => `lessons/nm-0${i + 1}.js`),
  'assets/lesson.css', 'assets/lesson.js',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'https://cdn.jsdelivr.net/npm/chess.js@1.4.0/+esm',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Trang HTML: ưu tiên mạng (luôn có bản mới), mất mạng thì dùng bản đã lưu.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then(res => { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); return res; })
        .catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('index.html')))
    );
    return;
  }
  // Còn lại (chess.js, font, icon): ưu tiên bản đã lưu.
  if (url.origin === location.origin || /jsdelivr\.net|fonts\.(googleapis|gstatic)\.com/.test(url.host)) {
    e.respondWith(
      caches.match(req).then(hit => hit || fetch(req).then(res => {
        if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
        return res;
      }))
    );
  }
});
