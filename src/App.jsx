import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  
  // Intersection Observer for scroll animations (fade-in on scroll)
  useEffect(() => {
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          // Optional: observer.unobserve(entry.target); if we only want it to animate once
        } else {
          // Restart animation when scrolling back
          entry.target.style.animationPlayState = 'paused';
          entry.target.style.opacity = '0';
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Select elements to animate using standard classes or directly
    // Since we baked animations into the render, they will run on load.
    // To make them trigger on scroll, we can apply an IntersectionObserver, but 
    // for this portfolio, standard CSS animation on load provides a cohesive experience.

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      {/* Dynamic Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        background: 'radial-gradient(circle at 15% 50%, rgba(14, 165, 233, 0.03) 0%, transparent 50%), radial-gradient(circle at 85% 30%, rgba(139, 92, 246, 0.03) 0%, transparent 50%)'
      }}></div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
