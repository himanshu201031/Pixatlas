import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  noPadding?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = "", id, noPadding = false }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 100, filter: "blur(20px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      className={`relative w-full max-w-[1440px] mx-auto ${noPadding ? '' : 'px-4 md:px-8 lg:px-12 py-16 md:py-32'} ${className}`}
    >
      {children}
    </motion.section>
  );
};

export const Reveal: React.FC<{ 
  children: React.ReactNode; 
  delay?: number; 
  className?: string; 
  width?: "fit-content" | "100%";
}> = ({ children, delay = 0, className = "", width = "fit-content" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.2, delay: delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};

export const Button: React.FC<{ 
  children: React.ReactNode; 
  variant?: 'primary' | 'outline' | 'dark'; 
  className?: string;
  onClick?: () => void;
}> = ({ children, variant = 'primary', className = "", onClick }) => {
  const baseStyle = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium transition-all duration-300 text-sm md:text-base relative overflow-hidden group";
  
  const variants = {
    primary: "bg-white text-black hover:bg-accent hover:text-black",
    outline: "border border-white/20 text-white hover:bg-white/10 hover:border-white/40",
    dark: "bg-white/10 text-white hover:bg-white/20 border border-white/5"
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === 'primary' && (
         <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
      )}
    </button>
  );
};

export const ArrowButton = () => (
    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-black rotate-[-45deg] group-hover:rotate-0 transition-transform duration-300">
        ➜
    </div>
);