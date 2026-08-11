import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PhotoReveal from './PhotoReveal';
import Hero from '../sections/Hero';

gsap.registerPlugin(ScrollTrigger);

const PhotoRevealWrapper = () => {
    const photoContainerRef = useRef(null);
    const photoImgRef = useRef(null);
    const heroRef = useRef(null);

    const [isFirstLoad, setIsFirstLoad] = useState(() => {
        if (typeof window !== 'undefined') {
            return !sessionStorage.getItem('hasLoadedBefore');
        }
        return true;
    });

    useEffect(() => {
        let ctx = gsap.context(() => {
            if (!isFirstLoad) {
                // If it is NOT the first load, just animate the Hero elements on mount after the Loader slides up!
                // The Loader slider starts at 1.4s delay, takes 1.1s (total 2.5s).
                // We'll fade and slide them in nicely synchronized with the loader exit.
                gsap.set(".hero-center-content > *", { y: 60, autoAlpha: 0 });
                gsap.set(".hero-planet-el", { scale: 0.95, autoAlpha: 0 });
                gsap.set(".hero-sidebar-left", { x: -30, autoAlpha: 0 });
                gsap.set(".hero-sidebar-right", { x: 30, autoAlpha: 0 });
                gsap.set(".hero-bottom-strip", { y: 30, autoAlpha: 0 });

                const tlHero = gsap.timeline({ delay: 1.5 });

                tlHero.to(".hero-center-content > *", {
                    y: 0,
                    autoAlpha: 1,
                    stagger: 0.08,
                    duration: 0.8,
                    ease: 'power3.out'
                });

                tlHero.to(".hero-planet-el", {
                    scale: 1,
                    autoAlpha: 1,
                    duration: 0.8,
                    ease: 'power2.out'
                }, 0.1);

                tlHero.to(".hero-sidebar-left", {
                    x: 0,
                    autoAlpha: 1,
                    duration: 0.8,
                    ease: 'power2.out'
                }, 0.3);

                tlHero.to(".hero-sidebar-right", {
                    x: 0,
                    autoAlpha: 1,
                    duration: 0.8,
                    ease: 'power2.out'
                }, 0.3);

                tlHero.to(".hero-bottom-strip", {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.8,
                    ease: 'power2.out'
                }, 0.4);

                return;
            }

            // Set initial hidden state for Hero elements so they can rise up
            gsap.set(".hero-center-content > *", { y: 150, autoAlpha: 0 });
            gsap.set(".hero-planet-el", { scale: 0.9, autoAlpha: 0 });
            gsap.set(".hero-sidebar-left", { x: -50, autoAlpha: 0 });
            gsap.set(".hero-sidebar-right", { x: 50, autoAlpha: 0 });
            gsap.set(".hero-bottom-strip", { y: 50, autoAlpha: 0 });

            // 1. PIN THE PHOTO SECTION
            // As we scroll, this stays stuck, while Hero natively scrolls up from below.
            const tlPhoto = gsap.timeline({
                scrollTrigger: {
                    trigger: photoContainerRef.current,
                    start: "top top",
                    end: "bottom top", // Plays through as user scrolls exactly 100vh
                    scrub: 1,
                    pin: true,
                    pinSpacing: false, // MAGIC: Allows next section (Hero) to scroll up natively instantly
                    onUpdate: (self) => {
                        if (self.progress > 0.05 && self.progress < 0.9) {
                            gsap.to(["nav", ".navbar-pill"], { autoAlpha: 0, duration: 0.2, overwrite: 'auto' });
                        } else {
                            gsap.to(["nav", ".navbar-pill"], { autoAlpha: 1, duration: 0.3, overwrite: 'auto' });
                        }
                    }
                }
            });

            tlPhoto.to(photoImgRef.current, {
                scale: 0.4,
                y: -100,
                filter: 'blur(30px)',
                opacity: 0,
                ease: 'power2.inOut'
            });

            // 2. HERO REVEAL ANIMATION (Triggered natively right as photo scrolls out)
            // Hero elements animate to their natural resting states synchronously within the same scroll window
            tlPhoto.to(".hero-center-content > *", {
                y: 0,
                autoAlpha: 1,
                stagger: 0.1,
                ease: 'power3.out'
            }, 0.2); // Start coming in a bit after scroll starts

            tlPhoto.to(".hero-planet-el", {
                scale: 1,
                autoAlpha: 1,
                ease: 'power2.out'
            }, 0.2);

            tlPhoto.to(".hero-sidebar-left", {
                x: 0,
                autoAlpha: 1,
                ease: 'power2.out'
            }, 0.4);

            tlPhoto.to(".hero-sidebar-right", {
                x: 0,
                autoAlpha: 1,
                ease: 'power2.out'
            }, 0.4);

            tlPhoto.to(".hero-bottom-strip", {
                y: 0,
                autoAlpha: 1,
                ease: 'power2.out'
            }, 0.5);

            // Set the flag in session storage after the first load is successfully set up
            sessionStorage.setItem('hasLoadedBefore', 'true');
        });

        return () => ctx.revert();
    }, [isFirstLoad]);

    return (
        <div className="w-full bg-black select-none">
            {/* The Photo takes the exact first screen viewport natively only on first load. */}
            {isFirstLoad && (
                <div ref={photoContainerRef} className="relative w-full h-screen z-30">
                    <PhotoReveal imgRef={photoImgRef} />
                </div>
            )}

            {/* The Hero natively sits below it or as the top section and will scroll upwards. */}
            <div className="relative w-full h-screen z-20">
                <Hero ref={heroRef} />
            </div>
        </div>
    );
};

export default PhotoRevealWrapper;
