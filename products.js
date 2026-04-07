// ═══════════════════════════════════════════
//  LITTLE WEAR – Shared Products Data
// ═══════════════════════════════════════════
const PRODUCTS = [
  {
    id: 1,
    name: "Dino Adventure Tee",
    category: "boys",
    price: 1299,
    oldPrice: 1799,
    emoji: "🦕",
    bg: "#E3F2FD",
    badge: "hot",
    rating: 4.9,
    reviews: 128,
    sizes: ["XS","S","M","L"],
    colors: [
      { name: "Sky Blue", hex: "#29B6F6" },
      { name: "Navy", hex: "#0D2440" },
      { name: "Pink", hex: "#FF8A80" },
      { name: "Sunny Yellow", hex: "#FFD54F" }
    ],
    description: "Let your little one roar into adventure with this fun Dino Adventure Tee! Featuring a playful prehistoric dinosaur graphic print on ultra-soft, breathable cotton. Perfect for active kids who love to explore – whether at school, on a playdate, or on the go. Available in vibrant colours that stay bright wash after wash.",
    material: "100% Premium Combed Cotton",
    care: "Machine wash cold (30°C), gentle cycle. Tumble dry low. Do not bleach.",
    ageGroup: "3–8 years",
    fit: "Regular fit",
    sale: false
  },
  {
    id: 2,
    name: "Rainbow Ruffle Dress",
    category: "girls",
    price: 2499,
    oldPrice: 3199,
    emoji: "🌈",
    bg: "#FCE4EC",
    badge: "new",
    rating: 5.0,
    reviews: 64,
    sizes: ["XS","S","M","L","XL"],
    colors: [
      { name: "Rose Pink", hex: "#FF8A80" },
      { name: "Lavender", hex: "#CE93D8" },
      { name: "Sky Blue", hex: "#81D4FA" },
      { name: "Peach", hex: "#FFAB91" }
    ],
    description: "Twirl into sunshine with the Rainbow Ruffle Dress! Adorned with delicate ruffle layers in rainbow hues, this dress is perfect for parties, Eid celebrations, or everyday princess moments. The soft inner lining ensures all-day comfort, while the charming design makes every little girl feel magical.",
    material: "95% Cotton, 5% Elastane. Inner lining: 100% Cotton",
    care: "Hand wash cold or gentle machine wash. Hang to dry. Iron on low heat.",
    ageGroup: "2–10 years",
    fit: "A-line flare fit",
    sale: false
  },
  {
    id: 3,
    name: "Star Jogger Set",
    category: "unisex",
    price: 1899,
    oldPrice: 2499,
    emoji: "⭐",
    bg: "#FFF8E1",
    badge: "sale",
    rating: 4.8,
    reviews: 92,
    sizes: ["S","M","L"],
    colors: [
      { name: "Charcoal", hex: "#546E7A" },
      { name: "Navy", hex: "#0D2440" },
      { name: "Sky Blue", hex: "#29B6F6" },
      { name: "Olive", hex: "#8D6E63" }
    ],
    description: "The Star Jogger Set is the perfect combo of style and comfort for active little ones! The matching hoodie and jogger pants feature a star-print design with cosy fleece lining. Elastic waistband and cuffs ensure a snug fit, and the kangaroo pocket adds a fun, practical touch for tiny treasures.",
    material: "60% Cotton, 40% Polyester fleece blend",
    care: "Machine wash cold, inside out. Tumble dry medium. Do not iron on print.",
    ageGroup: "3–10 years",
    fit: "Relaxed fit (set: hoodie + jogger pants)",
    sale: true
  },
  {
    id: 4,
    name: "Croc Hoodie (Limited)",
    category: "boys",
    price: 3299,
    oldPrice: null,
    emoji: "🐊",
    bg: "#E8F5E9",
    badge: "new",
    rating: 4.9,
    reviews: 47,
    sizes: ["S","M","L","XL"],
    colors: [
      { name: "Forest Green", hex: "#388E3C" },
      { name: "Teal", hex: "#00897B" },
      { name: "Navy", hex: "#0D2440" }
    ],
    description: "The fan-favourite Croc Hoodie is back – and in limited stock! This premium hoodie features our beloved crocodile mascot embroidered on the chest, with croc-tooth trim details along the hood. Made from heavyweight cotton blend, it's warm, durable and impossible not to love. A collector's piece for the coolest kids!",
    material: "80% Cotton, 20% Polyester. Heavy 400gsm weight.",
    care: "Machine wash cold, gentle cycle. Do not tumble dry. Lay flat to dry.",
    ageGroup: "4–12 years",
    fit: "Oversized cosy fit",
    sale: false
  },
  {
    id: 5,
    name: "Butterfly Skirt Set",
    category: "girls",
    price: 1699,
    oldPrice: 2199,
    emoji: "🦋",
    bg: "#F3E5F5",
    badge: null,
    rating: 4.7,
    reviews: 83,
    sizes: ["XS","S","M"],
    colors: [
      { name: "Lilac", hex: "#CE93D8" },
      { name: "Bubblegum Pink", hex: "#F48FB1" },
      { name: "Mint", hex: "#A5D6A7" }
    ],
    description: "Flutter through the day with the Butterfly Skirt Set! This adorable two-piece includes a ruched crop top and a twirly skirt adorned with butterfly prints. The stretchy, soft fabric moves freely with your little one's every skip and jump. Perfect for summer outings, playdates, or casual family trips.",
    material: "100% Soft Jersey Cotton",
    care: "Machine wash cold. Lay flat to dry. Do not bleach.",
    ageGroup: "2–7 years",
    fit: "Slim fit top, flared skirt (2-piece set)",
    sale: true
  },
  {
    id: 6,
    name: "Space Explorer Tee",
    category: "boys",
    price: 999,
    oldPrice: 1299,
    emoji: "🚀",
    bg: "#E8EAF6",
    badge: "sale",
    rating: 4.6,
    reviews: 156,
    sizes: ["XS","S","M","L"],
    colors: [
      { name: "Space Black", hex: "#263238" },
      { name: "Galaxy Blue", hex: "#3949AB" },
      { name: "Stardust White", hex: "#ECEFF1" }
    ],
    description: "Houston, we have a style launch! The Space Explorer Tee is out of this world with its galaxy-inspired rocket print. Crafted from soft, lightweight cotton that's gentle on sensitive skin. The vibrant glow-in-the-dark print makes bedtime extra magical. A must-have for every little astronaut!",
    material: "100% Combed Cotton. Glow-in-the-dark water-based print.",
    care: "Machine wash cold. Tumble dry low. Wash inside out to preserve print.",
    ageGroup: "3–10 years",
    fit: "Regular fit",
    sale: true
  },
  {
    id: 7,
    name: "Floral Summer Dress",
    category: "girls",
    price: 2199,
    oldPrice: null,
    emoji: "🌸",
    bg: "#FFF3E0",
    badge: "new",
    rating: 4.9,
    reviews: 38,
    sizes: ["S","M","L"],
    colors: [
      { name: "Blush Pink", hex: "#F48FB1" },
      { name: "Peach", hex: "#FFAB91" },
      { name: "Lemon Yellow", hex: "#FFF176" },
      { name: "Mint Green", hex: "#A5D6A7" }
    ],
    description: "Bloom into the season with the Floral Summer Dress! This light, airy dress features an all-over floral print with a sweet smocked neckline and adjustable straps. The breathable cotton fabric is perfect for hot summer days. Layer it over a white tee for cooler evenings or wear it solo on sunny days.",
    material: "100% Woven Cotton. Fully lined bodice.",
    care: "Machine wash cold. Hang to dry. Iron on reverse at low heat.",
    ageGroup: "4–12 years",
    fit: "Relaxed A-line fit",
    sale: false
  },
  {
    id: 8,
    name: "Comfy Basics Set",
    category: "unisex",
    price: 1499,
    oldPrice: 1899,
    emoji: "🧸",
    bg: "#E0F7FA",
    badge: null,
    rating: 4.8,
    reviews: 204,
    sizes: ["XS","S","M","L","XL"],
    colors: [
      { name: "Oat", hex: "#D7CCC8" },
      { name: "Sage", hex: "#A5D6A7" },
      { name: "Sky Blue", hex: "#81D4FA" },
      { name: "Blush", hex: "#F8BBD0" },
      { name: "Lavender", hex: "#CE93D8" }
    ],
    description: "The Comfy Basics Set is a wardrobe essential for every little one! A simple, well-fitted tee paired with elastic-waist pants – it doesn't get more comfortable than this. Available in a range of neutral and soft pastel shades that mix and match beautifully. Stock up on multiple colours for a full week of hassle-free dressing!",
    material: "100% Interlock Cotton. Pre-washed for extra softness.",
    care: "Machine wash warm. Tumble dry medium. Safe for all skin types.",
    ageGroup: "0–10 years",
    fit: "Comfortable relaxed fit (2-piece: tee + pants)",
    sale: true
  },
  {
    id: 9,
    name: "Lion King Sweatshirt",
    category: "boys",
    price: 2799,
    oldPrice: null,
    emoji: "🦁",
    bg: "#FFF8E1",
    badge: "hot",
    rating: 4.9,
    reviews: 72,
    sizes: ["S","M","L","XL"],
    colors: [
      { name: "Sunset Orange", hex: "#FF7043" },
      { name: "Golden Yellow", hex: "#FDD835" },
      { name: "Cream", hex: "#FFF8E1" }
    ],
    description: "Roar with pride in the Lion King Sweatshirt! Featuring a majestic lion graphic with a lush mane embroidered in textured gold thread, this pullover sweatshirt is a statement piece. The brushed inner fleece keeps your little king warm and cosy. Made to last through countless adventures and washes.",
    material: "65% Cotton, 35% Polyester brushed fleece. Embroidered graphic.",
    care: "Machine wash cold. Dry inside out. Do not iron directly on embroidery.",
    ageGroup: "4–12 years",
    fit: "Regular-to-relaxed fit",
    sale: false
  },
  {
    id: 10,
    name: "Mermaid Tail Leggings",
    category: "girls",
    price: 1199,
    oldPrice: 1599,
    emoji: "🧜‍♀️",
    bg: "#E0F2F1",
    badge: "sale",
    rating: 4.7,
    reviews: 115,
    sizes: ["XS","S","M"],
    colors: [
      { name: "Ocean Teal", hex: "#00897B" },
      { name: "Pearl Pink", hex: "#F06292" },
      { name: "Sea Purple", hex: "#9575CD" }
    ],
    description: "Dive into magical fashion with the Mermaid Tail Leggings! These stretchy leggings feature an iridescent shimmer pattern that mimics the scales of a real mermaid tail. Super soft, four-way stretch fabric with a wide comfort waistband. Perfect for dance class, gymnastics, or just feeling like an underwater princess!",
    material: "88% Polyester, 12% Spandex. Iridescent foil print.",
    care: "Machine wash cold, inside out. Do not tumble dry. Hang or lay flat.",
    ageGroup: "3–8 years",
    fit: "Slim stretch fit",
    sale: true
  },
  {
    id: 11,
    name: "Camo Cargo Pants",
    category: "boys",
    price: 1599,
    oldPrice: null,
    emoji: "🎽",
    bg: "#F1F8E9",
    badge: "new",
    rating: 4.6,
    reviews: 58,
    sizes: ["S","M","L","XL"],
    colors: [
      { name: "Army Green", hex: "#689F38" },
      { name: "Sand Brown", hex: "#A1887F" },
      { name: "Navy Camo", hex: "#37474F" }
    ],
    description: "Go on any mission in style with the Camo Cargo Pants! These durable cargo pants feature a classic camouflage print with six functional pockets – perfect for storing all the important stuff little explorers need. Reinforced knees add extra durability. An adjustable waist ensures a perfect fit as they grow.",
    material: "100% Heavy-duty Cotton Twill. Reinforced knees and pocket edges.",
    care: "Machine wash cold. Tumble dry low. Iron on medium if needed.",
    ageGroup: "4–14 years",
    fit: "Relaxed fit with adjustable waist",
    sale: false
  },
  {
    id: 12,
    name: "Princess Party Dress",
    category: "girls",
    price: 3499,
    oldPrice: 4499,
    emoji: "👑",
    bg: "#FCE4EC",
    badge: "hot",
    rating: 5.0,
    reviews: 29,
    sizes: ["XS","S","M","L"],
    colors: [
      { name: "Royal Pink", hex: "#F06292" },
      { name: "Frozen Blue", hex: "#4FC3F7" },
      { name: "Pearl White", hex: "#FAFAFA" },
      { name: "Gold", hex: "#FFD54F" }
    ],
    description: "Every little girl deserves to feel like royalty! The Princess Party Dress features a ball-gown silhouette with layers of soft tulle, a sparkling sequin bodice, and a satin sash waistband. Perfect for birthdays, Eid, weddings, or any special occasion. The built-in petticoat gives it that perfect princess puff!",
    material: "Bodice: 100% Satin with sequin overlay. Skirt: Multi-layer tulle. Inner: Cotton lining.",
    care: "Dry clean recommended. Spot clean only if needed. Store hanging.",
    ageGroup: "2–10 years",
    fit: "Ball gown with built-in petticoat",
    sale: true
  },
  {
    id: 13,
    name: "Bear Fleece Jacket",
    category: "unisex",
    price: 2999,
    oldPrice: null,
    emoji: "🐻",
    bg: "#EFEBE9",
    badge: "new",
    rating: 4.9,
    reviews: 43,
    sizes: ["S","M","L","XL"],
    colors: [
      { name: "Honey Brown", hex: "#A1887F" },
      { name: "Ivory", hex: "#F5F5F0" },
      { name: "Dusty Pink", hex: "#EF9A9A" }
    ],
    description: "Hug your little bear in our Bear Fleece Jacket! This impossibly soft fleece jacket features bear ears on the hood and a round bear nose zipper pull – adorable and functional. The micro-fleece interior is as warm as a real bear hug. Full-zip front, two side pockets, and ribbed cuffs for a snug, cosy fit all winter long.",
    material: "100% Polyester micro-fleece. Sherpa-lined hood.",
    care: "Machine wash warm. Tumble dry low. Do not iron.",
    ageGroup: "3–12 years",
    fit: "Cosy relaxed fit with hood",
    sale: false
  },
  {
    id: 14,
    name: "Strawberry Shorts Set",
    category: "girls",
    price: 1299,
    oldPrice: 1699,
    emoji: "🍓",
    bg: "#FCE4EC",
    badge: null,
    rating: 4.8,
    reviews: 97,
    sizes: ["XS","S","M"],
    colors: [
      { name: "Strawberry Red", hex: "#E53935" },
      { name: "Berry Pink", hex: "#E91E63" },
      { name: "Cream", hex: "#FFF8E1" }
    ],
    description: "Sweet as a strawberry! This adorable shorts set comes with a cute strawberry-print cropped tee and matching shorts. Made from the softest ribbed cotton for maximum comfort in warm weather. The set comes with a bow hair tie to complete the look. Perfect for sunny days, summer picnics, or just lounging at home.",
    material: "100% Ribbed Cotton. Elastic waistband shorts.",
    care: "Machine wash cold. Tumble dry medium. Do not bleach.",
    ageGroup: "2–8 years",
    fit: "Cropped top + bike shorts (2-piece set)",
    sale: false
  },
  {
    id: 15,
    name: "Superhero Cape Tee",
    category: "boys",
    price: 1199,
    oldPrice: null,
    emoji: "🦸",
    bg: "#E3F2FD",
    badge: "hot",
    rating: 4.9,
    reviews: 183,
    sizes: ["S","M","L","XL"],
    colors: [
      { name: "Hero Red", hex: "#E53935" },
      { name: "Captain Blue", hex: "#1565C0" },
      { name: "Night Black", hex: "#212121" },
      { name: "Power Purple", hex: "#6A1B9A" }
    ],
    description: "Every kid is a superhero! The Superhero Cape Tee comes with a detachable velcro cape so your little one can wear it as a tee at school and transform into a superhero the moment they get home. The soft, breathable cotton tee features a bold superhero emblem on the chest. Imagination not included – but it's definitely encouraged!",
    material: "100% Combed Cotton tee. Polyester cape with velcro attachment.",
    care: "Machine wash cold. Remove cape before washing. Tumble dry low.",
    ageGroup: "3–12 years",
    fit: "Regular fit with detachable cape",
    sale: false
  },
  {
    id: 16,
    name: "Polka Dot Dungaree",
    category: "unisex",
    price: 2299,
    oldPrice: 2999,
    emoji: "🎀",
    bg: "#FFF3E0",
    badge: "sale",
    rating: 4.7,
    reviews: 61,
    sizes: ["XS","S","M","L"],
    colors: [
      { name: "Classic Navy", hex: "#1A237E" },
      { name: "Dusty Rose", hex: "#F48FB1" },
      { name: "Sage Green", hex: "#66BB6A" }
    ],
    description: "Dot your way to adorable in our Polka Dot Dungaree! These cute overalls feature a classic polka dot print with adjustable shoulder straps, a bib front with a handy pocket, and a relaxed wide-leg cut for easy movement. Layer over a simple tee or wear solo in summer. Suitable for all genders, perfect for all occasions.",
    material: "100% Cotton Twill with metal clip buckles.",
    care: "Machine wash cold. Tumble dry low. Iron on medium.",
    ageGroup: "2–10 years",
    fit: "Relaxed wide-leg dungaree",
    sale: true
  }
];

// ─── CART HELPERS (localStorage) ───────────────────────────────────────────
function getCart() {
  try { return JSON.parse(localStorage.getItem('lw_cart') || '[]'); } catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem('lw_cart', JSON.stringify(cart));
}
function getCartCount() {
  return getCart().reduce((s, i) => s + i.qty, 0);
}
function addToCart(productId, size, color, qty = 1) {
  const cart = getCart();
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  const key = `${productId}-${size}-${color}`;
  const existing = cart.find(i => i.key === key);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ key, id: productId, name: p.name, emoji: p.emoji, price: p.price, size, color, qty });
  }
  saveCart(cart);
  updateCartBadge();
}
function removeFromCart(key) {
  const cart = getCart().filter(i => i.key !== key);
  saveCart(cart);
  updateCartBadge();
}
function updateCartBadge() {
  const el = document.getElementById('cart-count');
  if (el) el.textContent = getCartCount();
}
function getCartTotal() {
  return getCart().reduce((s, i) => s + i.price * i.qty, 0);
}

// ─── TOAST ──────────────────────────────────────────────────────────────────
let _toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

