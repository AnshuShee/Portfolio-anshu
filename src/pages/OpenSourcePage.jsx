import React from 'react';
import PageTransition from '../components/PageTransition';
import Contributors from '../sections/Contributors';

const OpenSourcePage = () => {
    return (
        <PageTransition>
            <main className="pt-20">
                <Contributors />
            </main>
        </PageTransition>
    );
};

export default OpenSourcePage;
