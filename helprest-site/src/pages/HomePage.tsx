import React from 'react';
import { MainLayout } from '../components/templates/MainLayout';
import { HeroSection } from '../components/organisms/HeroSection';
import { InteractiveSimulator } from '../components/organisms/InteractiveSimulator';
import { HowItWorksSection } from '../components/organisms/HowItWorksSection';
import { AppFeaturesSection } from '../components/organisms/AppFeaturesSection';
import { ForEstablishmentsSection } from '../components/organisms/ForEstablishmentsSection';
import { ReviewsSection } from '../components/organisms/ReviewsSection';
import { DataSafetyHighlightSection } from '../components/organisms/DataSafetyHighlightSection';
import { FaqSection } from '../components/organisms/FaqSection';
import { DownloadCtaSection } from '../components/organisms/DownloadCtaSection';

export const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <HeroSection />
      <InteractiveSimulator />
      <HowItWorksSection />
      <AppFeaturesSection />
      <ForEstablishmentsSection />
      <ReviewsSection />
      <DataSafetyHighlightSection />
      <FaqSection />
      <DownloadCtaSection />
    </MainLayout>
  );
};
