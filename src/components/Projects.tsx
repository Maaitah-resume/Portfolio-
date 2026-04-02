import { motion } from 'motion/react';
import { ExternalLink, Github, Layers, Shield, Zap, Activity, Battery } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Leukemia Segmentation (U-Net)',
      description: 'Deep learning segmentation model deployed on HuggingFace Spaces for automated leukemia cell analysis.',
      image: 'https://picsum.photos/seed/microscope-cells/800/600',
      tags: ['PyTorch', 'U-Net', 'Computer Vision', 'Medical AI'],
      link: 'https://huggingface.co/spaces/Maaitah/Leukemia',
      icon: Zap,
      color: 'text-primary',
    },
    {
      title: 'Brain Tumor Classification',
      description: 'AI-driven MRI classification system based on CNN architectures for early tumor detection.',
      image: 'https://picsum.photos/seed/mri-scan/800/600',
      tags: ['CNN', 'Deep Learning', 'MRI Analysis', 'Python'],
      link: 'https://www.kaggle.com/code/mohammadmaaitah5/notebookbe584930f4',
      icon: Layers,
      color: 'text-secondary',
    },
    {
      title: 'VoltCity Charging Portal',
      description: 'Advanced EV charging management system featuring predictive ML models, anomaly detection, and reinforcement learning for optimized energy distribution.',
      image: 'https://picsum.photos/seed/ev-charging-station/800/600',
      tags: ['Machine Learning', 'Reinforcement Learning', 'EV Charging', 'Dashboard'],
      link: 'https://github.com/Maaitah-resume/voltcity_charging_portal---Copy',
      icon: Battery,
      color: 'text-accent',
    },
    {
      title: 'Fitness AI Assistant',
      description: 'Personalized AI-driven fitness companion that analyzes user data to provide tailored workout routines and health recommendations.',
      image: 'https://picsum.photos/seed/fitness-tracking/800/600',
      tags: ['AI', 'Fitness', 'Python', 'Data Analysis'],
      link: 'https://github.com/Maaitah-resume/Fitness-AI-Assistant',
      icon: Activity,
      color: 'text-primary',
    },
    {
      title: 'Federated Learning IDS',
      description: 'Next-generation cybersecurity AI leveraging federated learning for privacy-preserving intrusion detection.',
      image: 'https://picsum.photos/seed/network-security/800/600',
      tags: ['Federated Learning', 'PyTorch', 'Cybersecurity', 'Cloud'],
      link: '#',
      upcoming: true,
      icon: Shield,
      color: 'text-accent',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A selection of my work in medical imaging, deep learning, and cybersecurity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col rounded-3xl glass overflow-hidden hover:border-primary/50 transition-all"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                {project.upcoming && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-accent/20 backdrop-blur-md border border-accent/50 rounded-full text-[10px] font-black uppercase tracking-widest text-accent">
                    Upcoming
                  </div>
                )}
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center space-x-3 mb-4">
                  <project.icon className={project.color} size={20} />
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
                
                <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-text-secondary/60">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mt-auto">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-flex items-center text-sm font-bold ${project.upcoming ? 'opacity-50 cursor-not-allowed' : 'hover:text-primary transition-colors'}`}
                  >
                    Open Project <ExternalLink className="ml-2" size={14} />
                  </a>
                  <div className="flex space-x-4">
                    <Github size={18} className="text-text-secondary hover:text-text-primary cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
