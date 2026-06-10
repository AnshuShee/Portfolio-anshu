import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Skills', path: '/skills' },
        { name: 'Certificates', path: '/certificates' },
        { name: 'Hackathons', path: '/hackathons' },
        { name: 'Projects', path: '/projects' },
        { name: 'Open Source', path: '/opensource' },
    ];

    return (
        <nav className="fixed w-full z-50 py-4 px-6 md:px-12 flex justify-between items-center bg-black" style={{ top: 0 }}>
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

            {/* Desktop Menu - Flat Text Links */}
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

            {/* Empty space for balancing the flex-between layout */}
            <div className="hidden md:flex flex-1 justify-end">
            </div>

            {/* Mobile Toggle */}
            <button
                className="md:hidden text-white hover:text-[#ff8a00] focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full h-screen bg-black/95 backdrop-blur-xl p-6 flex flex-col space-y-6 shadow-xl overflow-y-auto pb-32" style={{ pointerEvents: 'auto' }}>
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
                </div>
            )}
        </nav>
    );
};

export default Navbar;

