// WebPenson Service Worker
const CACHE_NAME = 'webpenson-v1';
const OFFLINE_URL = '/offline.html';

// 需要缓存的静态资源
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/offline.html',
  '/js/sql-formatter.min.js',
  '/tools/',
  '/tools/base64/',
  '/tools/json-formatter/',
  '/tools/unix-timestamp/',
  '/tools/url/',
  '/tools/color-converter/',
  '/tools/jwt/',
  '/tools/sql-formatter/',
  '/tools/text-case-converter/',
  '/tools/lorem-ipsum/',
  '/tools/password-strength/'
];

// 安装事件 - 预缓存核心资源
self.addEventListener('install', (event) => {
  console.log('[SW] Install event');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
      .catch((error) => {
        console.error('[SW] Failed to cache:', error);
      })
  );
});

// 激活事件 - 清理旧缓存
self.addEventListener('activate', (event) => {
  console.log('[SW] Activate event');
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME)
            .map((name) => {
              console.log('[SW] Deleting old cache:', name);
              return caches.delete(name);
            })
        );
      })
      .then(() => self.clients.claim())
  );
});

// 请求拦截 - 缓存优先策略
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // 只缓存同源请求
  if (url.origin !== location.origin) {
    return;
  }

  // 不缓存 POST、PUT、DELETE 等非 GET 请求
  if (request.method !== 'GET') {
    return;
  }

  // 导航请求 (HTML 页面) - 网络优先，缓存回退
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // 缓存新的响应
          const responseClone = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => cache.put(request, responseClone));
          return response;
        })
        .catch(() => {
          // 网络失败时返回缓存或离线页面
          return caches.match(request)
            .then((cachedResponse) => cachedResponse || caches.match(OFFLINE_URL));
        })
    );
    return;
  }

  // 静态资源 - 缓存优先，网络回退
  event.respondWith(
    caches.match(request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          // 后台更新缓存
          fetch(request)
            .then((response) => {
              caches.open(CACHE_NAME)
                .then((cache) => cache.put(request, response));
            })
            .catch(() => {});
          return cachedResponse;
        }

        // 缓存未命中，从网络获取
        return fetch(request)
          .then((response) => {
            // 缓存新资源
            const responseClone = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => cache.put(request, responseClone));
            return response;
          });
      })
  );
});

// 后台同步 (可选)
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync:', event.tag);
});

// 推送通知 (可选)
self.addEventListener('push', (event) => {
  console.log('[SW] Push event received');
});
