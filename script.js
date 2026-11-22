/* ============================================================
   COVORO Atelier — Store Configuration & Product Catalog
   ============================================================ */

const STORE_CONFIG = {
  brandName: "COVORO",
  brandSub: "ATELIER",
  currencySymbol: "PKR ", // Change to "$", "AED ", "£", "€" as needed
  currencyCode: "en-PK",
  whatsappNumber: "923376029553", // WhatsApp checkout phone number
  announcementText: "COMPLIMENTARY INSURED DELIVERY ACROSS PAKISTAN | DISPATCH WITHIN 48 HOURS",
  deliveryNote: "Complimentary insured white-glove delivery."
};

/* 
  AUTHENTIC COVORO PRODUCT CATALOG
  Imported directly from studio collection folders:
  - Series 1: The Nysa Tote
  - Series 2: The Velora Hobo
  - Series 3: The Vienna Crossbody
  - Series 4: The Zyra Crescent
*/
const PRODUCTS = [
  // ==========================================
  // SERIES 1: THE NYSA TOTE (Structured Shoulder Tote)
  // ==========================================
  {
    id: "cov-nysa-black",
    series: 1,
    model: "NYSA",
    category: "totes",
    colorName: "Black",
    swatchColor: "#111111",
    title: "The Nysa Shoulder Tote — Black",
    price: 5000,
    soldOut: false,
    frontImg: "images/products/nysa-black-front.jpeg",
    sideImg: "images/products/nysa-black-angle.jpeg",
    profileImg: "images/products/nysa-black-side.jpeg",
    backImg: "images/products/nysa-black-back.jpeg",
    desc: "Architectural double-strap shoulder tote in full-grain black calfskin with polished silver buckle detailing and embossed COVORO insignia."
  },
  {
    id: "cov-nysa-choc",
    series: 1,
    model: "NYSA",
    category: "totes",
    colorName: "Chocolate Brown",
    swatchColor: "#3B2318",
    title: "The Nysa Shoulder Tote — Chocolate Brown",
    price: 5000,
    soldOut: false,
    frontImg: "images/products/nysa-choc-front.jpeg",
    sideImg: "images/products/nysa-choc-angle.jpeg",
    profileImg: "images/products/nysa-choc-side.jpeg",
    backImg: "images/products/nysa-choc-back.jpeg",
    desc: "Rich espresso chocolate leather silhouette crafted with elongated shoulder handles, signature buckle fasteners, and clean edge finish."
  },
  {
    id: "cov-nysa-cognac",
    series: 1,
    model: "NYSA",
    category: "totes",
    colorName: "Cognac",
    swatchColor: "#8F4B28",
    title: "The Nysa Shoulder Tote — Cognac",
    price: 5000,
    soldOut: false,
    frontImg: "images/products/nysa-cognac-front.jpeg",
    sideImg: "images/products/nysa-cognac-angle.jpeg",
    profileImg: "images/products/nysa-cognac-side.jpeg",
    backImg: "images/products/nysa-cognac-back.jpeg",
    desc: "Warm cognac saddle leather with subtle luster, reinforced base, and tailored underarm drop for day-to-evening carry."
  },
  {
    id: "cov-nysa-navy",
    series: 1,
    model: "NYSA",
    category: "totes",
    colorName: "Navy Blue",
    swatchColor: "#24334A",
    title: "The Nysa Shoulder Tote — Navy Blue",
    price: 5000,
    soldOut: false,
    frontImg: "images/products/nysa-navy-front.jpeg",
    sideImg: "images/products/nysa-navy-angle.jpeg",
    profileImg: "images/products/nysa-navy-side.jpeg",
    backImg: "images/products/nysa-navy-back.jpeg",
    desc: "Midnight navy blue leather tote featuring contrast ecru edge-stitching, silver-tone buckles, and suede-lined compartment."
  },

  // ==========================================
  // SERIES 2: THE VELORA HOBO (Slouchy Shoulder Bag)
  // ==========================================
  {
    id: "cov-velora-black",
    series: 2,
    model: "VELORA",
    category: "hobo",
    colorName: "Black",
    swatchColor: "#111111",
    title: "The Velora Slouchy Hobo — Black",
    price: 5000,
    soldOut: false,
    frontImg: "images/products/velora-black-front.jpeg",
    sideImg: "images/products/velora-black-angle.jpeg",
    profileImg: "images/products/velora-black-side.jpeg",
    backImg: "images/products/velora-black-back.jpeg",
    desc: "Generously proportioned slouchy hobo in glove-tanned black leather with cushioned rolled shoulder strap, rear zip pocket, and metal COVORO plate."
  },
  {
    id: "cov-velora-pink",
    series: 2,
    model: "VELORA",
    category: "hobo",
    colorName: "Blush Pink",
    swatchColor: "#D9B8B8",
    title: "The Velora Slouchy Hobo — Blush Pink",
    price: 5000,
    soldOut: false,
    frontImg: "images/products/velora-pink-front.jpeg",
    sideImg: "images/products/velora-pink-angle.jpeg",
    profileImg: "images/products/velora-pink-side.jpeg",
    backImg: "images/products/velora-pink-back.jpeg",
    desc: "Soft romantic blush pink leather hobo with effortless slouch, ergonomic shoulder comfort, and concealed zippered valuables pocket."
  },
  {
    id: "cov-velora-burgundy",
    series: 2,
    model: "VELORA",
    category: "hobo",
    colorName: "Burgundy",
    swatchColor: "#4A1824",
    title: "The Velora Slouchy Hobo — Burgundy",
    price: 5000,
    soldOut: false,
    frontImg: "images/products/velora-burgundy-front.jpeg",
    sideImg: "images/products/velora-burgundy-angle.jpeg",
    profileImg: "images/products/velora-burgundy-side.jpeg",
    backImg: "images/products/velora-burgundy-back.jpeg",
    desc: "Decadent deep burgundy wine leather silhouette with natural drape, silver-tone zipper pull, and signature branded metal bar."
  },

  // ==========================================
  // SERIES 3: THE VIENNA CROSSBODY (Minimalist Flap Bag)
  // ==========================================
  {
    id: "cov-vienna-beige",
    series: 3,
    model: "VIENNA",
    category: "crossbody",
    colorName: "Beige",
    swatchColor: "#D8CDB8",
    title: "The Vienna Flap Crossbody — Beige",
    price: 4500,
    soldOut: false,
    frontImg: "images/products/vienna-beige-front.jpeg",
    sideImg: "images/products/vienna-beige-angle.jpeg",
    profileImg: "images/products/vienna-beige-side.jpeg",
    backImg: "images/products/vienna-beige-front.jpeg",
    desc: "Understated minimalist flap silhouette in smooth sand beige leather with adjustable buckle shoulder strap and magnetic snap closure."
  },
  {
    id: "cov-vienna-charcoal",
    series: 3,
    model: "VIENNA",
    category: "crossbody",
    colorName: "Charcoal",
    swatchColor: "#44474A",
    title: "The Vienna Flap Crossbody — Charcoal",
    price: 4500,
    soldOut: false,
    frontImg: "images/products/vienna-charcoal-front.jpeg",
    sideImg: "images/products/vienna-charcoal-angle.jpeg",
    profileImg: "images/products/vienna-charcoal-side.jpeg",
    backImg: "images/products/vienna-charcoal-back.jpeg",
    desc: "Modern charcoal slate leather bag featuring perimeter top-stitching, sleek accordion gussets, and blind-debossed COVORO signature."
  },
  {
    id: "cov-vienna-choc",
    series: 3,
    model: "VIENNA",
    category: "crossbody",
    colorName: "Chocolate Brown",
    swatchColor: "#3B2318",
    title: "The Vienna Flap Crossbody — Chocolate Brown",
    price: 4500,
    soldOut: false,
    frontImg: "images/products/vienna-choc-front.jpeg",
    sideImg: "images/products/vienna-choc-angle.jpeg",
    profileImg: "images/products/vienna-choc-side.jpeg",
    backImg: "images/products/vienna-choc-back.jpeg",
    desc: "Timeless dark chocolate leather flap crossbody designed for sleek day-to-night versatility and lightweight hands-free ease."
  },

  // ==========================================
  // SERIES 4: THE ZYRA CRESCENT (Curved Baguette Bag)
  // ==========================================
  {
    id: "cov-zyra-black",
    series: 4,
    model: "ZYRA",
    category: "crescent",
    colorName: "Noir",
    swatchColor: "#111111",
    title: "The Zyra Crescent Shoulder — Noir",
    price: 4500,
    soldOut: false,
    frontImg: "images/products/zyra-black-front.jpeg",
    sideImg: "images/products/zyra-black-angle.jpeg",
    profileImg: "images/products/zyra-black-side.jpeg",
    backImg: "images/products/zyra-black-back.jpeg",
    desc: "Sculpted asymmetric crescent shoulder bag in buttery black leather with sleek underarm curve and gold-tone zipper closure."
  },
  {
    id: "cov-zyra-choc",
    series: 4,
    model: "ZYRA",
    category: "crescent",
    colorName: "Chocolate & Ivory",
    swatchColor: "#3B2318",
    title: "The Zyra Crescent — Chocolate & Ivory",
    price: 4500,
    soldOut: false,
    frontImg: "images/products/zyra-choc-front.jpeg",
    sideImg: "images/products/zyra-choc-angle.jpeg",
    profileImg: "images/products/zyra-choc-side.jpeg",
    backImg: "images/products/zyra-choc-back.jpeg",
    desc: "Striking two-tone crescent bag pairing deep chocolate brown calfskin with crisp ivory leather piping and adjustable shoulder strap."
  },
  {
    id: "cov-zyra-ivory",
    series: 4,
    model: "ZYRA",
    category: "crescent",
    colorName: "Ivory & Noir",
    swatchColor: "#F3EFE6",
    title: "The Zyra Crescent — Ivory & Noir",
    price: 4500,
    soldOut: false,
    frontImg: "images/products/zyra-ivory-front.jpeg",
    sideImg: "images/products/zyra-ivory-angle.jpeg",
    profileImg: "images/products/zyra-ivory-front.jpeg",
    backImg: "images/products/zyra-ivory-back.jpeg",
    desc: "Warm ivory white leather baguette finished with contrasting black piped trim and slim black shoulder strap for an editorial aesthetic."
  },
  {
    id: "cov-zyra-olive",
    series: 4,
    model: "ZYRA",
    category: "crescent",
    colorName: "Olive & Ivory",
    swatchColor: "#53583C",
    title: "The Zyra Crescent — Olive & Ivory",
    price: 4500,
    soldOut: false,
    frontImg: "images/products/zyra-olive-front.jpeg",
    sideImg: "images/products/zyra-olive-angle.jpeg",
    profileImg: "images/products/zyra-olive-side.jpeg",
    backImg: "images/products/zyra-olive-back.jpeg",
    desc: "Earthy heritage olive green leather framed by delicate ivory trim and polished hardware for contemporary understated luxury."
  }
];

