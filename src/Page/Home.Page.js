import React from 'react';
// import { useNavigate } from 'react-router-dom';
import LoginPage from '../compos/logIn';

export default function Home() {
  // const navigate = useNavigate();

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
      {/* <h2 className="mb-4">Admin log in</h2> */}
      {/* <button className="btn btn-primary w-50 mb-3" onClick={() => navigate('/signup')}>
        Sign Up
      </button>
      <p>If you already have an account</p> */}
      <LoginPage/>
      {/* <button className='btn btn-danger' onClick={()=>navigate('/admin-page')}>admin page direct</button> */}
    </div>
  );
}
