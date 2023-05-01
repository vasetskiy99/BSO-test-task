const CACHE_NAME = 'my-cache-v1';

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(['/', '/index.html', '/index.js', '/styles.css', '/logo64.png', '/logo192.png']);
        })
    );
});
