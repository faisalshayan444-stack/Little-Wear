/**
 * Little Wear - Premium UX & Animation Module
 * Implements Apple-inspired FLIP transitions and a global sliding cart drawer.
 */

document.addEventListener('DOMContentLoaded', () => {
    initPremiumCart();
    initIncomingPageTransition();
});

// ==========================================
// PART 1: MACBOOK-STYLE PAGE TRANSITIONS
// ==========================================

// Intercept clicks on product cards in the capturing phase to override inline onclick
document.addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    const isButton = e.target.closest('button'); // Ignore quick add or fav buttons
    
    // Only trigger if we are on clothes.html clicking a valid card
    if (card && !isButton && window.location.pathname.includes('clothes.html')) {
        e.stopPropagation(); // Stop default inline onclick
        e.preventDefault();
        
        const idMatch = card.getAttribute('onclick').match(/id=(\d+)/);
        if (!idMatch) return;
        const id = idMatch[1];
        
        const img = card.querySelector('img');
        const rect = img.getBoundingClientRect();
        
        // 1. Save exact coordinates and image source for the next page
        sessionStorage.setItem('premium_transition', JSON.stringify({
            rect: { top: rect.top, left: rect.left, width: rect.width, height: rect.height },
            src: img.src
        }));

        // 2. Create the floating clone
        const clone = img.cloneNode();
        clone.style.cssText = `
            position: fixed; 
            top: ${rect.top}px; 
            left: ${rect.left}px; 
            width: ${rect.width}px; 
            height: ${rect.height}px; 
            z-index: 99999; 
            object-fit: cover; 
            border-radius: 2px; 
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            pointer-events: none;
            margin: 0;
        `;
        document.body.appendChild(clone);

        // 3. Apple-style scaling and background fade
        gsap.to(clone, {
            top: '15vh',
            left: '25vw',
            width: '50vw',
            height: '70vh',
            duration: 0.6,
            ease: "power4.inOut" // Apple-like cubic-bezier
        });

        // 4. Fade out the original page beneath the floating product
        gsap.to(document.body.children, {
            opacity: 0,
            duration: 0.5,
            delay: 0.1,
            onComplete: () => {
                window.location.href = `product.html?id=${id}`;
            }
        });
    }
}, true);

function initIncomingPageTransition() {
    if (!window.location.pathname.includes('product.html')) return;
    
    const transitionData = JSON.parse(sessionStorage.getItem('premium_transition'));
    if (!transitionData) return;
    
    sessionStorage.removeItem('premium_transition'); // Clear state
    
    const targetImg = document.getElementById('main-image');
    const mainContentArea = document.querySelector('main');
    const nav = document.querySelector('nav');
    
    // Hide UI initially
    gsap.set(mainContentArea, { opacity: 0, y: 40 });
    gsap.set(nav, { opacity: 0, y: -20 });
    targetImg.style.visibility = 'hidden';

    // Create incoming clone at previous page's coordinates
    const r = transitionData.rect;
    const clone = document.createElement('img');
    clone.src = transitionData.src;
    clone.style.cssText = `
        position: fixed; 
        top: 15vh; 
        left: 25vw; 
        width: 50vw; 
        height: 70vh; 
        z-index: 99999; 
        object-fit: cover; 
        border-radius: 2px;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    `;
    document.body.appendChild(clone);

    // Wait a tick for CSS/Layout to settle
    requestAnimationFrame(() => {
        const targetRect = targetImg.parentElement.getBoundingClientRect(); // use container for final size
        
        // FLIP Animation: Move clone to final DOM position smoothly
        gsap.to(clone, {
            top: targetRect.top,
            left: targetRect.left,
            width: targetRect.width,
            height: targetRect.height,
            boxShadow: "0 0px 0px 0px rgba(0,0,0,0)",
            duration: 0.7,
            ease: "power4.inOut",
            onComplete: () => {
                targetImg.style.visibility = 'visible';
                clone.remove();
            }
        });

        // Softly fade in the surrounding product details
        gsap.to([nav, mainContentArea], {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.3,
            stagger: 0.1,
            ease: "power3.out"
        });
    });
}

