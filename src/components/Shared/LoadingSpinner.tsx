import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className={`inline-block ${className}`}>
        <div
          className={`${sizeClasses[size]} border-[6px] border-gray-200 border-t-greenBtn 
          rounded-full animate-spin`}
        ></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;