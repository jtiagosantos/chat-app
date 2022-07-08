import styled from 'styled-components';
import { animated } from 'react-spring';
import { X } from 'phosphor-react';

//types
import { ContainerProps } from './types';

export const Container = styled(animated.div)<ContainerProps>`
  max-width: 370px;
  width: 100%;
  height: 65px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  border-radius: 5px;
  background-color: ${({ theme, messagetype }) => theme.colors.toast[messagetype]};
  padding-left: 10px;

  display: flex;
  align-items: center;

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.white};
    margin-left: 5px;
  }
`;

export const CloseToastIcon = styled(X)`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;