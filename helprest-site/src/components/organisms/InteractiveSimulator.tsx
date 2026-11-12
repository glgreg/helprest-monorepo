import React, { useState } from 'react';
import { Container } from '../atoms/Container';
import { Heading2, Paragraph, SectionTag } from '../atoms/Typography';
import { FlagChip } from '../molecules/FlagChip';
import { EstablishmentCard } from '../molecules/EstablishmentCard';
import { DIETARY_FLAGS } from '../../data/flags';
import { SAMPLE_ESTABLISHMENTS } from '../../data/establishments';
import { SlidersHorizontal, Sparkles, Filter, AlertCircle, RotateCcw } from 'lucide-react';

export const InteractiveSimulator: React.FC = () => {
  // Default with Gluten Free and Lactose Free selected to show the power right away
  const [selectedFlags, setSelectedFlags] = useState<string[]>(['gluten_free', 'lactose_free']);

  const handleToggleFlag = (flagId: string) => {
    setSelectedFlags((prev) =>
      prev.includes(flagId) ? prev.filter((id) => id !== flagId) : [...prev, flagId]
    );
  };

  const handleReset = () => {
    setSelectedFlags([]);
  };

  // Rank establishments according to HelpRest RecommendationService logic:
  // 1. Calculate match ratio (matching user flags / total user flags)
  // 2. If user has active restrictions and match ratio is 0, exclude completely!
  // 3. Sort by match ratio descending, then by distance ascending
  const rankedEstablishments = React.useMemo(() => {
    if (selectedFlags.length === 0) {
      return SAMPLE_ESTABLISHMENTS;
    }

    return SAMPLE_ESTABLISHMENTS
      .map((est) => {
        const matchingCount = selectedFlags.filter((f) => est.flags.includes(f)).length;
        const ratio = matchingCount / selectedFlags.length;
        return {
          ...est,
          matchRatio: ratio,
        };
      })
      .filter((est) => est.matchRatio > 0) // Zero-match exclusion rule!
      .sort((a, b) => {
        if (b.matchRatio !== a.matchRatio) {
          return b.matchRatio - a.matchRatio;
        }
        return a.distanceKm - b.distanceKm;
      });
  }, [selectedFlags]);

  return (
    <section id="restricoes" className="py-20 bg-white border-y border-slate-200/80">
      <Container size="lg">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionTag>
            <SlidersHorizontal className="w-3.5 h-3.5" />
            Simulador Interativo
          </SectionTag>
          <Heading2>
            Experimente o Algoritmo do HelpRest em Tempo Real
          </Heading2>
          <Paragraph className="mt-3">
            Selecione uma ou mais restrições alimentares abaixo e veja como nossa plataforma recalcula as recomendações, destacando locais com <strong>100% de compatibilidade</strong> e excluindo estabelecimentos inseguros.
          </Paragraph>
        </div>

        {/* Flag Selector Chips */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 mb-10 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-4 border-b border-slate-200/80">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#009C9D]" />
              <span className="text-sm font-bold text-slate-800">
                Escolha suas Restrições:
              </span>
              <span className="text-xs text-slate-500">
                ({selectedFlags.length} selecionada{selectedFlags.length === 1 ? '' : 's'})
              </span>
            </div>

            {selectedFlags.length > 0 && (
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Limpar seleção
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2.5">
            {DIETARY_FLAGS.map((flag) => (
              <FlagChip
                key={flag.id}
                flag={flag}
                isSelected={selectedFlags.includes(flag.id)}
                onToggle={handleToggleFlag}
              />
            ))}
          </div>

          {/* Algorithm Insight banner */}
          <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-start gap-2.5 text-xs text-slate-600">
            <Sparkles className="w-4 h-4 text-[#009C9D] flex-shrink-0 mt-0.5" />
            <div>
              <strong>Critério Arquitetural do HelpRest:</strong> Quando você ativa restrições, o sistema prioriza opções com pontuação máxima de flags (<code className="bg-white px-1.5 py-0.5 rounded border border-slate-200 font-mono text-[#007E7F]">flagMatchRatio = 1.0</code>). Locais que não atendem a nenhuma restrição são <strong>automaticamente omitidos</strong> da listagem para sua proteção.
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>Opções Recomendadas</span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#E6F7F7] text-[#007E7F] border border-[#009C9D]/20">
                {rankedEstablishments.length} estabelecimentos seguros
              </span>
            </h3>
          </div>

          {rankedEstablishments.length === 0 ? (
            <div className="text-center py-12 px-4 bg-slate-50 rounded-3xl border border-slate-200 space-y-3">
              <AlertCircle className="w-10 h-10 text-amber-500 mx-auto" />
              <h4 className="text-lg font-bold text-slate-900">
                Nenhum estabelecimento encontrado para essa combinação extrema
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Na versão completa do app, novos restaurantes são cadastrados diariamente e o sistema sugere opções em bairros vizinhos.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rankedEstablishments.map((est) => (
                <EstablishmentCard
                  key={est.id}
                  establishment={est}
                  userActiveFlags={selectedFlags}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};
