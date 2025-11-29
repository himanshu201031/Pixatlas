import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, Variants } from 'framer-motion';
import { Section, Button, ArrowButton } from './ui/Section';
import {
  CheckCircle2,
  Zap,
  Shield,
  Headphones,
  Database,
  BarChart3,
  Settings,
  Server,
  MessageSquare,
  Workflow,
  ArrowRight,
  Sliders
} from 'lucide-react';

// Shared Animation Variants for Staggered Reveals
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

export const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yReverse = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <Section id="about">
      <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Image Grid */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }} // Slow reveal
          className="relative order-2 lg:order-1"
        >
          <div className="grid grid-cols-2 gap-4">
            <motion.div style={{ y: yReverse }} className="will-change-transform">
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team"
                loading="lazy"
                className="rounded-3xl w-full h-48 md:h-72 object-cover mb-4 md:mb-8 border border-white/5 shadow-2xl"
              />
            </motion.div>
            <motion.div style={{ y }} className="will-change-transform">
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Meeting"
                loading="lazy"
                className="rounded-3xl w-full h-48 md:h-72 object-cover mt-4 md:mt-8 border border-white/5 shadow-2xl"
              />
            </motion.div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-black w-24 h-24 md:w-36 md:h-36 rounded-full flex items-center justify-center font-bold text-center text-xs p-1 shadow-[0_0_30px_rgba(204,255,0,0.3)] z-10 backdrop-blur-sm bg-opacity-90">
            <div className="absolute inset-0 border-2 border-black/10 rounded-full animate-[spin_8s_linear_infinite]"
              style={{ borderStyle: 'dashed' }}></div>
            <div className="animate-spin-slow w-full h-full flex items-center justify-center relative">
              <svg viewBox="0 0 100 100" width="100" height="100" className="absolute top-0 left-0 w-full h-full p-2 hidden md:block">
                <path id="curve" d="M 50 50 m -40 0 a 40 40 0 1 1 80 0 a 40 40 0 1 1 -80 0" fill="transparent" />
                <text className="text-[10px] uppercase font-bold tracking-widest">
                  <textPath href="#curve" className="fill-black">
                    Explore More • Explore More •
                  </textPath>
                </text>
              </svg>
              <ArrowButton />
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }} // Slow reveal
          className="order-1 lg:order-2"
        >
          <span className="text-accent uppercase text-sm tracking-wider mb-4 block font-semibold flex items-center gap-2">
            <span className="w-8 h-[1px] bg-accent"></span> About Us
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.1]">
            Innovation that drives your <span className="text-accent">business forward</span>
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed text-base md:text-lg">
            We harness cutting-edge technology to deliver scalable, efficient, and intuitive solutions. Our mission is to empower your business with tools that just work.
          </p>

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 mb-10"
          >
            <motion.li variants={itemVariants} className="flex items-start gap-4 group">
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 group-hover:bg-accent group-hover:text-black transition-colors">
                <CheckCircle2 size={14} className="text-accent group-hover:text-black" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Streamlined Solutions</h4>
                <p className="text-sm text-gray-400">Designed To Scale With Your Business seamlessly.</p>
              </div>
            </motion.li>
            <motion.li variants={itemVariants} className="flex items-start gap-4 group">
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 group-hover:bg-accent group-hover:text-black transition-colors">
                <CheckCircle2 size={14} className="text-accent group-hover:text-black" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Empowering Teams</h4>
                <p className="text-sm text-gray-400">With Tools That Deliver Results instantly.</p>
              </div>
            </motion.li>
          </motion.ul>

          <div className="flex flex-wrap gap-8 items-center">
            <Button variant="dark" className="pl-6 pr-2 py-2">
              More About <div className="ml-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center text-black group-hover:scale-110 transition-transform"><ArrowButton /></div>
            </Button>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-all">📞</div>
              <div>
                <div className="text-xs text-gray-400 mb-1">Need help?</div>
                <div className="font-bold text-white group-hover:text-accent transition-colors">+123 456 789</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