let carouselPage = { 1: 0, 2: 0, 3: 0, 4: 0 };
let cart = [];
let activeFilter = "all";
let currentModalProduct = null;
let currentModalAngle = "front";

/* Currency Formatter */
function formatPrice(num) {
  return STORE_CONFIG.currencySymbol + num.toLocaleString(STORE_CONFIG.currencyCode);
}

/* Create Product Card Component */
function createProductCardHTML(product) {
  return `
    <article class="product-card" onclick="openProductModal('${product.id}')">
      <div class="product-media">
        <img src="${product.frontImg}" alt="${product.title}" loading="lazy" />
        <img src="${product.sideImg}" alt="${product.title} Angle" class="hover-img" loading="lazy" />
        ${product.soldOut ? '<span class="badge-soldout">Sold out</span>' : `<button class="quick-add-btn" onclick="event.stopPropagation(); addToCart('${product.id}')">+ Quick Add</button>`}
      </div>
      <div class="product-info-wrap">
        <span class="product-series-tag">${product.model}</span>
        <h4 class="product-title">${product.title}</h4>
        <p class="product-price">${formatPrice(product.price)}</p>
      </div>
    </article>
  `;
}

/* Carousel Logic for Home View */
function renderCarousel(seriesId) {
  const items = PRODUCTS.filter((p) => p.series === seriesId);
  if (items.length === 0) return;
  const perPage = 4;
  const totalPages = Math.ceil(items.length / perPage) || 1;
  const page = carouselPage[seriesId] % totalPages;
  const slice = items.slice(page * perPage, page * perPage + perPage);

  const container = document.getElementById(`carousel-${seriesId}`);
  const indicator = document.getElementById(`indicator-${seriesId}`);
  if (container) {
    container.innerHTML = slice.map(createProductCardHTML).join("");
  }
  if (indicator) {
    indicator.textContent = `${page + 1} / ${totalPages}`;
  }
}

