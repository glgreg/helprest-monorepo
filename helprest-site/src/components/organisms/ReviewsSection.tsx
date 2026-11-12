import React from 'react';
import { Container } from '../atoms/Container';
import { Heading2, Paragraph, SectionTag } from '../atoms/Typography';
import { StarRating } from '../atoms/StarRating';
import { SAMPLE_REVIEWS } from '../../data/reviews';
import { DIETARY_FLAGS } from '../../data/flags';
import { MessageSquareHeart, MapPin, ShieldCheck } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container size="lg">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionTag>
            <MessageSquareHeart className="w-3.5 h-3.5" />
            Depoimentos da Comunidade
          </SectionTag>
          <Heading2>
            Quem Tem Restrição Confia no HelpRest
          </Heading2>
          <Paragraph className="mt-3">
            Todas as avaliações no HelpRest contam com validação de presença física via GPS a até 100 metros. Sem robôs, sem fakes.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SAMPLE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-slate-50/80 rounded-3xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.authorAvatar}
                      alt={review.authorName}
                      className="w-11 h-11 rounded-full object-cover ring-2 ring-[#009C9D]/30"
                    />
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 leading-tight">
                        {review.authorName}
                      </h4>
                      <span className="text-[11px] text-slate-400">
                        {review.dateFormatted}
                      </span>
                    </div>
                  </div>
                  <StarRating rating={review.rating} showValue={false} size="sm" />
                </div>

                {/* Geofence badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#E6F7F7] text-[#007E7F] text-xs font-semibold border border-[#009C9D]/20">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>GPS Verificado ({review.geofenceDistanceMeters}m do local)</span>
                </div>

                {/* Comment text */}
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Review target establishment & user flags */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 space-y-2">
                <div className="text-xs font-semibold text-slate-800 truncate flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#009C9D]" />
                  <span>{review.establishmentName}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {review.userDietaryFlags.map((flagId) => {
                    const flag = DIETARY_FLAGS.find((f) => f.id === flagId);
                    return (
                      <span
                        key={flagId}
                        className="text-[10px] px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600 font-medium"
                      >
                        {flag?.shortLabel || flagId}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
