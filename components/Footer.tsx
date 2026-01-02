import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">Smart Retail</Link>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Solutions</h4>
              <Link href="/#solutions">POS & Checkout</Link>
              <Link href="/#solutions">Inventory Tracking</Link>
              <Link href="/#solutions">Digital Shelf</Link>
            </div>
            <div className="footer-column">
              <h4>Industries</h4>
              <Link href="/industries/small-stores">Small Stores</Link>
              <Link href="/#industries">Growing Retailers</Link>
              <Link href="/#industries">Warehouse</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Smart Retail. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

