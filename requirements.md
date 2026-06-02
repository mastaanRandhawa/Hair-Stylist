# Design System & UI Requirements

## Design Inspiration

The website design should closely follow the visual style shown in the provided reference image.

### Key Characteristics to Replicate

#### Overall Aesthetic

* Luxury salon and beauty brand feel.
* Editorial magazine-inspired layout.
* High-end, sophisticated, and modern.
* Strong typography-driven design.
* Large imagery combined with oversized headlines.
* Minimalistic but premium appearance.

---

## Color Palette

### Primary Colors

* Warm Cream / Ivory (#F4F1E8)
* Soft Beige (#EAE4D6)
* Muted Gold (#D8C86A)
* Charcoal Black (#1F1F1F)

### Secondary Colors

* Soft Gray (#D9D5CF)
* Warm White (#FAF8F2)

### Usage

* Backgrounds should primarily use cream and ivory tones.
* Accent sections should use muted gold.
* Text should primarily use charcoal black.
* Buttons should use gold backgrounds with dark text.
* Avoid bright colors and overly saturated gradients.

---

## Typography

### Headings

Use elegant serif fonts similar to:

* Playfair Display
* Cormorant Garamond
* Bodoni Moda

Characteristics:

* Large display text
* Editorial style
* High contrast serif fonts
* Luxury fashion magazine appearance

### Body Text

Use modern sans-serif fonts:

* Inter
* Poppins
* Manrope

Characteristics:

* Clean
* Readable
* Minimal

### Typography Hierarchy

Hero Heading:

* 72px–120px desktop
* 48px–64px tablet
* 36px–48px mobile

Section Headings:

* 40px–72px

Body Text:

* 16px–18px

---

## Layout Style

### Grid System

* Large whitespace
* Asymmetrical editorial layouts
* Multi-column sections
* Alternating image and content blocks

### Design Principles

* Content should feel spacious.
* Avoid cluttered sections.
* Use oversized typography.
* Use strong visual hierarchy.
* Images should be treated as major design elements.

---

## Components (Built Using 21st.dev)

All UI components should be sourced from or inspired by 21st.dev components.

### Required Components

#### Navigation Bar

* Transparent or cream background.
* Floating appearance.
* Rounded CTA button.

#### Hero Section

* Full-width image background.
* Large editorial typography overlay.
* Primary CTA button.

#### Service Cards

* Rounded corners.
* Soft shadows.
* Cream/gold styling.
* Hover animations.

#### Testimonials

* Modern card carousel.
* Elegant typography.

#### Gallery

* Masonry or editorial grid.
* Large image focus.

#### Stats Section

Examples:

* Years of Experience
* Happy Clients
* Services Offered

Styled similarly to the yellow feature cards in the reference.

#### Team Section

* Large stylist portraits.
* Editorial layout.
* Hover effects.

#### Contact Section

* Split layout.
* Contact form + location information.

#### Footer

* Minimal.
* Social media links.
* Business information.

---

## Animation Requirements

### Use Subtle Animations Only

Recommended:

* Fade in on scroll
* Text reveal animations
* Hover scaling
* Smooth page transitions

Avoid:

* Excessive motion
* Flashy effects
* Heavy parallax

---

## Technology Requirements

### Frontend

* React 19
* TypeScript
* Vite
* TailwindCSS

### Components

* 21st.dev components as primary UI source
* shadcn/ui where necessary
* Lucide Icons

### Styling

* TailwindCSS
* CSS variables for theme colors
* Responsive-first design

### Animation

* Framer Motion

---

## Page Structure

### Home

1. Editorial Hero Section
2. About Preview
3. Featured Services
4. Why Choose Us
5. Gallery Preview
6. Testimonials
7. Call To Action
8. Footer

### About

1. Hero Banner
2. Studio Story
3. Values
4. Team Section
5. Certifications
6. CTA

### Services

1. Services Hero
2. Service Categories
3. Pricing Overview
4. FAQ
5. CTA

### Gallery

1. Portfolio Grid
2. Before & After Showcase
3. Instagram CTA

### Contact

1. Contact Information
2. Form
3. Map
4. Social Links

---

## Future Enhancements

Phase 2:

* Online booking
* Appointment management
* Client portal
* Product store
* Loyalty program

Phase 3:

* Membership subscriptions
* Automated marketing integrations
* Gift cards
* SMS notifications

---

## Acceptance Criteria

The final website must:

* Match the luxury editorial aesthetic of the provided reference.
* Be fully responsive.
* Achieve Lighthouse scores above 90.
* Load quickly on mobile devices.
* Use React + TypeScript.
* Utilize 21st.dev components wherever applicable.
* Be structured for future booking system integration.
* Reflect a premium salon brand experience.
