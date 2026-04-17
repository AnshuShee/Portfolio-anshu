import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGlobe, FaTasks, FaRobot, FaChartLine, FaMobileAlt, FaCode, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

// --- Project Data ---
const PROJECTS_DATA = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    shortDesc: 'A full-stack e-commerce solution with real-time inventory.',
    fullDesc: 'Built a scalable e-commerce platform handling thousands of concurrent users. Features include a real-time inventory system, Stripe payment integration, and an intuitive admin dashboard with analytics.',
    techTags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    icon: FaGlobe,
  },
  {
    id: 2,
    title: 'Task Management App',
    shortDesc: 'A collaborative task management tool for remote teams.',
    fullDesc: 'Designed and developed a Kanban-style task management application. Implemented real-time updates using WebSockets, drag-and-drop functionality, and comprehensive role-based access control.',
    techTags: ['Next.js', 'Socket.io', 'PostgreSQL', 'Tailwind'],
    icon: FaTasks,
  },
  {
    id: 3,
    title: 'AI Content Generator',
    shortDesc: 'An AI-powered tool for generating marketing copy.',
    fullDesc: 'Leveraged the OpenAI API to create a SaaS application that generates high-converting marketing copy. Includes user authentication, subscription management, and advanced prompt engineering tools.',
    techTags: ['Vue.js', 'Python', 'OpenAI', 'AWS'],
    icon: FaRobot,
  },
  {
    id: 4,
    title: 'Financial Dashboard',
    shortDesc: 'A data visualization dashboard for financial analytics.',
    fullDesc: 'Developed a comprehensive financial dashboard featuring complex data visualizations. Integrated multiple third-party financial APIs to provide real-time market data and historical portfolio analysis.',
    techTags: ['React', 'D3.js', 'Express', 'Firebase'],
    icon: FaChartLine,
  },
  {
    id: 5,
    title: 'Fitness Tracker Mobile',
    shortDesc: 'A cross-platform mobile app for tracking workouts.',
    fullDesc: 'Built a mobile application for fitness enthusiasts to log workouts, track progress, and share achievements. Integrated device sensors for step counting, GPS tracking, and health data synchronization.',
    techTags: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
    icon: FaMobileAlt,
  },
  {
    id: 6,
    title: 'Developer Portfolio',
    shortDesc: 'A highly interactive 3D developer portfolio.',
    fullDesc: 'Created an award-winning portfolio website featuring custom WebGL shaders, advanced GSAP animations, dynamic 3D backgrounds, and smooth page transitions for an immersive user experience.',
    techTags: ['Three.js', 'GSAP', 'React', 'Tailwind'],
    icon: FaCode,
  },
];

// --- Global Three.js Background ---
const ThreeBackground = ({ pulseTrigger }) => {
  const containerRef = useRef(null);
  const torusRef = useRef(null);
  const particlesRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Galaxy Particles
    const particleGeom = new THREE.BufferGeometry();
    const particleCount = 3000;
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 50;
    }
    particleGeom.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const particleMat = new THREE.PointsMaterial({ color: 0x88ccff, size: 0.05, transparent: true, opacity: 0.5 });
    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);
    particlesRef.current = particles;

    // Rotating Wireframe Torus
    const torusGeom = new THREE.TorusKnotGeometry(5, 1.2, 120, 20);
    const torusMat = new THREE.MeshBasicMaterial({ color: 0x4f46e5, wireframe: true, transparent: true, opacity: 0.15 });
    const torus = new THREE.Mesh(torusGeom, torusMat);
    scene.add(torus);
    torusRef.current = torus;

    // Mouse Interaction
    const onMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Resize Handling
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop
    let req;
    const animate = () => {
      if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.0008;
        particlesRef.current.rotation.x += 0.0004;
      }
      
      if (torusRef.current) {
        torusRef.current.rotation.x += 0.001;
        torusRef.current.rotation.y += 0.0015;
      }

      // Subtle camera parallax based on mouse
      camera.position.x += (mouse.current.x * 2 - camera.position.x) * 0.05;
      camera.position.y += (mouse.current.y * 2 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      req = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(req);
      renderer.dispose();
      particleGeom.dispose();
      particleMat.dispose();
      torusGeom.dispose();
      torusMat.dispose();
      if (containerRef.current) containerRef.current.innerHTML = '';
    };
  }, []);

  // Pulse Effect Triggered by Prop
  useEffect(() => {
    if (pulseTrigger > 0 && torusRef.current && particlesRef.current) {
      // Pulse torus scale and rotation
      gsap.to(torusRef.current.scale, {
        x: 1.15, y: 1.15, z: 1.15,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        ease: 'power2.out'
      });
      gsap.to(torusRef.current.rotation, {
        z: "+=0.3",
        duration: 0.6,
        ease: 'power2.out'
      });
      
      // Briefly increase particle speed
      gsap.to(particlesRef.current.rotation, {
        y: "+=0.1",
        duration: 0.8,
        ease: 'power2.out'
      });
    }
  }, [pulseTrigger]);

  return <div ref={containerRef} className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-[#030303]" />;
};

