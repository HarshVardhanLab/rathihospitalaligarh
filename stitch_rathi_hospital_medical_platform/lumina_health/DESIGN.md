# Design System Documentation: The Restorative Archive

## 1. Overview & Creative North Star
Medical design often falls into two traps: clinical coldness or cluttered complexity. This design system rejects both. Our Creative North Star is **"The Restorative Archive."** 

We aim to evoke the feeling of a high-end, editorial wellness publication rather than a traditional hospital portal. This is achieved through "Sophisticated Asymmetry"—using intentional white space to guide the eye—and a "Layered Atmosphere" where depth is felt through tonal shifts rather than hard lines. We prioritize the patient’s peace of mind by treating every screen as a curated, calm environment.

---

## 2. Colors: Tonal Depth & The "No-Line" Rule
Our palette utilizes the provided Material Design tokens to create a high-contrast yet soothing interface.

### The "No-Line" Rule
**Explicit Instruction:** You are prohibited from using 1px solid borders to section off content. In this design system, boundaries are defined solely through background color shifts.
*   **Method:** A `surface-container-low` section sitting on a `background` surface creates a natural, soft edge. Use vertical whitespace (from our spacing scale) to create breathing room instead of dividers.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers, like stacked sheets of fine, heavy-stock paper.
*   **The Base:** `surface` (#f4fbf4) or `background`.
*   **The Content Layer:** `surface-container-lowest` (#ffffff) for primary cards.
*   **The Inset Layer:** `surface-container-high` (#e3eae3) for secondary metadata or utility areas.

### The "Glass & Gradient" Rule
To elevate the experience beyond "standard medical UI," use **Glassmorphism** for floating elements (e.g., navigation bars, floating action buttons).
*   **Implementation:** Use semi-transparent surface colors with a `backdrop-blur` (12px–20px). 
*   **Signature Textures:** For high-impact CTAs, use a subtle linear gradient transitioning from `primary` (#006c49) to `primary-container` (#10b981). This adds a "soul" to the color that flat hex codes cannot achieve.

---

## 3. Typography: The Editorial Voice
We use a dual-font strategy to balance authority with approachability.

*   **Display & Headlines (Plus Jakarta Sans):** These are our "Editorial" voices. Use `display-lg` and `headline-md` with tighter letter-spacing (-0.02em) to create an authoritative, premium feel.
*   **Body & Labels (Inter):** These are our "Functional" voices. Inter provides exceptional legibility at small scales. 
*   **Hierarchy as Identity:** By using a massive scale difference between `display-lg` (3.5rem) and `body-md` (0.875rem), we create an intentional, high-end look that feels designed, not just "populated."

---

## 4. Elevation & Depth
Traditional drop shadows are too "digital." We utilize **Tonal Layering** and **Ambient Light**.

*   **The Layering Principle:** Depth is achieved by "stacking." Place a `surface-container-lowest` card on a `surface-container-low` section. The slight delta in hex value creates a soft, natural lift.
*   **Ambient Shadows:** If a shadow is required for a floating state (e.g., a modal), it must be extra-diffused. 
    *   *Shadow Token:* `box-shadow: 0 20px 40px rgba(15, 23, 42, 0.06);` 
    *   The shadow color is a low-opacity version of our `on-surface` (#161d19), mimicking natural light.
*   **The "Ghost Border" Fallback:** If a border is essential for accessibility (e.g., input fields), use the `outline-variant` token at **20% opacity**. Never use 100% opaque, high-contrast borders.

---

## 5. Components

### Buttons
*   **Primary:** High-pill shape (rounding: `full`). Use the signature gradient (Primary to Primary-Container). Text should be `label-md` uppercase with slight tracking.
*   **Secondary:** `surface-container-highest` background with `on-surface` text. No border.
*   **Tertiary (Accent):** Reserved for critical patient actions. Use `tertiary-container` (#ce9a00) to draw immediate attention.

### Cards & Lists
*   **Rule:** Forbid all divider lines.
*   **Structure:** Use a `2xl` (1rem) or `lg` (2rem) corner radius. Content inside cards should have generous padding (minimum 24px). Separate list items using a 4px or 8px vertical gap rather than a line.

### Inputs
*   **Style:** `surface-container-low` background. On focus, transition the background to `surface-container-lowest` and apply a "Ghost Border" of the `primary` color at 30% opacity.

### Navigation (The Floating Bar)
*   Instead of a pinned header, use a floating navigation bar with a `surface-container-lowest` background at 80% opacity and a heavy `backdrop-blur`. This makes the medical experience feel modern and agile.

### Lucide React Icons
*   **Usage:** Use a `1.5px` stroke width. Icons should always be paired with `primary` or `secondary` colors. Never use icons as purely decorative; they must assist in wayfinding.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical layouts. A header that is left-aligned with a large right-side gutter creates a premium, editorial feel.
*   **Do** use `primary-fixed-dim` for subtle background highlights behind important medical data.
*   **Do** embrace "Overlapping Elements." Allow a card to slightly overlap a hero image or a background color block to create physical depth.

### Don’t:
*   **Don’t** use pure black (#000000). Use `on-surface` (#161d19) for all text to maintain the "restorative" softness.
*   **Don’t** use the `2xl` radius on small elements like checkboxes; scale down to `sm` or `md` to maintain visual proportion.
*   **Don’t** crowd the screen. If you feel like you need a divider line, you actually need more white space.