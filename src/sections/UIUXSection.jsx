import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaFigma, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const UIUX_DATA = [
  {
    id: 1,
    title: 'Modern Dashboard System',
    shortDesc: 'A comprehensive design system for enterprise-level financial dashboards.',
    fullDesc: 'Created a modular and scalable design system in Figma for financial data visualization. Focused on accessibility, high contrast, and intuitive navigation patterns.',
    techTags: ['Figma', 'Prototyping', 'Design Systems'],
    images: ['https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=1000'],
    figmaLink: 'https://www.figma.com',
  },
  {
    id: 2,
    title: 'Minimalist E-Commerce App',
    shortDesc: 'A sleek, mobile-first shopping experience with smooth micro-interactions.',
    fullDesc: 'Designed a high-fidelity mobile app prototype focusing on minimal aesthetics and seamless checkout flows. Optimized for one-handed usage and visual clarity.',
    techTags: ['Figma', 'UI Design', 'Micro-interactions'],
    images: ['https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000'],
    figmaLink: 'https://www.figma.com',
  },
  {
    id: 3,
    title: 'SaaS Landing Page',
    shortDesc: 'Conversion-focused landing page design for a tech startup.',
    fullDesc: 'Crafted a vibrant and engaging landing page design with custom 3D assets and a strong emphasis on typographic hierarchy and CTAs.',
    techTags: ['Figma', 'Web Design', '3D Assets'],
    images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000'],
    figmaLink: 'https://www.figma.com',
  },
];

const UIUXSection = () => {
  const [selectedDesign, setSelectedDesign] = useState(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 50 },
        { 
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%' }
        }
      );

      gsap.fromTo('.design-card',
        { opacity: 0, y: 60 },
        { 
          opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out',
          scrollTrigger: { trigger: '.design-grid', start: 'top 80%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="uiux" className="relative py-24 bg-[#030303] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div ref={headerRef} className="mb-16 text-center">
          <span className="inline-block px-4 py-1.5 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400 text-sm font-semibold tracking-widest uppercase mb-6">
            Creative Vision
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight" style={{ fontFamily: '"Anton", sans-serif' }}>
            UI/UX Design
          </h2>
          <p className="max-w-2xl mx-auto text-white/50 text-lg font-light leading-relaxed">
            Crafting pixel-perfect digital experiences with a focus on user psychology and aesthetic excellence.
          </p>
        </div>

        <div className="design-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {UIUX_DATA.map((design) => (
            <motion.div
              key={design.id}
              whileHover={{ y: -10 }}
              className="design-card group cursor-pointer relative"
              onClick={() => setSelectedDesign(design)}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <img 
                  src={design.images[0]} 
                  alt={design.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{design.title}</h3>
                  <div className="flex gap-2">
                    {design.techTags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-tighter font-bold text-pink-400 px-2 py-0.5 bg-pink-500/10 border border-pink-500/20 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white">
                    <FaFigma size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Design Modal */}
      <AnimatePresence>
        {selectedDesign && (
          <DesignModal 
            design={selectedDesign} 
            onClose={() => setSelectedDesign(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const DesignModal = ({ design, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(modalRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.2)' });
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-2xl">
      <div className="absolute inset-0" onClick={onClose} />
      
      <div ref={modalRef} className="relative w-full max-w-5xl bg-[#0a0a0a] rounded-3xl border border-white/10 overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
        <button onClick={onClose} className="absolute top-6 right-6 z-20 p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors text-white">
          <FaTimes />
        </button>

        <div className="w-full md:w-3/5 bg-black h-[300px] md:h-auto overflow-hidden">
          <img src={design.images[0]} alt={design.title} className="w-full h-full object-cover" />
        </div>

        <div className="w-full md:w-2/5 p-8 md:p-12 overflow-y-auto custom-scrollbar">
          <div className="flex items-center gap-3 mb-6 text-pink-400">
            <FaFigma size={24} />
            <span className="text-sm font-bold tracking-widest uppercase">UX Case Study</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">{design.title}</h2>
          <p className="text-white/60 leading-relaxed mb-8 font-light">
            {design.fullDesc}
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {design.techTags.map(tag => (
              <span key={tag} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-white/80">
                {tag}
              </span>
            ))}
          </div>

          <a 
            href={design.figmaLink} 
            target="_blank" 
            rel="noreferrer"
            className="group flex items-center justify-center gap-3 w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-pink-50 transition-all duration-300"
          >
            Open Figma Prototype <FaExternalLinkAlt className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default UIUXSection;
