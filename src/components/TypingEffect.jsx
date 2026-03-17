import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypingEffect = ({ text, speed = 100, deleteSpeed = 50, delay = 1500, repeat = true, className = '' }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(speed);

    useEffect(() => {
        const texts = Array.isArray(text) ? text : [text];
        const i = loopNum % texts.length;
        const fullText = texts[i];

        const handleTyping = () => {
            setDisplayedText(prev =>
                isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
            );

            setTypingSpeed(isDeleting ? deleteSpeed : speed);

            if (!isDeleting && displayedText === fullText) {
                if (repeat) {
                    setTimeout(() => setIsDeleting(true), delay);
                }
            } else if (isDeleting && displayedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, loopNum, text, speed, deleteSpeed, delay]);

    return (
        <span className={className}>
            {displayedText}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-[2px] h-[1em] bg-blue-400 ml-1 align-middle"
            />
        </span>
    );
};

export default TypingEffect;
