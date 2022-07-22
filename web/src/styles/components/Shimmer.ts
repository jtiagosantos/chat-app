import styled, { keyframes } from 'styled-components';

interface ShimmerProps {
  width: string;
  height: string;
}

const shimmerEffect = keyframes`
  0% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
`;

export const Shimmer = styled.div<ShimmerProps>`
  max-width: ${({ width }) => width};
  width: 100%;
  height: ${({ height }) => height};
  background: ${({ theme }) => theme.colors.dimgray};
  animation: ${shimmerEffect} 500ms infinite alternate;
`;