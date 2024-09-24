import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BIN_ID = '66edd20ead19ca34f8a9bf03';
const API_KEY = '$2a$10$YBBuQwD8aElBn0Sy2vzjHOU8srEjT3F/nAHmGgCE0tJliIbFd//dy';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Function to handle login
  const handleLogin = (e) => {
    e.preventDefault();

    // Fetch users from the JSON bin
    const req = new XMLHttpRequest();
    req.onreadystatechange = () => {
      if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
          const response = JSON.parse(req.responseText);
          const users = response.record.users || [];
          
          // Check if user exists
          const user = users.find((user) => user.email === email && user.password === password);
          if (user) {
            localStorage.setItem('userEmail', email); // Save email to local storage
            navigate('/Transactions'); // Redirect to dashboard
          } else {
            setError('Invalid email or password. Please try again.');
          }
        } else {
          setError('Error fetching data. Please try again later.');
        }
      }
    };

    req.open("GET", `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, true);
    req.setRequestHeader("X-Master-Key", API_KEY);
    req.send();
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Login</h1>
      <form onSubmit={handleLogin} className="w-50 mx-auto">
        <div className="form-group mb-3">
          <label>Email:</label>
          <input 
            type="email" 
            className="form-control" // Bootstrap class for styling
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group mb-3">
          <label>Password:</label>
          <input 
            type="password" 
            className="form-control" // Bootstrap class for styling
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" className="btn btn-primary w-100">Login</button> {/* Bootstrap button class */}
      </form>
    </div>
  );
}

export default Login;
