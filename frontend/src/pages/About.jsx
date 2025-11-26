import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
  return (
    <main className="about">
      <div className="about-hero">
        <div className="container">
          <h1 className="page-title fade-in">About CreativeArt</h1>
          <p className="page-subtitle fade-in">
            Empowering artists worldwide through strategic promotion and exceptional web design
          </p>
        </div>
      </div>

      <section className="about-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                CreativeArt was founded with a simple yet powerful mission: to help talented artists 
                reach the audience they deserve. We understand the challenges artists face in 
                promoting their work in today's digital landscape.
              </p>
              <p>
                What started as a small engagement group has grown into a thriving community of 
                over 25,000 art enthusiasts, collectors, galleries, and artists who actively support 
                and discover new talent every day.
              </p>
              <p>
                Our dual approach combines strategic Instagram promotion with professional web design, 
                giving artists both immediate visibility and a lasting online presence. We've helped 
                hundreds of artists grow their following, connect with collectors, and establish 
                successful art businesses.
              </p>
            </div>
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&q=80" 
                alt="Art Gallery" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">
            The principles that guide everything we do
          </p>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎨</div>
              <h3>Authenticity</h3>
              <p>
                We believe in genuine connections and organic growth. No bots, no fake engagement - 
                just real people who love art.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">💎</div>
              <h3>Quality</h3>
              <p>
                From our promotion strategies to our web designs, we never compromise on quality. 
                Your success is our success.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Community</h3>
              <p>
                We've built a supportive community where artists, collectors, and art lovers 
                connect and grow together.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3>Innovation</h3>
              <p>
                We continuously evolve our strategies and techniques to stay ahead in the 
                ever-changing digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-numbers">
        <div className="container">
          <h2 className="section-title">Our Impact</h2>
          <div className="numbers-grid">
            <div className="number-card">
              <div className="number">25,000+</div>
              <div className="number-label">Community Members</div>
            </div>
            <div className="number-card">
              <div className="number">500+</div>
              <div className="number-label">Artists Promoted</div>
            </div>
            <div className="number-card">
              <div className="number">100+</div>
              <div className="number-label">Websites Created</div>
            </div>
            <div className="number-card">
              <div className="number">2M+</div>
              <div className="number-label">Engagement Generated</div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            What makes CreativeArt different
          </p>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-number">01</div>
              <h3>Proven Track Record</h3>
              <p>
                Hundreds of successful campaigns and satisfied artists who have seen real, 
                measurable growth in their following and sales.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-number">02</div>
              <h3>Art-Focused Network</h3>
              <p>
                Unlike generic promotion services, our entire network is focused on art, 
                ensuring your work reaches the right audience.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-number">03</div>
              <h3>Full-Service Solution</h3>
              <p>
                From Instagram promotion to professional websites, we provide everything 
                you need to succeed in the digital art world.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-number">04</div>
              <h3>Transparent & Affordable</h3>
              <p>
                Clear pricing, no hidden fees, and packages designed to fit every budget. 
                We believe art promotion should be accessible to all.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-number">05</div>
              <h3>Dedicated Support</h3>
              <p>
                Our team is always here to help, answer questions, and ensure your 
                campaigns run smoothly from start to finish.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-number">06</div>
              <h3>Results-Driven</h3>
              <p>
                We don't just promise growth - we deliver it. Our strategies are proven 
                to generate real engagement and follower increases.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join our community of successful artists today</p>
          <div className="cta-buttons">
            <Link to="/packages" className="btn btn-primary">View Packages</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Info</Link>
          </div>
          <div className="about-instagram-cta">
            <p>Or reach us on Instagram:</p>
            <div className="about-ig-handles">
              <a href="https://www.instagram.com/creativee_.art/" target="_blank" rel="noopener noreferrer" className="about-ig-link">
                @creativee_art
              </a>
              <a href="https://www.instagram.com/awesomee_.art/" target="_blank" rel="noopener noreferrer" className="about-ig-link">
                @awesomee_art
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About


