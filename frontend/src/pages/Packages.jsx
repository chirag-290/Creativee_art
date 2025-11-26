import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PaymentModal from '../components/PaymentModal'
import './Packages.css'

const Packages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState(null)

  const handleGetStarted = (pkg) => {
    setSelectedPackage(pkg)
    setIsModalOpen(true)
  }
  const packages = [
    {
      id: 1,
      name: 'One Day Pack',
      price: '$9',
      duration: 'One Day',
      featured: false,
      gradient: 'var(--gradient-3)',
      includes: [
        '1 Permanent Post',
        '3 Instagram Stories',
        '200+ New Followers',
        'Engagement from Art Community',
        'Real Art Enthusiasts',
        '24 Hour Promotion',
      ],
      description: 'Perfect for testing our service or promoting a single artwork'
    },
    {
      id: 2,
      name: 'Weekly Pack',
      price: '$25',
      duration: 'One Week',
      featured: false,
      gradient: 'var(--gradient)',
      includes: [
        '2 Permanent Posts',
        '10 Instagram Stories',
        '1,000+ New Followers',
        'Extended Reach',
        'Gallery & Collector Exposure',
        '7 Days Continuous Promotion',
      ],
      description: 'Great for consistent growth and building momentum'
    },
    {
      id: 3,
      name: '15 Days Pack',
      price: '$49',
      duration: '15 Days',
      featured: true,
      gradient: 'var(--gradient-2)',
      includes: [
        '4 Permanent Posts',
        '20 Instagram Stories',
        '3,000+ New Followers',
        'Premium Placement',
        'Direct Collector Connections',
        '15 Days Strategic Promotion',
        'Performance Report',
      ],
      description: 'Most popular! Ideal for serious artists ready to scale'
    },
    {
      id: 4,
      name: 'Monthly Pack',
      price: '$69',
      duration: 'One Month',
      featured: false,
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      includes: [
        '8 Permanent Posts',
        '40 Instagram Stories',
        '5,000+ New Followers',
        'VIP Treatment',
        'Featured Artist Spotlight',
        '30 Days Comprehensive Campaign',
        'Detailed Analytics Report',
        'Priority Support',
      ],
      description: 'Maximum impact for professional artists and galleries'
    }
  ]

  return (
    <main className="packages">
      <PaymentModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPackage={selectedPackage}
      />
      <div className="packages-hero">
        <div className="container">
          <h1 className="page-title fade-in">Our Promotion Packages</h1>
          <p className="page-subtitle fade-in">
            Choose the perfect package to elevate your art and connect with thousands of engaged collectors, 
            galleries, and art enthusiasts
          </p>
        </div>
      </div>

      <section className="packages-section">
        <div className="container">
          <div className="packages-grid">
            {packages.map((pkg, index) => (
              <div 
                key={pkg.id} 
                className={`package-card ${pkg.featured ? 'featured' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.featured && <div className="featured-badge">Most Popular</div>}
                
                <div className="package-header">
                  <div className="package-icon" style={{ background: pkg.gradient }}>
                    <svg width="40" height="40" fill="white" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="package-name">{pkg.name}</h3>
                  <p className="package-description">{pkg.description}</p>
                  <div className="package-price">
                    <span className="price">{pkg.price}</span>
                    <span className="duration">USD / {pkg.duration}</span>
                  </div>
                </div>

                <div className="package-features">
                  <ul>
                    {pkg.includes.map((feature, idx) => (
                      <li key={idx}>
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => handleGetStarted(pkg)} 
                  className="btn btn-primary package-cta"
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Info */}
      <section className="package-info">
        <div className="container">
          <h2 className="section-title">What's Included in Every Package</h2>
          <p className="section-subtitle">
            All our packages come with these amazing benefits
          </p>

          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">🎨</div>
              <h3>25,000+ Engagement Groups</h3>
              <p>
                Your posts reach our extensive network of artists, galleries, collectors, 
                and art lovers actively looking to discover new artworks.
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">❤️</div>
              <h3>Real Organic Engagement</h3>
              <p>
                We don't use bots or fake accounts. Every like, comment, and follow comes 
                from genuine people interested in art.
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">💼</div>
              <h3>Direct Buyer Connections</h3>
              <p>
                Collectors and buyers from our community will contact you directly if 
                they're interested in purchasing your artwork.
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">📈</div>
              <h3>Continuous Growth</h3>
              <p>
                Our promotion strategy ensures sustained growth, not just temporary spikes 
                in engagement and followers.
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">🌟</div>
              <h3>Premium Placement</h3>
              <p>
                Your content gets featured in prime positions within our groups for 
                maximum visibility and impact.
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">✨</div>
              <h3>Professional Support</h3>
              <p>
                Our team is here to help you every step of the way, ensuring your 
                promotion campaign is a success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          
          <div className="faq-list">
            <div className="faq-item">
              <h3>How quickly will I see results?</h3>
              <p>
                You'll start seeing engagement within the first 24 hours of your campaign. 
                Follower growth and connections happen continuously throughout your package duration.
              </p>
            </div>

            <div className="faq-item">
              <h3>Are the followers real people?</h3>
              <p>
                Absolutely! We only work with genuine art enthusiasts, collectors, and fellow artists. 
                No bots, no fake accounts - just real people who love art.
              </p>
            </div>

            <div className="faq-item">
              <h3>Can I upgrade or extend my package?</h3>
              <p>
                Yes! You can upgrade to a larger package at any time, or renew your current package 
                to continue growing your audience.
              </p>
            </div>

            <div className="faq-item">
              <h3>What kind of art do you promote?</h3>
              <p>
                We promote all types of art - paintings, digital art, sculptures, photography, 
                mixed media, and more. If it's art, we can promote it!
              </p>
            </div>

            <div className="faq-item">
              <h3>How do I get started?</h3>
              <p>
                Simply choose your package and contact us. We'll guide you through the process 
                and start promoting your art right away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="packages-cta">
        <div className="container">
          <h2>Ready to Grow Your Audience?</h2>
          <p>Join hundreds of successful artists who have boosted their visibility</p>
          <div className="cta-info">
            <p className="contact-methods">
              Contact us on Instagram or Email for any questions
            </p>
            <div className="instagram-links">
              <a href="https://www.instagram.com/creativee_.art/" target="_blank" rel="noopener noreferrer" className="ig-link">
                @creativee_art
              </a>
              <a href="https://www.instagram.com/awesomee_.art/" target="_blank" rel="noopener noreferrer" className="ig-link">
                @awesomee_art
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Packages


