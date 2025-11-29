import React, { useState, useRef } from 'react';
import { Section, Button } from './ui/Section';
import { Plus, Minus, ArrowUpRight, Github, Twitter, Linkedin, Instagram, Send } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

const faqs = [
    { q: "What is your platform's pricing?", a: "We offer flexible tier-based pricing starting at $29/mo. You can switch plans anytime." },
    { q: "How can I integrate your software with existing tools?", a: "Our platform supports seamless integration with popular tools such as Slack, Trello, and Google Workspace via our API.", active: true },
    { q: "What level of customer support do you provide?", a: "We provide 24/7 dedicated support for all premium plans, including phone and priority email support." },
    { q: "Is my data secure with your platform?", a: "Yes, we use banking-grade encryption and regular security audits to ensure your data is always safe." },
    { q: "Can I upgrade or downgrade my plan at any time?", a: "Absolutely. You can change your plan from your dashboard instantly. Prorated charges will apply." },
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(1);

    return (
        <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                 <div className="sticky top-24 self-start">
                    <span className="text-accent uppercase text-sm tracking-wider mb-4 block font-semibold">★ FAQ</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 leading-tight">
                        Common questions about our <br/> <span className="text-accent">Saas platform</span>
                    </h2>
                    
                    {/* Images Grid */}
                    <div className="grid grid-cols-2 gap-6 mt-12 relative">
                        <motion.img 
                            whileHover={{ scale: 1.05 }}
                            src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                            className="rounded-3xl w-full h-48 object-cover opacity-80 border border-white/10" 
                            alt="FAQ" 
                            loading="lazy"
                        />
                        <motion.img 
                            whileHover={{ scale: 1.05 }}
                            src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                            className="rounded-3xl w-full h-48 object-cover mt-12 opacity-80 border border-white/10" 
                            alt="FAQ" 
                            loading="lazy"
                        />
                         <motion.div 
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="absolute bottom-10 left-10 bg-accent rounded-full p-8 text-black font-bold flex flex-col items-center text-center shadow-[0_0_30px_rgba(204,255,0,0.4)] z-10"
                         >
                            <div className="text-3xl mb-1">?</div>
                            <div className="leading-tight text-sm">Need Help? <br/> Ask!</div>
                        </motion.div>
                    </div>
                 </div>

                 <div className="space-y-4">
                     {faqs.map((faq, i) => (
                         <div 
                            key={i} 
                            className={`rounded-3xl transition-all duration-300 border ${openIndex === i ? 'bg-[#ccff00] border-[#ccff00] text-black shadow-[0_0_30px_rgba(204,255,0,0.2)]' : 'bg-[#111] border-white/5 text-white hover:border-white/10'}`}
                         >
                             <button 
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 md:p-8 font-bold text-left text-lg md:text-xl"
                             >
                                 {faq.q}
                                 <span className={`p-1 rounded-full border transition-colors ${openIndex === i ? 'border-black/20 bg-black/5' : 'border-white/20 bg-white/5'}`}>
                                     {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                                 </span>
                             </button>
                             <AnimatePresence initial={false}>
                                 {openIndex === i && (
                                     <motion.div 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                     >
                                         <p className="px-6 md:px-8 pb-8 opacity-80 leading-relaxed font-medium">{faq.a}</p>
                                     </motion.div>
                                 )}
                             </AnimatePresence>
                         </div>
                     ))}
                 </div>
            </div>
        </Section>
    );
};

export const Blog = () => {
    // Enhanced Blog data
    const featuredPost = {
        title: "The Future of SaaS: Trends Defining 2025",
        excerpt: "Explore the emerging technologies and strategies that are reshaping the software-as-a-service landscape, from AI-driven automation to hyper-personalization.",
        category: "Industry Trends",
        date: "Oct 12, 2025",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    };

    const recentPosts = [
        {
            title: "Maximizing Productivity With Automation Tools",
            category: "Productivity",
            date: "Oct 08, 2025",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            title: "How Cloud Solutions Are Transforming Businesses",
            category: "Cloud",
            date: "Oct 05, 2025",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
             title: "Scaling Your Infrastructure: A Practical Guide",
             category: "DevOps",
             date: "Sep 28, 2025",
             image: "https://images.unsplash.com/photo-1558494949-ef2bb6db879c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        }
    ];

    return (
        <Section id="blog" className="py-24 relative">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <span className="text-accent uppercase text-sm tracking-wider font-semibold">★ Latest Blog</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">Insights & <span className="text-accent">Updates</span></h2>
                </div>
                <Button variant="dark" className="rounded-full px-8">View All Articles</Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Featured Post */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-7 group cursor-pointer"
                >
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 mb-6 aspect-[16/9] lg:aspect-auto lg:h-[400px]">
                        <img 
                            src={featuredPost.image} 
                            alt={featuredPost.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                        <div className="absolute top-6 left-6 flex gap-2">
                             <span className="bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-xs font-bold text-white">{featuredPost.category}</span>
                             <span className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gray-300">{featuredPost.readTime}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <span>{featuredPost.date}</span>
                        <div className="w-1 h-1 bg-gray-500 rounded-full" />
                        <span>By Pixatlas Team</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-accent transition-colors">{featuredPost.title}</h3>
                    <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">{featuredPost.excerpt}</p>
                    <div className="flex items-center gap-2 text-accent font-bold text-sm group/btn">
                        Read Full Story <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </div>
                </motion.div>

                {/* Recent List */}
                <div className="lg:col-span-5 flex flex-col gap-8">
                    {recentPosts.map((post, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex gap-6 group cursor-pointer items-center"
                        >
                            <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-2xl overflow-hidden border border-white/10 relative">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div>
                                <div className="text-xs font-bold text-accent mb-2 uppercase tracking-wide">{post.category}</div>
                                <h4 className="text-lg font-bold mb-2 leading-tight group-hover:text-white/80 transition-colors">{post.title}</h4>
                                <div className="text-xs text-gray-500">{post.date}</div>
                            </div>
                        </motion.div>
                    ))}
                    
                    {/* Newsletter Box as filler */}
                    <div className="mt-auto bg-[#111] border border-white/5 rounded-2xl p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
                        <h4 className="font-bold mb-2 text-white">Subscribe to daily updates</h4>
                        <div className="flex gap-2">
                             <input type="email" placeholder="Email address" className="bg-black/30 border border-white/10 rounded-lg px-3 py-2 text-sm w-full focus:outline-none focus:border-accent" />
                             <button className="bg-accent text-black rounded-lg px-3 py-2"><ArrowUpRight size={18} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export const Footer = () => {
    // Magnetic Button Logic
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
        const center = { x: left + width / 2, y: top + height / 2 };
        x.set(clientX - center.x);
        y.set(clientY - center.y);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const elem = document.getElementById(targetId);
        
        if (elem) {
            // Offset for the fixed header
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = elem.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;
    
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    // Quick links array with correct IDs
    const footerLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <motion.footer 
            id="contact" 
            initial={{ opacity: 0, y: 20, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#050505] pt-32 relative overflow-hidden border-t border-white/5 flex flex-col justify-between min-h-[90vh]"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ccff0008_0%,transparent_40%)] pointer-events-none" />
            
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full relative z-10 flex-grow">
                {/* Heading & Magnetic CTA */}
                <div className="flex flex-col items-center justify-center text-center mb-24 relative group">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-sm uppercase tracking-[0.2em] text-accent mb-6 font-bold"
                    >
                        Let's Collaborate
                    </motion.div>
                    
                    <div className="relative">
                        <motion.h1 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.1 }}
                            className="text-[12vw] font-black leading-[0.9] tracking-tighter text-white/90 group-hover:text-white transition-colors duration-500"
                        >
                            LET'S WORK <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-500 to-white group-hover:from-accent group-hover:via-white group-hover:to-accent transition-all duration-1000">
                                TOGETHER
                            </span>
                        </motion.h1>
                        
                        {/* Magnetic Button */}
                        <motion.div 
                            ref={ref}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", duration: 0.8, delay: 0.4 }}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{ x: mouseX, y: mouseY }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                        >
                            <motion.div 
                                whileHover={{ scale: 1.1, rotate: 12 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-accent flex flex-col items-center justify-center text-black font-bold p-4 shadow-[0_0_60px_rgba(204,255,0,0.3)] hover:shadow-[0_0_100px_rgba(204,255,0,0.6)] transition-shadow duration-300"
                            >
                                <ArrowUpRight size={48} strokeWidth={2.5} className="mb-2" />
                                <span className="text-sm md:text-lg tracking-tight">Get In Touch</span>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Grid Links */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-32">
                    {/* Brand Info */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-4 pr-0 md:pr-12"
                    >
                         <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-accent rounded-tr-xl rounded-bl-xl flex items-center justify-center">
                                <div className="w-4 h-4 bg-black rounded-full" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white">pixatlas.</span>
                         </div>
                         <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
                             Quality Work with No Limits. SaaS Made Simple & Successful. Empowering your vision with cutting-edge technology.
                         </p>
                         <div className="flex items-center gap-4">
                            <Button variant="dark" className="rounded-xl px-6 border-white/10 hover:border-accent group">
                                <span className="group-hover:text-accent transition-colors">+1 234 567 890</span>
                            </Button>
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                            <span className="text-xs font-mono text-green-500 uppercase">System Online</span>
                         </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-2"
                    >
                        <h4 className="font-bold mb-6 text-lg text-white">Quick Link</h4>
                        <ul className="space-y-4 text-gray-500 text-sm font-medium">
                            {footerLinks.map((item) => (
                                <li key={item.name}>
                                    <a 
                                        href={item.href} 
                                        onClick={(e) => handleScrollToSection(e, item.href)}
                                        className="hover:text-accent hover:pl-2 transition-all duration-300 block"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div 
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.4 }}
                        className="md:col-span-2"
                    >
                        <h4 className="font-bold mb-6 text-lg text-white">Services</h4>
                        <ul className="space-y-4 text-gray-500 text-sm font-medium">
                            {['Branding', 'Content Creation', 'Digital Marketing', 'UX/UI Design', 'Development'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-accent hover:pl-2 transition-all duration-300 block">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Newsletter */}
                    <motion.div 
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.5 }}
                        className="md:col-span-4"
                    >
                         <h4 className="font-bold mb-6 text-lg text-white">Subscribe Our Newsletter</h4>
                         <p className="text-gray-500 text-sm mb-6">Stay updated with the latest news, updates and offers.</p>
                         <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                             <div className="relative">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-accent focus:bg-white/10 transition-all text-white placeholder-gray-600 peer" 
                                />
                                <Send className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 peer-focus:text-accent transition-colors" size={18} />
                             </div>
                             <button className="bg-accent text-black font-bold py-4 rounded-xl hover:bg-white transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(204,255,0,0.1)]">
                                Subscribe Now
                             </button>
                         </form>
                    </motion.div>
                </div>
            </div>

            {/* Sticky Contact Bar */}
            <div className="sticky bottom-0 z-50 w-full bg-[#050505]/80 backdrop-blur-xl border-t border-white/10">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500">
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                            <span>123 Creative Lane, London, UK</span>
                        </div>
                        <div className="hidden sm:block w-px h-3 bg-white/10" />
                        <div className="hover:text-accent transition-colors cursor-pointer">
                            hello@pixatlas.com
                        </div>
                    </div>

                    <div className="flex flex-col-reverse sm:flex-row items-center gap-6">
                        <span>© 2025 Pixatlas. All Rights Reserved.</span>
                        <div className="flex gap-2">
                             {[
                                 { icon: Github, href: "#", label: "Github" }, 
                                 { icon: Twitter, href: "#", label: "Twitter" }, 
                                 { icon: Linkedin, href: "#", label: "LinkedIn" },
                                 { icon: Instagram, href: "#", label: "Instagram" }
                             ].map((social, i) => (
                                 <a 
                                    key={i} 
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-black hover:border-accent transition-all duration-300 hover:-translate-y-1 text-gray-400"
                                 >
                                     <social.icon size={14} />
                                 </a>
                             ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};