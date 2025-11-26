import React from 'react'
import { Link } from 'react-router-dom'
import './Portfolio.css'

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Modern Gallery Website',
      category: 'Gallery',
      description: 'Elegant online gallery with virtual exhibitions and e-commerce integration',
      image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80',
      tags: ['E-commerce', 'Virtual Tour', 'Responsive'],
      color: 'var(--gradient)'
    },
    {
      id: 2,
      title: 'Artist Portfolio Site',
      category: 'Portfolio',
      description: 'Minimalist portfolio showcasing abstract paintings with smooth animations',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80',
      tags: ['Portfolio', 'Animations', 'SEO'],
      color: 'var(--gradient-2)'
    },
    {
      id: 3,
      title: 'Contemporary Art Studio',
      category: 'Studio',
      description: 'Full-featured studio website with booking system and class schedules',
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80',
      tags: ['Booking', 'Calendar', 'CMS'],
      color: 'var(--gradient-3)'
    },
    {
      id: 4,
      title: 'Digital Artist Showcase',
      category: 'Portfolio',
      description: 'Bold, dark-themed portfolio for digital and 3D art with video integration',
      image: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&q=80',
      tags: ['Video', 'Dark Theme', '3D'],
      color: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      id: 5,
      title: 'Sculpture Artist Website',
      category: 'Portfolio',
      description: 'Clean and professional site featuring 360° product views',
      image: 'https://plus.unsplash.com/premium_photo-1675378165346-5f6c3959f0d2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGFpbnRpbmd8ZW58MHx8MHx8fDA%3D',
      tags: ['360° View', 'Interactive', 'Modern'],
      color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 6,
      title: 'Photography Portfolio',
      category: 'Photography',
      description: 'Image-focused portfolio with masonry layout and lightbox galleries',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80',
      tags: ['Masonry', 'Lightbox', 'Fast Loading'],
      color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    }
  ]

  const services = [
    {
      icon: '🎨',
      title: 'Custom Design',
      description: 'Unique designs tailored to your artistic style and brand identity'
    },
    {
      icon: '📱',
      title: 'Fully Responsive',
      description: 'Perfect viewing experience across all devices and screen sizes'
    },
    {
      icon: '🚀',
      title: 'Fast Performance',
      description: 'Optimized for speed with lightning-fast loading times'
    },
    {
      icon: '🔍',
      title: 'SEO Optimized',
      description: 'Built-in SEO best practices to help you rank higher in search'
    },
    {
      icon: '🛒',
      title: 'E-commerce Ready',
      description: 'Sell your art directly with integrated payment solutions'
    },
    {
      icon: '⚡',
      title: 'Easy Updates',
      description: 'Simple content management system to update your site anytime'
    }
  ]

  return (
    <main className="portfolio">
      <div className="portfolio-hero">
        <div className="container">
          <h1 className="page-title fade-in">Our Portfolio</h1>
          <p className="page-subtitle fade-in">
            Beautiful, functional websites designed specifically for artists and galleries. 
            See how we bring creative visions to life online.
          </p>
        </div>
      </div>

      <section className="portfolio-grid-section">
        <div className="container">
          <div className="portfolio-grid">
            {portfolioItems.map((item, index) => (
              <div 
                key={item.id} 
                className="portfolio-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="portfolio-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="portfolio-overlay">
                    <div className="portfolio-overlay-content">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <div className="portfolio-tags">
                        {item.tags.map((tag, idx) => (
                          <span key={idx} className="tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="portfolio-info">
                  <div className="portfolio-category" style={{ background: item.color }}>
                    {item.category}
                  </div>
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="web-services">
        <div className="container">
          <h2 className="section-title">Website Design Services</h2>
          <p className="section-subtitle">
            Everything you need to establish a stunning online presence
          </p>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <div className="service-icon-large">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-preview">
        <div className="container">
          <h2 className="section-title">Website Design Pricing</h2>
          <p className="section-subtitle">
            Affordable, transparent pricing for professional art websites
          </p>

          <div className="pricing-cards">
            <div className="pricing-card">
              <h3>Basic Portfolio</h3>
              <div className="pricing-amount">
                <span className="currency">$</span>
                <span className="amount">499</span>
              </div>
              <ul>
                <li>5 Pages</li>
                <li>Image Gallery</li>
                <li>Contact Form</li>
                <li>Responsive Design</li>
                <li>Basic SEO</li>
                <li>1 Month Support</li>
              </ul>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>

            <div className="pricing-card featured">
              <div className="popular-badge">Most Popular</div>
              <h3>Professional Site</h3>
              <div className="pricing-amount">
                <span className="currency">$</span>
                <span className="amount">999</span>
              </div>
              <ul>
                <li>10 Pages</li>
                <li>Advanced Gallery</li>
                <li>E-commerce (up to 50 products)</li>
                <li>Blog/News Section</li>
                <li>Advanced SEO</li>
                <li>3 Months Support</li>
                <li>Social Media Integration</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
            </div>

            <div className="pricing-card">
              <h3>Premium Package</h3>
              <div className="pricing-amount">
                <span className="currency">$</span>
                <span className="amount">1999</span>
              </div>
              <ul>
                <li>Unlimited Pages</li>
                <li>Full E-commerce</li>
                <li>Custom Features</li>
                <li>Virtual Gallery Tours</li>
                <li>Advanced Analytics</li>
                <li>6 Months Support</li>
                <li>Priority Updates</li>
                <li>Marketing Integration</li>
              </ul>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-cta">
        <div className="container">
          <h2>Ready to Build Your Dream Website?</h2>
          <p>Email or DM us on Instagram to discuss your project</p>
          <Link to="/contact" className="btn btn-primary">Contact Info</Link>
          <div className="portfolio-contact-info">
            <p className="email-display">📧 info@creativeart.com</p>
            <div className="portfolio-ig-handles">
              <a href="https://www.instagram.com/creativee_.art/" target="_blank" rel="noopener noreferrer" className="portfolio-ig-link">
                @creativee_art
              </a>
              <a href="https://www.instagram.com/awesomee_.art/" target="_blank" rel="noopener noreferrer" className="portfolio-ig-link">
                @awesomee_art
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Portfolio


