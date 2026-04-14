# Design System Strategy: The Modern Editorialist

## 1. Overview & Creative North Star: "The Digital Curator"
The "Digital Curator" philosophy moves away from the rigid, grid-locked structures of traditional news sites and toward a fluid, high-end editorial experience. We are moving from "boxed-in" to "layered-on." 

**The Creative North Star:** This system should feel like a premium physical magazine—think *Kinfolk* or *The New Yorker*—translated for a high-performance digital era. We achieve this by breaking the "template" look through intentional asymmetry, generous whitespace (negative space as a luxury), and a radical departure from structural lines. By utilizing soft, organic radii and tonal depth, we create a tactile environment that feels intentional, premium, and authoritative without being cold.

---

## 2. Colors: Tonal Depth over Structural Borders
Color in this system is not just decorative; it is the primary tool for spatial organization.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section content. Boundaries must be defined solely through:
1.  **Background Color Shifts:** A `surface-container-low` section sitting on a `surface` background.
2.  **Subtle Tonal Transitions:** Using the `surface` palette to imply hierarchy.
3.  **Whitespace:** Using the spacing scale to create "islands" of content.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine, heavy-stock paper. 
- **The Base:** Use `surface` (#fbf9f7) as the canvas.
- **The Inset:** Use `surface-container-low` for large content areas.
- **The Emphasis:** Place `surface-container-lowest` (pure #ffffff) cards on top of `surface-container-low` to create a soft, natural lift.

### Signature Textures & Glass
- **The Gradient Soul:** For main CTAs and hero headers, utilize a subtle linear gradient from `primary` (#a20513) to `primary-container` (#c62828). This adds a "lithographic" quality that flat hex codes lack.
- **Glassmorphism:** For floating navigation or modals, use `surface` at 80% opacity with a `24px` backdrop-blur. This ensures the editorial background "bleeds" through, maintaining a cohesive narrative.

---

## 3. Typography: Authority Meets Modernity
The interplay between the authoritative Newsreader serif and the functional Manrope sans-serif creates a dialogue between tradition and the future.

- **Display & Headlines (Newsreader):** Use these to establish the "Voice." Large, expressive type should often be placed with asymmetrical margins to break the vertical rhythm.
- **Titles & Body (Manrope):** These serve as the "Engine." Manrope’s geometric but friendly nature balances the weight of the serif.
- **Hierarchy of Identity:** 
    - `display-lg` (3.5rem) is for "The Statement."
    - `headline-md` (1.75rem) is for "The Narrative."
    - `body-lg` (1rem) is for "The Context," optimized with a slightly wider line-height (1.6) for readability.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "digital." We seek an "Ambient Glow."

- **The Layering Principle:** Depth is achieved by stacking `surface-container` tiers. 
    - *Example:* A `surface-container-highest` navigation bar over a `surface-bright` header.
- **Ambient Shadows:** When a float is required (e.g., a primary CTA button), use an extra-diffused shadow:
    - `y: 8px, blur: 24px, color: rgba(91, 64, 61, 0.08)` (using the `on-surface-variant` for the shadow tint).
- **The "Ghost Border" Fallback:** If a border is essential for accessibility, it must be the `outline-variant` (#e4beba) at **15% opacity**. Never use 100% opaque lines.
- **Organic Softness:** Apply `md` (0.75rem/12px) to `lg` (1rem/16px) radii to all containers. The `xl` (1.5rem) radius should be reserved for image containers to give them a "gallery frame" feel.

---

## 5. Components: Fluidity in Form

### Buttons
- **Primary:** High-contrast `primary` background, `on-primary` text, `md` (12px) corner radius. Use the signature gradient for depth.
- **Secondary:** `surface-container-high` background with `on-surface` text. No border.
- **Tertiary:** Text-only in `primary` weight, but with a `surface-variant` hover state that blooms from the center.

### Cards & Lists
- **The "No-Divider" Rule:** Forbid 1px divider lines. Separate list items using `16px` of vertical whitespace or a alternating `surface-container-low` background on hover.
- **Cards:** Use `lg` (16px) rounding. Images within cards must bleed to the top edges but maintain the same corner radius at the top.

### Input Fields
- **Styling:** Soft-filled containers using `surface-container-highest`. 
- **States:** On focus, transition the background to `surface-lowest` and add a 2px "Ghost Border" using `primary` at 20% opacity.

### Featured Editorial Component (The "Hero Plate")
A custom component: A large `xl` (24px) rounded image container with a caption floating in a `surface` glassmorphism box that overlaps the bottom-left corner of the image. This breaks the grid and feels "custom-built."

---

## 6. Do’s and Don’ts

### Do:
- **Embrace Asymmetry:** Align a headline to the left but the subtext to a narrower center-column to create visual tension.
- **Use "White Space as Content":** Treat empty space as a premium element that guides the eye.
- **Apply Tonal Nesting:** Place lighter surfaces on darker ones to create natural hierarchy.

### Don’t:
- **Don't use #000000:** Always use `on-surface` (#1b1c1b) for text to maintain the soft editorial warmth.
- **Don't use default 4px rounding:** It feels "tech-standard." Stick to `md` (12px) or higher for that organic, designer feel.
- **Don't use hard separators:** If you feel the need to draw a line, try adding 24px of padding instead.
- **Don't trap content:** Avoid "boxing" sections. Let images and text breathe against the edges of the viewport where appropriate.

---

## 7. Design Tokens Reference

| Token | Value | Application |
| :--- | :--- | :--- |
| **Radius-Soft** | `0.75rem (12px)` | Standard Buttons, Chips, Inputs |
| **Radius-Organic** | `1.0rem (16px)` | Cards, Modals, Overlays |
| **Radius-Gallery** | `1.5rem (24px)` | Hero Images, Featured Sections |
| **Shadow-Ambient** | `0 12px 32px -4px` | Floating elements (8% Opacity) |
| **Surface-Base** | `#fbf9f7` | Main page background |
| **Accent-Primary** | `#c62828` | Key editorial calls-to-action |