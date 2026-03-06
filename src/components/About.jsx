import React from 'react';
import { BookOpen, GraduationCap, Code2, Headphones, Gamepad2, Activity } from 'lucide-react';

export default function About() {
  const education = [
    {
      title: 'B.E. Computer Science',
      institution: 'Visvesvaraya Technological University (NCEH)',
      period: '2022 - 2026',
      icon: <GraduationCap size={24} color="var(--accent-primary)" />
    },
    {
      title: 'Pre-University (PCMC)',
      institution: "Student's PU College",
      period: '2020 - 2022',
      icon: <BookOpen size={24} color="var(--accent-primary)" />
    },
    {
      title: 'SSLC',
      institution: 'BEMS, 10th',
      period: '2020',
      icon: <Code2 size={24} color="var(--accent-primary)" />
    }
  ];

  const hobbies = [
    { name: 'DJing', icon: <Headphones size={20} /> },
    { name: 'Gaming', icon: <Gamepad2 size={20} /> },
    { name: 'Running', icon: <Activity size={20} /> },
    { name: 'Chess', icon: <span style={{fontSize:'20px'}}>♟️</span> },
    { name: 'Shuttle Badminton', icon: <span style={{fontSize:'20px'}}>🏸</span> },
    { name: 'Sudoku', icon: <span style={{fontSize:'20px'}}>🔢</span> },
  ];

  return (
    <section id="about" className="section relative">
      <div className="section-title animate-slide-up delay-100">
        <span>Get to know me</span>
        <h2 className="heading-lg">About <span className="text-gradient">Me</span></h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        marginTop: '4rem'
      }}>
        
        {/* Professional Summary */}
        <div className="glass-card animate-slide-up delay-200" style={{ padding: '2.5rem' }}>
          <h3 className="heading-md" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ width: '8px', height: '32px', background: 'var(--accent-gradient)', borderRadius: '4px' }}></span>
            Professional Summary
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8 }}>
            Versatile and motivated B.E. Computer Science student with hands-on experience in Full Stack Development, AI/ML, IoT, and DevOps. Looking for opportunities to leverage knowledge in designing and building scalable web and mobile applications, cloud-native solutions, and intelligent systems.
            <br /><br />
            Proficient in modern frameworks, cloud platforms, automation tools, and hardware-software integration. Strong problem-solving abilities supported by analytical thinking, debugging skills, and a structured approach to technical decision-making.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="glass-card animate-slide-up delay-300" style={{ padding: '2.5rem' }}>
          <h3 className="heading-md" style={{ marginBottom: '2rem' }}>Education</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {education.map((edu, index) => (
              <div key={index} style={{ display: 'flex', gap: '1.5rem', position: 'relative' }}>
                {/* Timeline connector line */}
                {index !== education.length - 1 && (
                  <div style={{ position: 'absolute', top: '40px', left: '26px', width: '2px', height: '100%', background: 'var(--border-subtle)', zIndex: 0 }}></div>
                )}
                <div style={{ 
                  width: '54px', 
                  height: '54px', 
                  borderRadius: '50%', 
                  background: 'var(--bg-secondary)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  border: '1px solid var(--glass-border)',
                  zIndex: 1
                }}>
                  {edu.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{edu.title}</h4>
                  <p style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', marginBottom: '0.25rem', fontWeight: 500 }}>{edu.institution}</p>
                  <p style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem' }}>{edu.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Hobbies Section */}
      <div className="animate-slide-up delay-400" style={{ marginTop: '4rem' }}>
        <h3 className="heading-md" style={{ textAlign: 'center', marginBottom: '2rem' }}>Hobbies & Interests</h3>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '1rem', 
          justifyContent: 'center' 
        }}>
          {hobbies.map((hobby, idx) => (
            <div key={idx} className="glass-card" style={{
              padding: '1rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              borderRadius: '9999px',
              color: 'var(--text-secondary)'
            }}>
              <span style={{ color: 'var(--accent-primary)', display: 'flex', alignItems: 'center' }}>{hobby.icon}</span>
              <span style={{ fontWeight: 500 }}>{hobby.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
