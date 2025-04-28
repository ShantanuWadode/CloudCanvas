import React, { useEffect, useRef } from 'react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Parallax effect for hero section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      if (imageRef.current) {
        // Move the image more slowly than the scroll to create parallax
        imageRef.current.style.transform = `translateY(${scrollPosition * 0.15}px)`;
      }
      
      if (titleRef.current && subtitleRef.current && ctaRef.current) {
        // Move the text elements in the opposite direction for stronger effect
        titleRef.current.style.transform = `translateY(${scrollPosition * -0.1}px)`;
        subtitleRef.current.style.transform = `translateY(${scrollPosition * -0.05}px)`;
        ctaRef.current.style.transform = `translateY(${scrollPosition * -0.07}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={heroRef} className="relative pt-16 md:pt-24 lg:pt-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-950 dark:to-slate-900"></div>
      
      {/* Grid decoration */}
      <div className="absolute inset-0 bg-grid-slate-200/50 bg-[length:30px_30px] dark:bg-grid-slate-700/25 opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-16 lg:gap-24">
          {/* Text content */}
          <div className="w-full lg:w-6/12 pt-12 lg:pt-0 text-center lg:text-left">
            <h1 
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight bg-gradient-to-r from-slate-900 via-indigo-800 to-purple-900 dark:from-white dark:via-indigo-200 dark:to-purple-200 bg-clip-text text-transparent mb-6"
            >
              Empowering Real-Time Collaboration for Coders, Creators & Learners
            </h1>
            <p 
              ref={subtitleRef}
              className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Build, share, and collaborate on projects in real-time with CloudCanvas - the all-in-one platform that brings your team's ideas to life, no matter where they are.
            </p>
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button primary>Get Started Free</Button>
              <Button outline>Watch Demo</Button>
            </div>
          </div>
          
          {/* Image/Illustration */}
          <div ref={imageRef} className="w-full lg:w-6/12 mt-10 lg:mt-0">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
              <div className="relative bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                <img 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Team collaboration on CloudCanvas" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/30 to-transparent mix-blend-overlay"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500/10 backdrop-blur-lg rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-indigo-500/10 backdrop-blur-lg rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scrolling indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-slate-600 dark:text-slate-400 mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-slate-600 dark:border-slate-400 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-slate-600 dark:bg-slate-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;