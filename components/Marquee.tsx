import React from 'react';
import { motion } from 'framer-motion';

const LOGOS = [
  {
    name: "Behance",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.129 1.008.129 1.51h-8.385c.159 1.544 1.111 2.661 2.954 2.661 1.354 0 2.223-.651 2.536-1.332h2.59zm-2.908-3.882c-.081-1.278-1.076-2.071-2.427-2.071-1.42 0-2.347.88-2.493 2.071h4.92zm-12.818 6.882h-8v-14h8.379c2.817 0 5.122 1.392 5.122 4.195 0 2.164-1.241 3.253-2.618 3.652 1.884.516 3.118 1.966 3.118 4.015 0 3.047-2.739 4.138-5.996 4.138zm-4.706-9.133h3.585c1.677 0 2.898-.564 2.898-2.226 0-1.637-1.161-2.128-2.709-2.128h-3.774v4.354zm0 6.633h4.085c1.784 0 3.097-.564 3.097-2.454 0-1.916-1.127-2.451-2.92-2.451h-4.262v4.905z" />
      </svg>
    )
  },
  {
    name: "Slack",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52h-2.521zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.522 2.521 2.527 2.527 0 0 1-2.522-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.522 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.522 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.522 2.527 2.527 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
      </svg>
    )
  },
  {
    name: "Asana",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
        <circle cx="12" cy="12" r="5" />
        <circle cx="20" cy="12" r="3" opacity="0.6" />
        <circle cx="4" cy="12" r="3" opacity="0.6" />
      </svg>
    )
  },
  {
    name: "Upwork",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.816v6.105c0 2.355-1.908 4.264-4.263 4.264s-4.263-1.909-4.263-4.264V3.492H-3.447v6.105c0 4.125 3.356 7.481 7.481 7.481s7.481-3.356 7.481-7.481V7.202c.638 2.457 2.031 6.014 4.885 8.212l-1.045 4.936h3.454l1.373-6.495c2.316-.319 4.1-2.296 4.1-4.701 0-2.636-2.134-4.77-4.766-4.77z"/>
      </svg>
    )
  },
  {
    name: "Trello",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
        <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect x="7" y="6" width="4" height="9" rx="1" />
        <rect x="13" y="6" width="4" height="5" rx="1" />
      </svg>
    )
  },
  {
    name: "Google",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
        <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
      </svg>
    )
  },
  {
    name: "Microsoft",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
        <rect x="1" y="1" width="10" height="10" />
        <rect x="13" y="1" width="10" height="10" />
        <rect x="1" y="13" width="10" height="10" />
        <rect x="13" y="13" width="10" height="10" />
      </svg>
    )
  },
  {
    name: "Fiverr",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-6 md:w-12 md:h-8">
         <circle cx="21" cy="6" r="2" />
         <path d="M16.953 19.167h-3.416V9.826c0-3.664-3.594-2.822-3.594 0v9.34H6.527V2h3.416v3.13c1.78-1.564 7.01-1.602 7.01 4.545v9.492z" />
      </svg>
    )
  }
];

export const Marquee = () => {
  // Duplicate the list enough times to ensure seamless infinite scroll on wide screens
  const marqueeItems = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      className="w-full bg-accent py-8 md:py-12 overflow-hidden relative rotate-[-2deg] scale-[1.02] origin-center z-20 border-y-4 border-black"
    >
      {/* Tape effect lines */}
      <div className="absolute top-1 inset-x-0 h-px bg-black/10" />
      <div className="absolute bottom-1 inset-x-0 h-px bg-black/10" />
      
      <div className="flex w-max animate-marquee">
        {marqueeItems.map((item, i) => (
          <div key={i} className="flex items-center gap-2 md:gap-4 px-6 md:px-12 group cursor-default">
            <div className="text-black transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
               {item.icon}
            </div>
            <span className="text-black font-extrabold text-xl md:text-3xl uppercase tracking-tighter opacity-80 group-hover:opacity-100 transition-opacity">
              {item.name}
            </span>
             {/* Separator */}
             <span className="text-black/30 text-lg md:text-2xl font-light ml-6 md:ml-12">✦</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
