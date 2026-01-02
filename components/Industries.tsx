import Link from 'next/link'

const industries = [
  {
    title: 'Small Stores & Groceries',
    description: 'Perfect for corner stores, neighborhood markets, and small grocers. Speed up checkout, track inventory, and manage produce pricing easily.',
    href: '/industries/small-stores',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&q=80',
    features: [
      'POS with built-in scales for produce and deli',
      'Simple inventory tracking so you never run out',
      'Fast barcode scanning for quick checkout',
      'Affordable packages starting under $2,000'
    ]
  },
  {
    title: 'Big Box Retailers & Grocers',
    description: 'Move customers through checkout faster. Reduce wait times. Increase throughput without adding staff.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&q=80',
    features: [
      'Self-checkout systems that handle high volume',
      'Flexible POS that adapts to peak hours',
      'Real-time inventory to prevent stockouts'
    ]
  },
  {
    title: 'Apparel & Luxury Brands',
    description: 'Create unforgettable shopping experiences. Track inventory accurately. Reduce theft and losses.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=400&fit=crop&q=80',
    features: [
      'Know exactly what\'s in stock and where it is',
      'Interactive fitting rooms that increase sales',
      'Price changes across all locations instantly'
    ]
  },
  {
    title: 'Warehouse & E-commerce',
    description: 'Fulfill orders faster and more accurately. Reduce shipping errors. Scale without hiring more pickers.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80',
    features: [
      'Automated order picking systems',
      'Bulk scanning that saves hours daily',
      'Connect store and warehouse inventory seamlessly'
    ]
  },
  {
    title: 'Pharmacy Chains',
    description: 'Update prices instantly across all locations. Track medications accurately. Stay compliant with regulations.',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop&q=80',
    features: [
      'Change prices across all stores in minutes',
      'Precise tracking for controlled substances',
      'Systems that meet healthcare compliance requirements'
    ]
  }
]

export default function Industries() {
  return (
    <section id="industries" className="industries">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Who We Help</span>
          <h2>Solutions Built For Your Business Type</h2>
          <p className="section-description">
            We understand that different stores have different needs. Here's how we help specific retail types solve their biggest challenges.
          </p>
        </div>
        <div className="industries-intro">
          <p>No matter what you sell or how big your operation, we have proven solutions that fit your specific challenges and goals.</p>
        </div>
        <div className="industry-grid">
          {industries.map((industry, idx) => {
            const content = (
              <div className="industry-item">
                <div className="industry-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={industry.image} alt={industry.title} loading="lazy" />
                </div>
                <div className="industry-content">
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                  <ul>
                    {industry.features.map((feature, fIdx) => (
                      <li key={fIdx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )

            return industry.href ? (
              <Link key={idx} href={industry.href} className="industry-item-link">
                {content}
              </Link>
            ) : (
              <div key={idx}>{content}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

