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
    'inline-flex items-center justify-center font-medium rounded-full transition-colors duration-150 cursor-pointer disabled:opacity-55 disabled:cursor-not-allowed select-none active:scale-[0.985] min-h-[44px]';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5 min-h-[36px]',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5 font-semibold min-h-[48px]',
  };

  const variantStyles = {
    primary: 'bg-[#009C9D] text-[#09181A] hover:bg-[#1BA6A7] font-semibold',
    secondary: 'bg-[#11181C] text-white hover:bg-[#222B31] font-semibold',
    outline:
      'tonal-surface bg-[#F1F2F4] text-[#11181C] hover:bg-[#E6E8EB] hover:text-[#00797A]',
    ghost: 'text-[#3F454A] hover:bg-[#F1F2F4] hover:text-[#11181C]',
    white: 'bg-white text-[#11181C] hover:bg-[#EFFBFB] hover:text-[#00797A] font-semibold',
    danger: 'bg-[#B42318] text-white hover:bg-[#912018] font-semibold',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span
          className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
          aria-hidden="true"
        />
      ) : (
        iconLeft
      )}
      <span>{children}</span>
      {!isLoading && iconRight}
    </button>
  );
};
