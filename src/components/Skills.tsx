import { motion } from 'motion/react';
import { Code2, Cpu, Database, Layout, Terminal, Users } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: ['Python', 'Java', 'SQL'],
      color: 'text-primary',
    },
    {
      title: 'Frameworks & Libraries',
      icon: Cpu,
      skills: ['PyTorch', 'FastAPI', 'Spring Boot', 'Pandas', 'NumPy', 'Scikit-learn', 'Docker'],
      color: 'text-secondary',
    },
    {
      title: 'Tools & Platforms',
      icon: Database,
      skills: ['AWS', 'Power BI', 'Jira', 'Postman', 'Nutanix', 'Excel'],
      color: 'text-accent',
    },
    {
      title: 'Research Skills',
      icon: Terminal,
      skills: ['AI Research', 'Experimentation', 'Data Modeling', 'Academic Writing'],
      color: 'text-primary',
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Project Management', 'Reporting', 'Leadership', 'Communication'],
      color: 'text-secondary',
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Technical <span className="text-gradient">Arsenal</span></h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to build intelligent systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl glass hover:border-primary/50 transition-all group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-3 rounded-2xl bg-card border border-border group-hover:scale-110 transition-transform ${category.color}`}>
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-card border border-border text-text-secondary group-hover:text-text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
