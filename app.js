/**
 * ABHIVERA - Vibrant Peer-to-Peer Rental Marketplace
 * Modern UI with Airbnb-style floating search capsule, wishlist hearts,
 * large visual image cards, user KYC verification, and dynamic rental calculator.
 */

// Initial Seed Data for the Marketplace
const INITIAL_ITEMS = [
  {
    id: "item-1",
    title: "Philips 750W Mixer Grinder (3 Jars)",
    category: "Kitchen Appliances",
    condition: "Like New",
    conditionNote: "Hardly used 3 times. All 3 stainless steel jars, locking lids, and spatula included. Spotless and sanitized.",
    pricePerDay: 120,
    deposit: 600,
    minDays: 2,
    location: "Koramangala, Bangalore",
    owner: "Priya S.",
    ownerPhone: "+91 98451 12345",
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    rentedCount: 14,
    sellAsRent: true,
    buyoutPrice: 2200,
    created: Date.now() - 1000 * 60 * 60 * 24 * 3
  },
  {
    id: "item-2",
    title: "Prestige 8L Jumbo Biryani Pot with Glass Lid",
    category: "Utensils & Cookware",
    condition: "Brand New",
    conditionNote: "Brand new untouched non-stick jumbo pot. Ideal for home celebrations, party cooking for 10-15 people. Scratch-free.",
    pricePerDay: 90,
    deposit: 400,
    minDays: 1,
    location: "Indiranagar, Bangalore",
    owner: "Anand Verma",
    ownerPhone: "+91 97110 56789",
    image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80",
    rating: 5.0,
    rentedCount: 8,
    sellAsRent: false,
    buyoutPrice: null,
    created: Date.now() - 1000 * 60 * 60 * 24 * 5
  },
  {
    id: "item-3",
    title: "Luxury King Velvet Comforter & 4-Pillow Set",
    category: "Home Textiles & Linens",
    condition: "Like New",
    conditionNote: "Dry-cleaned and packed in vacuum-sealed bag. Ultra-soft microfiber quilt, 4 hypoallergenic pillows for hosting weekend guests.",
    pricePerDay: 140,
    deposit: 700,
    minDays: 2,
    location: "HSR Layout, Bangalore",
    owner: "Kavita Reddy",
    ownerPhone: "+91 99002 88412",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    rentedCount: 19,
    sellAsRent: false,
    buyoutPrice: null,
    created: Date.now() - 1000 * 60 * 60 * 24 * 2
  },
  {
    id: "item-4",
    title: "Wanbo T2 Max Full HD 1080P Smart Projector",
    category: "Electronics & Gadgets",
    condition: "Like New",
    conditionNote: "Crystal clear native 1080p projection, built-in Netflix/YouTube apps, HDMI cable & remote included. Great for movie nights.",
    pricePerDay: 350,
    deposit: 1800,
    minDays: 1,
    location: "Whitefield, Bangalore",
    owner: "Karthik N.",
    ownerPhone: "+91 96541 33211",
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&w=800&q=80",
    rating: 4.95,
    rentedCount: 27,
    sellAsRent: true,
    buyoutPrice: 6500,
    created: Date.now() - 1000 * 60 * 60 * 24 * 7
  },
  {
    id: "item-5",
    title: "Philips Handheld Garment Clothes Steamer",
    category: "Kitchen Appliances",
    condition: "Good",
    conditionNote: "Excellent working condition. Heats up in 45 seconds, kills 99% bacteria and removes wrinkles effortlessly. Detachable water tank.",
    pricePerDay: 110,
    deposit: 500,
    minDays: 2,
    location: "BTM Layout, Bangalore",
    owner: "Siddharth Rao",
    ownerPhone: "+91 94481 99201",
    image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    rentedCount: 11,
    sellAsRent: false,
    buyoutPrice: null,
    created: Date.now() - 1000 * 60 * 60 * 24 * 4
  },
  {
    id: "item-6",
    title: "Eureka Forbes Wet & Dry Deep Vacuum Cleaner",
    category: "Cleaning & Utility",
    condition: "Good",
    conditionNote: "High 1200W suction power. Comes with floor brush, crevice nozzle, and upholstery tool. Perfect for deep weekend house cleaning.",
    pricePerDay: 180,
    deposit: 800,
    minDays: 1,
    location: "JP Nagar, Bangalore",
    owner: "Meera Nair",
    ownerPhone: "+91 98860 11984",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=800&q=80",
    rating: 4.85,
    rentedCount: 22,
    sellAsRent: true,
    buyoutPrice: 3200,
    created: Date.now() - 1000 * 60 * 60 * 24 * 6
  },
  {
    id: "item-7",
    title: "Foldable Single Guest Cotton Mattress with Cover",
    category: "Home Textiles & Linens",
    condition: "Like New",
    conditionNote: "Freshly laundered 4-inch high density foam foldable mattress. Folds into a compact carry bag. Clean and firm.",
    pricePerDay: 95,
    deposit: 450,
    minDays: 2,
    location: "Malleshwaram, Bangalore",
    owner: "Ramesh C.",
    ownerPhone: "+91 97413 77650",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    rentedCount: 9,
    sellAsRent: false,
    buyoutPrice: null,
    created: Date.now() - 1000 * 60 * 60 * 24 * 8
  },
  {
    id: "item-8",
    title: "Morphy Richards 20L Solo Microwave Oven",
    category: "Kitchen Appliances",
    condition: "Good",
    conditionNote: "Works flawlessly. Perfect for quick heating, defrosting, and short stays. Glass turntable is clean without chips.",
    pricePerDay: 160,
    deposit: 900,
    minDays: 3,
    location: "Electronic City, Bangalore",
    owner: "Farhan A.",
    ownerPhone: "+91 95350 44231",
    image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&w=800&q=80",
    rating: 4.75,
    rentedCount: 16,
    sellAsRent: true,
    buyoutPrice: 2800,
    created: Date.now() - 1000 * 60 * 60 * 24 * 10
  }
];

// Default Verified Demo User Profile
const DEFAULT_USERS = [
  {
    id: "user-101",
    fullName: "Aditi Verma",
    email: "aditi.verma@example.com",
    phone: "+91 98450 12345",
    city: "Bangalore",
    area: "Koramangala 4th Block",
    govIdType: "Aadhaar Card",
    govIdNumber: "XXXX-XXXX-4589",
    rolePreference: "Rent & Lend Both",
    password: "password123",
    verified: true,
    initials: "AV",
    joinedDate: "October 2026"
  }
];

// App State
let state = {
  items: [],
  userListings: [],
  userBookings: [],
  wishlist: ["item-1", "item-4"], // Pre-seeded favorites
  registeredUsers: [],
  currentUser: null,
  activeCategory: "all",
  activeCondition: "all",
  activeLocation: "",
  maxBudgetPrice: "all",
  showWishlistOnly: false,
  sortMode: "featured",
  searchQuery: "",
  activeDetailItem: null,
  activeDrawerTab: "rentals",
  uploadedImageBase64: null,
  pendingActionAfterAuth: null
};

// LocalStorage Keys
const STORAGE_KEYS = {
  ITEMS: "abhivera_items_v4",
  USER_LISTINGS: "abhivera_user_listings_v4",
  USER_BOOKINGS: "abhivera_user_bookings_v4",
  WISHLIST: "abhivera_wishlist_v4",
  REGISTERED_USERS: "abhivera_registered_users_v4",
  CURRENT_USER: "abhivera_current_user_v4"
};

