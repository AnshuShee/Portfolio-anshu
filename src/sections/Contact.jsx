import React, { useRef, useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        emailjs.sendForm('service_ekoyjfy', 'template_xdnvpks', form.current, 'TsW3mOS-yxRPQZcqd')
            .then((result) => {
                setStatus('success');
                form.current.reset();
                setTimeout(() => setStatus(''), 5000);
            }, (error) => {
                setStatus('error');
                console.error(error.text);
                setTimeout(() => setStatus(''), 5000);
            });
    };

    return (
        <section id="contact" className="py-24 border-b border-white/10" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-20"
                >
                    <p className="inline-block text-xl md:text-2xl font-bold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 uppercase drop-shadow-[0_0_10px_rgba(236,72,153,0.5)] mb-4">Get In Touch</p>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 uppercase" style={{ fontFamily: '"Anton", sans-serif' }}>Let's work together.</h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-12"
                    >
                        <div>
                            <h3 className="text-3xl font-black text-white mb-8 uppercase tracking-tight" style={{ fontFamily: '"Anton", sans-serif' }}>Contact details</h3>
                            
                            <div className="space-y-6">
                                <div className="flex items-center gap-5 group">
                                    <div className="p-3.5 bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl shadow-sm text-white/90 group-hover:bg-orange-500 group-hover:text-white transition-all">
                                        <Mail size={24} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-white/50 uppercase tracking-wider">Email me at</span>
                                        <a href="mailto:anshu.shee.cg@gmail.com" className="text-xl font-bold text-white hover:text-white/80 transition-colors">anshu.shee.cg@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-5 group">
                                    <div className="p-3.5 bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl shadow-sm text-white/90 group-hover:bg-orange-500 group-hover:text-white transition-all">
                                        <MapPin size={24} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-bold text-white/50 uppercase tracking-wider">Location</span>
                                        <span className="text-xl font-bold text-white transition-colors">Available globally (Remote)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider" style={{ fontFamily: '"Anton", sans-serif' }}>Connect with me</h3>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/AnshuShee"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl shadow-sm hover:bg-orange-500 hover:text-white transition-all group"
                                >
                                    <Github size={24} className="group-hover:scale-110 transition-transform" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/anshu-shee-3119183a0/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl shadow-sm hover:bg-orange-500 hover:text-white transition-all group"
                                >
                                    <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                                </a>
                                <a
                                    href="mailto:anshu.shee.cg@gmail.com"
                                    className="p-4 bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl shadow-sm hover:bg-orange-500 hover:text-white transition-all group"
                                >
                                    <Mail size={24} className="group-hover:scale-110 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="p-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2.5rem] shadow-[0_4px_30px_rgba(255,255,255,0.05)]"
                    >
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className="space-y-8"
                        >
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="block text-xs font-bold text-white/50 uppercase tracking-widest pl-1">Your Name</label>
                                    <input
                                        type="text"
                                        name="user_name"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-all font-light text-white placeholder-white/30"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="block text-xs font-bold text-white/50 uppercase tracking-widest pl-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="user_email"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-all font-light text-white placeholder-white/30"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="block text-xs font-bold text-white/50 uppercase tracking-widest pl-1">Topic / Project Title</label>
                                <input
                                    type="text"
                                    name="subject"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-all font-light text-white placeholder-white/30"
                                    placeholder="Brief title of your project"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="block text-xs font-bold text-white/50 uppercase tracking-widest pl-1">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="5"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-all font-light text-white placeholder-white/30 resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full py-5 bg-orange-600 text-white rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-orange-500 disabled:bg-white/10 disabled:text-white/50 disabled:cursor-not-allowed transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                                style={{ fontFamily: '"Anton", sans-serif' }}
                            >
                                {status === 'sending' ? (
                                    <span className="flex items-center gap-2">
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Sending...
                                    </span>
                                ) : status === 'success' ? (
                                    'Message Sent!'
                                ) : status === 'error' ? (
                                    'Failed to Send'
                                ) : (
                                    <>Send Message <Send size={20} /></>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
