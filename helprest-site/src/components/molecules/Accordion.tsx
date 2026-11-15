import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-[#EAEAEA] rounded-2xl bg-white overflow-hidden transition-colors hover:border-[#009C9D]/50">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left font-bold text-[#11181C] gap-4 cursor-pointer focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-sm sm:text-base leading-snug">{question}</span>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-150 ${
            isOpen ? 'rotate-180 bg-[#E0F2F1] text-[#007E7F]' : 'bg-[#F5F5F5] text-[#687076]'
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      {isOpen && (
        <div className="px-5 pb-5 text-[#687076] text-sm leading-relaxed border-t border-[#EAEAEA] pt-3">
          {answer}
        </div>
      )}
    </div>
  );
};
