import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Skills', path: '/skills' },
        { name: 'Certificates', path: '/certificates' },
        { name: 'Hackathons', path: '/hackathons' },
        { name: 'Projects', path: '/projects' },
        { name: 'Open Source', path: '/opensource' },
    ];

    return (
        <>
            {/* Main Navbar (Always present, but slides up & fades out on desktop when scrolled) */}
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex items-center justify-between py-4 px-6 md:px-12 ${
                    isScrolled
                        ? 'bg-[#0a0a0a]/95 backdrop-blur-md md:opacity-0 md:-translate-y-full md:pointer-events-none'
                        : 'bg-transparent translate-y-0 opacity-100'
                }`}
            >
                {/* Logo + Tagline */}
                <div className="flex items-center gap-4 flex-1">
                    <Link to="/" className="hover:opacity-80 transition-opacity flex items-center">
                        <img
                            src="https://res.cloudinary.com/dhnczdpqj/image/upload/v1775706890/Sleek__AS__logo_design-Photoroom_autazu.png"
                            alt="Anshu Shee Logo"
                            className="h-10 w-auto"
                            style={{ filter: 'brightness(1.1)' }}
                        />
                    </Link>
                    <div className="hidden sm:flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff8a00]"></span>
                        <div className="flex flex-col leading-none">
                            <span className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-white">
                                CREATIVE ENGINEER
                            </span>
                            <span className="text-[0.6rem] font-bold tracking-[0.15em] uppercase" style={{ color: '#00e599', marginTop: '4px' }}>
                                BUILDING THE FUTURE
                            </span>
                        </div>
                    </div>
                </div>

                {/* Desktop Menu - Normal */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-[0.95rem] font-medium transition-all duration-300 relative pb-1 ${
                                    isActive ? 'text-white' : 'text-white/70 hover:text-white'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {link.name}
                                    {isActive && (
                                        <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white"></span>
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white hover:text-[#ff8a00] focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Scrolled Floating Pill (Desktop only) */}
            <AnimatePresence>
                {isScrolled && (
                    <motion.nav
                        initial={{ y: -100, x: '-50%', opacity: 0 }}
                        animate={{ y: 0, x: '-50%', opacity: 1 }}
                        exit={{ y: -100, x: '-50%', opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="hidden md:flex fixed top-4 left-1/2 z-50 items-center gap-1 bg-[#1a1a1a]/95 backdrop-blur-md rounded-full px-1.5 py-1.5 shadow-2xl border border-white/10"
                    >
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-[0.85rem] font-medium transition-all duration-300 px-4 py-1.5 rounded-full ${
                                        isActive ? 'bg-white text-black' : 'text-white/60 hover:text-white'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden fixed top-0 left-0 w-full h-screen z-40 bg-black/95 backdrop-blur-xl p-6 pt-24 flex flex-col space-y-6 shadow-xl overflow-y-auto pb-32" 
                        style={{ pointerEvents: 'auto' }}
                    >
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-2xl transition-colors font-medium border-b border-white/10 pb-4 ${isActive ? 'text-white font-bold' : 'text-white/70 hover:text-white'}`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;

