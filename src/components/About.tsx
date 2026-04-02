import { motion } from 'motion/react';
import { User, Code, Database, Brain } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'AI Research', icon: Brain, color: 'text-primary' },
    { label: 'Data Science', icon: Database, color: 'text-secondary' },
    { label: 'Cloud Computing', icon: Code, color: 'text-accent' },
  ];

  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          <div className="lg:w-1/)2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full glass mb-4">
              <User size={14} className="text-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">About Me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Bridging the gap between <span className="text-primary">Research</span> and <span className="text-secondary">Engineering</span>.
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              I am an AI Engineer, Data Scientist, and Research Specialist dedicated to designing intelligent systems powered by deep learning, data-driven methodologies, and modern cloud technologies. I specialize in medical image analysis, computer vision, applied machine learning, and AI research.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              Currently, I am pursuing a degree in Artificial Intelligence & Data Science at Hussein Technical University (HTU), where I continue advancing my skills in model development, optimization, and real-world AI deployment.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-2xl glass flex flex-col items-center text-center"
                >
                  <stat.icon className={`${stat.color} mb-2`} size={24} />
                  <span className="text-sm font-bold">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="aspect-square rounded-3xl overflow-hidden glass p-2">
              <img
                src="profile.jpg" 
                alt="Mohammad Maaitah" 
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}