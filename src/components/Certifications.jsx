import React from 'react';
import { Award, Trophy, Star } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    { name: 'OCI 2025 Certified Generative AI Professional', date: 'Nov 2025' },
    { name: 'OCI 2025 Certified Multicloud Architect Professional', date: 'Jul 2025' },
    { name: 'OCI 2025 Certified DevOps Professional', date: 'Nov 2025' },
    { name: 'OCI 2025 Certified AI Foundations Associate', date: 'Oct 2025' },
    { name: 'Oracle Data Platform 2025 Certified Foundations Associate', date: 'Oct 2025' },
    { name: 'Udemy: Master Python with NumPy for Data Science & ML', date: '2025' },
    { name: 'Google/Coursera: Play it Safe: Manage Security Risks', date: 'Jul 2024' },
    { name: 'Google/Coursera: Foundations of Cybersecurity', date: 'May 2024' },
    { name: 'Google/Coursera: Connect and Protect: Networks and Network Security', date: '' }
  ];

  const achievements = [
    'Secured 1st Place in Code Sprint at TECHKRITI \'24, a state-level technical event.',
    'Won 1st / 2nd Place in SCI-TECH Treasure Hunt and Treasure of Circuits at VIMARSH.',
    'Achieved 1st Place in Tech Debate conducted by the Technical Club (2023-2024).',
    'Recognized at the Annual Sports Meet (Table Tennis) for competitive performance.',
    'Participated in a professional "GitHub: Campus to Corporate" workshop.'
  ];

  return (
    <section id="certifications" className="section relative">
      <div className="section-title animate-slide-up delay-100">
        <span>Milestones</span>
        <h2 className="heading-lg">Certifications & <span className="text-gradient">Achievements</span></h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        marginTop: '4rem'
      }}>
        
        {/* Certifications List */}
        <div className="glass-card animate-slide-right delay-200" style={{ padding: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <Award size={28} color="var(--accent-primary)" />
            <h3 className="heading-md">Certifications</h3>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {certifications.map((cert, idx) => (
              <li key={idx} style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '1rem',
                borderBottom: '1px solid var(--border-subtle)',
                paddingBottom: '1rem'
              }}>
                <div style={{ marginTop: '4px' }}>
                  <Star size={16} color="var(--accent-secondary)" />
                </div>
                <div>
                  <p style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.95rem' }}>{cert.name}</p>
                  {cert.date && <span style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem' }}>{cert.date}</span>}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Achievements List */}
        <div className="glass-card animate-slide-left delay-300" style={{ padding: '2.5rem', height: 'fit-content' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <Trophy size={28} color="var(--accent-secondary)" />
            <h3 className="heading-md">Achievements</h3>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {achievements.map((ach, idx) => (
              <li key={idx} style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '1rem',
                background: 'var(--bg-secondary)',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid var(--border-subtle)'
              }}>
                <div style={{ marginTop: '2px', color: 'var(--accent-primary)' }}>
                  <Award size={20} />
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  {ach}
                </p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
