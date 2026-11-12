import React from 'react';

export const Heading1: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <h1
    className={`text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#11181C] leading-[1.08] ${className}`}
  >
    {children}
  </h1>
);

export const Heading2: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <h2
    className={`text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight text-[#11181C] leading-[1.18] ${className}`}
  >
    {children}
  </h2>
);

export const Heading3: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <h3 className={`text-lg sm:text-xl font-bold tracking-tight text-[#11181C] ${className}`}>
    {children}
  </h3>
);

export const Paragraph: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <p className={`text-base sm:text-[17px] text-[#687076] leading-relaxed ${className}`}>
    {children}
  </p>
);

export const SectionTag: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div
    className={`inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-[#007E7F] mb-3 ${className}`}
  >
    <span className="w-5 h-[2px] rounded-full bg-[#009C9D]" aria-hidden="true" />
    {children}
  </div>
);
