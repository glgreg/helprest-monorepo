import React, { useState } from 'react';
import { Button } from '../atoms/Button';
import { Input } from '../atoms/Input';
import { X, CheckCircle2, Sparkles, Bell, ShieldCheck } from 'lucide-react';

export interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [registered, setRegistered] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setRegistered(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {registered ? (
          <div className="text-center py-6 space-y-3">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Você está na lista VIP!
            </h3>
            <p className="text-slate-600 text-sm max-w-sm mx-auto">
              Confirmamos seu e-mail <strong>{email}</strong>. Assim que a versão oficial for liberada no Google Play Console, você receberá o link exclusivo de download em primeira mão!
            </p>
            <div className="pt-3">
              <Button variant="primary" onClick={onClose} size="md">
                Entendido
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-[#E6F7F7] flex items-center justify-center text-[#009C9D]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#009C9D]">
                  Acesso Antecipado
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  HelpRest no Google Play
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              O aplicativo <strong>HelpRest (Android)</strong> está em fase final de homologação técnica junto ao Google Play Console. Inscreva-se para receber o convite do Acesso Antecipado e ser o primeiro a testar restaurantes 100% seguros na sua região.
            </p>

            {/* App Specs Card */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-xs space-y-2 text-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-500">Pacote oficial:</span>
                <span className="font-mono font-semibold text-slate-900">com.gustavo_lg.helprest</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Compatibilidade:</span>
                <span className="font-semibold text-slate-900">Android 8.0+ (Oreo ou superior)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Preço:</span>
                <span className="font-semibold text-emerald-600">100% Gratuito</span>
              </div>
              <div className="flex items-center gap-1.5 pt-1 text-[11px] text-[#007E7F]">
                <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                <span>Auditoria de privacidade & Termos LGPD integrados</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                label="Seu melhor e-mail para receber o link"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu.email@exemplo.com"
                icon={<Bell className="w-4 h-4" />}
              />
              <Button
                type="submit"
                variant="primary"
                fullWidth
                size="lg"
                isLoading={loading}
              >
                Garantir Acesso Antecipado
              </Button>
            </form>

            <div className="text-center">
              <span className="text-[11px] text-slate-400">
                Usuário iOS? A versão para App Store está em desenvolvimento paralelo e será anunciada em breve.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
