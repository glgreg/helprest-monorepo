import type { Metadata } from 'next';
import Link from 'next/link';
import { MainLayout } from '../components/templates/MainLayout';
import { Container } from '../components/atoms/Container';
import { getButtonClasses } from '../components/atoms/Button';
import { ArrowLeft, ShieldCheck, Trash2, FileText, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Página não encontrada',
  description: 'O endereço solicitado não foi encontrado no portal do HelpRest.',
};

export default function NotFoundPage() {
  return (
    <MainLayout>
      <section className="py-20 sm:py-28 bg-[#F7F7F8]">
        <Container size="md">
          <div className="tonal-surface bg-white rounded-3xl p-8 sm:p-12 shadow-[0_2px_12px_-4px_rgba(17,24,28,0.05)] max-w-2xl mx-auto text-center space-y-6">
            <p className="font-mono text-sm font-semibold text-[#00797A]">HTTP 404</p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#11181C] tracking-tight">
              Página não encontrada
            </h1>
            <p className="text-sm sm:text-base text-[#596168] leading-relaxed">
              O endereço informado não existe ou foi movido. Utilize os links oficiais abaixo para retornar à página inicial ou acessar os documentos do HelpRest.
            </p>

            <div className="pt-2 flex justify-center">
              <Link href="/" className={getButtonClasses({ variant: 'primary', size: 'lg' })}>
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                <span>Voltar à Página Inicial</span>
              </Link>
            </div>

            <nav aria-label="Páginas principais" className="pt-4 border-t border-[#E6E8EB]">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-xs sm:text-sm">
                <li>
                  <Link
                    href="/privacidade"
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#F7F7F8] hover:bg-[#EFFBFB] text-[#11181C] font-medium transition-colors"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#009C9D] flex-shrink-0" aria-hidden="true" />
                    <span>Política de Privacidade</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/exclusao-de-dados"
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#F7F7F8] hover:bg-[#FDF1EF] text-[#11181C] font-medium transition-colors"
                  >
                    <Trash2 className="w-4 h-4 text-[#B42318] flex-shrink-0" aria-hidden="true" />
                    <span>Exclusão de Conta e Dados</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/termos"
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#F7F7F8] hover:bg-[#EFFBFB] text-[#11181C] font-medium transition-colors"
                  >
                    <FileText className="w-4 h-4 text-[#596168] flex-shrink-0" aria-hidden="true" />
                    <span>Termos de Uso &amp; CSAE</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/suporte"
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-[#F7F7F8] hover:bg-[#EFFBFB] text-[#11181C] font-medium transition-colors"
                  >
                    <HelpCircle className="w-4 h-4 text-[#009C9D] flex-shrink-0" aria-hidden="true" />
                    <span>Central de Suporte</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </section>
    </MainLayout>
  );
}
