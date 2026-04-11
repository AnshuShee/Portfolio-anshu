import React from 'react';
import PageTransition from '../components/PageTransition';
import Certificates from '../sections/Certificates';

const CertificatesPage = () => {
    return (
        <PageTransition>
            <main className="pt-20">
                <Certificates />
            </main>
        </PageTransition>
    );
};

export default CertificatesPage;
