import React from 'react';
import { Star } from 'lucide-react';

export interface StarRatingProps {
  rating: number;
  maxStars?: number;
  showValue?: boolean;
  reviewCount?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxStars = 5,
  showValue = true,
  reviewCount,
  size = 'md',
  className = '',
}) => {
  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const textSizes = {
    sm: 'text-xs font-bold',
    md: 'text-sm font-bold',
    lg: 'text-base font-bold',
  };

  return (
    <div
      className={`inline-flex items-center gap-1.5 ${className}`}
      aria-label={`Avaliação ${rating.toFixed(1)} de ${maxStars}${
        reviewCount !== undefined ? ` baseada em ${reviewCount} avaliações` : ''
      }`}
    >
      <div className="flex items-center gap-0.5 text-[#E5A910]" aria-hidden="true">
        {Array.from({ length: maxStars }).map((_, i) => {
          const filled = i < Math.floor(rating);
          const half = !filled && i < rating;
          return (
            <Star
              key={i}
              className={`${iconSizes[size]} ${
                filled || half ? 'fill-[#E5A910] text-[#E5A910]' : 'text-[#CBD2CF]'
              }`}
            />
          );
        })}
      </div>
      {showValue && (
        <span className={`text-[#181C1B] tabular-nums ${textSizes[size]}`}>
          {rating.toFixed(1)}
        </span>
      )}
      {reviewCount !== undefined && (
        <span className="text-xs text-[#525B58] tabular-nums">({reviewCount})</span>
      )}
    </div>
  );
};
