import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Articles from '../pages/admin/Articles';
import Navbar from './admin/Navbar';
import "../tailwind.css"
import Login from '../pages/admin/Login';
import Message from "../pages/admin/Message";

const Admin = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/article" element={<Articles/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/message" element={<Message/>}/>
      </Routes>
    </div>
  );
};

export default Admin;
