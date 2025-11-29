"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // 1. Inner Dot: Tracks mouse almost instantly for precision
  const dotSpringConfig = { damping: 40, stiffness: 1000, mass: 0.1 };
  const dotX = useSpring(cursorX, dotSpringConfig);
  const dotY = useSpring(cursorY, dotSpringConfig);

  // 2. Outer Ring: Smooth follow effect
  const ringSpringConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const ringX = useSpring(cursorX, ringSpringConfig);
  const ringY = useSpring(cursorY, ringSpringConfig);

  // 3. Trail: Slightly lazier drag effect for visual flair
  const trailSpringConfig = { damping: 30, stiffness: 200, mass: 0.8 };
  const trailX = useSpring(cursorX, trailSpringConfig);
  const trailY = useSpring(cursorY, trailSpringConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!hasMoved) setHasMoved(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for common interactive elements or cursor:pointer style
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('[role="button"]') ||
        target.tagName === 'INPUT' || 
        window.getComputedStyle(target).cursor === 'pointer';

      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, hasMoved]);

  if (!hasMoved) return null;

  return (
    <>
      {/* Neon Trail */}
       <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-[#ccff00] rounded-full pointer-events-none z-[9997] opacity-30 blur-[4px]"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      
      {/* Inner Precise Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#ccff00] rounded-full pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
            scale: isClicking ? 0.5 : isHovering ? 0.3 : 1,
        }}
      />
      
      {/* Outer Interactive Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#ccff00] pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
            width: isHovering ? 64 : 24,
            height: isHovering ? 64 : 24,
            backgroundColor: isHovering ? "rgba(204, 255, 0, 0.05)" : "transparent",
            borderColor: isHovering ? "rgba(204, 255, 0, 0.4)" : "#ccff00",
            scale: isClicking ? 0.9 : 1,
        }}
        transition={{
            type: "spring",
            stiffness: 300,
            damping: 25
        }}
      />
    </>
  );
};
