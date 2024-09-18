import React from 'react';
import { Link } from 'react-router-dom';
import './AdminHomePage.css';
// Make sure to have the correct path for your image

const AdminHomePage = () => {
  return (
    <div className="admin-home">
      <header className="admin-header">
        <div className="logo">
          <h1>Online Banking System</h1>
        </div>
        <nav className="admin-nav">
          <Link to="/register-bank">Register Bank Manager</Link>
          <Link to="/add-bank">Add Bank</Link>
          <Link to="/view-banks">View Bank</Link>
          <Link to="/all-customers">All Customers</Link>
          <Link to="/all-bank-accounts">All Bank Accounts</Link>
          <Link to="/all-bank-transactions">All Bank Transactions</Link>
          <Link to="/" className="logout-link">Logout</Link>
        </nav>
      </header>

      <main className="admin-main">
        <section className="hero-section">
          <div className="hero-content">
            <h2>Instantly transfer, deposit, and withdraw funds</h2>
            <p>Banking, simplified and streamlined.</p>
            <h3>Transact, deposit, withdraw securely.</h3>
          </div>
          <div className="hero-image">
            <img src="./image/bankinglogo3.jpg" alt="Banking illustration" />
          </div>
        </section>

        <section className="welcome-section">
          <h2>Welcome to Online Banking System</h2>
          <p>
            Welcome to our cutting-edge Online Banking System, where financial empowerment meets technological innovation. Seamlessly navigate through your financial journey with ease, as you initiate secure transactions, conveniently deposit funds into your accounts, and effortlessly withdraw when needed.
          </p>
          <p>
            Our user-friendly interface ensures a smooth and intuitive experience, giving you full control over your finances from the comfort of your own device. With advanced security measures in place, you can trust that your sensitive information is safeguarded throughout every interaction. Join us on this digital financial expedition and unlock a new era of banking convenience and confidence.
          </p>
        </section>
      </main>
    </div>
  );
};

export default AdminHomePage;
