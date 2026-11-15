import React, { useState } from 'react';
import { Input, Textarea } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { CheckCircle2, Mail, Copy, Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('duvida');
  const [message, setMessage] = useState('');
  const [ticketId, setTicketId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const subjectLabels: Record<string, string> = {
    duvida: 'Dúvida sobre o Aplicativo',
    restaurante: 'Cadastro de Estabelecimento / Parceria',
    ugc: 'Denúncia de Conteúdo / Cardápio Incorreto',
    seguranca: 'Privacidade e Proteção de Dados',
    outro: 'Outro Assunto',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    const stamp = Date.now().toString(36).toUpperCase().slice(-5);
    setTicketId(`HR-${stamp}`);
    setCopied(false);
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
    } catch {
      setCopied(false);
    }
  };

  if (ticketId) {
    return (
      <div className="bg-[#F4FDFB] border border-[#B2DFDB] rounded-2xl p-6 sm:p-8 space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-[#009C9D] text-white rounded-full flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#11181C]">
              Atendimento Preparado ({ticketId})
            </h3>
            <p className="text-sm text-[#687076] mt-1">
              Envie a mensagem preenchida pelo seu aplicativo de e-mail para{' '}
              <a
                href="mailto:suporte@helprest.com"
                className="font-bold text-[#007E7F] hover:underline"
              >
                suporte@helprest.com
              </a>{' '}
              ou copie o resumo abaixo.
            </p>
          </div>
        </div>

        <pre className="bg-white border border-[#EAEAEA] rounded-xl p-4 text-xs font-mono text-[#333333] whitespace-pre-wrap break-words">
          {ticketBody}
        </pre>

        <div className="flex flex-wrap items-center gap-3">
          <a href={mailtoUrl}>
            <Button type="button" variant="primary" size="md" iconLeft={<Mail className="w-4 h-4" />}>
              Abrir no Aplicativo de E-mail
            </Button>
          </a>
          <Button
            type="button"
            variant="outline"
            size="md"
            onClick={handleCopy}
            iconLeft={<Copy className="w-4 h-4" />}
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
      className="bg-white border border-[#EAEAEA] rounded-2xl p-6 sm:p-8 space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Seu Nome Completo"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ex: Ana Silva"
        />
        <Input
          label="Seu E-mail"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="exemplo@email.com"
        />
      </div>

      <div>
        <label htmlFor="support-subject" className="block text-xs font-bold text-[#11181C] mb-1.5">
          Assunto
        </label>
        <select
          id="support-subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full rounded-xl border border-[#DDDDDD] bg-white px-4 py-2.5 text-sm text-[#11181C] focus:outline-none focus:ring-2 focus:ring-[#009C9D]/20 focus:border-[#009C9D] transition-colors"
        >
          <option value="duvida">Dúvida sobre o Aplicativo</option>
          <option value="restaurante">Cadastro de Estabelecimento / Parceria</option>
          <option value="ugc">Denúncia de Conteúdo / Cardápio Incorreto</option>
          <option value="seguranca">Privacidade e Proteção de Dados</option>
          <option value="outro">Outro Assunto</option>
        </select>
      </div>

      <Textarea
        label="Mensagem"
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Descreva sua dúvida, reporte uma avaliação ou solicite apoio para seu restaurante..."
        rows={4}
      />

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <span className="text-xs text-[#687076]">
          Canal direto: suporte@helprest.com
        </span>
        <Button
          type="submit"
          variant="primary"
          iconRight={<Send className="w-4 h-4" />}
          className="w-full sm:w-auto"
        >
          Preparar Atendimento
        </Button>
      </div>
    </form>
  );
};
