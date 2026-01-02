// Product page metadata
export interface ProductPageData {
  slug: string
  title: string
  description: string
  icon: string
}

export const productPages: ProductPageData[] = [
  { slug: 'regular-pos', title: 'Regular POS', description: 'Standard point-of-sale systems designed for manned checkout counters', icon: 'pos' },
  { slug: 'handheld-pos', title: 'Handheld POS', description: 'Mobile point-of-sale systems for flexible checkout anywhere in the store', icon: 'mobile' },
  { slug: 'hybrid-pos', title: 'Hybrid POS', description: 'Versatile POS systems combining traditional and mobile capabilities', icon: 'hybrid' },
  { slug: 'self-checkout-kiosks', title: 'Self-Checkout Kiosks', description: 'Automated checkout solutions for customer self-service', icon: 'kiosk' },
  { slug: 'barcode-printers', title: 'Barcode Printers', description: 'Professional barcode printing solutions for retail operations', icon: 'printer' },
  { slug: 'handheld-scanner', title: 'Handheld Scanners', description: 'Portable barcode scanning devices for inventory and checkout', icon: 'scanner' },
  { slug: 'price-checkers', title: 'Price Checkers', description: 'Customer-facing price verification and product information systems', icon: 'checker' },
  { slug: 'electronic-shelf-labels', title: 'Electronic Shelf Labels', description: 'Digital price displays for dynamic pricing and inventory management', icon: 'esl' },
  { slug: 'esl-management-software', title: 'ESL Management Software', description: 'Software solutions for managing electronic shelf label networks', icon: 'software' },
  { slug: 'rfid-labels', title: 'RFID Labels', description: 'RFID tags and labels for advanced inventory tracking', icon: 'rfid' },
  { slug: 'rfid-antennas', title: 'RFID Antennas', description: 'RFID antenna systems for reliable tag reading and tracking', icon: 'antenna' },
  { slug: 'rfid-tunnels', title: 'RFID Tunnels', description: 'Automated RFID reading systems for high-volume inventory processing', icon: 'tunnel' },
  { slug: 'regular-labels', title: 'Regular Labels', description: 'Standard barcode and product labeling solutions', icon: 'label' },
  { slug: 'liner-less-labels', title: 'Liner-less Labels', description: 'Eco-friendly label solutions without backing paper', icon: 'linerless' },
  { slug: 'printer-rolls', title: 'Printer Rolls', description: 'Thermal printer rolls and supplies for receipt and label printing', icon: 'roll' },
  { slug: 'pocket-printers', title: 'Pocket Printers', description: 'Compact portable printers for on-the-go label printing', icon: 'pocket' },
  { slug: 'pos-with-weighing-scales', title: 'POS with Weighing Scales', description: 'Integrated POS systems with built-in weighing capabilities', icon: 'scale' },
  { slug: 'ai-powered-weighing-scales', title: 'AI-Powered Weighing Scales', description: 'Smart weighing scales with AI-powered product recognition', icon: 'ai-scale' },
  { slug: 'handheld-pdts', title: 'Handheld PDTs', description: 'Portable data terminals for inventory management and data collection', icon: 'pdt' },
  { slug: 'people-counters', title: 'People Counters', description: 'Foot traffic monitoring and customer analytics systems', icon: 'counter' },
  { slug: 'customer-viewing-screen', title: 'Customer Viewing Screens', description: 'Customer-facing displays for transaction and product information', icon: 'screen' },
  { slug: 'information-screens', title: 'Information Screens', description: 'Digital signage and information display systems', icon: 'info' },
  { slug: 'smart-mirrors', title: 'Smart Mirrors', description: 'Interactive mirror displays for enhanced customer experience', icon: 'mirror' },
  { slug: 'smart-trolleys', title: 'Smart Trolleys', description: 'Intelligent shopping carts with integrated technology', icon: 'trolley' },
  { slug: 'promotion-robots', title: 'Promotion Robots', description: 'Autonomous robots for in-store promotions and customer assistance', icon: 'robot' },
  { slug: 'dark-store-picking-automation', title: 'Dark Store Picking Automation', description: 'Automated picking systems for dark store operations', icon: 'automation' },
  { slug: 'bed-scanner', title: 'Bed Scanners', description: 'Scanning systems for bed and furniture retail operations', icon: 'bed' },
  { slug: 'wms-integrations', title: 'WMS Integrations', description: 'Warehouse management system integrations for seamless operations', icon: 'wms' },
  { slug: 'smart-retail-intelligence', title: 'Smart Retail Intelligence', description: 'AI-powered analytics and intelligence solutions for retail', icon: 'intelligence' },
]

export function getProductBySlug(slug: string): ProductPageData | undefined {
  return productPages.find(p => p.slug === slug)
}

