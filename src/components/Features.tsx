import React, { useEffect, useRef } from 'react';
import { Code, Edit3, BookOpen, Bot, Share2, MessageSquare } from 'lucide-react';
import FeatureCard from './ui/FeatureCard';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
}

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === headingRef.current) {
            entry.target.classList.add('animate-fade-in');
          } else if (entry.target === featuresRef.current) {
            const featureElements = entry.target.querySelectorAll('.feature-card');
            featureElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-slide-up');
              }, index * 100);
            });
          }
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (headingRef.current) observer.observe(headingRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);

    return () => observer.disconnect();
  }, []);

  const features: Feature[] = [
    {
      icon: <Code size={28} className="text-indigo-600" />,
      title: 'Collaborative Code Editor',
      description: 'Code together in real-time with syntax highlighting and smart completions for over 40 programming languages.',
      href: 'https://haxplore-ten.vercel.app/',
    },
    {
      icon: <Edit3 size={28} className="text-indigo-600" />,
      title: 'Real-Time Drawing Canvas',
      description: 'Sketch, wireframe, and visualize ideas with collaborative drawing tools that update in real-time.',
      href: 'https://co-sketch.vercel.app/',

    },
    {
      icon: <BookOpen size={28} className="text-indigo-600" />,
      title: 'Online DSA 1vs1 Quiz',
      description: 'Practice data structures and algorithms with interactive quizzes and immediate feedback.',
      href: 'https://cp-buddy-t80e.onrender.com/',
    },
    {
      icon: <Bot size={28} className="text-indigo-600" />,
      title: 'Notes Taking',
      description: 'Capture and organize your thoughts with a powerful notes editor that supports rich text formatting.',
      href: 'https://notes-indol-seven.vercel.app/',
    },
    {
      icon: <Share2 size={28} className="text-indigo-600" />,
      title: 'Version Control & Cloud Save',
      description: 'Keep track of changes and access your work from anywhere with automatic cloud backups.',
    },
    {
      icon: <MessageSquare size={28} className="text-indigo-600" />,
      title: 'Community Discussion Forum',
      description: 'Connect with other developers, share knowledge, and solve problems together.',
      href: 'https://agrico-community.vercel.app/',
    },
  ];

  return (
    <section id="features" ref={sectionRef} className="py-20 md:py-28 relative bg-slate-50 dark:bg-slate-900">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={headingRef} className="opacity-0 transition-opacity duration-1000 ease-out">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Powerful Features for Seamless Collaboration
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Everything you need to build, learn, and collaborate effectively in one intuitive platform.
            </p>
          </div>
        </div>

        <div
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="feature-card opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
              href={feature.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
