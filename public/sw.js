if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/AIDashboard.png",revision:"aea9d9c983aff145a4fa79d67a12a78d"},{url:"/AI_Challan.png",revision:"a038e11379976d8a9855a4be649257a0"},{url:"/Resume_Akashdeep.pdf",revision:"4d4921fbb13b076138c565c9c7a23e95"},{url:"/Tourism_ai_img.png",revision:"e3982c9f4112160d1070ba807c9f370d"},{url:"/_next/static/chunks/0c428ae2-aebbf28242fdd475.js",revision:"aebbf28242fdd475"},{url:"/_next/static/chunks/67-8bef280be4324749.js",revision:"8bef280be4324749"},{url:"/_next/static/chunks/d64684d8-2291b3e8ff3dfff0.js",revision:"2291b3e8ff3dfff0"},{url:"/_next/static/chunks/framework-ecc4130bc7a58a64.js",revision:"ecc4130bc7a58a64"},{url:"/_next/static/chunks/main-486b8c86fba06918.js",revision:"486b8c86fba06918"},{url:"/_next/static/chunks/pages/_app-a27a3bff65a06aab.js",revision:"a27a3bff65a06aab"},{url:"/_next/static/chunks/pages/_error-77823ddac6993d35.js",revision:"77823ddac6993d35"},{url:"/_next/static/chunks/pages/index-83935bf1f439dfe6.js",revision:"83935bf1f439dfe6"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-62c02dad1a6a4cb4.js",revision:"62c02dad1a6a4cb4"},{url:"/_next/static/css/5907cdfac8aef0ad.css",revision:"5907cdfac8aef0ad"},{url:"/_next/static/css/ec3cb368036defce.css",revision:"ec3cb368036defce"},{url:"/_next/static/kUBQTevXpF9vqjn8g864Y/_buildManifest.js",revision:"f588704b9353b1b232706f794eb6e142"},{url:"/_next/static/kUBQTevXpF9vqjn8g864Y/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/akash_cafe_pic.jpeg",revision:"f06ee0790c5642726ec7b6a8c118ecd8"},{url:"/akash_profile.jpeg",revision:"eb45b16845f2f49df819cb6068093bf3"},{url:"/favicon.ico",revision:"c57f8f5d6275391a9670f4cc8ab3658a"},{url:"/logo-dark.png",revision:"82a6d54d7876fad41b31bf96babdd826"},{url:"/logo.png",revision:"82a6d54d7876fad41b31bf96babdd826"},{url:"/logo192.png",revision:"7787ade3cea94a498da343470d3a428a"},{url:"/logo256.png",revision:"94c9857a1750c891a9f3ceb10d6d97d2"},{url:"/logo384.png",revision:"10e99195095e3480a69b9749e77bc1f4"},{url:"/logo512.png",revision:"82a6d54d7876fad41b31bf96babdd826"},{url:"/manifest.json",revision:"1a80843a24a4ede2bc572dc516ab228d"},{url:"/manifest.webmanifest",revision:"aa231bc9ef63b54d64749a97a3de9218"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
