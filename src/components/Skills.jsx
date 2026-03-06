import React from 'react';
import { Terminal, Lightbulb, Database, Globe, BrainCircuit, Cpu, Cloud, CheckCircle } from 'lucide-react';

export default function Skills() {
  const technicalSkills = [
    {
      category: 'Programming Languages',
      icon: <Terminal size={24} color="var(--accent-primary)" />,
      skills: ['Python', 'Java', 'JavaScript', 'C/C++', 'SQL', 'Bash', 'TypeScript', 'HTML/CSS']
    },
    {
      category: 'Web Development',
      icon: <Globe size={24} color="var(--accent-primary)" />,
      skills: ['Full Stack (MERN/MEAN)', 'React', 'Node.js', 'Express', 'Django', 'RESTful APIs']
    },
    {
      category: 'AI & Machine Learning',
      icon: <BrainCircuit size={24} color="var(--accent-primary)" />,
      skills: ['TensorFlow', 'Scikit-learn', 'NumPy', 'Pandas', 'Generative AI', 'Prompt Engineering']
    },
    {
      category: 'IoT & Embedded Systems',
      icon: <Cpu size={24} color="var(--accent-primary)" />,
      skills: ['ArduinoUNO', 'ESP32 (NodeMCU)', 'Sensor Integration', 'Firmware Development']
    },
    {
      category: 'Cloud & DevOps',
      icon: <Cloud size={24} color="var(--accent-primary)" />,
      skills: ['AWS', 'Oracle Cloud Infrastructure', 'Docker', 'Jenkins', 'CI/CD', 'Git', 'Linux']
    },
    {
      category: 'Databases',
      icon: <Database size={24} color="var(--accent-primary)" />,
      skills: ['MySQL', 'MongoDB', 'Firebase', 'Supabase']
    }
  ];

  const softSkills = [
    'Adaptability',
    'Task Management',
    'Analytical Thinking',
    'Team Collaboration',
    'Logical Reasoning',
    'Communication Skills'
  ];

  return (
    <section id="skills" className="section relative" style={{ background: 'var(--bg-secondary)', margin: '0 -100vw', padding: '6rem calc(100vw / 2 - 600px)' }}>
      {/* Decorative background element */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: '10%',
        width: '400px',
        height: '400px',
        background: 'var(--accent-secondary)',
        borderRadius: '50%',
        filter: 'blur(100px)',
        opacity: 0.05,
        pointerEvents: 'none'
      }}></div>

      <div className="section-title animate-slide-up delay-100">
        <span>What I do best</span>
        <h2 className="heading-lg">Technical & Soft <span className="text-gradient">Skills</span></h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem',
        marginTop: '3.5rem'
      }}>
        {technicalSkills.map((section, idx) => (
          <div key={idx} className="glass-card animate-slide-up" style={{ 
            padding: '2rem', 
            animationDelay: `${(idx % 3 + 1) * 100}ms`
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ 
                padding: '0.75rem', 
                background: 'rgba(14, 165, 233, 0.1)', 
                borderRadius: '12px' 
              }}>
                {section.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>{section.category}</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {section.skills.map((skill, sIdx) => (
                <span key={sIdx} style={{
                  padding: '0.4rem 0.8rem',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '6px',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)'
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* Soft Skills Card */}
        <div className="glass-card animate-slide-up" style={{ 
          padding: '2rem',
          gridColumn: '1 / -1',
          background: 'linear-gradient(145deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
          marginTop: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', justifyContent: 'center' }}>
            <Lightbulb size={24} color="var(--accent-secondary)" />
            <h3 style={{ fontSize: '1.4rem', fontWeight: 600, textAlign: 'center' }}>Soft Skills & Memberships</h3>
          </div>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            justifyContent: 'center',
            marginBottom: '2rem'
          }}>
            {softSkills.map((skill, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                <CheckCircle size={18} color="var(--accent-secondary)" />
                <span style={{ fontWeight: 500 }}>{skill}</span>
              </div>
            ))}
          </div>
          
          <div style={{ 
            borderTop: '1px solid var(--border-subtle)', 
            paddingTop: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem'
          }}>
             <div style={{ textAlign: 'center' }}>
               <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Technical Club</p>
               <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.25rem' }}>Teratech Member</p>
             </div>
             <div style={{ textAlign: 'center' }}>
               <p style={{ color: 'var(--text-tertiary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Social Cause</p>
               <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.25rem' }}>National Service Scheme Volunteer</p>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
