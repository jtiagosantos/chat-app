import styled from 'styled-components';
import { animated } from 'react-spring';
import { X } from 'phosphor-react';

//types
import { ContainerProps } from './types';

export const Container = styled(animated.div)<ContainerProps>`
  min-width: 370px;
  height: 65px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  border-radius: 5px;
  background-color: ${({ theme, messagetype }) => theme.colors.toast[messagetype]};
  padding-left: 10px;
  padding-right: 30px;

  display: flex;
  align-items: center;

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.white};
    margin-left: 5px;
  }

  @media(max-width: 470px) {
    width: 100%;
    bottom: 0;
    right: 0;
    border-radius: 0;
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