// ==========================================
// PART 2: GLOBAL PREMIUM CART DRAWER
// ==========================================

function initPremiumCart() {
    // 1. Remove old hardcoded cart if it exists to avoid conflicts
    const oldDrawer = document.getElementById('cart-drawer');
    const oldOverlay = document.getElementById('cart-overlay');
    if (oldDrawer) oldDrawer.remove();
    if (oldOverlay) oldOverlay.remove();

    // 2. Inject Premium Drawer HTML structure
    const premiumCartHTML = `
    <div id="premium-cart-overlay" class="fixed inset-0 bg-on-surface/50 backdrop-blur-md z-[100] opacity-0 pointer-events-none transition-none" onclick="closePremiumCart()"></div>
    <div id="premium-cart-drawer" class="fixed top-0 right-0 h-full w-full max-w-[420px] bg-white z-[110] shadow-2xl flex flex-col translate-x-full will-change-transform rounded-l-2xl overflow-hidden">
        <div class="p-8 border-b border-surface-container flex justify-between items-center bg-white/90 backdrop-blur-sm z-10">
            <div>
                <h2 class="text-xl font-black uppercase tracking-tighter text-on-surface">Your Bag</h2>
                <p id="p-drawer-count" class="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mt-1">0 Items</p>
            </div>
            <button onclick="closePremiumCart()" class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors group">
                <span class="material-symbols-outlined group-hover:rotate-90 transition-transform duration-300">close</span>
            </button>
        </div>

        <div id="p-cart-items-list" class="flex-1 overflow-y-auto p-8 space-y-6 cart-items-container bg-surface/30"></div>

        <div class="p-8 border-t border-surface-container bg-white shadow-[0_-10px_40px_rgba(0,0,0,0.03)] z-10">
            <div class="flex justify-between items-end mb-6">
                <span class="text-[11px] font-black uppercase tracking-[0.2em] text-on-surface-variant">Estimated Total</span>
                <span id="p-drawer-total" class="text-2xl font-black text-on-surface tracking-tighter">Rs 0</span>
            </div>
            <div class="space-y-3">
                <button onclick="location.href='checkout.html'" class="w-full bg-on-surface text-white py-5 text-xs font-black uppercase tracking-[0.2em] hover:bg-primary transition-all duration-300 rounded-lg shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5">
                    Secure Checkout
                </button>
            </div>
        </div>
    </div>`;
    
    document.body.insertAdjacentHTML('beforeend', premiumCartHTML);
    setupSwipeGestures();
    
    // 3. Override global openCart/closeCart functions to use GSAP
    window.openCart = openPremiumCart;
    window.closeCart = closePremiumCart;
}

