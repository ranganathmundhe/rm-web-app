import { useEffect, useState } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export default function AnimatedCounter({ value, suffix = '', label }: AnimatedCounterProps) {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  const scale = useTransform(springValue, [0, value], [0.5, 1]);
  const opacity = useTransform(springValue, [0, value * 0.3], [0, 1]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      style={{ scale, opacity }}
    >
      <div className="text-4xl md:text-5xl font-bold font-mono text-primary mb-2">
        {displayValue}{suffix}
      </div>
      <div className="text-text-muted text-sm uppercase tracking-wider">{label}</div>
    </motion.div>
  );
}
