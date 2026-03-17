import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import ParticlesBackground from './components/ParticlesBackground';
import BackToTop from './components/BackToTop';
import ChatBot from './components/ChatBot';
import WaveDivider from './components/WaveDivider';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Contributors from './sections/Contributors';
import Contact from './sections/Contact';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-white font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <ParticlesBackground />
      <CustomCursor />
      <AnimatePresence>
        <Loader />
      </AnimatePresence>
      <ScrollProgress />
      <BackToTop />
      <ChatBot />
      <Navbar />
      <main>
        <Hero />
        <WaveDivider />
        <About />
        <WaveDivider flip />
        <Skills />
        <WaveDivider />
        <Projects />
        <WaveDivider flip color="purple" />
        <Certificates />
        <WaveDivider />
        <Contributors />
        <WaveDivider flip color="slate" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
