import React from 'react';
import { Section, Button, ArrowButton } from './ui/Section';
import { motion } from 'framer-motion';
import { InnovationMockup, FeatureMockup } from './ui/DashboardMockup';
import { ArrowUpRight, Activity, Layers, Sliders } from 'lucide-react';

export const FeaturesDetail = () => {
    return (
        <Section id="features">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mb-24 md:mb-32">
                 <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                 >
                    <span className="text-accent uppercase text-sm tracking-wider mb-2 block">★ Our Innovation</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Empowering you success <br/> <span className="text-accent">through innovation</span>
                    </h2>
                    <p className="text-gray-400 mb-8 text-sm md:text-base">
                        We drive your business by providing innovative solutions streamline operations a enhance efficiency, and unlock new opportunities for growth.
                    </p>
                    <Button variant="dark" className="pl-6 pr-2 py-2">
                        Contact Us <div className="ml-3 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-black"><ArrowButton /></div>
                    </Button>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
                        {['Custom Software Solutions', 'Workflow Automation', 'Cloud-Based Services', 'Seamless Integrations', 'Data Analytics And Insights', '24/7 Support'].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5 hover:border-accent/50 transition-colors">
                                <div className="w-6 h-6 rounded-full border border-accent flex items-center justify-center text-accent text-xs">●</div>
                                <span className="text-sm font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                 </motion.div>

                 <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative mt-8 lg:mt-0"
                 >
                     <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
                     <InnovationMockup />
                 </motion.div>
            </div>

            {/* Enhanced "Smarter Features" Section */}
            <div className="relative">
                <div className="text-center mb-12 md:mb-16">
                     <span className="text-accent uppercase text-sm tracking-wider bg-accent/10 px-3 py-1 rounded-full border border-accent/20">★ Our Feature</span>
                     <h2 className="text-3xl md:text-5xl font-bold mt-6">
                         Your success starts with <span className="text-accent">smarter</span> <br/> <span className="text-accent">features</span>
                     </h2>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* Main Wide Card - Analytics & Kanban */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-2 bg-[#0a0a0a] rounded-[2rem] md:rounded-[2.5rem] border border-white/10 p-6 md:p-12 relative overflow-hidden group hover:border-white/20 transition-all"
                    >
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -z-10 group-hover:bg-accent/10 transition-colors duration-700" />
                        
                        <div className="flex flex-col h-full justify-between relative z-10">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
                                <div className="max-w-md">
                                     <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent mb-6">
                                        <Activity size={24} />
                                     </div>
                                     <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Real-Time Data Analytics</h3>
                                     <p className="text-gray-400 leading-relaxed text-sm md:text-base">Delivering actionable insights with precision. Track every metric that matters to your business growth in one unified view.</p>
                                </div>
                                <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-accent transition-colors cursor-pointer group/link">
                                    Explore Platform <ArrowUpRight size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                </div>
                            </div>
                            
                            {/* The Mockup Embedded */}
                            <div className="w-full h-[320px] relative rounded-2xl border border-white/10 overflow-hidden bg-[#050505] shadow-2xl group-hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-shadow">
                                <FeatureMockup />
                            </div>
                        </div>
                    </motion.div>

                    {/* Tall Vertical Card - Automation/Workflow */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="md:col-span-1 bg-[#0a0a0a] rounded-[2rem] md:rounded-[2.5rem] border border-white/10 p-6 md:p-8 relative overflow-hidden group hover:border-white/20 transition-all flex flex-col"
                    >
                         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                         
                         <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-accent group-hover:text-black transition-colors">
                             <Layers size={24} />
                         </div>
                         <h3 className="text-xl md:text-2xl font-bold mb-3">Seamless Workflow</h3>
                         <p className="text-sm text-gray-500 mb-8 leading-relaxed">Automate repetitive tasks and keep your team aligned with intelligent triggers.</p>
                         
                         {/* Abstract Visual */}
                         <div className="flex-1 bg-white/5 rounded-2xl p-6 border border-white/5 flex flex-col gap-3 relative overflow-hidden min-h-[200px]">
                             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
                             
                             {[1, 2, 3].map((item, i) => (
                                 <motion.div 
                                    key={i}
                                    initial={{ x: -20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className="bg-[#111] rounded-lg p-3 border border-white/5 flex items-center justify-between"
                                 >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-green-500' : i === 1 ? 'bg-yellow-500' : 'bg-blue-500'}`} />
                                        <div className="h-2 w-16 bg-white/10 rounded-full" />
                                    </div>
                                    <div className="h-2 w-6 bg-white/5 rounded-full" />
                                 </motion.div>
                             ))}

                             <div className="mt-auto pt-4 flex justify-center">
                                 <div className="px-3 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold border border-accent/20 animate-pulse">
                                     System Active
                                 </div>
                             </div>
                         </div>
                    </motion.div>

                    {/* Bottom Row - Card 1 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#0a0a0a] rounded-[2rem] md:rounded-[2.5rem] border border-white/10 p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center group hover:border-accent/40 transition-colors relative overflow-hidden"
                    >
                         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                         
                         <div className="flex-1 relative z-10 w-full">
                             <h3 className="text-xl md:text-2xl font-bold mb-2">Intuitive Dashboards</h3>
                             <p className="text-sm text-gray-400 mb-6">Designed for effortless navigation and clarity.</p>
                             <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                                 Learn More <ArrowUpRight size={14} />
                             </div>
                         </div>
                         {/* Visual */}
                         <div className="w-full md:w-48 h-32 bg-[#111] rounded-xl border border-white/5 relative overflow-hidden p-3 shadow-lg group-hover:scale-105 transition-transform duration-500">
                             <div className="grid grid-cols-2 gap-2 h-full">
                                 <div className="bg-white/5 rounded-lg col-span-2 h-2/5 animate-pulse" />
                                 <div className="bg-accent/20 rounded-lg h-3/5 border border-accent/10" />
                                 <div className="bg-white/5 rounded-lg h-3/5" />
                             </div>
                             {/* Floating Cursor Effect */}
                             <motion.div 
                                animate={{ x: [0, 50, 20, 0], y: [0, 20, 50, 0] }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="absolute top-4 left-4 w-3 h-3 bg-accent rounded-full blur-md opacity-50"
                             />
                         </div>
                    </motion.div>

                     {/* Bottom Row - Card 2 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="md:col-span-2 bg-[#0a0a0a] rounded-[2rem] md:rounded-[2.5rem] border border-white/10 p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center group hover:border-accent/40 transition-colors relative overflow-hidden"
                    >
                         <div className="flex-1 relative z-10 w-full">
                             <div className="flex items-center gap-3 mb-4">
                                <Sliders size={20} className="text-accent" />
                                <h3 className="text-xl md:text-2xl font-bold">Customizable Solutions</h3>
                             </div>
                             <p className="text-sm text-gray-400 mb-0 max-w-sm">Built to match your business. Configure every aspect of the platform to suit your unique needs with our drag-and-drop builder.</p>
                         </div>
                         
                         {/* Visual - Configuration Panel */}
                         <div className="w-full md:w-64 h-32 bg-[#111] rounded-xl border border-white/5 relative overflow-hidden p-4 shadow-lg flex flex-col justify-center gap-3 group-hover:scale-105 transition-transform duration-500">
                             {[1, 2].map((_, i) => (
                                 <div key={i} className="flex items-center justify-between">
                                     <div className="h-2 w-20 bg-white/10 rounded-full" />
                                     <div className={`w-8 h-4 rounded-full p-0.5 flex ${i === 0 ? 'bg-accent justify-end' : 'bg-white/10 justify-start'}`}>
                                         <div className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-black' : 'bg-gray-500'}`} />
                                     </div>
                                 </div>
                             ))}
                             <div className="h-1 w-full bg-white/5 rounded-full mt-2 relative overflow-hidden">
                                 <div className="absolute left-0 top-0 h-full w-2/3 bg-accent" />
                             </div>
                         </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};