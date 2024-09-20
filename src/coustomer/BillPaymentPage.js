import React, { useState } from 'react';

function BillPaymentPage() {
  const [selectedBill, setSelectedBill] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [accountId, setAccountId] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [electricityProvider, setElectricityProvider] = useState('');
  const [simProvider, setSimProvider] = useState('');
  const [tvProvider, setTvProvider] = useState('');
  const [processing, setProcessing] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');

  const [errors, setErrors] = useState({});

  const electricityProviders = {
    Karnataka: ['BESCOM', 'HESCOM', 'MESCOM'],
    Maharashtra: ['MSEB', 'BEST', 'Tata Power'],
    Gujarat: ['PGVCL', 'UGVCL', 'MGVCL'],
  };

  const simPlans = {
    Airtel: [100, 200, 300],
    Jio: [150, 250, 350],
    Vodafone: [120, 220, 320],
    BSNL: [130, 230, 330],
  };

  const tvPlans = {
    Videocon: [200, 400, 600],
    'Airtel Xstream': [250, 500, 750],
    'Tata Play': [300, 600, 900],
  };

  const validateForm = () => {
    let formErrors = {};

    if (selectedBill === 'Electricity') {
      if (!electricityProvider) {
        formErrors.electricityProvider = 'Please select an electricity provider.';
      }
      if (!accountNumber) {
        formErrors.accountNumber = 'Account number is required.';
      }
      if (!accountId || accountId.length !== 12) {
        formErrors.accountId = 'Account ID must be exactly 12 digits.';
      }
      if (!amount || amount <= 0) {
        formErrors.amount = 'Please enter a valid amount.';
      }
    }

    if (selectedBill === 'MobileRecharge') {
      if (!simProvider) {
        formErrors.simProvider = 'Please select a SIM provider.';
      }
      if (!mobileNumber) {
        formErrors.mobileNumber = 'Mobile number is required.';
      }
      if (!selectedPlan) {
        formErrors.selectedPlan = 'Please select a recharge plan.';
      }
      if (!amount || amount <= 0) {
        formErrors.amount = 'Please enter a valid amount.';
      }
    }

    if (selectedBill === 'TVRecharge') {
      if (!tvProvider) {
        formErrors.tvProvider = 'Please select a TV provider.';
      }
      if (!accountId || accountId.length !== 12) {
        formErrors.accountId = 'Account ID must be exactly 12 digits.';
      }
      if (!selectedPlan) {
        formErrors.selectedPlan = 'Please select a recharge plan.';
      }
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
    setAmount(plan); // Set amount based on selected plan
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    setProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      setMessage(`Payment of ₹${amount} for ${selectedBill} was successful.`);
      // Reset form fields
      setAccountNumber('');
      setAccountId('');
      setMobileNumber('');
      setAmount('');
      setElectricityProvider('');
      setSimProvider('');
      setTvProvider('');
      setSelectedPlan('');
    }, 2000); // Simulate a delay
  };

  return (
    <div style={styles.container}>
      <h2>Bill Payment</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Select Bill Type:</label>
          <select
            value={selectedBill}
            onChange={(e) => {
              setSelectedBill(e.target.value);
              setSimProvider('');
              setTvProvider('');
              setMobileNumber('');
              setAmount('');
              setSelectedPlan('');
              setElectricityProvider('');
              setErrors({});
            }}
            style={styles.input}
            required
          >
            <option value="">Select Bill Type</option>
            <option value="Electricity">Electricity Bill</option>
            <option value="MobileRecharge">Mobile Recharge</option>
            <option value="TVRecharge">TV Recharge</option>
          </select>
        </div>

        {/* Electricity Bill */}
        {selectedBill === 'Electricity' && (
          <>
            <div style={styles.inputGroup}>
              <label>Select State Provider:</label>
              <select
                value={electricityProvider}
                onChange={(e) => setElectricityProvider(e.target.value)}
                style={styles.input}
                required
              >
                <option value="">Select State Provider</option>
                <option value="BESCOM">BESCOM (Bangalore Electricity)</option>
                <option value="HESCOM">HESCOM (Hubli Electricity)</option>
                <option value="MESCOM">MESCOM (Mangalore Electricity)</option>
              </select>
              {errors.electricityProvider && <p style={styles.error}>{errors.electricityProvider}</p>}
            </div>

            <div style={styles.inputGroup}>
              <label>Account Number:</label>
              <input
                type="text"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                style={styles.input}
                placeholder="Enter account number"
                required
              />
              {errors.accountNumber && <p style={styles.error}>{errors.accountNumber}</p>}
            </div>

            <div style={styles.inputGroup}>
              <label>Account ID:</label>
              <input
                type="text"
                value={accountId}
                onChange={(e) => setAccountId(e.target.value)}
                style={styles.input}
                placeholder="Enter account ID (12 digits)"
                maxLength="12"
                required
              />
              {errors.accountId && <p style={styles.error}>{errors.accountId}</p>}
            </div>

            <div style={styles.inputGroup}>
              <label>Amount:</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                style={styles.input}
                placeholder="Enter amount"
                min="1"
                required
              />
              {errors.amount && <p style={styles.error}>{errors.amount}</p>}
            </div>
          </>
        )}

        {/* Mobile Recharge */}
        {selectedBill === 'MobileRecharge' && (
          <>
            <div style={styles.inputGroup}>
              <label>SIM Provider:</label>
              <select
                value={simProvider}
                onChange={(e) => {
                  setSimProvider(e.target.value);
                  setSelectedPlan(''); // Reset plan selection when provider changes
                  setAmount('');
                  setErrors({});
                }}
                style={styles.input}
                required
              >
                <option value="">Select SIM Provider</option>
                <option value="Airtel">Airtel</option>
                <option value="Jio">Jio</option>
                <option value="Vodafone">Vodafone</option>
                <option value="BSNL">BSNL</option>
              </select>
              {errors.simProvider && <p style={styles.error}>{errors.simProvider}</p>}
            </div>

            <div style={styles.inputGroup}>
              <label>Mobile Number:</label>
              <input
                type="text"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                style={styles.input}
                placeholder="Enter mobile number"
                required
              />
              {errors.mobileNumber && <p style={styles.error}>{errors.mobileNumber}</p>}
            </div>

            <div style={styles.inputGroup}>
              <label>Select Recharge Plan:</label>
              <select
                value={selectedPlan}
                onChange={(e) => handlePlanChange(e.target.value)}
                style={styles.input}
                required
              >
                <option value="">Select Plan</option>
                {simPlans[simProvider]?.map((plan, index) => (
                  <option key={index} value={plan}>
                    ₹{plan}
                  </option>
                ))}
              </select>
              {errors.selectedPlan && <p style={styles.error}>{errors.selectedPlan}</p>}
            </div>
          </>
        )}

        {/* TV Recharge */}
        {selectedBill === 'TVRecharge' && (
          <>
            <div style={styles.inputGroup}>
              <label>TV Provider:</label>
              <select
                value={tvProvider}
                onChange={(e) => {
                  setTvProvider(e.target.value);
                  setSelectedPlan(''); // Reset plan selection when provider changes
                  setAmount('');
                  setErrors({});
                }}
                style={styles.input}
                required
              >
                <option value="">Select TV Provider</option>
                <option value="Videocon">Videocon</option>
                <option value="Airtel Xstream">Airtel Xstream</option>
                <option value="Tata Play">Tata Play</option>
              </select>
              {errors.tvProvider && <p style={styles.error}>{errors.tvProvider}</p>}
            </div>

            <div style={styles.inputGroup}>
              <label>Account ID:</label>
              <input
                type="text"
                value={accountId}
                onChange={(e) => setAccountId(e.target.value)}
                style={styles.input}
                placeholder="Enter account ID (12 digits)"
                maxLength="12"
                required
              />
              {errors.accountId && <p style={styles.error}>{errors.accountId}</p>}
            </div>

            <div style={styles.inputGroup}>
              <label>Select Recharge Plan:</label>
              <select
                value={selectedPlan}
                onChange={(e) => handlePlanChange(e.target.value)}
                style={styles.input}
                required
              >
                <option value="">Select Plan</option>
                {tvPlans[tvProvider]?.map((plan, index) => (
                  <option key={index} value={plan}>
                    ₹{plan}
                  </option>
                ))}
              </select>
              {errors.selectedPlan && <p style={styles.error}>{errors.selectedPlan}</p>}
            </div>
          </>
        )}

        <button type="submit" disabled={processing} style={styles.button}>
          {processing ? 'Processing...' : 'Submit Payment'}
        </button>

        {message && <p style={styles.successMessage}>{message}</p>}
      </form>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '100%',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '14px',
  },
  successMessage: {
    color: 'green',
    fontSize: '16px',
    marginTop: '20px',
  },
};

export default BillPaymentPage;
