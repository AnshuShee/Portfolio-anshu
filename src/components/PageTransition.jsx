import React from 'react';
import { motion } from 'framer-motion';

// Page transition for route-to-route navigation (not initial load).
// Initial load push effect is handled entirely by GSAP in Loader.jsx.
const PageTransition = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'opacity, transform' }}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
