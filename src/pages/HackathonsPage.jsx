import React from 'react';
import PageTransition from '../components/PageTransition';
import Hackathons from '../sections/Hackathons';

const HackathonsPage = () => {
    return (
        <PageTransition>
            <main className="pt-20">
                <Hackathons />
            </main>
        </PageTransition>
    );
};

export default HackathonsPage;
