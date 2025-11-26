import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">
              <span className="logo-text">Creative</span>
              <span className="logo-accent">Art</span>
            </h3>
            <p className="footer-description">
              Empowering artists worldwide through strategic promotion and stunning web design.
              Join our community of 25,000+ engaged art enthusiasts.
            </p>
            <div className="footer-instagram">
              <p className="ig-label">Follow us on Instagram:</p>
              <div className="footer-ig-handles">
                <a href="https://www.instagram.com/creativee_.art/" target="_blank" rel="noopener noreferrer" className="footer-ig-link">
                  @creativee_art
                </a>
                <a href="https://www.instagram.com/awesomee_.art/" target="_blank" rel="noopener noreferrer" className="footer-ig-link">
                  @awesomee_art
                </a>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/packages">Packages</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link to="/packages">Art Promotion</Link></li>
              <li><Link to="/packages">Instagram Growth</Link></li>
              <li><Link to="/portfolio">Web Design</Link></li>
              <li><Link to="/contact">Custom Solutions</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>Email: info@creativeart.com</li>
              <li>PayPal: Forartpromotion@gmail.com</li>
              <li><Link to="/contact">Contact Methods</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} CreativeArt. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


