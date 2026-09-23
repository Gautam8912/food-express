// Food Express - Vanilla JS + localStorage
// Demo authentication only. Never store real passwords in localStorage in production.

const foods = [
  { id: 1, name: "Chicken Biryani", category: "Biryani", price: 249, rating: 4.5, desc: "Aromatic basmati rice with tender chicken & spices", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&auto=format&fit=crop&q=80" },
  { id: 2, name: "Veg Biryani", category: "Biryani", price: 199, rating: 4.3, desc: "Fragrant rice loaded with veggies and cashews", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80" },
  { id: 3, name: "Cheese Burst Pizza", category: "Pizza", price: 299, rating: 4.7, desc: "Extra cheese, mozzarella & cheesy crust delight", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80" },
  { id: 4, name: "Veg Burger", category: "Burger", price: 99, rating: 4.2, desc: "Crispy veg patty with fresh lettuce & mayo", image: "https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=600&auto=format&fit=crop&q=80" },
  { id: 5, name: "Chicken Burger", category: "Burger", price: 149, rating: 4.5, desc: "Juicy grilled chicken patty with cheese", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=80" },
  { id: 6, name: "Masala Dosa", category: "South Indian", price: 120, rating: 4.4, desc: "Crispy dosa stuffed with spiced potato masala", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80" },
  { id: 7, name: "Paneer Tikka", category: "Snacks", price: 220, rating: 4.6, desc: "Grilled paneer cubes marinated in spices", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=80" },
  { id: 8, name: "Veg Chowmein", category: "Chinese", price: 140, rating: 4.1, desc: "Stir-fried noodles with veggies & sauces", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop&q=80" },
  { id: 9, name: "Fried Rice", category: "Chinese", price: 160, rating: 4.3, desc: "Wok-tossed rice with veggies & manchurian", image: "https://images.unsplash.com/photo-1603133872875-ca2a98a0c7a3?w=600&auto=format&fit=crop&q=80" },
  { id: 10, name: "Steamed Momos", category: "Snacks", price: 110, rating: 4.5, desc: "Soft momos with spicy red chutney", image: "https://images.unsplash.com/photo-1534422298391-e4f640380802?w=600&auto=format&fit=crop&q=80" },
  { id: 11, name: "French Fries", category: "Snacks", price: 89, rating: 4.2, desc: "Golden crispy fries with ketchup", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&auto=format&fit=crop&q=80" },
  { id: 12, name: "Gulab Jamun", category: "Desserts", price: 80, rating: 4.8, desc: "Soft milk balls soaked in sugar syrup (2 pcs)", image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=600&auto=format&fit=crop&q=80" },
  { id: 13, name: "Chocolate Ice Cream", category: "Desserts", price: 120, rating: 4.6, desc: "Rich chocolate ice cream with choco chips", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80" },
  { id: 14, name: "Cold Coffee", category: "Beverages", price: 99, rating: 4.4, desc: "Chilled creamy cold coffee with ice cream", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop&q=80" },
  { id: 15, name: "Coke", category: "Beverages", price: 40, rating: 4.0, desc: "Chilled Coca-Cola 300ml", image: "https://images.unsplash.com/photo-1624552184280-9e9631bbeee9?w=600&auto=format&fit=crop&q=80" },
  { id: 16, name: "Veg Sandwich", category: "Snacks", price: 90, rating: 4.1, desc: "Grilled sandwich with veggies & cheese", image: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?w=600&auto=format&fit=crop&q=80" },
  // --- 50 MORE ITEMS ---
  { id: 17, name: "Margherita Pizza", category: "Pizza", price: 199, rating: 4.5, desc: "Classic pizza with tomato, mozzarella & basil", image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=600&auto=format&fit=crop&q=80" },
  { id: 18, name: "Pepperoni Pizza", category: "Pizza", price: 349, rating: 4.6, desc: "Spicy pepperoni with extra cheese loaded", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&auto=format&fit=crop&q=80" },
  { id: 19, name: "Veggie Delight Pizza", category: "Pizza", price: 279, rating: 4.4, desc: "Capsicum, onion, tomato, corn & cheese", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=80" },
  { id: 20, name: "Chicken Tikka Pizza", category: "Pizza", price: 329, rating: 4.7, desc: "Tandoori chicken tikka with spicy sauce", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=80" },
  { id: 21, name: "Paneer Makhani Pizza", category: "Pizza", price: 289, rating: 4.3, desc: "Creamy makhani sauce with paneer cubes", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&auto=format&fit=crop&q=80" },
  { id: 22, name: "Aloo Tikki Burger", category: "Burger", price: 79, rating: 4.1, desc: "Crispy aloo tikki with mint mayo", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&auto=format&fit=crop&q=80" },
  { id: 23, name: "Double Cheese Burger", category: "Burger", price: 179, rating: 4.6, desc: "Double patty, double cheese, double fun", image: "https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?w=600&auto=format&fit=crop&q=80" },
  { id: 24, name: "Mushroom Swiss Burger", category: "Burger", price: 159, rating: 4.2, desc: "Sautéed mushrooms with Swiss cheese", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=80" },
  { id: 25, name: "BBQ Chicken Burger", category: "Burger", price: 199, rating: 4.5, desc: "Smoky BBQ chicken with caramelized onions", image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&auto=format&fit=crop&q=80" },
  { id: 26, name: "Paneer Burger", category: "Burger", price: 129, rating: 4.3, desc: "Grilled paneer patty with spicy chutney", image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=600&auto=format&fit=crop&q=80" },
  { id: 27, name: "Hyderabadi Biryani", category: "Biryani", price: 299, rating: 4.8, desc: "Authentic Hyderabadi dum biryani with raita", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&auto=format&fit=crop&q=80" },
  { id: 28, name: "Egg Biryani", category: "Biryani", price: 169, rating: 4.2, desc: "Boiled eggs tossed in spicy biryani rice", image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&auto=format&fit=crop&q=80" },
  { id: 29, name: "Mutton Biryani", category: "Biryani", price: 349, rating: 4.7, desc: "Tender mutton pieces with long grain rice", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80" },
  { id: 30, name: "Prawn Biryani", category: "Biryani", price: 329, rating: 4.5, desc: "Juicy prawns marinated in coastal spices", image: "https://images.unsplash.com/photo-1595755433128-7b3b3a0a5a1d?w=600&auto=format&fit=crop&q=80" },
  { id: 31, name: "Paneer Biryani", category: "Biryani", price: 229, rating: 4.4, desc: "Cottage cheese cubes in fragrant biryani", image: "https://images.unsplash.com/photo-1631515242808-497c3f32fd38?w=600&auto=format&fit=crop&q=80" },
  { id: 32, name: "Hakka Noodles", category: "Chinese", price: 150, rating: 4.2, desc: "Classic street-style Hakka noodles", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop&q=80" },
  { id: 33, name: "Manchurian Dry", category: "Chinese", price: 180, rating: 4.3, desc: "Veg Manchurian balls in tangy sauce", image: "https://images.unsplash.com/photo-1603133872875-ca2a98a0c7a3?w=600&auto=format&fit=crop&q=80" },
  { id: 34, name: "Spring Rolls", category: "Chinese", price: 120, rating: 4.1, desc: "Crispy rolls stuffed with veggies", image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=600&auto=format&fit=crop&q=80" },
  { id: 35, name: "Chilli Paneer", category: "Chinese", price: 200, rating: 4.5, desc: "Indo-Chinese chilli paneer gravy", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=80" },
  { id: 36, name: "Schezwan Fried Rice", category: "Chinese", price: 170, rating: 4.3, desc: "Spicy Schezwan sauce fried rice", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&auto=format&fit=crop&q=80" },
  { id: 37, name: "Idli Sambhar", category: "South Indian", price: 80, rating: 4.6, desc: "Soft idlis (4 pcs) with hot sambhar & chutney", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80" },
  { id: 38, name: "Medu Vada", category: "South Indian", price: 90, rating: 4.4, desc: "Crispy lentil donuts with coconut chutney", image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=600&auto=format&fit=crop&q=80" },
  { id: 39, name: "Upma", category: "South Indian", price: 70, rating: 4.0, desc: "Savory semolina with veggies & peanuts", image: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=600&auto=format&fit=crop&q=80" },
  { id: 40, name: "Uttapam", category: "South Indian", price: 110, rating: 4.2, desc: "Thick dosa with onion tomato topping", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&auto=format&fit=crop&q=80" },
  { id: 41, name: "Pongal", category: "South Indian", price: 100, rating: 4.3, desc: "Ven Pongal with ghee & pepper", image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=600&auto=format&fit=crop&q=80" },
  { id: 42, name: "Rasam Rice", category: "South Indian", price: 90, rating: 4.1, desc: "Tangy rasam with steamed rice & papad", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&auto=format&fit=crop&q=80" },
  { id: 43, name: "Samosa", category: "Snacks", price: 30, rating: 4.5, desc: "Crispy potato samosa with chutney (2 pcs)", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80" },
  { id: 44, name: "Kachori", category: "Snacks", price: 35, rating: 4.2, desc: "Flaky kachori stuffed with spicy dal", image: "https://images.unsplash.com/photo-1626132647422-66a97d3d60e4?w=600&auto=format&fit=crop&q=80" },
  { id: 45, name: "Pav Bhaji", category: "Snacks", price: 130, rating: 4.6, desc: "Mumbai style bhaji with butter pav", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&auto=format&fit=crop&q=80" },
  { id: 46, name: "Vada Pav", category: "Snacks", price: 40, rating: 4.3, desc: "Mumbai's famous vada pav with chutney", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&auto=format&fit=crop&q=80" },
  { id: 47, name: "Bhel Puri", category: "Snacks", price: 60, rating: 4.1, desc: "Tangy bhel mix with sev & chutneys", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=80" },
  { id: 48, name: "Pani Puri", category: "Snacks", price: 50, rating: 4.7, desc: "6 pcs crispy puris with spicy pani", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&auto=format&fit=crop&q=80" },
  { id: 49, name: "Chole Bhature", category: "Snacks", price: 140, rating: 4.5, desc: "Spicy chole with fluffy bhaturas", image: "https://images.unsplash.com/photo-1626132647422-66a97d3d60e4?w=600&auto=format&fit=crop&q=80" },
  { id: 50, name: "Aloo Paratha", category: "Snacks", price: 80, rating: 4.4, desc: "Stuffed paratha with curd & pickle", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&auto=format&fit=crop&q=80" },
  { id: 51, name: "Rasgulla", category: "Desserts", price: 70, rating: 4.6, desc: "Soft Bengali rasgulla in sugar syrup", image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=600&auto=format&fit=crop&q=80" },
  { id: 52, name: "Jalebi", category: "Desserts", price: 60, rating: 4.5, desc: "Crispy orange jalebi with rabri", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80" },
  { id: 53, name: "Kulfi", category: "Desserts", price: 80, rating: 4.4, desc: "Malai kulfi with pistachio", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80" },
  { id: 54, name: "Brownie", category: "Desserts", price: 110, rating: 4.7, desc: "Chocolate brownie with walnuts", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80" },
  { id: 55, name: "Donut", category: "Desserts", price: 90, rating: 4.3, desc: "Glazed donut with sprinkles", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&auto=format&fit=crop&q=80" },
  { id: 56, name: "Cheesecake", category: "Desserts", price: 150, rating: 4.8, desc: "Creamy New York style cheesecake", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80" },
  { id: 57, name: "Pastry", category: "Desserts", price: 100, rating: 4.2, desc: "Chocolate truffle pastry", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&auto=format&fit=crop&q=80" },
  { id: 58, name: "Falooda", category: "Desserts", price: 120, rating: 4.5, desc: "Royal falooda with ice cream & basil seeds", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80" },
  { id: 59, name: "Sweet Lassi", category: "Beverages", price: 60, rating: 4.4, desc: "Creamy sweet lassi with malai", image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600&auto=format&fit=crop&q=80" },
  { id: 60, name: "Masala Chai", category: "Beverages", price: 30, rating: 4.6, desc: "Kadak masala chai with biscuits", image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&auto=format&fit=crop&q=80" },
  { id: 61, name: "Green Tea", category: "Beverages", price: 50, rating: 4.0, desc: "Healthy green tea with honey", image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&auto=format&fit=crop&q=80" },
  { id: 62, name: "Mojito", category: "Beverages", price: 110, rating: 4.3, desc: "Refreshing mint lime mojito", image: "https://images.unsplash.com/photo-1624552184280-9e9631bbeee9?w=600&auto=format&fit=crop&q=80" },
  { id: 63, name: "Chocolate Milkshake", category: "Beverages", price: 130, rating: 4.5, desc: "Thick chocolate shake with whipped cream", image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=600&auto=format&fit=crop&q=80" },
  { id: 64, name: "Orange Juice", category: "Beverages", price: 80, rating: 4.2, desc: "Fresh orange juice 300ml", image: "https://images.unsplash.com/photo-1613478881367-1bff0c91b0e2?w=600&auto=format&fit=crop&q=80" },
  { id: 65, name: "Iced Tea", category: "Beverages", price: 70, rating: 4.1, desc: "Lemon iced tea chilled", image: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=600&auto=format&fit=crop&q=80" },
  { id: 66, name: "Espresso", category: "Beverages", price: 90, rating: 4.3, desc: "Strong espresso shot", image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600&auto=format&fit=crop&q=80" }
];

const categories = [
  { id: "All", label: "All", icon: "🍽️" },
  { id: "Pizza", label: "Pizza", icon: "🍕" },
  { id: "Burger", label: "Burger", icon: "🍔" },
  { id: "Biryani", label: "Biryani", icon: "🍚" },
  { id: "Chinese", label: "Chinese", icon: "🍜" },
  { id: "South Indian", label: "South Indian", icon: "🥘" },
  { id: "Desserts", label: "Desserts", icon: "🍰" },
  { id: "Beverages", label: "Beverages", icon: "🥤" },
  { id: "Snacks", label: "Snacks", icon: "🍟" }
];

let currentCategory = "All";
let currentSearch = "";

// ---------- LocalStorage Helpers ----------
function getUsers() { return JSON.parse(localStorage.getItem("users") || "[]"); }
function saveUsers(users) { localStorage.setItem("users", JSON.stringify(users)); }
function getCurrentUser() { return JSON.parse(localStorage.getItem("currentUser") || "null"); }
function saveCurrentUser(user) { localStorage.setItem("currentUser", JSON.stringify(user)); }
function getCart() { return JSON.parse(localStorage.getItem("cart") || "[]"); }
function saveCart(cart) { localStorage.setItem("cart", JSON.stringify(cart)); updateCartCount(); }
function getOrders() { return JSON.parse(localStorage.getItem("orders") || "[]"); }
function saveOrders(orders) { localStorage.setItem("orders", JSON.stringify(orders)); }

// ---------- Toast ----------
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  const icon = type === "success" ? "✓" : type === "error" ? "✕" : "ℹ️";
  toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = "toastOut .3s ease forwards";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ---------- Header & Auth UI ----------
function updateHeader() {
  const currentUser = getCurrentUser();
  const nav = document.getElementById("mainNav");
  const cartCount = document.getElementById("cartCount");
  const loginBtn = document.getElementById("loginBtn");
  const registerBtn = document.getElementById("registerBtn");
  const profileLink = document.getElementById("profileLink");
  const ordersLink = document.getElementById("ordersLink");
  const logoutBtn = document.getElementById("logoutBtn");

  if (currentUser) {
    if (loginBtn) loginBtn.style.display = "none";
    if (registerBtn) registerBtn.style.display = "none";
    if (profileLink) profileLink.style.display = "inline";
    if (ordersLink) ordersLink.style.display = "inline";
    if (logoutBtn) logoutBtn.style.display = "inline-flex";
  } else {
    if (loginBtn) loginBtn.style.display = "inline-flex";
    if (registerBtn) registerBtn.style.display = "inline-flex";
    if (profileLink) profileLink.style.display = "none";
    if (ordersLink) ordersLink.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "none";
  }
  updateCartCount();
}

function updateCartCount() {
  const cart = getCart();
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const el = document.getElementById("cartCount");
  if (el) {
    el.textContent = totalQty;
    el.style.display = totalQty > 0 ? "grid" : "none";
  }
}

function logoutUser() {
  localStorage.removeItem("currentUser");
  showToast("Logged out successfully", "success");
  setTimeout(() => { window.location.href = "index.html"; }, 800);
}

// ---------- Food Rendering ----------
function renderCategories() {
  const container = document.getElementById("categories");
  if (!container) return;
  container.innerHTML = categories.map(cat => `
    <button class="cat-btn ${currentCategory === cat.id ? 'active' : ''}" data-cat="${cat.id}">
      <span>${cat.icon}</span> ${cat.label}
    </button>
  `).join("");

  container.querySelectorAll(".cat-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      currentCategory = btn.dataset.cat;
      renderCategories();
      renderFoods();
    });
  });
}

function renderFoods() {
  const container = document.getElementById("foodContainer");
  if (!container) return;

  let filtered = [...foods];

  if (currentCategory !== "All") {
    filtered = filtered.filter(f => f.category === currentCategory);
  }
  if (currentSearch.trim()) {
    const q = currentSearch.toLowerCase();
    filtered = filtered.filter(f =>
      f.name.toLowerCase().includes(q) ||
      f.category.toLowerCase().includes(q) ||
      f.desc.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="no-result">
        <h3>😕 No food items found</h3>
        <p>Try searching for Pizza, Burger, Biryani, Momos etc.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(food => `
    <div class="food-card">
      <div class="food-img">
        <img src="${food.image}" alt="${food.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600'">
        <span class="food-badge">${food.category}</span>
        <span class="food-rating">⭐ ${food.rating}</span>
      </div>
      <div class="food-info">
        <h3>${food.name}</h3>
        <p class="food-desc">${food.desc}</p>
        <div class="food-foot">
          <div class="price">₹${food.price}</div>
          <button class="add-btn" onclick="addToCart(${food.id})">Add to Cart</button>
        </div>
      </div>
    </div>
  `).join("");
}

// ---------- Cart System ----------
function addToCart(foodId) {
  const food = foods.find(f => f.id === foodId);
  if (!food) return;
  let cart = getCart();
  const existing = cart.find(item => item.id === foodId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: food.id, name: food.name, price: food.price, image: food.image, qty: 1 });
  }
  saveCart(cart);
  showToast(`${food.name} added to cart`, "success");
  if (document.getElementById("cartContainer")) renderCart();
}

function removeFromCart(foodId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== foodId);
  saveCart(cart);
  showToast("Item removed from cart", "info");
  renderCart();
}

function updateQuantity(foodId, change) {
  let cart = getCart();
  const item = cart.find(i => i.id === foodId);
  if (!item) return;
  item.qty += change;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== foodId);
    showToast("Item removed", "info");
  }
  saveCart(cart);
  renderCart();
}

function clearCart() {
  saveCart([]);
  renderCart();
  showToast("Cart cleared", "info");
}

function renderCart() {
  const container = document.getElementById("cartContainer");
  const subtotalEl = document.getElementById("subtotal");
  const totalEl = document.getElementById("total");
  const checkoutSection = document.getElementById("checkoutSection");
  if (!container) return;

  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <div class="icon">🛒</div>
        <h3>Your cart is empty</h3>
        <p style="color:var(--gray); margin-bottom:16px;">Add some delicious food to get started</p>
        <a href="index.html" class="btn btn-primary">Browse Menu</a>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = "₹0";
    if (totalEl) totalEl.textContent = "₹0";
    if (checkoutSection) checkoutSection.style.display = "none";
    return;
  }

  if (checkoutSection) checkoutSection.style.display = "block";

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600'">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>₹${item.price} × ${item.qty} = ₹${item.price * item.qty}</p>
        <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
      </div>
      <div class="qty-controls">
        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
        <span class="qty">${item.qty}</span>
        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
      </div>
    </div>
  `).join("");

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const deliveryFee = subtotal > 0 ? 40 : 0;
  const total = subtotal + deliveryFee;

  if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
  const deliveryEl = document.getElementById("deliveryFee");
  if (deliveryEl) deliveryEl.textContent = `₹${deliveryFee}`;
  if (totalEl) totalEl.textContent = `₹${total}`;
}

// ---------- Checkout & Orders ----------
function placeOrder() {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    showToast("Please login first to place order", "error");
    setTimeout(() => window.location.href = "login.html", 1000);
    return;
  }

  const cart = getCart();
  if (cart.length === 0) {
    showToast("Your cart is empty", "error");
    return;
  }

  const addressInput = document.getElementById("deliveryAddress");
  const phoneInput = document.getElementById("deliveryPhone");
  const paymentMethod = document.querySelector('input[name="payment"]:checked');

  if (!addressInput || !addressInput.value.trim()) {
    showToast("Please enter delivery address", "error");
    return;
  }
  if (!phoneInput || !phoneInput.value.trim()) {
    showToast("Please enter phone number", "error");
    return;
  }
  if (!paymentMethod) {
    showToast("Please select payment method", "error");
    return;
  }

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const total = subtotal + 40;
  const orderId = "FE" + Math.floor(10000 + Math.random() * 90000);

  const order = {
    id: orderId,
    userEmail: currentUser.email,
    items: [...cart],
    subtotal,
    deliveryFee: 40,
    total,
    address: addressInput.value.trim(),
    phone: phoneInput.value.trim(),
    payment: paymentMethod.value,
    status: "Confirmed",
    date: new Date().toLocaleString(),
    estimatedDelivery: "30-45 minutes"
  };

  const orders = getOrders();
  orders.unshift(order);
  saveOrders(orders);
  saveCart([]);

  // Show success modal
  const modal = document.getElementById("orderSuccessModal");
  if (modal) {
    document.getElementById("successOrderId").textContent = orderId;
    document.getElementById("successOrderTotal").textContent = `₹${total}`;
    modal.classList.add("active");
  } else {
    showToast("Order placed successfully! 🎉", "success");
    setTimeout(() => window.location.href = "orders.html", 1200);
  }
}

function renderOrders() {
  const container = document.getElementById("ordersContainer");
  if (!container) return;

  const currentUser = getCurrentUser();
  if (!currentUser) {
    container.innerHTML = `
      <div class="empty-cart">
        <div class="icon">🔒</div>
        <h3>Please login first</h3>
        <p style="color:var(--gray); margin-bottom:16px;">Login to view your orders</p>
        <a href="login.html" class="btn btn-primary">Login Now</a>
      </div>
    `;
    return;
  }

  const allOrders = getOrders();
  const myOrders = allOrders.filter(o => o.userEmail === currentUser.email);

  if (myOrders.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <div class="icon">📦</div>
        <h3>No orders yet</h3>
        <p style="color:var(--gray); margin-bottom:16px;">Your delicious orders will appear here</p>
        <a href="index.html" class="btn btn-primary">Order Now</a>
      </div>
    `;
    return;
  }

  container.innerHTML = myOrders.map(order => `
    <div class="order-card">
      <h4>
        <span>Order <span class="order-id">#${order.id}</span></span>
        <span class="order-status status-confirmed">${order.status}</span>
      </h4>
      <div style="font-size:0.85rem; color:var(--gray); margin-bottom:10px;">${order.date} • ${order.payment} • ${order.estimatedDelivery}</div>
      <div class="order-items">
        ${order.items.map(i => `<div class="order-item"><span>${i.name} × ${i.qty}</span><span>₹${i.price * i.qty}</span></div>`).join("")}
      </div>
      <div style="font-size:0.85rem; color:var(--gray); margin-top:10px;">📍 ${order.address} • 📞 ${order.phone}</div>
      <div class="order-total">Total: ₹${order.total}</div>
    </div>
  `).join("");
}

// ---------- Auth ----------
function registerUser(e) {
  e.preventDefault();
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim().toLowerCase();
  const phone = document.getElementById("regPhone").value.trim();
  const password = document.getElementById("regPassword").value;
  const confirmPassword = document.getElementById("regConfirmPassword").value;
  const errorEl = document.getElementById("regError");
  const successEl = document.getElementById("regSuccess");

  if (errorEl) errorEl.style.display = "none";
  if (successEl) successEl.style.display = "none";

  if (!name || !email || !phone || !password || !confirmPassword) {
    showError(errorEl, "All fields are required");
    return;
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    showError(errorEl, "Please enter a valid email");
    return;
  }
  if (password.length < 6) {
    showError(errorEl, "Password must be at least 6 characters");
    return;
  }
  if (password !== confirmPassword) {
    showError(errorEl, "Passwords do not match");
    return;
  }

  const users = getUsers();
  if (users.find(u => u.email === email)) {
    showError(errorEl, "Email already registered. Please login.");
    return;
  }

  users.push({ name, email, phone, password });
  saveUsers(users);

  if (successEl) {
    successEl.textContent = "Account created successfully! Redirecting to login...";
    successEl.style.display = "block";
  }
  showToast("Account created successfully!", "success");
  setTimeout(() => window.location.href = "login.html", 1200);
}

function loginUser(e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value.trim().toLowerCase();
  const password = document.getElementById("loginPassword").value;
  const errorEl = document.getElementById("loginError");

  if (errorEl) errorEl.style.display = "none";

  if (!email || !password) {
    showError(errorEl, "Email and password are required");
    return;
  }

  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    showError(errorEl, "Invalid email or password");
    showToast("Invalid email or password", "error");
    return;
  }

  saveCurrentUser({ name: user.name, email: user.email, phone: user.phone });
  showToast(`Welcome back, ${user.name}! 👋`, "success");
  setTimeout(() => window.location.href = "index.html", 800);
}

function handleForgotPassword(e) {
  e.preventDefault();
  const emailInput = document.getElementById("forgotEmail");
  const errorEl = document.getElementById("forgotError");
  const successEl = document.getElementById("forgotSuccess");
  const resetDiv = document.getElementById("resetFormDiv");
  const email = emailInput.value.trim().toLowerCase();

  if (errorEl) errorEl.style.display = "none";
  if (successEl) successEl.style.display = "none";

  const users = getUsers();
  const user = users.find(u => u.email === email);

  if (!user) {
    showError(errorEl, "Email not found. Please check your email.");
    return;
  }

  // Show reset form
  if (resetDiv) resetDiv.style.display = "block";
  if (successEl) {
    successEl.textContent = `Email verified! Set new password for ${email}`;
    successEl.style.display = "block";
  }
  showToast("Email verified. Set new password.", "success");
  emailInput.dataset.verifiedEmail = email;
}

function handleResetPassword(e) {
  e.preventDefault();
  const newPass = document.getElementById("newPassword").value;
  const confirmPass = document.getElementById("confirmNewPassword").value;
  const errorEl = document.getElementById("resetError");
  const successEl = document.getElementById("resetSuccess");
  const email = document.getElementById("forgotEmail").dataset.verifiedEmail;

  if (errorEl) errorEl.style.display = "none";
  if (successEl) successEl.style.display = "none";

  if (!newPass || !confirmPass) {
    showError(errorEl, "Both fields required");
    return;
  }
  if (newPass.length < 6) {
    showError(errorEl, "Password must be at least 6 characters");
    return;
  }
  if (newPass !== confirmPass) {
    showError(errorEl, "Passwords do not match");
    return;
  }

  const users = getUsers();
  const idx = users.findIndex(u => u.email === email);
  if (idx !== -1) {
    users[idx].password = newPass;
    saveUsers(users);
    if (successEl) {
      successEl.textContent = "Password updated successfully! Redirecting to login...";
      successEl.style.display = "block";
    }
    showToast("Password updated successfully!", "success");
    setTimeout(() => window.location.href = "login.html", 1200);
  }
}

function showError(el, msg) {
  if (!el) { showToast(msg, "error"); return; }
  el.textContent = msg;
  el.style.display = "block";
}

// ---------- Profile ----------
function renderProfile() {
  const container = document.getElementById("profileContent");
  if (!container) return;

  const user = getCurrentUser();
  if (!user) {
    container.innerHTML = `
      <div class="empty-cart">
        <div class="icon">🔒</div>
        <h3>Please login first</h3>
        <p style="color:var(--gray); margin-bottom:16px;">Login to view your profile</p>
        <a href="login.html" class="btn btn-primary">Login Now</a>
      </div>
    `;
    return;
  }

  const initial = user.name.charAt(0).toUpperCase();
  container.innerHTML = `
    <div class="profile-card">
      <div class="profile-header">
        <div class="avatar">${initial}</div>
        <div>
          <h3 style="font-size:1.3rem;">${user.name}</h3>
          <p style="color:var(--gray); font-size:0.9rem;">Food Express Member</p>
        </div>
      </div>
      <div class="profile-details">
        <div class="detail-row"><span>Full Name</span><span>${user.name}</span></div>
        <div class="detail-row"><span>Email Address</span><span>${user.email}</span></div>
        <div class="detail-row"><span>Phone Number</span><span>${user.phone}</span></div>
        <div class="detail-row"><span>Account Status</span><span style="color:#16a34a;">● Active</span></div>
      </div>
      <div style="margin-top:20px; display:flex; gap:10px;">
        <a href="orders.html" class="btn btn-outline btn-full">My Orders</a>
        <button class="btn btn-primary btn-full" onclick="logoutUser()">Logout</button>
      </div>
      <p style="margin-top:16px; font-size:0.8rem; color:var(--gray); text-align:center;">Demo auth using localStorage. Not secure for production.</p>
    </div>
  `;
}

// ---------- Init ----------
document.addEventListener("DOMContentLoaded", () => {
  updateHeader();

  // Categories & foods (home)
  renderCategories();
  renderFoods();

  // Search
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      renderFoods();
    });
  }

  // Cart
  if (document.getElementById("cartContainer")) renderCart();

  // Orders
  if (document.getElementById("ordersContainer")) renderOrders();

  // Profile
  if (document.getElementById("profileContent")) renderProfile();

  // Auth forms
  const regForm = document.getElementById("registerForm");
  if (regForm) regForm.addEventListener("submit", registerUser);

  const loginForm = document.getElementById("loginForm");
  if (loginForm) loginForm.addEventListener("submit", loginUser);

  const forgotForm = document.getElementById("forgotForm");
  if (forgotForm) forgotForm.addEventListener("submit", handleForgotPassword);

  const resetForm = document.getElementById("resetPasswordForm");
  if (resetForm) resetForm.addEventListener("submit", handleResetPassword);

  // Checkout payment selection UI
  document.querySelectorAll(".payment-option").forEach(opt => {
    opt.addEventListener("click", () => {
      document.querySelectorAll(".payment-option").forEach(o => o.classList.remove("active"));
      opt.classList.add("active");
      const radio = opt.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });

  // Mobile menu
  const hamburger = document.getElementById("hamburger");
  const mainNav = document.getElementById("mainNav");
  if (hamburger && mainNav) {
    hamburger.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
  }

  // Hero buttons scroll to menu
  const orderNowBtn = document.getElementById("orderNowBtn");
  const exploreBtn = document.getElementById("exploreMenuBtn");
  const menuSection = document.getElementById("menuSection");
  function scrollToMenu() {
    if (menuSection) menuSection.scrollIntoView({ behavior: "smooth" });
  }
  if (orderNowBtn) orderNowBtn.addEventListener("click", scrollToMenu);
  if (exploreBtn) exploreBtn.addEventListener("click", scrollToMenu);

  // Close modal
  const modal = document.getElementById("orderSuccessModal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
        window.location.href = "orders.html";
      }
    });
  }
});

// Close mobile nav when clicking link
document.addEventListener("click", (e) => {
  const nav = document.getElementById("mainNav");
  if (!nav) return;
  if (e.target.closest(".nav a") && nav.classList.contains("open")) {
    nav.classList.remove("open");
  }
});
