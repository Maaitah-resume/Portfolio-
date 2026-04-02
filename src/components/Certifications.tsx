import { motion } from 'motion/react';
import { Award, CheckCircle2, Cloud, Code2, Database } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Nutanix Certified Associate (NCA-6)',
      provider: 'Nutanix',
      icon: Cloud,
      color: 'text-primary',
      link: 'https://www.credly.com/badges/afeccbb1-f71a-4e97-aa09-3896fa0599f3/public_url',
    },
    {
      title: 'Machine Learning with Python',
      provider: 'IBM (Coursera)',
      icon: Code2,
      color: 'text-secondary',
      link: 'https://www.coursera.org/account/accomplishments/verify/QWTLZF5HKPHI',
    },
    {
      title: 'AWS Certified AI Practitioner',
      provider: 'Udemy',
      icon: Database,
      color: 'text-accent',
      link: 'https://www.udemy.com/certificate/UC-5c90da11-7dfb-40e6-a9d9-c21d54346ac3/',
    },
  ];

  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Professional <span className="text-gradient">Certifications</span></h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A list of my professional certifications and achievements in AI, Data Science, and Cloud Computing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.a 
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl glass flex flex-col items-center text-center group hover:border-primary/50 transition-all cursor-pointer"
            >
              <div className={`p-4 rounded-2xl bg-card border border-border mb-6 group-hover:scale-110 transition-transform ${cert.color}`}>
                <cert.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
              <p className="text-text-secondary text-sm font-medium mb-4">{cert.provider}</p>
              <div className="flex items-center space-x-2 text-accent">
                <CheckCircle2 size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">Verified Achievement</span>
              </div>
            </motion.a>
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-3xl glass flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-6">
            <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-primary">
              <Award size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold">Continuous Learning</h3>
              <p className="text-text-secondary text-sm">Always expanding my knowledge in the rapidly evolving field of Artificial Intelligence.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="h-1 w-24 bg-border rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-primary rounded-full animate-pulse" />
            </div>
            <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">Ongoing: Advanced Deep Learning</span>
          </div>
        </div>
      </div>
    </section>
  );
}
