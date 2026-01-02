'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <nav className="nav">
      <div className="nav-container">
        <Link href="/" className="nav-logo">Smart Retail</Link>
        <button 
          className="nav-toggle" 
          aria-label="Toggle navigation" 
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="/#solutions" onClick={() => setIsMenuOpen(false)}>Solutions</a>
          <a href="/#industries" onClick={() => setIsMenuOpen(false)}>Industries</a>
          <a href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  )
}

