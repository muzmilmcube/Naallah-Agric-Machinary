# NAALLAH GENERATORS AND AGRIC MACHINERIES — Official Business Website

A modern, responsive, high-performance web platform built for **NAALLAH GENERATORS AND AGRIC MACHINERIES**, a registered Nigerian agricultural and machinery enterprise.

---

## 1. Official Business Registration Information (CAC Nigeria)

- **Business Name:** NAALLAH GENERATORS AND AGRIC MACHINERIES
- **Registration Number:** 7805170
- **Country:** Nigeria
- **Business Address:** No. 7 Khairat Plaza, Along Sabonline Street, Gombe, Gombe State.
- **Registration Date:** 7 August 2024
- **Registered Business Activities:**
  1. Poultry Farming
  2. Fish Farming
  3. Sale of Agricultural Machineries

> **Compliance Note:** No fictitious awards, unverified certifications, or unsupported claims (e.g., "#1 supplier") have been fabricated. All contact channels (telephone, WhatsApp, email) are fully configurable by the business owner.

---

## 2. Key Website Features & Architecture

### A. Navigation & Top Header
- **Top Announcement Bar:** Displays official CAC Reg: `7805170`, Gombe State location, and owner configurable phone/email.
- **Sticky Navbar:** Smooth scroll navigation to Home, About Us, Our Services, Agricultural Machinery, Poultry Farming, Fish Farming, Why Choose Us, Gallery, and Contact Us.
- **Brand Logo:** Elegant agricultural emblem with custom deep forest green palette and Nigerian agricultural identity.
- **Mobile Responsive Drawer:** Clean slide-down menu with direct WhatsApp and Call quick links.

### B. Hero Section
- **Headline:** `POWERING AGRICULTURE. EQUIPPING THE FUTURE.`
- **Supporting Narrative:** Emphasizes agricultural machinery, poultry farming, and fish farming solutions in Nigeria.
- **Visuals:** High-resolution agricultural imagery with deep forest green gradient overlays and interactive stats.

### C. About Our Business
- **Heading:** `Growing Agriculture Through Innovation`
- Highlights commitment to Nigerian farmers, agribusiness entrepreneurs, and modern farming.
- Includes a dedicated **Official CAC Verification Card** detailing registration number, date, address, and registered activities.

### D. Core Business Activities (3 Registered Pillars)
1. **Sale of Agricultural Machineries & Equipment:** Tractors, silent generators, water pumps, irrigation kits, battery cages, fish aerators, and agro-processing mills.
2. **Poultry Farming:** Commercial broilers, layers, automated nipple drinking, hygienic housing, daily table egg harvests.
3. **Fish Farming & Aquaculture:** High-density catfish ponds, fingerlings, freshwater circulation, water aeration, and table catfish supply.
- Each pillar card features high-definition photography, bulleted highlights, and an interactive **Learn More** modal.

### E. Agricultural Machinery Showcase
- **Live Search & Filter:** Instant category switching (`All`, `Tractors`, `Generators`, `Pumps & Irrigation`, `Poultry Equipment`, `Fish Equipment`, `Agro-Processing`) and search bar.
- **Interactive Equipment Cards:** Specifications, applications, "Price on Enquiry", and a **Request Quote** button pre-filling the inquiry modal.
- **Technical Specs Modal:** Dedicated modal displaying detailed specs for each machine.

### F. Why Choose Us?
- 6 value-focused pillars highlighting reliable machinery, 3-in-1 agribusiness synergy, customer-first consultation, and strategic Gombe State physical presence.

### G. Visual Gallery & Interactive Lightbox
- High-resolution agricultural gallery showcasing machinery in action, farm generators, poultry housing, and aquaculture ponds.
- Fullscreen Lightbox modal with captions, zoom, keyboard arrows (`←`, `→`, `Esc`), and mobile navigation.

### H. Contact Section & Map
- Complete business address: `No. 7 Khairat Plaza, Along Sabonline Street, Gombe, Gombe State, Nigeria`.
- Interactive inquiry form with client-side validation.
- Embedded Google Map preview with direct link to Google Maps directions.
- **WhatsApp Integration:** 1-click chat button generating pre-filled messages with inquiry details.

### I. Business Owner Live Configuration
- In-app **Owner Config Drawer/Modal** (accessible from header and footer) allowing the business owner to update:
  - Phone Number
  - WhatsApp Number
  - Official Email
  - Social Media Links (Facebook, Twitter/X, Instagram, LinkedIn)
- Automatically saves to `localStorage` and updates all links across the site instantly!

### J. Mobile Quick Action Bar
- Fixed floating action bar for smartphones with **Call Now**, **WhatsApp Chat**, and **Get Quote** for high conversion among Nigerian mobile visitors.

---

## 3. Technology Stack

- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** Plus Jakarta Sans & Outfit (Google Fonts)

---

## 4. Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or pnpm

### Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```
Generates an optimized static production bundle in `dist/`.

---

## 5. File Structure

```
├── index.html                  # Main HTML entry with SEO metadata and Google Fonts
├── package.json
├── tsconfig.json
├── vite.config.ts
├── src/
│   ├── main.tsx                # React entry
│   ├── App.tsx                 # Root application component & modal managers
│   ├── index.css               # Tailwind CSS v4 setup, color theme & animations
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces (Machinery, Business, Gallery, Form)
│   ├── data/
│   │   ├── businessInfo.ts     # Official CAC data & configurable contact storage
│   │   ├── machineryData.ts    # Comprehensive machinery catalog & specs
│   │   ├── farmingDivisions.ts # In-depth data on 3 registered divisions
│   │   └── galleryData.ts      # Curated high-resolution agricultural photo gallery
│   └── components/
│       ├── Header.tsx          # Sticky nav, top CAC bar & mobile drawer
│       ├── Hero.tsx            # Hero section with headline & key badges
│       ├── About.tsx           # "Growing Agriculture Through Innovation" & CAC card
│       ├── BusinessActivities.tsx # 3 service cards
│       ├── MachineryShowcase.tsx  # Product catalog with search & filters
│       ├── PoultrySection.tsx     # Modern poultry deep dive
│       ├── FishFarmingSection.tsx # Aquaculture & catfish deep dive
│       ├── WhyChooseUs.tsx        # 6 core value pillars
│       ├── Gallery.tsx            # Responsive photo gallery
│       ├── Contact.tsx            # Contact form, map, address & WhatsApp button
│       ├── Footer.tsx             # Footer links, social icons & copyright
│       ├── QuickActionBar.tsx     # Mobile floating quick action bar
│       └── Modals/
│           ├── EnquiryModal.tsx        # Request quote / WhatsApp inquiry modal
│           ├── LightboxModal.tsx       # Fullscreen photo gallery lightbox
│           ├── ActivityDetailModal.tsx # In-depth division breakdown
│           ├── MachineryDetailModal.tsx# Machine specifications & features modal
│           └── OwnerConfigModal.tsx    # Live contact settings manager
```
