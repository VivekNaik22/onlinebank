import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={styles.container}>
      {/* Navigation Bar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>
          <h2>Online Banking System</h2>
        </div>
        <ul style={styles.navLinks}>
          <li style={styles.navItem}><a href="#about" style={styles.navLink}>About Us</a></li>
          <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Contact Us</a></li>
          <li style={styles.navItem}><Link to="/transfer-money" style={styles.navLink}>Transfer Money</Link></li>
          <li style={styles.navItem}><Link to="/bank-account" style={styles.navLink}>Bank Account</Link></li>
          <li style={styles.navItem}><Link to="/user-transactions" style={styles.navLink}>Transaction History</Link></li>
          <li style={styles.navItem}><Link to="/bill-payment" style={styles.navLink}>Bill Payment</Link></li>
          <li style={styles.navItem}><Link to="/" style={styles.navLink}>Logout</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroText}>
          <h1>Instantly transfer, deposit, and withdraw funds</h1>
          <p>Banking, simplified and streamlined.</p>
          <p>Transact, deposit, withdraw securely.</p>
        </div>
        <div style={styles.heroImage}>
          {/* Replace the src with your own image path */}
          <img src="./image/userbnkimg.jpg" alt="Banking illustration" style={styles.image} />
        </div>
      </section>

      {/* Welcome Section */}
      <section style={styles.welcome}>
        <h2>Welcome to Online Banking System</h2>
        <p>
          Welcome to our cutting-edge Online Banking System, where financial empowerment meets
          technological innovation. Seamlessly navigate through your financial journey with ease,
          as you initiate secure transactions, conveniently deposit funds into your accounts, and
          effortlessly withdraw when needed.
        </p>
        <p>
          Our user-friendly interface ensures a smooth and intuitive experience, giving you full
          control over your finances from the comfort of your own device. With advanced security
          measures in place, you can trust that your sensitive information is safeguarded
          throughout every interaction. Join us on this digital financial expedition and unlock a
          new era of banking convenience and confidence.
        </p>
        <button style={styles.getStartedBtn}>Get Started</button>
      </section>

      {/* Bill Payment Section */}
      <section id="bill-payment" style={styles.billPayment}>
        <h2>Bill Payment</h2>
        <p>
          Easily pay your bills through our online banking system. Whether it’s utilities, rent, or any
          other bill, our platform allows you to manage and pay all your bills with just a few clicks.
        </p>
        <Link to="/bill-payment">
          <button style={styles.billPaymentBtn}>Pay Bills</button>
        </Link>
      </section>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <ul style={styles.footerLinks}>
          <li style={styles.footerItem}><a href="#about" style={styles.footerLink}>About Us</a></li>
          <li style={styles.footerItem}><a href="#contact" style={styles.footerLink}>Contact Us</a></li>
        </ul>
      </footer>

      {/* About Us and Contact Us Sections */}
      <section id="about" style={styles.about}>
        <h2>About Us</h2>
        <p>
          We are dedicated to providing innovative and efficient banking solutions tailored to meet
          your financial needs. Our mission is to ensure that every interaction with our system
          is seamless, secure, and satisfactory. With a commitment to excellence, we strive to
          continually enhance our services and technology to deliver the best banking experience
          possible.
        </p>
      </section>

      <section id="contact" style={styles.contact}>
        <h2>Contact Us</h2>
        <p>
          We value your feedback and are here to assist you with any inquiries or issues. Feel free
          to reach out to us through the following channels:
        </p>
        <p>
          Email: support@onlinebanking.com
          <br />
          Phone: (123) 456-7890
          <br />
          Address: 123 Banking St., Finance City, FC 12345
        </p>
      </section>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    color: '#800000',
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '20px',
  },
  navItem: {
    cursor: 'pointer',
  },
  navLink: {
    color: '#800000',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  hero: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '40px',
    backgroundColor: '#f5e6c3',
  },
  heroText: {
    maxWidth: '50%',
  },
  heroImage: {
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '600px',
  },
  welcome: {
    padding: '40px',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  getStartedBtn: {
    padding: '10px 20px',
    backgroundColor: '#800000',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    borderRadius: '5px',
  },
  billPayment: {
    padding: '40px',
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
  },
  billPaymentBtn: {
    padding: '10px 20px',
    backgroundColor: '#800000',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    borderRadius: '5px',
  },
  footer: {
    padding: '20px',
    backgroundColor: '#800000',
    color: '#fff',
    textAlign: 'center',
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'center',
    listStyle: 'none',
    padding: '0',
    margin: '0',
    gap: '20px',
  },
  footerItem: {
    cursor: 'pointer',
  },
  footerLink: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  about: {
    padding: '40px',
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
  },
  contact: {
    padding: '40px',
    backgroundColor: '#e0e0e0',
    textAlign: 'center',
  },
};

export default HomePage;
