import styled from 'styled-components';
import { XCircle } from 'phosphor-react';

export const CloseFormButton = styled(XCircle)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 30px;
  margin-bottom: 1.5rem;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`;