import React from 'react';
import PageTransition from '../components/PageTransition';
import Experience from '../sections/Experience';

const ExperiencePage = () => {
    return (
        <PageTransition>
            <main className="pt-20">
                <Experience />
            </main>
        </PageTransition>
    );
};

export default ExperiencePage;
