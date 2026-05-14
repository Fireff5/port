import React from 'react';
import './Certificates.css';
import fullstackCert from '../assets/fullstack-cert.jpg';
import cyberCert from '../assets/cybersecurity-cert.jpg';
import ethicalHackingCert from '../assets/ethical-hacking-cert.jpg';
import cssWebdesignCert from '../assets/csswebdesign-cert.jpg';
import microsoft365Cert from '../assets/microsoft365-cert.jpg';
import JavaBootcampCert from '../assets/Java-bootcamp-cert.jpg';

const certs = [
  { img: fullstackCert, issuer: 'Digisailor', title: 'FullStack Development', icon: '🚀' },
  { img: cyberCert, issuer: 'Postulate Infotech Pvt Ltd', title: 'Cyber Security', icon: '🔒' },
  { img: ethicalHackingCert, issuer: 'Udemy', title: 'Cyber Security & Ethical Hacking', icon: '🛡️' },
  { img: cssWebdesignCert, issuer: 'Udemy', title: 'CSS Web Design', icon: '🎨' },
  { img: microsoft365Cert, issuer: 'Udemy', title: 'Microsoft 365 (Excel, Word, PPT)', icon: '📊' },
  { img: JavaBootcampCert, issuer: 'Udemy', title: 'Java Bootcamp', icon: '☕' },
];

const Certificates = () => (
  <section id="certificates" className="certs-section">
    <div className="certs-inner">
      <h2 className="section-heading">Certificates</h2>
      <div className="section-divider" />
      <p className="section-subtitle">Verified credentials from trusted platforms</p>

      <div className="certs-grid">
        {certs.map((c) => (
          <div className="cert-card" key={c.title}>
            <div className="cert-img-wrap">
              <img src={c.img} alt={c.title} />
              <div className="cert-overlay">
                <a href={c.img} target="_blank" rel="noopener noreferrer" className="cert-view-btn">
                  View Certificate ↗
                </a>
              </div>
            </div>
            <div className="cert-body">
              <div className="cert-info">
                <p className="cert-issuer">{c.issuer}</p>
                <p className="cert-title">{c.title}</p>
              </div>
              <div className="cert-icon">{c.icon}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certificates;