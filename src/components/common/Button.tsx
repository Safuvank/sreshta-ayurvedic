import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, className = '', ...props }: ButtonProps) => {
  return (
    <button
      className={`bg-[#c9a86a] hover:bg-[#24483E] text-black rounded-full px-6 py-2.5 transition-colors font-medium ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};