import logo from './logo.svg';
import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import mylogo from './img/logo1.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Login from './Login';
import SignUp from './SignUp';
import Transactions from './Transactions';

function App() {

  const [accounts, setAccounts] = useState({});

  const handleDeposit = (accountNumber, amount) => {
    amount = parseFloat(amount);
    setAccounts((prevAccounts) => {
      const account = prevAccounts[accountNumber] || { balance: 0, transactions: [] };
      const newBalance = account.balance + amount;
      const newTransaction = {
        type: 'Deposit',
        accountNumber,
        amount,
        balance: newBalance
      };
      return {
        ...prevAccounts,
        [accountNumber]: {
          balance: newBalance,
          transactions: [...account.transactions, newTransaction]
        }
      };
    });
  };

  const handleWithdraw = (accountNumber, amount) => {
    amount = parseFloat(amount);
    setAccounts((prevAccounts) => {
      const account = prevAccounts[accountNumber] || { balance: 0, transactions: [] };
      const newBalance = account.balance - amount;
      if (newBalance < 0) {
        alert('Insufficient funds!');
        return prevAccounts;  
      }
      const newTransaction = {
        type: 'Withdraw',
        accountNumber,
        amount,
        balance: newBalance
      };
      return {
        ...prevAccounts,
        [accountNumber]: {
          balance: newBalance,
          transactions: [...account.transactions, newTransaction]
        }
      };
    });
  };

  return (
    <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          <img src={mylogo} alt="Logo" className="d-inline-block align-top" />
              {' '}
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="mynav navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Sign Up</Link>
              </li>
             
              
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Transactions" element={<Transactions />} />
        </Routes>
      </div>
      <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Explore our services</h4>
          <ul>
            <li>Bank Accounts</li>
            <li>Credit Card</li>
            <li>Mortgages</li>
            <li>Loans</li>
            <li>Investments</li>
            <li>Creditor Insurance</li>
            <li>Travel Insurance</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Security Centre</h4>
          <ul>
            <li>How We Protect You</li>
            <li>How to Protect Yourself</li>
            <li>Security Tips</li>
            <li>Learning Centre</li>
            <li>Report Fraud</li>
            <li>Report Lost/Stolen Debit Card</li>
            <li>Report Lost/Stolen Credit Card</li>
            <li>Security Alerts</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Ways to Bank</h4>
          <ul>
            <li>Overview</li>
            <li>Register for Online Banking</li>
            <li>Digital Banking</li>
            <li>Deposit Money</li>
            <li>Request Money</li>
            <li>Transfer Money</li>
            <li>Send Money</li>
            <li>Global Money Transfer</li>
            <li>Pay Bills</li>
            <li>BMO Debit Card</li>
            <li>Overdraft Protection</li>
            <li>CRA Direct Deposit</li>
            <li>Digital Demos</li>
            <li>BMO Alerts</li>
          </ul>
        </div>

       
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-links">
          <a href="#">CUSTOMER SUPPORT</a>
          <a href="#">BRANCH LOCATOR</a>
          <a href="#">BOOK AN APPOINTMENT</a>
        </div>
        <div className="social-icons">
          <a href="#">YouTube</a>
          <a href="#">X</a>
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
        </div>
        <div className="footer-legal">
          <a href="#">About BMO</a>
          <a href="#">Investor Relations</a>
          <a href="#">Privacy</a>
          <a href="#">Legal</a>
          <a href="#">Modern Slavery Act Statement</a>
          <a href="#">Careers</a>
          <a href="#">Accessibility at BMO</a>
          <a href="#">Accessibility Feedback</a>
        </div>
      </div>
    </footer>
    </div>
  </Router>
  );
}

export default App;
