import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer" style={styles.footer}>
      <div style={styles.footerSections}>
        <div style={styles.section}>
          <h4>ONLINE BANKING SYSTEM</h4>
          <p style={styles.description}>
            Welcome to Online Banking System, where we provide innovative and secure banking solutions. Our goal is to offer a seamless and user-friendly experience to help you manage your finances with ease.
          </p>
          <p style={styles.description}>
            Our advanced technology ensures that your transactions are processed securely and efficiently.
          </p>
        </div>
        <div style={styles.section}>
          <h4>ABOUT US</h4>
          <p><a href="#about" style={styles.link}>Our Story</a></p>
          <p><a href="#team" style={styles.link}>Meet the Team</a></p>
          <p><a href="#values" style={styles.link}>Our Values</a></p>
        </div>
        <div style={styles.section}>
          <h4>CONTACT US</h4>
          <p><a href="mailto:support@onlinebanking.com" style={styles.link}>support@onlinebanking.com</a></p>
          <p><a href="tel:+1234567890" style={styles.link}>+1 (234) 567-890</a></p>
          <p><a href="#contact" style={styles.link}>Contact Form</a></p>
        </div>
        <div style={styles.section}>
          <h4>CAREERS</h4>
          <p><a href="#careers" style={styles.link}>Current Openings</a></p>
          <p><a href="#apply" style={styles.link}>Apply Now</a></p>
          <p><a href="#culture" style={styles.link}>Our Culture</a></p>
        </div>
      </div>
      <div style={styles.footerBottom}>
        <p>
          
          <Link to="/login" style={styles.link}>Login hear</Link> 
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '20px',
    backgroundColor: '#f7f7f7',
    borderTop: '1px solid #ddd',
  },
  footerSections: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  section: {
    flex: '1 1 22%', // Adjusted for better alignment and spacing
    padding: '10px',
    boxSizing: 'border-box', // Ensures padding is included in width calculation
    textAlign: 'left', // Ensures text aligns to the left
  },
  description: {
    marginBottom: '10px',
    lineHeight: '1.6', // Improves readability
    fontSize: '0.9rem', // Adjusts font size if needed
  },
  link: {
    color: '#007BFF',
    textDecoration: 'none',
  },
  footerBottom: {
    textAlign: 'center',
    marginTop: '20px',
  },
};

export default Footer;
