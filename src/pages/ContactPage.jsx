import React from 'react';
import PageTransition from '../components/PageTransition';
import Contact from '../sections/Contact';

const ContactPage = () => {
    return (
        <PageTransition>
            <main className="pt-20">
                <Contact />
            </main>
        </PageTransition>
    );
};

export default ContactPage;
