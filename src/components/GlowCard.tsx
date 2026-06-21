import { motion } from 'framer-motion';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlowCard({ children, className = '' }: GlowCardProps) {
  return (
    <motion.div
      className={`relative group ${className}`}
      whileHover={{ y: -5 }}
    >
      {/* Glow border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative bg-dark-card border border-dark-border rounded-2xl overflow-hidden group-hover:border-primary/20 transition-all duration-300">
        {children}
      </div>
    </motion.div>
  );
}