function openPremiumCart() {
    renderPremiumCart();
    const overlay = document.getElementById('premium-cart-overlay');
    const drawer = document.getElementById('premium-cart-drawer');
    
    gsap.to(overlay, { opacity: 1, pointerEvents: 'auto', duration: 0.4, ease: "power2.out" });
    gsap.to(drawer, { x: '0%', duration: 0.6, ease: "expo.out" }); // Apple-style sliding curve
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closePremiumCart() {
    const overlay = document.getElementById('premium-cart-overlay');
    const drawer = document.getElementById('premium-cart-drawer');
    
    gsap.to(overlay, { opacity: 0, pointerEvents: 'none', duration: 0.3, ease: "power2.in" });
    gsap.to(drawer, { x: '100%', duration: 0.4, ease: "power3.in" });
    document.body.style.overflow = '';
}

function renderPremiumCart() {
    const cart = JSON.parse(localStorage.getItem('lw_cart') || '[]');
    const container = document.getElementById('p-cart-items-list');
    
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    
    document.getElementById('p-drawer-count').textContent = `${count} Items`;
    document.getElementById('p-drawer-total').textContent = `Rs ${total.toLocaleString()}`;

    // Update Nav Badges globally
    document.querySelectorAll('#cart-badge, #cart-count').forEach(el => {
        el.textContent = count;
        // Pulse animation on badge update
        gsap.fromTo(el, {scale: 1.5}, {scale: 1, duration: 0.4, ease: "back.out(2)"});
    });

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="h-full flex flex-col items-center justify-center text-center opacity-50 py-20">
                <span class="material-symbols-outlined text-6xl mb-6 text-on-surface-variant">shopping_bag</span>
                <p class="text-xs font-black uppercase tracking-[0.2em] text-on-surface">Your bag is empty</p>
                <button onclick="closePremiumCart()" class="mt-6 text-[10px] font-bold text-primary uppercase tracking-widest underline underline-offset-4">Continue Shopping</button>
            </div>`;
        return;
    }

    container.innerHTML = cart.map((item, index) => `
        <div id="cart-row-${index}" class="flex gap-5 group bg-white p-4 rounded-xl border border-surface-container shadow-sm">
            <div class="w-20 h-24 bg-surface-container rounded-lg flex-shrink-0 flex items-center justify-center text-3xl">
                ${item.emoji || '👕'}
            </div>
            <div class="flex-1 min-w-0 flex flex-col justify-between">
                <div>
                    <div class="flex justify-between items-start mb-1">
                        <h4 class="text-xs font-black uppercase tracking-tight text-on-surface truncate pr-2">${item.name}</h4>
                        <button onclick="removePremiumItem('${item.key}', ${index})" class="text-outline-variant hover:text-error transition-colors mt-0.5">
                            <span class="material-symbols-outlined text-[16px]">close</span>
                        </button>
                    </div>
                    <p class="text-[10px] font-bold text-on-surface-variant uppercase">Size: ${item.size} · ${item.color}</p>
                </div>
                <div class="flex justify-between items-end">
                    <span class="text-[11px] font-bold text-on-surface bg-surface-container px-2 py-1 rounded-md">Qty: ${item.qty}</span>
                    <span class="text-sm font-black text-on-surface tracking-tighter">Rs ${(item.price * item.qty).toLocaleString()}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Premium visual removal (shrinks and fades before deleting data)
window.removePremiumItem = function(key, index) {
    const row = document.getElementById(`cart-row-${index}`);
    
    gsap.to(row, {
        opacity: 0,
        height: 0,
        padding: 0,
        marginBottom: 0,
        borderWidth: 0,
        duration: 0.4,
        ease: "power3.inOut",
        onComplete: () => {
            let cart = JSON.parse(localStorage.getItem('lw_cart') || '[]');
            cart = cart.filter(item => item.key !== key);
            localStorage.setItem('lw_cart', JSON.stringify(cart));
            renderPremiumCart(); // re-render to recalculate totals
        }
    });
}

// 4. Mobile Swipe-to-Close Gesture
function setupSwipeGestures() {
    let startX = 0;
    let currentX = 0;
    const drawer = document.getElementById('premium-cart-drawer');

    drawer.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
    }, { passive: true });

    drawer.addEventListener('touchmove', e => {
        currentX = e.touches[0].clientX;
        const diff = currentX - startX;
        // Only allow swiping to the right
        if (diff > 0) {
            gsap.set(drawer, { x: diff });
        }
    }, { passive: true });

    drawer.addEventListener('touchend', e => {
        const diff = currentX - startX;
        // If swiped more than 100px to the right, close it
        if (diff > 100) {
            closePremiumCart();
        } else {
            // Otherwise, snap it back smoothly
            gsap.to(drawer, { x: '0%', duration: 0.3, ease: "power2.out" });
        }
    });
}