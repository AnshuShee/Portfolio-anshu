import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Certificates', href: '#certificates' },
        { name: 'Open Source', href: '#contributors' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-black/50 backdrop-blur-md border-b border-white/10 py-4 shadow-lg'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <a href="#home" className="hover:opacity-80 transition-opacity block">
                    <img 
                        src="https://res.cloudinary.com/dhnczdpqj/image/upload/v1773729456/143457ae-6929-49ce-af62-354357503697-Photoroom_ggryld.png" 
                        alt="Anshu.dev Logo" 
                        className="h-10 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                    />
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative text-gray-300 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider bg-transparent group"
                        >
                            {link.name}
                            <span className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="px-6 py-2 border border-blue-500/30 text-blue-400 rounded-full hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all text-sm font-medium"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-gray-300 hover:text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full h-screen bg-slate-900/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col space-y-6 shadow-2xl overflow-y-auto pb-32">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-2xl text-gray-300 hover:text-blue-400 transition-colors font-medium border-b border-white/5 pb-4"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="px-6 py-4 bg-blue-600 text-white text-center rounded-lg font-bold text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-900/20"
                        onClick={() => setIsOpen(false)}
                    >
                        Hire Me
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