// Load Initial State
function loadState() {
  const savedItems = localStorage.getItem(STORAGE_KEYS.ITEMS);
  if (savedItems) {
    try {
      state.items = JSON.parse(savedItems);
    } catch (e) {
      state.items = [...INITIAL_ITEMS];
    }
  } else {
    state.items = [...INITIAL_ITEMS];
    saveItemsToStorage();
  }

  // Load wishlist
  const savedWishlist = localStorage.getItem(STORAGE_KEYS.WISHLIST);
  if (savedWishlist) {
    try {
      state.wishlist = JSON.parse(savedWishlist);
    } catch (e) {
      state.wishlist = ["item-1", "item-4"];
    }
  } else {
    saveWishlist();
  }

  // Load registered users
  const savedUsers = localStorage.getItem(STORAGE_KEYS.REGISTERED_USERS);
  if (savedUsers) {
    try {
      state.registeredUsers = JSON.parse(savedUsers);
    } catch (e) {
      state.registeredUsers = [...DEFAULT_USERS];
    }
  } else {
    state.registeredUsers = [...DEFAULT_USERS];
    saveRegisteredUsers();
  }

  // Load current logged-in user (Default to null so user arrives logged out, sees advertisement & login prompt first)
  const savedCurrentUser = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
  if (savedCurrentUser) {
    try {
      state.currentUser = JSON.parse(savedCurrentUser);
    } catch (e) {
      state.currentUser = null;
    }
  } else {
    state.currentUser = null;
  }

  // Load user listings
  const savedListings = localStorage.getItem(STORAGE_KEYS.USER_LISTINGS);
  if (savedListings) {
    try {
      state.userListings = JSON.parse(savedListings);
    } catch (e) {
      state.userListings = [];
    }
  }

  // Load user bookings
  const savedBookings = localStorage.getItem(STORAGE_KEYS.USER_BOOKINGS);
  if (savedBookings) {
    try {
      state.userBookings = JSON.parse(savedBookings);
    } catch (e) {
      state.userBookings = [];
    }
  }

  renderAuthUI();
  updateWishlistBadges();
  updateActivityBadge();
}

function saveItemsToStorage() {
  localStorage.setItem(STORAGE_KEYS.ITEMS, JSON.stringify(state.items));
}

function saveWishlist() {
  localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(state.wishlist));
}

function saveUserListings() {
  localStorage.setItem(STORAGE_KEYS.USER_LISTINGS, JSON.stringify(state.userListings));
}

function saveUserBookings() {
  localStorage.setItem(STORAGE_KEYS.USER_BOOKINGS, JSON.stringify(state.userBookings));
}

function saveRegisteredUsers() {
  localStorage.setItem(STORAGE_KEYS.REGISTERED_USERS, JSON.stringify(state.registeredUsers));
}

function saveCurrentUser() {
  if (state.currentUser) {
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(state.currentUser));
  } else {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
  }
}

// Helpers
function formatCurrency(amount) {
  return "₹" + Number(amount).toLocaleString("en-IN");
}

