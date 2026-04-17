import React from 'react';
import { motion } from 'framer-motion';

// Page transition for route-to-route navigation (not initial load).
// Initial load push effect is handled entirely by GSAP in Loader.jsx.
const PageTransition = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: 'opacity, transform' }}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
