import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onNavigate: (page: string) => void;
}

export const Navbar = ({ onNavigate }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Pages', href: '#features' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onNavigate('home');

    // We need to wait a tick for the home page to mount if we were on another page
    setTimeout(() => {
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
    }, 100);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'py-4 bg-[#050505]/80 backdrop-blur-xl border-b border-accent/20 shadow-[0_0_15px_rgba(204,255,0,0.1)]' : 'py-6 md:py-10 bg-transparent'}`}>
      <div className="w-full px-6 md:px-12 flex items-center justify-between relative">

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleScrollToSection(e, '#home')}
          className="flex items-center gap-2 group relative z-50"
          aria-label="Go to Home"
        >
          <div className="w-8 h-8 bg-accent rounded-tr-xl rounded-bl-xl flex items-center justify-center group-hover:rotate-180 transition-transform duration-500">
            <div className="w-3 h-3 bg-black rounded-full" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">pixatlas.</span>
        </a>

        {/* Desktop Nav - Centered Absolutely */}
        <div className={`hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-2 px-2 py-2 rounded-full border transition-all duration-500 ${isScrolled ? 'bg-transparent border-transparent' : 'bg-white/5 border-white/5 backdrop-blur-sm'}`}>
          {navLinks.map((link, index) => {
            const [isHovered, setIsHovered] = useState(false);

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative px-5 py-2 text-sm text-gray-300 hover:text-white transition-colors font-medium rounded-full"
              >
                {isHovered && (
                  <motion.div
                    layoutId="navHover"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </div>

        {/* Auth Buttons & Menu Toggle */}
        <div className="flex items-center gap-4 relative z-50">
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => onNavigate('login')}
              className="text-sm font-bold text-white hover:text-accent transition-colors px-2"
            >
              Log In
            </button>
            <button
              onClick={() => onNavigate('signup')}
              className="bg-accent text-black text-sm font-bold px-6 py-2.5 rounded-full hover:bg-white transition-all shadow-[0_0_15px_rgba(204,255,0,0.3)] hover:shadow-[0_0_25px_rgba(204,255,0,0.5)]"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-[#050505] z-40 md:hidden pt-24 px-6"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollToSection(e, link.href)}
                  className="text-2xl font-bold text-white hover:text-accent"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-white/10 w-full my-4" />
              <button onClick={() => { onNavigate('login'); setIsOpen(false); }} className="text-xl font-bold text-white">Log In</button>
              <button onClick={() => { onNavigate('signup'); setIsOpen(false); }} className="text-xl font-bold text-accent">Sign Up</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};