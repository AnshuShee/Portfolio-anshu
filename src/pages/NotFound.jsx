import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-black text-white">
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-9xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-500"
                style={{ fontFamily: '"Anton", sans-serif' }}
            >
                404
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-light text-white/70 mb-12"
            >
                Oops! The page you're looking for doesn't exist.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                <Link 
                    to="/" 
                    className="px-8 py-4 bg-orange-600 text-white rounded-2xl font-bold uppercase tracking-widest hover:bg-orange-500 transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                >
                    Back to Reality
                </Link>
            </motion.div>
        </div>
    );
};

export default NotFound;
