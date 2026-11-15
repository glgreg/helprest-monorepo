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
      className={`tonal-chip inline-flex items-center gap-2 rounded-full transition-colors duration-150 select-none ${
        size === 'sm' ? 'px-3 py-1.5 text-xs min-h-[34px]' : 'px-4 py-2 text-xs sm:text-sm min-h-[40px]'
      } ${isClickable ? 'cursor-pointer active:scale-[0.985]' : 'cursor-default'} ${
        isSelected
          ? 'bg-[#007677] text-white font-semibold hover:bg-[#006061]'
          : 'bg-[#EDF1EF] text-[#181C1B] font-medium hover:bg-[#E4EAE7]'
      }`}
      title={flag.description}
    >
      <span
        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
        style={{ backgroundColor: isSelected ? '#FFFFFF' : flag.swatchColor }}
        aria-hidden="true"
      />
      <span className="whitespace-nowrap leading-none">{flag.shortLabel}</span>
      {isSelected && <Check className="w-3.5 h-3.5 text-white flex-shrink-0" aria-hidden="true" />}
    </button>
  );
};
