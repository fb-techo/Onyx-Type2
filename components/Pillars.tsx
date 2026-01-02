import Link from 'next/link'

const pillars = [
  {
    number: '01',
    title: 'Save Time & Money',
    description: 'Automate repetitive tasks so your staff can focus on customers. Reduce labor costs while improving service quality.',
    href: '/pillars/operational-efficiency',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    )
  },
  {
    number: '02',
    title: 'Know Your Stock',
    description: 'Never run out of bestsellers again. Real-time inventory tracking means you always know what\'s in stock and what\'s selling.',
    href: '/pillars/inventory-accuracy',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18"/>
        <path d="M18 7L9 16l-5-5"/>
      </svg>
    )
  },
  {
    number: '03',
    title: 'Delight Customers',
    description: 'Faster checkouts, smarter service, better experiences. Happy customers come back and tell their friends.',
    href: '/pillars/customer-journey',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
        <path d="M3 6h18"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    )
  }
]

export default function Pillars() {
  return (
    <section className="pillars">
      <div className="container">
        <div className="section-header">
          <span className="section-label">What We Solve</span>
          <h2>Three Ways We Help You Win</h2>
          <p className="section-description">Every successful retail business needs these three foundations. We make them easy.</p>
        </div>
        <div className="pillars-grid">
          {pillars.map((pillar) => (
            <Link key={pillar.number} href={pillar.href} className="pillar-link">
              <div className="pillar">
                <div className="pillar-icon">{pillar.icon}</div>
                <span className="pillar-number">{pillar.number}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

