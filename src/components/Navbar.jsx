import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [moreOpen, setMoreOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('#home');
    const moreRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Track active section
    useEffect(() => {
        const sections = ['home', 'about', 'education', 'skills', 'projects', 'hackathons', 'certificates', 'contributors', 'contact'];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection('#' + entry.target.id);
                    }
                });
            },
            { threshold: 0.3 }
        );
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    // Close "More" dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (moreRef.current && !moreRef.current.contains(e.target)) {
                setMoreOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Primary links (shown directly in the pill)
    const primaryLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
    ];

    const moreLinks = [
        { name: 'Education', href: '#education' },
        { name: 'Hackathons', href: '#hackathons' },
        { name: 'Certificates', href: '#certificates' },
        { name: 'Open Source', href: '#contributors' },
        { name: 'Contact', href: '#contact' },
    ];

    const allLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Education', href: '#education' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Hackathons', href: '#hackathons' },
        { name: 'Certificates', href: '#certificates' },
        { name: 'Open Source', href: '#contributors' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            {/* ─────────────────────────────────────────
               DEFAULT STATE → Full width transparent
               ───────────────────────────────────────── */}
            <motion.nav 
                className="fixed w-full z-40 bg-transparent py-6"
                initial={false}
                animate={{ opacity: isScrolled ? 0 : 1, y: isScrolled ? -20 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={{ pointerEvents: isScrolled ? 'none' : 'auto' }}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    {/* Logo + Tagline */}
                    <div className="flex items-center gap-3">
                        <a href="#home" className="hover:opacity-80 transition-opacity flex items-center">
                            <span
                                className="text-2xl font-bold text-white"
                                style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic' }}
                            >
                                Anshu.
                            </span>
                        </a>
                        <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                        <div className="hidden sm:flex flex-col leading-none">
                            <span className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-white/80">
                                Creative Engineer
                            </span>
                            <span className="text-[0.6rem] font-semibold tracking-[0.15em] uppercase text-emerald-500" style={{ marginTop: '2px' }}>
                                Building the Future
                            </span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        {allLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative text-white/70 hover:text-white transition-colors text-sm font-medium tracking-wide group"
                            >
                                {link.name}
                                <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                            </a>
                        ))}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white hover:text-white/80 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full h-screen bg-black/95 backdrop-blur-xl p-6 flex flex-col space-y-6 shadow-xl overflow-y-auto pb-32" style={{ pointerEvents: 'auto' }}>
                        {allLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-2xl text-white/70 hover:text-white transition-colors font-medium border-b border-white/10 pb-4"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                )}
            </motion.nav>

            {/* ─────────────────────────────────────────
               SCROLLED STATE → Floating centered pill
               ───────────────────────────────────────── */}
            <AnimatePresence>
                {isScrolled && (
                    <motion.nav 
                        className="navbar-floating" 
                        initial={{ opacity: 0, y: -40, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, y: -40, x: '-50%' }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        style={{
                            position: 'fixed',
                            top: '16px',
                            left: '50%',
                            zIndex: 50,
                        }}
                    >
                        <div className="navbar-pill">
                            {/* Primary links */}
                            {primaryLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`navbar-pill-link ${activeSection === link.href ? 'navbar-pill-link--active' : ''}`}
                                >
                                    {link.name}
                                </a>
                            ))}

                            {/* More dropdown */}
                            <div ref={moreRef} style={{ position: 'relative' }}>
                                <button
                                    onClick={() => setMoreOpen(!moreOpen)}
                                    className="navbar-pill-link navbar-pill-more"
                                >
                                    More <ChevronDown size={13} style={{ marginLeft: 2, transition: 'transform 0.2s', transform: moreOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
                                </button>
                                <AnimatePresence>
                                    {moreOpen && (
                                        <motion.div 
                                            initial={{ opacity: 0, y: -10, x: '-50%' }}
                                            animate={{ opacity: 1, y: 0, x: '-50%' }}
                                            exit={{ opacity: 0, y: -10, x: '-50%' }}
                                            transition={{ duration: 0.15 }}
                                            className="navbar-more-dropdown"
                                        >
                                            {moreLinks.map((link) => (
                                                <a
                                                    key={link.name}
                                                    href={link.href}
                                                    className="navbar-more-item"
                                                    onClick={() => setMoreOpen(false)}
                                                >
                                                    {link.name}
                                                </a>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Separator */}
                            <div className="navbar-pill-sep"></div>

                            {/* Theme icon placeholder */}
                            <a href="#contact" className="navbar-pill-icon" title="Contact">
                                <Phone size={15} />
                            </a>

                            {/* Book a Call / Contact CTA */}
                            <a href="#contact" className="navbar-pill-cta" style={{ fontSize: '0.8rem', padding: '8px 20px', marginLeft: '6px' }}>
                                Book a Call
                            </a>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
