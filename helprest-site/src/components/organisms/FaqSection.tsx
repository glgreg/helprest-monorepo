import React from 'react';
import { Container } from '../atoms/Container';
import { Heading2, Paragraph, SectionTag } from '../atoms/Typography';
import { AccordionItem } from '../molecules/Accordion';
import { FAQS } from '../../data/faqs';
import { HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80">
      <Container size="md">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <SectionTag>
            <HelpCircle className="w-3.5 h-3.5" />
            Tire Suas Dúvidas
          </SectionTag>
          <Heading2>
            Perguntas Frequentes sobre o HelpRest
          </Heading2>
          <Paragraph className="mt-3">
            Tudo o que você precisa saber sobre funcionamento, cozinhas auditadas, privacidade e cadastro de restaurantes.
          </Paragraph>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              defaultOpen={index === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
