import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiCode, FiClock, FiUser, FiStar } from 'react-icons/fi';
import { projects } from '../data/resume';

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 relative bg-dark-surface/50">
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
              {'// Projects'}
            </motion.p>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
              Featured <span className="text-primary">Work</span>
            </h2>
          </div>

          {/* Featured Projects - Full Width */}
          <div className="space-y-6 mb-10">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                className="bg-dark-card border border-primary/20 rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 group cursor-pointer relative"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15 }}
                whileHover={{ y: -4 }}
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              >
                {/* Featured badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono z-10">
                  <FiStar size={12} /> Featured
                </div>

                {/* Header gradient */}
                <div className="h-1.5 bg-gradient-to-r from-primary via-accent to-primary" />

                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-text-primary group-hover:text-primary transition-colors leading-tight pr-24">
                      {project.title}
                    </h3>
                    <motion.div
                      animate={{ rotate: expandedIndex === i ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiExternalLink className="text-text-muted group-hover:text-primary transition-colors shrink-0" size={20} />
                    </motion.div>
                  </div>

                  <div className="flex items-center gap-4 mb-5 text-sm text-text-muted">
                    <span className="flex items-center gap-1.5">
                      <FiUser size={14} /> {project.role}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiClock size={14} /> {project.duration}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-xs font-mono border border-primary/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <AnimatePresence>
                    {expandedIndex === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-text-secondary text-sm leading-relaxed mb-5">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.highlights.map((h) => (
                            <span
                              key={h}
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/10 text-accent text-xs font-medium"
                            >
                              <FiCode size={11} /> {h}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {expandedIndex !== i && (
                    <p className="text-text-muted text-sm line-clamp-2">
                      {project.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects - Grid */}
          <h3 className="text-xl font-bold text-text-primary mb-6 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, i) => (
              <motion.div
                key={project.title}
                className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setExpandedIndex(expandedIndex === (i + featuredProjects.length) ? null : i + featuredProjects.length)}
              >
                <div className="h-2 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50" />

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-base font-bold text-text-primary group-hover:text-primary transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <FiExternalLink className="text-text-muted group-hover:text-primary transition-colors shrink-0 ml-2" size={16} />
                  </div>

                  <div className="flex items-center gap-3 mb-3 text-xs text-text-muted">
                    <span className="flex items-center gap-1">
                      <FiUser size={11} /> {project.role}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiClock size={11} /> {project.duration}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-lg bg-primary/10 text-primary text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <AnimatePresence>
                    {expandedIndex === (i + featuredProjects.length) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-text-secondary text-sm leading-relaxed mb-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.highlights.map((h) => (
                            <span
                              key={h}
                              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-accent/10 text-accent text-xs"
                            >
                              <FiCode size={10} /> {h}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {expandedIndex !== (i + featuredProjects.length) && (
                    <p className="text-text-muted text-sm line-clamp-2">
                      {project.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
