import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="section" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      paddingTop: '6rem' 
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem',
        alignItems: 'center',
        width: '100%'
      }}>
        
        {/* Text Content */}
        <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <span style={{ 
              color: 'var(--accent-primary)', 
              fontWeight: 600, 
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontSize: '0.9rem'
            }}>
              Full Stack Developer & AI Enthusiast
            </span>
            <h1 className="heading-xl" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              Hi, I'm <br />
              <span className="text-gradient">Sachin K N</span>
            </h1>
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1.1rem', 
              maxWidth: '500px',
              lineHeight: 1.8 
            }}>
              A versatile and motivated B.E. Computer Science student crafting scalable web apps, intelligent systems, and cloud-native solutions.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
            <a href="#projects" className="btn btn-primary" style={{ textDecoration: 'none' }}>
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline" style={{ textDecoration: 'none' }}>
              Contact Me
            </a>
          </div>
        </div>

        {/* Image / Avatar */}
        <div className="animate-slide-left delay-200" style={{
          display: 'flex',
          justifyContent: 'center',
          position: 'relative'
        }}>
          {/* Animated decorative background circle */}
          <div style={{
            position: 'absolute',
            width: '320px',
            height: '320px',
            background: 'var(--accent-gradient)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            opacity: 0.15,
            animation: 'pulse-glow 4s infinite'
          }}></div>
          
          <div style={{
            position: 'relative',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            padding: '8px',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0))',
            backdropFilter: 'blur(10px)',
            border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--glass-shadow)',
            overflow: 'hidden'
          }}>
            <img 
              src="https://avatars.githubusercontent.com/sachinkn92" 
              alt="Sachin K N" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
                border: '4px solid var(--bg-primary)'
              }}
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}
