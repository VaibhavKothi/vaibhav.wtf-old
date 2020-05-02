// Service Worker - For Creating the Cache for Offline Purpose
/*
TODO:
    filesToCache can be reworked in other fashion
    so it automatically caches everything without hardcoding file paths.
*/

var cacheName = 'vaibhav-cache';
var filesToCache = ['/', '/index.html'];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('notificationclick', function(e) {
  var notification = e.notification;
  var primaryKey = notification.data.primaryKey;
  var action = e.action;

  if (action === 'close') {
    notification.close();
  } else {
    clients.openWindow('vaibhav.wtf/projects');
    notification.close();
  }
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
