// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


import Home from './pages/Home';
import ContactUsPage from './pages/ContactUsPage';
import PricingPage from './pages/PricingPage';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="bg-gray-50 font-sans">
        {/* Navbar visible on all pages */}
        <Navbar />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="*" element={<div className="text-center py-20">404 - Page Not Found</div>} />
        </Routes>

        {/* Footer visible on all pages */}
        <Footer />
      </div>
    </Router>
  );
}
