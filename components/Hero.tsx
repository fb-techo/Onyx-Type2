import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="line">Run Your Store</span>
              <span className="line">Smarter, Not</span>
              <span className="line accent">Harder</span>
            </h1>
            <p className="hero-description">
              Stop losing sales to stockouts. Stop wasting hours on inventory counts. Start growing your business with technology that actually works. Complete retail solutions that save time, reduce errors, and boost profits.
            </p>
            <div className="hero-cta">
              <Link href="#contact" className="btn-primary">Get A Free Consultation</Link>
              <Link href="#solutions" className="btn-secondary">See How It Works</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

