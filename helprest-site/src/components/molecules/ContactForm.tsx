import React, { useId, useRef, useState } from 'react';
import { Input, Textarea } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { CheckCircle2, Mail, Copy, Send } from 'lucide-react';

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('duvida');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [liveStatus, setLiveStatus] = useState('');
  const [ticketId, setTicketId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const subjectId = useId();
  const subjectHintId = useId();

  const subjectLabels: Record<string, string> = {
    duvida: 'Dúvida sobre o Aplicativo',
    restaurante: 'Cadastro de Estabelecimento / Parceria',
    ugc: 'Denúncia de Conteúdo / Cardápio Incorreto',
    seguranca: 'Privacidade e Proteção de Dados',
    outro: 'Outro Assunto',
  };

  const validateField = (field: keyof FieldErrors, value: string): string | undefined => {
    const trimmed = value.trim();
    if (field === 'name') {
      return trimmed.length < 2 ? 'Informe seu nome completo.' : undefined;
    }
    if (field === 'email') {
      return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)
        ? 'Informe um e-mail no formato voce@exemplo.com.'
        : undefined;
    }
    if (field === 'message') {
      return trimmed.length < 5 ? 'Descreva brevemente sua dúvida ou solicitação.' : undefined;
    }
    return undefined;
  };

  const handleBlur = (field: keyof FieldErrors, value: string) => {
    if (!value.trim()) return;
    const msg = validateField(field, value);
    setErrors((prev) => ({ ...prev, [field]: msg }));
    if (msg) setLiveStatus(msg);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: FieldErrors = {
      name: validateField('name', name),
      email: validateField('email', email),
      message: validateField('message', message),
    };
    setErrors(nextErrors);

    if (nextErrors.name) {
      nameRef.current?.focus();
      return;
    }
    if (nextErrors.email) {
      emailRef.current?.focus();
      return;
    }
    if (nextErrors.message) {
      messageRef.current?.focus();
      return;
    }

    const stamp = Date.now().toString(36).toUpperCase().slice(-5);
    const id = `HR-${stamp}`;
    setTicketId(id);
    setCopied(false);
    setLiveStatus(`Atendimento ${id} preparado para envio.`);
  };

  const ticketBody = [
    `Protocolo: ${ticketId || 'Rascunho'}`,
    `Nome: ${name}`,
    `E-mail para resposta: ${email}`,
    `Assunto: ${subjectLabels[subject] || subject}`,
    `Aplicativo: HelpRest (com.gustavo_lg.helprest)`,
    '',
    'Mensagem:',
    message,
  ].join('\n');

  const mailtoUrl = `mailto:suporte@helprest.com?subject=${encodeURIComponent(
    `[HelpRest Suporte • ${ticketId}] ${subjectLabels[subject] || subject}`
  )}&body=${encodeURIComponent(ticketBody)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ticketBody);
      setCopied(true);
      setLiveStatus('Resumo copiado para a área de transferência.');
    } catch {
      setCopied(false);
    }
  };

  if (ticketId) {
    return (
      <div className="tonal-surface bg-[#E9F3F2] rounded-2xl p-6 sm:p-7 space-y-4">
        <div role="status" aria-live="polite" className="visually-hidden">
          {liveStatus}
        </div>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-[#007677] text-white rounded-full flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#181C1B]">
              Atendimento preparado ({ticketId})
            </h3>
            <p className="text-sm text-[#3A413F] mt-1 leading-relaxed">
              Envie a mensagem preenchida pelo seu aplicativo de e-mail para{' '}
              <a
                href="mailto:suporte@helprest.com"
                className="font-semibold text-[#00696A] hover:underline"
              >
                suporte@helprest.com
              </a>{' '}
              ou copie o resumo abaixo.
            </p>
          </div>
        </div>

        <pre className="bg-white rounded-xl p-4 text-xs font-mono text-[#181C1B] whitespace-pre-wrap break-words">
          {ticketBody}
        </pre>

        <div className="flex flex-wrap items-center gap-3">
          <a href={mailtoUrl}>
            <Button
              type="button"
              variant="primary"
              size="md"
              iconLeft={<Mail className="w-4 h-4" aria-hidden="true" />}
            >
              Abrir no Aplicativo de E-mail
            </Button>
          </a>
          <Button
            type="button"
            variant="outline"
            size="md"
            onClick={handleCopy}
            iconLeft={<Copy className="w-4 h-4" aria-hidden="true" />}
          >
            {copied ? 'Copiado!' : 'Copiar Mensagem'}
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => {
              setTicketId(null);
              setCopied(false);
            }}
          >
            Editar rascunho
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="tonal-surface bg-[#F4F6F5] rounded-2xl p-6 sm:p-7 space-y-5"
    >
      <div role="status" aria-live="polite" className="visually-hidden">
        {liveStatus}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          ref={nameRef}
          name="full_name"
          label="Seu nome completo"
          required
          autoComplete="name"
          enterKeyHint="next"
          value={name}
          error={errors.name}
          onBlur={() => handleBlur('name', name)}
          onChange={(e) => {
            const val = e.target.value;
            setName(val);
            if (errors.name && !validateField('name', val)) {
              setErrors((prev) => ({ ...prev, name: undefined }));
            }
          }}
          placeholder="Ex.: Ana Silva"
        />
        <Input
          ref={emailRef}
          name="email"
          label="Seu e-mail"
          type="email"
          required
          autoComplete="email"
          autoCorrect="off"
          autoCapitalize="none"
          spellCheck={false}
          enterKeyHint="next"
          helperText="Usaremos apenas para responder este atendimento."
          value={email}
          error={errors.email}
          onBlur={() => handleBlur('email', email)}
          onChange={(e) => {
            const val = e.target.value;
            setEmail(val);
            if (errors.email && !validateField('email', val)) {
              setErrors((prev) => ({ ...prev, email: undefined }));
            }
          }}
          placeholder="voce@exemplo.com"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor={subjectId} className="block text-sm font-medium text-[#181C1B]">
          Assunto
        </label>
        <p id={subjectHintId} className="text-xs text-[#525B58] leading-snug">
          Direciona o atendimento para a fila correta.
        </p>
        <select
          id={subjectId}
          name="subject"
          aria-describedby={subjectHintId}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="hr-field-control w-full rounded-xl border border-[#747D7B] bg-white px-4 py-2.5 text-[#181C1B] hover:border-[#181C1B] focus:border-[#007677] transition-colors"
        >
          <option value="duvida">Dúvida sobre o Aplicativo</option>
          <option value="restaurante">Cadastro de Estabelecimento / Parceria</option>
          <option value="ugc">Denúncia de Conteúdo / Cardápio Incorreto</option>
          <option value="seguranca">Privacidade e Proteção de Dados</option>
          <option value="outro">Outro Assunto</option>
        </select>
      </div>

      <Textarea
        ref={messageRef}
        name="message"
        label="Mensagem"
        required
        enterKeyHint="done"
        value={message}
        error={errors.message}
        onBlur={() => handleBlur('message', message)}
        onChange={(e) => {
          const val = e.target.value;
          setMessage(val);
          if (errors.message && !validateField('message', val)) {
            setErrors((prev) => ({ ...prev, message: undefined }));
          }
        }}
        placeholder="Descreva sua dúvida, reporte uma avaliação ou solicite apoio para seu restaurante..."
        rows={4}
      />

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <span className="text-xs text-[#525B58]">Canal direto: suporte@helprest.com</span>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          iconRight={<Send className="w-4 h-4" aria-hidden="true" />}
          className="w-full sm:w-auto"
        >
          Preparar Atendimento
        </Button>
      </div>
    </form>
  );
};
