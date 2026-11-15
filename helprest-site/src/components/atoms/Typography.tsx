import React from 'react';

export const Heading1: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <h1
    className={`font-display text-[clamp(2.125rem,1.45rem+2.5vw,3.375rem)] font-bold tracking-tight text-[#11181C] leading-[1.06] ${className}`}
  >
    {children}
  </h1>
);

export const Heading2: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <h2
    className={`font-display text-[clamp(1.625rem,1.25rem+1.4vw,2.25rem)] font-bold tracking-tight text-[#11181C] leading-[1.15] ${className}`}
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
  <p className={`text-base sm:text-[1.0625rem] text-[#596168] leading-relaxed ${className}`}>
    {children}
  </p>
);
