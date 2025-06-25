'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ff293acc340c717d454cf20ccb7731e0",
"version.json": "33f25252f830ccfad5fec043cb176cf9",
"index.html": "ac10e23ead9040b055655698b8a1851e",
"/": "ac10e23ead9040b055655698b8a1851e",
"main.dart.js": "c0ba2879c33aaaed15821ef783c0a9c5",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "3230089f7c3c77a7a41d48521342cdf5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "901177adc6f677e9a121e2bf3ba33cb9",
"assets/AssetManifest.json": "a9f5a4a900878f2820d5be552fe8dc54",
"assets/NOTICES": "d32723301f60b42b3693315045cefc28",
"assets/FontManifest.json": "1b545861239c4ade226dc899a48500f4",
"assets/AssetManifest.bin.json": "91a7f0d322bb6d052182355c8ffbe2c5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/flutter_signin_button/assets/logos/google_dark.png": "c32e2778b1d6552b7b4055e49407036f",
"assets/packages/flutter_signin_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_dark.png": "937022ea241c167c8ce463d2ef7ed105",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_light.png": "8f10eb93525f0c0259c5e97271796b3c",
"assets/packages/flutter_signin_button/assets/logos/2.0x/facebook_new.png": "83bf0093719b2db2b16e2839aee1069f",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_dark.png": "ac553491f0002941159b405c2d37e8c6",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_light.png": "fe46d37e7d6a16ecd15d5908a795b4ee",
"assets/packages/flutter_signin_button/assets/logos/3.0x/facebook_new.png": "12531aa3541312b7e5ddd41223fc60cb",
"assets/packages/flutter_signin_button/assets/logos/facebook_new.png": "e1dff5c319a9d7898aee817f624336e3",
"assets/packages/mobkit_dashed_border/images/type2.png": "17a23dec244c3d1bb5b4ae67d7bd48b3",
"assets/packages/mobkit_dashed_border/images/type3.png": "2d50ab9d78a15b2f20012c3b9ea56c46",
"assets/packages/mobkit_dashed_border/images/type1.png": "9f8e612a54622229bd4b97e5357a473c",
"assets/packages/mobkit_dashed_border/images/type4.png": "9250b4ccf17768b5c7d6afcaebadf3f9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6570c63bbe5aa451266aa89fcc93b513",
"assets/fonts/MaterialIcons-Regular.otf": "bf7034f2306b1631da46a0fff6d08df8",
"assets/assets/svg/scooter.svg": "8aef93eba424b8df169ff1c0f7d7676d",
"assets/assets/images/scooter_mock_5.png": "1fa72681486062110ee4164f951c9825",
"assets/assets/images/investments_preview.png": "805f5960d6fcccfed7e5d1a405232a0a",
"assets/assets/images/scooter_mock_4.png": "9f3adc75a0b316310177c366bebb8261",
"assets/assets/images/paytr.png": "6e52c40de08effdc2eea794036ced044",
"assets/assets/images/map_with_scooters.png": "f0efb500b90671c36778f938369d09f8",
"assets/assets/images/telegram.png": "27e218ea48c528b5cbe16ce121624c17",
"assets/assets/images/dog_scooter.jpg": "7cd101bf747049aad0baa2fdab7ca418",
"assets/assets/images/white_logo.png": "72328ef6dbea737906847718f45231de",
"assets/assets/images/tbank.png": "d12d1cc166ce6ea5595d41bea8951574",
"assets/assets/images/scooter_mock_3.png": "e33b23157e085932257a87cd7cbf18df",
"assets/assets/images/google_icon.png": "61e3075118ecf168b4243c14caaa0744",
"assets/assets/images/scooter_mock_2.png": "17818bc36782132450c5d28543f451a4",
"assets/assets/images/map_icon.png": "11cf544711fab5beb6d70e5befea1abf",
"assets/assets/images/scooter_mock_1.png": "bc0250120666c64c545f819b828abbe3",
"assets/assets/images/prize_dark.png": "ab0ee1e607231b3dace11e9d4ce35165",
"assets/assets/images/prize_light.png": "d347830a40f87273816e16c00ea2494e",
"assets/assets/images/visa.png": "23048f16d81cbc38003d874ad39acab0",
"assets/assets/images/flashlight_icon.png": "9efbb37d94ff1e57be5bfe8fdb136610",
"assets/assets/images/logo.png": "3230089f7c3c77a7a41d48521342cdf5",
"assets/assets/images/vak%25C4%25B1fbank.png": "aff01f94ba55890f9496c52c9ff8c0b9",
"assets/assets/images/master_card.png": "61b8f77bbf354da471b89809f999142b",
"assets/assets/images/color_logo.png": "ff4bda38bb622f850131c5d9c42ab4ec",
"assets/assets/images/whatsapp.png": "a0e2aacb3a5302b6649726e898239220",
"assets/assets/images/scooter.png": "4a6f59161ccfd0dca55e5a9f0438f4c9",
"assets/assets/images/rotate_logo.png": "00f5ab796290816b829c2a7d22c39fed",
"assets/assets/fonts/Inter-Medium.ttf": "a6f54808ec0aeaf49a25a2d94b6adda6",
"assets/assets/fonts/Inter-Light.ttf": "c3965f36261090496560874aaa610c4e",
"assets/assets/fonts/Inter-Bold.ttf": "c7b5fabc34e7d60044a1dca4ac845774",
"assets/assets/fonts/Inter-Regular.ttf": "4145168e52304666dee7c976559aa0e4",
"assets/assets/fonts/Inter-ExtraBold.ttf": "93778ebb58832724cccfe5969cbfe4de",
"assets/assets/fonts/Inter-ExtraLight.ttf": "ce8d7d651577a310cae58caa4595696e",
"assets/assets/fonts/Barlow-Medium.ttf": "bdffb48240a3383080812d6830ff6f54",
"assets/assets/fonts/Barlow-Regular.ttf": "9373fb661b5c2954ab84d1b7f42774fe",
"assets/assets/fonts/Inter-Black.ttf": "4786532343ac2631270253fd03660e7c",
"assets/assets/fonts/Inter-Italic.ttf": "2247b87d078df62e20b6814fb7cf8ce4",
"assets/assets/fonts/Inter-SemiBold.ttf": "a757947dee3654e3388b5e6d076c1bfd",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
