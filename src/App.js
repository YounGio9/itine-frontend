import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Testimonial from "./pages/Testimonial";
import Products from "./pages/Products";
import BlogList from "./pages/BlogList";
import Admin from "./components/Admin";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            {/* route-client */}
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/product" element={<Products />} />
            <Route path="/blog_list" element={<BlogList />} />
            {/* route-admin */}
            <Route path="/admin/*" element={<Admin />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
