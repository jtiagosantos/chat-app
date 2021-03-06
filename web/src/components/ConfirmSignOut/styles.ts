import styled, { keyframes } from 'styled-components';

const zoomIn = keyframes`
  0% {
    transform: scale(0.7);
  }

  100% {
    transform: scale(1);
  }
`;

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
  }
`;