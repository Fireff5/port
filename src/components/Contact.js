import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [result, setResult] = useState('');
  const [status, setStatus] = useState(''); // 'sending' | 'success' | 'error'

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult('Sending your message…');
    setStatus('sending');

    const formData = new FormData(e.target);
    formData.append('access_key', 'fc886c00-4495-40ee-8aab-4ef54e62715a');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setResult('✓ Message sent successfully! I\'ll reply soon.');
        setStatus('success');
        e.target.reset();
      } else {
        setResult('⚠ Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setResult('⚠ Network error. Please try again later.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <h2 className="section-heading">Get In Touch</h2>
        <div className="section-divider" />
        <p className="section-subtitle">Have a project in mind? Let's talk.</p>

        <div className="contact-layout">
          {/* Info side */}
          <div className="contact-info">
            <p>
              I'm always open to new opportunities, collaborations, or just a
              friendly chat about tech, web dev, or cyber security.
            </p>

            <div className="contact-detail">
              <span className="contact-detail-icon">📍</span>
              <div className="contact-detail-text">
                <p className="contact-detail-label">Location</p>
                <p className="contact-detail-value">India</p>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-icon">🎓</span>
              <div className="contact-detail-text">
                <p className="contact-detail-label">Status</p>
                <p className="contact-detail-value">Final Year Graduate · Open to Work</p>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-icon">⚡</span>
              <div className="contact-detail-text">
                <p className="contact-detail-label">Response Time</p>
                <p className="contact-detail-value">Usually within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className="contact-form-wrap">
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input className="form-input" type="text" name="name" placeholder="Enter Your Name" required />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input className="form-input" type="email" name="email" placeholder="Enter Your Email" required />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" name="message" placeholder="Share your requirements, opportunity, or any questions..." required />
              </div>

              <button type="submit" className="form-submit">
                Send Message →
              </button>

              {result && (
                <div className={`form-result ${status}`}>{result}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
