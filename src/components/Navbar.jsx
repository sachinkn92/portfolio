import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav
      style={styles.nav}
      className={`glass ${isScrolled ? 'scrolled' : ''}`}
    >
      <div style={styles.container}>
        <div style={styles.logoContainer}>
          <a href="#" style={styles.logo}>SACHIN<span className="text-gradient">.KN</span></a>
        </div>

        {/* Desktop Nav */}
        <div style={styles.desktopNav}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} style={styles.navLink}>
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div style={styles.socialIconsDesktop}>
          <a href="https://github.com/sachinkn92" target="_blank" rel="noreferrer" style={styles.socialIcon}>
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/sachin-k-n-97b754278/" target="_blank" rel="noreferrer" style={styles.socialIcon}>
            <Linkedin size={20} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div style={styles.mobileToggle} onClick={toggleMenu}>
          {mobileMenuOpen ? <X size={24} color="#f8fafc" /> : <Menu size={24} color="#f8fafc" />}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={styles.mobileMenu} className="glass">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div style={styles.mobileSocialIcons}>
            <a href="https://github.com/sachinkn92" target="_blank" rel="noreferrer" style={styles.socialIcon}>
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sachin-k-n-97b754278/" target="_blank" rel="noreferrer" style={styles.socialIcon}>
              <Linkedin size={24} />
            </a>
            <a href="mailto:sachinkn92@gmail.com" style={styles.socialIcon}>
              <Mail size={24} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: 'all 0.3s ease',
    borderBottom: '1px solid var(--border-subtle)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: 'var(--text-primary)',
    textDecoration: 'none',
    letterSpacing: '1px',
  },
  desktopNav: {
    display: 'none',
    gap: '2rem',
    '@media (min-width: 768px)': {
      display: 'flex',
    },
  },
  navLink: {
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: '500',
    transition: 'color 0.2s',
  },
  socialIconsDesktop: {
    display: 'none',
    gap: '1rem',
  },
  socialIcon: {
    color: 'var(--text-secondary)',
    transition: 'color 0.2s, transform 0.2s',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  mobileToggle: {
    cursor: 'pointer',
    display: 'block',
  },
  mobileMenu: {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    padding: '1rem 2rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    borderBottom: '1px solid var(--border-subtle)',
  },
  mobileNavLink: {
    color: 'var(--text-primary)',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: '500',
  },
  mobileSocialIcons: {
    display: 'flex',
    gap: '1.5rem',
    marginTop: '1rem',
  }
};

// Adding media query overrides manually through basic CSS class since inline styles don't support media queries.
// Will add desktop flex classes injected into head or assume CSS handles hidden elements
const NavStyleOverrides = () => (
    <style>{`
      @media (min-width: 768px) {
        .nav-desktop { display: flex !important; }
        .nav-mobile-toggle { display: none !important; }
        .nav-social-desktop { display: flex !important; }
      }
      .nav-desktop { display: none; gap: 2.5rem; }
      .nav-social-desktop { display: none; gap: 1rem; }
      .nav-link:hover { color: var(--accent-primary) !important; }
      .social-icon:hover { color: var(--accent-primary) !important; transform: translateY(-2px); }
    `}</style>
)

export default function NavbarWrapper() {
  return <><NavStyleOverrides /><Navbar /></>
}
