# ABHIVERA — Vibrant Peer-to-Peer Home Appliance & Essentials Rental

**ABHIVERA** is an energetic, community-driven rental marketplace where users can lend and rent everyday home appliances, kitchen electronics, utensils, and luxury bed linens for the short term.

---

## 🔐 Gated Member Experience Flow & Key Advantages

As requested, options to rent, lend, and view slots are **strictly protected and invisible until the user logs in**:

1. **First-Time Visitors (Logged Out State)**:
   * **Advertises ABHIVERA:** Prominently presents what ABHIVERA is (*"Why Buy When You Can Borrow? Rent Home Essentials, or Sell as Rent"*), featuring an announcement top-strip, hero showcase, and neighborhood trust highlights.
   * **Key Advantages Highlighted:** Displays 6 comprehensive advantage cards:
     1. **Save Up To 85% Cash:** Borrow expensive appliances for ₹90–₹350/day rather than spending ₹25,000–₹50,000.
     2. **"Sell as Rent" (Rent-to-Own):** Try an appliance before buying, or buy it outright anytime at a fixed buyout price.
     3. **100% Deposit Protection:** Escrow-held security deposits refunded immediately upon return.
     4. **Mandatory KYC Verification:** Zero anonymous users — verified IDs for community safety.
     5. **Sanitized & Condition Graded:** Multi-point cleanliness checklist and condition tiers (*Brand New, Like New, Good*).
     6. **Passive Income for Lenders:** Earn ₹1,500 to ₹8,000/month by sharing idle appliances with neighbors.
   * **Mandatory Sign-In Card:** Direct hero login inputs (Email/Phone + Password), 1-click instant demo access, and account registration.
   * **Rental & Lend Slots Hidden:** Product catalog, slots, rental calculator, search capsule, and category chips remain locked until authentication.

2. **Logged In State (After Signing In or 1-Click Demo Login)**:
   * **Full Marketplace Unlocked:** The real-object category bar, floating search capsule, product cards with daily prices, deposit info, wishlist hearts, and *"View & Rent"* booking calculator become visible.
   * **"Sell as Rent" Slots:** Items eligible for rent-to-own display the **"Sell as Rent"** tag and buyout price. Renters can click **"Request Outright Purchase (Buyout)"** to buy permanently.
   * **Lending Slots Available:** The **"List an Item to Earn"** button opens the listing modal where owners can describe condition, upload photos, set rental rates, and opt to enable **"Sell as Rent"** with an outright buyout price.
   * **Activity & Wishlist:** The user can access their saved items, past bookings, buyout orders, and active listings anytime.
   * **Logging Out:** Seamlessly returns the visitor to the advertising showcase.

The UI has been redesigned with an elegant, royal luxury aesthetic directly inspired by the official **ABHIVERA** logo:
* **Brand Primary:** `#071224` & `#0b1c36` (Royal Midnight Navy)
* **Warm Accents:** `#c59b27` & `#d4af37` (Imperial Champagne Gold)
* **Trust & Safety:** `#10b981` (Fresh Mint Green for KYC & Escrow Security)
* **Surfaces:** `#faf8f5` (Warm Luxury Pearl Canvas) with gold/navy micro-grain and champagne borders.
* **Typography:** `Montserrat`, `Outfit` & `Plus Jakarta Sans` for tracked luxury readability.

---

## 🔍 Key New Features & Search Improvements

1. **Specific Item Search (Instant & Multi-Point)**:
   - **Hero Search Capsule Keyword Field:** Users can type any specific item, model, or appliance name (e.g. *"Mixer"*, *"Projector"*, *"Vacuum"*, *"Biryani Pot"*, *"Microwave"*) directly into the first capsule segment.
   - **Real-Time Live Search Bar in Marketplace:** Positioned right in the marketplace filter strip, this live search filters the appliance catalog instantly in real-time as the user types, with an instant clear button (`✕`).
   - Supports searching by appliance name, brand, model, description notes, locality, and owner name.