function getInitials(name) {
  if (!name) return "U";
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function getConditionBadgeClass(condition) {
  switch (condition) {
    case "Brand New": return "condition-brand-new";
    case "Like New": return "condition-like-new";
    case "Good": return "condition-good";
    case "Fair": return "condition-fair";
    default: return "condition-like-new";
  }
}

function updateWishlistBadges() {
  const count = state.wishlist.length;
  const navBadge = document.getElementById("wishlistNavCounter");
  const filterBadge = document.getElementById("wishlistCountFilter");
  const drawerBadge = document.getElementById("myWishlistDrawerCount");

  if (navBadge) navBadge.textContent = count;
  if (filterBadge) filterBadge.textContent = count;
  if (drawerBadge) drawerBadge.textContent = count;
}

function updateActivityBadge() {
  const total = state.userBookings.length + state.userListings.length;
  const badge = document.getElementById("activityCounter");
  if (badge) badge.textContent = total;

  const myBookingsCount = document.getElementById("myBookingsCount");
  const myListingsCount = document.getElementById("myListingsCount");
  if (myBookingsCount) myBookingsCount.textContent = state.userBookings.length;
  if (myListingsCount) myListingsCount.textContent = state.userListings.length;
}

// Wishlist Toggle
function toggleWishlist(itemId, e) {
  if (e) e.stopPropagation();

  const idx = state.wishlist.indexOf(itemId);
  if (idx > -1) {
    state.wishlist.splice(idx, 1);
  } else {
    state.wishlist.push(itemId);
  }

  saveWishlist();
  updateWishlistBadges();
  renderCatalog();

  if (state.activeDrawerTab === "wishlist") {
    renderActivityDrawer();
  }
}

// =============================================================================
// AUTHENTICATION & USER MANAGEMENT
// =============================================================================
function renderAuthUI() {
  const loginBtn = document.getElementById("loginBtn");
  const userMenuWrapper = document.getElementById("userMenuWrapper");
  const navUserAvatar = document.getElementById("navUserAvatar");
  const navUserName = document.getElementById("navUserName");
  const menuFullName = document.getElementById("menuFullName");
  const menuEmail = document.getElementById("menuEmail");
  const menuGovIdTag = document.getElementById("menuGovIdTag");
  const memberWelcomeName = document.getElementById("memberWelcomeName");

  if (state.currentUser) {
    // User is logged in: unlock marketplace, hide guest advertising showcase
    document.body.classList.add("user-authenticated");

    if (loginBtn) loginBtn.style.display = "none";
    if (userMenuWrapper) userMenuWrapper.style.display = "block";

    const firstName = state.currentUser.fullName.split(" ")[0];
    const initials = state.currentUser.initials || getInitials(state.currentUser.fullName);

    if (navUserName) navUserName.textContent = firstName;
    if (memberWelcomeName) memberWelcomeName.textContent = firstName;
    if (navUserAvatar) navUserAvatar.textContent = initials;
    if (menuFullName) menuFullName.textContent = state.currentUser.fullName;
    if (menuEmail) menuEmail.textContent = state.currentUser.email || state.currentUser.phone;
    if (menuGovIdTag) menuGovIdTag.textContent = `${state.currentUser.govIdType} Verified`;

    // Populate Profile Modal details
    const pAvatar = document.getElementById("profileModalAvatar");
    const pName = document.getElementById("profileModalFullName");
    const pRole = document.getElementById("profileModalRole");
    const pEmail = document.getElementById("profileModalEmail");
    const pPhone = document.getElementById("profileModalPhone");
    const pLocation = document.getElementById("profileModalLocation");
    const pGovId = document.getElementById("profileModalGovId");

    if (pAvatar) pAvatar.textContent = initials;
    if (pName) pName.textContent = state.currentUser.fullName;
    if (pRole) pRole.textContent = `Community Member • ${state.currentUser.rolePreference || "Rent & Lend"}`;
    if (pEmail) pEmail.textContent = state.currentUser.email;
    if (pPhone) pPhone.textContent = state.currentUser.phone;
    if (pLocation) pLocation.textContent = `${state.currentUser.area || "City Center"}, ${state.currentUser.city || "Bangalore"}`;
    if (pGovId) pGovId.textContent = `${state.currentUser.govIdType} (${state.currentUser.govIdNumber})`;

    // Render items when authenticated
    renderCatalog();

  } else {
    // User is logged out: show advertising showcase, hide marketplace and rental slots
    document.body.classList.remove("user-authenticated");

    if (loginBtn) loginBtn.style.display = "inline-flex";
    if (userMenuWrapper) userMenuWrapper.style.display = "none";
  }
}

function openAuthModal(tab = "signin", nextAction = null) {
  state.pendingActionAfterAuth = nextAction;
  const modal = document.getElementById("authModal");
  if (!modal) return;

  switchAuthTab(tab);
  modal.classList.add("active");
}

function closeAuthModal() {
  const modal = document.getElementById("authModal");
  if (modal) modal.classList.remove("active");
  const signInForm = document.getElementById("signInForm");
  const signUpForm = document.getElementById("signUpForm");
  if (signInForm) signInForm.reset();
  if (signUpForm) signUpForm.reset();
}

function switchAuthTab(tab) {
  const tabSignInBtn = document.getElementById("tabSignInBtn");
  const tabSignUpBtn = document.getElementById("tabSignUpBtn");
  const signInForm = document.getElementById("signInForm");
  const signUpForm = document.getElementById("signUpForm");

  if (tab === "signin") {
    tabSignInBtn.classList.add("active");
    tabSignUpBtn.classList.remove("active");
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
  } else {
    tabSignInBtn.classList.remove("active");
    tabSignUpBtn.classList.add("active");
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
  }
}

function loginUser(user) {
  state.currentUser = user;
  saveCurrentUser();
  renderAuthUI();
  closeAuthModal();

  alert(`🎉 Welcome back, ${user.fullName}!\nYou are signed in with verified KYC status on ABHIVERA.`);

  if (typeof state.pendingActionAfterAuth === "function") {
    const act = state.pendingActionAfterAuth;
    state.pendingActionAfterAuth = null;
    act();
  }
}

function logoutUser() {
  const name = state.currentUser ? state.currentUser.fullName : "User";
  state.currentUser = null;
  saveCurrentUser();
  renderAuthUI();

  const dropdown = document.getElementById("userDropdownMenu");
  if (dropdown) dropdown.classList.remove("active");
  const pModal = document.getElementById("profileModal");
  if (pModal) pModal.classList.remove("active");

  alert(`You have logged out of ABHIVERA. See you again, ${name}!`);
}

function openProfileModal() {
  const dropdown = document.getElementById("userDropdownMenu");
  if (dropdown) dropdown.classList.remove("active");

  const modal = document.getElementById("profileModal");
  if (modal) modal.classList.add("active");
}

function closeProfileModal() {
  const modal = document.getElementById("profileModal");
  if (modal) modal.classList.remove("active");
}

function requireAuth(actionCallback, reasonMsg) {
  if (state.currentUser) {
    actionCallback();
  } else {
    alert(reasonMsg || "Please log in or register on ABHIVERA to continue. Verified profiles ensure safe deposits.");
    openAuthModal("signin", actionCallback);
  }
}

// Filter and Sort Items
function getFilteredItems() {
  return state.items.filter(item => {
    // Wishlist Only filter
    if (state.showWishlistOnly && !state.wishlist.includes(item.id)) {
      return false;
    }

    // Category match
    const categoryMatch = state.activeCategory === "all" || item.category === state.activeCategory;

    // Condition match
    const conditionMatch = state.activeCondition === "all" || item.condition === state.activeCondition;

    // Location match from capsule
    const locationMatch = !state.activeLocation || item.location.toLowerCase().includes(state.activeLocation.toLowerCase());

    // Max Price filter from capsule
    let priceMatch = true;
    if (state.maxBudgetPrice !== "all") {
      const maxP = parseFloat(state.maxBudgetPrice);
      priceMatch = item.pricePerDay <= maxP;
    }

    // Keyword search
    const q = state.searchQuery.trim().toLowerCase();
    const searchMatch = !q || (
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.location.toLowerCase().includes(q) ||
      item.conditionNote.toLowerCase().includes(q) ||
      item.condition.toLowerCase().includes(q)
    );

    return categoryMatch && conditionMatch && locationMatch && priceMatch && searchMatch;
  }).sort((a, b) => {
    if (state.sortMode === "price-asc") {
      return a.pricePerDay - b.pricePerDay;
    } else if (state.sortMode === "price-desc") {
      return b.pricePerDay - a.pricePerDay;
    } else if (state.sortMode === "deposit-asc") {
      return a.deposit - b.deposit;
    } else {
      return (b.created || 0) - (a.created || 0);
    }
  });
}

// Render Marketplace Grid with Larger Images & Wishlist
function renderCatalog() {
  const grid = document.getElementById("itemsGrid");
  const countDisplay = document.getElementById("itemCountDisplay");
  if (!grid) return;

  const filtered = getFilteredItems();
  if (countDisplay) countDisplay.textContent = filtered.length;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon"><i class="fa-solid fa-sparkles"></i></div>
        <h3 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 0.5rem;">No items match your search</h3>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem; max-width: 440px; margin-left: auto; margin-right: auto;">
          Try adjusting your capsule location or price filter, or reset all filters to browse all available appliances!
        </p>
        <button class="btn btn-primary" onclick="resetAllFilters()">
          <i class="fa-solid fa-arrow-rotate-left"></i> Reset All Filters
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const badgeClass = getConditionBadgeClass(item.condition);
    const isWishlisted = state.wishlist.includes(item.id);

    return `
      <article class="item-card" data-id="${item.id}">
        <!-- Larger Visual Gallery Wrapper with Zoom -->
        <div class="item-image-wrapper">
          <img src="${item.image}" alt="${item.title}" class="item-image" loading="lazy">
          
          <!-- Badges on Left -->
          <div class="item-badges-left">
            <span class="condition-badge ${badgeClass}">
              <i class="fa-solid fa-certificate"></i> ${item.condition}
            </span>
            <span class="item-category-tag-floating">${item.category}</span>
            ${item.sellAsRent ? `
              <span class="badge-sell-rent" title="Rent-to-Own Available: Outright buyout price ${formatCurrency(item.buyoutPrice)}">
                <i class="fa-solid fa-tags"></i> Sell as Rent
              </span>
            ` : ''}
          </div>

          <!-- Wishlist Heart Button -->
          <button class="wishlist-heart-btn ${isWishlisted ? 'active' : ''}" data-wishlist-id="${item.id}" title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}">
            <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>
        </div>

        <div class="item-body">
          <h3 class="item-title" title="${item.title}">${item.title}</h3>
          
          <div class="item-location">
            <i class="fa-solid fa-location-dot" style="color: var(--primary-color);"></i>
            <span>${item.location}</span>
          </div>

          <p class="item-description">${item.conditionNote}</p>

          <!-- Specs Strip -->
          <div class="item-specs-strip">
            <div class="spec-badge-item" title="Community Rating">
              <i class="fa-solid fa-star" style="color: #f59e0b;"></i>
              <span>${item.rating ? item.rating.toFixed(1) : "5.0"}</span>
            </div>
            <div class="spec-badge-item" title="Minimum rental duration">
              <i class="fa-regular fa-clock" style="color: #6366f1;"></i>
              <span>Min ${item.minDays || 1} d</span>
            </div>
            <div class="spec-badge-item" title="Verified Rented Times">
              <i class="fa-solid fa-repeat" style="color: #10b981;"></i>
              <span>${item.rentedCount || 0} rented</span>
            </div>
          </div>

          <div class="item-footer">
            <div>
              <span class="item-price-rate">${formatCurrency(item.pricePerDay)}</span>
              <span class="item-price-period">/day</span>
              <div class="item-deposit-info">Deposit: ${formatCurrency(item.deposit)} (Refundable)</div>
              ${item.sellAsRent ? `
                <div class="item-buyout-tag">
                  <i class="fa-solid fa-cart-shopping" style="font-size: 0.72rem;"></i> Buyout: <strong>${formatCurrency(item.buyoutPrice)}</strong>
                </div>
              ` : ''}
            </div>

            <div class="card-action-btns">
              <button class="btn btn-outline view-detail-btn" data-id="${item.id}" title="View details">
                <span>View</span>
              </button>
              <button class="btn btn-primary btn-buy-now-card" data-id="${item.id}" title="Buy / Rent Now in New Tab">
                <i class="fa-solid fa-bolt"></i>
                <span>Buy Now</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");

  // Attach card event listeners
  grid.querySelectorAll(".btn-buy-now-card").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-id");
      openCheckoutTab(id);
    });
  });

  grid.querySelectorAll(".view-detail-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-id");
      openDetailModal(id);
    });
  });

  grid.querySelectorAll(".item-card").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-id");
      openDetailModal(id);
    });
  });

  grid.querySelectorAll(".wishlist-heart-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = btn.getAttribute("data-wishlist-id");
      toggleWishlist(id, e);
    });
  });
}

// Reset Filters Function
window.resetAllFilters = function() {
  state.activeCategory = "all";
  state.activeCondition = "all";
  state.activeLocation = "";
  state.maxBudgetPrice = "all";
  state.showWishlistOnly = false;
  state.sortMode = "featured";
  state.searchQuery = "";

  const capItemInput = document.getElementById("capsuleItemInput");
  if (capItemInput) capItemInput.value = "";

  const liveInput = document.getElementById("marketplaceItemSearchInput");
  if (liveInput) liveInput.value = "";

  const clearBtn = document.getElementById("clearMarketplaceSearchBtn");
  if (clearBtn) clearBtn.style.display = "none";

  const locInput = document.getElementById("capsuleLocationInput");
  if (locInput) locInput.value = "";

  const catSelect = document.getElementById("capsuleCategorySelect");
  if (catSelect) catSelect.value = "all";

  const condSelect = document.getElementById("capsuleConditionSelect");
  if (condSelect) condSelect.value = "all";

  const priceSelect = document.getElementById("capsulePriceSelect");
  if (priceSelect) priceSelect.value = "all";

  const condFilter = document.getElementById("conditionFilter");
  if (condFilter) condFilter.value = "all";

  const sortFilter = document.getElementById("sortFilter");
  if (sortFilter) sortFilter.value = "featured";

  const wishBtn = document.getElementById("wishlistFilterToggle");
  if (wishBtn) wishBtn.classList.remove("active");

  document.querySelectorAll(".category-chip").forEach(chip => {
    if (chip.getAttribute("data-category") === "all") {
      chip.classList.add("active");
    } else {
      chip.classList.remove("active");
    }
  });

  renderCatalog();
};

// Item Details & Booking Calculator Modal
function openDetailModal(itemId) {
  const item = state.items.find(i => i.id === itemId);
  if (!item) return;

  state.activeDetailItem = item;

  document.getElementById("detailTitle").innerHTML = `<i class="fa-solid fa-box" style="color: var(--primary-color);"></i> Rental Overview`;
  document.getElementById("detailImg").src = item.image;
  document.getElementById("detailImg").alt = item.title;
  document.getElementById("detailName").textContent = item.title;
  document.getElementById("detailCategory").textContent = item.category;
  document.getElementById("detailPriceDaily").textContent = formatCurrency(item.pricePerDay);
  document.getElementById("detailDepositAmount").textContent = formatCurrency(item.deposit);
  document.getElementById("detailDescription").textContent = item.conditionNote;
  document.getElementById("detailOwner").textContent = item.owner || "Verified Community Member";
  document.getElementById("detailLocation").textContent = item.location;

  // Condition Banner Styling
  const banner = document.getElementById("detailConditionBanner");
  const conditionText = document.getElementById("detailConditionText");
  const conditionSub = document.getElementById("detailConditionSub");

  conditionText.textContent = `Condition: ${item.condition}`;
  if (item.condition === "Brand New") {
    banner.style.backgroundColor = "#ecfdf5";
    banner.style.color = "#065f46";
    banner.style.border = "1.5px solid #10b981";
    conditionSub.textContent = "Unused or in pristine original state. Ready for immediate use.";
  } else if (item.condition === "Like New") {
    banner.style.backgroundColor = "#eff6ff";
    banner.style.color = "#1e40af";
    banner.style.border = "1.5px solid #3b82f6";
    conditionSub.textContent = "Minimal wear, fully sanitised, verified working without cosmetic issues.";
  } else if (item.condition === "Good") {
    banner.style.backgroundColor = "#fffbeb";
    banner.style.color = "#92400e";
    banner.style.border = "1.5px solid #f59e0b";
    conditionSub.textContent = "Minor normal signs of use, 100% operational performance.";
  } else {
    banner.style.backgroundColor = "#faf5ff";
    banner.style.color = "#6b21a8";
    banner.style.border = "1.5px solid #8b5cf6";
    conditionSub.textContent = "Visible cosmetic wear, all functions tested and working.";
  }

  // Handle Sell as Rent / Buyout Block
  const sellAsRentBlock = document.getElementById("detailSellAsRentBlock");
  const buyoutPriceEl = document.getElementById("detailBuyoutPrice");
  if (sellAsRentBlock && buyoutPriceEl) {
    if (item.sellAsRent && item.buyoutPrice) {
      sellAsRentBlock.style.display = "block";
      buyoutPriceEl.textContent = formatCurrency(item.buyoutPrice);
    } else {
      sellAsRentBlock.style.display = "none";
    }
  }

  // Setup Default Dates for Calculator
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + (item.minDays || 2));

  const startDateInput = document.getElementById("rentStartDate");
  const endDateInput = document.getElementById("rentEndDate");

  startDateInput.min = today.toISOString().split("T")[0];
  startDateInput.value = today.toISOString().split("T")[0];

  endDateInput.min = tomorrow.toISOString().split("T")[0];
  endDateInput.value = tomorrow.toISOString().split("T")[0];

  calculateBookingEstimate();

  document.getElementById("detailModal").classList.add("active");
}

// Open Dedicated Checkout Tab in a New Tab
function openCheckoutTab(itemId, startDate = null, endDate = null, mode = "rent") {
  const item = state.items.find(i => i.id === itemId) || state.activeDetailItem;
  if (!item) return;

  const startVal = startDate || (document.getElementById("rentStartDate") ? document.getElementById("rentStartDate").value : "");
  const endVal = endDate || (document.getElementById("rentEndDate") ? document.getElementById("rentEndDate").value : "");

  let url = `checkout.html?itemId=${encodeURIComponent(item.id)}&mode=${encodeURIComponent(mode)}`;
  if (startVal) url += `&startDate=${encodeURIComponent(startVal)}`;
  if (endVal) url += `&endDate=${encodeURIComponent(endVal)}`;

  const detailModal = document.getElementById("detailModal");
  if (detailModal) detailModal.classList.remove("active");

  // Open checkout in a new browser tab as requested
  window.open(url, "_blank");
}
window.openCheckoutTab = openCheckoutTab;

// Request Outright Buyout (Sell as Rent) Action -> Opens Checkout Tab in Buyout Mode
function confirmBuyoutRequest() {
  if (!state.activeDetailItem) return;
  openCheckoutTab(state.activeDetailItem.id, null, null, "buyout");
}

function calculateBookingEstimate() {
  if (!state.activeDetailItem) return;

  const startDateVal = document.getElementById("rentStartDate").value;
  const endDateVal = document.getElementById("rentEndDate").value;

  if (!startDateVal || !endDateVal) return;

  const start = new Date(startDateVal);
  const end = new Date(endDateVal);

  const diffTime = end.getTime() - start.getTime();
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  if (diffDays <= 0) diffDays = 1;

  const dailyRate = state.activeDetailItem.pricePerDay;
  const deposit = state.activeDetailItem.deposit;
  const rentSubtotal = dailyRate * diffDays;
  const totalDue = rentSubtotal + deposit;

  document.getElementById("calcDuration").textContent = `${diffDays} day${diffDays > 1 ? "s" : ""}`;
  document.getElementById("calcDaysRate").textContent = `${diffDays} × ${formatCurrency(dailyRate)}`;
  document.getElementById("calcRentSubtotal").textContent = formatCurrency(rentSubtotal);
  document.getElementById("calcDeposit").textContent = formatCurrency(deposit);
  document.getElementById("calcTotalDue").textContent = formatCurrency(totalDue);
}

// Request Rental / Buy Now Action -> Opens Checkout Tab in Rent Mode with Selected Dates
function confirmRentalBooking() {
  if (!state.activeDetailItem) return;

  const startDate = document.getElementById("rentStartDate").value;
  const endDate = document.getElementById("rentEndDate").value;

  openCheckoutTab(state.activeDetailItem.id, startDate, endDate, "rent");
}

// Activity Drawer Logic (Bookings, Listings, Wishlist)
function openActivityDrawer(tab = "rentals") {
  state.activeDrawerTab = tab;
  renderActivityDrawer();
  document.getElementById("activityDrawerOverlay").classList.add("active");
}

function closeActivityDrawer() {
  document.getElementById("activityDrawerOverlay").classList.remove("active");
}

function renderActivityDrawer() {
  const content = document.getElementById("drawerContentList");
  const tabRentals = document.getElementById("tabRentalsBtn");
  const tabListings = document.getElementById("tabListingsBtn");
  const tabWishlist = document.getElementById("tabWishlistBtn");

  tabRentals.classList.remove("active");
  tabListings.classList.remove("active");
  tabWishlist.classList.remove("active");

  if (state.activeDrawerTab === "rentals") {
    tabRentals.classList.add("active");

    if (state.userBookings.length === 0) {
      content.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <i class="fa-regular fa-calendar-xmark" style="font-size: 2.8rem; margin-bottom: 0.8rem; display: block; color: var(--primary-color);"></i>
          <h4 style="font-size: 1.1rem; font-weight: 800; color: var(--text-main);">No Bookings Yet</h4>
          <p style="font-size: 0.88rem; margin-top: 0.35rem;">Browse appliances or linens from the marketplace and request short-term rentals!</p>
        </div>
      `;
    } else {
      content.innerHTML = state.userBookings.map(b => `
        <div class="drawer-card">
          <img src="${b.image}" alt="${b.itemTitle}" class="drawer-card-img">
          <div style="flex: 1;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <h4 style="font-size: 0.95rem; font-weight: 800; color: var(--text-main); line-height: 1.25;">${b.itemTitle}</h4>
              <button class="delete-booking-btn" data-id="${b.id}" style="background:none; border:none; color: #ef4444; cursor: pointer; font-size: 0.9rem;" title="Cancel booking">
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin: 0.25rem 0;">
              Dates: <strong>${b.startDate}</strong> to <strong>${b.endDate}</strong> (${b.days} d)
            </div>
            <div style="font-size: 0.82rem; color: var(--primary-color); font-weight: 800;">
              Total Paid: ${formatCurrency(b.totalDue)} (Deposit: ${formatCurrency(b.deposit)})
            </div>
            <div style="font-size: 0.74rem; color: #166534; background: #dcfce7; display: inline-block; padding: 0.15rem 0.5rem; border-radius: 4px; margin-top: 0.35rem; font-weight: 700;">
              <i class="fa-solid fa-circle-check"></i> ${b.status}
            </div>
          </div>
        </div>
      `).join("");

      content.querySelectorAll(".delete-booking-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const id = btn.getAttribute("data-id");
          state.userBookings = state.userBookings.filter(b => b.id !== id);
          saveUserBookings();
          updateActivityBadge();
          renderActivityDrawer();
        });
      });
    }
  } else if (state.activeDrawerTab === "listings") {
    tabListings.classList.add("active");

    if (state.userListings.length === 0) {
      content.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <i class="fa-solid fa-cloud-arrow-up" style="font-size: 2.8rem; margin-bottom: 0.8rem; display: block; color: var(--accent-color);"></i>
          <h4 style="font-size: 1.1rem; font-weight: 800; color: var(--text-main);">No Listed Items</h4>
          <p style="font-size: 0.88rem; margin-top: 0.35rem;">Have idle kitchen electronics, utensils or linen? Click "List an Item" to start earning!</p>
        </div>
      `;
    } else {
      content.innerHTML = state.userListings.map(l => `
        <div class="drawer-card">
          <img src="${l.image}" alt="${l.title}" class="drawer-card-img">
          <div style="flex: 1;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <h4 style="font-size: 0.95rem; font-weight: 800; color: var(--text-main); line-height: 1.25;">${l.title}</h4>
              <button class="delete-listing-btn" data-id="${l.id}" style="background:none; border:none; color: #ef4444; cursor: pointer; font-size: 0.9rem;" title="Delete listing">
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin: 0.25rem 0;">
              ${l.category} • Condition: <strong>${l.condition}</strong>
            </div>
            <div style="font-size: 0.82rem; color: var(--primary-color); font-weight: 800;">
              ${formatCurrency(l.pricePerDay)}/day • Deposit: ${formatCurrency(l.deposit)}
            </div>
            <div style="font-size: 0.74rem; color: #0369a1; background: #e0f2fe; display: inline-block; padding: 0.15rem 0.5rem; border-radius: 4px; margin-top: 0.35rem; font-weight: 700;">
              <i class="fa-solid fa-eye"></i> Live in Marketplace
            </div>
          </div>
        </div>
      `).join("");

      content.querySelectorAll(".delete-listing-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const id = btn.getAttribute("data-id");
          state.userListings = state.userListings.filter(l => l.id !== id);
          state.items = state.items.filter(item => item.id !== id);
          saveUserListings();
          saveItemsToStorage();
          updateActivityBadge();
          renderCatalog();
          renderActivityDrawer();
        });
      });
    }
  } else {
    // Wishlist Tab
    tabWishlist.classList.add("active");
    const wishlistedItems = state.items.filter(i => state.wishlist.includes(i.id));

    if (wishlistedItems.length === 0) {
      content.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <i class="fa-regular fa-heart" style="font-size: 2.8rem; margin-bottom: 0.8rem; display: block; color: var(--primary-color);"></i>
          <h4 style="font-size: 1.1rem; font-weight: 800; color: var(--text-main);">Your Wishlist is Empty</h4>
          <p style="font-size: 0.88rem; margin-top: 0.35rem;">Click the heart icon on any product card to save items you love!</p>
        </div>
      `;
    } else {
      content.innerHTML = wishlistedItems.map(item => `
        <div class="drawer-card" style="cursor: pointer;" onclick="openDetailModal('${item.id}')">
          <img src="${item.image}" alt="${item.title}" class="drawer-card-img">
          <div style="flex: 1;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
              <h4 style="font-size: 0.95rem; font-weight: 800; color: var(--text-main); line-height: 1.25;">${item.title}</h4>
              <button class="remove-wishlist-drawer-btn" data-id="${item.id}" style="background:none; border:none; color: #c59b27; cursor: pointer; font-size: 1.1rem;" title="Remove from wishlist">
                <i class="fa-solid fa-heart"></i>
              </button>
            </div>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin: 0.25rem 0;">
              ${item.location} • Condition: <strong>${item.condition}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.35rem;">
              <span style="font-size: 0.88rem; color: var(--primary-color); font-weight: 900;">
                ${formatCurrency(item.pricePerDay)}/day
              </span>
              <button class="btn btn-primary wishlist-buy-btn" data-id="${item.id}" style="padding: 0.35rem 0.75rem; font-size: 0.78rem; font-weight: 800;">
                <i class="fa-solid fa-bolt"></i> Buy Now
              </button>
            </div>
          </div>
        </div>
      `).join("");

      content.querySelectorAll(".wishlist-buy-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const id = btn.getAttribute("data-id");
          closeActivityDrawer();
          openCheckoutTab(id);
        });
      });

      content.querySelectorAll(".remove-wishlist-drawer-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const id = btn.getAttribute("data-id");
          toggleWishlist(id, e);
        });
      });
    }
  }
}

