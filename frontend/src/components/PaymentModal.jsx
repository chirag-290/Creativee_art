import React from 'react'
import './PaymentModal.css'

const PaymentModal = ({ isOpen, onClose, selectedPackage }) => {
  if (!isOpen || !selectedPackage) return null

  const handleBackdropClick = (e) => {
    if (e.target.className === 'modal-backdrop') {
      onClose()
    }
  }

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="payment-modal">
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <div className="modal-icon">💳</div>
          <h2>Payment Instructions</h2>
          <div className="selected-package">
            <h3>{selectedPackage.name}</h3>
            <p className="package-price">{selectedPackage.price} USD</p>
          </div>
        </div>

        <div className="modal-content">
          <div className="instruction-section">
            <div className="step-badge">Step 1</div>
            <h4>Make Payment via PayPal</h4>
            <div className="paypal-info">
              <p>Send payment to:</p>
              <div className="paypal-email">
                <span className="icon">📧</span>
                <strong>Forartpromotion@gmail.com</strong>
              </div>
              <p className="amount-reminder">Amount: <strong>{selectedPackage.price} USD</strong></p>
            </div>
          </div>

          <div className="instruction-section">
            <div className="step-badge">Step 2</div>
            <h4>Prepare Your Content</h4>
            <div className="content-requirements">
              <p>Based on your package, prepare:</p>
              <ul>
                <li><strong>{selectedPackage.posts}</strong> Post(s) for permanent posting</li>
                <li><strong>{selectedPackage.stories}</strong> Story/Stories content</li>
                <li>High-quality images of your artwork</li>
                <li>Captions and hashtags (if any)</li>
              </ul>
            </div>
          </div>

          <div className="instruction-section">
            <div className="step-badge">Step 3</div>
            <h4>Send Everything via Email</h4>
            <div className="email-instructions">
              <p>Email us at:</p>
              <div className="contact-email">
                <span className="icon">✉️</span>
                <strong>info@creativeart.com</strong>
              </div>
              <p className="email-content-list">Include in your email:</p>
              <ul>
                <li>✅ Payment screenshot from PayPal</li>
                <li>✅ Your artwork images/posts</li>
                <li>✅ Your Instagram handle</li>
                <li>✅ Any specific instructions or captions</li>
              </ul>
            </div>
          </div>

          <div className="instruction-section alternate">
            <div className="step-badge">Alternative</div>
            <h4>Contact via Instagram DM</h4>
            <div className="instagram-section">
              <p>You can also reach us on Instagram:</p>
              <div className="instagram-handles">
                <a href="https://www.instagram.com/creativee_.art/" target="_blank" rel="noopener noreferrer" className="ig-handle">
                  <span className="ig-icon">📸</span>
                  @creativee_art
                </a>
                <a href="https://www.instagram.com/awesomee_.art/" target="_blank" rel="noopener noreferrer" className="ig-handle">
                  <span className="ig-icon">📸</span>
                  @awesomee_art
                </a>
              </div>
            </div>
          </div>

          <div className="important-note">
            <h4>⚠️ Important</h4>
            <p>We will start promoting your artwork within 24 hours after receiving your payment confirmation and content.</p>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-primary" onClick={onClose}>Got It!</button>
        </div>
      </div>
    </div>
  )
}

export default PaymentModal

