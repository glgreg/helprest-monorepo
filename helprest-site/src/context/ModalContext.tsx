import React, { useState } from 'react';
import { DownloadModal } from '../components/molecules/DownloadModal';
import { ModalContext } from './useModal';

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        openDownloadModal: () => setIsOpen(true),
        closeDownloadModal: () => setIsOpen(false),
      }}
    >
      {children}
      <DownloadModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ModalContext.Provider>
  );
};
