import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Resume = () => {
    // Hide body scroll when full-screen resume is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[99999] bg-[#0a0a0a] flex flex-col">

            {/* Top Bar - Only Title & Download Button */}
            <div className="w-full flex justify-between items-center px-6 py-4 bg-[#111111] border-b border-white/10 shadow-lg relative z-10">
                <h1 className="text-xl md:text-2xl font-bold text-white font-['EB_Garamond']">
                    My <span className="text-[#ff8a00]">Resume</span>
                </h1>

                <div className="flex gap-4 items-center">
                    <Link
                        to="/"
                        className="px-4 py-2 text-white/70 hover:text-white text-sm font-medium transition-colors"
                    >
                        Close
                    </Link>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/Anshu_Shee_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download="Anshu_Shee_Resume.pdf"
                        style={{
                            background: '#ff8a00',
                            color: '#fff',
                            borderRadius: '6px',
                            padding: '8px 20px',
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 700,
                            fontSize: '14px',
                            textDecoration: 'none',
                            boxShadow: '0 4px 15px rgba(255,138,0,0.3)',
                        }}
                    >
                        Download PDF
                    </motion.a>
                </div>
            </div>

            {/* Seamless PDF Viewer (Scroll Only) */}
            <div className="w-full flex-grow bg-[#1a1a1a]">
                <iframe
                    src="/Anshu_Shee_Resume.pdf"
                    title="Anshu Shee Resume"
                    className="w-full h-full"
                    style={{ border: 'none' }}
                />
            </div>

        </div>
    );
};

export default Resume;
