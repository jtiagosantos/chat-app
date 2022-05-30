import { PropsWithChildren } from 'react';

export interface ModalHandler {
  open: () => void;
  close: () => void;
}

export type ModalProps = PropsWithChildren<unknown>;