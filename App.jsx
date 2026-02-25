import React, { useEffect, useRef, useState } from 'react';
import { ArrowDownRight } from 'lucide-react';
import gsap from 'gsap';
import ParticleGrid from './components/ParticleGrid';
import Projects from './components/Projects';
import About from './components/About';
import mabLogo from './assets/mab.svg';
import './App.css';

function App() {
  const heroTextRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Simple load animation for the hero text
    const ctx = gsap.context(() => {
      gsap.from('.hero-headline span, .hero-headline-subtext', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out',
        delay: 0.2
      });

      gsap.from('.hero-subtitle', {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.6
      });
    }, heroTextRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="app-container">
      {/* Interactive Background */}
      <ParticleGrid />

      {/* Main Content Overlay */}
      <div className="content-layer">

        {/* Navigation */}
        <header className="site-header">
          <div className="logo">
            <img src={mabLogo} alt="MAB Logo" className="logo-icon" />
          </div>
          <div className="header-meta">
            Tema, Ghana &mdash; {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}<br />&copy; 18&ndash;26
          </div>
          <nav className="header-nav">
            <a href="#work">Portfolio</a>
            <a href="#philosophy">Philosophy</a>
            <a href="#services">Services</a>
            <a href="#journal">Journal</a>
          </nav>
          <div className="header-cta">
            <a href="#contact">Work with Us ↗</a>
          </div>
        </header>

        {/* Hero Section */}
        <section className="section hero-section" ref={heroTextRef}>
          <div className="hero-content">
            <h1 className="hero-headline">
              <span className="block">Hey, I am</span>
              <span className="block">Michael Bisiw.</span>
            </h1>
            <p className="hero-headline-subtext">Brand Identity Designer</p>
          </div>

          <div className="hero-bottom-bar hero-subtitle">
            <div className="bottom-left">
              <span>About Us</span>
            </div>
            <div className="bottom-center">
              <p>I build digital experiences for brands<br />with stories to tell and futures to chase.<br />I am Michael Bisiw.</p>
            </div>
            <div className="bottom-right">
              <span>Scroll down</span>
            </div>
          </div>
        </section>

        <Projects />
        <About />

      </div>
    </div>
  );
}

export default App;
