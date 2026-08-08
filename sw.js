const C='sageticker-v2';
const ASSETS=['.','index.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-180.png','favicon-32.png','og-image.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(ASSETS)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;
  if(e.request.mode==='navigate'||e.request.url.endsWith('index.html')){
    /* NETWORK FIRST for the page itself: new deploys always show fresh; cache only as offline fallback */
    e.respondWith(fetch(e.request).then(res=>{const cp=res.clone();caches.open(C).then(c=>c.put(e.request,cp));return res})
      .catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html'))));
    return;
  }
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const cp=res.clone();caches.open(C).then(c=>c.put(e.request,cp));return res})));
});