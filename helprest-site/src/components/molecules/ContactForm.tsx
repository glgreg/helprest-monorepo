import React, { useState } from 'react';
import { Input, Textarea } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { CheckCircle2, Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('duvida');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 700);
  };

  if (submitted) {
    return (
      <div className="bg-[#E6F7F7] border border-[#009C9D]/30 rounded-2xl p-6 sm:p-8 text-center space-y-3">
        <div className="w-12 h-12 bg-[#009C9D] text-white rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">
          Mensagem Enviada com Sucesso!
        </h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto">
          Obrigado pelo contato, <strong>{name}</strong>! Nossa equipe de suporte responderá ao e-mail <strong>{email}</strong> em até 24 horas úteis.
        </p>
        <div className="pt-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => {
              setSubmitted(false);
              setName('');
              setEmail('');
              setMessage('');
            }}
          >
            Enviar outra mensagem
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
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
        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
          Assunto
        </label>
        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#009C9D]/20 focus:border-[#009C9D] transition-colors"
        >
          <option value="duvida">Dúvida sobre o Aplicativo</option>
          <option value="restaurante">Cadastro de Restaurante / Empresa</option>
          <option value="seguranca">Privacidade e Proteção de Dados</option>
          <option value="feedback">Sugestão de Restrição ou Melhoria</option>
          <option value="outro">Outro Assunto</option>
        </select>
      </div>

      <Textarea
        label="Mensagem"
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Escreva sua dúvida, sugestão ou detalhe do seu estabelecimento..."
        rows={4}
      />

      <div className="pt-2 flex justify-end">
        <Button
          type="submit"
          variant="primary"
          isLoading={isLoading}
          iconRight={<Send className="w-4 h-4" />}
          className="w-full sm:w-auto"
        >
          Enviar Mensagem
        </Button>
      </div>
    </form>
  );
};
