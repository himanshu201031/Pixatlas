import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { DashboardMockup } from './ui/DashboardMockup';
import { LampContainer } from './ui/lamp';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Typewriter state
  const [text, setText] = useState("");
  const fullText = "saas solutions";
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleType = () => {
      const current = text;
      if (isDeleting) {
        setText(fullText.substring(0, current.length - 1));
      } else {
        setText(fullText.substring(0, current.length + 1));
      }
    };

    let delta = 150;
    if (isDeleting) delta = 75;
    if (!isDeleting && text === fullText) delta = 2000;
    if (isDeleting && text === "") delta = 500;

    const timer = setTimeout(() => {
      if (!isDeleting && text === fullText) {
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
      } else {
        handleType();
      }
    }, delta);

    return () => clearTimeout(timer);
  }, [text, isDeleting]);
  
  // Mouse interaction state
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smooth out mouse movements
  const mouseX = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 20 });

  // Calculate rotation based on mouse position - Enhanced for 3D effect
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [20, -20]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-20, 20]);
  
  // Scroll Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scrollY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Only track mouse over the main content area for the tilt effect
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const width = rect.width;
      const height = rect.height;
      const mouseXVal = e.clientX - rect.left;
      const mouseYVal = e.clientY - rect.top;
      
      const xPct = mouseXVal / width - 0.5;
      const yPct = mouseYVal / height - 0.5;
      
      x.set(xPct);
      y.set(yPct);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  }

  return (
    <div id="home" className="relative w-full overflow-hidden">
      <LampContainer>
        {/* Background Grid - Added inside LampContainer to layer correctly */}
        <div className="absolute inset-0 bg-grid opacity-30 -z-10 pointer-events-none" />
        
        {/* Interactive Container for 3D effect */}
        <div 
          ref={containerRef} 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="w-full relative z-10 perspective-2000 mt-0 md:mt-12"
        >
          <div className="max-w-4xl mx-auto px-4 relative z-20 pointer-events-none">
             {/* Text Content - Pointer events auto to allow clicking buttons */}
              <div className="pointer-events-auto text-center">
                  <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 mb-6 md:mb-8 bg-white/5 backdrop-blur-md"
                  >
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_#ccff00]" />
                  <span className="text-[10px] md:text-xs font-medium uppercase tracking-widest text-gray-300 font-sans">Welcome to Pixatlas</span>
                  </motion.div>

                  <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
                  className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-humanist leading-[1.1] mb-6 tracking-tight"
                  >
                  Empowering teams <br />
                  with smart <span className="text-accent relative inline-block min-w-[20px]">
                      {text}<span className="animate-pulse font-light text-accent">|</span>
                      <svg className="absolute w-full h-2 md:h-3 -bottom-1 left-0 text-accent opacity-70" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C2.00025 6.99997 51.5002 1.99999 101 2.00001C150.5 2.00003 198 7.00008 198 7.00008" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
                  </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.8 }}
                    className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl mx-auto font-sans leading-relaxed px-4"
                  >
                    Streamline your workflow with intelligent dashboarding and analytics tools designed for modern SaaS businesses to scale effectively.
                  </motion.p>

                  <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex justify-center mb-16 md:mb-24"
                  >
                  <button className="group relative bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full pl-8 pr-2 py-2 flex items-center gap-6 transition-all duration-300 hover:border-accent/30 hover:scale-105">
                      <span className="font-medium text-sm md:text-base font-humanist">Get Started</span>
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent flex items-center justify-center text-black group-hover:rotate-45 transition-transform duration-300 shadow-[0_0_15px_rgba(204,255,0,0.4)]">
                      <ArrowUpRight size={20} strokeWidth={2.5} />
                      </div>
                  </button>
                  </motion.div>
              </div>
          </div>

          {/* Dashboard 3D Container - Optimized for mobile */}
          <motion.div
              style={{ 
                  rotateX, 
                  rotateY,
                  y: scrollY,
                  opacity,
                  transformStyle: "preserve-3d"
              }}
              className="w-full max-w-7xl mx-auto relative z-10 px-2 md:px-4 perspective-1000 pb-12 md:pb-20"
          >
              <motion.div 
                  initial={{ opacity: 0, y: 50, rotateX: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0, scale: 0.95 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                  className="relative group cursor-default"
              >
                  {/* Floating Animation */}
                  <motion.div
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      className="transform-style-3d"
                  >
                        {/* Dashboard Back Glow */}
                        <div className="absolute inset-0 bg-accent/10 blur-[40px] md:blur-[80px] rounded-full -z-10 transform scale-90 group-hover:scale-100 transition-transform duration-700" />
                        
                        {/* Main Dashboard Frame */}
                        <div className="bg-[#121212] rounded-2xl md:rounded-3xl p-1.5 md:p-3 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative z-10 backdrop-blur-sm transform-style-3d">
                            <div className="bg-[#0a0a0a] rounded-xl md:rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                                <div className="h-8 md:h-10 bg-[#141414] border-b border-white/5 flex items-center gap-2 px-3 md:px-4 justify-between">
                                    <div className="flex gap-1.5 md:gap-2">
                                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ff5f56]" />
                                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#ffbd2e]" />
                                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27c93f]" />
                                    </div>
                                    {/* Address Bar */}
                                    <div className="hidden md:flex flex-1 max-w-lg mx-auto h-6 bg-[#000] rounded-md items-center justify-center px-3 text-[10px] text-gray-500 border border-white/5 font-mono opacity-50">
                                        pixatlas.saas/dashboard
                                    </div>
                                    <div className="w-10"></div>
                                </div>
                                {/* Dashboard Height Responsive */}
                                <div className="relative min-h-[400px] md:min-h-[500px] bg-[#0a0a0a]">
                                    <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
                                    <DashboardMockup />
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements / Widgets - Adjusted positions for smaller container */}
                        <FloatingBadge 
                            className="absolute -right-6 top-24 z-20 hidden lg:block translate-z-12"
                            delay={1.5}
                        >
                            <div className="bg-[#1a1a1a]/90 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl flex items-center gap-4 w-48 hover:scale-105 transition-transform">
                                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                    <ArrowUpRight size={18} />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 font-sans">Conversion</div>
                                    <div className="text-white font-bold font-sans">+24.5%</div>
                                </div>
                            </div>
                        </FloatingBadge>

                        <FloatingBadge 
                            className="absolute -left-10 bottom-32 z-20 hidden lg:block translate-z-12"
                            delay={1.7}
                        >
                            <div className="bg-[#1a1a1a]/90 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl w-48 hover:scale-105 transition-transform">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="text-xs text-gray-400 font-sans">Server Load</div>
                                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                                </div>
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div 
                                        animate={{ width: ['40%', '70%', '50%', '80%'] }}
                                        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                                        className="h-full bg-accent" 
                                    />
                                </div>
                            </div>
                        </FloatingBadge>
                  </motion.div>
              </motion.div>
          </motion.div>
        </div>
      </LampContainer>
    </div>
  );
};

// Helper for floating widgets
const FloatingBadge = ({ children, className, delay }: { children?: React.ReactNode, className?: string, delay: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ delay, duration: 0.8 }}
            className={className}
        >
            <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay * 0.5 }}
            >
                {children}
            </motion.div>
        </motion.div>
    )
}