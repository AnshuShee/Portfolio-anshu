import React from 'react';
import PageTransition from '../components/PageTransition';
import Hero from '../sections/Hero';
import Marquee from '../components/Marquee';
import About from '../sections/About';
import Experience from '../sections/Experience';
import Internship from '../sections/Internship';
import Achievements from '../sections/Achievements';
import Education from '../sections/Education';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <PageTransition>
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <div id="about">
          <About />
        </div>
        <div id="experience">
          <Experience />
          <Internship />
          <Achievements />
          <Education />
        </div>
        <div id="work-with-me">
          <Contact />
        </div>
      </main>
    </PageTransition>
  );
};

export default Home;
