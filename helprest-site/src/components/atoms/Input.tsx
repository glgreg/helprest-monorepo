import React, { useId } from 'react';
import { AlertCircle } from 'lucide-react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, icon, className = '', id, required, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id || generatedId;
    const hintId = helperText ? `${inputId}-hint` : undefined;
    const errorId = `${inputId}-error`;
    const describedBy = [hintId, error ? errorId : undefined].filter(Boolean).join(' ') || undefined;

    return (
      <div className="hr-field-group w-full space-y-1.5">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-[#181C1B]">
            {label}
            {required && (
              <span className="text-[#B42318] ms-1" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}
        {helperText && (
          <p id={hintId} className="text-xs text-[#525B58] leading-snug">
            {helperText}
          </p>
        )}
        <div className="relative rounded-xl">
          {icon && (
            <div className="absolute inset-y-0 start-0 ps-3.5 flex items-center pointer-events-none text-[#525B58]">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            required={required}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={describedBy}
            className={`hr-field-control w-full rounded-xl border bg-white px-4 py-2.5 text-[#181C1B] transition-colors placeholder:text-[#66706D] ${
              icon ? 'ps-10' : ''
            } ${
              error
                ? 'border-[#B42318] bg-[#FDF1EF]'
                : 'border-[#747D7B] hover:border-[#181C1B] focus:border-[#007677]'
            } ${className}`}
            {...props}
          />
        </div>
        {error && (
          <p id={errorId} className="flex items-center gap-1.5 text-xs text-[#B42318] font-medium pt-0.5">
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
            <span>{error}</span>
          </p>
        )}
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
  ({ label, error, helperText, className = '', id, rows = 4, required, ...props }, ref) => {
    const generatedId = useId();
    const textareaId = id || generatedId;
    const hintId = helperText ? `${textareaId}-hint` : undefined;
    const errorId = `${textareaId}-error`;
    const describedBy = [hintId, error ? errorId : undefined].filter(Boolean).join(' ') || undefined;

    return (
      <div className="hr-field-group w-full space-y-1.5">
        {label && (
          <label htmlFor={textareaId} className="block text-sm font-medium text-[#181C1B]">
            {label}
            {required && (
              <span className="text-[#B42318] ms-1" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}
        {helperText && (
          <p id={hintId} className="text-xs text-[#525B58] leading-snug">
            {helperText}
          </p>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          required={required}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={describedBy}
          className={`hr-field-control w-full rounded-xl border bg-white px-4 py-3 text-[#181C1B] transition-colors placeholder:text-[#66706D] ${
            error
              ? 'border-[#B42318] bg-[#FDF1EF]'
              : 'border-[#747D7B] hover:border-[#181C1B] focus:border-[#007677]'
          } ${className}`}
          {...props}
        />
        {error && (
          <p id={errorId} className="flex items-center gap-1.5 text-xs text-[#B42318] font-medium pt-0.5">
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
            <span>{error}</span>
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
