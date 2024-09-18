import React from 'react';

const MainContent = () => {
  return (
    <section style={styles.mainContent}>
      <div id="about-us" style={styles.section}>
        <img src="./image/aboutus.avif" alt="About Us" style={styles.image} />
        <h3>Welcome to Online Banking System</h3>
        <p>
          Welcome to our cutting-edge Online Banking System, where financial empowerment meets technological
          innovation. Seamlessly navigate through your financial journey with ease, as you initiate secure
          transactions, conveniently deposit funds into your accounts, and effortlessly withdraw when needed.
        </p>
        <button style={styles.getStartedButton}>Get Started</button>
      </div>
      <div id="contact" style={styles.section}>
        <img src="../image/payment.webp" alt="Contact Us" style={styles.image} />
        <h3>Experience Effortless Financial Management</h3>
        <p>
          Discover a new level of financial control through our intuitive Online Banking System. Seamlessly manage
          transactions, deposits, and withdrawals with a user-friendly interface designed to simplify your banking
          experience.
        </p>
        <button style={styles.getStartedButton}>Get Started</button>
      </div>
    </section>
  );
};

const styles = {
  mainContent: {
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  section: {
    flex: '1',
    margin: '10px',
    backgroundColor: '#f7f7f7',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center', // Center-align text and image
  },
  image: {
    width: '100%', // Adjust width as needed
    maxWidth: '300px', // Set a maximum width for the image
    height: 'auto', // Maintain aspect ratio
    marginBottom: '15px', // Space between image and text
  },
  getStartedButton: {
    backgroundColor: '#8A0303',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default MainContent;
