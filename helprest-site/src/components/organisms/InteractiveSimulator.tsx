import React, { useState } from 'react';
import { Container } from '../atoms/Container';
import { Heading2, Paragraph, SectionTag } from '../atoms/Typography';
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
    <section id="restricoes" className="py-16 sm:py-20 bg-white border-y border-[#EAEAEA]">
      <Container size="lg">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <SectionTag>Filtros por flag alimentar</SectionTag>
            <Heading2>Filtre em tempo real pelas suas restrições</Heading2>
            <Paragraph className="mt-2.5">
              Ative as flags do seu perfil abaixo. O app coloca os locais com 100% de compatibilidade no topo, separa o cardápio seguro e oculta quem não atende nenhuma restrição.
            </Paragraph>
          </div>
          {favoriteIds.length > 0 && (
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#FAFAFA] border border-[#EAEAEA] text-xs font-medium text-[#333333] w-fit">
              <Heart className="w-3.5 h-3.5 fill-[#FF533F] text-[#FF533F]" />
              <span>
                {favoriteIds.length} {favoriteIds.length === 1 ? 'local salvo' : 'locais salvos'} em Favoritos
              </span>
            </div>
          )}
        </div>

        {/* App Step 4 Style Flag Selector */}
        <div className="bg-[#FAFAFA] border border-[#EAEAEA] rounded-2xl p-5 sm:p-6 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-[#EAEAEA]">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#009C9D]" />
              <span className="text-sm font-bold text-[#11181C]">
                Quais restrições definem seu perfil?
              </span>
              <span className="font-mono text-xs text-[#687076] whitespace-nowrap flex-shrink-0">
                ({selectedFlags.length} ativa{selectedFlags.length === 1 ? '' : 's'})
              </span>
            </div>

            {selectedFlags.length > 0 && (
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#007E7F] hover:underline cursor-pointer w-fit"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Limpar filtros
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

          <div className="mt-4 pt-3 border-t border-[#EAEAEA] text-xs text-[#687076] flex flex-wrap items-center justify-between gap-2">
            <span>
              Locais exibidos: <strong className="text-[#11181C]">{rankedEstablishments.length}</strong> de {SAMPLE_ESTABLISHMENTS.length} exemplos em Curitiba
            </span>
            <span>
              Toque em <strong>Explorar cardápio separado</strong> em qualquer cartão para ver ingredientes.
            </span>
          </div>
        </div>

        {rankedEstablishments.length === 0 ? (
          <div className="text-center py-12 px-4 bg-[#FAFAFA] rounded-2xl border border-[#EAEAEA] space-y-2.5">
            <AlertCircle className="w-9 h-9 text-[#F2994A] mx-auto" />
            <h3 className="text-base font-bold text-[#11181C]">
              Nenhum estabelecimento atende simultaneamente essa combinação na amostra
            </h3>
            <p className="text-sm text-[#687076] max-w-md mx-auto">
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
