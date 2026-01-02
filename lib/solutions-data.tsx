import React from 'react'

export interface SolutionItem {
  title: string
  description: string
  href: string
}

export interface SolutionCategory {
  title: string
  icon: React.ReactNode
  items: SolutionItem[]
  featured?: boolean
}

export const essentialSolutions: SolutionCategory[] = [
  {
    title: 'Core POS Systems',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
        <line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    items: [
      { title: 'Standard POS Systems', description: 'Reliable checkout systems that never let you down', href: '/products/regular-pos' },
      { title: 'Flexible POS Systems', description: 'Switch between staffed counter and self-checkout instantly', href: '/products/hybrid-pos' },
      { title: 'Self-Checkout Kiosks', description: 'Let customers checkout themselves—reduce queues, increase throughput', href: '/products/self-checkout-kiosks' },
      { title: 'Mobile POS Devices', description: 'Checkout anywhere in the store—no waiting at counters', href: '/products/handheld-pos' },
    ],
    featured: true
  },
  {
    title: 'Weighing Solutions',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <line x1="9" y1="3" x2="9" y2="21"/>
        <line x1="3" y1="9" x2="21" y2="9"/>
      </svg>
    ),
    items: [
      { title: 'POS with Scales', description: 'Perfect for produce, meat, deli—weigh and price in one step', href: '/products/pos-with-weighing-scales' },
      { title: 'Smart Scales with AI', description: 'Scales that recognize products automatically—zero training needed', href: '/products/ai-powered-weighing-scales' },
    ],
    featured: true
  },
  {
    title: 'Scanning & Display',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
        <line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    items: [
      { title: 'Fixed Barcode Scanners', description: 'Fast, reliable scanning built into your counter', href: '/products/bed-scanner' },
      { title: 'Handheld Scanners', description: 'Scan items anywhere—flexible and portable', href: '/products/handheld-scanner' },
      { title: 'Customer Display Screens', description: 'Let customers see prices and totals—builds trust and reduces disputes', href: '/products/customer-viewing-screen' },
    ],
    featured: true
  },
  {
    title: 'Inventory & Labeling',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    items: [
      { title: 'RFID Tracking Systems', description: 'Know exactly what you have, where it is, in real-time', href: '/products/rfid-antennas' },
      { title: 'Inventory Scanners', description: 'Count stock fast with portable scanning devices', href: '/products/handheld-pdts' },
      { title: 'Bulk Scanning Systems', description: 'Scan entire shipments in seconds—no manual counting', href: '/products/rfid-tunnels' },
      { title: 'Label Printers', description: 'Print professional barcode labels on-demand', href: '/products/barcode-printers' },
      { title: 'Portable Label Printers', description: 'Print shelf labels and invoices anywhere in the store', href: '/products/pocket-printers' },
    ],
    featured: true
  }
]

export const featuredSolution = {
  title: 'Smart Retail Intelligence',
  icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>
  ),
  items: [
    {
      title: 'Integrated Traffic Analytics & Dynamic Pricing',
      description: 'Combine People Counting with Electronic Shelf Labels for real-time optimization. Maximize revenue, reduce costs, and improve conversion rates with data-driven insights.',
      href: '/products/smart-retail-intelligence'
    }
  ]
}

export const advancedSolutions: SolutionCategory[] = [
  {
    title: 'Big Box Retailers & Grocers',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <line x1="9" y1="3" x2="9" y2="21"/>
      </svg>
    ),
    items: [
      { title: 'Electronic Shelf Labels', description: 'Change prices instantly across all stores—no more paper tags', href: '/products/electronic-shelf-labels' },
      { title: 'Price Management Software', description: 'Update prices from one dashboard—saves hours every week', href: '/products/esl-management-software' },
      { title: 'Price Check Stations', description: 'Customers check prices themselves—fewer questions, happier shoppers', href: '/products/price-checkers' },
      { title: 'Smart Shopping Carts', description: 'Customers find products faster with built-in navigation and promotions', href: '/products/smart-trolleys' },
      { title: 'Store Assistant Robots', description: 'Robots that help customers and promote products—always available, never tired', href: '/products/promotion-robots' },
      { title: 'Customer Traffic Analytics', description: 'Know when to schedule staff—optimize labor costs based on real data', href: '/products/people-counters' },
      { title: 'Digital Signage', description: 'Promote products and share information—update content instantly', href: '/products/information-screens' },
      { title: 'Smart Retail Intelligence', description: 'Integrated platform combining traffic analytics with dynamic pricing—maximize revenue and optimize operations', href: '/products/smart-retail-intelligence' },
    ]
  },
  {
    title: 'Apparel & Luxury Brands',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    items: [
      { title: 'Electronic Shelf Labels', description: 'Change prices instantly across all stores—no more paper tags', href: '/products/electronic-shelf-labels' },
      { title: 'Price Management Software', description: 'Update prices from one dashboard—saves hours every week', href: '/products/esl-management-software' },
      { title: 'Interactive Fitting Rooms', description: 'Try on different sizes and colors without leaving the fitting room', href: '/products/smart-mirrors' },
      { title: 'Smart Retail Intelligence', description: 'Integrated platform combining traffic analytics with dynamic pricing—maximize revenue and optimize operations', href: '/products/smart-retail-intelligence' },
      { title: 'Customer Traffic Analytics', description: 'Know when to schedule staff—optimize labor costs based on real data', href: '/products/people-counters' },
    ]
  },
  {
    title: 'Warehouse & E-commerce',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="7.5 4.21 12 6.81 16.5 4.21"/>
        <polyline points="7.5 19.79 7.5 14.6 3 12"/>
        <polyline points="21 12 16.5 14.6 16.5 19.79"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    items: [
      { title: 'Automated Order Picking', description: 'Fulfill online orders faster and more accurately with automated systems', href: '/products/dark-store-picking-automation' },
      { title: 'Warehouse Management', description: 'Connect your store inventory with warehouse systems—full visibility', href: '/products/wms-integrations' },
      { title: 'Eco-Friendly Labels', description: 'Reduce waste and costs with liner-less label technology', href: '/products/liner-less-labels' },
      { title: 'Standard Labels', description: 'High-quality thermal labels for everyday use', href: '/products/regular-labels' },
      { title: 'RFID Labels', description: 'Print and encode RFID tags in one step—complete inventory tracking', href: '/products/rfid-labels' },
      { title: 'Printer Paper & Rolls', description: 'Keep your printers running—quality supplies you can rely on', href: '/products/printer-rolls' },
    ]
  },
  {
    title: 'Pharmacy Chains',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    items: [
      { title: 'Electronic Shelf Labels', description: 'Change prices instantly across all stores—no more paper tags', href: '/products/electronic-shelf-labels' },
      { title: 'Price Management Software', description: 'Update prices from one dashboard—saves hours every week', href: '/products/esl-management-software' },
      { title: 'Standard Labels', description: 'High-quality thermal labels for medication labeling', href: '/products/regular-labels' },
      { title: 'RFID Labels', description: 'Print and encode RFID tags for precise medication tracking', href: '/products/rfid-labels' },
      { title: 'Printer Paper & Rolls', description: 'Keep your printers running—quality supplies you can rely on', href: '/products/printer-rolls' },
    ]
  }
]

