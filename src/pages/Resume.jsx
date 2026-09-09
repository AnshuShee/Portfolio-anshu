import React from 'react';
import { motion } from 'framer-motion';

const Resume = () => {
    return (
        <div className="min-h-screen pt-[100px] pb-[60px] flex flex-col items-center px-4" style={{ backgroundColor: '#000000' }}>

            {/* Header Text & Button */}
            <div className="max-w-4xl w-full flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <h1 className="text-3xl font-bold text-white tracking-wide font-['EB_Garamond'] pt-2">
                    My <span className="text-[#ff8a00]">Resume</span>
                </h1>

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
                        border: 'none',
                        borderRadius: '8px',
                        padding: '12px 32px',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 700,
                        fontSize: '15px',
                        letterSpacing: '0.04em',
                        cursor: 'pointer',
                        boxShadow: '0 4px 18px rgba(255,138,0,0.35)',
                        textDecoration: 'none',
                        display: 'inline-block'
                    }}
                >
                    Download PDF
                </motion.a>
            </div>

            {/* PDF Embed / Viewport */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-5xl h-[75vh] bg-[#111111] border border-white/20 rounded-xl overflow-hidden shadow-2xl relative"
            >
                <iframe
                    src="/Anshu_Shee_Resume.pdf"
                    title="Anshu Shee Resume"
                    className="w-full h-full"
                    style={{ border: 'none' }}
                />
            </motion.div>

        </div>
    );
};

export default Resume;
