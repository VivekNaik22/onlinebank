import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './homepage/Header';
import HeroSection from './homepage/HeroSection';
import MainContent from './homepage/MainContent';
import Footer from './homepage/Footer';
import Login from './homepage/Login';
import RegisterUser from './homepage/UserRegistration'; // Corrected import
import Register from './homepage/Register'; // Corrected import
import RegisterBankManager from './Admin/BankManagerRegistration';
import AdminHomePage from './Admin/AdminHomePage';  // Corrected import
import AddBankForm from './Admin/AddBankForm';
import BankRegistrationForm from './homepage/BankRegistrationForm';
import Table from './Admin/BankTable';
import Allmembers from './Admin/BankCustomers';
import Allbank from './Admin/BankAccountList';
import Alltransation from './Admin/CustomerTransactions';
import BankAccountDetails from './Admin/BankAccountDetails';
import ForgotPassword from './homepage/ForgotPassword';
import Bankhomepage from './Bank/HomePage';
import RegisterCustomerForm from './Bank/RegisterCustomerForm';
import AllBankCustomers from './Bank/AllBankCustomers';
import BankAccountDetailsinbank from './Bank/BankAccountDetails';
import AllBankAccounts from './Bank/AllBankAccounts';
import CustomerTransactions from './Bank/CustomerTransactions';
import AllCustomerTransactions from './Bank/AllCustomerTransactions';
import AddBankAccount from './Bank/AddBankAccount';
import HomePage from './coustomer/HomePage';
import CustomerBankAccountDetail from './coustomer/CustomerBankAccountDetail';
import UserCustomerTransactions from './coustomer/CustomerTransactions';
import TransferMoney from './coustomer/TransferMoney';
import BillPaymentPage from './coustomer/BillPaymentPage';


function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the homepage */}
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <HeroSection />
              <MainContent />
              <Footer />
            </>
          } 
        />
        {/* Route for the Login page */}
        <Route path="/login" element={<Login />} />
        {/* Routes for the different registration pages */}
        <Route path="/register-user" element={<RegisterUser />} />
        <Route path="/register-admin" element={<Register />} />
        <Route path="/register-bank-manager" element={<RegisterBankManager />} />
        <Route path="/admin-home" element={<AdminHomePage />} />
        <Route path="/add-bank" element={<AddBankForm />} />
        <Route path="/register-bank" element={<BankRegistrationForm />} />
        <Route path="/Footer" element={<Footer/>} />
        <Route path="/view-banks" element={<Table />} />
        <Route path="/all-customers" element={<Allmembers />} />
        <Route path="/all-bank-accounts" element={<Allbank />} />
        <Route path="/all-bank-transactions" element={<Alltransation />} />
        <Route path="/account-details/:customerName" element={<BankAccountDetails />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/bank-homepage" element={<Bankhomepage />} />
        <Route path="/register-bankcoustmer" element={<RegisterCustomerForm />} />
        <Route path="/allbank-coustomer" element={< AllBankCustomers/>} />
        <Route path="/account-acdetails/:customerName" element={<BankAccountDetailsinbank />} />
        <Route path="/bank-accountsbank" element={<AllBankAccounts />} />
        <Route path="/account-details" element={<BankAccountDetailsinbank />} />
        <Route path="/account-transactions" element={<CustomerTransactions />} />
        <Route path="/customer-transactions" element={<AllCustomerTransactions />} />
        <Route path="/add-bank-account" element={<AddBankAccount />} />
        <Route path="/user-homepage" element={<HomePage />} />
        <Route path="/bank-Account" element={<CustomerBankAccountDetail />} />
        <Route path="/user-transactions" element={<UserCustomerTransactions />} />
        <Route path="/transfer-money" element={<TransferMoney />} />
        <Route path="/bill-payment" element={<BillPaymentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
