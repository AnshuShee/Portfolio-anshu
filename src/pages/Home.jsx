import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Education from '../sections/Education';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Hackathons from '../sections/Hackathons';
import Certificates from '../sections/Certificates';
import Contributors from '../sections/Contributors';
import Contact from '../sections/Contact';

const Home = () => {
  return (
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
  );
};

export default Home;
