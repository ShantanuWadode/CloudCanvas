import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Courses from './components/Courses';
import Footer from './components/Footer';
import './utils/animations.css';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'CloudCanvas | Collaborative Platform for Coders, Creators & Learners';
    
    // Update favicon
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%234f46e5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 6.1H3"></path><path d="M21 12.1H7"></path><path d="M17 18.1H3"></path><path d="M14 6.1l7 6-7 6"></path></svg>';
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Courses />
      </main>
      <Footer />
    </div>
  );
}

export default App;