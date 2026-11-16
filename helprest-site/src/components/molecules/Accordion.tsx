'use client';

import React, { useEffect, useRef } from 'react';

export interface AccordionItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  defaultOpen = false,
}) => {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (defaultOpen && detailsRef.current) {
      detailsRef.current.open = true;
    }
  }, [defaultOpen]);

  return (
    <details
      ref={detailsRef}
      className="faq-item tonal-surface rounded-2xl bg-[#F7F7F8] p-5 sm:p-6 transition-colors hover:bg-[#F1F2F4]"
    >
      <summary className="text-sm sm:text-base font-bold text-[#11181C] leading-snug select-none min-h-[28px]">
        <span>{question}</span>
      </summary>
      <div className="ps-8 pt-3 text-[#596168] text-sm leading-relaxed">{answer}</div>
    </details>
  );
};
