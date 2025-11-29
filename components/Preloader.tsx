import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
  minLoadTime?: number; // Minimum time to show loader in ms
}

const loadingMessages = [
  "Initializing core systems...",
  "Loading assets...",
  "Connecting to server...",
  "Optimizing experience...",
  "Ready to launch."
];

export const Preloader = ({ onComplete, minLoadTime = 2500 }: PreloaderProps) => {
  const [count, setCount] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [canFinish, setCanFinish] = useState(false);
  const [flooded, setFlooded] = useState(false);

  // Check for actual page load
  useEffect(() => {
    const handleLoad = () => setIsPageLoaded(true);

    if (document.readyState === 'complete') {
      setIsPageLoaded(true);
    } else {
      window.addEventListener('load', handleLoad);
    }
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  // Minimum timer and progress simulation
  useEffect(() => {
    const interval = 20;
    const totalSteps = minLoadTime / interval;
    const increment = 100 / totalSteps;

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setCanFinish(true);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [minLoadTime]);

  // Message cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  // Finish logic
  useEffect(() => {
    if (count >= 100 && isPageLoaded && canFinish) {
      // Add a small delay for the final "100%" state to be seen before flooding
      const timeout = setTimeout(() => {
        setFlooded(true);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [count, isPageLoaded, canFinish]);

  // Trigger completion after flood
  useEffect(() => {
    if (flooded) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 1000); // Wait for flood animation to complete
      return () => clearTimeout(timeout);
    }
  }, [flooded, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] overflow-hidden font-sans"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Flood Layer */}
      <motion.div
        className="absolute bottom-0 left-0 w-full bg-accent z-30"
        initial={{ height: "0%" }}
        animate={{
          height: flooded ? "100%" : "0%",
          borderTopLeftRadius: flooded ? ["0%", "50%", "0%"] : "0%",
          borderTopRightRadius: flooded ? ["0%", "50%", "0%"] : "0%",
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] animate-pulse" />

      {/* Content Container */}
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center w-full max-w-md px-6"
        animate={{
          opacity: flooded ? 0 : 1,
          y: flooded ? -50 : 0,
          filter: flooded ? "blur(10px)" : "blur(0px)"
        }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated Logo */}
        <div className="mb-12 relative">
          <motion.div
            className="w-20 h-20 border-2 border-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent" />
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-10 h-10 bg-accent rounded-lg shadow-[0_0_20px_rgba(204,255,0,0.4)]"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 180, 270, 360] }}
              transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
            />
          </div>
        </div>

        {/* Brand Text */}
        <div className="overflow-hidden mb-8 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2"
          >
            pixatlas<span className="text-accent">.</span>
          </motion.h1>
          <motion.p
            key={messageIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-xs text-gray-500 font-mono uppercase tracking-widest h-4"
          >
            {count >= 100 ? "Ready" : loadingMessages[messageIndex]}
          </motion.p>
        </div>

        {/* Progress Bar & Counter */}
        <div className="w-full flex flex-col items-center gap-4">
          <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-accent shadow-[0_0_10px_#ccff00]"
              style={{ width: `${Math.min(count, 100)}%` }}
            />
          </div>
          <div className="flex justify-between w-full text-[10px] font-mono text-gray-500">
            <span>LOADING</span>
            <span className="text-white font-bold">{Math.round(Math.min(count, 100))}%</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};