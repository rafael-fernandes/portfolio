"use strict";var precacheConfig=[["/portfolio/index.html","a3e3dc562d4fea3a1da6c774a9da3215"],["/portfolio/static/css/main.6605da8b.css","e82dde992e3794f7738f54f7f72e1bc8"],["/portfolio/static/js/main.30fc0970.js","bae821006c726ed57222eec4baacfc2b"],["/portfolio/static/media/abihub-logo.037626a0.png","037626a046a1ee903d77b1efac3aad79"],["/portfolio/static/media/abihub-mockup.d14771fa.png","d14771fad1a52a3bf209ab82bb3b2749"],["/portfolio/static/media/alimente-mockup.35d11fcc.png","35d11fccc260f599152a7d068a94b483"],["/portfolio/static/media/alimente1.e30b7536.png","e30b7536a706d49b6e567ddc3215df24"],["/portfolio/static/media/alimente2.0fdb37cf.png","0fdb37cf6c28f0dcc342f4097b80daf7"],["/portfolio/static/media/alimente3.20c974d3.png","20c974d31be26eca60743cdf95dccd28"],["/portfolio/static/media/alimente4.f4ad3b5a.png","f4ad3b5aec9993ae036d39e45a25afa9"],["/portfolio/static/media/alimente5.e64455b1.png","e64455b1a72dfdccfd9594d110aab18a"],["/portfolio/static/media/alimente6.24f41a99.png","24f41a99893698500a6102102d68876a"],["/portfolio/static/media/alimente7.16ae117e.png","16ae117e6577aaf2fa05d444134845c9"],["/portfolio/static/media/alimente8.056de0f3.png","056de0f34a20266dee016f73dece18da"],["/portfolio/static/media/alimente9.f8781419.png","f8781419cbeafc063edab22072bb456b"],["/portfolio/static/media/casapark-mockup.4f915e1f.png","4f915e1f50f3e55c25793066b45a67c9"],["/portfolio/static/media/casapark1.15c01155.png","15c01155f092d9cb0fee74cc590cea41"],["/portfolio/static/media/casapark10.f10490d5.png","f10490d5924f59088acebaf50c06b450"],["/portfolio/static/media/casapark11.3f3d99d5.png","3f3d99d5fc7b56074b346fc5806d5558"],["/portfolio/static/media/casapark12.e27f16d0.png","e27f16d0b9b0b6c4ed4747ef90e308fc"],["/portfolio/static/media/casapark2.415af39e.png","415af39e5f41e6c62608fd421d401c2c"],["/portfolio/static/media/casapark3.63ebeb80.png","63ebeb807507954f58c23219af7f9455"],["/portfolio/static/media/casapark4.c1f5fd14.png","c1f5fd1420404c9458a51385d84521ea"],["/portfolio/static/media/casapark5.13393701.png","13393701f4fd86e2facfadde5ec66a28"],["/portfolio/static/media/casapark6.8c972fe5.png","8c972fe5879db7775d0fe0acba0c312b"],["/portfolio/static/media/casapark7.1658f8d4.png","1658f8d4ded15209dcba87bd0cdb4fc4"],["/portfolio/static/media/casapark8.7a151a59.png","7a151a5975aa7eb6d09cc8024a434b64"],["/portfolio/static/media/casapark9.e2037d80.png","e2037d8020339c7c9e10577381b075ab"],["/portfolio/static/media/download.f6d889d3.svg","f6d889d36870de44c03df7376ad8705b"],["/portfolio/static/media/email.b254fa1b.svg","b254fa1b5a8a7d029794aa8ac84d134d"],["/portfolio/static/media/fenix-logo.6c4b0362.png","6c4b0362f464f5027d1fcbe51da7e743"],["/portfolio/static/media/fenix-mockup.941224f0.png","941224f038e179c5ac4a97b0e85556df"],["/portfolio/static/media/foto@2x.7794308e.png","7794308e6ffb6ef2d85ad2a74adb3730"],["/portfolio/static/media/futura_book.70c9849e.otf","70c9849e706b63e2c54c940c9559e633"],["/portfolio/static/media/futura_demi.2ca255d0.otf","2ca255d0278ec42d88d3b34a16680324"],["/portfolio/static/media/futura_light.2609ab87.otf","2609ab87291dbbca85cbd4cfcd35738c"],["/portfolio/static/media/futura_medium.1ae74371.otf","1ae74371cfc0ed9d96229945ece4733d"],["/portfolio/static/media/github.2a191246.svg","2a191246070c2142fc5077fed5eca6f6"],["/portfolio/static/media/left-arrow.fc51ebaf.svg","fc51ebaf8c73a6c9c2ce0b5729eb70c5"],["/portfolio/static/media/linkedin.337472b1.svg","337472b1cacdeb84c73f2fbc121e4501"],["/portfolio/static/media/lucky-dives-mockup.6be5b34b.png","6be5b34bf831ef5fc04eaab4411d434a"],["/portfolio/static/media/luckydives1.52b2cec4.png","52b2cec48002808edf071da2ab9993a8"],["/portfolio/static/media/luckydives2.0057c433.png","0057c43368409a254cce68ce2909d34e"],["/portfolio/static/media/luckydives3.8a0a862d.png","8a0a862dc445639950ecef7239cd7eb7"],["/portfolio/static/media/luckydives4.33c03663.png","33c03663397f09ab400c3f0fe9040bb3"],["/portfolio/static/media/luckydives5.48fe0ac0.png","48fe0ac090bc5f103f68557c3e1fc1d4"],["/portfolio/static/media/luckydives6.1e9252be.png","1e9252bebf211cea8c40f8228b7eaa18"],["/portfolio/static/media/mondo-mockup.1918f215.png","1918f215c8f9bc9990552a8386ee8d41"],["/portfolio/static/media/mondo1.ebf8e07a.png","ebf8e07aa13b91348fb72304004de5b3"],["/portfolio/static/media/mondo2.3f3a255c.png","3f3a255ceac0be03fd04c4b8a9630cdb"],["/portfolio/static/media/mondo3.3c64e8ad.png","3c64e8adc751a79551f97e7130b22a8f"],["/portfolio/static/media/mondo4.558bb441.png","558bb441e8a53004152de00c4918bde1"],["/portfolio/static/media/mondo5.21cdfef2.png","21cdfef28e0abfc80ae18712abef5381"],["/portfolio/static/media/oncase-logo.d0ae2c1b.png","d0ae2c1bc6e1a1e35ec3275774b363e2"],["/portfolio/static/media/oncase-mockup.991fdecc.png","991fdecc0fbbd08e3e37b69ae16f20d1"],["/portfolio/static/media/plenitude-logo.322f8fa2.png","322f8fa2bd203ab41dff542284932b8c"],["/portfolio/static/media/plenitude-mockup.9b127485.png","9b127485aa2d91f22b00b713e03f2855"],["/portfolio/static/media/plenitude1.cd2bd203.png","cd2bd203dc5b31b4f45abcfdc68d4030"],["/portfolio/static/media/plenitude2.0c03ded8.png","0c03ded8ebe8d6e3a01b738eac966974"],["/portfolio/static/media/plenitude3.b654add6.png","b654add68b13e829b21dffe82f88b8dc"],["/portfolio/static/media/plenitude4.71469bd0.png","71469bd02780de3a8c4bd57908889a73"],["/portfolio/static/media/right-arrow.42a2dc2f.svg","42a2dc2f937df3067a25a9b4b3e9bc7f"],["/portfolio/static/media/wecare-mockup.66b4d34a.png","66b4d34acab6903d8b1680e263f4a1c6"],["/portfolio/static/media/wecare1.4f76499b.png","4f76499b1b99aea2ab1d9bb8433a897a"],["/portfolio/static/media/wecare10.924da924.png","924da924030ee298afc1ec0ba5d94d61"],["/portfolio/static/media/wecare11.b8c8c721.png","b8c8c7219e4704d3b7030e9d41c7bece"],["/portfolio/static/media/wecare12.1241e3c9.png","1241e3c9fb11654a56909dd275189669"],["/portfolio/static/media/wecare2.4bcd5479.png","4bcd547926d04ff97df8d11f29a862a5"],["/portfolio/static/media/wecare3.88f78441.png","88f784415d23a759d9058d5a58f02aa4"],["/portfolio/static/media/wecare4.0c1be1be.png","0c1be1beb9897a1cee6709f4d982886b"],["/portfolio/static/media/wecare5.ce535a75.png","ce535a7509a548ffc4f84fad82512020"],["/portfolio/static/media/wecare6.46a62064.png","46a620640090a3ecdcccf607d11db2e3"],["/portfolio/static/media/wecare7.db287896.png","db287896fbf4a30db0d3b9b993cb416e"],["/portfolio/static/media/wecare8.fcfa0676.png","fcfa06768d44197989e2fd289a3e3212"],["/portfolio/static/media/wecare9.69d7902b.png","69d7902b68d3f62ee68375e406dd5b57"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var o=new URL(e);return c&&o.pathname.match(c)||(o.search+=(o.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),o.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),o=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),o]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var o="/portfolio/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(o,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});