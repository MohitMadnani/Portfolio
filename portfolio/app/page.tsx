'use client';

import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolio-data';
import { scrollToSection, getActiveSection } from './utils/scroll';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setActiveSection(getActiveSection());
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (section: string) => {
    scrollToSection(section);
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-zinc-50">
      <Navigation activeSection={activeSection} onSectionClick={handleSectionClick} />
      <Hero
        name={portfolioData.personal.name}
        title={portfolioData.personal.title}
        description={portfolioData.personal.description}
        onSectionClick={handleSectionClick}
      />
      <Experience experiences={portfolioData.experience} />
      <Education education={portfolioData.education} />
      <Projects projects={portfolioData.projects} />
      <TechStack techStack={portfolioData.techStack} />
      <Contact contact={portfolioData.contact} />
      <Footer />
    </div>
  );
}
