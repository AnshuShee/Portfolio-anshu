import React from 'react';

const WaveDivider = ({ flip = false, color = 'blue' }) => {
    const colorMap = {
        blue: '#60a5fa',
        purple: '#a78bfa',
        slate: '#64748b'
    };

    return (
        <div className={`relative w-full ${flip ? 'rotate-180' : ''}`}>
            <svg
                className="w-full h-12 md:h-16"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"
                    fill={colorMap[color] || colorMap.blue}
                    fillOpacity="0.1"
                />
                <path
                    d="M0,0 C150,80 350,20 600,60 C850,100 1050,40 1200,60 L1200,120 L0,120 Z"
                    fill={colorMap[color] || colorMap.blue}
                    fillOpacity="0.05"
                />
            </svg>
        </div>
    );
};

export default WaveDivider;