// --- Full Screen Modal Component ---
const ProjectModal = ({ projects, currentIndex, onClose, onNext, onPrev }) => {
  const modalRef = useRef(null);
  const containerRef = useRef(null);
  const contentInnerRef = useRef(null);
  const isInitialMount = useRef(true);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  const project = projects[currentIndex];

  useEffect(() => {
    // Initial Modal Open Animations
    gsap.fromTo(modalRef.current, 
      { opacity: 0 }, 
      { opacity: 1, duration: 0.4, ease: 'power2.out' }
    );
    gsap.fromTo(containerRef.current,
      { scale: 0.9, opacity: 0, y: 30 },
      { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: 'back.out(1.2)', delay: 0.1 }
    );

    // Keyboard controls
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    
    isInitialMount.current = false;
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Crossfade + Slide effect when currentIndex changes
  useEffect(() => {
    if (!isInitialMount.current && contentInnerRef.current) {
      gsap.fromTo(contentInnerRef.current,
        { opacity: 0, x: direction * 40 },
        { opacity: 1, x: 0, duration: 0.4, ease: 'power3.out' }
      );
    }
  }, [currentIndex]);

  const handleClose = () => {
    gsap.to(modalRef.current, { opacity: 0, duration: 0.3, onComplete: onClose });
    gsap.to(containerRef.current, { scale: 0.95, opacity: 0, y: 20, duration: 0.3 });
  };

  const handleNext = () => {
    setDirection(1);
    gsap.to(contentInnerRef.current, {
      opacity: 0, x: -40, duration: 0.25, ease: 'power2.in',
      onComplete: () => onNext()
    });
  };

  const handlePrev = () => {
    setDirection(-1);
    gsap.to(contentInnerRef.current, {
      opacity: 0, x: 40, duration: 0.25, ease: 'power2.in',
      onComplete: () => onPrev()
    });
  };

  const Icon = project.icon;

  return (
    <div ref={modalRef} className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/70 backdrop-blur-xl">
      {/* Background click to close */}
      <div className="absolute inset-0 cursor-pointer" onClick={handleClose} />

      <div ref={containerRef} className="relative w-full max-w-4xl bg-[#0a0a0a]/90 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col pointer-events-auto max-h-[90vh]">
        
        {/* Dynamic Content Wrapper */}
        <div ref={contentInnerRef} className="p-8 md:p-12 flex flex-col items-center text-center overflow-y-auto custom-scrollbar">
          <div className="w-20 h-20 bg-indigo-500/10 text-indigo-400 rounded-2xl flex items-center justify-center mb-6 border border-indigo-500/20 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
            <Icon size={40} />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight" style={{ fontFamily: '"Anton", sans-serif' }}>
            {project.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {project.techTags.map(tag => (
              <span key={tag} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs md:text-sm font-medium text-white/80 tracking-wider">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-2xl font-light">
            {project.fullDesc}
          </p>
        </div>

        {/* Footer Navigation */}
        <div className="bg-black/50 p-4 md:p-6 flex items-center justify-between border-t border-white/5 mt-auto">
          <button onClick={handlePrev} className="flex items-center gap-2 text-white/50 hover:text-white transition-colors group px-2 py-1">
            <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline font-medium uppercase tracking-wider text-xs">Prev</span>
          </button>
          
          <button onClick={handleClose} className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors border border-transparent hover:border-white/10">
            <FaTimes />
          </button>
          
          <button onClick={handleNext} className="flex items-center gap-2 text-white/50 hover:text-white transition-colors group px-2 py-1">
            <span className="hidden sm:inline font-medium uppercase tracking-wider text-xs">Next</span>
            <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Main Projects Section Component ---
const ProjectsSection = () => {
  const gridRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [pulseCount, setPulseCount] = useState(0);

  // Initial Grid Entry Animation
  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('.project-card');
    
    const st = ScrollTrigger.create({
      trigger: gridRef.current,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out'
        });
      },
      once: true
    });

    return () => st.kill();
  }, []);

  const openModal = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const nextProject = () => {
    setPulseCount(p => p + 1); // Trigger 3D background pulse
    setSelectedIndex(prev => (prev + 1) % PROJECTS_DATA.length);
  };

  const prevProject = () => {
    setPulseCount(p => p + 1); // Trigger 3D background pulse
    setSelectedIndex(prev => (prev - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length);
  };

  return (
    <section id="projects" className="relative min-h-screen pt-32 pb-24 overflow-hidden">
      {/* 3D Interactive Background */}
      <ThreeBackground pulseTrigger={pulseCount} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="inline-block text-lg md:text-xl font-bold tracking-[0.25em] text-indigo-400 uppercase mb-4 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]">
            Portfolio
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white" style={{ fontFamily: '"Anton", sans-serif', letterSpacing: '0.05em' }}>
            Featured Projects
          </h2>
        </div>
        
        {/* Responsive Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS_DATA.map((proj, idx) => {
            const Icon = proj.icon;
            return (
              <div 
                key={proj.id} 
                className="project-card opacity-0 translate-y-12 bg-[#0a0a0a]/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col hover:bg-white/5 hover:border-white/20 transition-all duration-500 group shadow-lg"
              >
                <div className="w-14 h-14 bg-white/5 border border-white/5 rounded-xl flex items-center justify-center text-indigo-400 mb-8 group-hover:scale-110 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/30 transition-all duration-300">
                  <Icon size={24} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-indigo-300 transition-colors">{proj.title}</h3>
                <p className="text-white/60 mb-8 flex-1 font-light leading-relaxed">{proj.shortDesc}</p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                  <span className="text-xs font-mono text-white/50 px-3 py-1 bg-white/5 rounded-full border border-white/5">
                    {proj.techTags[0]}
                  </span>
                  <button 
                    onClick={() => openModal(idx)}
                    className="text-sm font-bold text-white/80 hover:text-white flex items-center gap-2 group/btn uppercase tracking-wider"
                  >
                    Explore <span className="group-hover/btn:translate-x-1 transition-transform text-indigo-400">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedIndex !== null && (
        <ProjectModal 
          projects={PROJECTS_DATA}
          currentIndex={selectedIndex}
          onClose={closeModal}
          onNext={nextProject}
          onPrev={prevProject}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
