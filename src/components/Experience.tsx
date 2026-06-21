import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCheck } from 'react-icons/fi';
import { experiences } from '../data/resume';

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
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
              {'// Experience'}
            </motion.p>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
              Work <span className="text-primary">History</span>
            </h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.2 }}
              >
                <motion.div
                  className="bg-dark-card border border-dark-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group"
                  whileHover={{ y: -3 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <FiBriefcase size={22} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                          {exp.company}
                        </h3>
                        <p className="text-primary text-sm font-mono">{exp.designation}</p>
                      </div>
                    </div>
                    <div className="px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-mono shrink-0 self-start">
                      {exp.duration}
                    </div>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {exp.highlights && exp.highlights.length > 0 && (
                    <div className="space-y-2.5">
                      {exp.highlights.map((highlight, j) => (
                        <motion.div
                          key={j}
                          className="flex items-start gap-3 text-sm text-text-secondary"
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.4 + i * 0.2 + j * 0.05 }}
                        >
                          <FiCheck className="text-accent mt-0.5 shrink-0" size={14} />
                          <span>{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
