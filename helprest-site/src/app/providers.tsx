'use client';

import React from 'react';
import { ModalProvider } from '../context/ModalContext';

export const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ModalProvider>{children}</ModalProvider>;
};
