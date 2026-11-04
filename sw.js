const CACHE_NAME = 'dentvoice-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Пропускаємо мережеві запити
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
