import {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useState,
} from 'react';

//types
import { ModalHandler, ModalProps } from './types';

//styles
import { Container } from './styles';

const ImperativeModal: ForwardRefRenderFunction<ModalHandler, ModalProps> = (
  { children },
  ref,
) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setIsModalOpen(true),
    close: () => setIsModalOpen(false),
  }));

  if (!isModalOpen) return null;

  return <Container>{children}</Container>;
};

export const Modal = forwardRef(ImperativeModal);