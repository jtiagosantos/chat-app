import styled from 'styled-components';
import { slide } from '@/styles/animations/slide';

export const Container = styled.div`
  max-width: 350px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  &.opening-form {
    animation: ${slide} .9s ease;
  }

  &.closing-form {
    animation: ${slide} .9s ease reverse;
  }
`;