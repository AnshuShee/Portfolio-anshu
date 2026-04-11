import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const moreRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
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
                        <Link to="/" className="hover:opacity-80 transition-opacity flex items-center">
                            <img
                                src="https://res.cloudinary.com/dhnczdpqj/image/upload/v1775706890/Sleek__AS__logo_design-Photoroom_autazu.png"
                                alt="Anshu Shee Logo"
                                className="h-14 w-auto"
                                style={{ filter: 'brightness(1.1)' }}
                            />
                        </Link>
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
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `relative transition-colors text-sm font-medium tracking-wide group ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {link.name}
                                        <span className={`absolute left-0 bottom-[-4px] w-full h-[2px] bg-white transition-transform duration-300 ease-out origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                                    </>
                                )}
                            </NavLink>
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
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-2xl transition-colors font-medium border-b border-white/10 pb-4 ${isActive ? 'text-white' : 'text-white/70 hover:text-white'}`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </NavLink>
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
                            {/* All links */}
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `navbar-pill-link ${isActive ? 'navbar-pill-link--active' : ''}`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
