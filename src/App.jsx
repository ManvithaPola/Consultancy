// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import ContactUsPage from './pages/ContactUsPage';
import UniversitiesPage from './pages/UniversitiesPage';
import Courses from './pages/Courses';
import ScholarshipsPage from './pages/ScholarshipsPage';
import ConsultationPage from './pages/ConsultationPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {/* Navbar will be on every page */}
      <Navbar />

      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/universities" element={<UniversitiesPage />} />
        <Route path="/scholarships" element={<ScholarshipsPage />} />
        <Route path="/consultation" element={<ConsultationPage />} />
        {/* Add other pages as you create them */}
      </Routes>
      {/* Footer will be on every page */}
      <Footer />
    </Router>
  );
}
export default App;
