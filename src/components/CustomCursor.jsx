import React, { useEffect, useState, useMemo } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    // Use motion values directly instead of spring for zero lag
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const [isPointer, setIsPointer] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [isHidden, setIsHidden] = useState(true);

    useEffect(() => {
        const checkTouch = () => {
            const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth <= 1024;
            setIsTouchDevice(isTouch);
        };

        checkTouch();
        window.addEventListener('resize', checkTouch);
        return () => window.removeEventListener('resize', checkTouch);
    }, []);

    useEffect(() => {
        if (isTouchDevice) return;

        const moveCursor = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            setIsHidden(false);

            const target = e.target;
            setIsPointer(!!target.closest('a, button, input, textarea, select, [role="button"], .clickable'));
        };

        const handleMouseLeave = () => setIsHidden(true);
        const handleMouseEnter = () => setIsHidden(false);

        window.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [isTouchDevice]);

    // Clean triangle/chevron pointer without the "tail" (stem)
    const pixelPath = "M2 2 V18 L6 14 H14 L2 2 Z";

    if (isTouchDevice) return null;

    return (
        <div className={`fixed inset-0 z-[999999] pointer-events-none transition-opacity duration-300 ${isHidden ? 'opacity-0' : 'opacity-100'}`}>
            {/* Clean White Cursor */}

            {/* MAIN WHITE LAYER */}
            <motion.div
                className="fixed top-0 left-0 origin-top-left"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: 0,
                    translateY: 0,
                    scale: isPointer ? 1.25 : 1,
                    filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.8))'
                }}
            >
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d={pixelPath} fill="#FFFFFF" style={{ shapeRendering: 'crispEdges' }} />
                </svg>
            </motion.div>
        </div>
    );
};

export default CustomCursor;



