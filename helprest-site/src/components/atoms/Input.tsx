import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, icon, className = '', id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label htmlFor={inputId} className="block text-xs font-bold text-[#11181C]">
            {label}
          </label>
        )}
        <div className="relative rounded-xl">
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#687076]">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={`w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-[#11181C] transition-colors placeholder:text-[#9BA1A6] focus:outline-none focus:ring-2 focus:ring-[#009C9D]/20 focus:border-[#009C9D] ${
              icon ? 'pl-10' : ''
            } ${
              error
                ? 'border-[#D93829] focus:border-[#D93829] focus:ring-[#D93829]/20'
                : 'border-[#DDDDDD] hover:border-[#BDBDBD]'
            } ${className}`}
            {...props}
          />
        </div>
        {error && <p className="text-xs text-[#D93829] font-medium">{error}</p>}
        {!error && helperText && <p className="text-xs text-[#687076]">{helperText}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, className = '', id, rows = 4, ...props }, ref) => {
    const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label htmlFor={textareaId} className="block text-xs font-bold text-[#11181C]">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={`w-full rounded-xl border bg-white px-4 py-2.5 text-sm text-[#11181C] transition-colors placeholder:text-[#9BA1A6] focus:outline-none focus:ring-2 focus:ring-[#009C9D]/20 focus:border-[#009C9D] ${
            error
              ? 'border-[#D93829] focus:border-[#D93829] focus:ring-[#D93829]/20'
              : 'border-[#DDDDDD] hover:border-[#BDBDBD]'
          } ${className}`}
          {...props}
        />
        {error && <p className="text-xs text-[#D93829] font-medium">{error}</p>}
        {!error && helperText && <p className="text-xs text-[#687076]">{helperText}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
