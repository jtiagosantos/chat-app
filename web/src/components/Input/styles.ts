import styled from 'styled-components';
import { InputElementProps, ContainerProps } from './types';

export const Container = styled.div<ContainerProps>`
  max-width: ${({ styles }) => styles.width};
  width: 100%;
`;

export const InputElement = styled.input<InputElementProps>`
  width: 100%;
  height: ${({ styles }) => styles.height};
  background-color: ${({ theme }) => theme.colors.dimgray};
  border: 1px solid gray;
  border-radius: 8px;

  margin: ${({ styles }) => styles.margin || 0};
  margin-top: ${({ styles }) => styles.marginTop || 0};
  margin-bottom: ${({ styles }) => styles.marginBottom || 0};
  margin-right: ${({ styles }) => styles.marginRight || 0};
  margin-left: ${({ styles }) => styles.marginLeft || 0};

  padding: ${({ styles }) => styles.padding || 0} !important;
  padding-top: ${({ styles }) => styles.paddingTop || 0};
  padding-bottom: ${({ styles }) => styles.paddingBottom || 0};
  padding-right: ${({ styles }) => styles.paddingRight || 0};
  padding-left: ${({ styles }) => styles.paddingLeft || 0};

  color: ${({ styles }) => styles.textColor};
  font-size: ${({ styles }) => styles.fontSize};

  &::placeholder {
    color: ${({ styles }) => styles.placeholderColor};
  }
`;