import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const BIN_ID = '66f31820acd3cb34a88a9f61';
const API_KEY = '$2a$10$YBBuQwD8aElBn0Sy2vzjHOU8srEjT3F/nAHmGgCE0tJliIbFd//dy';

function Transactions() {
  const [email, setEmail] = useState(''); // Logged-in user's email
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('Deposit');
  const [transactions, setTransactions] = useState([]);
  const [totalDeposits, setTotalDeposits] = useState(0);
  const [totalWithdrawals, setTotalWithdrawals] = useState(0);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the logged-in user's email from local storage or another method
    const loggedInUserEmail = localStorage.getItem('userEmail');
    if (!loggedInUserEmail) {
      navigate('/'); // Redirect to login if not logged in
    } else {
      setEmail(loggedInUserEmail);
      fetchTransactions(loggedInUserEmail);
    }
  }, [navigate]);

  // Function to fetch transactions for the logged-in user
  const fetchTransactions = (userEmail) => {
    const fetchReq = new XMLHttpRequest();
    fetchReq.onreadystatechange = () => {
      if (fetchReq.readyState === XMLHttpRequest.DONE) {
        if (fetchReq.status === 200) {
          const response = JSON.parse(fetchReq.responseText);
          const userTransactions = response.record.transactions || [];
          setTransactions(userTransactions);
          calculateTotals(userTransactions, userEmail);
        } else {
          setError('Error fetching transactions. Please try again later.');
        }
      }
    };

    fetchReq.open("GET", `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, true);
    fetchReq.setRequestHeader("X-Master-Key", API_KEY);
    fetchReq.send();
  };

  // Function to handle transaction submission
  const handleTransactionSubmit = (e) => {
    e.preventDefault();
    
    // Convert amount to a number
    const transactionAmount = parseFloat(amount);

    // Create a new transaction object
    const newTransaction = { email, amount: transactionAmount, type: transactionType };

    // Save new transaction data to JSON bin
    const req = new XMLHttpRequest();
    req.onreadystatechange = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          // After saving, fetch the updated transactions
          fetchTransactions(email);
          setAmount(''); // Clear input fields
        } else {
          setError('An error occurred while saving the transaction.');
        }
      }
    };

    req.open("PUT", `https://api.jsonbin.io/v3/b/${BIN_ID}`, true);
    req.setRequestHeader("Content-Type", "application/json");
    req.setRequestHeader("X-Master-Key", API_KEY);

    // Update the transactions array
    const updatedTransactions = [...transactions, newTransaction];

    // Send the updated transactions back to JSON Bin
    req.send(JSON.stringify({ transactions: updatedTransactions }));
  };

  // Function to calculate totals
  const calculateTotals = (userTransactions, userEmail) => {
    const userFilteredTransactions = userTransactions.filter(transaction => transaction.email === userEmail);
    
    const deposits = userFilteredTransactions.filter(transaction => transaction.type === 'Deposit');
    const withdrawals = userFilteredTransactions.filter(transaction => transaction.type === 'Withdraw');
    
    const totalDepositAmount = deposits.reduce((acc, curr) => acc + curr.amount, 0);
    const totalWithdrawalAmount = withdrawals.reduce((acc, curr) => acc + curr.amount, 0);
    
    setTotalDeposits(totalDepositAmount);
    setTotalWithdrawals(totalWithdrawalAmount);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Transactions</h1>
      <h2 className="text-center">Welcome, {email}</h2>
      
      <form onSubmit={handleTransactionSubmit} className="mb-4">
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input 
            type="number" 
            className="form-control" 
            id="amount" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="transactionType">Transaction Type:</label>
          <select 
            className="form-control" 
            id="transactionType" 
            value={transactionType} 
            onChange={(e) => setTransactionType(e.target.value)}
          >
            <option value="Deposit">Deposit</option>
            <option value="Withdraw">Withdraw</option>
          </select>
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button type="submit" className="btn btn-primary">Submit Transaction</button>
      </form>

      <h2>Total Deposits: ${totalDeposits.toFixed(2)}</h2>
      <h2>Total Withdrawals: ${totalWithdrawals.toFixed(2)}</h2>
      <h2>Balance: ${(totalDeposits - totalWithdrawals).toFixed(2)}</h2>
      
      <h3>Transaction History:</h3>
      <ul className="list-group">
        {transactions.filter(transaction => transaction.email === email).map((transaction, index) => (
          <li key={index} className="list-group-item">
            {transaction.type}: ${transaction.amount} - {transaction.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Transactions;
