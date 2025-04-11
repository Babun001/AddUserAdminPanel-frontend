import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h2 className="mb-4">Sign in / log in</h2>
      <button className="btn btn-primary w-50 mb-3" onClick={() => navigate('/signup')}>
        Sign Up
      </button>
      <p>If you already have an account</p>
      <button className="btn btn-outline-primary w-50" onClick={() => navigate('/login')}>
        Login
      </button>
      {/* <button className='btn btn-danger' onClick={()=>navigate('/admin-page')}>admin page direct</button> */}
    </div>
  );
}
