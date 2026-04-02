import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-2xl font-black tracking-tighter mb-2">
            <span className="text-primary">M</span>.Maaitah
          </div>
          <p className="text-text-secondary text-sm max-w-xs">
            Designing intelligent systems powered by deep learning and modern cloud technologies.
          </p>
        </div>
        
        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="flex items-center space-x-6">
            <a href="https://www.linkedin.com/in/mohammad-maaitah-2b0351390" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:maaitah2004@gmail.com" className="text-text-secondary hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
            <a href="#" className="text-text-secondary hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-text-secondary hover:text-primary transition-colors">
              <Twitter size={20} />
            </a>
          </div>
          <p className="text-text-secondary text-xs font-medium uppercase tracking-widest">
            © {currentYear} Mohammad Maaitah.
          </p>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-text-secondary/20">
          Built with React • Tailwind • Motion
        </p>
      </div>
    </footer>
  );
}
