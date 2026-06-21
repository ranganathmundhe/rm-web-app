import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiUser, FiMapPin, FiGlobe } from 'react-icons/fi';
import { personalInfo } from '../data/resume';
import AnimatedCounter from './AnimatedCounter';
import GlowCard from './GlowCard';

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const infoItems = [
    { icon: FiUser, label: 'Name', value: personalInfo.name },
    { icon: FiMapPin, label: 'Location', value: 'Pune, India' },
    { icon: FiGlobe, label: 'Languages', value: personalInfo.languages.join(', ') },
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <motion.p
              className="text-primary font-mono text-sm tracking-widest uppercase mb-3"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              {'// About Me'}
            </motion.p>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
              Who I <span className="text-primary">Am</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="relative w-80 h-80 mx-auto">
                {/* Animated rings */}
                <motion.div
                  className="absolute inset-0 border-2 border-primary/20 rounded-3xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                  className="absolute inset-3 border border-accent/20 rounded-3xl"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                />

                {/* Main card */}
                <div className="absolute inset-6 bg-dark-card rounded-2xl border border-dark-border overflow-hidden flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center p-8">
                    <motion.div
                      className="text-7xl font-bold font-mono bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2"
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: 0.5, type: 'spring', bounce: 0.4 }}
                    >
                      4+
                    </motion.div>
                    <div className="text-text-secondary text-sm">Years of Experience</div>
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  className="absolute -top-3 -right-3 bg-dark-card border border-dark-border rounded-xl px-4 py-2 shadow-lg backdrop-blur-sm"
                  animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <span className="text-accent font-mono text-sm">{'<FullStack />'}</span>
                </motion.div>
                <motion.div
                  className="absolute -bottom-3 -left-3 bg-dark-card border border-dark-border rounded-xl px-4 py-2 shadow-lg backdrop-blur-sm"
                  animate={{ y: [0, 8, 0], rotate: [0, -2, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
                >
                  <span className="text-primary font-mono text-sm">{'{React}'}</span>
                </motion.div>
                <motion.div
                  className="absolute top-1/2 -right-8 bg-dark-card border border-dark-border rounded-xl px-3 py-2 shadow-lg backdrop-blur-sm"
                  animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                >
                  <span className="text-red-400 font-mono text-xs">{'AWS'}</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Full Stack Developer based in <span className="text-primary">Pune, India</span>
              </h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                I'm a passionate full-stack developer with 4+ years of experience building
                web applications. I specialize in the JavaScript ecosystem, working with
                React, Next.js, Node.js, and various databases. I love creating elegant
                solutions to complex problems and building applications that make a difference.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {infoItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="flex items-start gap-3 p-3 rounded-xl bg-dark-surface border border-dark-border hover:border-primary/20 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <item.icon className="text-primary mt-0.5 shrink-0" size={18} />
                    <div>
                      <p className="text-text-muted text-xs uppercase tracking-wider">{item.label}</p>
                      <p className="text-text-primary text-sm font-medium">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats row */}
              <motion.div
                className="grid grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
              >
                <GlowCard className="p-4">
                  <AnimatedCounter value={4} suffix="+" label="Years Exp" />
                </GlowCard>
                <GlowCard className="p-4">
                  <AnimatedCounter value={12} suffix="+" label="Projects" />
                </GlowCard>
                <GlowCard className="p-4">
                  <AnimatedCounter value={15} suffix="+" label="Technologies" />
                </GlowCard>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
