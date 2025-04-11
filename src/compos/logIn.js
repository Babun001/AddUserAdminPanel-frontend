import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const navigator = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();

    // phoneNumber = Number(phoneNumber);

    const isNumeric = /^\d+$/.test(phoneNumber);

    if (!isNumeric) {
      alert(`Enter valid Phone Number!`)
      return;
    }
    try {
      const response = await fetch('https://adduseradminpanel-backend.onrender.com/v1/api/admin-login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          phoneNumber: Number(phoneNumber),
          password
        })
      })

      if(response.status === 200){
        alert("Welcome to admin panel!")
        navigator('/admin-page')
      }else{
        const error = await response.text();
        alert(`Error: ${error}`);
      }

    } catch (error) {
      console.error("Error in handleLogin: ", error);
      
    }

  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-3">Admin Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
}
