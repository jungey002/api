import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BIN_ID = '66edd20ead19ca34f8a9bf03';
const API_KEY = '$2a$10$YBBuQwD8aElBn0Sy2vzjHOU8srEjT3F/nAHmGgCE0tJliIbFd//dy';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Function to handle signup
  const handleSignup = (e) => {
    e.preventDefault();

    // Fetch existing users first to avoid duplicates
    let fetchReq = new XMLHttpRequest();
    fetchReq.onreadystatechange = () => {
      if (fetchReq.readyState === XMLHttpRequest.DONE) {
        if (fetchReq.status === 200) {
          const response = JSON.parse(fetchReq.responseText);
          const users = response.record.users || [];
          
          // Check if the user already exists
          const userExists = users.some(user => user.email === email);
          if (userExists) {
            setError('Email already exists. Please use a different email.');
          } else {
            const newUser = { email, password };
            // Save new user data to JSON bin
            let req = new XMLHttpRequest();
            req.onreadystatechange = () => {
              if (req.readyState === XMLHttpRequest.DONE) {
                if (req.status === 200) {
                  // Successfully signed up
                  navigate('/'); // Redirect to login page
                } else {
                  // Handle error response
                  const response = JSON.parse(req.responseText);
                  setError(response.message || 'An error occurred. Please try again.');
                }
              }
            };

            req.open("PUT", `https://api.jsonbin.io/v3/b/${BIN_ID}`, true);
            req.setRequestHeader("Content-Type", "application/json");
            req.setRequestHeader("X-Master-Key", API_KEY);
            req.send(JSON.stringify({ users: [...users, newUser] }));
          }
        } else {
          setError('Error fetching users. Please try again later.');
        }
      }
    };

    fetchReq.open("GET", `https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, true);
    fetchReq.setRequestHeader("X-Master-Key", API_KEY);
    fetchReq.send();
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Signup</h1>
      <form onSubmit={handleSignup} className="w-50 mx-auto">
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
        <button type="submit" className="btn btn-primary w-100">Sign Up</button> {/* Bootstrap button class */}
      </form>
      <p className="text-center mt-3">Already have an account? <a href="/">Login here</a></p>
    </div>
  );
}

export default Signup;
