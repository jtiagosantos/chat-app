import styled from "styled-components";
import { ContainerProps } from './types';

export const Container = styled.button<ContainerProps>`
  max-width: ${({ styles }) => styles.width};
  height: ${({ styles }) => styles.height};
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  margin: ${({ styles }) => styles.margin || 0};
  margin-top: ${({ styles }) => styles.marginTop || 0};
  margin-bottom: ${({ styles }) => styles.marginBottom || 0};
  margin-right: ${({ styles }) => styles.marginRight || 0};
  margin-left: ${({ styles }) => styles.marginLeft || 0};

  background-color: ${({ theme }) => theme.colors.mediumslateblue};
  border-radius: 8px;

  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white};

  transition: filter 0.2ms;

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;