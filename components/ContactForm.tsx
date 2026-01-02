'use client'

import { FormEvent, useState } from 'react'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)
    
    console.log('Form submitted:', data)
    
    // Simulate API call
    setTimeout(() => {
      alert('Thank you for your interest. We will contact you soon.')
      e.currentTarget.reset()
      setIsSubmitting(false)
    }, 500)
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text" name="name" placeholder="Name" required />
      </div>
      <div className="form-group">
        <input type="email" name="email" placeholder="Email" required />
      </div>
      <div className="form-group">
        <input type="text" name="company" placeholder="Company" />
      </div>
      <div className="form-group">
        <select name="industry" required>
          <option value="">Select Industry</option>
          <option value="retail">Retail</option>
          <option value="grocery">Grocery</option>
          <option value="supermarket">Supermarket</option>
          <option value="convenience">Convenience Store</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <textarea name="message" placeholder="Message" required></textarea>
      </div>
      <button type="submit" className="btn-primary" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

