import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Landing from './pages/landing/landing'
import Admin from './pages/admin/admin';
import Donation from './pages/donation/donation';
import Recipient from './pages/recipient/recipient';
import Signup from './pages/signup/Signup';
import Signin from './pages/signin/Signin';
import AdminLogin from './pages/adminLogin/adminLogin';
import UserLogin from './pages/userlogin/userlogin';
import ScheduledDonations from './pages/scheduledDonation/ScheduledDonations';
import BloodDonations from './pages/bloodDonations/BloodDonations';

function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Landing />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/donate' element={<Donation />} />
        <Route path='/recipient' element={<Recipient />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Signin />} />
        <Route path='/adminlogin' element={<AdminLogin />} />
        <Route path='/userlogin'element={<UserLogin />}  />
        <Route path='/scheduleddonations'element={<ScheduledDonations />}  />
        <Route path='/blooddonations'element={<BloodDonations />}  />
      </Routes>
    </BrowserRouter>
  )
}

export default App
