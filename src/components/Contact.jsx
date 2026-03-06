import React from 'react';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section relative" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="section-title animate-slide-up delay-100">
        <span>Get in touch</span>
        <h2 className="heading-lg">Contact <span className="text-gradient">Me</span></h2>
      </div>

      <div className="glass-card animate-slide-up delay-200" style={{ 
        maxWidth: '800px', 
        margin: '2rem auto 0', 
        padding: '3rem',
        textAlign: 'center',
        background: 'linear-gradient(180deg, rgba(14, 165, 233, 0.05) 0%, rgba(18, 18, 18, 0.8) 100%)'
      }}>
        <h3 className="heading-md" style={{ marginBottom: '1rem' }}>Interested in collaborating?</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
          I'm currently open to new opportunities to leverage my knowledge in designing and building scalable applications and intelligent systems.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem'
        }}>
          
          <a href="mailto:sachinkn92@gmail.com" style={styles.contactCard}>
            <div style={styles.iconWrapper}><Mail color="var(--accent-primary)" size={24} /></div>
            <h4 style={styles.contactTitle}>Email</h4>
            <span style={styles.contactValue}>sachinkn92@gmail.com</span>
          </a>

          <a href="tel:+917676038971" style={styles.contactCard}>
            <div style={styles.iconWrapper}><Phone color="var(--accent-secondary)" size={24} /></div>
            <h4 style={styles.contactTitle}>Phone</h4>
            <span style={styles.contactValue}>+91 7676038971</span>
          </a>

          <a href="https://github.com/sachinkn92" target="_blank" rel="noreferrer" style={styles.contactCard}>
            <div style={styles.iconWrapper}><Github color="var(--text-primary)" size={24} /></div>
            <h4 style={styles.contactTitle}>GitHub</h4>
            <span style={styles.contactValue}>sachinkn92</span>
          </a>

          <a href="https://www.linkedin.com/in/sachin-k-n-97b754278/" target="_blank" rel="noreferrer" style={styles.contactCard}>
            <div style={styles.iconWrapper}><Linkedin color="#0a66c2" size={24} /></div>
            <h4 style={styles.contactTitle}>LinkedIn</h4>
            <span style={styles.contactValue}>Sachin K N</span>
          </a>

        </div>

        <div style={{ marginTop: '3.5rem' }}>
          <a href="mailto:sachinkn92@gmail.com" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
            Say Hello <Mail size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  contactCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1.5rem',
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border-subtle)',
    borderRadius: '16px',
    textDecoration: 'none',
    transition: 'transform 0.2s, background 0.2s',
    cursor: 'pointer'
  },
  iconWrapper: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: 'var(--bg-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
    border: '1px solid var(--border-subtle)'
  },
  contactTitle: {
    color: 'var(--text-primary)',
    fontWeight: 600,
    marginBottom: '0.25rem',
    fontSize: '1rem'
  },
  contactValue: {
    color: 'var(--text-secondary)',
    fontSize: '0.9rem'
  }
};
