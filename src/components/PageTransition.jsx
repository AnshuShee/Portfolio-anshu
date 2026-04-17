import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Track if this is the very first page load
let isFirstLoad = true;

const PageTransition = ({ children }) => {
    const isInitial = useRef(isFirstLoad);

    useEffect(() => {
        // After first mount, mark subsequent navigations as not-first
        isFirstLoad = false;
    }, []);

    const pageVariants = {
        initial: {
            opacity: 0,
            y: 100,
            filter: 'blur(10px)',
        },
        animate: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                // Delay only on first load so it plays after the loader (2.5s)
                delay: isInitial.current ? 2.5 : 0,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            },
        },
        exit: {
            opacity: 0,
            y: -50,
            filter: 'blur(10px)',
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ willChange: 'opacity, transform' }}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
