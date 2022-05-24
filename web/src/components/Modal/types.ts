import { ReactNode } from 'react';

export interface ModalHandler {
  open: () => void;
  close: () => void;
}

export interface ModalProps {
  children: ReactNode;
}