/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["alan-accurso-sebastian-urbina.html","4bea7fa37d4a37b9c971d9f4e3f6bebe"],["anjana-vakil.html","b7319276c100191932f5ac7b3f9a2d9d"],["assets/favicon-16x16.png","0212fe63ba8bf0dd1859f03abffd2c6c"],["assets/favicon-32x32.png","9c4f98ed39d4c445b4b19aa41a3f1044"],["assets/favicon.ico","862de534e887c4491d08a20448afe8c4"],["assets/images/about.jpg","d9dea101513ce5c62c64e3d0aaa94c0c"],["assets/images/android-chrome-192x192.png","c9c0e49b6dba81f9bb271db1382d8bb2"],["assets/images/android-chrome-512x512.png","720de13082147e940260978da703dd15"],["assets/images/apple-icon-114x114.png","e6b8fdd442c4569c542b583383fea22b"],["assets/images/apple-icon-120x120.png","7b85336e9280d015b6f368abe7823ee6"],["assets/images/apple-icon-144x144.png","73f2279033edee0954009ec1419aa4ff"],["assets/images/apple-icon-152x152.png","12683ae087126982b491851c50886a78"],["assets/images/apple-icon-180x180.png","537bf9bd1203524e5ac511c911996013"],["assets/images/apple-icon-57x57.png","fdb424286bd8e3147d2e94969af6de59"],["assets/images/apple-icon-60x60.png","ca9a50ca7e5225595a2a31a4a8ef31ff"],["assets/images/apple-icon-72x72.png","6d1f94024206a04541cf634dc522ea2b"],["assets/images/apple-icon-76x76.png","8ec6ffd1af17cda3d528682a76c34d9d"],["assets/images/arrow-down.svg","8809a35607de8741199fbf3fdff8f542"],["assets/images/bg-form.jpg","d53cb1942e34f421a19dc9136cf549c5"],["assets/images/cfp-twitter.png","696896fd75f74a43a636df7bcb6e7db6"],["assets/images/ciudad.png","185989722cd58399f2b8b8ba0d848b91"],["assets/images/ciudad2.svg","6506c439d0540a5f9b5647c9e850e74d"],["assets/images/footer.svg","2b25372d9ee8b743f387fbddd28f166d"],["assets/images/github-triangle-blue.svg","04cce00f55cbaad1ca09598d039d1967"],["assets/images/github-triangle.svg","c0113aba9d75048d6f64b97b65a1f236"],["assets/images/go.png","2850d1a10f039e4bdee9f164744bf4a9"],["assets/images/header-2.png","b812e7b1f39d0322ac5a6327261d59b9"],["assets/images/header.png","606b0d556fd7f4bd369df7ed8935e486"],["assets/images/logo.svg","a3c046cfd0d9097bacece5ee364f0222"],["assets/images/logom-header-nodeconf.png","33d3f58debc91761f0783cc77d14f3f8"],["assets/images/media-academica.png","c9b4a824ec1eacc1f7e9adae1621a248"],["assets/images/media-braziljs.png","4ad3d7ce9735e9443349325d26114f35"],["assets/images/media-educacionit.png","c132fc14e6be577bf51cd992847bf1f4"],["assets/images/media-meetupjs.png","01218ce34b01a19948d57505a485597f"],["assets/images/media-node.png","f894b7e5d75a2c7fe52cb2393feb8c16"],["assets/images/media-nodes.png","d9d68fb50bcbbefbda49dd377f07101c"],["assets/images/media-platajs.png","6469e9b711824c2d261632014eb7aca0"],["assets/images/speakers/alanseba-meta.png","81ea5914cb44c1fa9c0d99d71b1ea3f9"],["assets/images/speakers/alanseba-off.gif","688e63bfbe37ba267e335c5d60a86fd8"],["assets/images/speakers/alanseba-on.gif","a0c3c92c85609d0fa13268ed742be96e"],["assets/images/speakers/anjana-meta.png","673f35a8e4230282f4163f5c7d784f31"],["assets/images/speakers/anjana-off.jpg","60c237edf832e7482983aa085611a41e"],["assets/images/speakers/anjana-on.jpg","30095dce310c65a7aac5031a640b3bed"],["assets/images/speakers/bogado-meta.png","6355361f47affe135e875fe02fecf1fd"],["assets/images/speakers/bogado-off.jpg","271cb01960ae945f637622c3a84e2c77"],["assets/images/speakers/bogado-on.jpg","d00e8ca20a985a463b5fb628b45b0d68"],["assets/images/speakers/caicedo-meta.png","7cb8a874cafc2391b8782b614fc7cb82"],["assets/images/speakers/caicedo-off.jpg","98926d6562a43e085aa342fb22b7903d"],["assets/images/speakers/caicedo-on.jpg","5770df4df3d80d071290acbaac5d7b55"],["assets/images/speakers/dan-meta.png","7966c1afef40ca8bbfaa7003e6ea66a6"],["assets/images/speakers/dan-off.jpg","079de91c581e87f937d88df255024c0a"],["assets/images/speakers/dan-on.jpg","0ef9bbf39f02b5ba75bb70acc1f8efd5"],["assets/images/speakers/dante-meta.png","0b803564da9c9d8c372a76e06213a7c3"],["assets/images/speakers/dante-off.jpg","c9b6622c68ee168d58becd7e89ff59ec"],["assets/images/speakers/dante-on.jpg","6bdcefcd1ce5fb6845eb292b286d035e"],["assets/images/speakers/domenico-meta.png","290b8560bdae5df3d89b6fe826ceab84"],["assets/images/speakers/domenico-off.jpg","811bb621249f466e444eed26d674a328"],["assets/images/speakers/domenico-on.jpg","5c7d773ceefc0abf63e1fe2283e774f9"],["assets/images/speakers/dora-meta.png","d631a8c2b58029fae5744f914f2bb696"],["assets/images/speakers/dora-off.jpg","b3e3b0fcaa01eaad576c7ad12bb41909"],["assets/images/speakers/dora-on.jpg","c5cc4557cb6ead9fc3c1dc7449f27740"],["assets/images/speakers/fran-meta.png","6e61186c01f46317ecddadadfa4b3af0"],["assets/images/speakers/fran-off.jpg","0339ef02586afd750bf02f508bd2210b"],["assets/images/speakers/fran-on.jpg","73d64ec44fa66311087ee15cabbd5eb8"],["assets/images/speakers/franr-meta.png","6a32a0d1f185f1ebbb5b7bb0af901969"],["assets/images/speakers/franr-off.jpg","4468f4dd54e0153371f02b0c78639067"],["assets/images/speakers/franr-on.jpg","1f2347ea7bc12557e6956e8c03f6af04"],["assets/images/speakers/geut-meta.png","64674563c66b935388a85d074f03feee"],["assets/images/speakers/geut-off.jpg","e41749610756efd33c011706d72980de"],["assets/images/speakers/geut-on.jpg","a54f61ceff09949284c46c227657a4c1"],["assets/images/speakers/insaurralde-meta.png","786efcd4d123f885853af018cd544327"],["assets/images/speakers/insaurralde-off.jpg","5cbb2bc752bf16cdce25f1715afab215"],["assets/images/speakers/insaurralde-on.jpg","9559143ea38a055bc93a55c79e9f4d7e"],["assets/images/speakers/istvan-meta.png","30fb6e94dea0aac26cb52f5e5fb9409c"],["assets/images/speakers/istvan-off.jpg","f31ec828fb36955fc064315b5764c29d"],["assets/images/speakers/istvan-on.jpg","70ba30b7ec444f2882126986ae8f342a"],["assets/images/speakers/kelsus-meta.png","ee319a3e9f29218a7be584ce5f4267f3"],["assets/images/speakers/kelsus-off.gif","47e6cb2ab318f50450c674a5845bc06f"],["assets/images/speakers/kelsus-on.gif","05a8569e1b60b6efe13db9faee3d7ace"],["assets/images/speakers/khan-meta.png","051e1bc3d0e140f1ba38c51f63c72a86"],["assets/images/speakers/khan-off.jpg","f4e93a61f92415e42371d7b5424f511d"],["assets/images/speakers/khan-on.jpg","ffc97233ad6a3e7fcf03b01777a6bc6b"],["assets/images/speakers/lance-meta.png","d2ce878e06744268d1a6b545c178174e"],["assets/images/speakers/lance-off.jpg","36572e0a727f50d0a2ab2fea2b3223f4"],["assets/images/speakers/lance-on.jpg","e439d20f5e40778d85882648115ef940"],["assets/images/speakers/luis-meta.png","3e9436ca591370787e63d68f14283beb"],["assets/images/speakers/luis-off.jpg","6816421cb8ab52f10cfc6326c54b97c1"],["assets/images/speakers/luis-on.jpg","5db2922014543ddcc6c966f1cf023f5a"],["assets/images/speakers/luke-meta.png","10668c6073f4ee5ce3f911eca74f057a"],["assets/images/speakers/luke-off.jpg","c420944415006050ea88e65648c58d99"],["assets/images/speakers/luke-on.jpg","80d033e19e9f494a645de34bcd0cbf46"],["assets/images/speakers/moretti-meta.png","e5be1e8359bc0153d44a4533663c2291"],["assets/images/speakers/moretti-off.jpg","2767cb6dc047351a5b7a7a85dd0a12d7"],["assets/images/speakers/moretti-on.jpg","d37dd82a21f8f1bb1ae15651d3300cdb"],["assets/images/speakers/nikolay-meta.png","9eb1e55f44695e60b0a2a97a7f1ed658"],["assets/images/speakers/nikolay-off.jpg","9214da7df6d9aa75c08bf12ae8e7ab11"],["assets/images/speakers/nikolay-on.jpg","ee750e020c4e3ed7f0e7ccf857889dd7"],["assets/images/speakers/pittelli-meta.png","261f14974c5efdb92421d2fb022eb046"],["assets/images/speakers/pittelli-off.jpg","5544a72e0e9493c0e4f9a2335e6b9d66"],["assets/images/speakers/pittelli-on.jpg","bfaa98626262413da3a226838bcdd624"],["assets/images/speakers/silveira-meta.png","15253d3eb12b617a506984ce0247b90a"],["assets/images/speakers/silveira-off.jpg","928209edb1d5f22261d71b27ac3bb7f3"],["assets/images/speakers/silveira-on.jpg","9e286416ba53a25a18bfcbb7dad73695"],["assets/images/speakers/snell-meta.png","ae0b52ec1168e167803811ddf34635d1"],["assets/images/speakers/snell-off.jpg","e1a09ad27dd4b5c3e69d5fae799490d9"],["assets/images/speakers/snell-on.jpg","c3cb4f6de5e6a7213ff9fff90c568b83"],["assets/images/speakers/suz-meta.png","25ad62fa337112ebfc3d663fed3294b7"],["assets/images/speakers/suz-off.jpg","eccbeffb69de1d81b6b1a9ec6bd67434"],["assets/images/speakers/suz-on.jpg","96a0cb59474995026c7517083ba8e1ac"],["assets/images/speakers/tara-meta.png","6e5a822411939769d8e9d96174237bfd"],["assets/images/speakers/tara-off.jpg","381e5fe26c9a7b67fb2f79f27399e12f"],["assets/images/speakers/tara-on.jpg","02a09c0cda140d66d1fc6aa534ef7fcf"],["assets/images/speakers/terradillos-meta.png","09137dc80512ce6b3c3528bba8b4d7fb"],["assets/images/speakers/terradillos-off.jpg","5595ec88f272a6542ac19c137c321d27"],["assets/images/speakers/terradillos-on.jpg","71260bf45b90e7150c632afb3188aa19"],["assets/images/speakers/thorsten-meta.png","a8c52bf28b7597c6fa0455e83d565eb1"],["assets/images/speakers/thorsten-off.jpg","8853a6ef00b4c5715c9f73cdd2a7fc4f"],["assets/images/speakers/thorsten-on.jpg","32ff3ef4b635a4c4c0673480fc82803a"],["assets/images/speakers/valdes-meta.png","492c4aa77a58d025bffdef639b049bfe"],["assets/images/speakers/valdes-off.jpg","e8121bc6151b24f9e7d65f96f3beb6a9"],["assets/images/speakers/valdes-on.jpg","c7b01be083c2b4123327f77d9ee11642"],["assets/images/speakers/vazquez-meta.png","f9581d57eb61138664cc60cac8a57cee"],["assets/images/speakers/vazquez-off.jpg","0e811238dc5c0435db6fcb210acc9bc5"],["assets/images/speakers/vazquez-on.jpg","7974b5c817bd11206695f52f6f03a3a8"],["assets/images/speakers/willian-meta.png","38f33515ad9acf58417ed5bd0e1a2d54"],["assets/images/speakers/willian-off.jpg","91c7b5d072f1f06be5537ad4e210dde7"],["assets/images/speakers/willian-on.jpg","6d62773215540ca5d18e858bdfdf8789"],["assets/images/sponsor-ag2.png","72307ab606a4ddd6fc3cf88d16e83911"],["assets/images/sponsor-almundo.png","c7636171d41b03ea98bae46afa31c6c6"],["assets/images/sponsor-auth0.png","f3d9fdc2fa54683ec7c4901f9263751b"],["assets/images/sponsor-bloq.png","4f9a9a35ea658cc88efafc848e9b00c8"],["assets/images/sponsor-bondacom.png","15fb88b70df91a5f96785e48c25b40b6"],["assets/images/sponsor-endava.png","04872a60e5f6e063b9495deef7490100"],["assets/images/sponsor-flow.png","f251cb52c4b480d2215ffb8ff0f6c110"],["assets/images/sponsor-getonboard.png","4928f28a401a2b18896a3d3ec3bd7c96"],["assets/images/sponsor-geut.png","7db708d9043d97469691afdb97c2145a"],["assets/images/sponsor-globalogic.png","5c1a3b1d192b8ec7b1f90216254da5ee"],["assets/images/sponsor-intive.png","531cd90890ee107636221e4fb86cdb74"],["assets/images/sponsor-jampp.png","c683e82211c34cb9d199f4a4c8a27657"],["assets/images/sponsor-matr.png","78fd4aee3674ce660814d3fce947dcc4"],["assets/images/sponsor-medallia.png","105b14b2c492fdd7a70ab55d971c3d2d"],["assets/images/sponsor-mercadolibre.png","1d191da91b7731f98a7356e26fa83883"],["assets/images/sponsor-mulesoft.png","b3ec89306c783dac7f0224921036dbf0"],["assets/images/sponsor-mural.png","f4ab864a05268f5683165f84032d8ece"],["assets/images/sponsor-olx.png","7352acca4243fe9b3cfde1f203a3f2fe"],["assets/images/sponsor-stensul.png","abeaaa1598153cab08d6af52108d95dc"],["assets/images/sponsor-trocafone.png","9422debf5dfa79804e3401163368e78b"],["assets/images/sponsor-wolox.png","f5d30f3ac8064bb434b95fb32d9993dd"],["assets/images/twitter-triangle-blue.svg","7b94f6f323dbb719254a06bc3159636e"],["assets/images/twitter-triangle.svg","2c2bdafe41ec35bdf9ae30c25cc8bd63"],["cfp.html","2f0eb8ceeec2ee86ee7b98c65662d2f8"],["conduct.html","c18cb9321a4d8e2ce8f0315faf23d463"],["copy-of-daniel.html","6057f4bfb9c7ccc54529ff50b7bdedd5"],["css/main.css","dc58aa65f543dfaaf7e4b6873d5af2e6"],["dan-shaw.html","ead82a1614c179754596c3b8e26793bf"],["daniel-khan.html","f5664fb9ccc5928e105ee1ae3d251894"],["dante-panella.html","4a6e1f8ec1f22f609979355517e0d0d2"],["diego-paez-martin-acosta.html","a3ce015493c028fe3b286a6923706ed3"],["dora-militaru.html","58320dff93483dc128195708b8f8c6c2"],["francisco-reynolds.html","cd5506798712a49accb2fc09a19f54ac"],["franziska-hinkelman.html","4c8df839264087895e60a5ac0b3afc51"],["index.html","11213b9478140887bd7788b87359e176"],["isabella-silveira.html","0a901efd6aad673582a72b7dafdfe5dc"],["istvan-szmozsanszky.html","a5ec544cb715eb4a877667f968665551"],["james-snell.html","a5921116bc653ecc6c2408bc8ad1e67f"],["jonathan-diaz-raul-hermann.html","7d484345ca68e1fa78c6be3f3a9bb179"],["js/main-e5e2151269.js","549e5b24ab587fa46235a574ce0619f8"],["juan-caicedo.html","bbb84f71188efc952a825535704162ed"],["lance-ball.html","f21bc708d5136de5d90820e3e6f6e074"],["leonardo-pittelli.html","bdaa5334dd3bb886e65894d33ff1bf78"],["luis-aviles.html","ac102674cb5f56df9a667f28b4c54c44"],["luke-bonaccorsi.html","1d7b8434f517dc871a19bfb6dc9cfcb1"],["mariano-moretti.html","9010f3708e37e5f7a5ea54be4596ee7e"],["mariano-vazquez.html","b1621d54573dbfac985fd5a83aa8952d"],["martin-didomenico.html","cee22db8e02ebefbbcf3bd0d5cbd4a2d"],["martin-valdesdeleon.html","384876690178b884988eea7a0ecf1c43"],["matias-insaurralde.html","0d657a241687cdad52ef03016f44d924"],["nikolay-matvienko.html","19b6cd1c487ffbf03a2dda23d4130d88"],["pablo-terradillos.html","5353b259a2e369f76eed62b03cd393d0"],["sebastian-bogado.html","1f21fb8b48bc2bb37a1868ac612ee5d0"],["speakers.html","edf1a818a0783e458bc1d2085a257047"],["suz-hinton.html","6d2e767b967801c182976f56a5ad884f"],["tara-vancil.html","6152bd501715f391dd2a6eb3b2bd0aa1"],["thorsten-lorenz.html","9962c5455f64ef2afd1c469893a2e7ca"],["willian-martinsdasilva.html","5c075c43c27a410ebddf014ee52d6d35"]];
var cacheName = 'sw-precache-v3-nodeconf2018-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get(/runtime-caching/, toolbox.cacheFirst, {"cache":{"maxEntries":1,"name":"runtime-cache"}});




