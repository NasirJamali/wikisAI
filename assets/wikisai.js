/* ============================================================
   WikisAI Shared JS — GA, header/footer, helpers
   ============================================================ */
(function(){
  'use strict';

  /* ---------- Google Analytics ---------- */
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', 'G-HY0QPVB05Q');
  var ga = document.createElement('script');
  ga.async = true;
  ga.src = 'https://www.googletagmanager.com/gtag/js?id=G-HY0QPVB05Q';
  document.head.appendChild(ga);

  /* ---------- Icon sprite (auto-inject once) ---------- */
  var SPRITE = '<svg width="0" height="0" style="position:absolute" aria-hidden="true">' +
    '<symbol id="i-sparkle" viewBox="0 0 24 24"><path d="M11 3l1.7 4.6L17.3 9l-4.6 1.7L11 15l-1.7-4.3L4.7 9l4.6-1.4L11 3z"/><path d="M18.5 14.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2z"/></symbol>' +
    '<symbol id="i-upload" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></symbol>' +
    '<symbol id="i-download" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></symbol>' +
    '<symbol id="i-check" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7"/></symbol>' +
    '<symbol id="i-bolt" viewBox="0 0 24 24"><path d="M13 2L4.5 13.5H11l-1 8.5 8.5-11.5H12l1-8.5z"/></symbol>' +
    '<symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 2.5l8 3v6c0 5-3.4 8.9-8 10.5C7.4 20.4 4 16.5 4 11.5v-6l8-3z"/><path d="M9 12l2 2 4-4"/></symbol>' +
    '<symbol id="i-gift" viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M3 12.5h18M12 8v13"/><path d="M12 8S10.5 3.5 8 3.5A2.2 2.2 0 0 0 8 8h4zM12 8s1.5-4.5 4-4.5A2.2 2.2 0 0 1 16 8h-4z"/></symbol>' +
    '<symbol id="i-mobile" viewBox="0 0 24 24"><rect x="6" y="2.5" width="12" height="19" rx="2.6"/><path d="M10.5 18.5h3"/></symbol>' +
    '<symbol id="i-star" viewBox="0 0 24 24"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3z"/></symbol>' +
    '<symbol id="i-rotate" viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-2.6-6.4"/><path d="M21 3v6h-6"/></symbol>' +
    '<symbol id="i-flip" viewBox="0 0 24 24"><path d="M12 3v18"/><path d="M8 7L4 12l4 5"/><path d="M16 7l4 5-4 5"/></symbol>' +
    '<symbol id="i-zoom-in" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M11 8v6M8 11h6M20.5 20.5L16.6 16.6"/></symbol>' +
    '<symbol id="i-zoom-out" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M8 11h6M20.5 20.5L16.6 16.6"/></symbol>' +
    '<symbol id="i-arrow-right" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="M13 5l7 7-7 7"/></symbol>' +
    '<symbol id="i-printer" viewBox="0 0 24 24"><path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M6 17v4h12v-4"/></symbol>' +
    '<symbol id="i-ruler" viewBox="0 0 24 24"><rect x="2.5" y="8" width="19" height="8" rx="2"/><path d="M7 8v3M11 8v4M15 8v3M19 8v4"/></symbol>' +
    '<symbol id="i-palette" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="9" cy="9.5" r="1.1"/><circle cx="15" cy="9.5" r="1.1"/><circle cx="9.6" cy="15" r="1.1"/></symbol>' +
    '<symbol id="i-globe" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z"/></symbol>' +
    '<symbol id="i-image" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2.5"/><circle cx="8.5" cy="8.5" r="1.8"/><path d="M21 15.5l-4.8-4.8L5.5 21"/></symbol>' +
    '<symbol id="i-file" viewBox="0 0 24 24"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z"/><path d="M14 3v5h5"/></symbol>' +
    '<symbol id="i-layers" viewBox="0 0 24 24"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/></symbol>' +
    '<symbol id="i-crop" viewBox="0 0 24 24"><path d="M6 2v14a2 2 0 0 0 2 2h14"/><path d="M2 6h14a2 2 0 0 1 2 2v14"/></symbol>' +
    '<symbol id="i-compress" viewBox="0 0 24 24"><path d="M9 3v6H3M15 3v6h6M9 21v-6H3M15 21v-6h6"/><path d="M3 3l5.5 5.5M21 3l-5.5 5.5M3 21l5.5-5.5M21 21l-5.5-5.5"/></symbol>' +
    '<symbol id="i-refresh" viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-2.6-6.4"/><path d="M21 3v6h-6"/></symbol>' +
    '<symbol id="i-scan" viewBox="0 0 24 24"><path d="M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16"/><path d="M8 9h8M8 12h8M8 15h5"/></symbol>' +
    '<symbol id="i-id" viewBox="0 0 24 24"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><circle cx="8.5" cy="10.6" r="2.3"/><path d="M4.8 16.6c.7-1.6 2.1-2.4 3.7-2.4s3 .8 3.7 2.4"/><path d="M14.6 9.6h4.2M14.6 12.8h4.2"/></symbol>' +
    '<symbol id="i-pen" viewBox="0 0 24 24"><path d="M4 20l1-4L15 6l3 3L8 19l-4 1z"/><path d="M14 7l3 3"/><path d="M17 3l4 4-2 2-4-4 2-2z"/></symbol>' +
    '<symbol id="i-wand" viewBox="0 0 24 24"><path d="M15 3V1.5M15 9.5V8M11.5 6.5H10M20 6.5h-1.5"/><path d="M13.8 7.8L3 18.6"/><path d="M18 15v-1.5M18 21.5V20M14.5 18H13M22.5 18H21"/></symbol>' +
    '<symbol id="i-grid" viewBox="0 0 24 24"><rect x="3" y="3" width="7.5" height="7.5" rx="1.6"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.6"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.6"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.6"/></symbol>' +
    '<symbol id="i-share" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></symbol>' +
    '<symbol id="i-arrow-up" viewBox="0 0 24 24"><path d="M12 19V5"/><path d="M6 11l6-6 6 6"/></symbol>' +
    '<symbol id="i-scale" viewBox="0 0 24 24"><path d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4"/><rect x="9" y="9" width="6" height="6" rx="1.2"/></symbol>' +
    '<symbol id="i-expand" viewBox="0 0 24 24"><path d="M3 9V3h6M21 9V3h-6M3 15v6h6M21 15v6h-6"/><path d="M9 3L3 9M15 3l6 6M9 21l-6-6M15 21l6-6"/></symbol>' +
    '<symbol id="i-type" viewBox="0 0 24 24"><path d="M5 6.5V5h14v1.5"/><path d="M12 5v14"/><path d="M9 19h6"/></symbol>' +
    '<symbol id="i-blur" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.6"/><circle cx="12" cy="12" r="8" stroke-dasharray="3 3"/></symbol>' +
    '<symbol id="i-frame" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2.5" stroke-dasharray="4 3"/><rect x="7" y="7" width="10" height="10" rx="1.5"/></symbol>' +
    '<symbol id="i-face" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="9" cy="10" r="1"/><circle cx="15" cy="10" r="1"/><path d="M8.5 14.4c1 1.3 2.2 2 3.5 2s2.5-.7 3.5-2"/></symbol>' +
    '</svg>';
  if (!document.getElementById('wikisai-sprite')) {
    var s = document.createElement('div');
    s.id = 'wikisai-sprite';
    s.innerHTML = SPRITE;
    document.body.insertBefore(s, document.body.firstChild);
  }

  /* ---------- Header injection ---------- */
  function injectHeader(){
    if (document.querySelector('.hdr')) return;
    var hdr = document.createElement('header');
    hdr.className = 'hdr';
    hdr.innerHTML =
      '<div class="hdr-in">' +
        '<a class="logo" href="/" aria-label="WikisAI home">' +
          '<img src="/logo.png" alt="WikisAI logo" width="38" height="38">' +
          '<span class="logo-txt"><b>Wikis<em>AI</em></b></span>' +
        '</a>' +
        '<nav class="nav" id="wikisai-nav" aria-label="Main navigation">' +
          '<a href="/">Home</a>' +
          '<a href="/#tools">Tools</a>' +
          '<a href="/#features">Features</a>' +
          '<a href="/#about">About</a>' +
          '<a href="/#contact">Contact</a>' +
        '</nav>' +
        '<span class="free-badge"><svg class="ic"><use href="#i-bolt"/></svg> 100% Free</span>' +
        '<button class="burger" id="wikisai-burger" aria-label="Toggle menu" aria-expanded="false"><span></span></button>' +
      '</div>';
    document.body.insertBefore(hdr, document.body.firstChild);
  }
  injectHeader();

  /* ---------- Burger ---------- */
  var burger = document.getElementById('wikisai-burger');
  var nav = document.getElementById('wikisai-nav');
  if (burger && nav) {
    burger.addEventListener('click', function(){
      var open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function(e){
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Footer injection ---------- */
  function injectFooter(){
    if (document.querySelector('footer')) return;
    var f = document.createElement('footer');
    f.innerHTML =
      '<div class="f-in">' +
        '<div class="f-brand">' +
          '<img src="/logo.png" alt="WikisAI logo" width="44" height="44">' +
          '<p><strong>WikisAI</strong> builds fast, free and privacy-first AI tools for images, photos, PDFs and everyday file tasks. No installs, no accounts, no cost — ever.</p>' +
          '<span class="f-badge"><span class="dot"></span> 100% Free · Files auto-deleted in 30 min</span>' +
        '</div>' +
        '<div class="f-col"><h4>Popular Tools</h4><ul>' +
          '<li><a href="/passport-size-photo-genrate.html">Passport Photo Maker</a></li>' +
          '<li><a href="/reduce-image-size-in-kb.html">Reduce Image Size in KB</a></li>' +
          '<li><a href="/resize-image-pixel.html">Resize Image Pixel</a></li>' +
          '<li><a href="/remove-image-background.html">Remove Background</a></li>' +
          '<li><a href="/compress-image.html">Image Compressor</a></li>' +
          '<li><a href="/image-to-pdf.html">Image to PDF</a></li>' +
        '</ul></div>' +
        '<div class="f-col"><h4>Categories</h4><ul>' +
          '<li><a href="/#tools">Featured AI Tools</a></li>' +
          '<li><a href="/all-tools.html">All Tools</a></li>' +
          '<li><a href="/passport-size-photo-genrate.html">Passport &amp; ID Sizes</a></li>' +
          '<li><a href="/image-to-pdf.html">PDF Tools</a></li>' +
          '<li><a href="/compress-image.html">Compress &amp; Reduce</a></li>' +
          '<li><a href="/gif-maker.html">GIF &amp; Video Tools</a></li>' +
        '</ul></div>' +
        '<div class="f-col"><h4>WikisAI</h4><ul>' +
          '<li><a href="/all-tools.html">All Tools</a></li>' +
          '<li><a href="/contact-us.html">Contact Us</a></li>' +
          '<li><a href="/policy.html">Privacy Policy</a></li>' +
          '<li><a href="/terms.html">Terms Of Use</a></li>' +
          '<li><a href="/sitemap.xml">Sitemap</a></li>' +
          '<li><a href="/blog.html">Blog &amp; Guides</a></li>' +
        '</ul></div>' +
      '</div>' +
      '<div class="f-bot">' +
        '<p>© <span id="wikisai-yr"></span> WikisAI. All rights reserved. Made for everyone, free forever.</p>' +
        '<div class="f-legal">' +
          '<a href="/policy.html">Privacy</a><a href="/terms.html">Terms</a>' +
          '<a href="/contact-us.html">Contact</a><a href="/sitemap.xml">Sitemap</a>' +
        '</div>' +
      '</div>';
    document.body.appendChild(f);
    var yr = document.getElementById('wikisai-yr');
    if (yr) yr.textContent = new Date().getFullYear();
  }
  injectFooter();

  /* ---------- Toast ---------- */
  var toastEl = document.createElement('div');
  toastEl.className = 'toast';
  toastEl.id = 'wikisai-toast';
  document.body.appendChild(toastEl);

  window.wikisaiToast = function(msg){
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(function(){ toastEl.classList.remove('show'); }, 2400);
  };

  /* ---------- Spinner ---------- */
  var spinEl = document.createElement('div');
  spinEl.className = 'spinner-overlay';
  spinEl.id = 'wikisai-spinner';
  spinEl.innerHTML = '<div class="spinner"></div>';
  document.body.appendChild(spinEl);

  window.wikisaiSpinner = {
    show: function(){ spinEl.classList.add('show'); },
    hide: function(){ spinEl.classList.remove('show'); }
  };

  /* ---------- Back to top ---------- */
  var toTop = document.createElement('button');
  toTop.className = 'to-top';
  toTop.setAttribute('aria-label', 'Back to top');
  toTop.innerHTML = '<svg class="ic" style="width:20px;height:20px"><use href="#i-arrow-up"/></svg>';
  document.body.appendChild(toTop);

  var st = document.createElement('style');
  st.textContent = '.to-top{position:fixed;right:22px;bottom:24px;z-index:70;width:48px;height:48px;' +
    'border-radius:14px;cursor:pointer;background:#fff;color:#0284c7;display:grid;place-items:center;' +
    'box-shadow:0 14px 32px -18px rgba(15,23,42,.6);border:1px solid #e6eef7;opacity:0;' +
    'visibility:hidden;transition:.22s}.to-top.show{opacity:1;visibility:visible}' +
    '.to-top:hover{background:#e0f2fe;transform:translateY(-2px)}';
  document.head.appendChild(st);

  window.addEventListener('scroll', function(){
    toTop.classList.toggle('show', window.scrollY > 700);
  }, { passive: true });
  toTop.addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- Helpers on window ---------- */
  window.wikisai = {
    $:  function(s, r){ return (r || document).querySelector(s); },
    $$: function(s, r){ return Array.prototype.slice.call((r || document).querySelectorAll(s)); },
    clamp: function(v, a, b){ return Math.min(b, Math.max(a, v)); },
    downloadBlob: function(blob, name){
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url; a.download = name;
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function(){ URL.revokeObjectURL(url); }, 5000);
      window.wikisaiToast('Downloaded: ' + name);
    },
    formatBytes: function(b){
      if (b < 1024) return b + ' B';
      if (b < 1048576) return (b / 1024).toFixed(1) + ' KB';
      return (b / 1048576).toFixed(2) + ' MB';
    }
  };

})();