import React from 'react';
import { DietaryFlag } from '../../types';
import { 
  WheatOff, 
  MilkOff, 
  Leaf, 
  Salad, 
  FishOff, 
  EggOff, 
  HeartPulse, 
  ShieldAlert 
} from 'lucide-react';

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
  const renderIcon = (name: string, className: string) => {
    switch (name) {
      case 'WheatOff':
        return <WheatOff className={className} />;
      case 'MilkOff':
        return <MilkOff className={className} />;
      case 'Leaf':
        return <Leaf className={className} />;
      case 'Salad':
        return <Salad className={className} />;
      case 'FishOff':
        return <FishOff className={className} />;
      case 'EggOff':
        return <EggOff className={className} />;
      case 'HeartPulse':
        return <HeartPulse className={className} />;
      default:
        return <ShieldAlert className={className} />;
    }
  };

  const isClickable = !!onToggle;

  return (
    <button
      type="button"
      onClick={() => onToggle?.(flag.id)}
      disabled={!isClickable}
      className={`inline-flex items-center gap-2 rounded-xl transition-all duration-200 select-none ${
        size === 'sm' ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'
      } ${
        isClickable ? 'cursor-pointer active:scale-95' : 'cursor-default'
      } ${
        isSelected
          ? 'bg-[#009C9D] text-white shadow-sm shadow-[#009C9D]/30 ring-2 ring-[#009C9D] ring-offset-1 font-semibold'
          : 'bg-white text-slate-700 border border-slate-200 hover:border-[#009C9D]/50 hover:bg-[#E6F7F7]/30'
      }`}
      title={flag.description}
    >
      <span className={isSelected ? 'text-white' : 'text-[#009C9D]'}>
        {renderIcon(flag.iconName, size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4')}
      </span>
      <span>{flag.name}</span>
      {isSelected && (
        <span className="w-1.5 h-1.5 rounded-full bg-white ml-0.5" />
      )}
    </button>
  );
};