// Upload Modal Controllers
function openUploadModal() {
  requireAuth(() => {
    if (state.currentUser) {
      const nameInput = document.getElementById("ownerName");
      const phoneInput = document.getElementById("ownerPhone");
      const locInput = document.getElementById("itemLocation");

      if (nameInput) nameInput.value = state.currentUser.fullName || "";
      if (phoneInput) phoneInput.value = state.currentUser.phone || "";
      if (locInput && !locInput.value) {
        locInput.value = `${state.currentUser.area || "Koramangala"}, ${state.currentUser.city || "Bangalore"}`;
      }
    }

    document.getElementById("uploadModal").classList.add("active");
  }, "Please log in or register before listing an item. Verified lenders ensure trustworthy rentals and safe returns.");
}

function closeUploadModal() {
  document.getElementById("uploadModal").classList.remove("active");
  document.getElementById("uploadItemForm").reset();
  const sellCheck = document.getElementById("itemSellAsRentCheckbox");
  const sellGroup = document.getElementById("sellAsRentPriceGroup");
  if (sellCheck) sellCheck.checked = false;
  if (sellGroup) sellGroup.style.display = "none";
  resetImagePreview();
}

function resetImagePreview() {
  state.uploadedImageBase64 = null;
  const previewContainer = document.getElementById("imagePreviewContainer");
  const prompt = document.getElementById("dropZonePrompt");
  const img = document.getElementById("imagePreview");
  if (previewContainer && prompt && img) {
    previewContainer.style.display = "none";
    prompt.style.display = "block";
    img.src = "";
  }
}

