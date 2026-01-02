import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export default function SmallStoresPage() {
  return (
    <main>
      <section className="solution-hero">
        <div className="container">
          <div className="solution-hero-content">
            <div className="solution-icon-large">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="9" y1="3" x2="9" y2="21"/>
                <line x1="3" y1="9" x2="21" y2="9"/>
              </svg>
            </div>
            <h1>Small Stores & Groceries</h1>
            <p className="solution-hero-description">Affordable, simple technology designed specifically for small stores, corner stores, and neighborhood groceries. Stop wasting time on manual tasks. Start growing your business with tools that actually work for stores like yours.</p>
          </div>
        </div>
      </section>

      <section className="solution-overview">
        <div className="container">
          <div className="solution-overview-content">
            <h2>Built For Small Stores, Not Big Chains</h2>
            <div className="overview-text-grid">
              <p>Running a small store is hard enough without complicated technology. You don't need enterprise systems designed for big chains. You need simple, affordable tools that save you time and help you compete.</p>
              <p>We specialize in helping small stores—corner stores, neighborhood groceries, boutiques, and specialty shops—get the same technology advantages as bigger stores, without the big price tag or complexity.</p>
              <p>Our solutions are designed to be easy to learn, quick to set up, and affordable to own. Start with what you need, add more as you grow. No long-term contracts. No hidden fees. Just technology that works.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-features">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Your Challenges</span>
            <h2>We Know What You're Dealing With</h2>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <h3>Running Out of Stock</h3>
              <p>You lose sales when customers can't find what they need. Simple inventory tracking helps you know what's low before you run out.</p>
            </div>
            <div className="feature-item">
              <h3>Slow Checkout Lines</h3>
              <p>Long lines mean frustrated customers and lost sales. Fast barcode scanning gets customers through checkout 3x faster.</p>
            </div>
            <div className="feature-item">
              <h3>Manual Inventory Counts</h3>
              <p>Counting stock by hand takes hours or even days. Portable scanners let you count everything in minutes.</p>
            </div>
            <div className="feature-item">
              <h3>Pricing Mistakes</h3>
              <p>Wrong prices mean lost money or angry customers. Accurate systems ensure every price is correct, every time.</p>
            </div>
            <div className="feature-item">
              <h3>Limited Staff</h3>
              <p>You can't be everywhere at once. Mobile checkout lets staff help customers anywhere in the store.</p>
            </div>
            <div className="feature-item">
              <h3>Can't Compete With Big Stores</h3>
              <p>Big chains have technology advantages. Now you can have the same tools, sized and priced for your store.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-benefits">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Starter Packages</span>
            <h2>Everything You Need, Bundled Together</h2>
          </div>
          <div className="packages-grid" style={{ marginTop: 'var(--spacing-lg)' }}>
            <div className="package-card">
              <div className="package-badge">Most Popular</div>
              <h3>Essential Starter</h3>
              <p className="package-description">Perfect for new stores or stores upgrading from cash registers</p>
              <ul className="package-features">
                <li>Standard POS System</li>
                <li>Barcode Scanner</li>
                <li>Customer Display Screen</li>
                <li>Basic Inventory Tracking</li>
                <li>Setup & Training Included</li>
              </ul>
              <div className="package-benefit">
                <strong>Save 10+ hours per week</strong> on checkout and inventory
              </div>
              <a href="#contact" className="btn-primary">Get Started</a>
            </div>
            <div className="package-card">
              <div className="package-badge">Best Value</div>
              <h3>Complete Small Store</h3>
              <p className="package-description">For stores ready to automate inventory and speed up operations</p>
              <ul className="package-features">
                <li>Standard POS System</li>
                <li>Handheld Scanner</li>
                <li>Portable Inventory Scanner</li>
                <li>Label Printer</li>
                <li>Customer Display Screen</li>
                <li>Inventory Management Software</li>
                <li>Full Setup & Training</li>
              </ul>
              <div className="package-benefit">
                <strong>Save 20+ hours per week</strong> and never run out of bestsellers
              </div>
              <a href="#contact" className="btn-primary">Get Started</a>
            </div>
            <div className="package-card">
              <h3>Grocery Store Package</h3>
              <p className="package-description">Specialized for small grocery stores with produce and deli</p>
              <ul className="package-features">
                <li>POS with Built-in Scale</li>
                <li>Barcode Scanner</li>
                <li>Customer Display Screen</li>
                <li>Portable Label Printer</li>
                <li>Basic Inventory Tracking</li>
                <li>Setup & Training Included</li>
              </ul>
              <div className="package-benefit">
                <strong>Weigh, price, and checkout</strong> in one simple system
              </div>
              <a href="#contact" className="btn-primary">Get Started</a>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-features" style={{ background: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Solutions</span>
            <h2>Essential Tools For Small Stores</h2>
            <p className="section-description">Start with these basics. They'll save you the most time and have the biggest impact on your business.</p>
          </div>
          <div className="pillar-solutions-grid">
            <Link href="/products/regular-pos" className="pillar-solution-card">
              <div className="solution-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                  <line x1="1" y1="10" x2="23" y2="10"/>
                </svg>
              </div>
              <h3>Standard POS Systems</h3>
              <p>Reliable checkout systems that never let you down. Easy to learn, fast to use, built to last.</p>
            </Link>
            <Link href="/products/handheld-pos" className="pillar-solution-card">
              <div className="solution-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
              <h3>Mobile POS Devices</h3>
              <p>Checkout anywhere in the store. Perfect for busy times, events, or when you need flexibility.</p>
            </Link>
            <Link href="/products/handheld-scanner" className="pillar-solution-card">
              <div className="solution-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
                  <path d="M3 6h18"/>
                </svg>
              </div>
              <h3>Barcode Scanners</h3>
              <p>Fast, reliable scanning that speeds up checkout and makes inventory tracking easy.</p>
            </Link>
            <Link href="/products/handheld-pdts" className="pillar-solution-card">
              <div className="solution-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
              <h3>Portable Inventory Scanners</h3>
              <p>Count stock in minutes, not hours. Know exactly what you have without manual counting.</p>
            </Link>
            <Link href="/products/pos-with-weighing-scales" className="pillar-solution-card">
              <div className="solution-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <line x1="9" y1="3" x2="9" y2="21"/>
                </svg>
              </div>
              <h3>POS with Scales</h3>
              <p>Perfect for produce, meat, and deli. Weigh and price in one step, no separate scale needed.</p>
            </Link>
            <Link href="/products/customer-viewing-screen" className="pillar-solution-card">
              <div className="solution-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                  <line x1="1" y1="10" x2="23" y2="10"/>
                </svg>
              </div>
              <h3>Customer Display Screens</h3>
              <p>Let customers see prices and totals. Builds trust, reduces disputes, improves service.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="roi-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Real Results</span>
            <h2>What Small Stores Save</h2>
            <p className="section-description">See how technology pays for itself by saving you time and money</p>
          </div>
          <div className="roi-grid">
            <div className="roi-item">
              <div className="roi-number">10-20</div>
              <div className="roi-label">Hours Saved Per Week</div>
              <p>No more manual inventory counting. Scan items in minutes, not hours.</p>
            </div>
            <div className="roi-item">
              <div className="roi-number">30%</div>
              <div className="roi-label">Faster Checkout</div>
              <p>Barcode scanners make checkout 3x faster. Serve more customers, reduce wait times.</p>
            </div>
            <div className="roi-item">
              <div className="roi-number">50%</div>
              <div className="roi-label">Fewer Stockouts</div>
              <p>Know what's low before you run out. Never lose a sale to empty shelves.</p>
            </div>
            <div className="roi-item">
              <div className="roi-number">$0</div>
              <div className="roi-label">Lost Sales From Errors</div>
              <p>Accurate inventory means accurate pricing. No more pricing mistakes or missing items.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-use-cases">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Use Cases</span>
            <h2>Perfect For These Types of Stores</h2>
          </div>
          <div className="use-cases-grid">
            <div className="use-case-item">
              <h3>Corner Stores & Convenience Stores</h3>
              <p>Fast checkout for busy customers. Simple inventory tracking for high-turnover items. Mobile checkout for peak times.</p>
            </div>
            <div className="use-case-item">
              <h3>Small Grocery Stores</h3>
              <p>POS with scales for produce and deli. Inventory tracking for perishables. Fast scanning for packaged goods.</p>
            </div>
            <div className="use-case-item">
              <h3>Neighborhood Markets</h3>
              <p>Complete checkout solutions. Inventory management for diverse product mix. Customer displays for transparency.</p>
            </div>
            <div className="use-case-item">
              <h3>Boutiques & Specialty Shops</h3>
              <p>Mobile checkout for personalized service. Inventory tracking for unique items. Easy-to-use systems for small staff.</p>
            </div>
            <div className="use-case-item">
              <h3>Family-Owned Stores</h3>
              <p>Affordable technology that grows with you. Simple systems anyone can learn. No complicated contracts or fees.</p>
            </div>
            <div className="use-case-item">
              <h3>New Store Owners</h3>
              <p>Start with essentials, add more as you grow. Complete setup and training included. Support when you need it.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-header">
              <span className="section-label">Get Started</span>
              <h2>Let's Talk About Your Store</h2>
              <p>Get a free consultation. No pressure. No sales pitch. Just honest advice on what will actually work for your small store.</p>
              <p className="contact-subtext">Tell us about your store and we'll show you exactly how affordable technology can save you time and money. We'll respond within 24 hours.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}

