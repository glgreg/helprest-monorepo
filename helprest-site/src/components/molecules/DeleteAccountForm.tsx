import React, { useState } from 'react';
import { Input, Textarea } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { AlertTriangle, CheckCircle2, Mail, Copy, ShieldCheck } from 'lucide-react';

export const DeleteAccountForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [scope, setScope] = useState<'full' | 'data-only'>('full');
  const [reason, setReason] = useState('');
  const [confirmationChecked, setConfirmationChecked] = useState(false);
  const [protocolId, setProtocolId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const scopeLabel =
    scope === 'full'
      ? 'Exclusão Total da Conta e Dados Vinculados'
      : 'Exclusão Apenas de Dados de Localização e Histórico (manter cadastro)';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !confirmationChecked) return;
    const stamp = Date.now().toString(36).toUpperCase().slice(-6);
    setProtocolId(`HR-DEL-${stamp}`);
    setCopied(false);
  };

  const mailSubject = encodeURIComponent(
    `[HelpRest • ${protocolId || 'LGPD'}] Solicitação de ${scope === 'full' ? 'Exclusão Total de Conta' : 'Exclusão de Dados'}`
  );

  const requestSummary = [
    `Protocolo de Referência: ${protocolId || 'Pendente'}`,
    `Aplicativo: HelpRest (com.gustavo_lg.helprest)`,
    `E-mail da conta cadastrada: ${email}`,
    `Tipo de solicitação: ${scopeLabel}`,
    `Motivo informado: ${reason.trim() || 'Não informado'}`,
    `Prazo legal máximo (LGPD): 30 dias corridos após verificação de titularidade.`,
  ].join('\n');

  const mailtoHref = `mailto:privacidade@helprest.com?subject=${mailSubject}&body=${encodeURIComponent(requestSummary)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(requestSummary);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  if (protocolId) {
    return (
      <div className="bg-white border border-[#B2DFDB] rounded-2xl p-6 sm:p-8 space-y-5">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-[#E0F2F1] text-[#007E7F] rounded-full flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-[#11181C]">
              Resumo da Solicitação Pronto para Envio ({protocolId})
            </h3>
            <p className="text-sm text-[#687076] leading-relaxed">
              Para confirmar a titularidade do e-mail <strong>{email}</strong> com segurança, finalize o envio pelo botão abaixo no seu aplicativo de e-mail ou envie o texto para{' '}
              <a
                href="mailto:privacidade@helprest.com"
                className="font-bold text-[#007E7F] hover:underline"
              >
                privacidade@helprest.com
              </a>
              .
            </p>
          </div>
        </div>

        <pre className="bg-[#FAFAFA] border border-[#EAEAEA] rounded-xl p-4 text-xs font-mono text-[#333333] whitespace-pre-wrap break-words">
          {requestSummary}
        </pre>

        <div className="flex flex-wrap items-center gap-3">
          <a href={mailtoHref}>
            <Button type="button" variant="primary" size="md" iconLeft={<Mail className="w-4 h-4" />}>
              Abrir E-mail Oficial de Exclusão
            </Button>
          </a>
          <Button
            type="button"
            variant="outline"
            size="md"
            onClick={handleCopy}
            iconLeft={<Copy className="w-4 h-4" />}
          >
            {copied ? 'Texto Copiado!' : 'Copiar Protocolo'}
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => {
              setProtocolId(null);
              setCopied(false);
            }}
          >
            Editar dados
          </Button>
        </div>

        <p className="text-xs text-[#687076]">
          Após o recebimento da mensagem a partir do endereço titular, o atendimento e o expurgo seguem o prazo máximo de 30 dias corridos conforme a LGPD (Art. 18).
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-[#EAEAEA] rounded-2xl p-6 sm:p-8 space-y-5"
    >
      <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FEF9E7] border border-[#F9E6A2] text-[#735107] text-xs sm:text-sm">
        <AlertTriangle className="w-5 h-5 text-[#D4A710] flex-shrink-0 mt-0.5" />
        <div>
          <strong className="font-bold">Atenção:</strong> A exclusão definitiva da conta remove de forma irreversível suas credenciais, restrições configuradas, favoritos e dados pessoais associados.
        </div>
      </div>

      <div className="space-y-4">
        <Input
          label="E-mail cadastrado no HelpRest"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu.email@exemplo.com"
          helperText="Informe o mesmo e-mail utilizado no login tradicional ou no Google Sign-In."
        />

        <div>
          <label className="block text-xs font-bold text-[#11181C] mb-2">
            Escopo da Solicitação
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setScope('full')}
              className={`p-3.5 rounded-xl border text-left transition-colors cursor-pointer ${
                scope === 'full'
                  ? 'border-[#009C9D] bg-[#F4FDFB]'
                  : 'border-[#DDDDDD] hover:border-[#BDBDBD]'
              }`}
            >
              <div className="font-bold text-sm text-[#11181C] mb-0.5">
                Exclusão Total da Conta
              </div>
              <div className="text-xs text-[#687076]">
                Remove login, perfil, restrições, favoritos e histórico vinculado.
              </div>
            </button>

            <button
              type="button"
              onClick={() => setScope('data-only')}
              className={`p-3.5 rounded-xl border text-left transition-colors cursor-pointer ${
                scope === 'data-only'
                  ? 'border-[#009C9D] bg-[#F4FDFB]'
                  : 'border-[#DDDDDD] hover:border-[#BDBDBD]'
              }`}
            >
              <div className="font-bold text-sm text-[#11181C] mb-0.5">
                Exclusão Apenas de Dados / Histórico
              </div>
              <div className="text-xs text-[#687076]">
                Limpa registros de visitas e localização mantendo a conta cadastral ativa.
              </div>
            </button>
          </div>
        </div>

        <Textarea
          label="Observações adicionais (opcional)"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Se desejar, informe detalhes sobre o pedido ou feedback de melhoria..."
          rows={3}
        />

        <div className="flex items-start gap-2.5 pt-1">
          <input
            id="confirm-delete"
            type="checkbox"
            required
            checked={confirmationChecked}
            onChange={(e) => setConfirmationChecked(e.target.checked)}
            className="w-4 h-4 mt-0.5 accent-[#009C9D] rounded border-[#DDDDDD] cursor-pointer"
          />
          <label
            htmlFor="confirm-delete"
            className="text-xs text-[#687076] leading-normal cursor-pointer select-none"
          >
            Confirmo que sou o titular da conta informada e estou ciente de que os dados solicitados serão removidos ou anonimizados definitivamente em até 30 dias.
          </label>
        </div>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-[#687076] inline-flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#009C9D]" />
          <span>privacidade@helprest.com • LGPD Art. 18</span>
        </span>
        <Button
          type="submit"
          variant="danger"
          disabled={!email || !confirmationChecked}
          className="w-full sm:w-auto"
        >
          Gerar Protocolo de Exclusão
        </Button>
      </div>
    </form>
  );
};
