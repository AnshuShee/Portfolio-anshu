import React from 'react';
import { Github, ExternalLink, GitPullRequest, GitMerge, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const Contributors = () => {
    // GitHub API or visual representation details
    const githubUrl = "https://github.com/AnshuShee";
    const username = "AnshuShee";

    return (
        <section id="contributors" className="py-24 bg-slate-900 text-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col md:flex-row justify-between items-end mb-12"
                >
                    <div>
                        <h3 className="text-blue-500 font-semibold tracking-wider uppercase mb-2">Open Source</h3>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">GitHub Contributions</h2>
                    </div>
                    <a href={githubUrl} target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-2 text-slate-400 hover:text-white transition-colors mt-4 md:mt-0">
                        View Profile <ExternalLink size={16} />
                    </a>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="p-1 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                    >
                        <div className="h-full w-full bg-slate-950 rounded-xl p-6 lg:p-8 flex flex-col justify-center items-center">
                             <img 
                                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&title_color=3b82f6&text_color=94a3b8&icon_color=3b82f6&text_bold=false`}
                                alt="GitHub Stats"
                                className="w-full max-w-md mx-auto"
                             />
                        </div>
                    </motion.div>

                    <div className="flex flex-col gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="bg-slate-900 border border-white/5 rounded-2xl p-6 hover:border-blue-500/30 transition-colors"
                        >
                             <img 
                                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&title_color=3b82f6&text_color=94a3b8`}
                                alt="Top Languages"
                                className="w-full max-w-sm"
                             />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="bg-black/50 border border-white/5 rounded-2xl p-6 lg:p-8 flex flex-col justify-center grow"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                    <Github size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Code Contributor</h3>
                                    <p className="text-slate-400 text-sm">Building and sharing open-source projects</p>
                                </div>
                            </div>
                            <p className="text-slate-300 mb-6 font-light leading-relaxed">
                                I actively contribute to the open-source community by building projects, 
                                and writing clean, optimized code. I believe in learning in public 
                                and sharing resources to help others grow.
                            </p>
                            
                            <a 
                                href={githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors w-fit"
                            >
                                <Github size={18} />
                                Follow on GitHub
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Contributions Graph */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mt-8 bg-slate-900 border border-white/5 rounded-2xl p-6 lg:p-10 overflow-x-auto hover:border-blue-500/30 transition-colors flex flex-col items-center"
                >
                    <h3 className="text-xl font-bold mb-6 text-slate-300 w-full text-center">GitHub Activity</h3>
                    <div className="w-full min-w-[700px] flex justify-center">
                        <img 
                            src={`https://ghchart.rshah.org/3b82f6/${username}`} 
                            alt={`${username}'s GitHub Activity Graph`}
                            className="w-full max-w-4xl opacity-80 hover:opacity-100 transition-opacity drop-shadow-[0_0_10px_rgba(59,130,246,0.2)]" 
                        />
                    </div>
                </motion.div>
                
                <div className="mt-12 text-center md:hidden">
                    <a href={githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                        View GitHub Profile <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contributors;
