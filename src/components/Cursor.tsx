import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const trailRef = useRef<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
      trailRef.current.push({ x: e.clientX, y: e.clientY });
      if (trailRef.current.length > 8) trailRef.current.shift();
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-cursor="pointer"]')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: isClicking ? 0.8 : isHovering ? 2 : 1,
        }}
        transition={{ scale: { duration: 0.2 } }}
      >
        <div className="w-full h-full rounded-full bg-white" />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9998] border border-white/30 hidden md:block"
        style={{
          x: useSpring(cursorX, { damping: 35, stiffness: 200, mass: 0.8 }),
          y: useSpring(cursorY, { damping: 35, stiffness: 200, mass: 0.8 }),
          scale: isClicking ? 0.6 : isHovering ? 1.5 : 1,
        }}
        transition={{ scale: { duration: 0.3 } }}
      />

      {/* Glow effect */}
      <motion.div
        className="fixed top-0 left-0 w-64 h-64 rounded-full pointer-events-none z-[9997] hidden md:block"
        style={{
          x: useSpring(cursorX, { damping: 50, stiffness: 100, mass: 1 }),
          y: useSpring(cursorY, { damping: 50, stiffness: 100, mass: 1 }),
          background: 'radial-gradient(circle, rgba(108, 99, 255, 0.08) 0%, transparent 70%)',
        }}
      />
    </>
  );
}
