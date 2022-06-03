import styled, { keyframes } from 'styled-components';
import { LoadingProps } from './types';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Loading = styled.div<LoadingProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border: ${(
    { borderSize, secondaryColor }) => 
    `${borderSize}px solid ${secondaryColor}`
  };
  border-top-color: ${(props) => props.primaryColor};
  border-right-color: ${(props) => props.primaryColor};
  border-bottom-color: ${(props) => props.primaryColor};
  border-radius: 100%;
  animation: ${rotate} 0.7s infinite linear;
`;