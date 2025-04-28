import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  outline?: boolean;
  small?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  primary = false,
  outline = false,
  small = false,
  fullWidth = false,
  onClick,
  className = '',
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500';
  
  const sizeClasses = small 
    ? 'px-3 py-1.5 text-sm'
    : 'px-5 py-2.5 text-sm md:text-base';
  
  const widthClasses = fullWidth ? 'w-full' : '';
  
  const variantClasses = primary
    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-md hover:shadow-lg'
    : outline
    ? 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50'
    : 'bg-white text-slate-800 hover:bg-gray-50 border border-gray-300';

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${widthClasses} ${variantClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;