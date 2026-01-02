# Smart Retail - Next.js Website

This website has been restructured to use Next.js 14 with React and TypeScript.

## Project Structure

```
/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── [slug]/            # Dynamic product pages
│   │   └── page.tsx      # Product page template
│   ├── small-stores/      # Small stores industry page
│   ├── operational-efficiency/  # Pillar page
│   ├── inventory-accuracy/      # Pillar page
│   └── customer-journey/       # Pillar page
├── components/            # React components
│   ├── Nav.tsx           # Navigation component
│   ├── Footer.tsx        # Footer component
│   ├── ClientLayout.tsx  # Client-side layout with hooks
│   ├── Hero.tsx          # Hero section
│   ├── Pillars.tsx       # Three pillars section
│   ├── Overview.tsx      # Overview section
│   ├── Solutions.tsx     # Solutions section
│   ├── Industries.tsx    # Industries section
│   ├── Contact.tsx       # Contact form
│   └── ContactForm.tsx   # Reusable contact form component
├── lib/                   # Utilities and data
│   ├── solutions-data.ts  # Solutions data structure
│   ├── productPages.ts    # Product page metadata
│   └── hooks.ts           # React hooks (smooth scroll, fade-in)
├── styles.css            # Original CSS (kept for reference)
└── package.json          # Dependencies

```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Key Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **React Components** for reusable UI
- **Server-Side Rendering** for better SEO
- **Static Generation** for optimal performance

## Features Implemented

- ✅ **Dynamic Product Pages**: All 30+ product pages accessible via `/[slug]` routing
- ✅ **Pillar Pages**: Three pillar pages (operational-efficiency, inventory-accuracy, customer-journey)
- ✅ **Industry Pages**: Small stores page with specialized content
- ✅ **React Hooks**: Smooth scrolling and fade-in animations converted from vanilla JS
- ✅ **Form Handling**: Contact forms with React state management
- ✅ **Mobile Navigation**: Responsive mobile menu with body scroll prevention
- ✅ **TypeScript**: Full type safety across all components

## Next Steps (Optional Enhancements)

1. **Add SEO Metadata**: 
   - Add dynamic metadata to each product page
   - Add Open Graph tags for social sharing

2. **Optimize Images**: 
   - Use Next.js Image component for better performance
   - Set up image optimization

3. **Form Backend Integration**: 
   - Connect contact form to backend/API
   - Add form validation and error handling

4. **Content Management**: 
   - Extract product page content from HTML files
   - Create content management system or data files

## Migration Status

✅ Project setup (Next.js, TypeScript, config)
✅ Layout components (Nav, Footer, ClientLayout)
✅ Homepage components (Hero, Pillars, Overview, Solutions, Industries, Contact)
✅ CSS migration
✅ Product pages (Dynamic routing via `app/[slug]/page.tsx`)
✅ Pillar pages (operational-efficiency, inventory-accuracy, customer-journey)
✅ Small stores page
✅ JavaScript functionality converted to React hooks (smooth scroll, fade-in animations)
✅ Form handling with React

## Notes

- Original HTML files are preserved in the root directory
- CSS has been migrated to `app/globals.css`
- All components use TypeScript
- Navigation uses Next.js Link component for client-side routing

