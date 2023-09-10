import React from "react";
import { Route, Routes } from "react-router-dom";
import Articles from "../pages/admin/Articles";
import Navbar from "./admin/Navbar";
import "../tailwind.css";
import Login from "../pages/admin/Login";
import Message from "../pages/admin/Message";
import Allproducts from "../pages/admin/Allproducts";
import Home from "../pages/admin/Home";
import Shop from "../pages/admin/Shop";
import Register from "../pages/admin/Register";
import { AuthContextProvider } from "../contexts/AuthContext";

const Admin = () => {
  return (
    <div>
      <Navbar />
      <AuthContextProvider>
        <Routes>
          <Route path="/article" element={<Articles />} />
          <Route path="/login" element={<Login />} />
          <Route path="/message" element={<Message />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default Admin;
