import React from 'react';
import { DietaryFlag } from '../../types';
import { Check } from 'lucide-react';

export interface FlagChipProps {
  flag: DietaryFlag;
  isSelected?: boolean;
  onToggle?: (flagId: string) => void;
  size?: 'sm' | 'md';
}

export const FlagChip: React.FC<FlagChipProps> = ({
  flag,
  isSelected = false,
  onToggle,
  size = 'md',
}) => {
  const isClickable = !!onToggle;

  return (
    <button
      type="button"
      onClick={() => onToggle?.(flag.id)}
      disabled={!isClickable}
      aria-pressed={isSelected}
      className={`inline-flex items-center gap-2 rounded-full border transition-colors duration-150 select-none ${
        size === 'sm' ? 'px-2.5 py-1 text-[11px]' : 'px-3.5 py-1.5 text-xs'
      } ${isClickable ? 'cursor-pointer active:scale-[0.98]' : 'cursor-default'} ${
        isSelected
          ? 'bg-[#009C9D] text-white border-[#009C9D] font-bold shadow-xs'
          : 'bg-white text-[#11181C] border-[#DDDDDD] hover:border-[#009C9D] hover:bg-[#F4FDFB]'
      }`}
      title={flag.description}
    >
      <span
        className="w-2.5 h-2.5 rounded-full flex-shrink-0 border border-black/10"
        style={{ backgroundColor: isSelected ? '#FFFFFF' : flag.swatchColor }}
        aria-hidden="true"
      />
      <span className="font-mono text-[11px] uppercase tracking-tight font-bold whitespace-nowrap">
        {flag.shortLabel}
      </span>
      {isSelected && <Check className="w-3.5 h-3.5 text-white flex-shrink-0" />}
    </button>
  );
};
