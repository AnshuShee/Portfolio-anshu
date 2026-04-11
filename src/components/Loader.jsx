import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Hide loader after 2.5 seconds to full finish the animation
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    const welcomeText = "Welcome to my Portfolio".split("");

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#000000] overflow-hidden"
        >
            {/* Background animated glow */}
            <motion.div 
                className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-orange-500/10 rounded-full blur-[100px]"
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="text-center relative z-10 flex flex-col items-center">
                {/* Animated Logo */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0, filter: 'blur(10px)' }}
                    animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <img
                        src="https://res.cloudinary.com/dhnczdpqj/image/upload/v1775706890/Sleek__AS__logo_design-Photoroom_autazu.png"
                        alt="Anshu Shee Logo"
                        className="h-28 md:h-36 w-auto mx-auto mb-6 drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]"
                        style={{ filter: 'brightness(1.1)' }}
                    />
                </motion.div>

                {/* Staggered Text Animation: Welcome to my Portfolio */}
                <div className="mb-8 min-h-[5rem] flex items-center justify-center">
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: { 
                                filter: ["hue-rotate(0deg)", "hue-rotate(360deg)", "hue-rotate(0deg)"],
                                transition: { 
                                    staggerChildren: 0.04,
                                    filter: { duration: 2, repeat: Infinity, ease: "linear" }
                                } 
                            },
                            hidden: {}
                        }}
                        className="flex space-x-1"
                    >
                        {welcomeText.map((char, index) => (
                            <motion.span
                                key={index}
                                variants={{
                                    hidden: { y: 20, opacity: 0, scale: 0.8 },
                                    visible: { 
                                        y: 0, 
                                        opacity: 1, 
                                        scale: 1,
                                        transition: { type: "spring", damping: 10, stiffness: 200 } 
                                    }
                                }}
                                className={`text-lg md:text-2xl lg:text-3xl font-extrabold tracking-widest text-white ${char === ' ' ? 'w-2 md:w-3 border-none' : ''} uppercase`}
                                style={{
                                    display: 'inline-block'
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>

                {/* Modern Progress Line */}
                <div className="w-48 md:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden mb-4 rounded-full">
                    <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="h-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]"
                    />
                </div>

                {/* Loading Text Pulse */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]"
                >
                    Loading Experience
                </motion.p>
            </div>
        </motion.div>
    );
};

export default Loader;
