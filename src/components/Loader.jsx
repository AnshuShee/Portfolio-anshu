import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Loader = () => {
    // Ref for the full-screen loader overlay
    const loaderRef = useRef(null);
    // Ref for the parallax inner content (moves at 0.5x speed)
    const parallaxRef = useRef(null);

    useEffect(() => {
        const loader = loaderRef.current;
        const parallax = parallaxRef.current;
        if (!loader) return;

        const mainContent = document.getElementById('main-content');

        // --- FORCE GPU COMPOSITING ---
        // translateZ(0) promotes elements to their own compositor layer,
        // ensuring the animation runs entirely on the GPU with zero layout work.
        gsap.set(loader, {
            yPercent: 0,
            z: 0,                        // forces GPU layer
            backfaceVisibility: 'hidden', // prevents flicker
        });
        gsap.set(parallax, { yPercent: 0, z: 0, backfaceVisibility: 'hidden' });
        if (mainContent) {
            gsap.set(mainContent, {
                yPercent: 100,
                z: 0,
                backfaceVisibility: 'hidden',
            });
        }

        // --- LOCK BODY SCROLL during transition ---
        // Prevents any scroll events from causing jank during the push
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        // --- PUSH TRANSITION TIMELINE ---
        const tl = gsap.timeline({
            delay: 2.5,
            // onStart/onComplete for scroll lock management
            onComplete: () => {
                document.body.style.overflow = originalOverflow;
                window.scrollTo({ top: 0, behavior: 'instant' });
            },
        });

        tl
            // Loader shell: exits upward at full speed
            .to(loader, {
                yPercent: -100,
                duration: 1.35,
                // expo.inOut: nearly imperceptible start → smooth acceleration
                // → silky deceleration. The gold standard for push transitions.
                ease: 'expo.inOut',
                force3D: true,   // explicitly keep on GPU throughout animation
            }, 0)

            // Parallax inner layer: moves at 0.5x = depth illusion
            .to(parallax, {
                yPercent: -50,
                duration: 1.35,
                ease: 'expo.inOut',
                force3D: true,
            }, 0)

            // Main content: slides up from below simultaneously
            .to(mainContent || {}, {
                yPercent: 0,
                duration: 1.35,
                ease: 'expo.inOut',
                force3D: true,
            }, 0)

            // Hide loader after animation (no display flicker)
            .set(loader, { display: 'none' });

        return () => {
            tl.kill();
            document.body.style.overflow = originalOverflow;
        };
    }, []);

    const welcomeText = "Welcome to my Portfolio".split("");

    return (
        /* LOADER: Fixed full-screen overlay, highest z-index */
        <div
            ref={loaderRef}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 200,
                backgroundColor: '#000000',
                overflow: 'hidden',
                willChange: 'transform',
            }}
        >
            {/*
             * PARALLAX LAYER: Inner content that moves at 0.5x speed.
             * While the loader shell moves -100vh, this content only moves -50vh,
             * creating a parallax depth effect during the push transition.
             */}
            <div
                ref={parallaxRef}
                style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    willChange: 'transform',
                }}
            >
                {/* Background animated glow */}
                <div style={{
                    position: 'absolute',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)',
                    animation: 'glow-pulse 2.5s ease-in-out infinite',
                    pointerEvents: 'none',
                }} />

                <div style={{ textAlign: 'center', position: 'relative', zIndex: 1, width: '100%' }}>
                    {/* Logo — display:block + margin:auto ensures true horizontal centering */}
                    <img
                        src="https://res.cloudinary.com/dhnczdpqj/image/upload/v1775706890/Sleek__AS__logo_design-Photoroom_autazu.png"
                        alt="Anshu Shee Logo"
                        style={{
                            display: 'block',
                            height: '130px',
                            width: 'auto',
                            margin: '0 auto 24px',
                            filter: 'brightness(1.1) drop-shadow(0 0 15px rgba(249,115,22,0.3))',
                            animation: 'logo-enter 0.8s ease-out forwards',
                        }}
                    />

                    {/* "Welcome to my Portfolio" — staggered letter animation via CSS */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: '2px',
                        marginBottom: '32px',
                        minHeight: '48px',
                    }}>
                        {welcomeText.map((char, i) => (
                            <span
                                key={i}
                                style={{
                                    display: 'inline-block',
                                    color: '#ffffff',
                                    fontSize: 'clamp(16px, 2.5vw, 28px)',
                                    fontWeight: 800,
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',
                                    opacity: 0,
                                    transform: 'translateY(20px)',
                                    animation: `letter-pop 0.5s ease forwards`,
                                    animationDelay: `${i * 0.04}s`,
                                    width: char === ' ' ? '10px' : 'auto',
                                }}
                            >
                                {char}
                            </span>
                        ))}
                    </div>

                    {/* Progress bar */}
                    <div style={{
                        width: '256px',
                        height: '2px',
                        background: 'rgba(255,255,255,0.1)',
                        borderRadius: '999px',
                        overflow: 'hidden',
                        margin: '0 auto 16px',
                    }}>
                        <div style={{
                            height: '100%',
                            width: '100%',
                            background: 'linear-gradient(to right, #f97316, #ec4899, #a855f7)',
                            boxShadow: '0 0 10px rgba(249,115,22,0.8)',
                            transformOrigin: 'left',
                            animation: 'progress-fill 2.4s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                        }} />
                    </div>

                    {/* Loading label */}
                    <p style={{
                        color: 'rgba(255,255,255,0.35)',
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.4em',
                        textTransform: 'uppercase',
                        animation: 'pulse-opacity 1.5s ease-in-out infinite',
                    }}>
                        Loading Experience
                    </p>
                </div>
            </div>

            {/* CSS keyframes injected as a style tag */}
            <style>{`
                @keyframes glow-pulse {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50%       { opacity: 0.6; transform: scale(1.2); }
                }
                @keyframes logo-enter {
                    from { opacity: 0; transform: scale(0.7) blur(10px); }
                    to   { opacity: 1; transform: scale(1) blur(0px); }
                }
                @keyframes letter-pop {
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes progress-fill {
                    from { transform: scaleX(0); }
                    to   { transform: scaleX(1); }
                }
                @keyframes pulse-opacity {
                    0%, 100% { opacity: 0.3; }
                    50%      { opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default Loader;
