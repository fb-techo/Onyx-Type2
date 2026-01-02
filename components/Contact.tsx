'use client'

import { FormEvent } from 'react'

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)
    console.log('Form submitted:', data)
    alert('Thank you for your interest. We will contact you soon.')
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-header">
            <span className="section-label">Get Started</span>
            <h2>Ready To Transform Your Store?</h2>
            <p>Get a free consultation. No pressure. Just honest advice on what will work for your business.</p>
            <p className="contact-subtext">
              Tell us about your store and we'll show you exactly how our solutions can solve your biggest challenges. We'll respond within 24 hours.
            </p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" id="name" name="name" placeholder="Name" required />
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="text" id="company" name="company" placeholder="Company" required />
            </div>
            <div className="form-group">
              <select id="industry" name="industry" required>
                <option value="">Industry</option>
                <option value="big-box">Big Box Retailers & Grocers</option>
                <option value="apparel">Apparel & Luxury Brands</option>
                <option value="warehouse">Warehouse & E-commerce</option>
                <option value="pharmacy">Pharmacy Chains</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <textarea id="message" name="message" placeholder="Message" rows={5} required></textarea>
            </div>
            <button type="submit" className="btn-primary">Get My Free Consultation</button>
          </form>
        </div>
      </div>
    </section>
  )
}

