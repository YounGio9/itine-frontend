import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Articles from '../pages/admin/Articles';
import Navbar from './admin/Navbar';
import "../tailwind.css"
const Admin = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/article" element={<Articles />} />
      </Routes>
    </div>
  );
};

export default Admin;
