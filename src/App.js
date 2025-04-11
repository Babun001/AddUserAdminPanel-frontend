import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Page/Home.Page';
import SignInPage from './compos/SignIn';
import LoginPage from './compos/logIn';
import AdminPage from './Page/Admin.Page';
import NewUserFrm from './compos/NewUserFrm.js'
import UserPage from './compos/userPage.js';
import FrontPage from './Page/front.Page.js';
import Userlogin from './compos/userlogin.js';
import UserDash from './compos/userDashboard.js';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/userLogin" element={<Userlogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignInPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin-page" element={<AdminPage />} />
        <Route path="/new-user-form" element={<NewUserFrm />} />
        <Route path="/user/:userId" element={<UserPage />} />
        <Route path="/user-dash/:UserName" element={<UserDash />} />
      </Routes>
    </Router>
  );
}
