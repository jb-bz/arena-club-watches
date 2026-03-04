# Decision Log

## Decision: Pixel-Perfect ArenaClub Redesign
[2026-03-02 23:17:00]

### Rationale
User requested exact match to ArenaClub.com product detail and marketplace pages. Captured reference screenshots of both pages and rebuilt every component to match.

### Key Changes
* **Tailwind v4**: Fixed CSS config to use `@import "tailwindcss"` + `@config` instead of legacy `@tailwind` directives
* **Navbar**: Green-bordered logo box, nav items with icons, dark search bar, Log in/Sign up buttons
* **WatchCard**: Slab-style with dark grading header (brand, MH grade, ARENA CLUB), white image area, dark footer (reference, vault). View count badge outside slab.
* **Marketplace**: Full-width tabs (All/Auctions/Fixed Price), 5-column grid, filter bar with Win Feed/Search/Featured
* **Detail Page**: Slab on left, grade badges (MINT 9 + individual scores), auction section with countdown, BID button
* **New Components**: Footer, PriceChart (SVG), MoreFromSeller carousel
* **Data Model**: Added views, bids, timeRemaining, grade, seller, listingType, noReserve fields
* **Cookie Banner**: Removed per user request
* **Colors**: White bg (#FFFFFF), black text (#000000), ArenaClub green (#70C130), dark footer (#111114)

## Decision: Design Pivot to "Slab" Aesthetic
[2026-03-03 05:25:00]

### Rationale
The initial prototype was too generic. ArenaClub's unique value proposition is the "Slab" — a digital representation of a physical graded asset. To truly mimic ArenaClub, the UI must revolve around this slab metaphor.

### Implementation Details
*   **WatchCard**: Will be redesigned as a vertical "Slab".
    *   **Top Label**: Contains the Movement Health score, brand, and year.
    *   **Main Image**: Centered within the slab frame.
    *   **Bottom Label**: Contains the reference number and price.
*   **Colors**: Use `#121212` for the main background and `#1A1A1A` for slab backgrounds.
*   **Borders**: Use specific border-radius and subtle inner shadows to create the "acrylic" look.

## Decision: Movement Health (MH) Grading System
[2026-03-03 05:20:00]
... (previous decisions preserved)

## Decision: Watch Detail Page Redesign with New Features
[2026-03-03 07:50:00]

### Rationale
User requested a cleaner watch detail page matching a new design mockup. The page shifts from auction-focused to a buy/offer/trade model with richer movement diagnostics and service transparency.

### Key Changes
* **WatchCSABadge**: New client component linking to watchcsa.com with hover tooltip ("Watch CSA offers the most powerful and effective tools for Stopping Fake Watches"). Positioned next to AC Grade badge.
* **AC Grade**: Displayed as "AC Grade X.X" in a teal-bordered badge, replacing the previous green grading system.
* **Buy Now / Offer / Trade**: Three action buttons replacing the auction bid flow. "Make Offer" renamed to "Offer". Trade button is a `<Link>` navigating to `/trade?target={watchId}`.
* **MovementHealthDashboard**: Redesigned from vertical card layout to horizontal 5-column grid (Accuracy, Amplitude, Beat Error, Water Resistance, Last Service) with green status indicators. Light blue background.
* **ServiceHistory**: New timeline component showing service records with dates and descriptions.
* **View in Vault**: New button with camera icon placed below the watch image.
* **Data Model**: Added `ServiceRecord` interface and `serviceHistory: ServiceRecord[]` to Watch interface.
* **Layout**: Simplified to clean 2-column grid (image left, details right) without the slab enclosure.
