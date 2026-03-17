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

        // Replace these with your actual Service ID, Template ID, and Public Key from EmailJS
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
        <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 to-black text-white">
            <div className="max-w-4xl lg:max-w-5xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <h3 className="text-blue-500 font-semibold tracking-wider uppercase mb-2">Get In Touch</h3>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8">Let's work together.</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold">Contact Information</h3>

                        <div className="flex items-center gap-4 text-slate-300">
                            <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                <Mail size={24} />
                            </div>
                            <a href="mailto:anshu.shee.cg@gmail.com" className="hover:text-white transition-colors">anshu.shee.cg@gmail.com</a>
                        </div>

                        <div className="flex items-center gap-4 text-slate-300">
                            <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                                <MapPin size={24} />
                            </div>
                            <span>Available for Remote Work</span>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <a
                                href="https://github.com/AnshuShee"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-slate-800 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/anshu-shee-3119183a0/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-slate-800 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
                            >
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        ref={form}
                        onSubmit={sendEmail}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-6 bg-slate-900/50 p-8 rounded-2xl border border-white/10"
                    >
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                            <input
                                type="text"
                                name="user_name"
                                required
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                            <input
                                type="email"
                                name="user_email"
                                required
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                            <textarea
                                name="message"
                                required
                                rows="4"
                                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full py-4 bg-blue-600 text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-blue-700 disabled:bg-blue-600/50 disabled:cursor-not-allowed transition-all"
                        >
                            {status === 'sending' ? (
                                'Sending...'
                            ) : status === 'success' ? (
                                'Message Sent!'
                            ) : status === 'error' ? (
                                'Failed to Send'
                            ) : (
                                <>Send Message <Send size={20} /></>
                            )}
                        </button>
                    </motion.form>
                </div>

            </div>
        </section>
    );
};

export default Contact;
