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
                    className="hero-tagline-upper"
                >
                    I &nbsp;D E S I G N&nbsp; A N D&nbsp; B U I L D&nbsp; P R O D U C T S&nbsp; T H A T
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="hero-tagline-italic"
                >
                    deliver real <span className="hero-tagline-accent">impact.</span>
                </motion.p>

                {/* Feature Pills */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.0 }}
                    className="hero-feature-pills"
                >
                    <div className="hero-feature-pill">
                        <div className="hero-feature-pill-icon"><Code size={16} /></div>
                        <div className="hero-feature-pill-text">
                            <span className="hero-feature-pill-title">Full Stack</span>
                            <span className="hero-feature-pill-sub">Developer</span>
                        </div>
                    </div>
                    <div className="hero-feature-pill">
                        <div className="hero-feature-pill-icon"><Zap size={16} /></div>
                        <div className="hero-feature-pill-text">
                            <span className="hero-feature-pill-title">Problem</span>
                            <span className="hero-feature-pill-sub">Solver</span>
                        </div>
                    </div>
                    <div className="hero-feature-pill">
                        <div className="hero-feature-pill-icon"><Rocket size={16} /></div>
                        <div className="hero-feature-pill-text">
                            <span className="hero-feature-pill-title">Building</span>
                            <span className="hero-feature-pill-sub">Scalable Apps</span>
                        </div>
                    </div>
                    <div className="hero-feature-pill" style={{ borderRight: 'none', paddingRight: '16px' }}>
                        <div className="hero-feature-pill-icon"><Target size={16} /></div>
                        <div className="hero-feature-pill-text">
                            <span className="hero-feature-pill-title">Detail</span>
                            <span className="hero-feature-pill-sub">Oriented</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom info strip */}
            <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center md:items-end px-6 md:px-20 lg:px-32 pb-8 gap-6 md:gap-0 mt-8 md:mt-0">
                
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
                    className="flex flex-col items-center justify-center static md:absolute"
                    style={{ left: '50%', transform: 'translateX(-50%)', bottom: '32px' }}
                >
                    <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.5)', marginBottom: '8px' }}>SCROLL DOWN</span>
                    <div style={{ width: '24px', height: '24px', border: '1px solid rgba(255,138,0,0.5)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ff8a00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
                    </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    className="hero-bottom-badge--right"
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className="hidden lg:inline" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: '#fff', fontWeight: 600, marginRight: '8px' }}>LET'S CONNECT <span style={{ color: '#ff8a00' }}>●</span></span>
                        <a href="https://github.com/AnshuShee" target="_blank" rel="noreferrer" className="hero-social-link"><FaGithub size={18} /></a>
                        <a href="https://linkedin.com/in/anshu-shee" target="_blank" rel="noreferrer" className="hero-social-link"><FaLinkedin size={18} /></a>
                        <a href="https://instagram.com/anshu_shee" target="_blank" rel="noreferrer" className="hero-social-link"><FaInstagram size={18} /></a>
                        <button className="hero-chat-btn"><MessageSquare size={18} /></button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
