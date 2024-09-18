import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const BankCustomers = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const customers = [
    {
      customerName: "DemoCust",
      bankName: "Demo Bank",
      email: "customer@gmail.com",
      gender: "Male",
      contact: "1234567890",
      street: "Demo Street",
      city: "Demo City",
      pincode: "400078",
      accountLinked: true,
      status: "Active",
      accountNumber: "1234567890", // Added account number
      ifscCode: "DEMO123456",
      availableBalance: "500",
      accountStatus: "Open",
      creationDate: "8/11/2023, 9:17:59 PM"
    },
    {
      customerName: "DemoCust2",
      bankName: "Demo Bank",
      email: "customer2@gmail.com",
      gender: "Male",
      contact: "0000000000",
      street: "Demo Street",
      city: "Demo City",
      pincode: "400078",
      accountLinked: true,
      status: "Active",
      accountNumber: "9876543210", // Added account number
      ifscCode: "DEMO123456",
      availableBalance: "700",
      accountStatus: "Open",
      creationDate: "8/12/2023, 10:00:00 AM"
    },
    // Add more customer objects with necessary details here...
  ];

  const filteredCustomers = customers.filter((customer) =>
    customer.customerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ margin: "20px", border: "1px solid #900", borderRadius: "10px", backgroundColor: "#fff4e6" }}>
      <h1 style={{ textAlign: "center", backgroundColor: "#900", color: "#fff", padding: "10px 0", borderRadius: "10px 10px 0 0" }}>
        All Bank Customers
      </h1>
      <div style={{ padding: "10px", textAlign: "center" }}>
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f7c4a6" }}>
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
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer, index) => (
            <tr key={index} style={{ textAlign: "center", backgroundColor: customer.status === "Deactivated" ? "#ffe6e6" : "#fff" }}>
              <td>{customer.customerName}</td>
              <td>{customer.bankName}</td>
              <td>{customer.email}</td>
              <td>{customer.gender}</td>
              <td>{customer.contact}</td>
              <td>{customer.street}</td>
              <td>{customer.city}</td>
              <td>{customer.pincode}</td>
              <td>
                {customer.accountLinked ? (
                  <Link to={`/account-details/${customer.accountNumber}`}>
                    <button style={{ padding: "5px 10px", backgroundColor: "#900", color: "#fff", border: "none", borderRadius: "5px" }}>
                      View Account
                    </button>
                  </Link>
                ) : (
                  <button style={{ padding: "5px 10px", backgroundColor: "#bbb", color: "#fff", border: "none", borderRadius: "5px" }}>
                    NOT LINKED
                  </button>
                )}
              </td>
              <td>{customer.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BankCustomers;
