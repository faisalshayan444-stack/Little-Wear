/**
 * Little Wear - Cart Actions & Quick Add Module
 * Handles dynamic quantity adjustments and seamless Quick Add to Cart integration.
 */

// ==========================================
// 1. QUICK ADD LOGIC
// ==========================================
window.quickAdd = function(id, event) {
    // Prevent the click from triggering the page transition (from premium-ux.js)
    if (event) {
        event.stopPropagation();
        event.preventDefault();
    }

    // Attempt to find the product from your global products array
    const product = window.products ? window.products.find(p => p.id === id) : null;
    
    // Set up product details (with fallbacks just in case)
    const pName = product ? product.name : "Little Wear Item";
    const pPrice = product ? product.price : 0;
    const pEmoji = product ? product.emoji : "👕";
    const pSize = product && product.sizes ? product.sizes[0] : "M"; 
    const pColor = product && product.colors ? product.colors[0].name : "Standard";

    // Generate a unique key based on ID, size, and color
    const cartKey = `${id}-${pSize}-${pColor}`;

    // Fetch existing cart from LocalStorage
    let cart = JSON.parse(localStorage.getItem('lw_cart') || '[]');
    
    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex(item => item.key === cartKey);
    
    if (existingItemIndex > -1) {
        cart[existingItemIndex].qty += 1;
    } else {
        cart.push({
            id: id,
            key: cartKey,
            name: pName,
            price: pPrice,
            emoji: pEmoji,
            size: pSize,
            color: pColor,
            qty: 1
        });
    }
    
    // Save back to LocalStorage
    localStorage.setItem('lw_cart', JSON.stringify(cart));
    
    // Optional: Trigger your existing toast message
    if (window.showToastMsg) {
        showToastMsg(`🛒 Added to bag!`);
    }
    
    // Open the premium sliding drawer smoothly
    if (window.openPremiumCart) {
        window.openPremiumCart();
    }
};


// ==========================================
// 2. IN-CART QUANTITY CONTROLS (+ / -)
// ==========================================
window.updateItemQty = function(key, change, index) {
    let cart = JSON.parse(localStorage.getItem('lw_cart') || '[]');
    const itemIndex = cart.findIndex(item => item.key === key);
    
    if (itemIndex > -1) {
        cart[itemIndex].qty += change;
        
        // If quantity drops to 0, trigger the smooth removal animation
        if (cart[itemIndex].qty <= 0) {
            if (window.removePremiumItem) {
                window.removePremiumItem(key, index);
                return; // removePremiumItem handles saving and re-rendering
            } else {
                cart.splice(itemIndex, 1); // Fallback
            }
        }
        
        // Save and update the UI instantly
        localStorage.setItem('lw_cart', JSON.stringify(cart));
        if (window.renderPremiumCart) window.renderPremiumCart();
    }
};


// ==========================================
// 3. OVERRIDE CART RENDERER (Adds +/- UI)
// ==========================================
// We override the render function from premium-ux.js to inject the interactive buttons
document.addEventListener('DOMContentLoaded', () => {
    window.renderPremiumCart = function() {
        const cart = JSON.parse(localStorage.getItem('lw_cart') || '[]');
        const container = document.getElementById('p-cart-items-list');
        if (!container) return;

        const count = cart.reduce((sum, item) => sum + item.qty, 0);
        const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        
        document.getElementById('p-drawer-count').textContent = `${count} Items`;
        document.getElementById('p-drawer-total').textContent = `Rs ${total.toLocaleString()}`;

        // Pulse animation on the nav cart badge
        document.querySelectorAll('#cart-badge, #cart-count').forEach(el => {
            el.textContent = count;
            if (window.gsap) gsap.fromTo(el, {scale: 1.4}, {scale: 1, duration: 0.4, ease: "back.out(2)"});
        });

        // Empty state
        if (cart.length === 0) {
            container.innerHTML = `
                <div class="h-full flex flex-col items-center justify-center text-center opacity-50 py-20">
                    <span class="material-symbols-outlined text-6xl mb-6 text-on-surface-variant">shopping_bag</span>
                    <p class="text-xs font-black uppercase tracking-[0.2em] text-on-surface">Your bag is empty</p>
                    <button onclick="closePremiumCart()" class="mt-6 text-[10px] font-bold text-primary uppercase tracking-widest underline underline-offset-4">Continue Shopping</button>
                </div>`;
            return;
        }

// 1. Ensure CartUI exists globally so cart-actions.js can trigger it
window.CartUI = window.CartUI || {};

// 2. Define the exact logic to open the drawer
window.CartUI.open = function() {
    document.body.classList.add('cart-active');
    if (typeof window.CartUI.render === 'function') {
        window.CartUI.render();
    }
};

window.CartUI.close = function() {
    document.body.classList.remove('cart-active');
};

// 3. Centralized function to update the badge number with a pop animation
window.updateCartBadge = function() {
    const cart = JSON.parse(localStorage.getItem('lw_cart') || '[]');
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    
    const badge = document.getElementById('cart-badge');
    if (badge) {
        // Only animate if the number changed
        if (badge.textContent != count) {
            badge.textContent = count;
            // Add a quick "pop" animation
            badge.style.transform = 'scale(1.5)';
            setTimeout(() => { badge.style.transform = 'scale(1)'; }, 200);
        }
    }
};

// 4. Listen for the event fired by cart-actions.js
window.addEventListener('cartUpdated', () => {
    window.updateCartBadge();
});

// 5. Run on initial page load
document.addEventListener('DOMContentLoaded', () => {
    window.updateCartBadge();
});

        // Render items with interactive + / - and X buttons
        container.innerHTML = cart.map((item, index) => `
            <div id="cart-row-${index}" class="flex gap-5 group bg-white p-4 rounded-xl border border-surface-container shadow-sm transition-all hover:shadow-md">
                <div class="w-20 h-24 bg-surface-container rounded-lg flex-shrink-0 flex items-center justify-center text-3xl">
                    ${item.emoji || '👕'}
                </div>
                <div class="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                        <div class="flex justify-between items-start mb-1">
                            <h4 class="text-xs font-black uppercase tracking-tight text-on-surface truncate pr-2">${item.name}</h4>
                            
                            <button onclick="removePremiumItem('${item.key}', ${index})" class="text-outline-variant hover:text-error transition-colors mt-0.5" title="Remove Item">
                                <span class="material-symbols-outlined text-[16px]">close</span>
                            </button>
                        </div>
                        <p class="text-[10px] font-bold text-on-surface-variant uppercase">Size: ${item.size} · ${item.color}</p>
                    </div>
                    
                    <div class="flex justify-between items-end mt-3">
                        <div class="flex items-center bg-surface-container rounded-lg p-0.5">
                            <button onclick="updateItemQty('${item.key}', -1, ${index})" class="w-7 h-7 flex items-center justify-center text-on-surface hover:bg-white rounded-md transition-all shadow-sm">
                                <span class="material-symbols-outlined text-[16px]">remove</span>
                            </button>
                            <span class="text-xs font-black text-on-surface w-8 text-center">${item.qty}</span>
                            <button onclick="updateItemQty('${item.key}', 1, ${index})" class="w-7 h-7 flex items-center justify-center text-on-surface hover:bg-white rounded-md transition-all shadow-sm">
                                <span class="material-symbols-outlined text-[16px]">add</span>
                            </button>
                        </div>
                        
                        <span class="text-sm font-black text-on-surface tracking-tighter">Rs ${(item.price * item.qty).toLocaleString()}</span>
                    </div>
                </div>
            </div>
        `).join('');
    };
});