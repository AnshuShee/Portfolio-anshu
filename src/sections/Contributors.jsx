import React from 'react';
import { Github, ExternalLink, GitPullRequest, GitMerge, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const Contributors = () => {
    // GitHub API or visual representation details
    const githubUrl = "https://github.com/AnshuShee";
    const username = "AnshuShee";

    return (
        <section id="contributors" className="py-12 md:py-16 border-b border-white/10" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16"
                >
                    <div className="flex-1">
                        <p className="inline-block text-xl md:text-2xl font-bold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 uppercase drop-shadow-[0_0_10px_rgba(236,72,153,0.5)] mb-4">Open Source</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4" style={{ fontFamily: '"Anton", sans-serif' }}>Development Activity</h2>
                        <p className="text-white/70 max-w-2xl text-lg font-light">
                            An active contributor to open-source, building projects and sharing knowledge with the community.
                        </p>
                    </div>
                    <a href={githubUrl} target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-white/70 hover:text-white font-medium transition-colors mt-4 md:mt-0">
                        View Profile <ExternalLink size={16} />
                    </a>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                    {/* Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all hover:bg-white/10 hover:shadow-[0_4px_20px_rgba(255,255,255,0.05)] flex flex-col items-center justify-center overflow-hidden h-full"
                    >
                        <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter" style={{ fontFamily: '"Anton", sans-serif' }}>My GitHub Statistics</h3>
                        <div className="w-full flex justify-center">
                            <img 
                                src={`https://github-readme-stats-eight-theta.vercel.app/api?username=${username}&show_icons=true&bg_color=00000000&hide_border=true&title_color=ffffff&text_color=cccccc&icon_color=ffffff&text_bold=false&count_private=true&hide_title=true&font_size=14`}
                                alt="GitHub Stats"
                                className="w-full max-w-[550px] transition-all duration-500 mx-auto"
                            />
                        </div>
                    </motion.div>

                    {/* Top Lang Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6 hover:bg-white/10 hover:shadow-[0_4px_20px_rgba(255,255,255,0.05)] transition-all flex items-center justify-center h-full"
                    >
                        <img 
                            src={`https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${username}&layout=compact&bg_color=00000000&hide_border=true&title_color=ffffff&text_color=cccccc&count_private=true&font_size=14`}
                            alt="Top Languages"
                            className="w-full max-w-[450px] transition-all duration-500"
                        />
                    </motion.div>

                    {/* Streak Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6 hover:bg-white/10 hover:shadow-[0_4px_20px_rgba(255,255,255,0.05)] transition-all flex items-center justify-center h-full"
                    >
                        <img 
                            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&background=00000000&hide_border=true&ring=f97316&fire=f97316&currStreakNum=ffffff&sideNums=ffffff&sideLabels=cccccc&dates=cccccc`}
                            alt="GitHub Streak"
                            className="w-full max-w-[450px] transition-all duration-500"
                        />
                    </motion.div>

                    {/* LeetCode Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6 hover:bg-white/10 hover:shadow-[0_4px_20px_rgba(255,255,255,0.05)] transition-all flex flex-col items-center justify-center h-full"
                    >
                        <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tighter" style={{ fontFamily: '"Anton", sans-serif' }}>LeetCode Profile</h3>
                        <a href="https://leetcode.com/u/anshushee/" target="_blank" rel="noreferrer" className="w-full flex justify-center">
                            <img 
                                src="https://leetcard.jacoblin.cool/anshushee?theme=dark&font=Inter"
                                alt="LeetCode Stats"
                                className="w-full max-w-[450px] transition-all duration-500"
                            />
                        </a>
                    </motion.div>

                    {/* Profile Info Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10 flex flex-col justify-center transition-all hover:shadow-[0_4px_20px_rgba(255,255,255,0.05)] h-full"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3.5 bg-orange-500 rounded-xl text-white shadow-[0_0_15px_rgba(249,115,22,0.4)]">
                                <Github size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white uppercase tracking-tight" style={{ fontFamily: '"Anton", sans-serif' }}>Code Contributor</h3>
                        </div>
                        <p className="text-white/70 mb-8 font-light leading-relaxed text-sm lg:text-base">
                            I actively contribute to the open-source community by building projects, 
                            and writing clean, optimized code. I believe in learning in public 
                            and sharing resources to help others grow.
                        </p>
                        
                        <a 
                            href={githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-orange-600 border border-transparent hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-xl transition-all w-fit shadow-[0_0_15px_rgba(234,88,12,0.3)] text-sm"
                        >
                            <Github size={16} />
                            Follow on GitHub
                        </a>
                    </motion.div>
                </div>

                {/* Contributions Graph */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-12 overflow-x-auto hover:bg-white/10 hover:shadow-[0_4px_20px_rgba(255,255,255,0.05)] transition-all"
                >
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-bold text-white uppercase tracking-wider" style={{ fontFamily: '"Anton", sans-serif' }}>GitHub Activity Graph</h3>
                        <Activity size={20} className="text-white/50" />
                    </div>
                    <div className="w-full flex justify-center py-4">
                        <img 
                            src={`https://ghchart.rshah.org/40c463/${username}`} 
                            alt={`${username}'s GitHub Activity Graph`}
                            className="w-full max-w-4xl hover:scale-[1.01] transition-all duration-500" 
                        />
                    </div>
                </motion.div>
                
                <div className="mt-12 text-center md:hidden">
                    <a href={githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/60 hover:text-white font-bold underline transition-colors">
                        View GitHub Profile <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contributors;
