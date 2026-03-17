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
        <section id="skills" className="py-24 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h3 className="text-blue-500 font-semibold tracking-wider uppercase mb-2">My Expertise</h3>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Skills & Technologies</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                    {deepSkills.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="bg-black/40 p-6 md:p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all hover:bg-black/60 shadow-xl"
                        >
                            <h3 className="text-xl md:text-2xl font-bold mb-6 text-blue-400 border-b border-white/10 pb-4">{section.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {section.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 bg-white/5 rounded-lg text-slate-300 hover:text-white hover:bg-blue-600 hover:scale-105 transition-all cursor-default text-sm font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
