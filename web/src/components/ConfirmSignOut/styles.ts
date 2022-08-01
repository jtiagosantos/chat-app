import styled from 'styled-components';
import { zoomIn } from '@/styles/animations/zoomIn';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.woodsmoke};
  border-radius: 8px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  animation: ${zoomIn} 200ms ease;

  h1 {
    color: ${({ theme }) => theme.colors.lightgray};
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 1rem;
  }
`;

export const Actions = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  svg {
    cursor: pointer;

    transition: filter 0.2ms;

    &:hover {
      filter: brightness(0.8);
    }

    &:first-of-type {
      opacity: 0.7;
    }
  }
`;