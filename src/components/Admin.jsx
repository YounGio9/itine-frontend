import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Articles from '../pages/admin/Articles';
import Navbar from './admin/Navbar';
import "../tailwind.css"
import Login from '../pages/admin/Login';
const Admin = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/article" element={<Articles />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Admin;
