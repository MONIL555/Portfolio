import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    
    const handleMouseMove = (e: MouseEvent) => {
      animationFrameId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="hidden lg:block pointer-events-none z-[9999]">
      {/* Dot */}
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-electricViolet rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-[9999]"
        style={{ left: `${mousePos.x}px`, top: `${mousePos.y}px` }}
      />
      {/* Ring */}
      <motion.div 
        className="fixed top-0 left-0 rounded-full pointer-events-none border border-electricViolet/50 transform -translate-x-1/2 -translate-y-1/2 z-[9998]"
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          width: isHovering ? 60 : 44,
          height: isHovering ? 60 : 44,
          backgroundColor: isHovering ? 'rgba(124, 58, 237, 0.1)' : 'transparent'
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 18,
          mass: 0.5
        }}
      />
    </div>
  );
};
