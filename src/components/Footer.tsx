import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';
import { personalInfo } from '../data/resume';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-6 border-t border-dark-border">
      <div className="max-w-6xl mx-auto text-center">
        <motion.a
          href="#home"
          className="inline-block text-2xl font-bold font-mono text-primary hover:text-accent transition-colors mb-4"
          whileHover={{ scale: 1.05 }}
        >
          {'<RM />'}
        </motion.a>
        <p className="text-text-muted text-sm mb-2">
          Designed & Built by {personalInfo.name}
        </p>
        <p className="text-text-muted text-xs flex items-center justify-center gap-1">
          Made with <FiHeart className="text-red-500" size={12} /> using React + Tailwind CSS + Framer Motion
        </p>
        <p className="text-text-muted/50 text-xs mt-4">
          &copy; {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
