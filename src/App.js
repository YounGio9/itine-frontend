import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Error from "./pages/Error";
import React from "react";
import Articles from "./pages/admin/Articles";
import Navbar from "./components/admin/Navbar";
import "./tailwind.css";
import Login from "./pages/admin/Login";
import Message from "./pages/admin/Message";
import Allproducts from "./pages/admin/Allproducts";
import Shop from "./pages/admin/Shop";
import { AuthContextProvider } from "./contexts/AuthContext";
import Home from "./pages/admin/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <div>
            <Navbar />
            <AuthContextProvider>
              <Routes>
                <Route path="admin/article" element={<Articles />} />
                <Route path="admin/login" element={<Login />} />
                <Route path="admin/message" element={<Message />} />
                <Route path="admin/allproducts" element={<Allproducts />} />
                <Route exact path="/admin" element={<Home />} />
                <Route path="admin/shop" element={<Shop />} />
                {/* <Route path="admin/register" element={<Register />} /> */}
                <Route path="*" element={<Error />} />
              </Routes>
            </AuthContextProvider>
          </div>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
