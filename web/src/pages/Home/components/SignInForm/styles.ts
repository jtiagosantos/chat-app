import styled from 'styled-components';
import { slideForm } from '@/styles/animations/slideForm';

export const Container = styled.div`
  width: 100%;

  &.opening-form {
    animation: ${slideForm} .9s ease;
  }

  &.closing-form {
    animation: ${slideForm} .9s ease reverse;
  }
`;

export const Actions = styled.div`
  width: 100%;
  margin-top: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.mediumslateblue};

  &:hover {
    filter: brightness(0.9);
  }
`;