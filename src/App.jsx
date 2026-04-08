import React from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import BackToTop from './components/BackToTop';
import ChatBot from './components/ChatBot';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Hackathons from './sections/Hackathons';
import Certificates from './sections/Certificates';
import Contributors from './sections/Contributors';
import Contact from './sections/Contact';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden font-sans selection:bg-orange-500 selection:text-white" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
      <CustomCursor />
      <AnimatePresence mode="wait">
        <Loader />
      </AnimatePresence>
      <ScrollProgress />
      <BackToTop />
      <ChatBot />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Hackathons />
        <Certificates />
        <Contributors />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
