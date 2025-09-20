import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div id="about" className="footer-section">
          <h3>About Us</h3>
          <p>We are passionate about helping businesses succeed in the digital world through effective SEO strategies.</p>
        </div>
        <div id="contact" className="footer-section">
          <h3>Contact</h3>
          <p>Email: contact@seoclub.com</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#twitter">Twitter</a>
            <a href="#linkedin">LinkedIn</a>
            <a href="#github">GitHub</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 GenAi. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer