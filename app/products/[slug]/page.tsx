import { notFound } from 'next/navigation'
import { getProductBySlug, productPages } from '@/lib/productPages'

export async function generateStaticParams() {
  return productPages.map((product) => ({
    slug: product.slug,
  }))
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)
  
  if (!product) {
    notFound()
  }

  return (
    <main>
      <section className="solution-hero">
        <div className="container">
          <div className="solution-hero-content">
            <div className="solution-icon-large">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                <line x1="1" y1="10" x2="23" y2="10"/>
              </svg>
            </div>
            <h1>{product.title}</h1>
            <p className="solution-hero-description">{product.description}</p>
          </div>
        </div>
      </section>

      <section className="solution-overview">
        <div className="container">
          <div className="solution-overview-content">
            <h2>Overview</h2>
            <div className="overview-text-grid">
              <p>Comprehensive solution designed to meet your retail technology needs. This product provides essential capabilities for modern retail operations.</p>
              <p>Built with reliability and performance in mind, ensuring seamless integration with your existing systems and workflows.</p>
              <p>Designed to scale with your business, from small operations to enterprise-level deployments.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-features">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Features</span>
            <h2>Key Capabilities</h2>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <h3>Core Functionality</h3>
              <p>Essential features designed to meet your primary business requirements.</p>
            </div>
            <div className="feature-item">
              <h3>Integration Support</h3>
              <p>Seamless integration with existing systems and third-party applications.</p>
            </div>
            <div className="feature-item">
              <h3>Scalability</h3>
              <p>Designed to grow with your business from startup to enterprise scale.</p>
            </div>
            <div className="feature-item">
              <h3>Reliability</h3>
              <p>Proven technology with stable performance for continuous operations.</p>
            </div>
            <div className="feature-item">
              <h3>User-Friendly</h3>
              <p>Intuitive interface designed for ease of use and quick adoption.</p>
            </div>
            <div className="feature-item">
              <h3>Support & Maintenance</h3>
              <p>Comprehensive support and maintenance options to keep your systems running.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-benefits">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Benefits</span>
            <h2>Why Choose This Solution</h2>
          </div>
          <div className="benefits-list">
            <div className="benefit-item">
              <h3>Improved Efficiency</h3>
              <p>Streamline operations and reduce manual work with automated processes.</p>
            </div>
            <div className="benefit-item">
              <h3>Cost Savings</h3>
              <p>Reduce operational costs through improved efficiency and reduced errors.</p>
            </div>
            <div className="benefit-item">
              <h3>Better Insights</h3>
              <p>Gain valuable insights into your operations with comprehensive reporting.</p>
            </div>
            <div className="benefit-item">
              <h3>Enhanced Customer Experience</h3>
              <p>Improve customer satisfaction with faster service and better accuracy.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

