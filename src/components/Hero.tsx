import { motion } from 'motion/react';
import { ArrowRight, Brain, Cloud, Database } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center section-padding overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-700" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-medium text-text-secondary uppercase tracking-widest">Available for AI & Data Science Roles</span>
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter leading-none">
          Mohammad <span className="text-gradient">Maaitah</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          AI Engineer | Data Scientist | Cloud Practitioner
          <span className="block mt-2 text-lg opacity-80">Designing intelligent systems powered by deep learning and modern cloud technologies.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a 
            href="#projects" 
            className="group relative px-8 py-4 bg-primary text-white font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center">
              View Projects <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </span>
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 glass text-text-primary font-bold rounded-xl hover:bg-card transition-all hover:scale-105 active:scale-95"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
      
      {/* Floating Icons */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-10 md:left-20 opacity-20 hidden md:block"
      >
        <Brain size={64} className="text-primary" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-10 md:right-20 opacity-20 hidden md:block"
      >
        <Cloud size={64} className="text-secondary" />
      </motion.div>
      <motion.div 
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/4 right-1/4 opacity-10 hidden md:block"
      >
        <Database size={48} className="text-accent" />
      </motion.div>
    </section>
  );
}
