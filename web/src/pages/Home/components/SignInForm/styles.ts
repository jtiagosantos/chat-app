import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled(animated.div)`
  width: 100%;
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