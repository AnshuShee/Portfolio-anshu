import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';
import ChatBot from './components/ChatBot';

import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';
import SkillsPage from './pages/SkillsPage';
import CertificatesPage from './pages/CertificatesPage';
import HackathonsPage from './pages/HackathonsPage';
import OpenSourcePage from './pages/OpenSourcePage';


// Inner component that has access to useLocation (must be inside <Router>)
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/certificates" element={<CertificatesPage />} />
        <Route path="/hackathons" element={<HackathonsPage />} />
        <Route path="/opensource" element={<OpenSourcePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans selection:bg-orange-500 selection:text-white" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
        <CustomCursor />
        {/* Loader sits on top — GSAP will push it off-screen while revealing #main-content */}
        <Loader />
        <ScrollProgress />
        <BackToTop />
        <ChatBot />

        {/*
          #main-content: initially pushed 100% off-screen (below).
          GSAP Loader animates this to yPercent: 0 simultaneously with loader exit.
          overflow: hidden prevents scroll during transition.
        */}
        <div id="main-content" style={{ willChange: 'transform', overflowX: 'hidden' }}>
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
