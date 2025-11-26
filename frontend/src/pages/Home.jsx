import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title fade-in">
              Elevate Your Art to
              <span className="gradient-text"> Global Audiences</span>
            </h1>
            <p className="hero-subtitle fade-in">
              Connect with 25,000+ engaged art enthusiasts, collectors, and galleries. 
              We promote your artwork and create stunning websites that showcase your creative vision.
            </p>
            <div className="hero-cta fade-in">
              <Link to="/packages" className="btn btn-primary">
                View Packages
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>
            <div className="hero-stats fade-in">
              <div className="stat">
                <h3>25,000+</h3>
                <p>Engaged Members</p>
              </div>
              <div className="stat">
                <h3>5000+</h3>
                <p>Artists Promoted</p>
              </div>
              <div className="stat">
                <h3>100+</h3>
                <p>Websites Created</p>
              </div>
            </div>

            <div className="hero-instagram-section fade-in">
              <h3 className="ig-section-title">Follow Our Instagram Accounts</h3>
              <div className="instagram-profiles">
                <a href="https://www.instagram.com/creativee_.art/" target="_blank" rel="noopener noreferrer" className="ig-profile-card">
                  <div className="ig-profile-image creative-art"></div>
                  <div className="ig-profile-info">
                    <h4>@creativee_art</h4>
                    <p className="ig-followers">57.1K followers</p>
                    <span className="ig-badge">Main Account</span>
                  </div>
                </a>
                
                <a href="https://www.instagram.com/awesomee_.art/" target="_blank" rel="noopener noreferrer" className="ig-profile-card">
                  <div className="ig-profile-image awesome-art"></div>
                  <div className="ig-profile-info">
                    <h4>@awesomee_art</h4>
                    <p className="ig-followers">18.5K followers</p>
                    <span className="ig-badge">Network Account</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">
            Comprehensive solutions to grow your art business and online presence
          </p>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon" style={{background: 'var(--gradient)'}}>
                <svg width="40" height="40" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>Instagram Art Promotion</h3>
              <p>
                We leverage our extensive network of 25,000+ engagement groups filled with 
                artists, galleries, collectors, and art lovers to boost your Instagram presence.
              </p>
              <ul className="service-features">
                <li>✨ Organic engagement from real art enthusiasts</li>
                <li>✨ Targeted exposure to potential buyers</li>
                <li>✨ Consistent follower growth</li>
                <li>✨ Stories and permanent posts</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon" style={{background: 'var(--gradient-2)'}}>
                <svg width="40" height="40" fill="white" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
                </svg>
              </div>
              <h3>Art Website Design</h3>
              <p>
                Beautiful, modern websites tailored specifically for artists, galleries, 
                and art businesses. Showcase your portfolio in style.
              </p>
              <ul className="service-features">
                <li>✨ Custom responsive design</li>
                <li>✨ Portfolio galleries</li>
                <li>✨ E-commerce integration</li>
                <li>✨ SEO optimized</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon" style={{background: 'var(--gradient-3)'}}>
                <svg width="40" height="40" fill="white" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <h3>Community Building</h3>
              <p>
                Connect with a thriving community of art professionals and enthusiasts 
                who are genuinely interested in discovering and purchasing art.
              </p>
              <ul className="service-features">
                <li>✨ Direct access to collectors</li>
                <li>✨ Gallery connections</li>
                <li>✨ Networking opportunities</li>
                <li>✨ Collaborative promotions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Simple, effective, and results-driven process
          </p>

          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Choose Your Package</h3>
              <p>Select the promotion package that fits your goals and budget</p>
            </div>

            <div className="step-connector"></div>

            <div className="step">
              <div className="step-number">2</div>
              <h3>Share Your Content</h3>
              <p>Send us your artwork posts and let us know your target audience</p>
            </div>

            <div className="step-connector"></div>

            <div className="step">
              <div className="step-number">3</div>
              <h3>We Promote</h3>
              <p>We share your posts in our engagement groups and boost visibility</p>
            </div>

            <div className="step-connector"></div>

            <div className="step">
              <div className="step-number">4</div>
              <h3>Watch Growth</h3>
              <p>See real engagement, followers, and potential buyers come to you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Artists Say</h2>
          <p className="section-subtitle">
            Real results from real artists
          </p>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "In just one month, I gained over 5,000 genuine followers and sold 3 paintings! 
                The engagement is real and the community is amazing."
              </p>
              <div className="testimonial-author">
                <strong>Sarah Martinez</strong>
                <span>Abstract Artist</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "The website they created for my gallery is stunning. We've seen a 200% increase 
                in online inquiries and sales."
              </p>
              <div className="testimonial-author">
                <strong>David Chen</strong>
                <span>Gallery Owner</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                "Best investment I've made for my art career. The exposure to collectors and 
                galleries has been invaluable."
              </p>
              <div className="testimonial-author">
                <strong>Emma Johnson</strong>
                <span>Digital Artist</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Grow Your Art Business?</h2>
            <p>Join hundreds of successful artists who trust us with their promotion</p>
            <Link to="/packages" className="btn btn-primary">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home


