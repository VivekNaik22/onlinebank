import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="navbar">
        <div className="logo">
      
          <h1>Online Banking System</h1>
        </div>
        <nav>
          <ul>
            
            <li><Link to="/register-bankcoustmer">Register Customer</Link></li>
            <li><Link to="/bank-accountsbank">Bank Accounts</Link></li>
            <li><Link to="/allbank-coustomer">Bank Customers</Link></li>
            <li><Link to="/customer-transactions">Customer Transactions</Link></li>
            <li><Link to="/">Logout</Link></li>
          </ul>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h2>Instantly transfer, deposit, and withdraw funds</h2>
          <p>Banking, simplified and streamlined.</p>
          <p>Transact, deposit, withdraw securely.</p>
        </div>
        <div className="hero-image">
          <img src="./image/bankinglogo2.jpeg" alt="Banking Illustration" />
        </div>
      </section>

      <section className="welcome-section">
        <h2>Welcome to Online Banking System</h2>
        <p>
          Welcome to our cutting-edge Online Banking System, where financial empowerment meets technological innovation. 
          Seamlessly navigate through your financial journey with ease, as you initiate secure transactions, conveniently deposit funds into your accounts, and effortlessly withdraw when needed.
        </p>
        <p>
          Our user-friendly interface ensures a smooth and intuitive experience, giving you full control over your finances from the comfort of your own device. 
          With advanced security measures in place, you can trust that your sensitive information is safeguarded throughout every interaction. Join us on this digital financial expedition and unlock a new era of banking convenience and confidence.
        </p>
        <button className="get-started-btn">Get Started</button>
      </section>
    </div>
  );
};

export default HomePage;
