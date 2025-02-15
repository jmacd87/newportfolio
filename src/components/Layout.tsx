import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import { Footer } from './Footer';
import Hero from './Hero';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

const Layout: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const sections = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // adjust threshold as needed
    });

    sections.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  // Helper function to add the active class if the section is active.
  const getSectionClass = (id: string) =>
    `section ${activeSection === id ? 'active' : ''}`;

  return (
    <div className="scroll-container">
      <Header activeSection={activeSection} />
      <section
        className={getSectionClass('hero')}
        id="hero"
        ref={(el) => {
          sections.current[0] = el;
        }}
      >
        <Hero />
      </section>
      <section
        className={getSectionClass('about')}
        id="about"
        ref={(el) => {
          sections.current[1] = el;
        }}
      >
        <About />
      </section>
      <section
        className={getSectionClass('projects')}
        id="projects"
        ref={(el) => {
          sections.current[2] = el;
        }}
      >
        <Projects />
      </section>
      <section
        className={getSectionClass('contact')}
        id="contact"
        ref={(el) => {
          sections.current[3] = el;
        }}
      >
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Layout;
