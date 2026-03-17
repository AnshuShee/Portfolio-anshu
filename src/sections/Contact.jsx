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
                            <div className="p-2 bg-slate-900 rounded-lg shadow-sm border border-slate-800">
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxLjJlbSIgaGVpZ2h0PSIxLjJlbSIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxnIGZpbGw9Im5vbmUiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjZjRmMmVkIiByeD0iNjAiLz48cGF0aCBmaWxsPSIjNDI4NWY0IiBkPSJNNDEuNjM2IDIwMy4wMzloMzEuODE4di03Ny4yNzNMMjggOTEuNjc2djk3LjcyN2MwIDcuNTQ1IDYuMTE0IDEzLjYzNiAxMy42MzYgMTMuNjM2Ii8+PHBhdGggZmlsbD0iIzM0YTg1MyIgZD0iTTE4Mi41NDUgMjAzLjAzOWgzMS44MTljNy41NDUgMCAxMy42MzYtNi4xMTQgMTMuNjM2LTEzLjYzNlY5MS42NzVsLTQ1LjQ1NSAzNC4wOTEiLz48cGF0aCBmaWxsPSIjZmJiYzA0IiBkPSJNMTgyLjU0NSA2Ni42NzV2NTkuMDkxTDIyOCA5MS42NzZWNzMuNDkyYzAtMTYuODYzLTE5LjI1LTI2LjQ3Ny0zMi43MjctMTYuMzYzIi8+PHBhdGggZmlsbD0iI2VhNDMzNSIgZD0iTTczLjQ1NSAxMjUuNzY2di01OS4wOUwxMjggMTA3LjU4M2w1NC41NDUtNDAuOTA5djU5LjA5MUwxMjggMTY2LjY3NSIvPjxwYXRoIGZpbGw9IiNjNTIyMWYiIGQ9Ik0yOCA3My40OTN2MTguMTgybDQ1LjQ1NCAzNC4wOTF2LTU5LjA5TDYwLjcyNyA1Ny4xM0M0Ny4yMjcgNDcuMDE2IDI4IDU2LjYzIDI4IDczLjQ5MyIvPjwvZz48L3N2Zz4=" alt="Gmail" className="w-6 h-6 object-cover" />
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
                                className="p-3 bg-slate-800 rounded-lg hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center group"
                            >
                                <Github size={24} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/anshu-shee-3119183a0/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-slate-800 rounded-lg hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center group"
                            >
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxLjJlbSIgaGVpZ2h0PSIxLjJlbSIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxnIGZpbGw9Im5vbmUiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjMGE2NmMyIiByeD0iNjAiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTg0LjcxNSAyMTcuNjg1aDI5LjI3YTQgNCAwIDAgMCA0LTMuOTk5bC4wMTUtNjEuODQyYzAtMzIuMzIzLTYuOTY1LTU3LjE2OC00NC43MzgtNTcuMTY4Yy0xNC4zNTktLjUzNC0yNy45IDYuODY4LTM1LjIwNyAxOS4yMjhhLjMyLjMyIDAgMCAxLS41OTUtLjE2MVYxMDEuNjZhNCA0IDAgMCAwLTQtNGgtMjcuNzc3YTQgNCAwIDAgMCA0IDR2MTEyLjAyYTQgNCAwIDAgMCA0IDRoMjkuMjY4YTQgNCAwIDAgMCA0LTR2LTU1LjM3M2MwLTE1LjY1NyAyLjk3LTMwLjgyIDIyLjM4MS0zMC44MmMxOS4xMzUgMCAxOS4zODMgMTcuOTE2IDE5LjM4MyAzMS44MzR2NTQuMzY0YTQgNCAwIDAgMCA0IDRNMzggNTkuNjI4YzAgMTEuODY0IDkuNzY3IDIxLjYyNiAyMS42MzIgMjEuNjI2YzExLjg2Mi0uMDAxIDIxLjYyMy05Ljc2OSAyMS42MjMtMjEuNjMxQzgxLjI1MyA0Ny43NjEgNzEuNDkxIDM4IDU5LjYyOCAzOEM0Ny43NjIgMzggMzggNDcuNzYzIDM4IDU5LjYyN202Ljk1OSAxNTguMDU4aDI5LjMwN2E0IDQgMCAwIDAgNC00VjEwMS42NmE0IDQgMCAwIDAtNC00SDQ0Ljk1OWE0IDQgMCAwIDAtNCA0djExMi4wMjVhNCA0IDAgMCAwIDQgNCIvPjwvZz48L3N2Zz4=" alt="LinkedIn" className="w-6 h-6 object-cover group-hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href="mailto:anshu.shee.cg@gmail.com"
                                className="p-3 bg-slate-800 rounded-lg hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center group"
                            >
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxLjJlbSIgaGVpZ2h0PSIxLjJlbSIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxnIGZpbGw9Im5vbmUiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjZjRmMmVkIiByeD0iNjAiLz48cGF0aCBmaWxsPSIjNDI4NWY0IiBkPSJNNDEuNjM2IDIwMy4wMzloMzEuODE4di03Ny4yNzNMMjggOTEuNjc2djk3LjcyN2MwIDcuNTQ1IDYuMTE0IDEzLjYzNiAxMy42MzYgMTMuNjM2Ii8+PHBhdGggZmlsbD0iIzM0YTg1MyIgZD0iTTE4Mi41NDUgMjAzLjAzOWgzMS44MTljNy41NDUgMCAxMy42MzYtNi4xMTQgMTMuNjM2LTEzLjYzNlY5MS42NzVsLTQ1LjQ1NSAzNC4wOTEiLz48cGF0aCBmaWxsPSIjZmJiYzA0IiBkPSJNMTgyLjU0NSA2Ni42NzV2NTkuMDkxTDIyOCA5MS42NzZWNzMuNDkyYzAtMTYuODYzLTE5LjI1LTI2LjQ3Ny0zMi43MjctMTYuMzYzIi8+PHBhdGggZmlsbD0iI2VhNDMzNSIgZD0iTTczLjQ1NSAxMjUuNzY2di01OS4wOUwxMjggMTA3LjU4M2w1NC41NDUtNDAuOTA5djU5LjA5MUwxMjggMTY2LjY3NSIvPjxwYXRoIGZpbGw9IiNjNTIyMWYiIGQ9Ik0yOCA3My40OTN2MTguMTgybDQ1LjQ1NCAzNC4wOTF2LTU5LjA5TDYwLjcyNyA1Ny4xM0M0Ny4yMjcgNDcuMDE2IDI4IDU2LjYzIDI4IDczLjQ5MyIvPjwvZz48L3N2Zz4=" alt="Gmail" className="w-6 h-6 object-cover group-hover:scale-110 transition-transform" />
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-slate-800 rounded-lg hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center group"
                            >
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxLjcxZW0iIGhlaWdodD0iMS4yZW0iIHZpZXdCb3g9IjAgMCAyNTYgMTgwIj48cGF0aCBmaWxsPSIjZjAwIiBkPSJNMjUwLjM0NiAyOC4wNzVBMzIuMTggMzIuMTggMCAwIDAgMjI3LjY5IDUuNDE4QzIwNy44MjQgMCAxMjcuODcgMCAxMjcuODcgMFM0Ny45MTIuMTY0IDI4LjA0NiA1LjU4MkEzMi4xOCAzMi4xOCAwIDAgMCA1LjM5IDI4LjI0Yy02LjAwOSAzNS4yOTgtOC4zNCA4OS4wODQuMTY1IDEyMi45N2EzMi4xOCAzMi4xOCAwIDAgMCAyMi42NTYgMjIuNjU3YzE5Ljg2NiA1LjQxOCA5OS44MjIgNS40MTggOTkuODIyIDUuNDE4czc5Ljk1NSAwIDk5LjgyLTUuNDE4YTMyLjE4IDMyLjE4IDAgMCAwIDIyLjY1Ny0yMi42NTdjNi4zMzgtMzUuMzQ4IDguMjkxLTg5LjEtLjE2NC0xMjMuMTM0IiBzdHJva2Utd2lkdGg9IjQuNSIgc3Ryb2tlPSIjZjAwIi8+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTEwMi40MjEgMTI4LjA2bDY2LjMyOC0zOC40MThsLTY2LjMyOC0zOC40MTh6IiBzdHJva2Utd2lkdGg9IjQuNSIgc3Ryb2tlPSIjZmZmIi8+PC9zdmc+" alt="YouTube" className="w-auto h-6 object-contain group-hover:scale-110 transition-transform" />
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
