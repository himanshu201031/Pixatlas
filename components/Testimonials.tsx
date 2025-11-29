import React, { useState } from 'react';
import { Section, Button } from './ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Quote, X } from 'lucide-react';

export const Pricing = () => {
    const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

    const plans = [
        {
            name: "Starter",
            description: "Essential tools for small teams.",
            price: billing === 'monthly' ? "29" : "24",
            features: ["Up to 5 Team Members", "Basic Analytics Dashboard", "24/7 Email Support", "10GB Cloud Storage"],
            notIncluded: ["Custom Integrations", "Advanced Security"],
            popular: false
        },
        {
            name: "Business",
            description: "Power and scale for growing companies.",
            price: billing === 'monthly' ? "99" : "79",
            features: ["Unlimited Team Members", "Real-time Advanced Analytics", "Priority 24/7 Support", "1TB Cloud Storage", "Custom Integrations", "API Access"],
            notIncluded: [],
            popular: true
        },
        {
            name: "Enterprise",
            description: "Custom solutions for global brands.",
            price: "Custom",
            features: ["Dedicated Account Manager", "Custom SLA & Contracts", "On-Premise Deployment", "SSO & Audit Logs", "Unlimited Storage", "White-labeling"],
            notIncluded: [],
            popular: false
        }
    ];

    return (
        <Section className="pb-32" id="pricing">
            <div className="text-center mb-12">
                 <span className="text-accent uppercase text-sm tracking-wider font-semibold">★ Pricing Plan</span>
                 <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">Transparent pricing for <br/><span className="text-accent">every stage</span></h2>
                 
                 {/* Toggle */}
                 <div className="flex items-center justify-center gap-4 mt-8">
                     <span className={`text-sm font-medium transition-colors ${billing === 'monthly' ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
                     <button 
                        onClick={() => setBilling(billing === 'monthly' ? 'yearly' : 'monthly')}
                        className="w-14 h-8 bg-white/10 rounded-full relative border border-white/10"
                     >
                         <motion.div 
                            className="w-6 h-6 bg-accent rounded-full absolute top-1 left-1"
                            animate={{ x: billing === 'monthly' ? 0 : 24 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                         />
                     </button>
                     <span className={`text-sm font-medium transition-colors ${billing === 'yearly' ? 'text-white' : 'text-gray-500'}`}>Yearly <span className="text-accent text-xs bg-accent/10 px-2 py-0.5 rounded-full ml-1">-20%</span></span>
                 </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {plans.map((plan, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`relative rounded-3xl p-8 border flex flex-col ${plan.popular ? 'bg-[#111] border-accent/50 shadow-[0_0_30px_rgba(204,255,0,0.1)]' : 'bg-[#0a0a0a] border-white/5'}`}
                    >
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                                Most Popular
                            </div>
                        )}
                        
                        <div className="mb-8">
                            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                            <p className="text-sm text-gray-400 h-10">{plan.description}</p>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-end gap-1">
                                <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                                    {plan.price === "Custom" ? "Custom" : `$${plan.price}`}
                                </span>
                                {plan.price !== "Custom" && <span className="text-gray-500 mb-1">/mo</span>}
                            </div>
                            {plan.price !== "Custom" && billing === 'yearly' && (
                                <div className="text-xs text-accent mt-2">Billed ${parseInt(plan.price) * 12} yearly</div>
                            )}
                        </div>

                        <Button 
                            variant={plan.popular ? 'primary' : 'dark'} 
                            className="w-full mb-8"
                        >
                            {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                        </Button>

                        <div className="space-y-4 flex-1">
                            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">Features</div>
                            {plan.features.map((feat, idx) => (
                                <div key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                                    <Check size={16} className={`shrink-0 mt-0.5 ${plan.popular ? 'text-accent' : 'text-gray-500'}`} />
                                    <span>{feat}</span>
                                </div>
                            ))}
                            {plan.notIncluded.map((feat, idx) => (
                                <div key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                                    <X size={16} className="shrink-0 mt-0.5" />
                                    <span>{feat}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

const testimonials = [
    {
        quote: "This platform has transformed our operations. The friendly design and powerful features have made us more efficient.",
        author: "Michael R.",
        role: "CTO, TechFlow",
        rating: 5,
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100"
    },
    {
        quote: "A game changer for our SaaS business. The analytics are incredibly detailed and easy to understand.",
        author: "Sarah J.",
        role: "PM, Innovate",
        rating: 5,
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=100&h=100"
    },
    {
        quote: "Implementation was seamless. The API documentation is thorough and the support team helped us every step.",
        author: "David C.",
        role: "Dev, CodeWorks",
        rating: 5,
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=100&h=100"
    },
    {
        quote: "The ROI was immediate. The automated workflows saved our marketing team over 20 hours a week.",
        author: "Emily D.",
        role: "CMO, GrowthInc",
        rating: 5,
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?fit=crop&w=100&h=100"
    },
    {
        quote: "Scalability was our biggest concern, but Pixatlas handled our user spike effortlessly during launch week.",
        author: "James W.",
        role: "Founder, ScaleUp",
        rating: 5,
        img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?fit=crop&w=100&h=100"
    },
    {
        quote: "The UI kit provided is stunning. It drastically reduced our design-to-dev handoff time.",
        author: "Jessica L.",
        role: "Designer, ArtSpace",
        rating: 5,
        img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?fit=crop&w=100&h=100"
    }
];

const TestimonialCard: React.FC<{ item: typeof testimonials[0] }> = ({ item }) => (
    <div className="w-[350px] md:w-[450px] shrink-0 bg-[#0a0a0a] border border-white/5 p-8 rounded-[2rem] relative group hover:border-white/10 transition-colors">
        <div className="absolute top-6 right-8 text-white/5 group-hover:text-accent/20 transition-colors">
            <Quote size={40} />
        </div>
        
        <p className="text-gray-300 text-lg mb-8 leading-relaxed font-medium relative z-10">"{item.quote}"</p>
        
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                <img src={item.img} alt={item.author} className="w-full h-full object-cover" />
            </div>
            <div>
                <h4 className="font-bold text-white">{item.author}</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wider">{item.role}</p>
            </div>
            <div className="ml-auto flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-sm">★</span>
                ))}
            </div>
        </div>
    </div>
);

export const Testimonials = () => {
    return (
        <Section className="relative overflow-hidden py-32 bg-[#050505]">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,#ccff0005_0%,transparent_70%)] pointer-events-none" />

            <div className="relative z-10 mb-20 text-center px-4">
                 <span className="text-accent uppercase text-sm tracking-wider mb-4 block font-semibold">★ Testimonials</span>
                 <h2 className="text-4xl md:text-6xl font-bold mb-6">What our <span className="text-accent">clients</span> say</h2>
                 <p className="text-gray-400 max-w-xl mx-auto">Discover how businesses are scaling faster and working smarter with our platform.</p>
            </div>

            {/* Infinite Scroll Container */}
            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks */}
                <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />

                {/* Row 1: Left to Right */}
                <div className="flex mb-8">
                    <motion.div
                        className="flex gap-6 pr-6"
                        animate={{ x: [0, -1920] }} // Adjust based on content width roughly
                        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                    >
                        {[...testimonials, ...testimonials, ...testimonials].map((item, i) => (
                            <TestimonialCard key={`row1-${i}`} item={item} />
                        ))}
                    </motion.div>
                </div>

                 {/* Row 2: Right to Left (Slower) */}
                 <div className="flex">
                    <motion.div
                        className="flex gap-6 pr-6"
                        initial={{ x: -1920 }}
                        animate={{ x: 0 }} 
                        transition={{ duration: 50, ease: "linear", repeat: Infinity }}
                    >
                        {[...testimonials, ...testimonials, ...testimonials].map((item, i) => (
                            <TestimonialCard key={`row2-${i}`} item={item} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};