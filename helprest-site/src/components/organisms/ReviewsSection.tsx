import React from 'react';
import { Container } from '../atoms/Container';
import { Heading2, Paragraph, SectionTag } from '../atoms/Typography';
import { StarRating } from '../atoms/StarRating';
import { SAMPLE_REVIEWS } from '../../data/reviews';
import { DIETARY_FLAGS } from '../../data/flags';
import { MapPin, ShieldCheck } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#FAFAFA]">
      <Container size="lg">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <SectionTag>Feed Social verificado</SectionTag>
            <Heading2>Relatos presenciais de quem compartilha sua rotina</Heading2>
            <Paragraph className="mt-2.5">
              Avaliações publicadas na aba Social só entram no ar quando o usuário confirma visita presencial dentro de 100 metros do estabelecimento.
            </Paragraph>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SAMPLE_REVIEWS.map((review) => (
            <article
              key={review.id}
              className="bg-white rounded-2xl border border-[#EAEAEA] overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Visit photo preview matching Social Feed */}
                <div className="relative h-44 bg-[#F2F4F5] overflow-hidden">
                  <img
                    src={review.visitPhotoUrl}
                    alt={`Foto da visita em ${review.establishmentName}`}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-2.5 left-2.5 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 text-[#007E7F] font-mono text-[10px] font-bold">
                    <MapPin className="w-3 h-3" />
                    GPS {review.geofenceDistanceMeters}m • Verificada
                  </span>
                </div>

                <div className="p-5 space-y-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                        style={{ backgroundColor: review.avatarBg }}
                      >
                        {review.authorInitials}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-bold text-sm text-[#11181C] truncate leading-tight">
                          {review.authorName}
                        </h3>
                        <span className="text-[11px] text-[#687076]">{review.dateFormatted}</span>
                      </div>
                    </div>
                    <StarRating rating={review.rating} showValue={false} size="sm" />
                  </div>

                  <p className="text-sm text-[#333333] leading-relaxed">
                    “{review.comment}”
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-[#EAEAEA] space-y-2.5">
                <div className="text-xs font-bold text-[#11181C] truncate flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#009C9D] flex-shrink-0" />
                  <span className="truncate">{review.establishmentName}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {review.userDietaryFlags.map((flagId) => {
                    const flag = DIETARY_FLAGS.find((f) => f.id === flagId);
                    return (
                      <span
                        key={flagId}
                        className="font-mono text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-[#F4FDFB] text-[#007E7F] border border-[#B2DFDB]"
                      >
                        {flag?.shortLabel || flagId}
                      </span>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
