import React from 'react';
import { Code, Database, Globe, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    const stats = [
        { icon: <Code size={24} />, label: "Frontend", value: "React, Tailwind" },
        { icon: <Database size={24} />, label: "Backend", value: "Node, Express" },
        { icon: <Cpu size={24} />, label: "Database", value: "MongoDB, SQL" },
        { icon: <Globe size={24} />, label: "Other", value: "Git, AWS" },
    ];

    return (
        <section id="about" className="py-24 bg-black text-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24">
                    {/* Introduction */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="md:w-1/2 space-y-6"
                    >
                        <h3 className="text-blue-500 font-semibold tracking-wider uppercase">About Me</h3>
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                            Bridging creativity and code to build digital experiences.
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            I am a passionate Full Stack Developer with a strong foundation in building scalable web applications. My journey started with a curiosity for how things work on the internet, which led me to dive deep into the world of JavaScript and modern web technologies.
                        </p>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            When I'm not coding, I'm exploring new AI tools, contributing to open-source, or learning about the latest design trends. I believe in writing clean, maintainable code and creating interfaces that users love to use.
                        </p>
                    </motion.div>

                    {/* Stats/Skills Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors group"
                            >
                                <div className="mb-4 text-blue-400 group-hover:text-blue-300 transition-colors">
                                    {stat.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-1">{stat.label}</h4>
                                <p className="text-slate-400 text-sm">{stat.value}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default About;
