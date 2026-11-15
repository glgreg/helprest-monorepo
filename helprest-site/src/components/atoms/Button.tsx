import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  isLoading = false,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-full transition-colors duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-55 disabled:cursor-not-allowed select-none active:scale-[0.985]';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-bold',
  };

  const variantStyles = {
    primary:
      'bg-[#009C9D] text-white hover:bg-[#007E7F] focus:ring-[#009C9D] shadow-xs',
    secondary:
      'bg-[#11181C] text-white hover:bg-[#232D33] focus:ring-[#11181C]',
    outline:
      'border border-[#DDDDDD] bg-white text-[#11181C] hover:border-[#009C9D] hover:text-[#007E7F] focus:ring-[#009C9D]',
    ghost:
      'text-[#687076] hover:bg-[#F2F4F5] hover:text-[#11181C] focus:ring-[#DDDDDD]',
    white:
      'bg-white text-[#007E7F] hover:bg-[#F4FDFB] focus:ring-white font-bold shadow-xs',
    danger:
      'bg-[#D93829] text-white hover:bg-[#B82A1D] focus:ring-[#D93829]',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        iconLeft
      )}
      <span>{children}</span>
      {!isLoading && iconRight}
    </button>
  );
};