2. **Airbnb-Style Floating Search Capsule**:
   - Right in the hero banner, users can search by:
     - 🔍 **What Item**: Specific item or appliance keyword
     - 📍 **Where**: Neighborhood/Locality (e.g. Koramangala, Indiranagar, Whitefield)
     - 🏷️ **Category**: Dropdown with instant filtering
     - 💰 **Max Daily Budget**: Quick rent price filter (Under ₹100, ₹200, ₹400/day)
     - 🔍 **Champagne Gold Search Button** with smooth auto-scroll to results!
   - One-click popular search chips (`Philips Mixer Grinder`, `Party Jumbo Pot`, `Full HD Projector`, `Guest Mattress`, `Deep Vacuum Cleaner`).

2. **Interactive Wishlist System**:
   - ❤️ **Heart icon** on every product card with smooth pop animation.
   - Real-time **Wishlist Counter** in the header.
   - Quick **"Show Wishlist Only"** filter button in the marketplace bar.
   - Dedicated **Wishlist tab** inside the Activity Drawer.

3. **Larger Visual Product Cards**:
   - Expanded 16:10 visual gallery frame with smooth hover zoom effect.
   - Floating condition pill tags and category chips on the top-left of each photo.
   - Dedicated specs strip showing Community Rating ⭐, Minimum Duration ⏱️, and Times Rented 🔁.

4. **Verified KYC User Profiles**:
   - Verified member badge, name, email, phone, locality, and government ID proof.
   - Pre-fills lender information automatically when listing an item.

5. **Real Object Category Thumbnails**:
   - Replaced flat vector icons with high-resolution photography of real objects (Mixer grinder, jumbo cooking pots, velvet bedding linen, smart projector, vacuum cleaner, cooling fan).
   - Smooth hover zoom and active ring animations.


---

## 🚀 How to Preview the Website

You have **two easy ways** to preview the site:

### Method 1: In Your Web Browser (Instant - No Terminal Needed)
1. Open Windows File Explorer and navigate to: `D:\ABHIVERA`
2. Double-click **`index.html`** to open it directly in Chrome, Edge, Brave, or Firefox.
   - Alternatively, open your browser and paste:
     `file:///D:/ABHIVERA/index.html`

### Method 2: Via Local Web Server
A lightweight server is already set up:
1. Open your terminal in `D:\ABHIVERA`
2. Run:
   ```bash
   node server.js
   ```
