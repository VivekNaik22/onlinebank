import React from 'react';

const HeroSection = () => {
  return (
    <section style={styles.heroSection}>
      <div style={styles.heroContent}>
        <h2>Instantly transfer, deposit, and withdraw funds</h2>
        <p>Banking, simplified and streamlined.</p>
        <p>Transact, deposit, withdraw securely.</p>
      </div>
      <img
        style={styles.heroImage}
        src="./image/bankinglogo5.jpg" // replace with your actual image URL
         alt="Online Banking Illustration"
      />
    </section>
  );
};

const styles = {
  heroSection: {
    backgroundColor: '#219dbc',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heroContent: {
    maxWidth: '50%',
  },
  heroImage: {
    maxWidth: '40%',
    clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 23% 0)',
  },
};

export default HeroSection;
