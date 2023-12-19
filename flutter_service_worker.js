'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "29babeb6ce5335f62c155d1863e3f231",
"index.html": "107b450062790c9b949238c54ea43f1d",
"/": "107b450062790c9b949238c54ea43f1d",
"main.dart.js": "c5d11d7b502510ba9cf290e867b3f13f",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c647e3b103034d4d306f0d066000a25b",
"assets/AssetManifest.json": "6be92aab0572f33d5dc47aa2fef59163",
"assets/NOTICES": "46a0d82270ba88538360af9d2c352cef",
"assets/FontManifest.json": "e024588c84b5d20cb7869d6f908130e8",
"assets/AssetManifest.bin.json": "afa3be124d8f1747c2daa5f994e6d2ff",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "bcaf3ba974cf7900b3c158ca593f4971",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "7af7b0e0616410859b1477a4e9f76437",
"assets/fonts/MaterialIcons-Regular.otf": "0cbdbe7ebb59156a648ce3c8b7353dd3",
"assets/assets/images/aatik-tasneem.jpg": "ed30985aa948c8f11348c11396c05fe7",
"assets/assets/images/note.png": "ccc3a80779d162f320a77f69744ed31b",
"assets/assets/images/azamat-zhanisov-.jpg": "e2371c0b2602de2767cc3ff9d94c3f96",
"assets/assets/images/fall.png": "a2ca23b0212cffdda5981932e2bdb450",
"assets/assets/images/verified.png": "a159c0160a401633cfbca294d75af416",
"assets/assets/images/averie-woodard.jpg": "43fec83eafec7fa93522bf42e74d4bb5",
"assets/assets/images/user.png": "616fcc9ddf4239162b015afc00c52364",
"assets/assets/images/Illustration.png": "4446407d019af347411540ebc1b8d6c0",
"assets/assets/images/lucas-sankey.jpg": "fdeb0e44c55d5eddf6d1c1a6278abbb4",
"assets/assets/images/background.png": "03f94ba2eab4c950e03f2ebcf52c8f8f",
"assets/assets/images/azamat-zhanisov.jpg": "685c4565e6397420ac7c01c4dac49cf6",
"assets/assets/images/sit.png": "1640d564a8a6aeeb5b2a59d840c543cd",
"assets/assets/images/jurica-koletic.jpg": "fd28aa1ceac893ac3b4ea47a615b1589",
"assets/assets/images/profile.png": "4f40a41b70606cbd2f8768c25ca8d438",
"assets/assets/images/michael-frattaroli.jpg": "7ada0f143b0706881e345821c636de93",
"assets/assets/images/phone.png": "858c06756fedcae25cd689855cee6e6a",
"assets/assets/images/foto-sushi.jpg": "34cdc11e8bf6c2a57c0dcfacc13cd81a",
"assets/assets/images/aiony-haust.jpg": "d74e00cb261d4ac7c22b964fee69dfac",
"assets/assets/images/team1.png": "f09d67b6c987336f228dfbf159f74ebf",
"assets/assets/images/invite.ics": "d3f360164e831a95ffa394d47f5a4981",
"assets/assets/images/team2.png": "7099109acc91ad914f3b7ac32668effc",
"assets/assets/images/bg.png": "a5a1a018e1491d4977c8abd3dcc251f5",
"assets/assets/icons/arrow_down_icon.svg": "56487e03103dc75eff5e7c8e3cae42f7",
"assets/assets/icons/home_selected_icon.svg": "d03604b20aaf5e77395290e5922efbaa",
"assets/assets/icons/profile_selected_icon.svg": "11c931f21edb36f28b12eb120ef862ef",
"assets/assets/icons/search_icon.svg": "ad4e6420368f908697fbd2c59a6c6cff",
"assets/assets/icons/note_white.png": "a09119dd605d894d15125ee04ac7ec9c",
"assets/assets/icons/arrow_back_icon.svg": "be590547aff9c76dde33aef5e1e6e005",
"assets/assets/icons/add_icon.svg": "b91d61a6ae3b2389c62ff27a299a9f8f",
"assets/assets/icons/settings.png": "d45f53d8c089211df1a6113721d74645",
"assets/assets/icons/share_icon.svg": "1483c518c00fb44921a966ff1d70233d",
"assets/assets/icons/pro_label.svg": "d8bb461e925d2be03c631eb70eb51474",
"assets/assets/icons/verified.svg": "a3855078cc20ab7523f1947aa8d9c43c",
"assets/assets/icons/empty.svg": "9dd32739d15d65c86cfa2c09e1ed9b02",
"assets/assets/icons/sort_icon.svg": "bfe1119bcb0101b7cc484d6ae3acaf78",
"assets/assets/icons/profile_unselected_icon.svg": "2e982a2e09268998458b977af094a453",
"assets/assets/icons/more_horiz_icon.svg": "1dddef7106790c65f52fedb746ecbab7",
"assets/assets/icons/eye_icon.svg": "723605fd56d3bd82e6cefcc2081fa62d",
"assets/assets/icons/folder_icon_blue.svg": "5e4900712a2bfa0f9f077d6269dd0384",
"assets/assets/icons/word_icon.svg": "31d775e5065e639b16e4b79c069691ab",
"assets/assets/icons/more_vertical_icon_blue.svg": "85c39ba8d31f9f605d550f370cb1f219",
"assets/assets/icons/bookmark_selected_icon.svg": "cb26867221e7382d3d7291a568225e69",
"assets/assets/icons/menu_icon.svg": "62c71133bb08d1d22bbcdb8a53b2ef81",
"assets/assets/icons/folder_icon_red.svg": "928c084924a800ef7ed438bbc1534ec5",
"assets/assets/icons/more_vertical_icon_red.svg": "91613567eff4e3709f06020aff131628",
"assets/assets/icons/folder_icon_green.svg": "00f1705a0548f7ff43eb55e7657589d9",
"assets/assets/icons/notification_unselected_icon.svg": "94cd1c22b3856d24507b887f57bb6622",
"assets/assets/icons/arrow_right_icon.svg": "fe8ab686a7b7f979d68b6869aa3a5762",
"assets/assets/icons/folder_icon_yellow.svg": "4b62bb4e9ed2d3b971325dd8dad3cb98",
"assets/assets/icons/notification_selected_icon.svg": "d69324d8b3a1f3a80e00539acc3a6e31",
"assets/assets/icons/arrange_vertical_icon.svg": "1c3441d7b18b5345fd8e3fb5c7a83b91",
"assets/assets/icons/setting_icon.svg": "629cd4e4e29eb25676e5bc76e2fe51c1",
"assets/assets/icons/bookmark_unselected_icon.svg": "ffed215bfa8f5e6d45f8420e0b357533",
"assets/assets/icons/profile.svg": "79388bb9e1c815aba174423b5e53b4f8",
"assets/assets/icons/more_vertical_icon_green.svg": "f701c2d22b67c8ab1a195533b116b595",
"assets/assets/icons/more_vertical_icon_yellow.svg": "c7b3bb046d1a9ce26f42b1945033c96d",
"assets/assets/icons/play_icon.svg": "56331a280581e591efd0961be929a8cd",
"assets/assets/icons/home_unselected_icon.svg": "7ca5c4ef4220f764fa71f1df939c5020",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
