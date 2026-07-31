const CACHE_NAME = 'ot-calc-universal-v5';

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(async (cache) => {
            const urlsToCache = [
                './',
                './index.html',
                './manifest.json',
                'https://cdn-icons-png.flaticon.com/512/2920/2920323.png'
            ];
            
            return Promise.all(
                urlsToCache.map((url) => {
                    return cache.add(url).catch((err) => console.log('Failed to cache:', url));
                })
            );
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request).then((networkResponse) => {
                if (networkResponse && networkResponse.status === 200) {
                    const cloned = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(event.request, cloned));
                }
                return networkResponse;
            }).catch(() => {
                return caches.match('./index.html') || caches.match('./');
            });
        })
    );
});