3. Open your browser and visit: **[http://localhost:3000](http://localhost:3000)**

---

## 🎨 Logo-Matched Luxury Design System

The visual identity of ABHIVERA has been harmonized with the official **ABHIVERA Logo (Gold Lotus & Hands Emblem on Royal Navy)**:

* **Primary Dark (Logo Background):** `#071224` & `#0b1c36` (Royal Midnight Navy)
* **Primary Accent (Lotus & Hands):** `#d4af37` & `#c59b27` (Imperial Champagne Gold)
* **Canvas:** `#faf8f5` (Warm luxury ivory pearl with gold/navy micro-grain)
* **Typography:** `Montserrat` & `Plus Jakarta Sans` with tracked geometric kerning for `ABHIVERA`.

All website colors are centralized in **[`styles.css`](file:///D:/ABHIVERA/styles.css)** inside the `:root` block at lines **8 to 60**:

| Variable Name | Default Color | Description / Where It Appears |
| :--- | :--- | :--- |
| `--navy-deep` | `#071224` (Midnight Navy) | Darkest navy for hero background, footer, and brand depth |
| `--navy-main` | `#0b1c36` (Royal Navy) | Primary heading text, card borders, and brand structure |
| `--gold-primary` | `#c59b27` (Imperial Gold) | Primary CTA buttons, star ratings, and accent borders |
| `--gold-bright` | `#d4af37` (Champagne Gold) | Radiant gold hover states, logo rings, and active tags |
| `--gold-light` | `#fef8e7` (Champagne Tint) | Soft gold card backgrounds, demo login pill, tags |
| `--secondary-color` | `#10b981` (Fresh Emerald) | KYC verified badges and 100% deposit escrow guarantee |
| `--bg-main` | `#faf8f5` (Warm Luxury Pearl) | Organic luxury ivory background canvas |
| `--bg-card` | `#ffffff` (Pure White) | Card surfaces with rounded corners and warm gold shadows |
| `--text-main` | `#0b1c36` (Royal Navy) | Bold titles, headings, and price displays |
| `--border-color` | `#e8e2d5` (Champagne Border) | Warm subtle borders on cards, inputs, and dividers |

> **To change a color:** Open [`styles.css`](file:///d:/ABHIVERA/styles.css) and change the hex code (e.g. replace `#0d9488` with `#2563eb` for Blue or `#e11d48` for Crimson Rose).

---

## 📝 Where to Customize Website Text & Content

The website's text is divided into two logical places:

### 1. Static Content (Headings, Banners, Form Labels, Footer)
Found in **[`index.html`](file:///d:/ABHIVERA/index.html)**:
- **Navbar & Logo Name:** Lines 27–34 (`ABHIVERA`)
- **Hero Title & Subtitle:** Lines 55–65 (`Rent Home Essentials for Short Term, or Earn From Yours...`)
- **"How it Works" Steps:** Lines 105–130 (Upload condition, pick dates, handover)
- **Category Filter Pill Names:** Lines 150–175 (`Kitchen Appliances`, `Utensils & Cookware`, `Home Textiles & Linens`, etc.)
- **Item Listing Modal Labels & Hints:** Lines 220–320 (Form inputs for title, condition, deposit, pricing)
- **Footer Links & Contact Info:** Lines 420–480 (Phone number, email, address)

### 2. Marketplace Items Catalog (Titles, Prices, Condition Notes)
Found in **[`app.js`](file:///d:/ABHIVERA/app.js)**:
- Look at the `INITIAL_ITEMS` array starting at **Line 8 to Line 135**.
- Each item contains:
  ```javascript
  {
    id: "item-1",
    title: "Philips 750W Mixer Grinder (3 Jars)",
    category: "Kitchen Appliances",
    condition: "Like New",
    conditionNote: "Hardly used 3 times. All 3 jars included...",
    pricePerDay: 120,
    deposit: 600,
    minDays: 2,
    location: "Koramangala, Bangalore",
    ...
  }
  ```
- Any items you upload live through the **"List an Item"** button on the website are automatically saved to your browser's `localStorage` and will persist across reloads!

---

## ✨ Features Included

1. **User Authentication & KYC Profiles**:
   - Collects verified details for every user: Full Legal Name, Email, Mobile (WhatsApp), Locality/City, and Government Identity Verification (Aadhaar / Voter ID / Driving License / Passport).
   - Identity verification safeguards high-value electronics and refundable deposits.
   - User Profile Menu with avatar, verified shield badge, and detailed profile dashboard.
   - 1-click **"Demo Login"** button for immediate instant testing.
2. **Item Upload with Condition Details**: Lenders can add title, category, select condition (*Brand New*, *Like New*, *Good*, *Fair*), condition notes, daily rate, security deposit, and image (file drag & drop or preset picker).
   - Once logged in, the lender's name, phone, and neighborhood are automatically pre-filled!
3. **Rental Cost Calculator**: Borrowers pick start and end dates to dynamically calculate total rent + refundable security deposit.
4. **Filter & Search**: Instant real-time search by keyword, condition, and category.
5. **My Activity Drawer**: Track items you have listed and rental requests you have booked.
6. **Responsive Design**: Clean layout that adapts smoothly to mobile, tablet, and desktop screens.
