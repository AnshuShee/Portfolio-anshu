import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import udemyCert from '../assets/udemy-cert.jpg';
import outskillCert from '../assets/outskill-cert.jpg';
import wscubeCert from '../assets/wscube-cert.jpg';
import awsCert from '../assets/aws-cert.jpg';
import forgeCert from '../assets/forge-cert.jpg';

const Certificates = () => {
    const certificates = [
        {
            name: "HTML and CSS for Beginners",
            issuer: "Udemy",
            date: "Dec 2025",
            link: "#",
            image: udemyCert
        },
        {
            name: "Generative AI Mastermind",
            issuer: "Outskill",
            date: "2025",
            link: "#",
            image: outskillCert
        },
        {
            name: "Build Your Own AI Assistant for a Brand",
            issuer: "WsCube Tech",
            date: "Dec 24, 2025",
            link: "#",
            image: wscubeCert
        },
        {
            name: "AWS - Application Migration Service",
            issuer: "AWS",
            date: "2025",
            link: "#",
            image: awsCert
        },
        {
            name: "Software Development Job Simulation",
            issuer: "Forage",
            date: "2025",
            link: "",
            image: forgeCert
        },
        {
            name: "HackOverFlow at CultRang '26",
            issuer: "IIT Goa",
            date: "2026",
            link: "#",
            image: "https://res.cloudinary.com/dhnczdpqj/image/upload/v1773723412/Anshu_Shee_page-0001_ta46xo.jpg"
        }
    ];

    return (
        <section id="certificates" className="py-24 bg-black text-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col md:flex-row justify-between items-end mb-12"
                >
                    <div>
                        <h3 className="text-blue-500 font-semibold tracking-wider uppercase mb-2">Qualifications</h3>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Certificates</h2>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {certificates.map((cert, index) => (
                        <motion.a
                            key={index}
                            href={cert.link}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.3 }
                            }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="group p-6 bg-slate-900 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-900/20 block overflow-hidden"
                        >
                            <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg bg-slate-800">
                                {cert.image ? (
                                    <img
                                        src={cert.image}
                                        alt={cert.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-slate-600">
                                        <Award size={48} />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-300"></div>
                            </div>

                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                    <Award size={20} />
                                </div>
                                <ExternalLink size={20} className="text-slate-500 group-hover:text-white transition-colors" />
                            </div>

                            <h3 className="text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors line-clamp-2">{cert.name}</h3>
                            <p className="text-slate-400 text-sm mb-4">{cert.issuer}</p>
                            <p className="text-slate-500 text-xs font-mono">{cert.date}</p>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
