import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-subtle)',
      padding: '2rem',
      textAlign: 'center',
      background: 'var(--bg-primary)',
      color: 'var(--text-tertiary)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
        <a href="#home" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 700, fontSize: '1.25rem' }}>
          SACHIN<span className="text-gradient">.KN</span>
        </a>
        <p style={{ fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Sachin K N. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
