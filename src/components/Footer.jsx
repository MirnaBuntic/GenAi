import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div id="about" className="footer-section">
          <h3>About GenAi</h3>
          <p>We are at the forefront of AI innovation, helping businesses harness the power of artificial intelligence to transform their operations and create exceptional user experiences.</p>
        </div>
        <div id="contact" className="footer-section">
          <h3>Get in Touch</h3>
          <p>Email: hello@genai.tech</p>
          <p>Phone: +46 (0) 123 456 789</p>
          <p>Address: Tech Hub, Stockholm, Sweden</p>
        </div>
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-links">
            <a href="#twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="#linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="#github" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="#instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} GenAi. All rights reserved. | 
          <a href="#privacy" style={{ marginLeft: '0.5rem', color: 'inherit' }}>Privacy Policy</a> |
          <a href="#terms" style={{ marginLeft: '0.5rem', color: 'inherit' }}>Terms of Service</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer