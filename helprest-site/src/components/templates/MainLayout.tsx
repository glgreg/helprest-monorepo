import React from 'react';
import { Navbar } from '../organisms/Navbar';
import { Footer } from '../organisms/Footer';

export interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#181C1B] font-sans">
      <a
        href="#main-content"
        className="visually-hidden fixed top-3 start-3 z-50 rounded-full bg-[#007677] px-4 py-2.5 text-sm font-semibold text-white shadow-lg"
      >
        Ir para o conteúdo principal
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        {children}
      </main>
      <Footer />
    </div>
  );
};
