import React from "react";
import { Route, Routes } from "react-router-dom";
import Articles from "../pages/admin/Articles";
import "../tailwind.css";
import Login from "../pages/admin/Login";
import Message from "../pages/admin/Message";
import Allproducts from "../pages/admin/Allproducts";
import Home from "../pages/admin/Home";
import Shop from "../pages/admin/Shop";
import Register from "../pages/admin/Register";
import { AuthContextProvider } from "../contexts/AuthContext";
import Error from "../pages/Error";
import Delivery from "../pages/admin/Delivery";
import Sidebar from "./admin/Sidebar";

const Admin = () => {
  return (
    <div>
      <Sidebar />
      <AuthContextProvider>
        <Routes>
          <Route path="/article" element={<Articles />} />
          <Route path="/login" element={<Login />} />
          <Route path="/message" element={<Message />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path="admin/delivery" element={<Delivery />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default Admin;
