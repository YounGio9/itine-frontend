import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Error from "./pages/Error";
import React from "react";
import Articles from "./pages/admin/Articles";
import "./tailwind.css";
import Login from "./pages/admin/Login";
import Message from "./pages/admin/Message";
import Allproducts from "./pages/admin/Allproducts";
import Shop from "./pages/admin/Shop";
import { AuthContextProvider } from "./contexts/AuthContext";
import Home from "./pages/admin/Home";
import Delivery from "./pages/admin/Delivery";
import Sidebar from "./components/admin/Sidebar";
import Header from "./components/Header";
import photo from "./assets/vetement-child1.png";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <AuthContextProvider>
            <Sidebar />
            <Header photo={photo} />
            <Routes>
              <Route path="admin/article" element={<Articles />} />
              <Route path="admin/login" element={<Login />} />
              <Route path="admin/message" element={<Message />} />
              <Route path="admin/allproducts" element={<Allproducts />} />
              <Route path="admin/delivery" element={<Delivery />} />
              <Route exact path="/admin" element={<Home />} />
              <Route path="admin/shop" element={<Shop />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </AuthContextProvider>
        </div>
      </div>
    </Router>
  );
}

export default App;
