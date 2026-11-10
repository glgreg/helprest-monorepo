import React from 'react';

export const Heading1: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] ${className}`}>
    {children}
  </h1>
);

export const Heading2: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 ${className}`}>
    {children}
  </h2>
);

export const Heading3: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <h3 className={`text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 ${className}`}>
    {children}
  </h3>
);

export const Paragraph: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <p className={`text-base sm:text-lg text-slate-600 leading-relaxed ${className}`}>
    {children}
  </p>
);

export const SectionTag: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#E6F7F7] text-[#007E7F] border border-[#009C9D]/20 mb-3 ${className}`}>
    {children}
  </div>
);
