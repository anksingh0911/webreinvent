import React from 'react'

interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'small' | 'medium' | 'large';
}

const Button = (props:ButtonProps) => {

  const {label, variant="primary", size="medium", disabled=false, onClick} = props;

  const getVariantClasses = () => {
    switch (variant) {
      case 'secondary':
        return 'bg-gray-300 text-gray-700 hover:bg-gray-400';
      case 'success':
        return 'bg-green-500 text-white hover:bg-green-600';
      case 'danger':
        return 'bg-red-500 text-white hover:bg-red-600';
      // default to primary
      default:
        return 'bg-blue-500 text-white hover:bg-blue-600';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'px-2 py-1 text-sm';
      case 'large':
        return 'px-4 py-2 text-lg';
      // default to medium
      default:
        return 'px-3 py-2 text-base';
    }
  };


  

  return (
    <button 
    onClick={onClick}
    disabled={disabled}
    className={`rounded focus:outline-none w-full ${getVariantClasses()} ${getSizeClasses()} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>{label}</button>
  )
}

export default Button