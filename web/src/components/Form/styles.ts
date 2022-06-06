import styled from 'styled-components';
import { ContainerProps } from './types';

export const Container = styled.form<ContainerProps>`
  max-width: ${({ styles }) => styles.width};
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

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
`;