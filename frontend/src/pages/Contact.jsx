import React from 'react'
import './Contact.css'

const Contact = () => {

  return (
    <main className="contact">
      <div className="contact-hero">
        <div className="container">
          <h1 className="page-title fade-in">Get In Touch</h1>
          <p className="page-subtitle fade-in">
            Contact us via Email or Instagram DM for any inquiries
          </p>
        </div>
      </div>

      <section className="simple-contact-content">
        <div className="container">
          <div className="contact-methods-grid">
            
            {/* Email Section */}
            <div className="contact-method-card">
              <div className="method-icon email-icon">
                <svg width="50" height="50" fill="white" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h2>Email Us</h2>
              <p className="method-description">Send us an email for inquiries, website portfolio, or package bookings</p>
              <div className="contact-detail">
                <a href="mailto:Forartpromotion@gmail.com" className="contact-link email-link">
                  Forartpromotion@gmail.com
                </a>
              </div>
              <div className="usage-info">
                <p>✉️ For Website Portfolio inquiries</p>
                <p>✉️ Send payment screenshots</p>
                <p>✉️ Send your artwork for promotion</p>
              </div>
            </div>

            {/* Instagram Section */}
            <div className="contact-method-card instagram-card">
              <div className="method-icon instagram-icon">
                <svg width="50" height="50" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h2>Instagram DM</h2>
              <p className="method-description">Message us on Instagram for quick responses and package details</p>
              <div className="instagram-handles-list">
                <a href="https://www.instagram.com/creativee_.art/" target="_blank" rel="noopener noreferrer" className="ig-handle-link">
                  <span className="ig-icon">📸</span>
                  @creativee_art
                </a>
                <a href="https://www.instagram.com/awesomee_.art/" target="_blank" rel="noopener noreferrer" className="ig-handle-link">
                  <span className="ig-icon">📸</span>
                  @awesomee_art
                </a>
              </div>
              <div className="usage-info">
                <p>💬 Quick questions and support</p>
                <p>💬 Package inquiries</p>
                <p>💬 Follow-ups on orders</p>
              </div>
            </div>

            {/* PayPal Payment Section */}
            <div className="contact-method-card paypal-card">
              <div className="method-icon paypal-icon">
                <svg width="50" height="50" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
                </svg>
              </div>
              <h2>Payment Details</h2>
              <p className="method-description">Make payments for art promotion packages</p>
              <div className="contact-detail">
                <div className="paypal-email-display">
                  Forartpromotion@gmail.com
                </div>
              </div>
              <div className="usage-info">
                <p>💳 Send payment via PayPal</p>
                <p>💳 Email payment screenshot</p>
                <p>💳 Include your Instagram handle</p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  )
}

export default Contact


