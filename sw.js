const CACHE_NAME = 'glostraning-v1';
const BASE_PATH = '/Patriknp/glostraning/';

const urlsToCache = [
  BASE_PATH,
  BASE_PATH + 'index.html',
  BASE_PATH + 'manifest.json',
  BASE_PATH + 'icon-192.png',
  BASE_PATH + 'icon-512.png'
];

// Install event - cache files
self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache).catch(err => {
          console.warn('Some assets failed to cache:', err);
          // Don't fail the install if some assets can't be cached
          return Promise.resolve();
        });
      })
      .then(() => self.skipWaiting())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        
        return fetch(event.request)
          .then(response => {
            // Don't cache non-GET requests or cross-origin requests
            if (event.request.method !== 'GET' || !response) {
              return response;
            }
            
            // Clone the response
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              })
              .catch(() => {
                // Silently fail - network might be unavailable
              });
            
            return response;
          })
          .catch(() => {
            // Network request failed, try cache
            return caches.match(event.request);
          });
      }
    )
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker activating...');
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

