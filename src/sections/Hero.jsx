import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Layers } from 'lucide-react';

const Hero = () => {
    return (
        <section
            id="home"
            className="relative w-full overflow-hidden flex flex-col justify-between"
            style={{
                backgroundColor: '#000000',
                minHeight: '100vh',
                color: '#ffffff',
            }}
        >
            {/* ── Say hi on X button ── */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative z-10 flex justify-center pt-28 md:pt-32"
            >
                <a
                    href="https://twitter.com/AnshuShee007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-say-hi-btn magnetic"
                >
                    Say hi on{' '}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: 4, marginRight: 2 }}
                    >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span style={{ marginLeft: 2 }}>›</span>
                </a>
            </motion.div>

            {/* ── Main hero content: giant name + tagline ── */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 md:px-8">
                {/* Giant Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="hero-giant-name"
                >
                    ANSHU
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="hero-tagline-upper"
                >
                    I&nbsp; D E S I G N&nbsp; A N D&nbsp; B U I L D&nbsp; P R O D U C T S&nbsp; T H A T
                </motion.p>

                {/* Italic serif impact line */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="hero-tagline-italic"
                >
                    deliver real impact.
                </motion.p>
            </div>

            {/* ── Bottom info strip ── */}
            <div className="relative z-10 w-full flex justify-between items-end px-6 md:px-12 lg:px-20 pb-8 md:pb-12">
                {/* Location */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="hero-bottom-badge"
                >
                    <MapPin size={22} className="hero-bottom-icon" style={{ color: '#4ade80' }} />
                    <div>
                        <span className="hero-bottom-label">BASED IN GUJARAT,</span>
                        <span className="hero-bottom-sublabel">INDIA</span>
                    </div>
                </motion.div>

                {/* Role */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className="hero-bottom-badge hero-bottom-badge--right"
                >
                    <Layers size={22} className="hero-bottom-icon" style={{ color: '#60a5fa' }} />
                    <div>
                        <span className="hero-bottom-label">FULL STACK DEV,</span>
                        <span className="hero-bottom-sublabel">& DESIGNER</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
