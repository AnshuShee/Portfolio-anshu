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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-slate-900 via-black to-slate-900"
        >
            <div className="text-center">
                {/* Animated Logo/Text */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-8">
                        AS
                    </h1>
                </motion.div>

                {/* Loading Spinner */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 mx-auto border-4 border-blue-500/20 border-t-blue-500 rounded-full"
                />

                {/* Loading Text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 text-slate-400 text-lg"
                >
                    Loading...
                </motion.p>
            </div>
        </motion.div>
    );
};

export default Loader;
