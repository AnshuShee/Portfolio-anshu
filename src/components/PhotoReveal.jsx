import React from 'react';

const PhotoReveal = React.forwardRef(({ imgRef }, ref) => {
    return (
        <div
            ref={ref}
            className="absolute inset-0 w-full h-full z-30 flex items-center justify-center overflow-hidden pointer-events-none"
        >
            <div className="relative w-full h-full flex items-center justify-center p-4">
                {/* Photo Element */}
                <img
                    ref={imgRef}
                    src="https://res.cloudinary.com/dhnczdpqj/image/upload/v1785571837/swarnim_hackathon_rsbfx9.jpg"
                    alt="Intro Reveal"
                    className="w-auto h-auto max-w-[85vw] max-h-[70vh] md:max-w-[420px] md:max-h-[75vh] object-cover rounded-[2.5rem] shadow-[0_25px_60px_rgba(255,255,255,0.06)] border border-white/10 select-none will-change-transform"
                />
            </div>
        </div>
    );
});

PhotoReveal.displayName = 'PhotoReveal';
export default PhotoReveal;
