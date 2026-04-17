import React from 'react';
import PageTransition from '../components/PageTransition';
import Contributors from '../sections/Contributors';
import LeetCode from '../sections/LeetCode';

const OpenSourcePage = () => {
    return (
        <PageTransition>
            <main className="pt-20">
                <Contributors />
                <LeetCode />
            </main>
        </PageTransition>
    );
};

export default OpenSourcePage;