function shiftCarousel(seriesId, dir) {
  const items = PRODUCTS.filter((p) => p.series === seriesId);
  const totalPages = Math.ceil(items.length / 4) || 1;
  carouselPage[seriesId] = (carouselPage[seriesId] + dir + totalPages) % totalPages;
  renderCarousel(seriesId);
}

/* Page View Routing */
function showView(view, filter = "all") {
  const homeView = document.getElementById("homeView");
  const catalogView = document.getElementById("catalogView");
  if (view === "catalog") {
    homeView.classList.add("hidden");
    catalogView.classList.remove("hidden");
    activeFilter = filter;
    document.querySelectorAll(".filter-pill").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.filter === filter);
    });
    renderCatalog();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    catalogView.classList.add("hidden");
    homeView.classList.remove("hidden");
  }
}

function filterCatalog(filter, btnEl) {
  activeFilter = filter;
  document.querySelectorAll(".filter-pill").forEach((b) => b.classList.remove("active"));
  if (btnEl) btnEl.classList.add("active");
  renderCatalog();
}

function renderCatalog() {
  const sortSelect = document.getElementById("sortSelect");
  const sortBy = sortSelect ? sortSelect.value : "featured";
  const searchInput = document.getElementById("searchInput");
  const query = (searchInput ? searchInput.value : "").toLowerCase().trim();

  let list = [...PRODUCTS];
  if (activeFilter !== "all") {
    list = list.filter((p) => p.category === activeFilter || p.model.toLowerCase() === activeFilter.toLowerCase());
  }
  if (query) {
    list = list.filter((p) => 
      p.title.toLowerCase().includes(query) || 
      p.model.toLowerCase().includes(query) || 
      p.colorName.toLowerCase().includes(query)
    );
  }
  if (sortBy === "price-asc") {
    list.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    list.sort((a, b) => b.price - a.price);
  }

  const catalogGrid = document.getElementById("catalogGrid");
  if (catalogGrid) {
    catalogGrid.innerHTML = list.map(createProductCardHTML).join("");
  }
}

