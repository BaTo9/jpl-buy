/* ============================================================
   JapanBuy — explore.js
   Explore view — route-style
   Header устгагдсан, ✕ товчлуур "Shop by Category"-д шилжсэн
   ============================================================ */

(function () {
  'use strict';

  /* =========================================================
     1. TRANSLATIONS
     ========================================================= */
  var EX_I18N = {
    en: {
      shopByCat:'Shop by Category',
      featured:'Featured Products',
      viewAll:'View All →',
      catMen:'Men', catWomen:'Women', catKids:'Kids',
      catElectronics:'Electronics', catOther:'Other',
      addToCart:'Add to Cart', buyNow:'Buy Now',
      freeShip:'Free Shipping', easyReturn:'Easy Return', secure:'Secure Checkout',
      filters:'Filters', clearAll:'Clear All', moreFilters:'More Filters',
      showing:'Showing 1–12 of 248 products',
      orderSummary:'Order Summary',
      stdShipping:'Standard Shipping (3–5 business days)',
      proceedCheckout:'Proceed to Checkout',
      continueShopping:'← Continue Shopping',
      addedToast:'Added to cart'
    },
    ja: {
      shopByCat:'カテゴリーで探す',
      featured:'おすすめ商品',
      viewAll:'すべて表示 →',
      catMen:'メンズ', catWomen:'レディース', catKids:'キッズ',
      catElectronics:'家電', catOther:'その他',
      addToCart:'カートに追加', buyNow:'今すぐ購入',
      freeShip:'送料無料', easyReturn:'簡単返品', secure:'安全な決済',
      filters:'フィルター', clearAll:'すべてクリア', moreFilters:'もっと見る',
      showing:'248件中 1–12件を表示',
      orderSummary:'ご注文内容',
      stdShipping:'通常配送（3〜5営業日）',
      proceedCheckout:'レジに進む',
      continueShopping:'← 買い物を続ける',
      addedToast:'カートに追加しました'
    },
    mn: {
      shopByCat:'Ангилалаар хайх',
      featured:'Онцлох бүтээгдэхүүн',
      viewAll:'Бүгдийг харах →',
      catMen:'Эрэгтэй', catWomen:'Эмэгтэй', catKids:'Хүүхэд',
      catElectronics:'Электроник', catOther:'Бусад',
      addToCart:'Сагсанд хийх', buyNow:'Шууд авах',
      freeShip:'Үнэгүй хүргэлт', easyReturn:'Хялбар буцаалт', secure:'Аюулгүй төлбөр',
      filters:'Шүүлтүүр', clearAll:'Бүгдийг цэвэрлэх', moreFilters:'Бусад шүүлтүүр',
      showing:'248 бүтээгдэхүүнээс 1–12',
      orderSummary:'Захиалгын дүн',
      stdShipping:'Стандарт хүргэлт (3–5 өдөр)',
      proceedCheckout:'Төлбөр төлөх',
      continueShopping:'← Худалдан авалт үргэлжлүүлэх',
      addedToast:'Сагсанд нэмэгдлээ'
    }
  };

  function getLang() {
    try {
      var l = localStorage.getItem('jb_lang');
      return (l === 'ja' || l === 'mn') ? l : 'en';
    } catch (e) { return 'en'; }
  }
  function t(key) {
    var lang = getLang();
    var d = EX_I18N[lang] || EX_I18N.en;
    return d[key] || EX_I18N.en[key] || key;
  }

  /* =========================================================
     2. HTML TEMPLATE — Header устгагдсан
     ========================================================= */
  var HTML =
    '<div class="explore-modal" id="exploreModal">' +
      '<div class="explore-content">' +

        '<div class="explore-body">' +

          /* ---------- 1. SHOP BY CATEGORY (✕ энд) ---------- */
          '<section class="ex-section">' +
            '<div class="ex-section-head">' +
              '<h3 data-ex-i18n="shopByCat">Shop by Category</h3>' +
              '<button class="explore-close" type="button" id="exploreClose" aria-label="Close">✕</button>' +
            '</div>' +
            '<div class="ex-cat-row">' +
              '<div class="ex-cat-card" style="--cat-bg:linear-gradient(135deg,#4b5563,#6b7280)">' +
                '<div class="ex-cat-icon">👨</div><span data-ex-i18n="catMen">Men</span></div>' +
              '<div class="ex-cat-card" style="--cat-bg:linear-gradient(135deg,#f472b6,#ec4899)">' +
                '<div class="ex-cat-icon">👩</div><span data-ex-i18n="catWomen">Women</span></div>' +
              '<div class="ex-cat-card" style="--cat-bg:linear-gradient(135deg,#fbbf24,#f59e0b)">' +
                '<div class="ex-cat-icon">🧒</div><span data-ex-i18n="catKids">Kids</span></div>' +
              '<div class="ex-cat-card" style="--cat-bg:linear-gradient(135deg,#1f2937,#374151)">' +
                '<div class="ex-cat-icon">🎧</div><span data-ex-i18n="catElectronics">Electronics</span></div>' +
              '<div class="ex-cat-card" style="--cat-bg:linear-gradient(135deg,#a78bfa,#8b5cf6)">' +
                '<div class="ex-cat-icon">📦</div><span data-ex-i18n="catOther">Other</span></div>' +
            '</div>' +
          '</section>' +

          /* ---------- 2. FEATURED ---------- */
          '<section class="ex-section">' +
            '<div class="ex-section-head">' +
              '<h3 data-ex-i18n="featured">Featured Products</h3>' +
              '<button class="ex-view-all" type="button" data-ex-i18n="viewAll">View All →</button>' +
            '</div>' +
            '<div class="ex-prod-grid">' +
              buildProdCard('👕', '#dbeafe', 'Classic Polo Shirt', 'Men · Navy', '4.6', '128', '$29.99', '$49.99') +
              buildProdCard('👟', '#f3f4f6', 'Minimal Sneakers', 'Men · White', '4.7', '86', '$59.99', '$79.99') +
              buildProdCard('👜', '#fef3c7', 'Elegant Handbag', 'Women · Beige', '4.8', '74', '$49.99', '$69.99') +
              buildProdCard('⌚', '#e5e7eb', 'Smart Watch Pro', 'Electronics · Black', '4.5', '210', '$99.99', '$149.99') +
            '</div>' +
          '</section>' +

          /* ---------- 3. PRODUCT DETAIL ---------- */
          '<section class="ex-section ex-detail">' +
            '<div class="ex-detail-left">' +
              '<div class="ex-detail-main" style="background:#f3f4f6"><span>👟</span></div>' +
              '<div class="ex-thumbs">' +
                '<div class="ex-thumb active" style="background:#f3f4f6">👟</div>' +
                '<div class="ex-thumb" style="background:#e5e7eb">👟</div>' +
                '<div class="ex-thumb" style="background:#d1d5db">👟</div>' +
                '<div class="ex-thumb" style="background:#9ca3af">👟</div>' +
                '<div class="ex-thumb" style="background:#6b7280">👟</div>' +
              '</div>' +
            '</div>' +
            '<div class="ex-detail-right">' +
              '<div class="ex-breadcrumb">Home › Men › Footwear › UrbanFlex Knit Sneakers</div>' +
              '<div class="ex-detail-tag">MEN\'S FOOTWEAR</div>' +
              '<h3 class="ex-detail-title">UrbanFlex Knit Sneakers</h3>' +
              '<div class="ex-detail-rating">★★★★★ <strong>4.6</strong> <span>(842 Reviews)</span></div>' +
              '<div class="ex-detail-price"><strong>$79.99</strong><s>$99.99</s><span class="ex-off">20% OFF</span></div>' +
              '<p class="ex-detail-desc">Lightweight knit sneakers designed for all-day comfort and modern style. Breathable, flexible and built to move with you.</p>' +
              '<div class="ex-opt-group">' +
                '<label>Color: <span>Light Gray</span></label>' +
                '<div class="ex-colors">' +
                  '<span class="ex-color active" style="background:#d1d5db"></span>' +
                  '<span class="ex-color" style="background:#1f2937"></span>' +
                  '<span class="ex-color" style="background:#60a5fa"></span>' +
                  '<span class="ex-color" style="background:#fbbf24"></span>' +
                '</div>' +
              '</div>' +
              '<div class="ex-opt-group">' +
                '<label>Size: <span>9</span></label>' +
                '<div class="ex-sizes">' +
                  '<button type="button">7</button><button type="button">8</button>' +
                  '<button type="button" class="active">9</button><button type="button">10</button>' +
                  '<button type="button">11</button><button type="button">12</button>' +
                '</div>' +
              '</div>' +
              '<div class="ex-opt-group">' +
                '<label>Quantity:</label>' +
                '<div class="ex-qty"><button type="button">−</button><span>1</span><button type="button">+</button></div>' +
              '</div>' +
              '<div class="ex-detail-actions">' +
                '<button class="ex-btn-primary" type="button">🛒 <span data-ex-i18n="addToCart">Add to Cart</span></button>' +
                '<button class="ex-btn-outline" type="button" data-ex-i18n="buyNow">Buy Now</button>' +
              '</div>' +
              '<div class="ex-perks">' +
                '<div class="ex-perk">🚚 <span data-ex-i18n="freeShip">Free Shipping</span><small>On orders over $50</small></div>' +
                '<div class="ex-perk">↩️ <span data-ex-i18n="easyReturn">Easy Return</span><small>30-day return policy</small></div>' +
                '<div class="ex-perk">🔒 <span data-ex-i18n="secure">Secure Checkout</span><small>100% secure payments</small></div>' +
              '</div>' +
            '</div>' +
          '</section>' +

          /* ---------- 4. FILTERS + PRODUCTS ---------- */
          '<section class="ex-section ex-shop">' +
            '<aside class="ex-filters">' +
              '<div class="ex-filter-head">' +
                '<span data-ex-i18n="filters">Filters</span>' +
                '<button type="button" data-ex-i18n="clearAll">Clear All</button>' +
              '</div>' +
              '<div class="ex-filter-group">' +
                '<h4>Category</h4>' +
                '<label><input type="radio" name="ex-cat" checked> All Categories</label>' +
                '<label><input type="radio" name="ex-cat"> Men</label>' +
                '<label><input type="radio" name="ex-cat"> Women</label>' +
                '<label><input type="radio" name="ex-cat"> Electronics</label>' +
                '<label><input type="radio" name="ex-cat"> Footwear</label>' +
                '<label><input type="radio" name="ex-cat"> Accessories</label>' +
              '</div>' +
              '<div class="ex-filter-group">' +
                '<h4>Price Range</h4>' +
                '<input type="range" min="0" max="1000" value="500" class="ex-range" />' +
                '<div class="ex-range-label"><span>$0</span><span>$1000</span></div>' +
              '</div>' +
              '<div class="ex-filter-group">' +
                '<h4>Brand</h4>' +
                '<input type="text" class="ex-search" placeholder="Search brands" />' +
                '<label><input type="checkbox" checked> Nike</label>' +
                '<label><input type="checkbox"> Adidas</label>' +
                '<label><input type="checkbox"> Sony</label>' +
                '<label><input type="checkbox"> Puma</label>' +
                '<label><input type="checkbox"> Bose</label>' +
              '</div>' +
              '<div class="ex-filter-group">' +
                '<h4>Color</h4>' +
                '<div class="ex-color-row">' +
                  '<span class="ex-color-dot" style="background:#1f2937"></span>' +
                  '<span class="ex-color-dot active" style="background:#60a5fa"></span>' +
                  '<span class="ex-color-dot" style="background:#fbbf24"></span>' +
                  '<span class="ex-color-dot" style="background:#f472b6"></span>' +
                  '<span class="ex-color-dot" style="background:#e5e7eb"></span>' +
                '</div>' +
              '</div>' +
              '<div class="ex-filter-group">' +
                '<h4>Size</h4>' +
                '<div class="ex-size-row">' +
                  '<button type="button">XS</button><button type="button">S</button>' +
                  '<button type="button" class="active">M</button><button type="button">L</button>' +
                  '<button type="button">XL</button><button type="button">XXL</button>' +
                '</div>' +
              '</div>' +
              '<button class="ex-more-filters" type="button" data-ex-i18n="moreFilters">More Filters</button>' +
            '</aside>' +

            '<div class="ex-shop-main">' +
              '<div class="ex-shop-head">' +
                '<span data-ex-i18n="showing">Showing 1–12 of 248 products</span>' +
                '<select class="ex-sort">' +
                  '<option>Best Selling</option>' +
                  '<option>Price: Low to High</option>' +
                  '<option>Price: High to Low</option>' +
                  '<option>Newest</option>' +
                '</select>' +
              '</div>' +
              '<div class="ex-shop-grid">' +
                buildShopCard('🧥', '#e5e7eb', 'Oversized Cotton Overshirt', 'Men · Casual', '4.7', '128', '$49.99') +
                buildShopCard('🧶', '#fef3c7', 'Knitted Crewneck Sweater', 'Women · Casual', '4.8', '95', '$39.99') +
                buildShopCard('🎧', '#1f2937', 'Sony WH-1000XM5', 'Wireless Headphones', '4.9', '1,246', '$349.99', '#fff') +
                buildShopCard('⌚', '#111827', 'Apple Watch Series 9', 'GPS 41mm', '4.9', '872', '$399.00', '#fff') +
                buildShopCard('👟', '#f3f4f6', "Nike Air Force 1 '07", 'Men · White', '4.9', '1,532', '$99.99') +
                buildShopCard('👝', '#fef3c7', 'Minimal Crossbody Bag', 'Women · Leather', '4.7', '312', '$59.99') +
                buildShopCard('📱', '#374151', 'Samsung Galaxy S24 Ultra', '512GB · Titanium', '4.8', '643', '$1,199.99', '#fff') +
                buildShopCard('📷', '#111827', 'Canon EOS R50', 'Mirrorless Camera', '4.7', '421', '$679.00', '#fff') +
              '</div>' +
            '</div>' +
          '</section>' +

          /* ---------- 5. CART PREVIEW ---------- */
          '<section class="ex-section ex-cart-preview">' +
            '<div class="ex-cart-head">' +
              '<h3>Your Cart <span>(3)</span></h3>' +
              '<button type="button" class="ex-continue" data-ex-i18n="continueShopping">← Continue Shopping</button>' +
            '</div>' +
            '<div class="ex-cart-layout">' +
              '<div class="ex-cart-list">' +
                buildCartItem('🎧', '#1f2937', 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones', '$349.99', false, '#fff') +
                buildCartItem('🎒', '#1e40af', 'Herschel Classic Backpack Navy', '$79.99', false, '#fff') +
                buildCartItem('👟', '#f3f4f6', 'Adidas Stan Smith Sneakers White / Green', '$99.99', true) +
                '<div class="ex-secure-badge">🔒 <strong>Secure Shopping</strong> — Your data is protected with 256-bit SSL encryption.</div>' +
              '</div>' +
              '<aside class="ex-summary">' +
                '<h4 data-ex-i18n="orderSummary">Order Summary</h4>' +
                '<div class="ex-sum-row"><span>Subtotal (3 items)</span><span>$529.97</span></div>' +
                '<div class="ex-sum-row"><span>Shipping</span><span>$9.99</span></div>' +
                '<div class="ex-sum-total"><span>Total</span><strong>$539.96</strong></div>' +
                '<div class="ex-sum-ship">🚚 <span data-ex-i18n="stdShipping">Standard Shipping (3–5 business days)</span></div>' +
                '<button class="ex-checkout-btn" type="button">🔒 <span data-ex-i18n="proceedCheckout">Proceed to Checkout</span></button>' +
                '<div class="ex-pay-icons">' +
                  '<span class="ex-pay">VISA</span>' +
                  '<span class="ex-pay">MC</span>' +
                  '<span class="ex-pay">PayPal</span>' +
                '</div>' +
              '</aside>' +
            '</div>' +
          '</section>' +

        '</div>' +
      '</div>' +
    '</div>';

  function buildProdCard(emoji, bg, name, sub, rating, reviews, price, oldPrice) {
    return '<div class="ex-prod-card">' +
      '<button class="ex-heart" type="button" aria-label="wishlist">🤍</button>' +
      '<div class="ex-prod-img" style="background:' + bg + '"><span>' + emoji + '</span></div>' +
      '<div class="ex-prod-info">' +
        '<div class="ex-prod-name">' + name + '</div>' +
        '<div class="ex-prod-sub">' + sub + '</div>' +
        '<div class="ex-prod-rating">★ ' + rating + ' <span>(' + reviews + ')</span></div>' +
        '<div class="ex-prod-price"><strong>' + price + '</strong>' + (oldPrice ? ' <s>' + oldPrice + '</s>' : '') + '</div>' +
        '<button class="ex-add-btn" type="button">🛒 <span data-ex-i18n="addToCart">Add to Cart</span></button>' +
      '</div>' +
    '</div>';
  }

  function buildShopCard(emoji, bg, name, sub, rating, reviews, price, color) {
    return '<div class="ex-prod-card small">' +
      '<button class="ex-heart" type="button" aria-label="wishlist">🤍</button>' +
      '<div class="ex-prod-img" style="background:' + bg + (color ? ';color:' + color : '') + '"><span>' + emoji + '</span></div>' +
      '<div class="ex-prod-info">' +
        '<div class="ex-prod-name">' + name + '</div>' +
        '<div class="ex-prod-sub">' + sub + '</div>' +
        '<div class="ex-prod-rating">★ ' + rating + ' <span>(' + reviews + ')</span></div>' +
        '<div class="ex-prod-price"><strong>' + price + '</strong></div>' +
        '<button class="ex-add-btn" type="button">🛒 <span data-ex-i18n="addToCart">Add to Cart</span></button>' +
      '</div>' +
    '</div>';
  }

  function buildCartItem(emoji, bg, name, price, lowStock, color) {
    return '<div class="ex-cart-item">' +
      '<div class="ex-cart-img" style="background:' + bg + (color ? ';color:' + color : '') + '">' + emoji + '</div>' +
      '<div class="ex-cart-info">' +
        '<div class="ex-cart-name">' + name + '</div>' +
        '<div class="ex-cart-stock' + (lowStock ? ' low' : '') + '">' + (lowStock ? '● Only 2 left' : '● In Stock') + '</div>' +
      '</div>' +
      '<div class="ex-cart-price">' + price + '</div>' +
      '<div class="ex-cart-qty"><button type="button">−</button><span>1</span><button type="button">+</button></div>' +
      '<div class="ex-cart-total">' + price + '</div>' +
      '<button class="ex-cart-remove" type="button" aria-label="remove">🗑</button>' +
    '</div>';
  }

  /* =========================================================
     3. STATE
     ========================================================= */
  var modalEl = null;

  /* =========================================================
     4. INJECT
     ========================================================= */
  function inject() {
    if (document.getElementById('exploreModal')) {
      modalEl = document.getElementById('exploreModal');
      return;
    }
    document.body.insertAdjacentHTML('beforeend', HTML);
    modalEl = document.getElementById('exploreModal');
  }

  /* =========================================================
     5. i18n
     ========================================================= */
  function applyI18n() {
    if (!modalEl) return;
    var nodes = modalEl.querySelectorAll('[data-ex-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var k = nodes[i].getAttribute('data-ex-i18n');
      var val = t(k);
      if (val) nodes[i].textContent = val;
    }
  }

  /* =========================================================
     6. OPEN / CLOSE
     ========================================================= */
  function isOpen() { return document.body.classList.contains('explore-open'); }

  function open() {
    if (!modalEl) inject();
    applyI18n();
    document.body.classList.add('explore-open');
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
  function close() {
    document.body.classList.remove('explore-open');
  }

  /* =========================================================
     7. TOAST
     ========================================================= */
  function showToast(msg) {
    var el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(function () {
      el.classList.remove('show');
    }, 1900);
  }

  /* =========================================================
     8. BIND
     ========================================================= */
  function bind() {
    var closeBtn = document.getElementById('exploreClose');
    if (closeBtn) closeBtn.addEventListener('click', close);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen()) close();
    });

    /* Nav товчлуур дарахад эхлээд Explore хаагдана */
    document.addEventListener('click', function (e) {
      if (!isOpen()) return;
      var btn = e.target.closest(
        '.bottom-nav .nav-item,' +
        '#menuBtn,' +
        '#cartBtn,' +
        '#langBtn,' +
        '#themeBtn,' +
        '.header-actions button'
      );
      if (btn) close();
    }, true);

    /* Add to cart */
    modalEl.addEventListener('click', function (e) {
      var addBtn = e.target.closest('.ex-add-btn, .ex-btn-primary, .ex-checkout-btn');
      if (addBtn) showToast(t('addedToast'));
    });

    /* Thumbnails */
    modalEl.addEventListener('click', function (e) {
      var thumb = e.target.closest('.ex-thumb');
      if (thumb) {
        var all = modalEl.querySelectorAll('.ex-thumb');
        for (var i = 0; i < all.length; i++) all[i].classList.remove('active');
        thumb.classList.add('active');
      }
    });

    /* Colors / sizes */
    modalEl.addEventListener('click', function (e) {
      var color = e.target.closest('.ex-color, .ex-color-dot');
      if (color) {
        var group = color.parentNode.querySelectorAll('.ex-color, .ex-color-dot');
        for (var i = 0; i < group.length; i++) group[i].classList.remove('active');
        color.classList.add('active');
      }
      var size = e.target.closest('.ex-size-row button');
      if (size) {
        var row = size.parentNode.querySelectorAll('button');
        for (var j = 0; j < row.length; j++) row[j].classList.remove('active');
        size.classList.add('active');
      }
      var size2 = e.target.closest('.ex-sizes button');
      if (size2) {
        var row2 = size2.parentNode.querySelectorAll('button');
        for (var k = 0; k < row2.length; k++) row2[k].classList.remove('active');
        size2.classList.add('active');
      }
    });

    /* Qty */
    modalEl.addEventListener('click', function (e) {
      var qtyBox = e.target.closest('.ex-qty');
      if (!qtyBox) return;
      var label = qtyBox.querySelector('span');
      var current = parseInt(label.textContent, 10) || 1;
      if (e.target.textContent === '+') current++;
      if (e.target.textContent === '−' || e.target.textContent === '-') current--;
      if (current < 1) current = 1;
      label.textContent = current;
    });

    /* Continue Shopping */
    var contBtn = modalEl.querySelector('.ex-continue');
    if (contBtn) contBtn.addEventListener('click', close);
  }

  /* =========================================================
     9. BANNER
     ========================================================= */
  function attachToBanner() {
    var old = document.getElementById('bannerBtn');
    if (!old) return;
    var fresh = old.cloneNode(true);
    old.parentNode.replaceChild(fresh, old);
    fresh.addEventListener('click', function (e) {
      e.preventDefault();
      open();
    });
  }

  /* =========================================================
     10. INIT
     ========================================================= */
  function init() {
    inject();
    applyI18n();
    bind();
    attachToBanner();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* =========================================================
     11. GLOBAL API
     ========================================================= */
  window.ExploreModal = {
    open: open,
    close: close,
    isOpen: isOpen
  };

})();
