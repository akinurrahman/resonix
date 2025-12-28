# Resonix - Official Brand Website

A modern, single-page website showcasing Resonix's digital agency services, built with Next.js, TypeScript, and Tailwind CSS.

## 🏗️ Architecture

This feature follows the project's architectural guidelines with strict separation of concerns:

### Directory Structure

```
src/features/resonix/
├── components/          # Presentational components only
│   ├── navbar.tsx
│   ├── hero-section.tsx
│   ├── about-section.tsx
│   ├── services-section.tsx
│   ├── works-section.tsx
│   ├── clients-section.tsx
│   ├── reviews-section.tsx
│   ├── team-section.tsx
│   ├── contact-section.tsx
│   └── footer.tsx
├── hooks/              # Business logic
│   └── use-contact-form.ts
├── constants.ts        # Static content and configuration
├── types.ts           # TypeScript interfaces
├── validators.ts      # Zod schemas
└── index.ts           # Public exports

src/app/resonix/
├── layout.tsx         # Page metadata and layout
└── page.tsx          # Main composition
```

## ✨ Features

### Sections

1. **Navigation Bar**
   - Sticky header with smooth scroll navigation
   - Mobile-responsive hamburger menu
   - Call-to-action button

2. **Hero Section**
   - Compelling headline and description
   - Dual CTAs (Request Demo / View Work)
   - Trust indicators
   - Scroll indicator

3. **About Section**
   - Agency overview and mission
   - Key value propositions
   - Statistics display

4. **Services Section**
   - 6 service cards with descriptions
   - Hover effects and interactions
   - Grid layout (responsive)

5. **Works/Portfolio Section**
   - Project showcase with categories
   - Hover states with overlay
   - Modal-ready structure

6. **Clients Section**
   - Client logos/names display
   - Trust statement

7. **Reviews/Testimonials**
   - Interactive testimonial slider
   - Navigation controls and dots
   - Author information display

8. **Team Section**
   - Team member cards
   - Social links placeholders
   - Professional layout

9. **Contact Section**
   - Validated contact form (React Hook Form + Zod)
   - Contact information display
   - Business hours
   - Success/error feedback

10. **Footer**
    - Brand information
    - Quick navigation links
    - Contact details
    - Social media links
    - Copyright notice

## 🎨 Design Principles

- **Minimal & Clean**: Focused on content with generous white space
- **Material Design Inspired**: Smooth transitions and elevation
- **Mobile-First**: Fully responsive across all devices
- **Accessible**: Semantic HTML and ARIA labels
- **Performance**: Optimized for fast loading

## 🔧 Technical Implementation

### State Management
- Local component state for UI interactions
- Custom hooks for business logic (form handling)
- Props-based data flow (no prop drilling)

### Form Handling
- React Hook Form for form state management
- Zod for schema validation
- Custom `useContactForm` hook encapsulates all logic
- Contact section receives form state via props

### Styling
- Tailwind CSS utility classes
- Follows shadcn's global.css design system
- Consistent spacing and typography scale
- Dark mode ready (via CSS variables)

### Navigation
- Smooth scroll behavior with `scroll-behavior: smooth`
- Hash-based section navigation
- Scroll padding for fixed header compensation

## 📝 Data Management

All static content is centralized in `constants.ts`:
- Navigation links
- Services data
- Projects/works
- Client information
- Testimonials
- Team members
- Contact information
- Brand details

## 🚀 Usage

Visit the page at `/resonix` to see the complete website.

### Customization

1. **Update Content**: Edit `src/features/resonix/constants.ts`
2. **Modify Styling**: Adjust Tailwind classes in component files
3. **Add New Section**: Create component in `components/`, add to page composition
4. **Change Validation**: Update schemas in `validators.ts`

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- High contrast ratios

## 🔄 Future Enhancements

- Add animation library (Framer Motion) for advanced transitions
- Implement actual backend API for form submission
- Add image optimization with Next.js Image component
- Include blog/insights section
- Add CMS integration for content management
- Implement analytics tracking

## 📞 Contact Information

- Address: Bilasipara, Dhubri, Assam - 783348
- Phone: 7086978159, 9395474749, 7099119857
- Email: team@resonix.com

---

**Built with** ❤️ **following clean architecture principles**
