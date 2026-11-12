import React from 'react';
import { Container } from '../atoms/Container';
import { Heading2, Paragraph, SectionTag } from '../atoms/Typography';
import { AccordionItem } from '../molecules/Accordion';
import { FAQS } from '../../data/faqs';

export const FaqSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#FAFAFA]">
      <Container size="md">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <SectionTag>Perguntas frequentes</SectionTag>
          <Heading2>Dúvidas comuns sobre o HelpRest</Heading2>
          <Paragraph className="mt-2.5">
            Entenda como funcionam os filtros de restrições, permissões de localização e o cadastro para restaurantes.
          </Paragraph>
        </div>

        <div className="space-y-3">
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
