import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const SteelFlower = () => {
    const containerRef = useRef(null);

    // Track scroll progress relative to the viewport
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Transform scroll progress to 2D rotation
    const rotation = useTransform(scrollYProgress, [0, 1], [0, 120]);
    const smoothRotation = useSpring(rotation, { stiffness: 60, damping: 25 });

    // Subtle scale and opacity
    const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.8, 1.05, 1.05, 0.9]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);
    
    const smoothScale = useSpring(scale, { stiffness: 60, damping: 20 });

    return (
        <div ref={containerRef} className="w-full flex justify-center items-center py-4 md:py-6 overflow-hidden relative">
            {/* Background ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-black blur-[120px] rounded-full pointer-events-none" />
            
            <motion.div
                style={{
                    rotate: smoothRotation,
                    scale: smoothScale,
                    opacity: opacity,
                }}
                className="relative w-64 h-64 md:w-[400px] md:h-[400px] z-10"
            >
                <img
                    src="https://res.cloudinary.com/dhnczdpqj/image/upload/v1775798325/imgi_55_steel-flower_grtdxm.webp"
                    alt="Abstract Sculpture"
                    className="w-full h-full object-contain filter drop-shadow-[0_0_80px_rgba(0,0,0,1)]"
                    style={{
                        maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                    }}
                    loading="lazy"
                />
            </motion.div>
        </div>
    );
};

export default SteelFlower;