function setImagePreview(url) {
  state.uploadedImageBase64 = url;
  const previewContainer = document.getElementById("imagePreviewContainer");
  const prompt = document.getElementById("dropZonePrompt");
  const img = document.getElementById("imagePreview");
  if (previewContainer && prompt && img) {
    img.src = url;
    prompt.style.display = "none";
    previewContainer.style.display = "block";
  }
}

// Handle Form Submit for New Uploaded Item
function handleItemUpload(e) {
  e.preventDefault();

  const title = document.getElementById("itemTitle").value.trim();
  const category = document.getElementById("itemCategory").value;
  const condition = document.getElementById("itemCondition").value;
  const price = parseFloat(document.getElementById("itemPrice").value);
  const deposit = parseFloat(document.getElementById("itemDeposit").value);
  const minDays = parseInt(document.getElementById("itemMinDays").value, 10) || 1;
  const location = document.getElementById("itemLocation").value.trim();
  const description = document.getElementById("itemDescription").value.trim();
  const ownerName = document.getElementById("ownerName").value.trim();
  const ownerPhone = document.getElementById("ownerPhone").value.trim();

  // Sell as Rent buyout parameters
  const sellAsRentCheckbox = document.getElementById("itemSellAsRentCheckbox");
  const sellAsRent = sellAsRentCheckbox ? sellAsRentCheckbox.checked : false;
  const buyoutInput = document.getElementById("itemBuyoutPrice");
  const buyoutVal = buyoutInput ? parseFloat(buyoutInput.value) : null;
  const buyoutPrice = sellAsRent && !isNaN(buyoutVal) && buyoutVal > 0 ? buyoutVal : null;

  let image = state.uploadedImageBase64;
  if (!image) {
    image = "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80";
  }

  const newItem = {
    id: "item-user-" + Date.now(),
    title,
    category,
    condition,
    conditionNote: description,
    pricePerDay: price,
    deposit,
    minDays,
    location,
    owner: ownerName,
    ownerPhone,
    ownerId: state.currentUser ? state.currentUser.id : null,
    image,
    rating: 5.0,
    rentedCount: 0,
    sellAsRent,
    buyoutPrice,
    created: Date.now()
  };

  state.items.unshift(newItem);
  state.userListings.unshift(newItem);

  saveItemsToStorage();
  saveUserListings();
  updateActivityBadge();

  closeUploadModal();
  renderCatalog();

  const market = document.getElementById("marketplace");
  if (market) {
    market.scrollIntoView({ behavior: "smooth" });
  }

  alert(`🎉 Success! Your item "${newItem.title}" is now published and live on ABHIVERA for renters to book.`);
}

