import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const deepSkills = [
        {
            category: "Frontend",
            skills: ["React", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "Framer Motion"]
        },
        {
            category: "Backend",
            skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Python"]
        },
        {
            category: "Tools & Others",
            skills: ["Git", "GitHub", "VS Code", "Vercel", "Postman"]
        }
    ];

    return (
        <section id="skills" className="py-24 border-b border-white/10" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <p className="inline-block text-xl md:text-2xl font-bold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 uppercase drop-shadow-[0_0_10px_rgba(236,72,153,0.5)] mb-4">My Expertise</p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white" style={{ fontFamily: '"Anton", sans-serif' }}>Skills & Technologies</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                    {deepSkills.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 shadow-sm hover:shadow-[0_4px_20px_rgba(255,255,255,0.05)] hover:border-white/20 transition-all"
                        >
                            <h3 className="text-xl md:text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4">{section.category}</h3>
                            <motion.div 
                                className="flex flex-wrap gap-2"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={{
                                    visible: { transition: { staggerChildren: 0.1, delayChildren: index * 0.15 + 0.3 } }
                                }}
                            >
                                {section.skills.map((skill, i) => (
                                    <motion.span
                                        key={i}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
                                        }}
                                        className="px-4 py-2 bg-white/10 rounded-lg text-white/80 hover:text-white hover:bg-white/20 border border-white/5 transition-colors text-sm font-medium"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
