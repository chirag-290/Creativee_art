import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="logo" onClick={closeMobileMenu}>
            <span className="logo-text">Creative</span>
            <span className="logo-accent">Art</span>
          </Link>

          <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link 
              to="/packages" 
              className={location.pathname === '/packages' ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              Packages
            </Link>
            <Link 
              to="/portfolio" 
              className={location.pathname === '/portfolio' ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              Portfolio
            </Link>
            <Link 
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''}
              onClick={closeMobileMenu}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="btn btn-primary nav-cta"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </div>

          <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


