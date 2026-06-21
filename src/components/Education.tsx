import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBookOpen, FiCalendar } from 'react-icons/fi';
import { education } from '../data/resume';

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
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
              {'// Education'}
            </motion.p>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
              Academic <span className="text-primary">Background</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                className="bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                    <FiBookOpen size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-text-secondary text-sm mb-3">{edu.institution}</p>
                    <div className="flex items-center gap-1.5 text-accent text-xs font-mono">
                      <FiCalendar size={12} />
                      {edu.year}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
