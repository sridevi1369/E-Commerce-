/**
 * Modern Shop - Vanilla JS E-commerce Application
 * Handles SPA navigation, cart management, order processing, and new features.
 */

const app = {
    // Application State
    data: {
        products: [
            // Electronics
            { id: 1, title: "Wireless Headphones", price: 199.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60", category: "Electronics", labels: ["bestseller"], rating: 4.5, reviews: [{ user: "Alex", comment: "Great sound quality!", rating: 5 }, { user: "Sam", comment: "Comfortable to wear.", rating: 4 }] },
            { id: 2, title: "Smart Watch Series 7", price: 329.99, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60", category: "Electronics", labels: ["flash"], rating: 4.8, reviews: [{ user: "Jordan", comment: "Love the features.", rating: 5 }], flashPrice: 249.99 },
            { id: 4, title: "Mechanical Keyboard", price: 129.00, image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&auto=format&fit=crop&q=60", category: "Electronics", labels: [], rating: 4.7, reviews: [{ user: "Dev", comment: "Clicky and satisfying.", rating: 5 }] },
            { id: 9, title: "Gaming Mouse", price: 79.99, image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&auto=format&fit=crop&q=60", category: "Electronics", labels: [], rating: 4.6, reviews: [], flashPrice: 49.99 },
            { id: 13, title: "DSLR Camera", price: 450.00, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60", category: "Electronics", labels: ["recommended"], rating: 4.8, reviews: [] },
            { id: 14, title: "Tablet Pro 11", price: 599.00, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format&fit=crop&q=60", category: "Electronics", labels: [], rating: 4.5, reviews: [] },
            { id: 15, title: "Drone 4K", price: 299.00, image: "https://images.unsplash.com/photo-1507582020474-9a35b7d450d7?w=500&auto=format&fit=crop&q=60", category: "Electronics", labels: ["flash"], rating: 4.7, reviews: [], flashPrice: 199.99 },

            // Fashion
            { id: 3, title: "Premium Leather Bag", price: 149.50, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&auto=format&fit=crop&q=60", category: "Fashion", labels: ["recommended"], rating: 4.2, reviews: [] },
            { id: 7, title: "Running Shoes", price: 110.00, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60", category: "Fashion", labels: ["recommended"], rating: 4.3, reviews: [] },
            { id: 10, title: "Denim Jacket", price: 89.00, image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500&auto=format&fit=crop&q=60", category: "Fashion", labels: ["flash"], rating: 4.4, reviews: [], flashPrice: 65.00 },
            { id: 16, title: "Cotton T-Shirt", price: 25.00, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60", category: "Fashion", labels: [], rating: 4.1, reviews: [] },
            { id: 17, title: "Summer Dress", price: 45.00, image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&auto=format&fit=crop&q=60", category: "Fashion", labels: ["bestseller"], rating: 4.6, reviews: [] },
            { id: 18, title: "Men's Classic Watch", price: 120.00, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&auto=format&fit=crop&q=60", category: "Fashion", labels: [], rating: 4.5, reviews: [] },
            { id: 19, title: "Knitted Scarf", price: 30.00, image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=500&auto=format&fit=crop&q=60", category: "Fashion", labels: [], rating: 4.2, reviews: [] },

            // Accessories
            { id: 5, title: "Sunglasses Aviator", price: 89.99, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60", category: "Accessories", labels: [], rating: 4.0, reviews: [{ user: "Kim", comment: "Stylish.", rating: 4 }], flashPrice: 59.99 },
            { id: 12, title: "Travel Backpack", price: 65.00, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60", category: "Accessories", labels: [], rating: 4.7, reviews: [], flashPrice: 39.99 },
            { id: 20, title: "Leather Belt", price: 40.00, image: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=500&auto=format&fit=crop&q=60", category: "Accessories", labels: [], rating: 4.3, reviews: [] },
            { id: 21, title: "Silver Ring", price: 55.00, image: "https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?w=500&auto=format&fit=crop&q=60", category: "Accessories", labels: [], rating: 4.4, reviews: [] },
            { id: 22, title: "Beanie Hat", price: 20.00, image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500&auto=format&fit=crop&q=60", category: "Accessories", labels: [], rating: 4.1, reviews: [] },

            // Home
            { id: 6, title: "Smart Home Speaker", price: 89.00, image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500&auto=format&fit=crop&q=60", category: "Home", labels: ["bestseller"], rating: 4.6, reviews: [{ user: "Techie", comment: "Very responsive.", rating: 5 }] },
            { id: 8, title: "Ceramic Coffee Set", price: 65.00, image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&auto=format&fit=crop&q=60", category: "Home", labels: ["flash"], rating: 4.9, reviews: [{ user: "Barista", comment: "Beautiful set.", rating: 5 }], flashPrice: 49.99 },
            { id: 11, title: "Succulent Plant Set", price: 35.00, image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=500&auto=format&fit=crop&q=60", category: "Home", labels: [], rating: 4.8, reviews: [], flashPrice: 25.00 },
            { id: 23, title: "Modern Armchair", price: 250.00, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&auto=format&fit=crop&q=60", category: "Home", labels: ["recommended"], rating: 4.7, reviews: [] },
            { id: 24, title: "Decorative Vase", price: 45.00, image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?w=500&auto=format&fit=crop&q=60", category: "Home", labels: [], rating: 4.2, reviews: [] },
            { id: 25, title: "Soft Throw Pillow", price: 29.99, image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&auto=format&fit=crop&q=60", category: "Home", labels: [], rating: 4.5, reviews: [] },
        ],
        cart: JSON.parse(localStorage.getItem('cart')) || [],
        wishlist: JSON.parse(localStorage.getItem('wishlist')) || [], // Wishlist state
        orders: JSON.parse(localStorage.getItem('orders')) || [],
        filter: '',
        sort: 'default',
        flashDealExpiry: Date.now() + (2 * 60 * 60 * 1000) // 2 hours from now
    },

    // Initialization
    init() {
        this.cacheDOM();
        this.bindEvents();
        this.renderProducts();
        this.renderFlashDeals();
        this.updateCartUI();
        this.checkTheme();
        this.startCountdown();
        this.renderWishlist(); // Initial render
    },

    cacheDOM() {
        this.dom = {
            mainContent: document.getElementById('main-content'),
            views: document.querySelectorAll('.view'),
            navLinks: document.querySelectorAll('.nav-link'),
            productsGrid: document.getElementById('products-grid'),
            flashDealsGrid: document.getElementById('flash-deals-grid'),
            wishlistGrid: document.getElementById('wishlist-grid'), // Cache wishlist grid
            wishlistEmpty: document.getElementById('wishlist-empty'), // Cache empty state
            cartItems: document.getElementById('cart-items'),
            cartSubtotal: document.getElementById('cart-subtotal'),
            cartTotal: document.getElementById('cart-total'),
            cartBadge: document.getElementById('cart-badge'),
            ordersList: document.getElementById('orders-list'),
            searchInput: document.getElementById('search-input'),
            sortSelect: document.getElementById('sort-select'),
            themeToggle: document.getElementById('theme-toggle'),
            toast: document.getElementById('toast'),
            trackingContainer: document.getElementById('tracking-container'),
            checkoutBtn: document.getElementById('checkout-btn'),
            cartBtn: document.getElementById('cart-btn'),
            modal: document.getElementById('product-modal'),
            modalBody: document.getElementById('modal-body'),
            closeModal: document.querySelector('.close-modal'),
            timerHours: document.getElementById('timer-hours'),
            timerMinutes: document.getElementById('timer-minutes'),
            timerSeconds: document.getElementById('timer-seconds'),
        };
    },

    bindEvents() {
        // Navigation
        this.dom.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchView(link.dataset.target);
            });
        });

        this.dom.cartBtn.addEventListener('click', () => this.switchView('cart'));

        // Products
        this.dom.searchInput.addEventListener('input', (e) => {
            this.data.filter = e.target.value.toLowerCase();
            this.renderProducts();
        });

        this.dom.sortSelect.addEventListener('change', (e) => {
            this.data.sort = e.target.value;
            this.renderProducts();
        });

        // Checkout
        this.dom.checkoutBtn.addEventListener('click', () => this.processCheckout());

        // Theme
        this.dom.themeToggle.addEventListener('click', () => this.toggleTheme());

        // Modal
        this.dom.closeModal.addEventListener('click', () => this.closeModal());
        window.addEventListener('click', (e) => {
            if (e.target === this.dom.modal) this.closeModal();
        });

        // Category Cards
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', () => {
                const category = card.textContent.trim();
                this.filterByCategory(category);
            });
        });
    },

    // View Management
    switchView(targetId) {
        this.dom.views.forEach(view => {
            view.classList.remove('active');
            if (view.id === targetId) {
                view.classList.add('active');
            }
        });

        this.dom.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.target === targetId) {
                link.classList.add('active');
            }
        });

        // Scroll to top
        window.scrollTo(0, 0);

        if (targetId === 'orders') this.renderOrders();
        if (targetId === 'products') this.renderProducts();
        if (targetId === 'wishlist') this.renderWishlist();
    },

    filterByCategory(category) {
        this.data.filter = category.toLowerCase();
        this.switchView('products');
        this.renderProducts();

        // Optional: Update search input to show the category
        this.dom.searchInput.value = category;
    },

    // Flash Deals Logic
    startCountdown() {
        const updateTimer = () => {
            const now = Date.now();
            const diff = this.data.flashDealExpiry - now;

            if (diff <= 0) {
                // Reset timer for demo
                this.data.flashDealExpiry = Date.now() + (2 * 60 * 60 * 1000);
                return;
            }

            const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((diff % (1000 * 60)) / 1000);

            this.dom.timerHours.textContent = h.toString().padStart(2, '0');
            this.dom.timerMinutes.textContent = m.toString().padStart(2, '0');
            this.dom.timerSeconds.textContent = s.toString().padStart(2, '0');
        };

        updateTimer();
        setInterval(updateTimer, 1000);
    },

    renderFlashDeals() {
        const flashProducts = this.data.products.filter(p => p.labels.includes('flash'));
        this.dom.flashDealsGrid.innerHTML = flashProducts.map(product => this.createProductCard(product, true)).join('');
    },

    // Wishlist Logic
    toggleWishlist(id) {
        const index = this.data.wishlist.indexOf(id);
        if (index === -1) {
            this.data.wishlist.push(id);
            this.showToast('Added to Wishlist');
        } else {
            this.data.wishlist.splice(index, 1);
            this.showToast('Removed from Wishlist');
        }
        localStorage.setItem('wishlist', JSON.stringify(this.data.wishlist));

        // Re-render to update heart icons
        this.renderProducts();
        this.renderFlashDeals();
        if (document.getElementById('wishlist').classList.contains('active')) {
            this.renderWishlist();
        }
    },

    renderWishlist() {
        const wishlistProducts = this.data.products.filter(p => this.data.wishlist.includes(p.id));

        if (wishlistProducts.length === 0) {
            this.dom.wishlistGrid.innerHTML = '';
            this.dom.wishlistEmpty.classList.remove('hidden');
        } else {
            this.dom.wishlistEmpty.classList.add('hidden');
            this.dom.wishlistGrid.innerHTML = wishlistProducts.map(product => this.createProductCard(product)).join('');
        }
    },

    // Product Logic
    getFilteredProducts() {
        let filtered = this.data.products.filter(p =>
            p.title.toLowerCase().includes(this.data.filter) ||
            p.category.toLowerCase().includes(this.data.filter)
        );

        if (this.data.sort === 'price-asc') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (this.data.sort === 'price-desc') {
            filtered.sort((a, b) => b.price - a.price);
        }

        return filtered;
    },

    createProductCard(product, isFlashSection = false) {
        // Check if product is a flash deal globally
        const isFlashDeal = product.labels.includes('flash');

        // Use flash price if it's a flash deal (regardless of section)
        const price = isFlashDeal ? product.flashPrice : product.price;
        let priceHTML = '';

        if (isFlashDeal) {
            const discount = Math.round(((product.price - product.flashPrice) / product.price) * 100);
            priceHTML = `
                <div class="price-container" style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                    <span style="font-size: 1.25rem; font-weight: 700; color: #ef4444;">$${price.toFixed(2)}</span>
                    <span style="text-decoration: line-through; color: var(--text-secondary); font-size: 0.9rem;">$${product.price.toFixed(2)}</span>
                    <span style="background-color: #fee2e2; color: #ef4444; font-size: 0.75rem; padding: 2px 6px; border-radius: 4px; font-weight: 700;">-${discount}%</span>
                </div>
            `;
        } else {
            priceHTML = `<div class="product-price">$${price.toFixed(2)}</div>`;
        }

        const badge = this.getBadgeHTML(product.labels);

        // Check if in wishlist
        const isLiked = this.data.wishlist.includes(product.id);
        const heartIcon = isLiked ? 'heart' : 'heart-outline';
        const activeClass = isLiked ? 'active' : '';

        return `
            <div class="product-card" onclick="app.openProductDetails(${product.id})">
                ${badge}
                <button class="wishlist-btn ${activeClass}" onclick="event.stopPropagation(); app.toggleWishlist(${product.id})">
                    <ion-icon name="${heartIcon}"></ion-icon>
                </button>
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <div class="product-details">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-title">${product.title}</h3>
                    <div style="margin-bottom: 0.5rem; color: #fbbf24; font-size: 0.9rem;">
                         ${this.getStarsHTML(product.rating)} <span style="color: var(--text-secondary);">(${product.reviews.length})</span>
                    </div>
                    ${priceHTML}
                    <button class="add-to-cart-btn" onclick="event.stopPropagation(); app.addToCart(${product.id}, ${isFlashDeal})" style="margin-top: 1rem;">
                        <ion-icon name="cart-outline"></ion-icon> Add to Cart
                    </button>
                </div>
            </div>
        `;
    },

    getBadgeHTML(labels) {
        if (labels.includes('flash')) return `<span class="badge badge-flash">Flash Deal</span>`;
        if (labels.includes('bestseller')) return `<span class="badge badge-bestseller">Bestseller</span>`;
        if (labels.includes('recommended')) return `<span class="badge badge-recommended">Recommended</span>`;
        return '';
    },

    getStarsHTML(rating) {
        const fullStars = Math.floor(rating);
        const hasHalf = rating % 1 !== 0;
        let html = '';
        for (let i = 0; i < fullStars; i++) html += '<ion-icon name="star"></ion-icon>';
        if (hasHalf) html += '<ion-icon name="star-half"></ion-icon>';
        return html;
    },

    renderProducts() {
        const products = this.getFilteredProducts();
        this.dom.productsGrid.innerHTML = products.map(p => this.createProductCard(p)).join('');
    },

    // Modal Logic
    openProductDetails(id) {
        const product = this.data.products.find(p => p.id === id);
        if (!product) return;

        const isFlash = product.labels.includes('flash');
        const price = isFlash ? product.flashPrice : product.price;

        this.dom.modalBody.innerHTML = `
            <div>
                <img src="${product.image}" alt="${product.title}" class="modal-image">
            </div>
            <div class="modal-info">
                <h2>${product.title}</h2>
                <div class="modal-rating">
                    ${this.getStarsHTML(product.rating)} 
                    <span>${product.rating} (${product.reviews.length} reviews)</span>
                </div>
                <p style="font-size: 1.5rem; font-weight: 700; color: var(--primary-color); margin-bottom: 1rem;">
                    $${price.toFixed(2)}
                </p>
                <p style="color: var(--text-secondary); margin-bottom: 2rem;">
                    Experience premium quality with our ${product.title}. Perfect for your daily needs and crafted with attention to detail.
                </p>
                <button class="btn btn-primary" onclick="app.addToCart(${product.id}, ${isFlash}); app.closeModal();">
                    Add to Cart
                </button>

                <div class="modal-reviews-section">
                    <h3>Customer Reviews</h3>
                    ${product.reviews.length > 0 ? product.reviews.map(r => `
                        <div class="review-item">
                            <div class="review-user">
                                <span>${r.user}</span>
                                <span class="review-stars">${this.getStarsHTML(r.rating)}</span>
                            </div>
                            <div class="review-text">"${r.comment}"</div>
                        </div>
                    `).join('') : '<p>No reviews yet.</p>'}
                </div>
            </div>
        `;

        this.dom.modal.style.display = 'block';
    },

    closeModal() {
        this.dom.modal.style.display = 'none';
    },

    // Cart Logic
    addToCart(id, isFlash = false) {
        const product = this.data.products.find(p => p.id === id);
        // Use the price based on whether the deal is currently valid (or passed explicitly).
        // For simplicity, we trust the isFlash flag if clicked from a flash card.
        // If clicked from normal grid, we check if it is a flash product.
        const finalPrice = (isFlash || product.labels.includes('flash')) ? (product.flashPrice || product.price) : product.price;

        const existing = this.data.cart.find(item => item.id === id);
        if (existing) {
            existing.quantity++;
        } else {
            this.data.cart.push({ ...product, price: finalPrice, quantity: 1 });
        }

        this.saveCart();
        this.updateCartUI();
        this.showToast('Item added to cart!');
    },

    removeFromCart(id) {
        this.data.cart = this.data.cart.filter(item => item.id !== id);
        this.saveCart();
        this.updateCartUI();
    },

    updateQuantity(id, change) {
        const item = this.data.cart.find(item => item.id === id);
        if (item) {
            item.quantity += change;
            if (item.quantity <= 0) {
                this.removeFromCart(id);
            } else {
                this.saveCart();
                this.updateCartUI();
            }
        }
    },

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.data.cart));
    },

    updateCartUI() {
        // Update Badge
        const totalItems = this.data.cart.reduce((sum, item) => sum + item.quantity, 0);
        this.dom.cartBadge.textContent = totalItems;
        this.dom.cartBadge.style.display = totalItems > 0 ? 'block' : 'none';

        // Render Cart Items
        if (this.data.cart.length === 0) {
            this.dom.cartItems.innerHTML = `
                <div class="empty-state">
                    <ion-icon name="basket-outline" style="font-size: 3rem; color: var(--text-secondary); margin-bottom: 1rem;"></ion-icon>
                    <p style="color: var(--text-secondary);">Your cart is empty.</p>
                    <button class="btn btn-secondary" onclick="app.switchView('products')" style="margin-top: 1rem;">Continue Shopping</button>
                </div>`;
            this.dom.checkoutBtn.disabled = true;
            this.dom.checkoutBtn.style.opacity = '0.5';
            this.dom.checkoutBtn.style.cursor = 'not-allowed';
        } else {
            this.dom.cartItems.innerHTML = this.data.cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                    <div class="cart-item-details">
                        <div class="cart-item-title">${item.title}</div>
                        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    </div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="app.updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="app.updateQuantity(${item.id}, 1)">+</button>
                        <button class="remove-btn" onclick="app.removeFromCart(${item.id})">
                            <ion-icon name="trash-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            `).join('');
            this.dom.checkoutBtn.disabled = false;
            this.dom.checkoutBtn.style.opacity = '1';
            this.dom.checkoutBtn.style.cursor = 'pointer';
        }

        // Update Totals
        const total = this.data.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        this.dom.cartSubtotal.textContent = `$${total.toFixed(2)}`;
        this.dom.cartTotal.textContent = `$${total.toFixed(2)}`;
    },

    // Checkout Logic
    processCheckout() {
        if (this.data.cart.length === 0) return;

        const order = {
            id: Math.random().toString(36).substr(2, 9).toUpperCase(),
            date: new Date().toLocaleDateString(),
            items: [...this.data.cart],
            total: this.data.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            status: 'ordered', // ordered, packed, shipped, delivered
            timestamp: Date.now()
        };

        this.data.orders.unshift(order);
        localStorage.setItem('orders', JSON.stringify(this.data.orders));

        // Clear Cart
        this.data.cart = [];
        this.saveCart();
        this.updateCartUI();

        // Show Tracking
        this.showTracking(order.id);
        this.showToast('Order placed successfully!');
    },

    showTracking(orderId) {
        const order = this.data.orders.find(o => o.id === orderId);
        if (!order) return;

        this.simulateOrderProgress(orderId);

        this.dom.trackingContainer.innerHTML = `
            <div class="order-card" style="margin-bottom: 0;">
                <div class="order-header">
                    <span class="order-id">Order #${order.id}</span>
                    <span class="order-date">${order.date}</span>
                </div>
                <div>
                    ${order.items.map(item => `
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.9rem;">
                            <span>${item.quantity}x ${item.title}</span>
                            <span>$${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    `).join('')}
                    <div style="border-top: 1px solid var(--border-color); margin-top: 0.5rem; padding-top: 0.5rem; display: flex; justify-content: space-between; font-weight: 700;">
                        <span>Total:</span>
                        <span>$${order.total.toFixed(2)}</span>
                    </div>
                </div>
            </div>

            <div class="timeline" id="timeline-${order.id}">
               ${this.getTimelineHTML(order.status)}
            </div>
        `;

        this.switchView('tracking');
    },

    getTimelineHTML(status) {
        const steps = ['ordered', 'packed', 'shipped', 'delivered'];
        const labels = ['Order Placed', 'Packed', 'Shipped', 'Delivered'];
        const currentIndex = steps.indexOf(status);

        return steps.map((step, index) => `
            <div class="timeline-item ${index <= currentIndex ? 'active' : ''}">
                <div class="timeline-content">
                    <h4>${labels[index]}</h4>
                    <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.25rem;">
                        ${index <= currentIndex ? 'Completed' : 'Pending'}
                    </p>
                </div>
            </div>
        `).join('');
    },

    simulateOrderProgress(orderId) {
        let order = this.data.orders.find(o => o.id === orderId);
        const steps = ['ordered', 'packed', 'shipped', 'delivered'];
        let currentIndex = steps.indexOf(order.status);

        if (currentIndex < 3) {
            const nextStep = () => {
                currentIndex++;
                if (currentIndex < steps.length) {
                    order.status = steps[currentIndex];
                    const orderIndex = this.data.orders.findIndex(o => o.id === orderId);
                    this.data.orders[orderIndex] = order;
                    localStorage.setItem('orders', JSON.stringify(this.data.orders));

                    const timelineContainer = document.getElementById(`timeline-${orderId}`);
                    if (timelineContainer) {
                        timelineContainer.innerHTML = this.getTimelineHTML(order.status);
                    }
                    if (currentIndex < 3) setTimeout(nextStep, 3000);
                }
            };
            setTimeout(nextStep, 3000);
        }
    },

    renderOrders() {
        if (this.data.orders.length === 0) {
            this.dom.ordersList.innerHTML = `
                <div class="empty-state">
                    <ion-icon name="cube-outline" style="font-size: 3rem; color: var(--text-secondary); margin-bottom: 1rem;"></ion-icon>
                    <p style="color: var(--text-secondary);">No orders yet.</p>
                    <button class="btn btn-secondary" onclick="app.switchView('products')" style="margin-top: 1rem;">Start Shopping</button>
                </div>
            `;
            return;
        }

        this.dom.ordersList.innerHTML = this.data.orders.map(order => `
            <div class="order-card">
                <div class="order-header">
                    <div>
                        <div class="order-id">Order #${order.id}</div>
                        <div class="order-date">${order.date}</div>
                    </div>
                    <div class="order-total">$${order.total.toFixed(2)}</div>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="text-transform: capitalize; color: var(--text-secondary);">Status: ${order.status}</span>
                    <button class="track-btn" onclick="app.showTracking('${order.id}')">Track Order</button>
                </div>
            </div>
        `).join('');
    },

    // Utilities
    showToast(message) {
        this.dom.toast.textContent = message;
        this.dom.toast.classList.add('show');
        setTimeout(() => {
            this.dom.toast.classList.remove('show');
        }, 3000);
    },

    toggleTheme() {
        if (document.body.getAttribute('data-theme') === 'dark') {
            document.body.removeAttribute('data-theme');
            this.dom.themeToggle.innerHTML = '<ion-icon name="moon-outline"></ion-icon>';
        } else {
            document.body.setAttribute('data-theme', 'dark');
            this.dom.themeToggle.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>';
        }
    },

    checkTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // Optional auto-detect
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
