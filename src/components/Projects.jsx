import React from 'react';
import { ExternalLink, Database, Cpu, ShieldAlert, Code } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Inventory Management System',
      icon: <Database size={24} color="var(--accent-primary)" />,
      stack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      description: 'Full-stack Inventory & Order Management System built with the MERN stack that lets users manage products, track inventory, place orders, and view stock status through a responsive dashboard.',
      link: '#'
    },
    {
      title: 'TrueTrace - Fake Product ID using Blockchain',
      icon: <Code size={24} color="var(--accent-secondary)" />,
      stack: ['React', 'Node.js', 'Solidity', 'Ethereum Tooling (Hardhat, Ganache)'],
      description: 'Blockchain-based product authentication system using smart contracts, SHA-256 hashing, and QR codes to verify genuine products and detect counterfeits through an immutable ledger.',
      link: '#'
    },
    {
      title: 'Malware Detection Using Machine Learning',
      icon: <ShieldAlert size={24} color="#ef4444" />,
      stack: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit', 'Docker'],
      description: 'End-to-end malware detection system utilizing machine learning models with a Streamlit UI to classify malicious versus benign files based on extracted features.',
      link: '#'
    },
    {
      title: 'IoT & Embedded System Solutions',
      icon: <Cpu size={24} color="#10b981" />,
      stack: ['Arduino UNO', 'ESP32 (NodeMCU)', 'LoRa', 'Bluetooth'],
      description: 'Designed multiple IoT solutions including a Smart Farming System, Water Level Measuring using LoRa, and a 16x16 LED Matrix display controlled via Bluetooth for real-time monitoring.',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="section relative">
      <div className="section-title animate-slide-up delay-100">
        <span>Work & Experiences</span>
        <h2 className="heading-lg">Featured <span className="text-gradient">Projects</span></h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '2rem',
        marginTop: '3.5rem'
      }}>
        {projects.map((project, idx) => (
          <div key={idx} className="glass-card animate-slide-up" style={{ 
            padding: '2rem', 
            display: 'flex', 
            flexDirection: 'column', 
            animationDelay: `${(idx % 4 + 1) * 100}ms` 
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div style={{ 
                padding: '0.75rem', 
                background: 'var(--bg-secondary)', 
                borderRadius: '12px',
                border: '1px solid var(--border-subtle)'
              }}>
                {project.icon}
              </div>
              <a href={project.link} className="social-icon" style={{ padding: '0.5rem',  color: 'var(--text-tertiary)', textDecoration: 'none' }}>
                <ExternalLink size={20} />
              </a>
            </div>
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              {project.title}
            </h3>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, flexGrow: 1, marginBottom: '1.5rem' }}>
              {project.description}
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.stack.map((tech, tIdx) => (
                <span key={tIdx} style={{
                  fontSize: '0.8rem',
                  color: 'var(--accent-primary)',
                  background: 'rgba(14, 165, 233, 0.1)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '9999px',
                  fontWeight: 500
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
