import React from 'react';
import PageTransition from '../components/PageTransition';
import Skills from '../sections/Skills';

const SkillsPage = () => {
    return (
        <PageTransition>
            <main className="pt-20">
                <Skills />
            </main>
        </PageTransition>
    );
};

export default SkillsPage;
