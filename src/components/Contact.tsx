import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    { label: 'Email', value: 'maaitah2004@gmail.com', icon: Mail, color: 'text-primary' },
    { label: 'Phone', value: '+962 79 214 8465', icon: Phone, color: 'text-secondary' },
    { label: 'Location', value: 'Amman, Jordan', icon: MapPin, color: 'text-accent' },
  ];

  return (
    <section id="contact" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Get In <span className="text-gradient">Touch</span></h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {contactInfo.map((info, index) => (
              <div key={info.label} className="flex flex-col items-center text-center p-10 rounded-3xl glass group hover:border-primary/50 transition-all">
                <div className={`p-6 rounded-2xl bg-card border border-border group-hover:scale-110 transition-transform mb-4 ${info.color}`}>
                  <info.icon size={28} />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">{info.label}</h3>
                <p className="text-lg font-bold break-words whitespace-normal">{info.value}</p>
              </div>
            ))}
          </motion.div>
          
          {/* slogan block removed per request */}
        </div>
      </div>
    </section>
  );
}