// Handle Sign In Submit
function handleSignIn(e) {
  e.preventDefault();
  const emailInput = document.getElementById("loginEmail").value.trim().toLowerCase();
  const passwordInput = document.getElementById("loginPassword").value;

  const foundUser = state.registeredUsers.find(u => 
    (u.email.toLowerCase() === emailInput || u.phone.replace(/\s+/g, '') === emailInput.replace(/\s+/g, ''))
  );

  if (!foundUser) {
    const newUser = {
      id: "user-" + Date.now(),
      fullName: emailInput.split("@")[0].toUpperCase() || "Resident Member",
      email: emailInput.includes("@") ? emailInput : `${emailInput}@abhivera.local`,
      phone: emailInput.includes("@") ? "+91 98000 00000" : emailInput,
      city: "Bangalore",
      area: "Indiranagar",
      govIdType: "Aadhaar Card",
      govIdNumber: "XXXX-XXXX-9999",
      rolePreference: "Rent & Lend Both",
      password: passwordInput,
      verified: true,
      initials: getInitials(emailInput.split("@")[0]),
      joinedDate: "October 2026"
    };
    state.registeredUsers.push(newUser);
    saveRegisteredUsers();
    loginUser(newUser);
  } else {
    loginUser(foundUser);
  }
}

// Handle Sign Up / KYC Registration Submit
function handleSignUp(e) {
  e.preventDefault();

  const fullName = document.getElementById("regFullName").value.trim();
  const email = document.getElementById("regEmail").value.trim().toLowerCase();
  const phone = document.getElementById("regPhone").value.trim();
  const city = document.getElementById("regCity").value.trim();
  const area = document.getElementById("regArea").value.trim();
  const govIdType = document.getElementById("regGovIdType").value;
  const govIdNumber = document.getElementById("regGovIdNumber").value.trim();
  const rolePreference = document.getElementById("regRole").value;
  const password = document.getElementById("regPassword").value;

  const newUser = {
    id: "user-" + Date.now(),
    fullName,
    email,
    phone,
    city,
    area,
    govIdType,
    govIdNumber,
    rolePreference,
    password,
    verified: true,
    initials: getInitials(fullName),
    joinedDate: "October 2026"
  };

  state.registeredUsers.push(newUser);
  saveRegisteredUsers();
  loginUser(newUser);
}

