import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Brands from "./pages/Brands";
import Press from "./pages/Press";
import Franchise from "./pages/Franchise";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/press" element={<Press />} />
        <Route path="/franchise" element={<Franchise />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
