import React, { useState } from 'react';
import { Input } from '../atoms/Input';
import { Textarea } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { AlertTriangle, CheckCircle2, ShieldAlert } from 'lucide-react';

export const DeleteAccountForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [scope, setScope] = useState<'full' | 'data-only'>('full');
  const [reason, setReason] = useState('');
  const [confirmationChecked, setConfirmationChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !confirmationChecked) return;

    setIsLoading(true);
    // Simulate backend processing
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 900);
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center space-y-3">
        <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-emerald-950">
          Solicitação de Exclusão Registrada com Sucesso
        </h3>
        <p className="text-sm text-emerald-800 max-w-lg mx-auto">
          Enviamos uma confirmação para <strong>{email}</strong> com o protocolo de segurança.
          Conforme exigido pelo Google Play Console e pela LGPD, sua conta e dados vinculados serão purgados de nossos bancos de dados em até <strong>30 dias corridos</strong>.
        </p>
        <div className="pt-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => {
              setSubmitted(false);
              setEmail('');
              setReason('');
              setConfirmationChecked(false);
            }}
          >
            Enviar outra solicitação
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-5">
      <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm">
        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <strong className="font-bold">Atenção:</strong> A exclusão de conta é permanente e irreversível. Todos os seus favoritos salvos, flags alimentares configuradas e histórico de visitas georreferenciadas serão permanentemente removidos.
        </div>
      </div>

      <div className="space-y-4">
        <Input
          label="E-mail cadastrado no HelpRest"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="exemplo@email.com"
          helperText="O mesmo e-mail utilizado no login tradicional ou Google Sign-In."
        />

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">
            Escopo da Solicitação
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setScope('full')}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                scope === 'full'
                  ? 'border-[#009C9D] bg-[#E6F7F7]/50 ring-2 ring-[#009C9D]/20'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="font-bold text-sm text-slate-900 mb-0.5">Exclusão Total da Conta</div>
              <div className="text-xs text-slate-500">Deleta login, perfil, restrições, fotos e histórico completo.</div>
            </button>
            <button
              type="button"
              onClick={() => setScope('data-only')}
              className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                scope === 'data-only'
                  ? 'border-[#009C9D] bg-[#E6F7F7]/50 ring-2 ring-[#009C9D]/20'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="font-bold text-sm text-slate-900 mb-0.5">Exclusão Apenas de Dados</div>
              <div className="text-xs text-slate-500">Mantém a conta ativa, mas limpa histórico de GPS e avaliações.</div>
            </button>
          </div>
        </div>

        <Textarea
          label="Motivo da solicitação (opcional)"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Conte-nos brevemente o motivo para nos ajudar a melhorar o app..."
          rows={3}
        />

        <div className="flex items-start gap-2.5 pt-1">
          <input
            id="confirm-delete"
            type="checkbox"
            required
            checked={confirmationChecked}
            onChange={(e) => setConfirmationChecked(e.target.checked)}
            className="w-4 h-4 mt-0.5 text-[#009C9D] rounded border-slate-300 focus:ring-[#009C9D] cursor-pointer"
          />
          <label htmlFor="confirm-delete" className="text-xs text-slate-600 leading-normal cursor-pointer select-none">
            Confirmo que sou o titular da conta informada e estou ciente de que todos os dados vinculados serão definitivamente excluídos no prazo máximo de 30 dias.
          </label>
        </div>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-slate-400 inline-flex items-center gap-1">
          <ShieldAlert className="w-3.5 h-3.5" /> Google Play Policy Compliance & LGPD Art. 18
        </span>
        <Button
          type="submit"
          variant="secondary"
          isLoading={isLoading}
          disabled={!email || !confirmationChecked}
          className="bg-rose-700 hover:bg-rose-800 text-white w-full sm:w-auto"
        >
          Confirmar Solicitação de Exclusão
        </Button>
      </div>
    </form>
  );
};
