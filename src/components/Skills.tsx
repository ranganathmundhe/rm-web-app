import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/resume';

function SkillBar({ name, level, index, inView }: { name: string; level: number; index: number; inView: boolean }) {
  return (
    <motion.div
      className="group"
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-text-primary text-sm font-medium group-hover:text-primary transition-colors">
          {name}
        </span>
        <span className="text-text-muted text-xs font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-dark-surface rounded-full overflow-hidden border border-dark-border">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ delay: index * 0.05 + 0.3, duration: 0.8, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="py-24 px-6 relative bg-dark-surface/50">
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
              {'// My Skills'}
            </motion.p>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary">
              Tech <span className="text-primary">Stack</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], catIndex) => (
              <motion.div
                key={category}
                className="bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: catIndex * 0.15 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg font-bold text-text-primary mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary group-hover:bg-accent transition-colors" />
                  {category}
                </h3>
                <div className="space-y-4">
                  {skillList.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      index={i + catIndex * 5}
                      inView={inView}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
