import React, { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            const target = e.target;
            const isClickable = target.closest('a, button, input, textarea, select, [role="button"]');
            setIsPointer(!!isClickable);
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <>
            {/* Main cursor arrow */}
            <motion.div
                className="fixed pointer-events-none z-[9999]"
                style={{
                    left: cursorX,
                    top: cursorY,
                    x: 0,
                    y: 0,
                    scale: isPointer ? 1.1 : 1,
                    transformOrigin: "top left"
                }}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        filter: "drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.5))"
                    }}
                >
                    <path
                        d="M0 0l7.07 16.97 2.51-7.39 7.39-2.51L0 0z"
                    />
                </svg>
            </motion.div>
        </>
    );
};

export default CustomCursor;
