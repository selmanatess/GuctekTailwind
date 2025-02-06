import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import DropdownMenu from './components/DropdownMenu';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Nopage from './Pages/Nopage';
import Product from './Pages/Product';
import Footer from './components/Footer';
import Getoffer from './Pages/Getoffer';
import AboutUs from './Pages/AboutUs';
import AssistantBot from './Pages/AsistanBot';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Product />} />
          <Route path="/getoffer" element={<Getoffer />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
        <Footer />
        <AssistantBot /> {/* Asistan botu Footer'dan hemen önce eklenmeli */}
      </BrowserRouter>
    </>
  );
}

export default App;
