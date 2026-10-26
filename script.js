/* ============================================================
   JapanBuy — script.js
   All application logic: i18n, theme, cart, filters, UI, auth
   ============================================================ */

(function () {
  'use strict';

  /* =========================================================
     1. PRODUCT DATA
     ========================================================= */
  var PRODUCTS = [
    { id:'uniqlo-down',    emoji:'🧥', price:12500, key:'p1', tags:['uniqlo','fashion'] },
    { id:'switch-oled',    emoji:'🎮', price:37980, key:'p2', tags:['yodobashi','tech'] },
    { id:'shiseido-serum', emoji:'🧴', price:13200, key:'p3', tags:['shiseido','beauty'] },
    { id:'ichiran-ramen',  emoji:'🍜', price:2980,  key:'p4', tags:['rakuten','snacks'] },
    { id:'muji-diffuser',  emoji:'🕯️', price:4900,  key:'p5', tags:['muji','home'] },
    { id:'nike-airmax',    emoji:'👟', price:16500, key:'p6', tags:['snkrs','fashion'] },
    { id:'ghibli-figure',  emoji:'🐉', price:8800,  key:'p7', tags:['rakuten','culture'] },
    { id:'sony-xm5',       emoji:'🎧', price:49500, key:'p8', tags:['yodobashi','tech'] },
    { id:'gap-hoodie',    emoji:'👕', price:7990,  key:'p9',  tags:['gap','fashion'] },
    { id:'gap-denim',     emoji:'👖', price:9990,  key:'p10', tags:['gap','fashion'] },
    { id:'uniqlo-heat',   emoji:'🧣', price:1990,  key:'p11', tags:['uniqlo','fashion'] },
    { id:'zara-blazer',   emoji:'🧥', price:15990, key:'p12', tags:['zara','fashion'] },
    { id:'zara-dress',    emoji:'👗', price:9990,  key:'p13', tags:['zara','fashion'] },
    { id:'hm-sweater',    emoji:'🧶', price:3999,  key:'p14', tags:['hm','fashion'] },
    { id:'hm-jeans',      emoji:'👖', price:4999,  key:'p15', tags:['hm','fashion'] },
    { id:'gu-sweat',      emoji:'👚', price:1990,  key:'p16', tags:['gu','fashion'] },
    { id:'gu-pants',      emoji:'👖', price:2490,  key:'p17', tags:['gu','fashion'] },
    { id:'mk-bag',        emoji:'👜', price:38500, key:'p18', tags:['mk','fashion'] },
    { id:'mk-wallet',     emoji:'👛', price:16500, key:'p19', tags:['mk','fashion'] }
  ];

  function productById(id) {
    for (var i = 0; i < PRODUCTS.length; i++) {
      if (PRODUCTS[i].id === id) return PRODUCTS[i];
    }
    return null;
  }

  /* =========================================================
     2. TRANSLATIONS (EN / JA / MN)
     ========================================================= */
  var I18N = {
    en: {
      searchPh:'Search Japanese stores, brands...',
      shopFromStores:'SHOP FROM TOP STORES',
      trendingNow:'TRENDING NOW',
      bannerTitle:'GET THE BEST FROM JAPAN!',
      bannerText:'Authentic items delivered worldwide. START SHOPPING',
      bannerBtn:'EXPLORE NOW',
      btnDetails:'View Details',
      btnCart:'ADD TO CART',
      noResults:'No products found',

      storeGap:'Gap', storeGapJp:'ギャップ',
      storeUniqlo:'Uniqlo', storeUniqloJp:'ユニクロ',
      storeZara:'ZARA', storeZaraJp:'ザラ',
      storeGu:'GU', storeGuJp:'ジーユー',
      storeHm:'H&M', storeHmJp:'エイチ＆エム',
      storeMk:'Michael Kors', storeMkJp:'マイケル・コース',

      catFashion:'Fashion', catFashionJp:'ファッション',
      catBeauty:'Beauty', catBeautyJp:'ビューティ',
      catTech:'Tech', catTechJp:'テック',
      catHome:'Home', catHomeJp:'ホーム',
      catSnacks:'Snacks', catSnacksJp:'スナック',
      catCulture:'Culture', catCultureJp:'カルチャー',

      p1:'Uniqlo Ultra Light Down Jacket',
      p2:'Nintendo Switch OLED Model',
      p3:'Shiseido Ultimune Power Serum',
      p4:'Ichiran Ramen Kit (5pk)',
      p5:'MUJI Aroma Diffuser',
      p6:'Nike Air Max (SNKRS Exclusive)',
      p7:'Studio Ghibli Figure',
      p8:'Sony WH-1000XM5 Headphones',
      p9:'Gap Logo Hoodie', p10:'Gap Denim Jeans', p11:'Uniqlo HEATTECH Extra Warm', p12:'ZARA Tailored Blazer', p13:'ZARA Satin Dress', p14:'H&M Knit Sweater', p15:'H&M Slim Jeans', p16:'GU Oversized Sweatshirt', p17:'GU Wide Pants', p18:'Michael Kors Jet Set Tote Bag', p19:'Michael Kors Leather Wallet',

      navHome:'Home', navSearch:'Search', navCategories:'Categories', navCart:'Cart', navAccount:'Account',

      menu:'Menu',
      menuHome:'Home', menuStores:'Top Stores', menuCategories:'Categories',
      menuTrending:'Trending', menuCart:'My Cart',
      language:'Language', theme:'Theme', themeLight:'☀️ Light', themeDark:'🌙 Dark',

      cartTitle:'Your Cart',
      emptyCart:'Your cart is empty',
      subtotal:'Subtotal',
      checkout:'CHECKOUT',
      clearCart:'Clear cart',

      addedToCart:'Added to cart',
      removedFromCart:'Removed from cart',
      cartCleared:'Cart cleared',
      orderPlaced:'Thank you! Your order has been placed 🎉',
      emptyCartToast:'Your cart is empty',
      productsCount:'products',

      whyTitle:'OUR ADVANTAGES',
      whySubtitle:'Why choose JAPANBUY?',
      why1Title:'100% Authentic',
      why1Text:'Every item sourced directly from official Japanese stores and brands.',
      why2Title:'Worldwide Shipping',
      why2Text:'Fast, tracked delivery to over 100 countries around the world.',
      why3Title:'Best Prices',
      why3Text:'Transparent pricing with zero hidden fees — what you see is what you pay.',
      why4Title:'24/7 Support',
      why4Text:'Friendly help in English, Japanese and Mongolian — anytime you need it.',

      authTitle:'ACCOUNT',
      authHeading:'Welcome to JAPANBUY',
      authSubtext:'Log in or create an account to start shopping',
      welcomeBack:'Welcome back,',
      btnLogin:'LOG IN',
      btnRegister:'SIGN UP',
      btnLogout:'LOG OUT',
      loginTitle:'Log In',
      loginSub:'Welcome back! Please log in to continue.',
      registerTitle:'Sign Up',
      registerSub:'Create your account to start shopping.',
      btnLoginSubmit:'LOG IN',
      btnRegisterSubmit:'CREATE ACCOUNT',
      phName:'Full name',
      phEmail:'Email',
      phPassword:'Password',
      phConfirm:'Confirm password',
      noAccount:"Don't have an account?",
      haveAccount:'Already have an account?',
      loginSuccess:'Welcome back',
      registerSuccess:'Account created! Welcome',
      logoutSuccess:'Logged out',
      loginRequired:'Please log in to continue',
      errEmailExists:'This email is already registered',
      errInvalidCreds:'Email or password is incorrect',
      errPasswordMismatch:'Passwords do not match',
      errFillAll:'Please fill in all fields',
      errPasswordShort:'Password must be at least 4 characters',

      contactTitle:'CONTACT US',
      contactSubtitle:'Get in touch with us',
      phoneCopied:'Copied:',

      footerDesc:'The most reliable proxy shopping and cargo platform to order Japan\'s top brand clothing directly.',
      footerPages:'Pages',
      footerFollow:'Follow Us',
      footerCopy:'© 2026 JAPANBUY Proxy Shopping App. All rights reserved.',

      howToTitle:'SIMPLE 4 STEPS',
      howToSubtitle:'Ordering Guide & Payment Types',
      step1Title:'Create Account',
      step1Text:'Sign up or log in to unlock shopping access.',
      step2Title:'Browse & Select',
      step2Text:'Pick items from your favorite Japanese stores.',
      step3Title:'Add to Cart',
      step3Text:'Review your cart and confirm quantities.',
      step4Title:'Pay & Receive',
      step4Text:'Checkout securely and get it delivered worldwide.',
      paymentTitle:'Accepted Payment Methods',
      payVisa:'Visa / Mastercard',
      payPaypal:'PayPal',
      payBank:'Bank Transfer',
      payKonbini:'Konbini (Japan)'
    },

    ja: {
      searchPh:'日本のストア・ブランドを検索...',
      shopFromStores:'人気ストアから購入',
      trendingNow:'人気商品',
      bannerTitle:'日本から最高のものを！',
      bannerText:'本物の商品を世界中にお届けします。買い物を始めよう',
      bannerBtn:'今すぐ見る',
      btnDetails:'詳細を見る',
      btnCart:'カートに追加',
      noResults:'商品が見つかりません',

      storeGap:'ギャップ', storeGapJp:'GAP',
      storeUniqlo:'ユニクロ', storeUniqloJp:'Uniqlo',
      storeZara:'ザラ', storeZaraJp:'ZARA',
      storeGu:'ジーユー', storeGuJp:'GU',
      storeHm:'エイチ＆エム', storeHmJp:'H&M',
      storeMk:'マイケル・コース', storeMkJp:'Michael Kors',

      catFashion:'ファッション', catFashionJp:'Fashion',
      catBeauty:'ビューティ', catBeautyJp:'Beauty',
      catTech:'テック', catTechJp:'Tech',
      catHome:'ホーム', catHomeJp:'Home',
      catSnacks:'スナック', catSnacksJp:'Snacks',
      catCulture:'カルチャー', catCultureJp:'Culture',

      p1:'ユニクロ ウルトラライトダウンジャケット',
      p2:'Nintendo Switch 有機ELモデル',
      p3:'資生堂 アルティミューン パワライジング セラム',
      p4:'一蘭 ラーメンセット（5食入）',
      p5:'無印良品 アロマディフューザー',
      p6:'ナイキ エアマックス（SNKRS限定）',
      p7:'スタジオジブリ フィギュア',
      p8:'ソニー WH-1000XM5 ヘッドホン',
      p9:'GAP ロゴパーカー', p10:'GAP デニムジーンズ', p11:'ユニクロ ヒートテック極暖', p12:'ZARA テーラードブレザー', p13:'ZARA サテンワンピース', p14:'H&M ニットセーター', p15:'H&M スリムジーンズ', p16:'GU オーバーサイズスウェット', p17:'GU ワイドパンツ', p18:'マイケル・コース トートバッグ', p19:'マイケル・コース レザーウォレット',

      navHome:'ホーム', navSearch:'検索', navCategories:'カテゴリ', navCart:'カート', navAccount:'アカウント',

      menu:'メニュー',
      menuHome:'ホーム', menuStores:'人気ストア', menuCategories:'カテゴリ',
      menuTrending:'人気商品', menuCart:'マイカート',
      language:'言語', theme:'テーマ', themeLight:'☀️ ライト', themeDark:'🌙 ダーク',

      cartTitle:'カート',
      emptyCart:'カートは空です',
      subtotal:'小計',
      checkout:'レジに進む',
      clearCart:'カートを空にする',

      addedToCart:'カートに追加しました',
      removedFromCart:'削除しました',
      cartCleared:'カートを空にしました',
      orderPlaced:'ご注文ありがとうございます 🎉',
      emptyCartToast:'カートは空です',
      productsCount:'件',

      whyTitle:'私たちの強み',
      whySubtitle:'なぜJAPANBUYを選ぶのか？',
      why1Title:'100% 正規品',
      why1Text:'すべての商品は日本の公式ストア・ブランドから直接仕入れています。',
      why2Title:'世界中に配送',
      why2Text:'世界100カ国以上へ、追跡可能なスピード配送。',
      why3Title:'ベストプライス',
      why3Text:'追加料金なしの明朗会計。表示価格がそのままお支払い価格です。',
      why4Title:'24時間サポート',
      why4Text:'英語・日本語・モンゴル語でいつでもサポートいたします。',

      authTitle:'アカウント',
      authHeading:'JAPANBUYへようこそ',
      authSubtext:'ログインまたは新規登録してショッピングを始めましょう',
      welcomeBack:'おかえりなさい、',
      btnLogin:'ログイン',
      btnRegister:'新規登録',
      btnLogout:'ログアウト',
      loginTitle:'ログイン',
      loginSub:'続けるにはログインしてください。',
      registerTitle:'新規登録',
      registerSub:'アカウントを作成してショッピングを始めましょう。',
      btnLoginSubmit:'ログイン',
      btnRegisterSubmit:'アカウント作成',
      phName:'お名前',
      phEmail:'メールアドレス',
      phPassword:'パスワード',
      phConfirm:'パスワード確認',
      noAccount:'アカウントをお持ちでないですか？',
      haveAccount:'すでにアカウントをお持ちですか？',
      loginSuccess:'おかえりなさい',
      registerSuccess:'アカウント作成完了！ようこそ',
      logoutSuccess:'ログアウトしました',
      loginRequired:'続けるにはログインしてください',
      errEmailExists:'このメールは既に登録されています',
      errInvalidCreds:'メールまたはパスワードが間違っています',
      errPasswordMismatch:'パスワードが一致しません',
      errFillAll:'すべての項目を入力してください',
      errPasswordShort:'パスワードは4文字以上必要です',

      contactTitle:'お問い合わせ',
      contactSubtitle:'お気軽にご連絡ください',
      phoneCopied:'コピーしました:',

      footerDesc:'日本のトップブランド衣料品を直接注文できる、最も信頼できる代理購入・カーゴプラットフォーム。',
      footerPages:'ページ',
      footerFollow:'フォローする',
      footerCopy:'© 2026 JAPANBUY 代理購入アプリ。全著作権所有。',

      howToTitle:'簡単4ステップ',
      howToSubtitle:'ご注文の流れとお支払い方法',
      step1Title:'アカウント作成',
      step1Text:'登録またはログインしてショッピングを開始。',
      step2Title:'商品を選ぶ',
      step2Text:'お気に入りの日本ストアから商品を選択。',
      step3Title:'カートに追加',
      step3Text:'カートを確認して数量を調整。',
      step4Title:'支払いと受取',
      step4Text:'安全に決済して世界中にお届け。',
      paymentTitle:'ご利用可能なお支払い方法',
      payVisa:'Visa / Mastercard',
      payPaypal:'PayPal',
      payBank:'銀行振込',
      payKonbini:'コンビニ払い（日本）'
    },

    mn: {
      searchPh:'Японы дэлгүүр, брэнд хайх...',
      shopFromStores:'ШИЛДЭГ ДЭЛГҮҮРҮҮДЭЭС',
      trendingNow:'ТРЕНД ОДОО',
      bannerTitle:'ЯПОНООС ХАМГИЙН ШИЛДГИЙГ!',
      bannerText:'Жинхэнэ бүтээгдэхүүнийг дэлхий даяар хүргэнэ. ХУДАЛДАЖ АВЧ ЭХЭЛ',
      bannerBtn:'ОДОО ҮЗЭХ',
      btnDetails:'Дэлгэрэнгүй',
      btnCart:'САГСАНД ХИЙХ',
      noResults:'Бүтээгдэхүүн олдсонгүй',

      storeGap:'Gap', storeGapJp:'ギャップ',
      storeUniqlo:'Uniqlo', storeUniqloJp:'ユニクロ',
      storeZara:'ZARA', storeZaraJp:'ザラ',
      storeGu:'GU', storeGuJp:'ジーユー',
      storeHm:'H&M', storeHmJp:'エイチ＆エム',
      storeMk:'Michael Kors', storeMkJp:'マイケル・コース',

      catFashion:'Хувцас', catFashionJp:'ファッション',
      catBeauty:'Гоо сайхан', catBeautyJp:'ビューティ',
      catTech:'Техник', catTechJp:'テック',
      catHome:'Гэр', catHomeJp:'ホーム',
      catSnacks:'Хоол', catSnacksJp:'スナック',
      catCulture:'Соёл', catCultureJp:'カルチャー',

      p1:'Uniqlo хөнгөн даавуун куртка',
      p2:'Nintendo Switch OLED загвар',
      p3:'Shiseido Ultimune Power серум',
      p4:'Ichiran рамен иж бүрдэл (5ш)',
      p5:'MUJI анхилуун тос диффузер',
      p6:'Nike Air Max (SNKRS онцгой)',
      p7:'Studio Ghibli дүрс',
      p8:'Sony WH-1000XM5 чихэвч',
      p9:'Gap логотой hoodie', p10:'Gap жинсэн өмд', p11:'Uniqlo HEATTECH дулаан дотуур хувцас', p12:'ZARA пиджак', p13:'ZARA торгон даашинз', p14:'H&M нэхмэл цамц', p15:'H&M нарийн жинс', p16:'GU том загвартай свитер', p17:'GU өргөн өмд', p18:'Michael Kors цүнх', p19:'Michael Kors арьсан түрийвч',

      navHome:'Нүүр', navSearch:'Хайх', navCategories:'Ангилал', navCart:'Сагс', navAccount:'Бүртгэл',

      menu:'Цэс',
      menuHome:'Нүүр', menuStores:'Шилдэг дэлгүүр', menuCategories:'Ангилал',
      menuTrending:'Тренд', menuCart:'Миний сагс',
      language:'Хэл', theme:'Загвар', themeLight:'☀️ Гэрэл', themeDark:'🌙 Харанхуй',

      cartTitle:'Таны сагс',
      emptyCart:'Сагс хоосон байна',
      subtotal:'Нийт дүн',
      checkout:'ТӨЛБӨР ТӨЛӨХ',
      clearCart:'Сагс хоослох',

      addedToCart:'Сагсанд нэмэгдлээ',
      removedFromCart:'Сагснаас хасагдлаа',
      cartCleared:'Сагс хоослогдлоо',
      orderPlaced:'Баярлалаа! Таны захиалга баталгаажлаа 🎉',
      emptyCartToast:'Сагс хоосон байна',
      productsCount:'бүтээгдэхүүн',

      whyTitle:'БИДНИЙ ДАВУУ ТАЛ',
      whySubtitle:'Яагаад JAPANBUY-аар сонгох гэж?',
      why1Title:'100% Жинхэнэ',
      why1Text:'Бүх бүтээгдэхүүн Японы албан ёсны дэлгүүр, брэндээс шууд нийлүүлэгддэг.',
      why2Title:'Дэлхий даяар хүргэлт',
      why2Text:'Дэлхийн 100 гаруй улс руу хяналттай шуурхай хүргэлт.',
      why3Title:'Хамгийн сайн үнэ',
      why3Text:'Нуугдмал төлбөргүй, ил тод үнэ. Харсан үнэ нь төлөх үнэ.',
      why4Title:'24/7 дэмжлэг',
      why4Text:'Англи, япон, монгол хэлээр хүссэн үедээ тусламж аваарай.',

      authTitle:'БҮРТГЭЛ',
      authHeading:'JAPANBUY-д тавтай морил',
      authSubtext:'Худалдан авалт хийхийн тулд нэвтрэх эсвэл бүртгүүлнэ үү',
      welcomeBack:'Тавтай морил,',
      btnLogin:'НЭВТРЭХ',
      btnRegister:'БҮРТГҮҮЛЭХ',
      btnLogout:'ГАРАХ',
      loginTitle:'Нэвтрэх',
      loginSub:'Үргэлжлүүлэхийн тулд нэвтэрнэ үү.',
      registerTitle:'Бүртгүүлэх',
      registerSub:'Бүртгэл үүсгээд худалдан авалт хийгээрэй.',
      btnLoginSubmit:'НЭВТРЭХ',
      btnRegisterSubmit:'БҮРТГЭЛ ҮҮСГЭХ',
      phName:'Бүтэн нэр',
      phEmail:'И-мэйл',
      phPassword:'Нууц үг',
      phConfirm:'Нууц үг давтах',
      noAccount:'Бүртгэл байхгүй юу?',
      haveAccount:'Бүртгэл байгаа юу?',
      loginSuccess:'Тавтай морил',
      registerSuccess:'Бүртгэл амжилттай үүслээ! Тавтай морил',
      logoutSuccess:'Системээс гарлаа',
      loginRequired:'Үргэлжлүүлэхийн тулд нэвтэрнэ үү',
      errEmailExists:'Энэ и-мэйл аль хэдийн бүртгэгдсэн байна',
      errInvalidCreds:'И-мэйл эсвэл нууц үг буруу байна',
      errPasswordMismatch:'Нууц үг таарахгүй байна',
      errFillAll:'Бүх талбарыг бөглөнө үү',
      errPasswordShort:'Нууц үг хамгийн багадаа 4 тэмдэгт байх ёстой',

      contactTitle:'ХОЛБОО БАРИХ',
      contactSubtitle:'Бидэнтэй Холбогдох',
      phoneCopied:'Хуулагдлаа:',

      footerDesc:'Японы топ брэнд хувцсыг шууд захиалан авах хамгийн найдвартай зуучлал ба карго платформ.',
      footerPages:'Хуудаснууд',
      footerFollow:'Дагах',
      footerCopy:'© 2026 JAPANBUY Зуучлалын Худалдааны Апп. Бүх эрх хуулиар хамгаалагдсан.',

      howToTitle:'ХЯЛБАР 4 АЛХАМ',
      howToSubtitle:'Захиалах Заавар & Төлбөрийн Төрөл',
      step1Title:'Бүртгүүлэх',
      step1Text:'Бүртгүүлэх эсвэл нэвтэрч худалдан авалт хийх боломжтой болно.',
      step2Title:'Бараа сонгох',
      step2Text:'Дуртай Японы дэлгүүрүүдээс бараагаа сонгоно.',
      step3Title:'Сагсанд хийх',
      step3Text:'Сагсаа шалгаж, тоо ширхэгийг баталгаажуулна.',
      step4Title:'Төлбөр төлөх',
      step4Text:'Аюулгүй төлбөр төлж, дэлхий даяар хүргүүлнэ.',
      paymentTitle:'Хүлээн авах төлбөрийн хэлбэрүүд',
      payVisa:'Visa / Mastercard',
      payPaypal:'PayPal',
      payBank:'Банкны шилжүүлэг',
      payKonbini:'Конбини (Япон)'
    }
  };

  var LANG_ORDER = ['en', 'ja', 'mn'];
  var LANG_META = {
    en: { flag:'en', code:'EN' },
    ja: { flag:'ja', code:'JA' },
    mn: { flag:'mn', code:'MN' }
  };

  /* =========================================================
     3. STATE
     ========================================================= */
  function safeParse(str, fallback) {
    try {
      var v = JSON.parse(str);
      return Array.isArray(v) ? v : fallback;
    } catch (e) { return fallback; }
  }
  /* Объект хадгалах тусдаа helper — user-т зориулсан */
  function safeParseObj(str, fallback) {
    try {
      var v = JSON.parse(str);
      return (v && typeof v === 'object' && !Array.isArray(v)) ? v : fallback;
    } catch (e) { return fallback; }
  }

  var state = {
    lang: localStorage.getItem('jb_lang') || 'en',
    theme: localStorage.getItem('jb_theme') ||
           (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    query: '',
    store: null,
    category: null,
    cart: safeParse(localStorage.getItem('jb_cart'), []),
    detailId: null,
    user: safeParseObj(localStorage.getItem('jb_user'), null)
  };

  if (LANG_ORDER.indexOf(state.lang) === -1) state.lang = 'en';
  if (state.theme !== 'dark') state.theme = 'light';
  if (state.user && !state.user.email) state.user = null;

  /* =========================================================
     4. HELPERS
     ========================================================= */
  function t(key) {
    var d = I18N[state.lang] || I18N.en;
    return (d[key] !== undefined) ? d[key] : (I18N.en[key] !== undefined ? I18N.en[key] : key);
  }
  function fmt(n) {
    return '¥' + Number(n).toLocaleString('en-US');
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  /* =========================================================
     5. DOM REFS
     ========================================================= */
  var overlay      = $('#overlay');
  var menuDrawer   = $('#menuDrawer');
  var cartDrawer   = $('#cartDrawer');
  var detailModal  = $('#detailModal');
  var cartBadge    = $('#cartBadge');
  var navBadge     = $('#navBadge');
  var cartList     = $('#cartList');
  var cartTotalEl  = $('#cartTotal');
  var checkoutBtn  = $('#checkoutBtn');
  var productsGrid = $('#products');
  var searchInput  = $('#searchInput');
  var toastEl      = $('#toast');
  var themeBtn     = $('#themeBtn');

  /* =========================================================
     5.1. AUTH DOM REFS
     ========================================================= */
  var loginModal      = $('#loginModal');
  var registerModal   = $('#registerModal');
  var authGuest       = $('#authGuest');
  var authUser        = $('#authUser');
  var userNameDisplay = $('#userNameDisplay');
  var userEmailDisplay= $('#userEmailDisplay');
  var loginForm       = $('#loginForm');
  var registerForm    = $('#registerForm');
  var loginError      = $('#loginError');
  var registerError   = $('#registerError');

  /* =========================================================
     5.2. AUTH LOGIC
     ========================================================= */
  function getUsers() {
    return safeParse(localStorage.getItem('jb_users'), []);
  }
  function saveUsers(users) {
    try { localStorage.setItem('jb_users', JSON.stringify(users)); } catch (e) {}
  }
  function saveUser(user) {
    state.user = user;
    try {
      if (user) localStorage.setItem('jb_user', JSON.stringify(user));
      else localStorage.removeItem('jb_user');
    } catch (e) {}
  }
  function isLoggedIn() { return !!state.user; }

  function updateAuthUI() {
    if (isLoggedIn()) {
      authGuest.hidden = true;
      authUser.hidden = false;
      userNameDisplay.textContent = state.user.name || 'User';
      userEmailDisplay.textContent = state.user.email || '';
    } else {
      authGuest.hidden = false;
      authUser.hidden = true;
    }
  }

  function requireLogin() {
    if (isLoggedIn()) return true;
    toast(t('loginRequired'));
    openModalAuth(loginModal);
    return false;
  }

  function openModalAuth(el) {
    closeDrawers();
    closeAllAuthModals();
    el.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeAuthModal(el) {
    el.classList.remove('open');
    if (!document.querySelector('.modal.open')) {
      document.body.style.overflow = '';
    }
  }
  function closeAllAuthModals() {
    loginModal.classList.remove('open');
    registerModal.classList.remove('open');
  }

  function showError(el, msg) {
    el.textContent = msg;
    el.hidden = false;
  }
  function clearError(el) {
    el.textContent = '';
    el.hidden = true;
  }

  /* =========================================================
     6. TOAST
     ========================================================= */
  var toastTimer = null;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove('show');
    }, 1900);
  }

  /* =========================================================
     7. THEME
     ========================================================= */
  var ICON_SUN =
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">' +
    '<circle cx="12" cy="12" r="4"/>' +
    '<path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  var ICON_MOON =
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';

  function setTheme(theme) {
    state.theme = (theme === 'dark') ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', state.theme);
    localStorage.setItem('jb_theme', state.theme);
    themeBtn.innerHTML = (state.theme === 'dark') ? ICON_SUN : ICON_MOON;
    syncThemeChips();
  }
  function syncThemeChips() {
    $$('[data-theme-set]').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-theme-set') === state.theme);
    });
  }

  /* =========================================================
     8. LANGUAGE
     ========================================================= */
  function applyLanguage(lang) {
    if (LANG_ORDER.indexOf(lang) === -1) lang = 'en';
    state.lang = lang;
    localStorage.setItem('jb_lang', lang);
    document.documentElement.lang = lang;

    $$('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      var val = t(k);
      if (val !== undefined && val !== null) el.textContent = val;
    });
    $$('[data-i18n-ph]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-ph');
      var val = t(k);
      if (val) el.setAttribute('placeholder', val);
    });

    var meta = LANG_META[lang];
    $('#langFlag use').setAttribute('href', '#flag-' + meta.flag);
    $('#langCode').textContent = meta.code;

    $$('[data-lang]').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });

    renderProducts();
    renderCart();
    syncThemeChips();
  }

  function cycleLanguage() {
    var idx = LANG_ORDER.indexOf(state.lang);
    applyLanguage(LANG_ORDER[(idx + 1) % LANG_ORDER.length]);
  }

  /* =========================================================
     9. PRODUCTS RENDER
     ========================================================= */
  function renderProducts() {
    var q = state.query.trim().toLowerCase();
    var list = PRODUCTS.filter(function (p) {
      if (state.store && p.tags.indexOf(state.store) === -1) return false;
      if (state.category && p.tags.indexOf(state.category) === -1) return false;
      if (q) {
        var name = String(t(p.key)).toLowerCase();
        if (name.indexOf(q) === -1 && p.id.indexOf(q) === -1) return false;
      }
      return true;
    });

    if (!list.length) {
      productsGrid.innerHTML = '<div class="empty">' + t('noResults') + '</div>';
      return;
    }

    var html = '';
    for (var i = 0; i < list.length; i++) {
      var p = list[i];
      html +=
        '<div class="product">' +
          '<div class="product-img">' + p.emoji + '</div>' +
          '<div class="product-info">' +
            '<div class="product-name">' + t(p.key) + '</div>' +
            '<div class="product-price">' + fmt(p.price) + '</div>' +
            '<div class="product-actions">' +
              '<button class="btn-details" type="button" data-details="' + p.id + '">' + t('btnDetails') + '</button>' +
              '<button class="btn-cart" type="button" data-add="' + p.id + '">' + t('btnCart') + '</button>' +
            '</div>' +
          '</div>' +
        '</div>';
    }
    productsGrid.innerHTML = html;
  }

  /* =========================================================
     10. CART
     ========================================================= */
  function saveCart() {
    try { localStorage.setItem('jb_cart', JSON.stringify(state.cart)); } catch (e) {}
  }
  function cartCount() {
    return state.cart.reduce(function (s, i) { return s + i.qty; }, 0);
  }
  function cartTotal() {
    return state.cart.reduce(function (s, i) {
      var p = productById(i.id);
      return p ? s + p.price * i.qty : s;
    }, 0);
  }

  function addToCart(id) {
    var p = productById(id);
    if (!p) return;
    var found = null;
    for (var i = 0; i < state.cart.length; i++) {
      if (state.cart[i].id === id) { found = state.cart[i]; break; }
    }
    if (found) found.qty += 1;
    else state.cart.push({ id: id, qty: 1 });
    saveCart();
    renderCart();
    toast(t('addedToCart') + ' · ' + t(p.key));
  }

  function changeQty(id, delta) {
    for (var i = 0; i < state.cart.length; i++) {
      if (state.cart[i].id === id) {
        state.cart[i].qty += delta;
        if (state.cart[i].qty <= 0) state.cart.splice(i, 1);
        break;
      }
    }
    saveCart();
    renderCart();
  }

  function removeFromCart(id) {
    state.cart = state.cart.filter(function (i) { return i.id !== id; });
    saveCart();
    renderCart();
    toast(t('removedFromCart'));
  }

  function renderCart() {
    var count = cartCount();

    [cartBadge, navBadge].forEach(function (b) {
      b.textContent = count;
      if (count > 0) b.removeAttribute('data-zero');
      else b.setAttribute('data-zero', '1');
    });

    cartTotalEl.textContent = fmt(cartTotal());
    checkoutBtn.disabled = count === 0;

    if (!state.cart.length) {
      cartList.innerHTML =
        '<div class="cart-empty"><span class="ce-icon">🛒</span>' + t('emptyCart') + '</div>';
      return;
    }

    var html = '';
    for (var i = 0; i < state.cart.length; i++) {
      var item = state.cart[i];
      var p = productById(item.id);
      if (!p) continue;
      html +=
        '<div class="cart-item">' +
          '<div class="ci-emoji">' + p.emoji + '</div>' +
          '<div class="ci-info">' +
            '<div class="ci-name">' + t(p.key) + '</div>' +
            '<div class="ci-price">' + fmt(p.price * item.qty) + '</div>' +
            '<div class="ci-qty">' +
              '<button type="button" data-dec="' + p.id + '" aria-label="minus">−</button>' +
              '<span>' + item.qty + '</span>' +
              '<button type="button" data-inc="' + p.id + '" aria-label="plus">+</button>' +
            '</div>' +
          '</div>' +
          '<button class="ci-remove" type="button" data-remove="' + p.id + '" aria-label="remove">✕</button>' +
        '</div>';
    }
    cartList.innerHTML = html;
  }

  /* =========================================================
     11. DRAWERS / MODAL
     ========================================================= */
  function openDrawer(el) {
    closeDrawers();
    el.classList.add('open');
    el.setAttribute('aria-hidden', 'false');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeDrawers() {
    $$('.drawer.open').forEach(function (d) {
      d.classList.remove('open');
      d.setAttribute('aria-hidden', 'true');
    });
    overlay.classList.remove('open');
    if (!document.querySelector('.modal.open')) {
      document.body.style.overflow = '';
    }
  }
  function openModal(id) {
    var p = productById(id);
    if (!p) return;
    state.detailId = id;
    $('#detailEmoji').textContent = p.emoji;
    $('#detailName').textContent = t(p.key);
    $('#detailPrice').textContent = fmt(p.price);
    detailModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    detailModal.classList.remove('open');
    state.detailId = null;
    if (!overlay.classList.contains('open') && !document.querySelector('.modal.open')) {
      document.body.style.overflow = '';
    }
  }

  /* =========================================================
     12. SCROLL HELPER
     ========================================================= */
  function scrollToId(id) {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    var el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* =========================================================
     13. EVENT BINDING
     ========================================================= */

  /* --- header buttons --- */
  $('#cartBtn').addEventListener('click', function () {
    if (!requireLogin()) return;
    openDrawer(cartDrawer);
  });
  $('#menuBtn').addEventListener('click', function () { openDrawer(menuDrawer); });
  $('#langBtn').addEventListener('click', cycleLanguage);
  themeBtn.addEventListener('click', function () {
    setTheme(state.theme === 'dark' ? 'light' : 'dark');
  });

  /* --- overlay / close --- */
  overlay.addEventListener('click', closeDrawers);
  $$('[data-close]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var el = document.getElementById(btn.getAttribute('data-close'));
      if (el) {
        el.classList.remove('open');
        el.setAttribute('aria-hidden', 'true');
      }
      closeDrawers();
    });
  });

  /* --- menu drawer links --- */
  $$('[data-goto]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.getAttribute('data-goto');

      if (target === 'cart') {
        if (!requireLogin()) return;
        closeDrawers();
        setTimeout(function () { openDrawer(cartDrawer); }, 180);
        return;
      }

      if (target === 'auth') {
        closeDrawers();
        setTimeout(function () { scrollToId('auth'); }, 180);
        return;
      }

      closeDrawers();
      setTimeout(function () { scrollToId(target); }, 180);
    });
  });

  /* --- language chips --- */
  $$('[data-lang]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLanguage(btn.getAttribute('data-lang'));
    });
  });

  /* --- theme chips --- */
  $$('[data-theme-set]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setTheme(btn.getAttribute('data-theme-set'));
    });
  });

  /* --- search --- */
  searchInput.addEventListener('input', function (e) {
    state.query = e.target.value || '';
    renderProducts();
  });

  /* --- stores filter --- */
  $$('.store').forEach(function (el) {
    el.addEventListener('click', function () {
      var id = el.getAttribute('data-store');
      state.store = (state.store === id) ? null : id;
      $$('.store').forEach(function (s) {
        s.classList.toggle('active', s.getAttribute('data-store') === state.store);
      });
      renderProducts();
      if (state.store) scrollToId('products');
    });
  });

  /* --- categories filter --- */
  $$('.cat').forEach(function (el) {
    el.addEventListener('click', function () {
      var id = el.getAttribute('data-category');
      state.category = (state.category === id) ? null : id;
      $$('.cat').forEach(function (c) {
        c.classList.toggle('active', c.getAttribute('data-category') === state.category);
      });
      renderProducts();
      if (state.category) scrollToId('products');
    });
  });

  /* --- products (delegated) --- */
  productsGrid.addEventListener('click', function (e) {
    var addBtn = e.target.closest('[data-add]');
    if (addBtn) {
      if (!requireLogin()) return;
      addToCart(addBtn.getAttribute('data-add'));
      return;
    }

    var detBtn = e.target.closest('[data-details]');
    if (detBtn) { openModal(detBtn.getAttribute('data-details')); return; }
  });

  /* --- cart list (delegated) --- */
  cartList.addEventListener('click', function (e) {
    var inc = e.target.closest('[data-inc]');
    if (inc) { changeQty(inc.getAttribute('data-inc'), 1); return; }

    var dec = e.target.closest('[data-dec]');
    if (dec) { changeQty(dec.getAttribute('data-dec'), -1); return; }

    var rem = e.target.closest('[data-remove]');
    if (rem) { removeFromCart(rem.getAttribute('data-remove')); return; }
  });

  /* --- cart footer --- */
  checkoutBtn.addEventListener('click', function () {
    if (!requireLogin()) return;
    if (!state.cart.length) { toast(t('emptyCartToast')); return; }
    toast(t('orderPlaced'));
    state.cart = [];
    saveCart();
    renderCart();
    setTimeout(closeDrawers, 500);
  });

  $('#clearCartBtn').addEventListener('click', function () {
    if (!state.cart.length) { toast(t('emptyCartToast')); return; }
    state.cart = [];
    saveCart();
    renderCart();
    toast(t('cartCleared'));
  });

  /* --- details modal --- */
  $('#detailClose').addEventListener('click', closeModal);
  detailModal.addEventListener('click', function (e) {
    if (e.target === detailModal) closeModal();
  });
  $('#detailAdd').addEventListener('click', function () {
    if (!requireLogin()) return;
    if (state.detailId) {
      addToCart(state.detailId);
      closeModal();
    }
  });

  /* --- banner button --- */
  $('#bannerBtn').addEventListener('click', function () {
    scrollToId('products');
  });

  /* --- bottom nav --- */
  $$('.nav-item').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var nav = btn.getAttribute('data-nav');

      $$('.nav-item').forEach(function (b) { b.classList.remove('active'); });
      if (nav !== 'cart' && nav !== 'account') btn.classList.add('active');

      if (nav === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (nav === 'search') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(function () { searchInput.focus(); }, 350);
      } else if (nav === 'categories') {
        scrollToId('categories');
      } else if (nav === 'cart') {
        if (!requireLogin()) return;
        openDrawer(cartDrawer);
      } else if (nav === 'account') {
        if (isLoggedIn()) scrollToId('auth');
        else openModalAuth(loginModal);
      }
    });
  });

  /* --- ESC --- */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (detailModal.classList.contains('open')) { closeModal(); return; }
      if (loginModal.classList.contains('open')) { closeAuthModal(loginModal); return; }
      if (registerModal.classList.contains('open')) { closeAuthModal(registerModal); return; }
      closeDrawers();
    }
  });

  /* =========================================================
     13.05. CONTACT + GO-TOP
     ========================================================= */

  /* --- Phone copy to clipboard --- */
  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
  }
  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        toast(t('phoneCopied') + ' ' + text);
      }).catch(function () {
        fallbackCopy(text);
        toast(t('phoneCopied') + ' ' + text);
      });
    } else {
      fallbackCopy(text);
      toast(t('phoneCopied') + ' ' + text);
    }
  }

  $$('[data-phone]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var num = btn.getAttribute('data-phone');
      if (num) copyToClipboard(num);
    });
  });

  /* --- Go to top button --- */
  var goTopBtn = $('#goTop');
  var goTopThreshold = 400;

  function updateGoTop() {
    if (window.scrollY > goTopThreshold) goTopBtn.classList.add('show');
    else goTopBtn.classList.remove('show');
  }
  window.addEventListener('scroll', updateGoTop, { passive: true });
  updateGoTop();

  goTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* =========================================================
     13.1. AUTH EVENTS
     ========================================================= */
  $('#openLoginBtn').addEventListener('click', function () {
    clearError(loginError);
    openModalAuth(loginModal);
  });
  $('#openRegisterBtn').addEventListener('click', function () {
    clearError(registerError);
    openModalAuth(registerModal);
  });
  $('#switchToRegister').addEventListener('click', function () {
    closeAuthModal(loginModal);
    clearError(registerError);
    setTimeout(function () { openModalAuth(registerModal); }, 180);
  });
  $('#switchToLogin').addEventListener('click', function () {
    closeAuthModal(registerModal);
    clearError(loginError);
    setTimeout(function () { openModalAuth(loginModal); }, 180);
  });

  /* Close buttons inside auth modals */
  $$('[data-close="loginModal"], [data-close="registerModal"]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var id = btn.getAttribute('data-close');
      var el = document.getElementById(id);
      if (el) closeAuthModal(el);
    });
  });

  /* Click outside to close */
  [loginModal, registerModal].forEach(function (m) {
    m.addEventListener('click', function (e) {
      if (e.target === m) closeAuthModal(m);
    });
  });

  /* --- LOGIN SUBMIT --- */
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    clearError(loginError);

    var email = $('#loginEmail').value.trim().toLowerCase();
    var pass  = $('#loginPassword').value;

    if (!email || !pass) { showError(loginError, t('errFillAll')); return; }

    var users = getUsers();
    var found = null;
    for (var i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === pass) { found = users[i]; break; }
    }
    if (!found) { showError(loginError, t('errInvalidCreds')); return; }

    saveUser({ name: found.name, email: found.email });
    updateAuthUI();
    loginForm.reset();
    closeAuthModal(loginModal);
    toast(t('loginSuccess') + ', ' + found.name + '!');
  });

  /* --- REGISTER SUBMIT --- */
  registerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    clearError(registerError);

    var name  = $('#regName').value.trim();
    var email = $('#regEmail').value.trim().toLowerCase();
    var pass  = $('#regPassword').value;
    var conf  = $('#regConfirm').value;

    if (!name || !email || !pass || !conf) { showError(registerError, t('errFillAll')); return; }
    if (pass.length < 4) { showError(registerError, t('errPasswordShort')); return; }
    if (pass !== conf) { showError(registerError, t('errPasswordMismatch')); return; }

    var users = getUsers();
    for (var i = 0; i < users.length; i++) {
      if (users[i].email === email) { showError(registerError, t('errEmailExists')); return; }
    }

    users.push({ name: name, email: email, password: pass });
    saveUsers(users);
    saveUser({ name: name, email: email });
    updateAuthUI();
    registerForm.reset();
    closeAuthModal(registerModal);
    toast(t('registerSuccess') + ', ' + name + '!');
  });

  /* --- LOGOUT --- */
  $('#logoutBtn').addEventListener('click', function () {
    saveUser(null);
    updateAuthUI();
    toast(t('logoutSuccess'));
  });

  /* =========================================================
     14. INIT
     ========================================================= */
  setTheme(state.theme);
  applyLanguage(state.lang);
  renderProducts();
  renderCart();
  updateAuthUI();

})();
