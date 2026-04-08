import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
const genAI = new GoogleGenerativeAI(apiKey);

const systemPrompt = `You are a helpful, friendly, and concise AI assistant for Anshu Shee's portfolio website. 

Anshu's Background:
- Role: Full Stack Developer & AI Enthusiast.
- Philosophy: Bridging creativity and code to build digital experiences. Focuses on clean, maintainable code.
- Interests: Exploring new AI tools, open-source contribution, and modern design trends.

Website Theme:
- Styled in a clean, editorial "Madison" theme with warm cream colors and bold typography.

Skills:
- Frontend: React, Tailwind CSS, HTML5, CSS3, JavaScript (ES6+), Framer Motion.
- Backend: Node.js, Express.js, MongoDB, Python, REST APIs.
- Tools: Git/GitHub, VS Code, Vercel, Postman, AWS.

Featured Projects:
1. Myntra Clone (E-Commerce)
2. Task Management App
3. Fleet Management System (FleetMetrics)

Guidelines:
- Provide short, clean, and conversational responses.
- Direct users to relevant sections: #projects, #contact, #skills, #certificates.
- Keep the tone professional yet approachable.
- Mention anshu.shee.cg@gmail.com if asked for contact info.`;

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: "Hi! I'm Anshu's AI assistant. Ask me anything about his work!" }
    ]);
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const [chatSession, setChatSession] = useState(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    useEffect(() => {
        try {
            if (apiKey) {
                const model = genAI.getGenerativeModel({ 
                    model: "gemini-1.5-flash",
                    systemInstruction: systemPrompt 
                });
                const session = model.startChat({
                    history: [],
                });
                setChatSession(session);
            }
        } catch (error) {
            console.error("Failed to initialize Gemini AI:", error);
        }
    }, []);

    const handleSend = async (e) => {
        e.preventDefault();
        const userText = inputText.trim();
        if (!userText || isLoading) return;

        const userMessage = { type: 'user', text: userText };
        setMessages(prev => [...prev, userMessage]);
        setInputText('');
        setIsLoading(true);

        try {
            const cleanKey = apiKey.trim();
            if (!cleanKey) throw new Error("API Key missing");

            let currentSession = chatSession;
            if (!currentSession) {
                const genAIInstance = new GoogleGenerativeAI(cleanKey);
                const model = genAIInstance.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
                currentSession = model.startChat({
                    history: messages.map(m => ({
                        role: m.type === 'user' ? 'user' : 'model',
                        parts: [{ text: m.text }],
                    })).slice(0, -1),
                });
                setChatSession(currentSession);
            }
            
            const result = await currentSession.sendMessage(
                `System Context: ${systemPrompt}\n\nUser Question: ${userText}`
            );
            const responseText = result.response.text();
            setMessages(prev => [...prev, { type: 'bot', text: responseText }]);
        } catch (error) {
            console.error("Chat error:", error);
            setMessages(prev => [...prev, { type: 'bot', text: "Sorry, I encountered an error. Please try again later or contact Anshu directly." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="mb-4 w-80 md:w-96 bg-[#111] border border-white/10 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col h-[500px]"
                    >
                        {/* Header */}
                        <div className="bg-[#0a0a0a] border-b border-white/10 p-4 flex justify-between items-center">
                            <div className="flex items-center gap-2 text-white">
                                <Bot size={20} className="text-orange-500" />
                                <div>
                                    <h3 className="font-bold text-sm" style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic' }}>Anshu's Assistant</h3>
                                    <span className="text-[10px] text-white/50 flex items-center gap-1 uppercase tracking-widest font-bold">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.5)]"></span>
                                        Active Now
                                    </span>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-transparent">
                            {messages.map((msg, index) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={index}
                                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[85%] p-3.5 rounded-2xl text-sm font-light ${msg.type === 'user'
                                                ? 'bg-orange-600 text-white rounded-br-none shadow-md shadow-orange-900/20'
                                                : 'bg-white/10 text-white/90 rounded-bl-none border border-white/10 shadow-sm'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white/10 border border-white/10 p-3 rounded-2xl rounded-bl-none text-sm flex gap-1">
                                        <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce"></div>
                                        <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-4 bg-[#0a0a0a] border-t border-white/10 flex gap-2">
                            <input
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                placeholder="Write a message..."
                                className="flex-1 bg-white/5 text-white placeholder-white/30 text-sm rounded-xl px-4 py-2.5 border border-white/10 focus:outline-none focus:border-orange-500 focus:bg-white/10 transition-all font-light"
                            />
                            <button
                                type="submit"
                                disabled={!inputText.trim() || isLoading}
                                className="p-2.5 bg-white/10 text-white/90 rounded-xl hover:bg-orange-600 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
                            >
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-4 bg-white/5 backdrop-blur-sm text-white/90 hover:text-white rounded-full hover:bg-orange-600 transition-all relative border border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
            >
                {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-orange-500"></span>
                    </span>
                )}
            </motion.button>
        </div>
    );
};

export default ChatBot;
