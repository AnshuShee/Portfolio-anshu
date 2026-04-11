import React from 'react';
import PageTransition from '../components/PageTransition';
import About from '../sections/About';
import Experience from '../sections/Experience';
import Education from '../sections/Education';

const AboutPage = () => {
    return (
        <PageTransition>
            <main className="pt-20">
                <About />
                <Experience />
                <Education />
            </main>
        </PageTransition>
    );
};

export default AboutPage;