/* Quick View Modal Logic with 4 Studio Angles */
function openProductModal(id) {
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) return;
  currentModalProduct = product;
  currentModalAngle = "front";

  updateModalViews();

  // Swatches for other colorways of the SAME model
  const siblings = PRODUCTS.filter((p) => p.model === product.model);
  const swatchContainer = document.getElementById("modalSwatchesRow");
  if (swatchContainer) {
    swatchContainer.innerHTML = siblings
      .map(
        (sib) => `
        <button 
          class="swatch ${sib.id === product.id ? 'active' : ''}" 
          style="background:${sib.swatchColor};" 
          title="${sib.colorName}"
          onclick="openProductModal('${sib.id}')">
        </button>
      `
      )
      .join("");
  }

  document.getElementById("productModal").classList.remove("hidden");
}

function updateModalViews() {
  if (!currentModalProduct) return;
  const p = currentModalProduct;

  let activeImg = p.frontImg;
  if (currentModalAngle === "angle") activeImg = p.sideImg;
  else if (currentModalAngle === "side") activeImg = p.profileImg || p.sideImg;
  else if (currentModalAngle === "back") activeImg = p.backImg || p.frontImg;

  const modalImg = document.getElementById("modalMainImg");
  if (modalImg) modalImg.src = activeImg;

  const categoryEl = document.getElementById("modalCategory");
  if (categoryEl) categoryEl.textContent = `${p.model} COLLECTION — ${p.category.toUpperCase()}`;

  const titleEl = document.getElementById("modalTitle");
  if (titleEl) titleEl.textContent = p.title;

  const priceEl = document.getElementById("modalPrice");
  if (priceEl) priceEl.textContent = formatPrice(p.price);

  const descEl = document.getElementById("modalDesc");
  if (descEl) descEl.textContent = p.desc;

  const colorEl = document.getElementById("modalColorName");
  if (colorEl) colorEl.textContent = p.colorName;

  // Update active thumbnail angle
  document.querySelectorAll(".thumb-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.angle === currentModalAngle);
  });

  // Update Add to Cart / WhatsApp Buttons
  const addBtn = document.getElementById("modalAddBtn");
  if (addBtn) {
    if (p.soldOut) {
      addBtn.textContent = "SOLD OUT";
      addBtn.disabled = true;
      addBtn.style.opacity = "0.5";
    } else {
      addBtn.textContent = "ADD TO BAG";
      addBtn.disabled = false;
      addBtn.style.opacity = "1";
      addBtn.onclick = () => {
        addToCart(p.id, p.colorName);
        closeProductModal();
      };
    }
  }

  const buyCodBtn = document.getElementById("modalBuyCodBtn");
  if (buyCodBtn) {
    if (p.soldOut) {
      buyCodBtn.style.display = "none";
    } else {
      buyCodBtn.style.display = "block";
    }
  }

  const whatsappBtn = document.getElementById("modalWhatsappBtn");
  if (whatsappBtn) {
    const msg = encodeURIComponent(`Hello COVORO Atelier, I would like to order: ${p.title} (${p.colorName}) for ${formatPrice(p.price)}.`);
    whatsappBtn.href = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${msg}`;
  }
}

function switchModalAngle(angle) {
  currentModalAngle = angle;
  updateModalViews();
}

function closeProductModal() {
  document.getElementById("productModal").classList.add("hidden");
}

/* Shopping Bag / Cart Logic */
function addToCart(id, colorOverride = null) {
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product || product.soldOut) return;
  const color = colorOverride || product.colorName;
  const existing = cart.find((c) => c.id === id && c.color === color);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, color, qty: 1 });
  }
  updateCartUI();
  openCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function updateCartUI() {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const countEl = document.getElementById("cartCount");
  if (countEl) countEl.textContent = totalQty;

  const subtotalEl = document.getElementById("cartSubtotal");
  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);

  const container = document.getElementById("cartItemsContainer");
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `<p style="color:#6E655D;font-size:13px;padding:24px 0;text-align:center;">Your shopping bag is currently empty.</p>`;
    return;
  }

  container.innerHTML = cart
    .map(
      (item, idx) => `
      <div class="cart-item">
        <img src="${item.frontImg}" alt="${item.title}" />
        <div class="cart-item-info">
          <h4>${item.title}</h4>
          <p>Color: ${item.color} &times; ${item.qty}</p>
          <p><strong>${formatPrice(item.price * item.qty)}</strong></p>
          <button class="remove-item" onclick="removeFromCart(${idx})">Remove</button>
        </div>
      </div>
    `
    )
    .join("");
}

function openCart() {
  document.getElementById("cartDrawer").classList.remove("hidden");
}

function closeCart() {
  document.getElementById("cartDrawer").classList.add("hidden");
}

function checkoutViaWhatsApp() {
  if (cart.length === 0) {
    openToast("Please add at least one piece to your bag first.");
    return;
  }
  const lines = cart.map(
    (item, i) => `${i + 1}. ${item.title} (${item.color}) x${item.qty} — ${formatPrice(item.price * item.qty)}`
  );
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const message = `Hello COVORO Atelier, I would like to place an order:%0A%0A${lines.join("%0A")}%0A%0ATotal: ${formatPrice(subtotal)}`;
  window.open(`https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${message}`, "_blank");
}

/* ============================================================
   CASH ON DELIVERY (COD) CHECKOUT SYSTEM
   ============================================================ */
let activeCodItems = [];

function openCodModal(customItems = null) {
  if (customItems && customItems.length > 0) {
    activeCodItems = customItems;
  } else {
    if (cart.length === 0) {
      openToast("Please add at least one piece to your bag first.");
      return;
    }
    activeCodItems = [...cart];
  }

  // Close any open drawer or product modal
  closeCart();
  closeProductModal();

  // Reset view to form
  const formView = document.getElementById("codFormView");
  const successView = document.getElementById("codSuccessView");
  if (formView) formView.classList.remove("hidden");
  if (successView) successView.classList.add("hidden");

  // Render items in COD modal
  const listEl = document.getElementById("codItemsSummary");
  if (listEl) {
    listEl.innerHTML = activeCodItems
      .map(
        (it) => `
        <div class="cod-item-row">
          <img src="${it.frontImg}" alt="${it.title}" />
          <div class="cod-item-meta">
            <strong>${it.title}</strong>
            <span>Color: ${it.color} &times; ${it.qty || 1}</span>
            <div class="cod-item-price">${formatPrice(it.price * (it.qty || 1))}</div>
          </div>
        </div>
      `
      )
      .join("");
  }

  const subtotal = activeCodItems.reduce((acc, it) => acc + it.price * (it.qty || 1), 0);
  const subtotalEl = document.getElementById("codSummarySubtotal");
  const totalEl = document.getElementById("codSummaryTotal");
  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (totalEl) totalEl.textContent = formatPrice(subtotal);

  // Show modal
  document.getElementById("codModal").classList.remove("hidden");
}

function closeCodModal() {
  document.getElementById("codModal").classList.add("hidden");
}

function buyNowCOD() {
  if (!currentModalProduct) return;
  const p = currentModalProduct;
  const singleItem = {
    id: p.id,
    title: p.title,
    price: p.price,
    color: p.colorName,
    frontImg: p.frontImg,
    qty: 1
  };
  openCodModal([singleItem]);
}

async function handleCodOrderSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("codFullName").value.trim();
  const phone = document.getElementById("codPhone").value.trim();
  const email = document.getElementById("codEmail").value.trim();
  const address = document.getElementById("codAddress").value.trim();
  const city = document.getElementById("codCity").value;
  const notes = document.getElementById("codNotes").value.trim();

  if (!name || !phone || !address || !city) {
    openToast("Please complete all required fields (Name, Phone, Address, City).");
    return;
  }

  const submitBtn = document.getElementById("codSubmitBtn");
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = "PLACING YOUR ORDER...";
  }

  // Generate unique Order ID
  const orderNum = "COV-" + Math.floor(10000 + Math.random() * 90000);
  const totalAmount = activeCodItems.reduce((acc, it) => acc + it.price * (it.qty || 1), 0);
  const itemSummary = activeCodItems.map(
    (it, idx) => `${idx + 1}. ${it.title} (${it.color}) x${it.qty || 1} — ${formatPrice(it.price * (it.qty || 1))}`
  ).join(" | ");

  const orderData = {
    orderId: orderNum,
    date: new Date().toLocaleString("en-PK", { timeZone: "Asia/Karachi" }),
    customer: { name, phone, email, address, city, notes },
    items: activeCodItems,
    itemsText: itemSummary,
    paymentMethod: "Cash on Delivery (COD)",
    total: totalAmount,
    status: "Pending Dispatch"
  };

  // 1. Save in local browser storage
  try {
    const existingOrders = JSON.parse(localStorage.getItem("covoro_orders") || "[]");
    existingOrders.unshift(orderData);
    localStorage.setItem("covoro_orders", JSON.stringify(existingOrders));
  } catch (err) {
    console.error("Storage error:", err);
  }

  // 1b. Post to local server endpoint
  try {
    fetch('/api/place-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    }).catch(() => {});
  } catch (e) {}

  // 2. Dispatch automatic Shopify-style email notification to store owner (covoro.online@gmail.com)
  const emailPayload = {
    _subject: `[NEW COD ORDER] #${orderNum} — ${name} (${formatPrice(totalAmount)})`,
    _template: "table",
    _captcha: "false",
    _replyto: email || "covoro.online@gmail.com",
    _cc: email || undefined,
    Order_Reference: "#" + orderNum,
    Customer_Name: name,
    Mobile_Number: phone,
    Email_Address: email || "Not provided",
    Delivery_Address: address,
    City: city,
    Special_Notes: notes || "None",
    Ordered_Items: itemSummary,
    Total_Amount_to_Collect_COD: formatPrice(totalAmount),
    Payment_Method: "Cash on Delivery (COD)",
    Order_Date: orderData.date
  };

  try {
    await Promise.race([
      fetch("https://formsubmit.co/ajax/covoro.online@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(emailPayload)
      }),
      new Promise((resolve) => setTimeout(resolve, 2500))
    ]);
  } catch (err) {
    console.log("Order email processed:", err);
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = "CONFIRM & PLACE COD ORDER";
    }
  }

  // 3. Clear cart if ordered from cart
  if (cart.length > 0 && activeCodItems[0] && cart[0] && activeCodItems[0].id === cart[0].id) {
    cart = [];
    updateCartUI();
  }

  // 4. Update success card details
  document.getElementById("successOrderId").textContent = "#" + orderNum;
  document.getElementById("successTotal").textContent = formatPrice(totalAmount);
  document.getElementById("successRecipient").textContent = `${name} (${phone})`;
  document.getElementById("successAddress").textContent = `${address}, ${city}`;

  // 5. Toggle views to Pure COD Confirmation
  document.getElementById("codFormView").classList.add("hidden");
  document.getElementById("codSuccessView").classList.remove("hidden");
  openToast(`Cash on Delivery order #${orderNum} placed successfully!`);
}

