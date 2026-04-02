import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 glass h-16 flex items-center justify-between px-6 md:px-12"
    >
      <div className="text-xl font-bold tracking-tighter">
        <span className="text-primary">M</span>.Maaitah
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <a 
            key={item.name} 
            href={item.href}
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            {item.name}
          </a>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <a href="https://www.linkedin.com/in/mohammad-maaitah-2b0351390" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="mailto:maaitah2004@gmail.com" className="text-text-secondary hover:text-primary transition-colors">
          <Mail size={20} />
        </a>
      </div>
    </motion.nav>
  );
}