// Event Listeners Initialization
function initEventListeners() {
  // Airbnb Capsule Search Execution
  const capsuleSearchBtn = document.getElementById("capsuleSearchBtn");
  const capsuleItemInput = document.getElementById("capsuleItemInput");

  if (capsuleSearchBtn) {
    capsuleSearchBtn.addEventListener("click", () => {
      // Capture Specific Item Keyword
      if (capsuleItemInput) {
        state.searchQuery = capsuleItemInput.value.trim();
        const liveInput = document.getElementById("marketplaceItemSearchInput");
        const clearBtn = document.getElementById("clearMarketplaceSearchBtn");
        if (liveInput) liveInput.value = state.searchQuery;
        if (clearBtn) clearBtn.style.display = state.searchQuery ? "flex" : "none";
      }

      state.activeLocation = document.getElementById("capsuleLocationInput") ? document.getElementById("capsuleLocationInput").value.trim() : "";
      state.activeCategory = document.getElementById("capsuleCategorySelect") ? document.getElementById("capsuleCategorySelect").value : "all";
      state.maxBudgetPrice = document.getElementById("capsulePriceSelect") ? document.getElementById("capsulePriceSelect").value : "all";

      // Sync active state on category chips
      document.querySelectorAll(".category-chip").forEach(chip => {
        if (chip.getAttribute("data-category") === state.activeCategory) {
          chip.classList.add("active");
        } else {
          chip.classList.remove("active");
        }
      });

      renderCatalog();

      const market = document.getElementById("marketplace");
      if (market) market.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Support pressing 'Enter' in the hero capsule item input
  if (capsuleItemInput) {
    capsuleItemInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        if (capsuleSearchBtn) capsuleSearchBtn.click();
      }
    });
  }

  // Real-Time Live Specific Item Search in Marketplace Catalog
  const liveSearchInput = document.getElementById("marketplaceItemSearchInput");
  const clearSearchBtn = document.getElementById("clearMarketplaceSearchBtn");

  if (liveSearchInput) {
    liveSearchInput.addEventListener("input", (e) => {
      const q = e.target.value;
      state.searchQuery = q.trim();

      // Sync with hero capsule input
      if (capsuleItemInput) capsuleItemInput.value = q;

      if (clearSearchBtn) {
        clearSearchBtn.style.display = q.length > 0 ? "flex" : "none";
      }

      renderCatalog();
    });

    liveSearchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (clearSearchBtn) clearSearchBtn.click();
      }
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      state.searchQuery = "";
      if (liveSearchInput) liveSearchInput.value = "";
      if (capsuleItemInput) capsuleItemInput.value = "";
      clearSearchBtn.style.display = "none";
      renderCatalog();
    });
  }

  // Quick Trending Pills
  document.querySelectorAll(".quick-search-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      const q = pill.getAttribute("data-query");
      state.searchQuery = q;

      if (capsuleItemInput) capsuleItemInput.value = q;
      if (liveSearchInput) liveSearchInput.value = q;
      if (clearSearchBtn) clearSearchBtn.style.display = "flex";

      const locInput = document.getElementById("capsuleLocationInput");
      if (locInput) locInput.value = "";
      state.activeLocation = "";
      renderCatalog();

      const market = document.getElementById("marketplace");
      if (market) market.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Wishlist Nav Button
  const navWishlistBtn = document.getElementById("navWishlistBtn");
  if (navWishlistBtn) {
    navWishlistBtn.addEventListener("click", () => openActivityDrawer("wishlist"));
  }

  // Wishlist Filter Toggle Pill
  const wishlistFilterToggle = document.getElementById("wishlistFilterToggle");
  if (wishlistFilterToggle) {
    wishlistFilterToggle.addEventListener("click", () => {
      state.showWishlistOnly = !state.showWishlistOnly;
      wishlistFilterToggle.classList.toggle("active", state.showWishlistOnly);
      renderCatalog();
    });
  }

  // Category Chips
  document.querySelectorAll(".category-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".category-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      state.activeCategory = chip.getAttribute("data-category");

      const catSelect = document.getElementById("capsuleCategorySelect");
      if (catSelect) catSelect.value = state.activeCategory;

      renderCatalog();
    });
  });

  // Condition Dropdown Filter
  const condFilter = document.getElementById("conditionFilter");
  if (condFilter) {
    condFilter.addEventListener("change", (e) => {
      state.activeCondition = e.target.value;
      const condSelect = document.getElementById("capsuleConditionSelect");
      if (condSelect) condSelect.value = state.activeCondition;
      renderCatalog();
    });
  }

  // Sort Filter
  const sortFilter = document.getElementById("sortFilter");
  if (sortFilter) {
    sortFilter.addEventListener("change", (e) => {
      state.sortMode = e.target.value;
      renderCatalog();
    });
  }

  // Reset Filters Button
  const resetBtn = document.getElementById("resetFiltersBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", window.resetAllFilters);
  }

  // ==================== AUTH LISTENERS ====================
  const loginBtn = document.getElementById("loginBtn");
  if (loginBtn) loginBtn.addEventListener("click", () => openAuthModal("signin"));

  // Guest Landing Showcase Join & Demo buttons
  document.querySelectorAll(".btn-guest-join").forEach(btn => {
    btn.addEventListener("click", () => openAuthModal("signin"));
  });

  document.querySelectorAll(".btn-guest-demo").forEach(btn => {
    btn.addEventListener("click", () => loginUser(DEFAULT_USERS[0]));
  });

  // Hero Section Inline Login Form
  const heroLoginForm = document.getElementById("heroInlineLoginForm");
  if (heroLoginForm) {
    heroLoginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = document.getElementById("heroLoginEmail").value.trim().toLowerCase();
      const passwordInput = document.getElementById("heroLoginPassword").value;

      const foundUser = state.registeredUsers.find(u => 
        (u.email.toLowerCase() === emailInput || u.phone.replace(/\s+/g, '') === emailInput.replace(/\s+/g, ''))
      );

      if (!foundUser) {
        const newUser = {
          id: "user-" + Date.now(),
          fullName: emailInput.split("@")[0].toUpperCase() || "Resident Member",
          email: emailInput.includes("@") ? emailInput : `${emailInput}@abhivera.local`,
          phone: emailInput.includes("@") ? "+91 98000 00000" : emailInput,
          city: "Bangalore",
          area: "Indiranagar",
          govIdType: "Aadhaar Card",
          govIdNumber: "XXXX-XXXX-9999",
          rolePreference: "Rent & Lend Both",
          password: passwordInput,
          verified: true,
          initials: getInitials(emailInput.split("@")[0]),
          joinedDate: "October 2026"
        };
        state.registeredUsers.push(newUser);
        saveRegisteredUsers();
        loginUser(newUser);
      } else {
        loginUser(foundUser);
      }

      setTimeout(() => {
        const memberSec = document.getElementById("memberMarketplaceSection");
        if (memberSec) memberSec.scrollIntoView({ behavior: "smooth" });
      }, 100);
    });
  }

  // Hero Card Registration Links
  document.querySelectorAll(".btn-guest-register-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      openAuthModal("signup");
    });
  });

  const memberHeroListBtn = document.getElementById("memberHeroListBtn");
  if (memberHeroListBtn) {
    memberHeroListBtn.addEventListener("click", openUploadModal);
  }

  const userProfilePill = document.getElementById("userProfilePill");
  const userDropdownMenu = document.getElementById("userDropdownMenu");
  if (userProfilePill && userDropdownMenu) {
    userProfilePill.addEventListener("click", (e) => {
      e.stopPropagation();
      userDropdownMenu.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (!userDropdownMenu.contains(e.target) && !userProfilePill.contains(e.target)) {
        userDropdownMenu.classList.remove("active");
      }
    });
  }

  const closeAuthModalBtn = document.getElementById("closeAuthModalBtn");
  if (closeAuthModalBtn) closeAuthModalBtn.addEventListener("click", closeAuthModal);

  const authModalOverlay = document.getElementById("authModal");
  if (authModalOverlay) {
    authModalOverlay.addEventListener("click", (e) => {
      if (e.target === authModalOverlay) closeAuthModal();
    });
  }

  const tabSignInBtn = document.getElementById("tabSignInBtn");
  const tabSignUpBtn = document.getElementById("tabSignUpBtn");
  if (tabSignInBtn) tabSignInBtn.addEventListener("click", () => switchAuthTab("signin"));
  if (tabSignUpBtn) tabSignUpBtn.addEventListener("click", () => switchAuthTab("signup"));

  const switchToRegisterLink = document.getElementById("switchToRegisterLink");
  const switchToSignInLink = document.getElementById("switchToSignInLink");
  if (switchToRegisterLink) switchToRegisterLink.addEventListener("click", (e) => {
    e.preventDefault();
    switchAuthTab("signup");
  });
  if (switchToSignInLink) switchToSignInLink.addEventListener("click", (e) => {
    e.preventDefault();
    switchAuthTab("signin");
  });

  const quickDemoLoginBtn = document.getElementById("quickDemoLoginBtn");
  if (quickDemoLoginBtn) {
    quickDemoLoginBtn.addEventListener("click", () => loginUser(DEFAULT_USERS[0]));
  }

  const signInForm = document.getElementById("signInForm");
  if (signInForm) signInForm.addEventListener("submit", handleSignIn);

  const signUpForm = document.getElementById("signUpForm");
  if (signUpForm) signUpForm.addEventListener("submit", handleSignUp);

  const menuLogoutBtn = document.getElementById("menuLogoutBtn");
  if (menuLogoutBtn) menuLogoutBtn.addEventListener("click", logoutUser);

  const profileLogoutBtn = document.getElementById("profileLogoutBtn");
  if (profileLogoutBtn) profileLogoutBtn.addEventListener("click", logoutUser);

  const menuOpenProfileBtn = document.getElementById("menuOpenProfileBtn");
  if (menuOpenProfileBtn) menuOpenProfileBtn.addEventListener("click", openProfileModal);

  const closeProfileModalBtn = document.getElementById("closeProfileModalBtn");
  if (closeProfileModalBtn) closeProfileModalBtn.addEventListener("click", closeProfileModal);

  const profileModalOverlay = document.getElementById("profileModal");
  if (profileModalOverlay) {
    profileModalOverlay.addEventListener("click", (e) => {
      if (e.target === profileModalOverlay) closeProfileModal();
    });
  }

  const menuMyListingsBtn = document.getElementById("menuMyListingsBtn");
  if (menuMyListingsBtn) {
    menuMyListingsBtn.addEventListener("click", () => {
      const dropdown = document.getElementById("userDropdownMenu");
      if (dropdown) dropdown.classList.remove("active");
      openActivityDrawer("listings");
    });
  }

  const menuMyBookingsBtn = document.getElementById("menuMyBookingsBtn");
  if (menuMyBookingsBtn) {
    menuMyBookingsBtn.addEventListener("click", () => {
      const dropdown = document.getElementById("userDropdownMenu");
      if (dropdown) dropdown.classList.remove("active");
      openActivityDrawer("rentals");
    });
  }

  const profileViewActivityBtn = document.getElementById("profileViewActivityBtn");
  if (profileViewActivityBtn) {
    profileViewActivityBtn.addEventListener("click", () => {
      closeProfileModal();
      openActivityDrawer("rentals");
    });
  }

  // ==================== LISTING & ITEM UPLOAD LISTENERS ====================
  const openUploadBtn = document.getElementById("openUploadModalBtn");
  const closeUploadBtn = document.getElementById("closeUploadModalBtn");
  const cancelUploadBtn = document.getElementById("cancelUploadBtn");
  const uploadOverlay = document.getElementById("uploadModal");

  if (openUploadBtn) openUploadBtn.addEventListener("click", openUploadModal);
  if (closeUploadBtn) closeUploadBtn.addEventListener("click", closeUploadModal);
  if (cancelUploadBtn) cancelUploadBtn.addEventListener("click", closeUploadModal);

  if (uploadOverlay) {
    uploadOverlay.addEventListener("click", (e) => {
      if (e.target === uploadOverlay) closeUploadModal();
    });
  }

  // Image Upload File Picker & Drag-and-drop
  const dropZone = document.getElementById("imageDropZone");
  const fileInput = document.getElementById("itemImageFileInput");
  const removeImgBtn = document.getElementById("removeImgBtn");

  if (dropZone && fileInput) {
    dropZone.addEventListener("click", (e) => {
      if (e.target.closest("#removeImgBtn")) return;
      fileInput.click();
    });

    fileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => setImagePreview(event.target.result);
        reader.readAsDataURL(file);
      }
    });

    dropZone.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropZone.style.borderColor = "var(--primary-color)";
    });

    dropZone.addEventListener("dragleave", () => {
      dropZone.style.borderColor = "#fed7aa";
    });

    dropZone.addEventListener("drop", (e) => {
      e.preventDefault();
      dropZone.style.borderColor = "#fed7aa";
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        const file = e.dataTransfer.files[0];
        const reader = new FileReader();
        reader.onload = (event) => setImagePreview(event.target.result);
        reader.readAsDataURL(file);
      }
    });
  }

  if (removeImgBtn) {
    removeImgBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      resetImagePreview();
      if (fileInput) fileInput.value = "";
    });
  }

  document.querySelectorAll(".preset-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const imgUrl = chip.getAttribute("data-img");
      setImagePreview(imgUrl);
    });
  });

  // Sell as Rent (Rent-to-Own) Checkbox Toggle in Upload Modal
  const sellCheckbox = document.getElementById("itemSellAsRentCheckbox");
  const sellGroup = document.getElementById("sellAsRentPriceGroup");
  const buyoutInput = document.getElementById("itemBuyoutPrice");
  if (sellCheckbox && sellGroup) {
    sellCheckbox.addEventListener("change", () => {
      if (sellCheckbox.checked) {
        sellGroup.style.display = "block";
        if (buyoutInput) buyoutInput.setAttribute("required", "required");
      } else {
        sellGroup.style.display = "none";
        if (buyoutInput) {
          buyoutInput.removeAttribute("required");
          buyoutInput.value = "";
        }
      }
    });
  }

  const uploadForm = document.getElementById("uploadItemForm");
  if (uploadForm) uploadForm.addEventListener("submit", handleItemUpload);

  // ==================== DETAIL & BOOKING LISTENERS ====================
  const closeDetailBtn = document.getElementById("closeDetailModalBtn");
  const detailOverlay = document.getElementById("detailModal");
  if (closeDetailBtn) {
    closeDetailBtn.addEventListener("click", () => detailOverlay.classList.remove("active"));
  }
  if (detailOverlay) {
    detailOverlay.addEventListener("click", (e) => {
      if (e.target === detailOverlay) detailOverlay.classList.remove("active");
    });
  }

  const startInput = document.getElementById("rentStartDate");
  const endInput = document.getElementById("rentEndDate");
  if (startInput) startInput.addEventListener("change", calculateBookingEstimate);
  if (endInput) endInput.addEventListener("change", calculateBookingEstimate);

  const confirmBtn = document.getElementById("confirmRentalRequestBtn");
  if (confirmBtn) confirmBtn.addEventListener("click", confirmRentalBooking);

  // Buyout / Outright Purchase Button
  const buyoutBtn = document.getElementById("buyoutItemBtn");
  if (buyoutBtn) buyoutBtn.addEventListener("click", confirmBuyoutRequest);

  // Activity Drawer Controls
  const openActivityBtn = document.getElementById("openActivityDrawerBtn");
  const closeActivityBtn = document.getElementById("closeActivityDrawerBtn");
  const drawerOverlay = document.getElementById("activityDrawerOverlay");
  const tabRentalsBtn = document.getElementById("tabRentalsBtn");
  const tabListingsBtn = document.getElementById("tabListingsBtn");
  const tabWishlistBtn = document.getElementById("tabWishlistBtn");

  if (openActivityBtn) {
    openActivityBtn.addEventListener("click", () => openActivityDrawer("rentals"));
  }
  if (closeActivityBtn) closeActivityBtn.addEventListener("click", closeActivityDrawer);

  if (drawerOverlay) {
    drawerOverlay.addEventListener("click", (e) => {
      if (e.target === drawerOverlay) closeActivityDrawer();
    });
  }
  if (tabRentalsBtn) {
    tabRentalsBtn.addEventListener("click", () => {
      state.activeDrawerTab = "rentals";
      renderActivityDrawer();
    });
  }
  if (tabListingsBtn) {
    tabListingsBtn.addEventListener("click", () => {
      state.activeDrawerTab = "listings";
      renderActivityDrawer();
    });
  }
  if (tabWishlistBtn) {
    tabWishlistBtn.addEventListener("click", () => {
      state.activeDrawerTab = "wishlist";
      renderActivityDrawer();
    });
  }

  // Escape key closes modals
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeUploadModal();
      if (detailOverlay) detailOverlay.classList.remove("active");
      closeActivityDrawer();
      closeAuthModal();
      closeProfileModal();
    }
  });

  // Sync state when checkout finishes in another tab
  window.addEventListener("storage", (e) => {
    if (e.key === STORAGE_KEYS.USER_BOOKINGS) {
      const savedBookings = localStorage.getItem(STORAGE_KEYS.USER_BOOKINGS);
      if (savedBookings) {
        try {
          state.userBookings = JSON.parse(savedBookings);
          updateActivityBadge();
          if (state.activeDrawerTab === "rentals") {
            renderActivityDrawer();
          }
        } catch (err) {}
      }
    }
  });

  window.addEventListener("focus", () => {
    const savedBookings = localStorage.getItem(STORAGE_KEYS.USER_BOOKINGS);
    if (savedBookings) {
      try {
        state.userBookings = JSON.parse(savedBookings);
        updateActivityBadge();
        if (state.activeDrawerTab === "rentals") {
          renderActivityDrawer();
        }
      } catch (err) {}
    }
  });
}

// App Boot
document.addEventListener("DOMContentLoaded", () => {
  loadState();
  initEventListeners();
  renderCatalog();
});
