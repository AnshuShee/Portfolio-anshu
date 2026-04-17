import React from 'react';
import { ExternalLink, Award, Code2, Flame, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const LeetCode = () => {
    const leetcodeUrl = "https://leetcode.com/u/anshushee/";
    const username = "anshushee";

    return (
        <section id="leetcode" className="py-12 md:py-16 border-b border-white/10" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16"
                >
                    <div className="flex-1">
                        <p className="inline-block text-xl md:text-2xl font-bold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 uppercase drop-shadow-[0_0_10px_rgba(249,115,22,0.5)] mb-4">DSA & Problem Solving</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4" style={{ fontFamily: '"Anton", sans-serif' }}>LeetCode Journey</h2>
                        <p className="text-white/70 max-w-2xl text-lg font-light">
                            Passionate about solving complex algorithmic challenges and optimizing code performance. 
                            Regularly active on LeetCode to sharpen problem-solving skills and master Data Structures.
                        </p>
                    </div>
                    <a href={leetcodeUrl} target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-white/70 hover:text-orange-500 font-medium transition-colors mt-4 md:mt-0">
                        View LeetCode Profile <ExternalLink size={16} />
                    </a>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {/* Main Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:col-span-2 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all hover:bg-white/10 flex flex-col items-center justify-center overflow-hidden"
                    >
                        <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-tighter self-start flex items-center gap-2" style={{ fontFamily: '"Anton", sans-serif' }}>
                            <Target size={20} className="text-orange-500" />
                            Problem Solving Statistics
                        </h3>
                        <div className="w-full flex justify-center">
                            <img 
                                src={`https://leetcard.jacoblin.cool/${username}?theme=dark&font=Inter&ext=activity`}
                                alt="LeetCode Stats"
                                className="w-full max-w-[600px] transition-all duration-500"
                            />
                        </div>
                    </motion.div>

                    {/* Features Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col justify-center gap-6 hover:bg-white/10 transition-all"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-2.5 bg-orange-500/20 rounded-lg text-orange-500">
                                <Award size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white uppercase tracking-tight" style={{ fontFamily: '"Anton", sans-serif' }}>Consistent Solver</h4>
                                <p className="text-white/60 text-sm font-light mt-1">Daily practice in DSA to build intuition and speed.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-2.5 bg-yellow-500/20 rounded-lg text-yellow-500">
                                <Flame size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white uppercase tracking-tight" style={{ fontFamily: '"Anton", sans-serif' }}>Algorithm Mastery</h4>
                                <p className="text-white/60 text-sm font-light mt-1">Proficient in Graphs, Dynamic Programming, and Trees.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-2.5 bg-red-500/20 rounded-lg text-red-500">
                                <Code2 size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white uppercase tracking-tight" style={{ fontFamily: '"Anton", sans-serif' }}>Efficient Code</h4>
                                <p className="text-white/60 text-sm font-light mt-1">Focusing on optimal Time and Space complexity.</p>
                            </div>
                        </div>

                        <a 
                            href={leetcodeUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-4 inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-50 text-white hover:text-black font-bold py-3 px-6 rounded-xl transition-all w-full shadow-[0_0_15px_rgba(234,88,12,0.3)] text-sm uppercase tracking-wider"
                        >
                            Explore Solutions
                        </a>
                    </motion.div>
                </div>
                
                <div className="mt-12 text-center md:hidden">
                    <a href={leetcodeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/60 hover:text-white font-bold underline transition-colors">
                        View LeetCode Profile <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default LeetCode;
