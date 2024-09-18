import React, { useState } from 'react';
import './AllBankCustomers.css'; // Assuming a CSS file for styling
import AddBankAccount from './AddBankAccount'; // Import the AddBankAccount component

const AllBankCustomers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState(null); // State to store selected customer

  // Sample data for bank customers
  const customersData = [
    {
      customerName: 'Demo Customer10',
      bankName: 'Demo Bank10',
      email: 'demo.customer10@example.com',
      gender: 'Male',
      contact: '1234567890',
      street: 'Demo Street',
      city: 'Demo City',
      pincode: '123456',
      status: 'Active'
    },
    // Add more customers as needed
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddAccount = (customer) => {
    setSelectedCustomer(customer); // Set the customer whose account is being added
  };

  const handleDeactivate = (customerName) => {
    alert(`Deactivate ${customerName}`);
    // Handle Deactivate logic here
  };

  // Filtered customers based on search term
  const filteredCustomers = customersData.filter((customer) =>
    customer.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bank-customers-container">
      <h2>All Bank Customers</h2>

      {!selectedCustomer ? (
        <>
          <div className="search-bar">
            <label>Customer Name</label>
            <input
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={handleSearch}
            />
            <button className="search-button">Search</button>
          </div>

          <table className="customers-table">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Bank Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Contact</th>
                <th>Street</th>
                <th>City</th>
                <th>Pincode</th>
                <th>Account Details</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer, index) => (
                <tr key={index}>
                  <td>{customer.customerName}</td>
                  <td>{customer.bankName}</td>
                  <td>{customer.email}</td>
                  <td>{customer.gender}</td>
                  <td>{customer.contact}</td>
                  <td>{customer.street}</td>
                  <td>{customer.city}</td>
                  <td>{customer.pincode}</td>
                  <td>
                    <button
                      className="add-account-button"
                      onClick={() => handleAddAccount(customer)}
                    >
                      Add Account
                    </button>
                  </td>
                  <td>{customer.status}</td>
                  <td>
                    <button
                      className="deactivate-button"
                      onClick={() => handleDeactivate(customer.customerName)}
                    >
                      Deactivate
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <AddBankAccount customer={selectedCustomer} /> // Pass selected customer to AddBankAccount
      )}
    </div>
  );
};

export default AllBankCustomers;
