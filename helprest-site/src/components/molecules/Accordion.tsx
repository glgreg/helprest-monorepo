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
      className="faq-item tonal-surface rounded-2xl bg-white p-5 sm:p-6 shadow-[0_2px_10px_-4px_rgba(24,28,27,0.05)] transition-colors hover:bg-[#FAFBFB]"
    >
      <summary className="text-sm sm:text-base font-bold text-[#181C1B] leading-snug select-none min-h-[28px]">
        <span>{question}</span>
      </summary>
      <div className="ps-8 pt-3 text-[#525B58] text-sm leading-relaxed">{answer}</div>
    </details>
  );
};
