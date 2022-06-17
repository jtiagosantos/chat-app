import styled from 'styled-components';
import { slideForm } from '@/styles/animations/slideForm';

export const Container = styled.div`
  max-width: 350px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  &.showing-button-group {
    animation: ${slideForm} .9s ease;
  }

  &.hiding-button-group {
    animation: ${slideForm} .9s ease reverse;
  }
`;