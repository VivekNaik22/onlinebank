import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>Online Banking System</div>
      <nav style={styles.nav}>
        <a href="#about-us" style={styles.link}>About Us</a>
        <a href="#contact" style={styles.link}>Contact Us</a>
        <Link to="/login" style={styles.link}>Login</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 10px 20px',
    backgroundColor: '#219dbc',
    color: 'white',
    alignItems: 'center',

  },
  logo: {
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    cursor: 'pointer',
  },
};

export default Header;
