import React from 'react';
import { Container } from '../atoms/Container';
import { Heading2, Paragraph, SectionTag } from '../atoms/Typography';
import { Button } from '../atoms/Button';
import { Link } from '../../router';
import { ShieldCheck, Lock, Trash2, FileText, ArrowRight } from 'lucide-react';

export const DataSafetyHighlightSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <Container size="lg">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <SectionTag>
                <ShieldCheck className="w-3.5 h-3.5" />
                Segurança dos Dados & Google Play Console
              </SectionTag>

              <Heading2>
                Privacidade Transparente, Criptografia e Conformidade LGPD
              </Heading2>

              <Paragraph>
                Sabemos que preferências alimentares e localização são informações pessoais que exigem máximo respeito e confidencialidade. No HelpRest, a segurança dos seus dados é prioridade de arquitetura:
              </Paragraph>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#E6F7F7] flex items-center justify-center text-[#007E7F] flex-shrink-0 mt-0.5">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Criptografia em Trânsito</div>
                    <div className="text-[11px] text-slate-500">TLS 1.3 obrigatório e Argon2id</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700 flex-shrink-0 mt-0.5">
                    <Trash2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Exclusão Facilitada</div>
                    <div className="text-[11px] text-slate-500">Deleção de conta em até 30 dias</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 flex-shrink-0 mt-0.5">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Zero Venda de Dados</div>
                    <div className="text-[11px] text-slate-500">Seus dados nunca são comercializados</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center items-start lg:items-end">
              <Link to="/seguranca-dos-dados">
                <Button
                  variant="primary"
                  size="md"
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  Ver Declaração de Segurança
                </Button>
              </Link>
              <Link to="/exclusao-de-dados">
                <Button
                  variant="outline"
                  size="md"
                  iconLeft={<Trash2 className="w-4 h-4 text-rose-600" />}
                >
                  Solicitar Exclusão de Dados
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
