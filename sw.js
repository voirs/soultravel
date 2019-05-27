const staticCacheName = 'soultravel-cache-v1';
const dynamicCache = 'soultravel-dynamic-cache-v1';
const assets = [
  '/index.html',
  '/css/main.css',
  '/js/app.js'
  // 'https://fonts.googleapis.com/css?family=Rubik:300,400,500',
  // 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js',
  // 'https://unpkg.com/ionicons@4.2.4/dist/ionicons.js',
];

self.addEventListener('install', evt => {
  // console.log("Service worker has been installed");
  evt.waitUntil(
    caches.open(staticCacheName).then(cache => {
      // console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

self.addEventListener('activate', evt => {
  // console.log("Serviceworker has been activated");
  evt.waitUntil(
    caches.keys().then(keys => {
      // console.log(keys);
      return Promise.all(keys
       .filter(key => key !== staticCacheName)
       .map(key => caches.delete(key)) 
        )
    })
  );
});

self.addEventListener('fetch', evt => {
  // console.log("fetch event", evt);
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request).then(fetchRes => {
        return caches.open(dynamicCache).then (cache => {          
        cache.put(evt.request.url, fetchRes.clone());        
        return fetchRes;
        })
      });
    })
  );
});