// --- Service Visual Components ---

const AutomationVisual = () => (
  <div className="flex items-center gap-4 relative">
    <motion.div
      initial={{ scale: 0 }} animate={{ scale: 1 }}
      className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center"
    >
      <Settings className="text-gray-400 w-6 h-6 md:w-8 md:h-8" />
    </motion.div>
    <div className="flex gap-1">
      {[1, 2, 3].map(i => (
        <motion.div
          key={i}
          animate={{ backgroundColor: ["#333", "#ccff00", "#333"] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
          className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#333]"
        />
      ))}
    </div>
    <motion.div
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}
      className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-accent border border-accent flex items-center justify-center shadow-[0_0_20px_rgba(204,255,0,0.3)]"
    >
      <Zap className="text-black w-6 h-6 md:w-8 md:h-8" />
    </motion.div>
  </div>
)

const AnalyticsVisual = () => (
  <div className="flex items-end gap-2 md:gap-3 h-24 md:h-32">
    {[40, 70, 50, 90, 60, 85].map((h, i) => (
      <motion.div
        key={i}
        initial={{ height: 0 }}
        animate={{ height: `${h}%` }}
        transition={{ duration: 0.8, delay: i * 0.1, type: "spring" }}
        className={`w-4 md:w-8 rounded-t-md ${i === 3 ? 'bg-accent shadow-[0_0_15px_rgba(204,255,0,0.3)]' : 'bg-white/10'}`}
      />
    ))}
  </div>
)

const CustomizationVisual = () => (
  <div className="w-full max-w-xs bg-[#050505] rounded-xl border border-white/10 p-3 md:p-4 relative overflow-hidden">
    <div className="flex items-center justify-between mb-4">
      <div className="w-16 md:w-20 h-2 bg-white/10 rounded-full" />
      <motion.div animate={{ backgroundColor: ["#333", "#ccff00", "#333"] }} transition={{ duration: 3, repeat: Infinity }} className="w-5 h-5 md:w-6 md:h-6 rounded-full" />
    </div>
    <div className="space-y-2">
      <motion.div animate={{ width: ["100%", "80%", "100%"] }} transition={{ duration: 4, repeat: Infinity }} className="h-16 md:h-20 bg-white/5 rounded-lg border border-white/5" />
      <div className="flex gap-2">
        <div className="h-8 w-1/3 bg-white/5 rounded-lg" />
        <div className="h-8 w-2/3 bg-white/5 rounded-lg" />
      </div>
    </div>
    {/* Cursor */}
    <motion.div
      animate={{ x: [0, 100, 50, 0], y: [0, 50, 80, 0] }}
      transition={{ duration: 5, repeat: Infinity }}
      className="absolute top-0 left-0"
    >
      <div className="w-3 h-3 bg-accent rounded-full blur-[2px]" />
    </motion.div>
  </div>
)

const ScalabilityVisual = () => (
  <div className="grid grid-cols-3 gap-2 md:gap-3">
    {[...Array(9)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: i * 0.05 }}
        className="w-8 h-8 md:w-10 md:h-10 rounded bg-white/10 border border-white/5 flex items-center justify-center"
      >
        <Database size={14} className="text-gray-500" />
      </motion.div>
    ))}
  </div>
)

const SupportVisual = () => (
  <div className="flex flex-col gap-2 md:gap-3 w-40 md:w-48">
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 }}
      className="self-start bg-white/10 p-2 md:p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl text-[10px] md:text-xs text-gray-300"
    >
      Need help with API?
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6 }}
      className="self-end bg-accent p-2 md:p-3 rounded-tl-xl rounded-bl-xl rounded-br-xl text-[10px] md:text-xs text-black font-bold shadow-[0_0_10px_rgba(204,255,0,0.2)]"
    >
      Checking logs now...
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2 }}
      className="self-end bg-accent p-2 md:p-3 rounded-tl-xl rounded-bl-xl rounded-br-xl text-[10px] md:text-xs text-black font-bold shadow-[0_0_10px_rgba(204,255,0,0.2)]"
    >
      Fixed! Try again.
    </motion.div>
  </div>
)

