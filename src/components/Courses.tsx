import React, { useEffect, useRef } from 'react';
import CourseCard from './ui/CourseCard';

interface Course {
  title: string;
  description: string;
  image: string;
  rating: number;
  students: number;
  level: string;
}

const Courses: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const coursesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (!sectionRef.current) return;
      const scrollPosition = window.scrollY;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      
      // Only apply parallax effect when the section is in view
      if (scrollPosition > sectionTop - window.innerHeight && 
          scrollPosition < sectionTop + sectionHeight) {
        const relativeScroll = scrollPosition - (sectionTop - window.innerHeight);
        
        // Apply parallax effect to different elements
        const elements = sectionRef.current.querySelectorAll('.parallax-element');
        elements.forEach((el, index) => {
          const speed = 0.05 + (index * 0.02);
          (el as HTMLElement).style.transform = `translateY(${relativeScroll * speed}px)`;
        });
      }
    };

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
          } else if (entry.target === coursesRef.current) {
            const courseElements = entry.target.querySelectorAll('.course-card');
            courseElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-slide-up');
              }, index * 150); // Stagger the animations
            });
          }
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }
    
    if (coursesRef.current) {
      observer.observe(coursesRef.current);
    }

    window.addEventListener('scroll', handleParallax);
    return () => {
      window.removeEventListener('scroll', handleParallax);
      observer.disconnect();
    };
  }, []);

  const courses: Course[] = [
    {
      title: 'Advanced JavaScript Patterns',
      description: 'Master modern JavaScript patterns and build scalable web applications with expert guidance.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.9,
      students: 3205,
      level: 'Advanced',
    },
    {
      title: 'Full-Stack React & Node.js',
      description: 'Build complete web applications from front to back with React, Node.js, and MongoDB.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.8,
      students: 2789,
      level: 'Intermediate',
    },
    {
      title: 'Data Structures & Algorithms',
      description: 'Ace technical interviews with comprehensive coverage of essential CS concepts.',
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.7,
      students: 4120,
      level: 'All Levels',
    },
    {
      title: 'Machine Learning Fundamentals',
      description: 'Learn practical ML techniques and build intelligent systems with Python and TensorFlow.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4.9,
      students: 1856,
      level: 'Intermediate',
    },
  ];

  return (
    <section id="courses" ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-100 to-white dark:from-slate-900 dark:to-slate-950 z-0"></div>
      <div className="absolute top-40 left-10 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30 parallax-element"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-200 dark:bg-indigo-900/20 rounded-full filter blur-3xl opacity-30 parallax-element"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={headingRef} className="opacity-0 transition-opacity duration-1000 ease-out">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Level Up Your Skills with Our Courses
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Learn from industry experts and master the skills that matter in today's tech landscape.
            </p>
          </div>
        </div>

        <div 
          ref={coursesRef} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {courses.map((course, index) => (
            <CourseCard 
              key={index}
              course={course}
              className="course-card opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;