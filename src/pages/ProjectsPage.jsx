import React from 'react';
import PageTransition from '../components/PageTransition';
import ProjectsSection from '../sections/ProjectsSection';
import UIUXSection from '../sections/UIUXSection';

const ProjectsPage = () => {
    return (
        <PageTransition>
            <main className="bg-[#030303] min-h-screen">
                <ProjectsSection />
                <UIUXSection />
            </main>
        </PageTransition>
    );
};

export default ProjectsPage;
