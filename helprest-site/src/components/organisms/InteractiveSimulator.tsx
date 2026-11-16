'use client';

import React, { useState } from 'react';
import { Container } from '../atoms/Container';
import { Heading2, Paragraph } from '../atoms/Typography';
import { FlagChip } from '../molecules/FlagChip';
import { EstablishmentCard } from '../molecules/EstablishmentCard';
import { DIETARY_FLAGS } from '../../data/flags';
import { SAMPLE_ESTABLISHMENTS } from '../../data/establishments';
import { Filter, AlertCircle, RotateCcw, Heart } from 'lucide-react';

export const InteractiveSimulator: React.FC = () => {
  const [selectedFlags, setSelectedFlags] = useState<string[]>(['gluten_free', 'lactose_free']);
  const [favoriteIds, setFavoriteIds] = useState<string[]>(['est-1']);

  const handleToggleFlag = (flagId: string) => {
    setSelectedFlags((prev) =>
      prev.includes(flagId) ? prev.filter((id) => id !== flagId) : [...prev, flagId]
    );
  };

  const handleToggleFavorite = (estId: string) => {
    setFavoriteIds((prev) =>
      prev.includes(estId) ? prev.filter((id) => id !== estId) : [...prev, estId]
    );
  };

  const handleReset = () => {
    setSelectedFlags([]);
  };

  // Match RecommendationService logic: compute flagMatchRatio, exclude zero-match when filters active
  const rankedEstablishments = React.useMemo(() => {
    if (selectedFlags.length === 0) {
      return SAMPLE_ESTABLISHMENTS;
    }

    return SAMPLE_ESTABLISHMENTS.map((est) => {
      const matchingCount = selectedFlags.filter((f) => est.flags.includes(f)).length;
      const ratio = matchingCount / selectedFlags.length;
      return {
        ...est,
        matchRatio: ratio,
      };
    })
      .filter((est) => est.matchRatio > 0)
      .sort((a, b) => {
        if (b.matchRatio !== a.matchRatio) {
          return b.matchRatio - a.matchRatio;
        }
        return a.distanceKm - b.distanceKm;
      });
  }, [selectedFlags]);

  return (
    <section id="restricoes" className="py-16 sm:py-20 bg-[#F7F7F8]">
      <Container size="lg">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <Heading2>Filtre em tempo real pelas suas restrições</Heading2>
            <Paragraph className="mt-2.5">
              Ative as flags do seu perfil abaixo. O app coloca os locais com 100% de compatibilidade no topo, separa o cardápio seguro e oculta quem não atende nenhuma restrição.
            </Paragraph>
          </div>
          {favoriteIds.length > 0 && (
            <div className="tonal-surface inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-xs font-medium text-[#11181C] shadow-[0_2px_10px_-4px_rgba(17,24,28,0.06)] w-fit">
              <Heart className="w-3.5 h-3.5 fill-[#FF533F] text-[#FF533F]" aria-hidden="true" />
              <span>
                {favoriteIds.length}{' '}
                {favoriteIds.length === 1 ? 'local salvo' : 'locais salvos'} em Favoritos
              </span>
            </div>
          )}
        </div>

        {/* Elevated White Filter Tray on #F7F7F8 Canvas */}
        <search
          aria-label="Filtrar restaurantes por restrição alimentar"
          className="block tonal-surface bg-white rounded-3xl p-5 sm:p-6 shadow-[0_2px_12px_-4px_rgba(17,24,28,0.06)] mb-10 space-y-5"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <Filter className="w-4 h-4 text-[#009C9D]" aria-hidden="true" />
              <span className="text-sm font-bold text-[#11181C]">
                Quais restrições definem seu perfil?
              </span>
              <span className="text-xs text-[#596168] tabular-nums whitespace-nowrap">
                {rankedEstablishments.length} de {SAMPLE_ESTABLISHMENTS.length} locais compatíveis
              </span>
            </div>

            {selectedFlags.length > 0 && (
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00797A] hover:bg-[#EFFBFB] px-3 py-1.5 min-h-[36px] rounded-full transition-colors cursor-pointer w-fit"
              >
                <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Limpar filtros</span>
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {DIETARY_FLAGS.map((flag) => (
              <FlagChip
                key={flag.id}
                flag={flag}
                isSelected={selectedFlags.includes(flag.id)}
                onToggle={handleToggleFlag}
              />
            ))}
          </div>
        </search>

        {rankedEstablishments.length === 0 ? (
          <div className="tonal-surface text-center py-12 px-6 bg-white rounded-3xl shadow-[0_2px_12px_-4px_rgba(17,24,28,0.06)] space-y-2.5">
            <AlertCircle className="w-9 h-9 text-[#C93322] mx-auto" aria-hidden="true" />
            <h3 className="text-base font-bold text-[#11181C]">
              Nenhum estabelecimento atende simultaneamente essa combinação na amostra
            </h3>
            <p className="text-sm text-[#596168] max-w-md mx-auto">
              Regra de segurança zero-match ativa: restaurantes sem correspondência são ocultados para evitar recomendações enganosas.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rankedEstablishments.map((est) => (
              <EstablishmentCard
                key={est.id}
                establishment={est}
                userActiveFlags={selectedFlags}
                isFavorite={favoriteIds.includes(est.id)}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};
