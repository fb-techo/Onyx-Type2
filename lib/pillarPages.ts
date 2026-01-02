// Pillar page data
export interface PillarSolution {
  title: string
  description: string
  href: string
  icon: React.ReactNode
}

export interface PillarPageData {
  slug: string
  title: string
  description: string
  overviewTitle: string
  overview: string[]
  solutionsDescription: string
  solutions: PillarSolution[]
  icon: React.ReactNode
}

const posIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
    <line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
)

const mobileIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
)

const printerIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
    <line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
)

const gridIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <line x1="9" y1="3" x2="9" y2="21"/>
  </svg>
)

const rfidIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
    <line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
)

const scannerIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
    <path d="M3 6h18"/>
  </svg>
)

const eslIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <line x1="9" y1="3" x2="9" y2="21"/>
  </svg>
)

export const pillarPages: PillarPageData[] = [
  {
    slug: 'operational-efficiency',
    title: 'Operational Efficiency',
    description: 'Streamline retail operations with automated systems and intelligent workflows that reduce costs, save time, and optimize resource utilization across your entire retail ecosystem.',
    overviewTitle: 'Transforming Retail Operations',
    overview: [
      'Operational efficiency lies at the heart of successful retail operations. Smart Retail\'s comprehensive technology solutions automate routine tasks, eliminate manual errors, and create intelligent workflows that adapt to your business needs.',
      'Our integrated platform connects every aspect of your retail operation—from point-of-sale transactions to warehouse fulfillment—creating a seamless flow of data and processes that drive productivity and reduce operational overhead.',
      'By implementing Smart Retail solutions, retailers typically see significant improvements in transaction processing speed, staff productivity, and overall operational costs, enabling them to focus resources on growth and customer experience.'
    ],
    solutionsDescription: 'Technology solutions that drive operational efficiency',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    solutions: [
      { title: 'Hybrid POS Systems', description: 'Unified point-of-sale systems that seamlessly handle online and in-store transactions, reducing complexity and improving transaction speed.', href: '/products/hybrid-pos', icon: posIcon },
      { title: 'Self-Checkout Kiosks', description: 'Reduce checkout queues and optimize staff allocation with intuitive self-service options that increase transaction throughput.', href: '/products/self-checkout-kiosks', icon: posIcon },
      { title: 'Handheld POS', description: 'Mobile point-of-sale devices enable flexible checkout anywhere in the store, improving customer service and reducing wait times.', href: '/products/handheld-pos', icon: mobileIcon },
      { title: 'Barcode Printers', description: 'High-speed label printing solutions streamline product labeling and inventory management processes.', href: '/products/barcode-printers', icon: printerIcon },
      { title: 'WMS Integrations', description: 'Seamless integration with warehouse management systems creates end-to-end operational visibility and efficiency.', href: '/products/wms-integrations', icon: gridIcon },
      { title: 'Dark Store Automation', description: 'Automated picking and fulfillment systems optimize dark store operations for maximum efficiency.', href: '/products/dark-store-picking-automation', icon: gridIcon }
    ]
  },
  {
    slug: 'inventory-accuracy',
    title: 'Inventory Accuracy',
    description: 'Achieve real-time inventory visibility with advanced RFID and barcode technology that ensures accurate stock levels, reduces shrinkage, and enables data-driven inventory management decisions.',
    overviewTitle: 'Real-Time Inventory Visibility',
    overview: [
      'Inventory accuracy is critical for retail success. Smart Retail\'s comprehensive tracking solutions provide real-time visibility into stock levels across all locations, from store shelves to warehouse facilities.',
      'Our RFID and barcode technology solutions enable retailers to track inventory movement automatically, eliminate manual counting errors, and identify discrepancies instantly. This real-time data powers intelligent replenishment systems and prevents stockouts or overstock situations.',
      'With Smart Retail\'s inventory tracking solutions, retailers typically achieve inventory accuracy rates above 99%, significantly reducing shrinkage, improving customer satisfaction through better product availability, and optimizing inventory investment.'
    ],
    solutionsDescription: 'Technology solutions for accurate inventory tracking',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/>
        <path d="M18 7L9 16l-5-5"/>
      </svg>
    ),
    solutions: [
      { title: 'RFID Antennas', description: 'High-performance RFID antennas provide reliable tag reading across your entire store or warehouse, enabling automatic inventory tracking.', href: '/products/rfid-antennas', icon: rfidIcon },
      { title: 'Handheld PDTs', description: 'Portable data terminals in phone and gun styles enable efficient inventory management, stock-taking, and real-time data capture.', href: '/products/handheld-pdts', icon: mobileIcon },
      { title: 'RFID Labels', description: 'Durable RFID tags and labels provide reliable item-level tracking for accurate inventory management across all product categories.', href: '/products/rfid-labels', icon: gridIcon },
      { title: 'RFID Tunnels', description: 'Automated RFID reading systems enable high-volume inventory processing with minimal manual intervention.', href: '/products/rfid-tunnels', icon: gridIcon },
      { title: 'Handheld Scanners', description: 'Portable barcode scanners provide flexible inventory tracking and stock-taking capabilities throughout your store.', href: '/products/handheld-scanner', icon: scannerIcon },
      { title: 'Barcode Printers', description: 'Professional barcode printing solutions ensure accurate product labeling and inventory identification.', href: '/products/barcode-printers', icon: printerIcon }
    ]
  },
  {
    slug: 'customer-journey',
    title: 'Customer Journey',
    description: 'Enhance shopping experiences with modern technology that provides seamless self-service, personalized interactions, and intuitive store navigation, creating memorable customer experiences at every touchpoint.',
    overviewTitle: 'Transforming the Shopping Experience',
    overview: [
      'The modern customer journey extends far beyond simple transactions. Smart Retail\'s customer experience solutions create seamless, engaging interactions that delight customers and build loyalty through convenience and personalization.',
      'From self-checkout kiosks that eliminate wait times to smart mirrors that enable virtual try-ons, our technology solutions transform traditional shopping into an interactive, efficient, and enjoyable experience. Digital shelf labels provide instant price information, while smart trolleys guide customers and enable self-checkout.',
      'Retailers implementing Smart Retail\'s customer journey solutions typically see increased customer satisfaction scores, higher transaction values, and improved customer retention. By meeting modern customer expectations for speed, convenience, and personalization, retailers create competitive advantages that drive growth.'
    ],
    solutionsDescription: 'Technology solutions that enhance customer experience',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
        <path d="M3 6h18"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
    solutions: [
      { title: 'Self-Checkout Kiosks', description: 'Intuitive self-service checkout options that reduce wait times and give customers control over their shopping experience.', href: '/products/self-checkout-kiosks', icon: posIcon },
      { title: 'Smart Trolleys', description: 'Shopping carts with integrated screens provide navigation, product information, and self-checkout capabilities for a seamless experience.', href: '/products/smart-trolleys', icon: mobileIcon },
      { title: 'Electronic Shelf Labels', description: 'Digital price displays provide instant price updates and product information, enhancing transparency and customer trust.', href: '/products/electronic-shelf-labels', icon: eslIcon },
      { title: 'Price Checkers', description: 'Customer-facing price verification systems enable self-service price checking and product information lookup.', href: '/products/price-checkers', icon: posIcon },
      { title: 'Smart Mirrors', description: 'Interactive mirror displays enable virtual try-ons and personalized product recommendations, creating engaging shopping experiences.', href: '/products/smart-mirrors', icon: gridIcon },
      { title: 'Customer Viewing Screens', description: 'Customer-facing displays show transaction details and product information, building trust and improving service transparency.', href: '/products/customer-viewing-screen', icon: posIcon }
    ]
  }
]

export function getPillarBySlug(slug: string): PillarPageData | undefined {
  return pillarPages.find(p => p.slug === slug)
}

