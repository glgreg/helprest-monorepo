import React from 'react';
import { Container } from '../atoms/Container';
import { Heading2, Paragraph } from '../atoms/Typography';
import { StarRating } from '../atoms/StarRating';
import { SAMPLE_REVIEWS } from '../../data/reviews';
import { DIETARY_FLAGS } from '../../data/flags';
import { MapPin, ShieldCheck } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#F4F6F5]">
      <Container size="lg">
        <div className="max-w-2xl mb-10">
          <Heading2>Relatos presenciais de quem compartilha sua rotina</Heading2>
          <Paragraph className="mt-2.5">
            Avaliações publicadas na aba Social só entram no ar quando o usuário confirma visita presencial dentro de 100 metros do estabelecimento.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SAMPLE_REVIEWS.map((review) => (
            <article
              key={review.id}
              className="tonal-surface bg-white rounded-3xl shadow-[0_2px_12px_-4px_rgba(24,28,27,0.06)] overflow-hidden flex flex-col justify-between"
            >
              <img
                src={review.visitPhotoUrl}
                alt={`Prato registrado em ${review.establishmentName}`}
                className="w-full aspect-[16/10] object-cover bg-[#EDF1EF]"
              />

              <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                        style={{ backgroundColor: review.avatarBg }}
                        aria-hidden="true"
                      >
                        {review.authorInitials}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-bold text-sm text-[#181C1B] truncate leading-tight">
                          {review.authorName}
                        </h3>
                        <span className="text-[11px] text-[#525B58]">{review.dateFormatted}</span>
                      </div>
                    </div>
                    <StarRating rating={review.rating} showValue={false} size="sm" />
                  </div>

                  <p className="text-sm text-[#3A413F] leading-relaxed">“{review.comment}”</p>
                </div>

                <div className="rounded-2xl bg-[#F4F6F5] p-3.5 space-y-2.5">
                  <div className="flex items-center justify-between gap-2 text-xs font-semibold text-[#181C1B]">
                    <span className="inline-flex items-center gap-1.5 min-w-0">
                      <ShieldCheck
                        className="w-3.5 h-3.5 text-[#007677] flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="truncate">{review.establishmentName}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#00696A] flex-shrink-0 tabular-nums">
                      <MapPin className="w-3 h-3" aria-hidden="true" />
                      <span>GPS {review.geofenceDistanceMeters}m</span>
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {review.userDietaryFlags.map((flagId) => {
                      const flag = DIETARY_FLAGS.find((f) => f.id === flagId);
                      return (
                        <span
                          key={flagId}
                          className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white text-[#3A413F]"
                        >
                          {flag?.shortLabel || flagId}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
