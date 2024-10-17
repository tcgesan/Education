// sw.js

const CACHE_NAME = 'my-app-cache-v1';
const urlsToCache = [
'/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/ChatBot.html',
    '/motivation.html',
    '/quiz.html',
    '/gk.html',
    '/library.html',
    '/profile.html',
    '/riddle.html',
    '/RandomFact.html',
    '/syllabus.html',
    '/Chatbot.css',
    '/quiz.css',
    '/fact.css',
    '/quiz.gk',
];

// Install the service worker and cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch assets from the cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Handle background sync
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-data') {
    event.waitUntil(syncData());
  }
});

// Function to sync data
async function syncData() {
  const cache = await caches.open(CACHE_NAME);
  const cachedData = await cache.match('/data-to-sync'); // Change to your specific endpoint

  if (cachedData) {
    const data = await cachedData.json();

    // Example: Send data to the server
    await fetch('/api/sync-endpoint', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Clear the synced data from the cache after syncing
    await cache.delete('/data-to-sync');
  }
}