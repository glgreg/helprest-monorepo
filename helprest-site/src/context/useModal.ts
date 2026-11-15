import { createContext, useContext } from 'react';

export interface ModalContextType {
  openDownloadModal: () => void;
  closeDownloadModal: () => void;
}

export const ModalContext = createContext<ModalContextType>({
  openDownloadModal: () => {},
  closeDownloadModal: () => {},
});

export const useModal = () => useContext(ModalContext);
