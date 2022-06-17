import styled from 'styled-components';
import { slideForm } from '@/styles/animations/slideForm';

export const Container = styled.div`
  width: 100%;
  
  &.opening-form {
    animation: ${slideForm} .9s ease;
  }

  &.closing-form {
    animation: ${slideForm} .9s ease reverse;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageProfile = styled.img`
  max-width: 6.25rem;
  height: 6.25rem;
  width: 100%;
  border-radius: 100%;
  color: ${({ theme }) => theme.colors.white};
`;