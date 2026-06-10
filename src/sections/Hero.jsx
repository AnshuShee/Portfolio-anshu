import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Code, Zap, Rocket, Target, MessageSquare } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaReact, FaNodeJs, FaJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss } from 'react-icons/si';

const Hero = () => {
    return (
        <section
            id="home"
            className="hero-section-wrapper"
        >
            {/* Background Planet */}
            <div className="hero-planet-glow"></div>
            <div className="hero-planet-core"></div>
            <div className="hero-planet-ring"></div>

            {/* Left Sidebar */}
            <div className="hidden lg:flex hero-sidebar-left">
                <div className="hero-sidebar-left-text">
                    <div className="hero-sidebar-left-dot"></div>
                    FULL STACK DEVELOPER
                </div>
                <div style={{ color: '#ff8a00', marginTop: '10px' }}>
                    <Code size={20} />
                </div>
            </div>

            {/* Right Sidebar (Skills) */}
            <div className="hidden lg:flex hero-sidebar-right">
                <div className="hero-sidebar-right-line"></div>
                
                <div className="hero-skill-item">
                    <div className="hero-skill-icon-wrap"><FaReact size={24} /></div>
                    <div className="hero-skill-dot"></div>
                    <span className="hero-skill-label">React</span>
                </div>
                <div className="hero-skill-item">
                    <div className="hero-skill-icon-wrap"><FaNodeJs size={24} /></div>
                    <div className="hero-skill-dot"></div>
                    <span className="hero-skill-label">Node.js</span>
                </div>
                <div className="hero-skill-item">
                    <div className="hero-skill-icon-wrap"><SiMongodb size={24} /></div>
                    <div className="hero-skill-dot"></div>
                    <span className="hero-skill-label">MongoDB</span>
                </div>
                <div className="hero-skill-item">
                    <div className="hero-skill-icon-wrap"><SiExpress size={24} /></div>
                    <div className="hero-skill-dot"></div>
                    <span className="hero-skill-label">Express.js</span>
                </div>
                <div className="hero-skill-item">
                    <div className="hero-skill-icon-wrap"><SiTailwindcss size={24} /></div>
                    <div className="hero-skill-dot"></div>
                    <span className="hero-skill-label">Tailwind CSS</span>
                </div>
                <div className="hero-skill-item">
                    <div className="hero-skill-icon-wrap"><FaJs size={24} /></div>
                    <div className="hero-skill-dot"></div>
                    <span className="hero-skill-label">JavaScript</span>
                </div>
            </div>

            {/* Main Center Content */}
            <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 md:px-8 mt-20">
                
                {/* Say Hi Pill */}
                <motion.a
                    href="https://x.com/anshu_shee"
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="group relative inline-flex items-center gap-2.5 px-5 py-2 mb-8 rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden"
                >
                    {/* Rotating Gradient Background */}
                    <div className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] opacity-80" style={{
                        background: 'conic-gradient(from 0deg, transparent 0 320deg, #00e5ff 320deg, #ff007b 340deg, #ff8a00 360deg)'
                    }}></div>
                    
                    {/* Inner Black Pill to mask the center of the gradient */}
                    <div className="absolute inset-[1px] rounded-full bg-[#0a0a0a]"></div>
                    
                    <span className="text-[0.85rem] font-semibold text-white/90 group-hover:text-white transition-colors relative z-10 tracking-wide">Say hi on</span>
                    <svg className="relative z-10 text-white" width="13" height="13" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor"/>
                    </svg>
                    <svg className="relative z-10 text-white/60 group-hover:text-white group-hover:translate-x-0.5 transition-all" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </motion.a>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                >
                    <h1 className="hero-giant-name">ANSHU</h1>
                    <span className="hero-cursive-name">Shee</span>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="hero-tagline-upper px-2"
                >
                    I DESIGN AND BUILD PRODUCTS THAT
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="hero-tagline-italic"
                >
                    deliver real <span className="hero-tagline-accent">impact.</span>
                </motion.p>


            </div>

            {/* Bottom info strip */}
            <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center md:items-end px-6 lg:px-12 pb-8 gap-6 md:gap-0 mt-8 md:mt-0">
                
                {/* Location */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="hero-bottom-badge"
                >
                    <div className="hero-bottom-icon">
                        <MapPin size={20} />
                    </div>
                    <div>
                        <span className="hero-bottom-label">BASED IN GUJARAT,</span>
                        <span className="hero-bottom-sublabel">INDIA</span>
                    </div>
                </motion.div>

                {/* Scroll Down */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="flex flex-col items-center justify-center relative md:absolute md:left-1/2 md:-translate-x-1/2 md:bottom-8 mt-4 md:mt-0"
                >
                    <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>SCROLL DOWN</span>
                    <div style={{ width: '24px', height: '24px', border: '1px solid rgba(255,138,0,0.5)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ff8a00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
                    </div>
                </motion.div>


            </div>
        </section>
    );
};

export default Hero;
