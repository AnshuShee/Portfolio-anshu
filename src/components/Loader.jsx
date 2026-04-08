import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Hide loader after 2 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FDFBF7]"
        >
            <div className="text-center">
                {/* Animated Logo/Text */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 
                        className="text-6xl md:text-8xl font-black text-stone-900 mb-8"
                        style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic' }}
                    >
                        Anshu.
                    </h1>
                </motion.div>

                {/* Loading Spinner */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 mx-auto border-2 border-stone-200 border-t-stone-900 rounded-full"
                />

                {/* Loading Text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 text-stone-400 text-sm font-bold uppercase tracking-widest"
                >
                    Loading Experience
                </motion.p>
            </div>
        </motion.div>
    );
};

export default Loader;
