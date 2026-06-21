import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data/resume';
import AuroraBackground from './AuroraBackground';
import MagneticHover from './MagneticHover';

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; hue: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        hue: Math.random() * 60 + 230, // Purple to cyan range
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.hue += 0.2;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 70%, 65%, ${p.opacity})`;
        ctx.fill();

        // Connect nearby particles
        particles.forEach((p2, j) => {
          if (i === j) return;
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const gradient = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
            gradient.addColorStop(0, `hsla(${p.hue}, 70%, 65%, ${0.12 * (1 - dist / 120)})`);
            gradient.addColorStop(1, `hsla(${p2.hue}, 70%, 65%, ${0.12 * (1 - dist / 120)})`);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleField />
      <AuroraBackground />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(108, 99, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(108, 99, 255, 0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting line */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-card/50 border border-dark-border backdrop-blur-sm mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', bounce: 0.4 }}
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-text-secondary text-sm font-mono">Available for opportunities</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-text-primary via-primary to-accent bg-clip-text text-transparent">
              Ranganath
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent via-primary to-text-primary bg-clip-text text-transparent">
              Mundhe
            </span>
          </motion.h1>

          {/* Animated role */}
          <motion.div
            className="text-xl md:text-2xl lg:text-3xl font-mono text-text-secondary mb-8 h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span className="text-primary">{'>'}</span>{' '}
            <TypeAnimation
              sequence={[
                'I architect systems.',
                2500,
                'I write clean code.',
                2500,
                'I build with AWS.',
                2500,
                'I ship production apps.',
                2500,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="text-text-primary"
            />
            <motion.span
              className="inline-block w-0.5 h-7 bg-primary ml-1 align-middle"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </motion.div>

          <motion.p
            className="text-text-secondary max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            {personalInfo.objective}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
          >
            <MagneticHover strength={0.4}>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiMail size={18} />
                Get In Touch
              </motion.a>
            </MagneticHover>
            <MagneticHover strength={0.4}>
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-dark-border text-text-primary rounded-xl font-medium hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </MagneticHover>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            {[
              { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
              { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
              { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }, i) => (
              <MagneticHover key={i} strength={0.5}>
                <motion.a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-xl border border-dark-border text-text-secondary hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 backdrop-blur-sm"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              </MagneticHover>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted hover:text-primary transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <FiArrowDown size={20} />
      </motion.a>
    </section>
  );
}
