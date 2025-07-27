
# React Styled Components Showcase

This project demonstrates a wide variety of concepts and patterns using [styled-components](https://styled-components.com/) in React.

## Concepts Covered

### 1. Basic Styled Components
- Creating styled elements (e.g., `Button`, `Banner`, `Card`).
- Using template literals for CSS-in-JS.

### 2. Component Extension
- Extending base styled components to create variants (e.g., `FancyButton`, `FancyBtn`).

### 3. Pseudo-classes & Transitions
- Styling for `:hover` states.
- Adding CSS transitions for smooth effects.

### 4. Props-based Styling
- Dynamically changing styles based on props (including transient props like `$variant`).

### 5. Transient Props
- Using `$` prefix to prevent props from being passed to the DOM.

### 6. Component Composition
- Composing multiple styled components together (e.g., `ProfileCard`, `ProductCard`).

### 7. Custom Components
- Building structured UI components:
  - ProfileCard
  - ProductCard
  - NotificationBanner
  - PricingTableItem
  - TestimonialCard
  - AlertBox
  - UserBadge
  - Tag
  - ProgressBar
  - StatsCard

### 8. Conditional Styling
- Styling based on prop values (e.g., `AlertBox` type).

### 9. Responsive Layouts (Demo)
- Using flexbox and wrapping for layout sections.

### 10. Passing Props to Child Elements
- Using props to set attributes/content for child elements (e.g., `src`, `alt`, etc.).

### 11. Theming (Suggested for Extension)
- The project is ready for adding global themes using `ThemeProvider`.

### 12. Accessibility
- Using semantic HTML elements and attributes (e.g., `alt` for images, `aria` roles can be added).

## How to Use

- Explore each section in `App.jsx` to see the usage and structure of each component.
- Modify or extend components to experiment with new patterns.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

---

Feel free to extend this app with more styled component features, such as theming, global styles, or animations!
