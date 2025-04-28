import React from 'react';
import { Star } from 'lucide-react';
import Button from './Button';

interface CourseProps {
  course: {
    title: string;
    description: string;
    image: string;
    rating: number;
    students: number;
    level: string;
  };
  className?: string;
}

const CourseCard: React.FC<CourseProps> = ({ course, className = '' }) => {
  return (
    <div 
      className={`group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 ${className}`}
    >
      <div className="relative overflow-hidden">
        <img 
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 text-white">
            <p className="text-sm font-medium">View course details</p>
          </div>
        </div>
        <div className="absolute top-3 right-3 bg-white dark:bg-slate-800 text-xs font-bold px-2 py-1 rounded-full text-indigo-600 dark:text-indigo-400">
          {course.level}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
          {course.title}
        </h3>
        
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
          {course.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="ml-1 text-sm font-medium text-slate-900 dark:text-white">{course.rating}</span>
            <span className="ml-1 text-xs text-slate-500 dark:text-slate-400">({course.students} students)</span>
          </div>
        </div>
        
        <Button primary fullWidth small>
          Explore Course
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;