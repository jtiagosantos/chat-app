import styled from 'styled-components';
import { XCircle } from 'phosphor-react';

export const Wrapper = styled.div`
  max-width: 350px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const CloseIcon = styled(XCircle)`
  margin-bottom: 1.5rem;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`;