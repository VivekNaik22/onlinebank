import React, { useState } from "react";
import './BankAccountDetails.css'; // Assuming you have styles in CSS

const BankAccountDetails = () => {
  const [formData, setFormData] = useState({
    bank: "Demo Bank10",
    bankAccountNo: "",
    ifscCode: "",
    customer: "Demo Customer10",
    customerContact: "",
    creationDate: new Date().toLocaleString(),
    availableBalance: 1000, // Set initial balance
    accountStatus: "Open",
    depositAmount: "",
    withdrawAmount: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(""); // To store success message

  const validateForm = () => {
    let formErrors = {};
    if (!formData.bankAccountNo) {
      formErrors.bankAccountNo = "Bank Account No is required";
    }
    if (!formData.ifscCode) {
      formErrors.ifscCode = "IFSC Code is required";
    }
    if (!formData.customerContact) {
      formErrors.customerContact = "Customer Contact is required";
    }
    if (!formData.depositAmount && !formData.withdrawAmount) {
      formErrors.amount = "Deposit or Withdraw amount is required";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDeposit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccessMessage(`Deposit successful! ₹${formData.depositAmount} has been added to your account.`);
      setFormData({
        ...formData,
        availableBalance: formData.availableBalance + parseFloat(formData.depositAmount),
        depositAmount: "",
      });
    }
  };

  const handleWithdraw = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (parseFloat(formData.withdrawAmount) > formData.availableBalance) {
        setSuccessMessage("Insufficient balance! Unable to withdraw.");
      } else {
        setSuccessMessage(`Withdrawal successful! ₹${formData.withdrawAmount} has been deducted from your account.`);
        setFormData({
          ...formData,
          availableBalance: formData.availableBalance - parseFloat(formData.withdrawAmount),
          withdrawAmount: "",
        });
      }
    }
  };

  return (
    <div className="bank-account-details">
      <h2>Customer Bank Account Detail</h2>
      <form>
        <div className="form-group">
          <label>Bank</label>
          <input
            type="text"
            name="bank"
            value={formData.bank}
            readOnly
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Bank Account No.</label>
          <input
            type="text"
            name="bankAccountNo"
            value={formData.bankAccountNo}
            onChange={handleChange}
            className={`form-control ${errors.bankAccountNo ? "is-invalid" : ""}`}
          />
          {errors.bankAccountNo && <div className="invalid-feedback">{errors.bankAccountNo}</div>}
        </div>

        <div className="form-group">
          <label>IFSC Code</label>
          <input
            type="text"
            name="ifscCode"
            value={formData.ifscCode}
            onChange={handleChange}
            className={`form-control ${errors.ifscCode ? "is-invalid" : ""}`}
          />
          {errors.ifscCode && <div className="invalid-feedback">{errors.ifscCode}</div>}
        </div>

        <div className="form-group">
          <label>Customer</label>
          <input
            type="text"
            name="customer"
            value={formData.customer}
            readOnly
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Customer Contact</label>
          <input
            type="text"
            name="customerContact"
            value={formData.customerContact}
            onChange={handleChange}
            className={`form-control ${errors.customerContact ? "is-invalid" : ""}`}
          />
          {errors.customerContact && <div className="invalid-feedback">{errors.customerContact}</div>}
        </div>

        <div className="form-group">
          <label>Creation Date</label>
          <input
            type="text"
            name="creationDate"
            value={formData.creationDate}
            readOnly
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Available Balance</label>
          <input
            type="number"
            name="availableBalance"
            value={formData.availableBalance}
            readOnly
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Account Status</label>
          <input
            type="text"
            name="accountStatus"
            value={formData.accountStatus}
            readOnly
            className="form-control"
          />
        </div>

        {/* Deposit Section */}
        <h3>Bank Deposit</h3>
        <div className="form-group">
          <label>Amount to Deposit</label>
          <input
            type="number"
            name="depositAmount"
            value={formData.depositAmount}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button
          onClick={handleDeposit}
          className={`btn btn-danger ${formData.depositAmount ? "" : "disabled"}`}
        >
          Deposit
        </button>

        {/* Withdraw Section */}
        <h3>Bank Withdraw</h3>
        <div className="form-group">
          <label>Amount to Withdraw</label>
          <input
            type="number"
            name="withdrawAmount"
            value={formData.withdrawAmount}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button
          onClick={handleWithdraw}
          className={`btn btn-danger ${formData.withdrawAmount ? "" : "disabled"}`}
        >
          Withdraw
        </button>
      </form>

      {/* Display success or error messages */}
      {successMessage && <div className="success-message">{successMessage}</div>}

      {/* Display form errors */}
      {errors.amount && <div className="error">{errors.amount}</div>}
    </div>
  );
};

export default BankAccountDetails;
