// const staticCacheName = 'soultravel-cache-v1';
// const dynamicCache = 'soultravel-dynamic-cache-v1';
// const assets = [
//   '/',
//   '/index.html',
//   '/css/main.css',
//   '/js/app.js',
//   '/css/normalize.css',
//   '/css/animate.css',
//   '/img/bg.webp',
//   '/img/bg.jpg',
//   '/img/Tropical.mp4',
//   '/img/Tropical.webm',
//   'https://fonts.googleapis.com/css?family=Rubik:300,400,500',
//   'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js',
//   'https://unpkg.com/ionicons@4.2.4/dist/ionicons.js',
//   'https://maps.google.com/maps/api/js?key=AIzaSyBRo0JIDlE4GOlbO9j8t18EnRDqPEnfKyQ'
// ];

// self.addEventListener('install', evt => {
//   console.log("Service worker has been installed");
//   evt.waitUntil(
//     caches.open(staticCacheName).then(cache => {
//       console.log('caching shell assets');
//       cache.addAll(assets);
//     })
//   );
// });

// self.addEventListener('activate', evt => {
//   console.log("Serviceworker has been activated");
//   evt.waitUntil(
//     caches.keys().then(keys => {
//       console.log(keys);
//       return Promise.all(keys
//        .filter(key => key !== staticCacheName)
//        .map(key => caches.delete(key)) 
//         )
//     })
//   );
// });

// self.addEventListener('fetch', evt => {
//   console.log("fetch event", evt);
//   evt.respondWith(
//     caches.match(evt.request).then(cacheRes => {
//       return cacheRes || fetch(evt.request).then(fetchRes => {
//         return caches.open(dynamicCache).then (cache => {          
//         cache.put(evt.request.url, fetchRes.clone());        
//         return fetchRes;
//         })
//       });
//     })
//   );
// });