const ServicesList = [
  { id: 'automation', label: 'Automation', icon: Workflow, title: "Intelligent Workflows", desc: "Automate repetitive tasks with ease. Our engine handles complex logic so you can focus on strategy." },
  { id: 'analytics', label: 'Analytics', icon: BarChart3, title: "Deep Data Insights", desc: "Visualize your growth with real-time charts. Track KPIs and performance metrics in one unified dashboard." },
  { id: 'customization', label: 'Customization', icon: Sliders, title: "Tailored Experience", desc: "Fully customizable interface. Adjust layouts, themes, and modules to match your brand identity perfectly." },
  { id: 'scalability', label: 'Scalability', icon: Server, title: "Infinite Scaling", desc: "Built on a serverless architecture that grows with you. From 10 to 10 million users without a hiccup." },
  { id: 'support', label: 'Support', icon: MessageSquare, title: "24/7 Expert Support", desc: "Our dedicated team is always online to help you navigate challenges and optimize your implementation." },
];

export const Services = () => {
  const [active, setActive] = useState('automation');
  const activeService = ServicesList.find(s => s.id === active) || ServicesList[0];

  return (
    <Section id="services" className="bg-[#080808] relative overflow-hidden py-24 md:py-32">
      {/* Enhanced Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-accent/5 rounded-full blur-[80px] md:blur-[150px] -z-10 pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        {/* Left Column: Navigation & Content */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="mb-10 md:mb-14">
            <span className="text-accent uppercase text-xs font-bold tracking-[0.2em] mb-4 block flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              Our Services
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
              Future-Ready SaaS <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">tailored for you.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg border-l-2 border-white/10 pl-6">
              We provide a comprehensive suite of tools designed to elevate your business operations and drive sustainable growth with unmatched precision.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-4"
          >
            {ServicesList.map((service) => (
              <motion.button
                key={service.id}
                variants={itemVariants}
                onClick={() => setActive(service.id)}
                className={`w-full flex items-center gap-5 p-4 rounded-2xl transition-all duration-300 border group text-left relative overflow-hidden ${active === service.id ? 'bg-[#111] border-accent/40 shadow-[0_0_30px_rgba(204,255,0,0.05)]' : 'bg-transparent border-transparent hover:bg-white/5 text-gray-500 hover:text-gray-300'}`}
              >
                {active === service.id && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent"
                    transition={{ duration: 0.3 }}
                  />
                )}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shadow-inner ${active === service.id ? 'bg-accent text-black scale-110' : 'bg-white/5 text-gray-500 group-hover:bg-white/10 group-hover:text-gray-300'}`}>
                  <service.icon size={20} strokeWidth={active === service.id ? 2.5 : 2} />
                </div>
                <div className="flex-1 z-10">
                  <span className={`text-lg font-bold block transition-colors ${active === service.id ? 'text-white' : 'text-current'}`}>{service.label}</span>
                  {active === service.id && (
                    <motion.span
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-xs text-accent/80 font-medium mt-1 block"
                    >
                      Active Selection
                    </motion.span>
                  )}
                </div>
                {active === service.id && <ArrowRight size={18} className="text-accent z-10" />}
              </motion.button>
            ))}
          </motion.div>

          <div className="mt-10">
            <Button variant="outline" className="rounded-xl px-8 py-4 border-white/10 hover:border-accent hover:text-accent group">
              Explore All Features <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Right Column: Dynamic Visual Card */}
        <div className="lg:col-span-7 h-auto min-h-[500px] lg:h-[700px] sticky top-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 50, rotateY: -10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -50, rotateY: 10 }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="h-full bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden flex flex-col justify-between group shadow-2xl perspective-1000"
            >
              {/* Background Decor */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-[100px] -z-10" />
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

              {/* Text Content */}
              <div className="mb-10 relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#151515] border border-white/10 flex items-center justify-center text-accent shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <activeService.icon size={32} />
                  </div>
                  <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-gray-400">
                    v2.4.0
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">{activeService.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg max-w-xl">{activeService.desc}</p>
              </div>

              {/* Dynamic Visualization Area */}
              <div className="flex-1 bg-[#111] rounded-3xl border border-white/5 relative overflow-hidden flex items-center justify-center p-8 shadow-inner min-h-[300px]">
                <div className="absolute inset-0 bg-grid opacity-20" />

                {/* Visual Container with 3D tilt effect on hover could go here, keeping it simple for now */}
                <div className="relative z-10 transform transition-transform duration-700 hover:scale-105">
                  {active === 'automation' && <AutomationVisual />}
                  {active === 'analytics' && <AnalyticsVisual />}
                  {active === 'customization' && <CustomizationVisual />}
                  {active === 'scalability' && <ScalabilityVisual />}
                  {active === 'support' && <SupportVisual />}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
};

export const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects
  const yText = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const yImage = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <Section className="py-16 md:py-24" id="why-choose-us">
      <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div style={{ y: yText }} className="order-2 lg:order-1">
          <span className="text-accent uppercase text-sm tracking-wider mb-4 block font-semibold">★ Why Choose Us</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-10 leading-tight">
            Experience seamless technology <span className="text-black bg-accent px-2 rounded-lg inline-block transform -rotate-1">designed</span> for your growth
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            {[
              { title: "Innovative solutions", desc: "We offer cutting-edge SaaS technology tailored for you.", icon: Settings },
              { title: "Security first", desc: "Advanced encryption protocols keep your data safe always.", icon: Shield },
              { title: "Dedicated support", desc: "24/7 assistance whenever you need it from our experts.", icon: Headphones },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex gap-4 md:gap-6 p-4 md:p-6 rounded-2xl bg-transparent hover:bg-white/5 transition-all border border-transparent hover:border-white/5 group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-accent group-hover:text-black group-hover:border-accent transition-all shrink-0">
                  <feature.icon size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg md:text-xl mb-2 group-hover:text-accent transition-colors">{feature.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="relative mt-0 lg:mt-0 order-1 lg:order-2 mb-12 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }} // Slow reveal
            className="bg-[#ccff00] rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-14 text-black relative overflow-hidden min-h-[400px]"
          >
            <div className="relative z-10 max-w-sm">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">With our cutting-edge saas experience seamless integration.</h3>
              <p className="mb-8 opacity-80 font-medium leading-relaxed">We provide the tools you need to optimize workflows enhance product.</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 font-bold text-sm md:text-base">
                  <div className="w-6 h-6 rounded-full bg-black text-accent flex items-center justify-center text-sm">✓</div>
                  Empowering Teams With Tools
                </div>
                <div className="flex items-center gap-3 font-bold text-sm md:text-base">
                  <div className="w-6 h-6 rounded-full bg-black text-accent flex items-center justify-center text-sm">✓</div>
                  Cutting-Edge SaaS Technology
                </div>
              </div>
            </div>

            {/* Abstract shape decoration */}
            <div className="absolute -bottom-20 -right-20 w-60 md:w-80 h-60 md:h-80 bg-white/30 rounded-full blur-3xl" />
            <div className="absolute top-0 right-0 w-32 md:w-40 h-32 md:h-40 bg-white/20 rounded-full blur-2xl" />
          </motion.div>

          <motion.div style={{ y: yImage }}>
            <motion.img
              initial={{ opacity: 0, y: 50, x: 50 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }} // Slow reveal
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Office"
              loading="lazy"
              className="w-3/4 md:w-2/3 absolute -bottom-12 -right-6 rounded-3xl border-4 border-[#050505] shadow-2xl z-20 object-cover h-48 md:h-64 grayscale hover:grayscale-0 transition-all duration-500 hidden sm:block"
            />
          </motion.div>
        </div>
      </div>
    </Section>
  )
}