import React, { useState, useEffect, useRef } from 'react';

const Carousel3D = ({
    images = [],
    interval = 2500,
    autoPlay = true,
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timerRef = useRef(null);
    const total = images.length;

    // Auto-rotate every `interval` ms
    useEffect(() => {
        if (!autoPlay || isPaused) {
            clearInterval(timerRef.current);
            return;
        }

        timerRef.current = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % total);
        }, interval);

        return () => clearInterval(timerRef.current);
    }, [autoPlay, isPaused, interval, total]);

    // Determine position: 0 = center/front, 1 = right/back, 2 = left/back
    const getPosition = (index) => {
        const diff = (index - activeIndex + total) % total;
        return diff; // 0=center, 1=right, 2=left (for 3 cards)
    };

    const getStyles = (position) => {
        switch (position) {
            case 0: // CENTER — front, largest, no rotation
                return {
                    transform: 'translateX(0) translateZ(40px) rotateY(0deg) scale(1)',
                    zIndex: 3,
                    opacity: 1,
                    width: '260px',
                    height: '380px',
                };
            case 1: // RIGHT — behind, peeking right, tilted
                return {
                    transform: 'translateX(60px) translateZ(-30px) rotateY(-12deg) scale(0.9)',
                    zIndex: 1,
                    opacity: 0.7,
                    width: '240px',
                    height: '350px',
                };
            case 2: // LEFT — behind, peeking left, tilted other way
                return {
                    transform: 'translateX(-60px) translateZ(-30px) rotateY(12deg) scale(0.9)',
                    zIndex: 2,
                    opacity: 0.7,
                    width: '240px',
                    height: '350px',
                };
            default:
                return {
                    transform: 'translateX(0) translateZ(-60px) scale(0.8)',
                    zIndex: 0,
                    opacity: 0.4,
                    width: '220px',
                    height: '320px',
                };
        }
    };

    return (
        <div
            className="stack-carousel-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="stack-carousel-wrapper">
                {images.map((src, i) => {
                    const position = getPosition(i);
                    const styles = getStyles(position);

                    return (
                        <div
                            key={i}
                            className="stack-carousel-card"
                            style={{
                                ...styles,
                                transition: 'all 0.7s cubic-bezier(0.4, 0.0, 0.2, 1)',
                            }}
                            onClick={() => setActiveIndex(i)}
                        >
                            <img src={src} alt={`Slide ${i + 1}`} draggable={false} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Carousel3D;
