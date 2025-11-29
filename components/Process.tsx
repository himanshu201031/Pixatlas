import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Section, Reveal } from './ui/Section';
import { Settings, BarChart3, Rocket } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: "Seamless Integration",
        desc: "Connect your existing data sources with a single click. We support over 50+ platforms out of the box.",
        icon: Settings
    },
    {
        id: 2,
        title: "Intelligent Configuration",
        desc: "Our AI analyzes your workflows and automatically suggests the optimal dashboard setup for your team.",
        icon: BarChart3
    },
    {
        id: 3,
        title: "Rapid Optimization",
        desc: "Launch your customized workspace and watch your team's productivity and efficiency skyrocket.",
        icon: Rocket
    }
];

export const Process = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Draw line based on scroll
    const lineHeight = useTransform(scrollYProgress, [0.2, 0.7], ["0%", "100%"]);

    return (
        <Section className="relative" id="process">
            <div className="text-center mb-24">
                <Reveal>
                    <span className="text-accent uppercase text-sm tracking-wider font-semibold">★ How It Works</span>
                </Reveal>
                <Reveal delay={0.1}>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 leading-tight">
                        From connection to <br /> <span className="text-accent">results in minutes</span>
                    </h2>
                </Reveal>
            </div>

            <div ref={containerRef} className="relative max-w-5xl mx-auto">
                {/* Central Line - Desktop */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block">
                    <motion.div 
                        style={{ height: lineHeight }}
                        className="w-full bg-accent shadow-[0_0_15px_#ccff00] origin-top"
                    />
                </div>
                
                {/* Mobile Line */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-white/10 md:hidden">
                    <motion.div 
                        style={{ height: lineHeight }}
                        className="w-full bg-accent shadow-[0_0_15px_#ccff00] origin-top"
                    />
                </div>

                <div className="space-y-24">
                    {steps.map((step, index) => (
                        <div key={step.id} className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-20 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            
                            {/* Icon Node */}
                            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#050505] border border-white/20 z-10 flex items-center justify-center group">
                                <motion.div 
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="w-4 h-4 rounded-full bg-accent shadow-[0_0_10px_#ccff00]"
                                />
                                <div className="absolute inset-0 border border-accent/50 rounded-full scale-150 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
                            </div>

                            {/* Content */}
                            <div className="pl-20 md:pl-0 w-full md:w-1/2">
                                <Reveal delay={index * 0.2} className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} md:px-10`}>
                                    <div className={`text-6xl font-bold text-white/5 mb-4 font-humanist ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>0{step.id}</div>
                                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 mb-6 text-accent ${index % 2 === 0 && 'md:ml-auto'}`}>
                                        <step.icon size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                                </Reveal>
                            </div>

                            {/* Visual/Empty side for balance */}
                            <div className="w-full md:w-1/2 hidden md:block">
                                <Reveal delay={0.3 + (index * 0.1)} className={`${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'} md:px-10`}>
                                     {/* Abstract Shape or Mini Mockup */}
                                     <div className={`relative h-48 w-full rounded-2xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent overflow-hidden ${index % 2 === 0 ? 'origin-right' : 'origin-left'}`}>
                                         <div className="absolute inset-0 bg-grid opacity-20" />
                                         <div className={`absolute top-1/2 ${index % 2 === 0 ? 'right-10' : 'left-10'} -translate-y-1/2 w-24 h-24 bg-accent/20 rounded-full blur-2xl`} />
                                         
                                         {/* Decorative Elements based on step */}
                                         <div className="absolute inset-0 flex items-center justify-center">
                                            {index === 0 && (
                                                <div className="flex gap-4">
                                                    <div className="w-10 h-10 rounded-lg bg-white/10 animate-pulse"></div>
                                                    <div className="w-10 h-10 rounded-lg bg-accent animate-pulse delay-75"></div>
                                                    <div className="w-10 h-10 rounded-lg bg-white/10 animate-pulse delay-150"></div>
                                                </div>
                                            )}
                                            {index === 1 && (
                                                <div className="space-y-2 w-1/2">
                                                    <div className="h-2 w-full bg-white/10 rounded-full"></div>
                                                    <div className="h-2 w-3/4 bg-accent/50 rounded-full"></div>
                                                    <div className="h-2 w-1/2 bg-white/10 rounded-full"></div>
                                                </div>
                                            )}
                                            {index === 2 && (
                                                <div className="relative">
                                                     <div className="w-0 h-0 border-l-[10px] border-l-transparent border-b-[20px] border-b-accent border-r-[10px] border-r-transparent transform -translate-y-2"></div>
                                                </div>
                                            )}
                                         </div>
                                     </div>
                                </Reveal>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};