import React, { useId, useRef, useState } from 'react';
import { Input, Textarea } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { AlertCircle, AlertTriangle, CheckCircle2, Mail, Copy, ShieldCheck } from 'lucide-react';

interface DeletionErrors {
  email?: string;
  confirmation?: string;
}

export const DeleteAccountForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [scope, setScope] = useState<'full' | 'data-only'>('full');
  const [reason, setReason] = useState('');
  const [confirmationChecked, setConfirmationChecked] = useState(false);
  const [errors, setErrors] = useState<DeletionErrors>({});
  const [liveStatus, setLiveStatus] = useState('');
  const [protocolId, setProtocolId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const emailRef = useRef<HTMLInputElement>(null);
  const confirmRef = useRef<HTMLInputElement>(null);
  const confirmId = useId();
  const confirmErrorId = useId();

  const scopeLabel =
    scope === 'full'
      ? 'Exclusão Total da Conta e Dados Vinculados'
      : 'Exclusão Apenas de Dados de Localização e Histórico (manter cadastro)';

  const validateEmail = (val: string): string | undefined => {
    return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim())
      ? 'Informe o e-mail da sua conta no formato voce@exemplo.com.'
      : undefined;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailError = validateEmail(email);
    const confirmationError = confirmationChecked
      ? undefined
      : 'Confirme a titularidade da conta antes de gerar o protocolo.';

    const nextErrors: DeletionErrors = {
      email: emailError,
      confirmation: confirmationError,
    };
    setErrors(nextErrors);

    if (emailError) {
      setLiveStatus(emailError);
      emailRef.current?.focus();
      return;
    }
    if (confirmationError) {
      setLiveStatus(confirmationError);
      confirmRef.current?.focus();
      return;
    }

    const stamp = Date.now().toString(36).toUpperCase().slice(-6);
    const id = `HR-DEL-${stamp}`;
    setProtocolId(id);
    setCopied(false);
    setLiveStatus(`Protocolo ${id} gerado e pronto para envio.`);
  };

  const mailSubject = encodeURIComponent(
    `[HelpRest • ${protocolId || 'LGPD'}] Solicitação de ${
      scope === 'full' ? 'Exclusão Total de Conta' : 'Exclusão de Dados'
    }`
  );

  const requestSummary = [
    `Protocolo de Referência: ${protocolId || 'Pendente'}`,
    `Aplicativo: HelpRest (com.helprest)`,
    `E-mail da conta cadastrada: ${email}`,
    `Tipo de solicitação: ${scopeLabel}`,
    `Motivo informado: ${reason.trim() || 'Não informado'}`,
    `Prazo legal máximo (LGPD): 30 dias corridos após verificação de titularidade.`,
  ].join('\n');

  const mailtoHref = `mailto:privacidade@helprest.net?subject=${mailSubject}&body=${encodeURIComponent(
    requestSummary
  )}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(requestSummary);
      setCopied(true);
      setLiveStatus('Protocolo copiado para a área de transferência.');
    } catch {
      setCopied(false);
    }
  };

  if (protocolId) {
    return (
      <div className="tonal-surface bg-[#EFFBFB] rounded-2xl p-6 sm:p-7 space-y-5">
        <div role="status" aria-live="polite" className="visually-hidden">
          {liveStatus}
        </div>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-[#009C9D] text-[#09181A] rounded-full flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-[#11181C]">
              Resumo da solicitação pronto para envio ({protocolId})
            </h3>
            <p className="text-sm text-[#3F454A] leading-relaxed">
              Para confirmar a titularidade do e-mail <strong>{email}</strong> com segurança, finalize o envio pelo botão abaixo no seu aplicativo de e-mail ou envie o texto para{' '}
              <a
                href="mailto:privacidade@helprest.net"
                className="font-semibold text-[#00797A] hover:underline"
              >
                privacidade@helprest.net
              </a>
              .
            </p>
          </div>
        </div>

        <pre className="bg-white rounded-xl p-4 text-xs font-mono text-[#11181C] whitespace-pre-wrap break-words">
          {requestSummary}
        </pre>

        <div className="flex flex-wrap items-center gap-3">
          <a href={mailtoHref}>
            <Button
              type="button"
              variant="primary"
              size="md"
              iconLeft={<Mail className="w-4 h-4" aria-hidden="true" />}
            >
              Abrir E-mail Oficial de Exclusão
            </Button>
          </a>
          <Button
            type="button"
            variant="outline"
            size="md"
            onClick={handleCopy}
            iconLeft={<Copy className="w-4 h-4" aria-hidden="true" />}
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

        <p className="text-xs text-[#596168]">
          Após o recebimento da mensagem a partir do endereço titular, o atendimento e o expurgo seguem o prazo máximo de 30 dias corridos conforme a LGPD (Art. 18).
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="tonal-surface bg-[#F7F7F8] rounded-2xl p-6 sm:p-7 space-y-5"
    >
      <div role="status" aria-live="polite" className="visually-hidden">
        {liveStatus}
      </div>

      {/* Crisp straight left accent border without curved AI hooks */}
      <div className="flex items-start gap-3 p-4 rounded-e-xl border-s-[3px] border-[#B42318] bg-[#FDF1EF] text-[#7A271A] text-xs sm:text-sm leading-relaxed">
        <AlertTriangle className="w-5 h-5 text-[#B42318] flex-shrink-0 mt-0.5" aria-hidden="true" />
        <div>
          <strong className="font-bold">Atenção:</strong> A exclusão definitiva da conta remove de forma irreversível suas credenciais, restrições configuradas, favoritos e dados pessoais associados.
        </div>
      </div>

      <div className="space-y-5">
        <Input
          ref={emailRef}
          name="account_email"
          label="E-mail cadastrado no HelpRest"
          type="email"
          required
          autoComplete="email"
          autoCorrect="off"
          autoCapitalize="none"
          spellCheck={false}
          enterKeyHint="next"
          value={email}
          error={errors.email}
          onBlur={() => {
            if (!email.trim()) return;
            const err = validateEmail(email);
            setErrors((prev) => ({ ...prev, email: err }));
            if (err) setLiveStatus(err);
          }}
          onChange={(e) => {
            const val = e.target.value;
            setEmail(val);
            if (errors.email && !validateEmail(val)) {
              setErrors((prev) => ({ ...prev, email: undefined }));
            }
          }}
          placeholder="voce@exemplo.com"
          helperText="Informe o mesmo e-mail utilizado no login tradicional ou no Google Sign-In."
        />

        <fieldset className="space-y-2.5">
          <legend className="text-sm font-medium text-[#11181C]">
            Escopo da solicitação
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label
              className={`tonal-surface flex items-start gap-3 p-4 rounded-xl cursor-pointer transition-colors ${
                scope === 'full'
                  ? 'bg-[#EFFBFB] ring-2 ring-[#009C9D]'
                  : 'bg-white hover:bg-[#F1F2F4]'
              }`}
            >
              <input
                type="radio"
                name="deletion_scope"
                value="full"
                checked={scope === 'full'}
                onChange={() => setScope('full')}
                className="mt-0.5 h-4 w-4 accent-[#009C9D] flex-shrink-0 cursor-pointer"
              />
              <div>
                <div className="font-bold text-sm text-[#11181C]">
                  Exclusão total da conta
                </div>
                <div className="text-xs text-[#596168] mt-0.5 leading-snug">
                  Remove login, perfil, restrições, favoritos e histórico vinculado.
                </div>
              </div>
            </label>

            <label
              className={`tonal-surface flex items-start gap-3 p-4 rounded-xl cursor-pointer transition-colors ${
                scope === 'data-only'
                  ? 'bg-[#EFFBFB] ring-2 ring-[#009C9D]'
                  : 'bg-white hover:bg-[#F1F2F4]'
              }`}
            >
              <input
                type="radio"
                name="deletion_scope"
                value="data-only"
                checked={scope === 'data-only'}
                onChange={() => setScope('data-only')}
                className="mt-0.5 h-4 w-4 accent-[#009C9D] flex-shrink-0 cursor-pointer"
              />
              <div>
                <div className="font-bold text-sm text-[#11181C]">
                  Apenas dados e histórico
                </div>
                <div className="text-xs text-[#596168] mt-0.5 leading-snug">
                  Limpa registros de visitas e localização mantendo a conta cadastral ativa.
                </div>
              </div>
            </label>
          </div>
        </fieldset>

        <Textarea
          name="reason"
          label="Observações adicionais (opcional)"
          enterKeyHint="done"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Se desejar, informe detalhes sobre o pedido ou feedback de melhoria..."
          rows={3}
        />

        <div className="space-y-1.5">
          <div className="flex items-start gap-3">
            <input
              ref={confirmRef}
              id={confirmId}
              name="confirm_delete"
              type="checkbox"
              required
              checked={confirmationChecked}
              aria-invalid={errors.confirmation ? 'true' : 'false'}
              aria-describedby={errors.confirmation ? confirmErrorId : undefined}
              onChange={(e) => {
                const checked = e.target.checked;
                setConfirmationChecked(checked);
                if (checked && errors.confirmation) {
                  setErrors((prev) => ({ ...prev, confirmation: undefined }));
                }
              }}
              className="w-5 h-5 mt-0.5 accent-[#009C9D] rounded border-[#717880] cursor-pointer flex-shrink-0"
            />
            <label
              htmlFor={confirmId}
              className="text-xs sm:text-sm text-[#3F454A] leading-snug cursor-pointer select-none py-0.5"
            >
              Confirmo que sou o titular da conta informada e estou ciente de que os dados solicitados serão removidos ou anonimizados definitivamente em até 30 dias.{' '}
              <span className="text-[#B42318]" aria-hidden="true">
                *
              </span>
            </label>
          </div>
          {errors.confirmation && (
            <p
              id={confirmErrorId}
              className="flex items-center gap-1.5 text-xs text-[#B42318] font-medium ps-8"
            >
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
              <span>{errors.confirmation}</span>
            </p>
          )}
        </div>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs text-[#596168] inline-flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#00797A]" aria-hidden="true" />
          <span>privacidade@helprest.net · LGPD Art. 18</span>
        </span>
        <Button type="submit" variant="danger" size="lg" className="w-full sm:w-auto">
          Gerar Protocolo de Exclusão
        </Button>
      </div>
    </form>
  );
};