/* ============================================================
   ATELIER ORDERS DASHBOARD (For Store Owner)
   ============================================================ */
function openOrdersDashboard() {
  renderOrdersDashboard();
  document.getElementById("ordersDashboardModal").classList.remove("hidden");
}

function closeOrdersDashboard() {
  document.getElementById("ordersDashboardModal").classList.add("hidden");
}

function renderOrdersDashboard() {
  const container = document.getElementById("ordersDashboardList");
  if (!container) return;

  const orders = JSON.parse(localStorage.getItem("covoro_orders") || "[]");
  if (orders.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 40px 16px; color:#6E655D;">
        <p style="font-size:14px; margin-bottom:6px;">No Cash on Delivery orders placed yet.</p>
        <p style="font-size:12px;">Customer orders placed via the COD form will appear here automatically.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = orders
    .map(
      (ord) => `
    <div class="dashboard-order-card">
      <div class="order-card-header">
        <div>
          <strong>#${ord.orderId}</strong>
          <span style="font-size:11px; color:#6E655D; margin-left:8px;">${ord.date}</span>
        </div>
        <span class="order-badge-pending">COD &bull; ${ord.status || 'Pending'}</span>
      </div>

      <div class="order-card-grid">
        <div>
          <p><span>Recipient:</span> <strong>${ord.customer.name}</strong></p>
          <p><span>Phone:</span> <strong>${ord.customer.phone}</strong></p>
          ${ord.customer.email ? `<p><span>Email:</span> ${ord.customer.email}</p>` : ''}
        </div>
        <div>
          <p><span>City:</span> <strong>${ord.customer.city}</strong></p>
          <p><span>Address:</span> ${ord.customer.address}</p>
          ${ord.customer.notes ? `<p><span>Note:</span> <em>${ord.customer.notes}</em></p>` : ''}
        </div>
      </div>

      <div class="order-card-items">
        <strong>Items:</strong>
        ${(ord.items || [])
          .map(
            (it) => `
          <div>&bull; ${it.title} (${it.color}) &times; ${it.qty || 1} &mdash; <strong>${formatPrice(it.price * (it.qty || 1))}</strong></div>
        `
          )
          .join('')}
        <div style="margin-top:6px; padding-top:6px; border-top:1px dashed #E2DACF;">
          <strong>Total Payable to Courier: ${formatPrice(ord.total)}</strong>
        </div>
      </div>

      <div class="order-card-actions">
        <a 
          href="https://wa.me/${ord.customer.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(ord.customer.name)}%2C%20this%20is%20COVORO%20Atelier%20regarding%20your%20COD%20Order%20%23${ord.orderId}." 
          target="_blank" 
          rel="noopener" 
          class="btn-contact-wa"
        >
          Message Customer on WhatsApp
        </a>
        <button class="btn-delete-order" onclick="deleteOrder('${ord.orderId}')">Delete</button>
      </div>
    </div>
  `
    )
    .join('');
}

function deleteOrder(orderId) {
  if (!confirm(`Are you sure you want to remove order #${orderId}?`)) return;
  let orders = JSON.parse(localStorage.getItem("covoro_orders") || "[]");
  orders = orders.filter((o) => o.orderId !== orderId);
  localStorage.setItem("covoro_orders", JSON.stringify(orders));
  renderOrdersDashboard();
  openToast(`Order #${orderId} removed.`);
}

function exportOrdersCSV() {
  const orders = JSON.parse(localStorage.getItem("covoro_orders") || "[]");
  if (orders.length === 0) {
    openToast("No orders available to export.");
    return;
  }
  let csv = "Order ID,Date,Customer Name,Phone,Email,City,Address,Total (PKR),Payment Method,Status\n";
  orders.forEach((o) => {
    csv += `"${o.orderId}","${o.date}","${o.customer.name}","${o.customer.phone}","${o.customer.email || ''}","${o.customer.city}","${o.customer.address}","${o.total}","${o.paymentMethod}","${o.status || 'Pending'}"\n`;
  });
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `covoro-cod-orders-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

function handleNewsletter(e) {
  e.preventDefault();
  const emailInput = document.getElementById("newsletterEmail");
  if (emailInput) emailInput.value = "";
  openToast("Thank you for subscribing to COVORO Atelier.");
}

function openToast(msg) {
  const toast = document.getElementById("toastBox");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.remove("hidden");
  setTimeout(() => toast.classList.add("hidden"), 3500);
}

/* Initialization on DOM Load */
document.addEventListener("DOMContentLoaded", () => {
  renderCarousel(1);
  renderCarousel(2);
  renderCarousel(3);
  renderCarousel(4);
  updateCartUI();

  const cartToggle = document.getElementById("cartToggle");
  if (cartToggle) cartToggle.addEventListener("click", openCart);

  const searchToggle = document.getElementById("searchToggle");
  const searchPanel = document.getElementById("searchPanel");
  const searchInput = document.getElementById("searchInput");
  const searchClose = document.getElementById("searchClose");

  if (searchToggle && searchPanel) {
    searchToggle.addEventListener("click", () => {
      searchPanel.classList.toggle("open");
      if (searchInput) searchInput.focus();
    });
  }
  if (searchClose && searchPanel) {
    searchClose.addEventListener("click", () => {
      searchPanel.classList.remove("open");
    });
  }
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      showView("catalog", activeFilter);
    });
  }
});
