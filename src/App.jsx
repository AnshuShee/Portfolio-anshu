import React from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';
import ChatBot from './components/ChatBot';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="min-h-screen overflow-x-hidden font-sans selection:bg-orange-500 selection:text-white" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
        <CustomCursor />
        <AnimatePresence mode="wait">
          <Loader />
        </AnimatePresence>
        <ScrollProgress />
        <BackToTop />
        <ChatBot />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
